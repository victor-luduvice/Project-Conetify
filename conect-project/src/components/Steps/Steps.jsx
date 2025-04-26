import { FaShoppingCart, FaBullhorn, FaDollarSign, FaMapMarkerAlt, FaCheckSquare, FaCalendarCheck } from 'react-icons/fa'
import './Steps.scss'

const steps = [
  {
    icon: <FaShoppingCart />, title: '1ª Etapa',
    subtitle: 'Receba sua página',
    desc: 'de vendas online em 24h',
  },
  {
    icon: <FaBullhorn />, title: '2ª Etapa',
    subtitle: 'Comece a divulgar sua página',
    desc: 'utilizando redes sociais, plataformas de busca.',
  },
  {
    icon: <FaDollarSign />, title: '3ª Etapa',
    subtitle: 'Receba solicitações',
    desc: 'de contratação dos seus planos de internet',
  },
  {
    icon: <FaMapMarkerAlt />, title: '4ª Etapa',
    subtitle: 'Verifique a disponibilidade',
    desc: 'em tempo real no ato da solicitação',
  },
  {
    icon: <FaCheckSquare />, title: '5ª Etapa',
    subtitle: 'Confirmação de Fibra Óptica',
    desc: 'Seu cliente pode finalizar todo o cadastro por conta própria',
  },
  {
    icon: <FaCalendarCheck />, title: '6ª Etapa',
    subtitle: 'Assinatura do contrato digital',
    desc: 'Agende a instalação com o consumidor',
  },
]

function Steps() {
  return (
    <section className="steps-section">
      <h2 className="steps-title">
        Da criação da página de vendas<br />até a emissão do contrato:<br />
        <span className="steps-highlight">Centralize tudo na Conetify</span>
      </h2>
      <div className="steps-grid">
        {steps.map((step, i) => (
          <div className="step-card" key={i}>
            <div className="step-icon">{step.icon}</div>
            <div className="step-title">{step.title}</div>
            <div className="step-subtitle">{step.subtitle}</div>
            <div className="step-desc">{step.desc}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Steps 