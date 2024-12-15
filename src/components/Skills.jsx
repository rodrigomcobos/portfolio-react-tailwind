import React from 'react';
import { motion } from 'framer-motion';
import CSSIcon from '../assets/css.svg';
import ExpressIcon from '../assets/express.svg';
import HtmlIcon from '../assets/html.svg';
import JavascriptIcon from '../assets/javascript.svg';
import NodeIcon from '../assets/node.svg';
import PostgresIcon from '../assets/postgres.svg';
import ReactIcon from '../assets/react.svg';
import ReduxIcon from '../assets/redux.svg';
import SequelizeIcon from '../assets/sequelize.svg';
import TailwindIcon from '../assets/tailwind.svg';
import FigmaIcon from '../assets/figma.svg';
import XdIcon from '../assets/xd.svg';

import { FaCode } from "react-icons/fa";

const skills = [
    { name: 'HTML 5', icon: HtmlIcon },
    { name: 'CSS 3', icon: CSSIcon },
    { name: 'Vanilla Javascript', icon: JavascriptIcon },
    { name: 'React', icon: ReactIcon },
    { name: 'Redux', icon: ReduxIcon },
    { name: 'TailwindCSS', icon: TailwindIcon },
    { name: 'Postgresql', icon: PostgresIcon },
    { name: 'Sequelize ORM', icon: SequelizeIcon },
    { name: 'Express', icon: ExpressIcon },
    { name: 'Node', icon: NodeIcon },
    { name: 'Figma', icon: FigmaIcon },
    { name: 'Adobe XD', icon: XdIcon }
];

const Skills = () => {
    const headerVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.1
            }
        }
    };

    const skillVariants = {
        hidden: {
            opacity: 0,
            y: 20,
            scale: 0.8
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    const skillHoverVariants = {
        hover: {
            scale: 1.1,
            transition: {
                duration: 0.2,
                ease: "easeInOut"
            }
        },
        tap: {
            scale: 0.95
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

    return (
        <div className="px-4 sm:px-6 lg:px-6 py-24">
            <div className="max-w-9xl mx-auto">
                <div className="bg-gray-200 rounded-3xl overflow-hidden relative">
                    {/* Background Code Icon */}
                    <div className="absolute bottom-8 right-8 text-gray-400 opacity-30">
                        <FaCode className="w-96 h-96" />
                    </div>

                    <div className="py-12 sm:py-24 px-6 sm:px-12">
                        <motion.div
                            id='skills'
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                        >
                            <motion.div variants={headerVariants}>
                                <motion.p
                                    className="text-sm font-bold text-blue-800 mb-2 text-center"
                                    variants={itemVariants}
                                >
                                    <span className="rotate-90 inline-block mr-2">|</span> SKILLS
                                </motion.p>

                                <motion.h2
                                    className="text-gray-800 sm:text-4xl text-3xl font-extrabold text-center mb-16"
                                >
                                    Tools of the Trade
                                </motion.h2>
                            </motion.div>

                            <motion.div
                                className="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-8 lg:gap-10"
                                variants={containerVariants}
                            >
                                {skills.map((skill, index) => (
                                    <motion.div
                                        key={index}
                                        className="text-center"
                                        variants={skillVariants}
                                        whileHover="hover"
                                        whileTap="tap"
                                        custom={index}
                                    >
                                        <motion.div
                                            variants={skillHoverVariants}
                                            className="relative"
                                        >
                                            <motion.img
                                                src={skill.icon}
                                                alt={skill.name}
                                                className="sm:w-20 w-14 mb-6 inline-block"
                                                whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                                                transition={{ duration: 0.5 }}
                                            />
                                            <motion.div
                                                className="absolute inset-0"
                                                initial={{ opacity: 0 }}
                                                whileHover={{
                                                    opacity: [0, 0.1, 0],
                                                    scale: [1, 1.2, 1],
                                                    transition: {
                                                        duration: 1,
                                                        repeat: Infinity
                                                    }
                                                }}
                                                style={{
                                                    background: 'radial-gradient(circle, rgba(37,99,235,0.2) 0%, rgba(37,99,235,0) 70%)'
                                                }}
                                            />
                                        </motion.div>
                                        <motion.h3
                                            className="text-gray-800 text-xl font-semibold mb-3"
                                            variants={skillVariants}
                                        >
                                            {skill.name}
                                        </motion.h3>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;