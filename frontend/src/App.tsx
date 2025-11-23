import './App.css'
import Container from './components/layout/Container'
import Footer from './components/layout/Footer'
import Header from './components/layout/Header'
import ContactSection from './components/sections/ContactSection'
import HeroSection from './components/sections/HeroSection'
import ProjectsSection from './components/sections/ProjectsSection'


function App() {
  return (
    <>
    <Header />
    <main>
      <Container>
        <HeroSection />
        <ProjectsSection/>
        <ContactSection />
      </Container>
    </main>
    <Footer/>
    </>
  )
}

export default App
