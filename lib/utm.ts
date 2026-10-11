export const utmKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'] as const

export type UTMParams = Record<(typeof utmKeys)[number], string>

export function readUtmFromUrl(search: string): Partial<UTMParams> {
  const params = new URLSearchParams(search)
  const result: Partial<UTMParams> = {}

  for (const key of utmKeys) {
    const value = params.get(key)
    if (value) result[key] = value
  }

  return result
}

export function getStoredUtm(): Partial<UTMParams> {
  if (typeof window === 'undefined') return {}

  const raw = window.sessionStorage.getItem('connect_utm')
  if (!raw) return {}

  try {
    return JSON.parse(raw) as Partial<UTMParams>
  } catch {
    return {}
  }
}

export function saveUtmToSession(search: string) {
  if (typeof window === 'undefined') return

  const params = readUtmFromUrl(search)
  if (Object.keys(params).length === 0) return

  window.sessionStorage.setItem('connect_utm', JSON.stringify(params))
}
