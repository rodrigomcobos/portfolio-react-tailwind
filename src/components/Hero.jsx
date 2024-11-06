import React from 'react';
import Image from 'react-image-webp';
import { motion } from 'framer-motion';
import ProfileImgPng from '../assets/profile1.png';
import ProfileImgWebp from '../assets/profile1.webp';

const Hero = () => {
    // Animation variants for container elements
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

    // Animation variants for individual elements
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

    // Special variant for the image
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

    // Variants for stats counter
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
        <div className="font-sans max-w-7xl max-md:max-w-md mx-auto md:mt-32 mt-12 px-6">
            <motion.div
                className="grid md:grid-cols-2 items-center md:gap-8 gap-6"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                {/* Image Section */}
                <motion.section
                    className="lg:h-[550px] md:h-[550px] flex items-center justify-center relative sm:justify-center max-md:before:hidden before:absolute before:bg-[#DEE2E5] before:h-[120%] before:w-[120%] before:right-0 before:z-0 mb-14"
                    variants={imageVariants}
                >
                    <Image
                        src={ProfileImgPng}
                        webp={ProfileImgWebp}
                        className="rounded-md lg:w-4/5 w-4/5 z-20 relative"
                        alt="Profile Image"
                        loading="lazy"
                    />
                </motion.section>

                {/* Content Section */}
                <motion.section
                    className="max-md:order-1 max-md:text-center z-10 relative items-center"
                    variants={containerVariants}
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
                        Full Stack Developer
                    </motion.h2>
                    <motion.h2
                        className="text-gray-800 lg:text-2xl md:text-3xl text-2xl font-extrabold mb-4 md:!leading-[56px]"
                        variants={itemVariants}
                    >
                        Located in Dallas, TX
                    </motion.h2>
                    <motion.p
                        className="text-gray-800 mt-6 leading-relaxed"
                        variants={itemVariants}
                    >
                        I'm a Full Stack Developer, and a seasoned Product and UX Designer with over 5 years of experience transforming ideas into impactful digital products. I specialize in helping businesses and non-profits scale their potential for meaningful change by delivering thoughtful, user-centered solutions.
                    </motion.p>

                    <motion.p
                        className="text-gray-800 mt-6 leading-relaxed mb-12"
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
                                <p className="text-gray-800">Years Experience</p>
                            </motion.div>
                            <motion.div
                                className="flex flex-col items-center text-center"
                                variants={statsItemVariants}
                            >
                                <p className="text-gray-800 font-bold text-4xl mb-2">10+</p>
                                <p className="text-gray-800">Projects</p>
                            </motion.div>
                            <motion.div
                                className="flex flex-col items-center text-center"
                                variants={statsItemVariants}
                            >
                                <p className="text-gray-800 font-bold text-4xl mb-2">5+</p>
                                <p className="text-gray-800">Clients</p>
                            </motion.div>
                        </div>
                    </motion.div>
                </motion.section>
            </motion.div>
        </div>
    );
};

export default Hero;