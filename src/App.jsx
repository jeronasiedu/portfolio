import { useState } from 'react'
import NavBar from './components/NavBar'
import MainContent from './components/MainContent'
import About from './pages/About'
import Skills from './pages/Skills'
import Services from './pages/Services'
import Portfolio from './pages/Portfolio'
import Testimonial from './pages/Testimonial'
import Advert from './pages/Advert'
import Contact from './pages/Contact'
import Footer from './pages/Footer'
import GlobalStyles from './styles/global'
import themes from './styles/theme'
import { ThemeProvider } from 'styled-components'
function App() {
  const [mode, setMode] = useState('light')
  return (
    <ThemeProvider theme={themes[mode]}>
      <NavBar setMode={setMode} mode={mode} />
      <MainContent />
      <About />
      <Skills />
      <Services />
      <Portfolio />
      <Advert />
      <Testimonial />
      <Contact />
      <Footer />
      <GlobalStyles />
    </ThemeProvider>
  )
}

export default App
