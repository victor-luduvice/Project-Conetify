// Importação dos hooks do React
import { useState, useEffect } from 'react'
// Importação dos componentes principais do site
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Services from './components/Services/Services'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
// Importação dos estilos globais
import './App.css'

// Componente principal da aplicação
function App() {
  // Estado para controlar a visibilidade das animações nas seções
  const [isVisible, setIsVisible] = useState(false)
  // Estado para controlar o tema (claro/escuro)
  const [darkMode, setDarkMode] = useState(false)
  // Estado para controlar o idioma (pt/en)
  const [lang, setLang] = useState('pt')

  // Função para alternar o tema
  const toggleTheme = () => {
    setDarkMode((prev) => !prev)
  }

  // Função para alternar o idioma
  const toggleLang = () => {
    setLang((prev) => (prev === 'pt' ? 'en' : 'pt'))
  }

  // Hook de efeito para ativar animações ao rolar a página
  useEffect(() => {
    // Função chamada ao rolar a página
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight
      // Seleciona a seção de serviços pelo id
      const servicesSection = document.getElementById('services')
      
      if (servicesSection) {
        const sectionPosition = servicesSection.offsetTop
        // Ativa animação quando a seção de serviços entra na tela
        if (scrollPosition > sectionPosition - windowHeight + 200) {
          setIsVisible(true)
        }
      }
    }

    // Adiciona o listener de scroll
    window.addEventListener('scroll', handleScroll)
    // Remove o listener ao desmontar
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Hook de efeito para aplicar a classe do tema no body
  useEffect(() => {
    document.body.className = darkMode ? 'dark-mode' : ''
  }, [darkMode])

  // Renderização dos componentes do site
  return (
    <div className={`app${darkMode ? ' dark' : ''}`}>
      {/* Cabeçalho e navegação */}
      <Header darkMode={darkMode} toggleTheme={toggleTheme} lang={lang} toggleLang={toggleLang} />
      {/* Seção principal (hero) */}
      <Hero lang={lang} />
      {/* Seção de serviços, recebe o estado de animação */}
      <Services isVisible={isVisible} lang={lang} />
      {/* Seção sobre nós, recebe o estado de animação */}
      <About isVisible={isVisible} lang={lang} />
      {/* Seção de contato, recebe o estado de animação */}
      <Contact isVisible={isVisible} lang={lang} />
      {/* Rodapé */}
      <Footer lang={lang} />
    </div>
  )
}

export default App
