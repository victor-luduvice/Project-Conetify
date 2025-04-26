import { FaEnvelopeOpenText } from 'react-icons/fa'
import './Contact.scss'

// Componente responsável pela seção de contato
function Contact({ isVisible, lang }) {
  // Textos em ambos os idiomas
  const texts = {
    title: lang === 'en' ? 'Contact Us' : 'Entre em Contato',
    name: lang === 'en' ? 'Name' : 'Nome',
    email: lang === 'en' ? 'Email' : 'Email',
    message: lang === 'en' ? 'Message' : 'Mensagem',
    button: lang === 'en' ? 'Send' : 'Enviar',
  }

  return (
    // Seção de contato com formulário
    <section className="contact" id="contact">
      {/* Título da seção com ícone */}
      <h2 className={isVisible ? 'fade-in' : ''}>
        <FaEnvelopeOpenText className="contact-title-icon" /> {texts.title}
      </h2>
      {/* Formulário de contato com animação */}
      <form className={`contact-form ${isVisible ? 'slide-up' : ''}`} style={{ animationDelay: '0.3s' }}>
        <input type="text" placeholder={texts.name} />
        <input type="email" placeholder={texts.email} />
        <textarea placeholder={texts.message}></textarea>
        <button type="submit">{texts.button}</button>
      </form>
    </section>
  )
}

export default Contact 