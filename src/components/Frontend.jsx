import React from 'react';
import { motion } from 'framer-motion';
import Image from 'react-image-webp';
import Slider from 'react-slick';
import { FaReact, FaHtml5, FaCss3Alt, FaJsSquare, FaNode, FaDatabase, FaBootstrap } from 'react-icons/fa';
import { SiJquery } from "react-icons/si";
import FrontendImg1Png from '../assets/frontend1.jpg';
import FrontendImg1Webp from '../assets/frontend1.webp';
import FrontendImg2Png from '../assets/frontend2.jpg';
import FrontendImg2Webp from '../assets/frontend2.webp';
import FrontendImg3Png from '../assets/frontend3.jpg';
import FrontendImg3Webp from '../assets/frontend3.webp';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const cardData = [
    {
        id: 1,
        title: 'Blueberry Hill Bakery',
        description: 'Website created for a small business located in Freeport, FL. Website responsive with all UI components.',
        image: FrontendImg1Png,
        imageWebp: FrontendImg1Webp,
        icons: [<FaHtml5 />, <FaCss3Alt />, <FaBootstrap />, <FaNode />, <SiJquery />],
        link: 'https://blueberry-hill-bakery.netlify.app',
    },
    {
        id: 2,
        title: 'Brazilian Ecotourism Landing',
        description: 'Landing page responsive with all UI components and animated interactions. Created for a local tour company.',
        image: FrontendImg2Png,
        imageWebp: FrontendImg2Webp,
        icons: [<FaHtml5 />, <FaCss3Alt />, <FaJsSquare />],
        link: 'https://amazonas-ecoturismo.netlify.app',
    },
    {
        id: 3,
        title: 'REO MakeReady Landing',
        description: 'Responsive landing page with all UI components. Created for a local remodeling company.',
        image: FrontendImg3Png,
        imageWebp: FrontendImg3Webp,
        icons: [<FaHtml5 />, <FaCss3Alt />, <FaJsSquare />],
        link: 'https://reo-make-ready.netlify.app',
    },
];

// Animation variants
const cardVariants = {
    hidden: {
        opacity: 0,
        y: 50
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut"
        }
    }
};

const iconVariants = {
    hidden: { scale: 0 },
    visible: {
        scale: 1,
        transition: {
            type: "spring",
            stiffness: 260,
            damping: 20
        }
    },
    hover: {
        scale: 1.2,
        rotate: 360,
        transition: { duration: 0.3 }
    }
};

const buttonVariants = {
    hover: {
        scale: 1.05,
        transition: {
            duration: 0.2,
            ease: "easeInOut"
        }
    },
    tap: {
        scale: 0.95
    }
};

const CardComponent = ({ card }) => (
    <motion.div
        className="p-4"
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
    >
        <motion.div
            className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-between h-full"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.02 }}
                className="w-full"
            >
                <Image
                    src={card.image}
                    webp={card.imageWebp}
                    alt={card.title}
                    className="w-full h-56 object-cover mb-4 rounded-md"
                    loading="lazy"
                />
            </motion.div>
            <motion.h3
                className="text-xl font-semibold mb-2 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                {card.title}
            </motion.h3>
            <motion.p
                className="text-gray-800 text-center mb-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
            >
                {card.description}
            </motion.p>
            <div className="flex space-x-2 mb-4">
                {card.icons.map((icon, index) => (
                    <motion.span
                        key={index}
                        className="text-3xl text-blue-800"
                        variants={iconVariants}
                        initial="hidden"
                        whileInView="visible"
                        whileHover="hover"
                        viewport={{ once: true }}
                        custom={index}
                    >
                        {icon}
                    </motion.span>
                ))}
            </div>
            <motion.a
                href={card.link}
                target='_blank'
                rel="noopener noreferrer"
                aria-label='visit demo website'
                whileHover="hover"
                whileTap="tap"
                variants={buttonVariants}
            >
                <button className="mt-6 bg-blue-800 hover:bg-transparent hover:text-blue-800 border-2 border-blue-800 transition-all text-white font-semibold text-sm tracking-wide rounded-md px-6 py-2.5">
                    View Demo
                </button>
            </motion.a>
        </motion.div>
    </motion.div>
);

const Frontend = () => {
    const settings = {
        dots: true,
        dotsClass: 'slick-dots',
        infinite: true,
        speed: 600,
        slidesToShow: 3,
        slidesToScroll: 1,
        accessibility: true,
        defaults: true,
        arrows: true,
        swipeToSlide: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    return (
        <motion.div
            className="max-w-9xl mb-24"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            <Slider {...settings}>
                {cardData.map((card) => (
                    <CardComponent key={card.id} card={card} />
                ))}
            </Slider>
            <motion.div
                className='flex justify-center mt-16'
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <motion.a
                    href='https://github.com/rodrigomcobos'
                    target='_blank'
                    rel="noopener noreferrer"
                    whileHover="hover"
                    whileTap="tap"
                    variants={buttonVariants}
                >
                    <button className="mt-6 bg-blue-800 hover:bg-transparent hover:text-blue-800 border-2 border-blue-800 transition-all text-white font-semibold text-sm tracking-wide rounded-md px-6 py-2.5">
                        View all Projects on GitHub
                    </button>
                </motion.a>
            </motion.div>
        </motion.div>
    );
};

export default Frontend;