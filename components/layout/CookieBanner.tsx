'use client'

import { useEffect, useState } from 'react'

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('connect-cookie-consent')
    if (!consent) setIsVisible(true)
  }, [])

  const accept = () => {
    localStorage.setItem('connect-cookie-consent', 'accepted')
    setIsVisible(false)
  }

  const reject = () => {
    localStorage.setItem('connect-cookie-consent', 'rejected')
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-bg/95 p-4 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p className="max-w-2xl text-sm text-text-muted">
          Usamos cookies para medir campanhas e melhorar sua experiência. Você pode aceitar ou recusar.
        </p>
        <div className="flex gap-3">
          <button type="button" onClick={reject} className="btn-secondary">
            Recusar
          </button>
          <button type="button" onClick={accept} className="btn-primary">
            Aceitar
          </button>
        </div>
      </div>
    </div>
  )
}
