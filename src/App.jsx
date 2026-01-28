import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import FeaturedApp from './components/FeaturedApp'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Training from './components/Training'
import Blog from './components/Blog'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <FeaturedApp />
        <Skills />
        <Projects />
        <Training />
        <Blog />
      </main>
      <Footer />
    </>
  )
}

export default App
