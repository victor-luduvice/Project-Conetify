import './Hero.scss'

// SVG Ilustração moderna para o Hero
const HeroIllustration = () => (
  <svg className="hero-illustration fade-in delay-2" width="320" height="320" viewBox="0 0 320 320" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="160" cy="160" r="120" fill="url(#paint0_radial)"/>
    <ellipse cx="160" cy="180" rx="90" ry="40" fill="url(#paint1_radial)" opacity="0.5"/>
    <rect x="110" y="110" width="100" height="60" rx="18" fill="#fff" fillOpacity="0.9"/>
    <rect x="130" y="130" width="60" height="10" rx="5" fill="#2563eb"/>
    <rect x="130" y="150" width="40" height="8" rx="4" fill="#1e40af"/>
    <circle cx="200" cy="120" r="8" fill="#facc15"/>
    <defs>
      <radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientTransform="translate(160 160) scale(120)" gradientUnits="userSpaceOnUse">
        <stop stopColor="#2563eb"/>
        <stop offset="1" stopColor="#1e40af"/>
      </radialGradient>
      <radialGradient id="paint1_radial" cx="0" cy="0" r="1" gradientTransform="translate(160 180) scale(90 40)" gradientUnits="userSpaceOnUse">
        <stop stopColor="#facc15"/>
        <stop offset="1" stopColor="#2563eb" stopOpacity="0"/>
      </radialGradient>
    </defs>
  </svg>
)

// Componente responsável pela seção principal (hero) do site
function Hero({ lang }) {
  // Função para rolar até a seção de contato
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // Textos em ambos os idiomas
  const texts = {
    title: lang === 'en' ? 'Transform your digital presence' : 'Transforme sua presença digital',
    desc: lang === 'en' ? 'Custom web and mobile solutions for your business' : 'Soluções web e mobile personalizadas para o seu negócio',
    button: lang === 'en' ? 'Contact Us' : 'Fale Conosco',
  }

  return (
    // Seção hero com chamada para ação
    <section className="hero" id="home">
      <div className="hero-content-wrapper">
        <div className="hero-content">
          {/* Título principal do site */}
          <h1 className="fade-in">{texts.title}</h1>
          {/* Descrição curta do serviço */}
          <p className="fade-in delay-1">{texts.desc}</p>
          {/* Botão de chamada para ação que rola até o contato */}
          <button className="cta-button fade-in delay-2" onClick={scrollToContact}>
            {texts.button}
          </button>
        </div>
        <HeroIllustration />
      </div>
    </section>
  )
}

export default Hero 