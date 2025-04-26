import { FaGlobe, FaMobileAlt, FaChartLine } from 'react-icons/fa'
import './Services.css'

// Componente responsável pela seção de serviços oferecidos
function Services({ isVisible }) {
  return (
    // Seção de serviços
    <section className="services" id="services">
      {/* Título da seção */}
      <h2 className={isVisible ? 'fade-in' : ''}>Nossos Serviços</h2>
      {/* Grid com os cards de serviços */}
      <div className={`services-grid ${isVisible ? 'slide-up' : ''}`}>
        {/* Card: Desenvolvimento Web */}
        <div className="service-card">
          <FaGlobe className="service-icon" />
          <h3>Desenvolvimento Web</h3>
          <p>Sites profissionais e responsivos</p>
        </div>
        {/* Card: Aplicativos Mobile */}
        <div className="service-card">
          <FaMobileAlt className="service-icon" />
          <h3>Aplicativos Mobile</h3>
          <p>Apps nativos para iOS e Android</p>
        </div>
        {/* Card: Consultoria Digital */}
        <div className="service-card">
          <FaChartLine className="service-icon" />
          <h3>Consultoria Digital</h3>
          <p>Estratégias para seu negócio</p>
        </div>
      </div>
    </section>
  )
}

export default Services 