import React from 'react'
import ProjectHeroImg from '../assets/projecthero.png'
import { motion } from 'framer-motion'
import { RiScrollToBottomLine } from "react-icons/ri";

const ProjectsHero = () => {
    const bounceAnimation = {
        y: [0, 10, 0],
        transition: {
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
        }
    }

    return (
        <div className='px-4 sm:px-6 lg:px-6 pb-10 sm:pb-24 mt-4 sm:mt-2'>
            <div className="bg-gray-200 rounded-3xl overflow-hidden relative">
                <div className="relative overflow-visible grid lg:grid-cols-2 gap-0 sm:gap-8">
                    <section className="py-16 px-4 sm:px-6 lg:py-32 lg:px-8">
                        <div className="relative z-10">
                            <h1 className="text-gray-800 lg:text-6xl md:text-5xl text-4xl font-extrabold mb-4 md:!leading-[56px]">
                                Projects
                                <br className="xl:hidden" />
                                <span className="text-blue-800"> Showcase</span>
                            </h1>
                            <p className="text-lg text-gray-900 sm:text-lg mt-4 md:mt-6 pr-20">
                                Explore the diverse projects I've brought to life, from web applications and branding designs to eCommerce platforms
                            </p>

                            {/* Mobile scroll indicator */}
                            <div className="mt-12 lg:hidden flex flex-col items-center gap-2">
                                <p className="text-gray-700 text-base font-medium text-center">
                                    Scroll down to see my work
                                </p>
                                <motion.div
                                    animate={bounceAnimation}
                                    className="text-blue-800"
                                >
                                    <RiScrollToBottomLine size={40} />
                                </motion.div>
                            </div>
                        </div>
                    </section>
                    <section className="h-full overflow-visible">
                        <img
                            className="h-fit w-full object-cover sm:h-72 md:h-96 lg:h-full overflow-visible"
                            src={ProjectHeroImg}
                            alt="Hero image with projects"
                        />
                    </section>
                    {/* Desktop scroll indicator */}
                    <div className="absolute left-1/2 -translate-x-1/2 bottom-16 hidden lg:flex flex-col items-center gap-2">
                        <p className="text-gray-700 text-base font-medium text-center">
                            Scroll down to see my work
                        </p>
                        <motion.div
                            animate={bounceAnimation}
                            className="text-blue-800"
                        >
                            <RiScrollToBottomLine size={40} />
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectsHero