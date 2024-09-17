import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './components/Hero'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import ContactMe from './components/ContactMe'

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <AboutMe />
      <Skills />
      <Services />
      <Portfolio />
      <ContactMe />
      <Footer />
    </>
  )
}

export default App