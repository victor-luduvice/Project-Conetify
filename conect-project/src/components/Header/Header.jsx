import './Header.css'

// Componente responsável pelo cabeçalho e navegação principal do site
function Header() {
  return (
    // Header fixo no topo da página
    <header className="header">
      <nav className="nav">
        {/* Logo da empresa */}
        <div className="logo">Conetify</div>
        {/* Links de navegação para as seções do site */}
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#services">Serviços</a>
          <a href="#about">Sobre</a>
          <a href="#contact">Contato</a>
        </div>
      </nav>
    </header>
  )
}

export default Header 