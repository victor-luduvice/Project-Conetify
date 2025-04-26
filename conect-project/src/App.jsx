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

  // Renderização dos componentes do site
  return (
    <div className="app">
      {/* Cabeçalho e navegação */}
      <Header />
      {/* Seção principal (hero) */}
      <Hero />
      {/* Seção de serviços, recebe o estado de animação */}
      <Services isVisible={isVisible} />
      {/* Seção sobre nós, recebe o estado de animação */}
      <About isVisible={isVisible} />
      {/* Seção de contato, recebe o estado de animação */}
      <Contact isVisible={isVisible} />
      {/* Rodapé */}
      <Footer />
    </div>
  )
}

export default App
