import { z } from 'zod'

export const contactSchema = z.object({
  name: z.string().trim().min(2, 'Informe seu nome completo.'),
  email: z.string().trim().email('Informe um e-mail válido.'),
  phone: z.string().trim().min(10, 'Informe um WhatsApp com DDD e número.'),
  service: z.string().trim().min(1, 'Selecione um serviço.'),
  message: z.string().trim().max(500, 'A mensagem deve ter até 500 caracteres.').optional().or(z.literal('')),
  consent: z.boolean().refine((value) => value === true, 'Você precisa aceitar a política de privacidade.'),
  honeypot: z.string().optional().or(z.literal('')),
  utm_source: z.string().optional().or(z.literal('')),
  utm_medium: z.string().optional().or(z.literal('')),
  utm_campaign: z.string().optional().or(z.literal('')),
  utm_term: z.string().optional().or(z.literal('')),
  utm_content: z.string().optional().or(z.literal('')),
})

export type ContactSubmission = z.infer<typeof contactSchema>
