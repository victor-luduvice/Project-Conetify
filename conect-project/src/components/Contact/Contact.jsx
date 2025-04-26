import './Contact.css'

// Componente responsável pela seção de contato
function Contact({ isVisible }) {
  return (
    // Seção de contato com formulário
    <section className="contact" id="contact">
      {/* Título da seção */}
      <h2 className={isVisible ? 'fade-in' : ''}>Entre em Contato</h2>
      {/* Formulário de contato */}
      <form className={`contact-form ${isVisible ? 'slide-up' : ''}`}>
        <input type="text" placeholder="Nome" />
        <input type="email" placeholder="Email" />
        <textarea placeholder="Mensagem"></textarea>
        <button type="submit">Enviar</button>
      </form>
    </section>
  )
}

export default Contact 