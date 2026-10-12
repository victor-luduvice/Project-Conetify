export type AnalyticsEventParams = Record<string, string | number | boolean | undefined>

export function track(event: string, params?: AnalyticsEventParams) {
  if (typeof window === 'undefined') return

  const consent = localStorage.getItem('connect-cookie-consent')
  if (consent !== 'accepted') return

  if (typeof window !== 'undefined' && 'dataLayer' in window) {
    const dataLayer = (window as Window & { dataLayer?: Array<Record<string, unknown>> }).dataLayer ?? []
    dataLayer.push({ event, ...params })
  }

  const gtag = (window as Window & { gtag?: (...args: unknown[]) => void }).gtag
  if (typeof gtag === 'function') {
    gtag('event', event, params ?? {})
  }
}
