import './Hero.css'

// Componente responsável pela seção principal (hero) do site
function Hero() {
  return (
    // Seção hero com chamada para ação
    <section className="hero" id="home">
      <div className="hero-content">
        {/* Título principal do site */}
        <h1 className="fade-in">Transforme sua presença digital</h1>
        {/* Descrição curta do serviço */}
        <p className="fade-in delay-1">Soluções web e mobile personalizadas para o seu negócio</p>
        {/* Botão de chamada para ação */}
        <button className="cta-button fade-in delay-2">Fale Conosco</button>
      </div>
    </section>
  )
}

export default Hero 