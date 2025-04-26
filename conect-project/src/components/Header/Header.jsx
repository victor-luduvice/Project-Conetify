import './Header.scss'

// Componente responsável pelo cabeçalho e navegação principal do site
function Header({ darkMode, toggleTheme, lang, toggleLang }) {
  // Textos dos links de navegação em ambos os idiomas
  const navTexts = {
    home: lang === 'en' ? 'Home' : 'Home',
    services: lang === 'en' ? 'Services' : 'Serviços',
    about: lang === 'en' ? 'About' : 'Sobre',
    contact: lang === 'en' ? 'Contact' : 'Contato',
  }

  return (
    // Header fixo no topo da página
    <header className="header">
      <nav className="nav">
        {/* Logo da empresa apenas texto */}
        <div className="logo">Conetify</div>
        {/* Links de navegação para as seções do site */}
        <div className="nav-links">
          <a href="#home">{navTexts.home}</a>
          <a href="#services">{navTexts.services}</a>
          <a href="#about">{navTexts.about}</a>
          <a href="#contact">{navTexts.contact}</a>
        </div>
        {/* Botão de alternância de idioma */}
        <button className="lang-toggle" onClick={toggleLang} aria-label="Alternar idioma">
          US
        </button>
        {/* Botão de alternância de tema */}
        <button className="theme-toggle" onClick={toggleTheme} aria-label="Alternar tema">
          {darkMode ? '🌞' : '🌙'}
        </button>
      </nav>
    </header>
  )
}

export default Header 