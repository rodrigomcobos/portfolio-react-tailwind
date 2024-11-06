import React from 'react'
import Hero from '../components/Hero'
import TechStackBanner from '../components/TechStackBanner'
import AboutMe from '../components/AboutMe'
import Skills from '../components/Skills'
import Qualification from '../components/Qualification'
import CurrentProject from '../components/CurrentProject'
import Frontend from '../components/Frontend'
import GraphicDesign from '../components/GraphicDesign'
import UxUiDesign from '../components/UxUiDesign'
import ContactMe from '../components/ContactMe'

const Home = () => {
    return (
        <>
            <Hero />
            <TechStackBanner />
            <AboutMe />
            <Skills />
            <Qualification />
            <CurrentProject />
            <Frontend />
            <GraphicDesign />
            <UxUiDesign />
            <ContactMe />
        </>
    )
}

export default Home