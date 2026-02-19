import Image from "next/image"

export function Footer() {
  return (
    <footer className="border-t border-border/50 py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <a
          href="#"
          className="flex items-center text-lg font-bold tracking-tight text-foreground"
        >
          <Image
            src="/images/logo.png"
            alt="Connect logo"
            width={32}
            height={32}
            className="h-8 w-8 -mr-1.5 object-contain"
          />
          <span>onnect</span>
          <span className="text-primary">.</span>
        </a>
        <p className="text-sm text-muted-foreground">
          {"© 2026 Connect. Todos os direitos reservados."}
        </p>
      </div>
    </footer>
  )
}
