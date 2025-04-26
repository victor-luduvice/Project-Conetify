import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa'
import './Footer.scss'

// Shape decorativo SVG para o topo do Footer
const FooterShape = () => (
  <svg className="footer-shape" width="100%" height="40" viewBox="0 0 1200 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 40 Q600 0 1200 40 V0 H0 V40Z" fill="#2563eb" fillOpacity="0.08"/>
  </svg>
)

// Componente responsável pelo rodapé do site
function Footer({ lang }) {
  // Texto em ambos os idiomas
  const copyright =
    lang === 'en'
      ? '© 2025 Conetify. All rights reserved.'
      : '© 2025 Conetify. Todos os direitos reservados.'

  return (
    // Rodapé fixo ao final da página
    <footer className="footer">
      <FooterShape />
      {/* Direitos autorais */}
      <p>{copyright}</p>
      <div className="footer-socials">
        <a href="#" aria-label="Instagram" className="footer-social"><FaInstagram /></a>
        <a href="#" aria-label="LinkedIn" className="footer-social"><FaLinkedin /></a>
        <a href="#" aria-label="GitHub" className="footer-social"><FaGithub /></a>
      </div>
    </footer>
  )
}

export default Footer 