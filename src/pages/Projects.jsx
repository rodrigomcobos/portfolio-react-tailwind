import React from 'react'
import ProjectsHero from '../components/ProjectsHero'
import CurrentProject from '../components/CurrentProject'
import CompletedProjects from '../components/CompletedProjects'
import ContactMe from '../components/ContactMe'

const Projects = () => {
    return (
        <div>
            <ProjectsHero />
            <CurrentProject />
            <CompletedProjects />
            <ContactMe />
        </div>
    )
}

export default Projects