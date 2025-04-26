import { FaGlobe, FaMobileAlt, FaChartLine, FaCheckCircle, FaBolt, FaStar, FaUsers, FaRocket, FaBullhorn } from 'react-icons/fa'
import './Services.scss'

// SVG Shape decorativo para o fundo da seção
const ServicesShape = () => (
  <svg className="services-shape" width="600" height="320" viewBox="0 0 600 320" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="300" cy="160" rx="280" ry="110" fill="url(#paint0_radial)" opacity="0.13"/>
    <defs>
      <radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientTransform="translate(300 160) scale(280 110)" gradientUnits="userSpaceOnUse">
        <stop stopColor="#2563eb"/>
        <stop offset="1" stopColor="#facc15"/>
      </radialGradient>
    </defs>
  </svg>
)

// Array com as etapas do fluxo Conetify
const etapas = [
  {
    icon: <FaUsers />, title: 'Reunião Inicial',
    desc: 'Entendemos o que você deseja em uma reunião personalizada e esclarecemos todas as dúvidas.'
  },
  {
    icon: <FaRocket />, title: 'Entrega Rápida',
    desc: 'Seu site é entregue em até 2 dias, pronto para ser usado e ajustado conforme sua necessidade.'
  },
  {
    icon: <FaBullhorn />, title: 'Divulgação Profissional',
    desc: 'Nossa equipe de marketing entra em ação para divulgar seu site e atrair clientes.'
  }
]

// Componente responsável pela seção de serviços oferecidos e pelo fluxo Conetify
function Services({ isVisible, lang }) {
  // Textos em ambos os idiomas
  const texts = {
    title: lang === 'en' ? 'Our Services' : 'Nossos Serviços',
    web: lang === 'en' ? 'Web Development' : 'Desenvolvimento Web',
    webDesc: lang === 'en' ? 'Professional and responsive websites' : 'Sites profissionais e responsivos',
    app: lang === 'en' ? 'Mobile Apps' : 'Aplicativos Mobile',
    appDesc: lang === 'en' ? 'Native apps for iOS and Android' : 'Apps nativos para iOS e Android',
    consult: lang === 'en' ? 'Digital Consulting' : 'Consultoria Digital',
    consultDesc: lang === 'en' ? 'Strategies for your business' : 'Estratégias para seu negócio',
    flow: lang === 'en' ? 'How does the Conetify flow work?' : 'Como funciona o fluxo Conetify?',
  }

  return (
    // Seção de serviços
    <section className="services" id="services">
      {/* Shape SVG decorativo de fundo */}
      <ServicesShape />
      {/* Título da seção */}
      <h2 className={isVisible ? 'fade-in' : ''}>{texts.title}</h2>
      {/* Grid com os cards de serviços principais */}
      <div className={`services-grid ${isVisible ? 'slide-up' : ''}`}>
        {/* Card: Desenvolvimento Web */}
        <div className="service-card fade-in" style={{ animationDelay: '0.2s' }}>
          {/* Ícone extra animado */}
          <span className="service-extra-icon"><FaCheckCircle /></span>
          <FaGlobe className="service-icon" />
          <h3>{texts.web}</h3>
          <p>{texts.webDesc}</p>
        </div>
        {/* Card: Aplicativos Mobile */}
        <div className="service-card fade-in" style={{ animationDelay: '0.4s' }}>
          <span className="service-extra-icon"><FaBolt /></span>
          <FaMobileAlt className="service-icon" />
          <h3>{texts.app}</h3>
          <p>{texts.appDesc}</p>
        </div>
        {/* Card: Consultoria Digital */}
        <div className="service-card fade-in" style={{ animationDelay: '0.6s' }}>
          <span className="service-extra-icon"><FaStar /></span>
          <FaChartLine className="service-icon" />
          <h3>{texts.consult}</h3>
          <p>{texts.consultDesc}</p>
        </div>
      </div>
      {/* Etapas do fluxo Conetify */}
      <div className="services-flow">
        {/* Título do fluxo */}
        <h3 className="services-flow-title">{texts.flow}</h3>
        <div className="services-flow-steps">
          {/* Renderiza cada etapa do fluxo com ícone, título e descrição */}
          {etapas.map((etapa, i) => (
            <div className="services-flow-step" key={i}>
              <div className="services-flow-icon">{etapa.icon}</div>
              <div className="services-flow-step-title">{etapa.title}</div>
              <div className="services-flow-step-desc">{etapa.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services 