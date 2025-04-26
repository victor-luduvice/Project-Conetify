import './About.css'

// Componente responsável pela seção 'Sobre Nós'
function About({ isVisible }) {
  return (
    // Seção sobre a empresa
    <section className="about" id="about">
      {/* Título da seção */}
      <h2 className={isVisible ? 'fade-in' : ''}>Sobre Nós</h2>
      {/* Descrição da equipe/empresa */}
      <p className={isVisible ? 'fade-in delay-1' : ''}>
        Somos uma equipe de especialistas em desenvolvimento web e mobile, prontos para transformar suas ideias em realidade.
      </p>
    </section>
  )
}

export default About 