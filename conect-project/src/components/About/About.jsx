import './About.scss'

// Ilustração SVG de equipe/colaboração
const AboutIllustration = () => (
  <svg className="about-illustration fade-in delay-1" width="180" height="120" viewBox="0 0 180 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="90" cy="100" rx="80" ry="18" fill="#2563eb" opacity="0.10"/>
    <circle cx="50" cy="60" r="22" fill="#2563eb"/>
    <circle cx="130" cy="60" r="22" fill="#1e40af"/>
    <circle cx="90" cy="50" r="18" fill="#facc15"/>
    <rect x="35" y="80" width="30" height="10" rx="5" fill="#fff" fillOpacity="0.8"/>
    <rect x="115" y="80" width="30" height="10" rx="5" fill="#fff" fillOpacity="0.8"/>
    <rect x="75" y="70" width="30" height="10" rx="5" fill="#fff" fillOpacity="0.8"/>
  </svg>
)

// Componente responsável pela seção 'Sobre Nós'
function About({ isVisible, lang }) {
  // Textos em ambos os idiomas
  const texts = {
    title: lang === 'en' ? 'About Us' : 'Sobre Nós',
    desc:
      lang === 'en'
        ? 'We are a team of web and mobile development specialists, ready to turn your ideas into reality.'
        : 'Somos uma equipe de especialistas em desenvolvimento web e mobile, prontos para transformar suas ideias em realidade.',
  }

  return (
    // Seção sobre a empresa
    <section className="about" id="about">
      <AboutIllustration />
      {/* Título da seção */}
      <h2 className={isVisible ? 'fade-in' : ''}>{texts.title}</h2>
      {/* Descrição da equipe/empresa */}
      <p className={isVisible ? 'fade-in delay-1 about-desc' : 'about-desc'}>
        {texts.desc}
      </p>
    </section>
  )
}

export default About 