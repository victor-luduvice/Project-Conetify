import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { z } from 'zod'

import { contactSchema } from '@/lib/validators'

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null
const limiter = new Map<string, { count: number; resetAt: number }>()

function sanitize(value: string | undefined) {
  return (value ?? '').trim().replace(/\s+/g, ' ')
}

function getClientIp(request: NextRequest) {
  return request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'anonymous'
}

function checkRateLimit(ip: string) {
  const now = Date.now()
  const current = limiter.get(ip)

  if (!current || current.resetAt < now) {
    limiter.set(ip, { count: 1, resetAt: now + 60_000 })
    return true
  }

  if (current.count >= 5) {
    return false
  }

  current.count += 1
  return true
}

export async function POST(request: NextRequest) {
  try {
    const ip = getClientIp(request)
    if (!checkRateLimit(ip)) {
      return NextResponse.json({ error: 'Muitas tentativas. Tente novamente em alguns minutos.' }, { status: 429 })
    }

    const body = await request.json()

    if (body.honeypot) {
      return NextResponse.json({ error: 'Requisição inválida.' }, { status: 400 })
    }

    const payload = contactSchema.safeParse({
      ...body,
      name: sanitize(body.name),
      email: sanitize(body.email),
      phone: sanitize(body.phone),
      service: sanitize(body.service),
      message: sanitize(body.message),
      consent: Boolean(body.consent),
      honeypot: sanitize(body.honeypot),
      utm_source: sanitize(body.utm_source),
      utm_medium: sanitize(body.utm_medium),
      utm_campaign: sanitize(body.utm_campaign),
      utm_term: sanitize(body.utm_term),
      utm_content: sanitize(body.utm_content),
    })

    if (!payload.success) {
      return NextResponse.json({ error: payload.error.issues[0]?.message ?? 'Dados inválidos.' }, { status: 400 })
    }

    const data = payload.data

    if (!resend) {
      return NextResponse.json({ message: 'Contato recebido localmente. Configure RESEND_API_KEY para envio pelo e-mail.', ok: true })
    }

    const emailResponse = await resend.emails.send({
      from: 'Connect Soluções Digitais <onboarding@resend.dev>',
      to: [process.env.CONTACT_TO_EMAIL ?? 'contato@connectsolucoes.example.com'],
      subject: `Novo contato: ${data.service}`,
      html: `
        <h2>Novo contato recebido</h2>
        <p><strong>Nome:</strong> ${data.name}</p>
        <p><strong>E-mail:</strong> ${data.email}</p>
        <p><strong>WhatsApp:</strong> ${data.phone}</p>
        <p><strong>Serviço:</strong> ${data.service}</p>
        <p><strong>Mensagem:</strong> ${data.message || 'Sem mensagem'}</p>
        <p><strong>UTM:</strong> ${JSON.stringify({
          utm_source: data.utm_source,
          utm_medium: data.utm_medium,
          utm_campaign: data.utm_campaign,
          utm_term: data.utm_term,
          utm_content: data.utm_content,
        })}</p>
      `,
    })

    if ('error' in emailResponse && emailResponse.error) {
      return NextResponse.json({ error: 'Não foi possível enviar o e-mail. Tente novamente mais tarde.' }, { status: 500 })
    }

    return NextResponse.json({ ok: true, message: 'Mensagem enviada com sucesso.' })
  } catch (error) {
    console.error('Erro ao enviar formulário:', error)
    return NextResponse.json({ error: 'Erro interno no servidor.' }, { status: 500 })
  }
}
