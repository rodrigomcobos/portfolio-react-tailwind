import React from 'react';
import Image from 'react-image-webp';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import ProfileImgPng from '../assets/profile1.png';
import ProfileImgWebp from '../assets/profile1.webp';
import StateOutline from '../assets/stateoutline.svg';

const Hero = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    const imageVariants = {
        hidden: {
            scale: 0.8,
            opacity: 0,
            x: -50
        },
        visible: {
            scale: 1,
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    const statsContainerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.6,
                staggerChildren: 0.1
            }
        }
    };

    const statsItemVariants = {
        hidden: { scale: 0.5, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                duration: 0.4,
                ease: "easeOut"
            }
        }
    };

    return (
        <div className="px-4 sm:px-6 lg:px-6 pb-10 sm:pb-24 mt-2">
            <div className="max-w-9xl mx-auto">
                <div className="bg-gray-200 rounded-3xl overflow-hidden relative">
                    <img
                        src={StateOutline}
                        alt="State of Texas Outline"
                        className="absolute right-0 bottom-0 w-1/2 h-auto opacity-[0.08] -translate-x-12 translate-y-8 pointer-events-none hidden sm:block"
                        aria-hidden="true"
                    />

                    <div className="py-12 sm:py-24 px-6 sm:px-12">
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            <motion.section
                                className="lg:h-[400px] md:h-[400px] flex items-center justify-center relative sm:justify-center"
                                variants={imageVariants}
                                initial="hidden"
                                animate="visible"
                            >
                                <Image
                                    src={ProfileImgPng}
                                    webp={ProfileImgWebp}
                                    className="rounded-xl lg:w-[75%] w-[75%] z-20 relative" // Changed from w-4/5 to w-3/5
                                    alt="Profile Image"
                                    loading="lazy"
                                />
                            </motion.section>

                            {/* Rest of the component remains the same */}
                            <motion.section
                                className="max-md:order-1 max-md:text-center z-10 relative"
                                variants={containerVariants}
                                initial="hidden"
                                animate="visible"
                            >
                                <motion.h1
                                    className="text-gray-800 lg:text-6xl md:text-5xl text-4xl font-extrabold mb-4 md:!leading-[56px]"
                                    variants={itemVariants}
                                >
                                    Hi I'm Rodrigo
                                </motion.h1>
                                <motion.h2
                                    className="text-blue-800 lg:text-5xl md:text-4xl text-3xl font-extrabold md-2"
                                    variants={itemVariants}
                                >
                                    <TypeAnimation
                                        sequence={[
                                            'a Full Stack Developer',
                                            2000,
                                            'a Frontend Developer',
                                            2000,
                                            'a UX Designer',
                                            2000,
                                            'a Graphic Designer',
                                            2000,
                                            'a Brand Designer',
                                            2000,
                                        ]}
                                        wrapper="span"
                                        speed={50}
                                        repeat={Infinity}
                                    />
                                </motion.h2>
                                <motion.h2
                                    className="text-gray-800 lg:text-2xl md:text-3xl text-2xl font-extrabold mb-4 md:!leading-[56px]"
                                    variants={itemVariants}
                                >
                                    Located in Dallas, TX and Remote
                                </motion.h2>
                                <motion.p
                                    className="text-gray-700 mt-6 leading-relaxed"
                                    variants={itemVariants}
                                >
                                    I'm a Full Stack Developer, and a seasoned Product and UX Designer with over 5 years of experience transforming ideas into impactful digital products. I specialize in helping businesses and non-profits scale their potential for meaningful change by delivering thoughtful, user-centered solutions.
                                </motion.p>

                                <motion.p
                                    className="text-gray-700 mt-6 leading-relaxed mb-12"
                                    variants={itemVariants}
                                >
                                    My expertise spans product strategy, facilitation, and prototyping, all backed by a strong foundation in interface design and frontend development. With a focus on creating intuitive and visually compelling experiences, I'm passionate about bridging the gap between design and technology to bring innovative products to life.
                                </motion.p>

                                <motion.a
                                    href="https://docs.google.com/document/d/e/2PACX-1vStG5J4fwggR_8Bejr5Qa3pHnfZRZz6FD7rFvMwBdxQfKmt_kqp1jkYlT3V92ESZ8gP9okfNMAFDjDh/pub"
                                    target="_blank"
                                    className="bg-blue-800 hover:bg-transparent hover:text-blue-800 border-2 border-blue-800 transition-all text-white font-semibold text-sm tracking-wide rounded-md px-6 py-2.5"
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    View Resume
                                </motion.a>

                                <motion.div
                                    className="mt-12 w-fit"
                                    variants={statsContainerVariants}
                                >
                                    <div className="flex flex-row justify-center align-middle items-center gap-12">
                                        <motion.div
                                            className="flex flex-col items-center text-center"
                                            variants={statsItemVariants}
                                        >
                                            <p className="text-gray-800 font-bold text-4xl mb-2">5+</p>
                                            <p className="text-gray-700">Years Experience</p>
                                        </motion.div>
                                        <motion.div
                                            className="flex flex-col items-center text-center"
                                            variants={statsItemVariants}
                                        >
                                            <p className="text-gray-800 font-bold text-4xl mb-2">10+</p>
                                            <p className="text-gray-700">Projects</p>
                                        </motion.div>
                                        <motion.div
                                            className="flex flex-col items-center text-center"
                                            variants={statsItemVariants}
                                        >
                                            <p className="text-gray-800 font-bold text-4xl mb-2">5+</p>
                                            <p className="text-gray-700">Clients</p>
                                        </motion.div>
                                    </div>
                                </motion.div>
                            </motion.section>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;