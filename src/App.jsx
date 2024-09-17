import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './components/Hero'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import Qualification from './components/Qualification'
import Portfolio from './components/Portfolio'
import ContactMe from './components/ContactMe'

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <AboutMe />
      <Skills />
      <Qualification />
      <Portfolio />
      <ContactMe />
      <Footer />
    </>
  )
}

export default App