'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowRight } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { siteConfig } from '@/data/site'

const contactSchema = z.object({
  name: z.string().min(2, 'Informe seu nome completo.'),
  email: z.string().email('Informe um e-mail válido.'),
  phone: z.string().min(10, 'Informe um WhatsApp com DDD e número.'),
  service: z.string().min(1, 'Selecione um serviço.'),
  message: z.string().max(500, 'A mensagem deve ter até 500 caracteres.').optional().or(z.literal('')),
  consent: z.boolean().refine((value) => value === true, 'Você precisa aceitar a política de privacidade.'),
})

export type ContactFormValues = z.infer<typeof contactSchema>

const serviceOptions = [
  'Sites',
  'Aplicativos',
  'Identidade Visual',
  'Agentes de IA',
  'CRM',
  'Tráfego Pago',
  'Ainda não sei',
]

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      service: '',
      message: '',
      consent: false,
    },
  })

  const onSubmit = async (values: ContactFormValues) => {
    setStatus('idle')

    try {
      const response = await fetch('/api/contato', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      })

      if (!response.ok) {
        setStatus('error')
        return
      }

      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-text">
            Nome*
          </label>
          <input
            id="name"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? 'name-error' : undefined}
            className="w-full rounded-2xl border border-border bg-bg-elevated px-4 py-3 text-text placeholder:text-text-subtle focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/40"
            placeholder="Seu nome"
            {...register('name')}
          />
          {errors.name && <p id="name-error" className="mt-2 text-sm text-danger">{errors.name.message}</p>}
        </div>

        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-text">
            E-mail*
          </label>
          <input
            id="email"
            type="email"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'email-error' : undefined}
            className="w-full rounded-2xl border border-border bg-bg-elevated px-4 py-3 text-text placeholder:text-text-subtle focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/40"
            placeholder="seu@email.com"
            {...register('email')}
          />
          {errors.email && <p id="email-error" className="mt-2 text-sm text-danger">{errors.email.message}</p>}
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label htmlFor="phone" className="mb-2 block text-sm font-medium text-text">
            WhatsApp*
          </label>
          <input
            id="phone"
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? 'phone-error' : undefined}
            className="w-full rounded-2xl border border-border bg-bg-elevated px-4 py-3 text-text placeholder:text-text-subtle focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/40"
            placeholder="(11) 99999-9999"
            {...register('phone')}
          />
          {errors.phone && <p id="phone-error" className="mt-2 text-sm text-danger">{errors.phone.message}</p>}
        </div>

        <div>
          <label htmlFor="service" className="mb-2 block text-sm font-medium text-text">
            Serviço de interesse*
          </label>
          <select
            id="service"
            aria-invalid={Boolean(errors.service)}
            aria-describedby={errors.service ? 'service-error' : undefined}
            className="w-full rounded-2xl border border-border bg-bg-elevated px-4 py-3 text-text focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/40"
            defaultValue=""
            {...register('service')}
          >
            <option value="" disabled>Selecione</option>
            {serviceOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {errors.service && <p id="service-error" className="mt-2 text-sm text-danger">{errors.service.message}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-text">
          Mensagem
        </label>
        <textarea
          id="message"
          rows={4}
          className="w-full rounded-2xl border border-border bg-bg-elevated px-4 py-3 text-text placeholder:text-text-subtle focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/40"
          placeholder="Conte um pouco sobre o seu projeto..."
          {...register('message')}
        />
      </div>

      <label className="flex items-start gap-3 rounded-2xl border border-border bg-bg-elevated p-3 text-sm text-text-muted">
        <input type="checkbox" className="mt-1 size-4 accent-primary" {...register('consent')} />
        <span>
          Concordo com o tratamento dos meus dados conforme a{' '}
          <a href="/politica-de-privacidade" className="text-primary hover:text-primary-hover">
            Política de Privacidade
          </a>
          .
        </span>
      </label>
      {errors.consent && <p className="text-sm text-danger">{errors.consent.message}</p>}

      <div aria-live="polite">
        {status === 'success' && (
          <p className="rounded-2xl border border-success/40 bg-success/10 px-4 py-3 text-sm text-success">
            Informações recebidas. Em breve entraremos em contato.
          </p>
        )}
        {status === 'error' && (
          <p className="rounded-2xl border border-danger/40 bg-danger/10 px-4 py-3 text-sm text-danger">
            Não foi possível enviar agora. Tente novamente em alguns minutos.
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-primary w-full justify-center gap-2 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isSubmitting ? 'Enviando...' : 'Solicitar orçamento'}
        <ArrowRight className="h-4 w-4" />
      </button>

      <p className="text-xs text-text-subtle">
        Resposta em {siteConfig.formResponseTime}.
      </p>
    </form>
  )
}
