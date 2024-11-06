import React from 'react';
import { motion } from 'framer-motion';
import Image from 'react-image-webp';
import Slider from 'react-slick';
import { SiAdobephotoshop, SiAdobeillustrator } from "react-icons/si";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import GraphicDesign1Png from '../assets/graphicdesign1.png';
import GraphicDesign1Webp from '../assets/graphicdesign1.webp';
import GraphicDesign2Png from '../assets/graphicdesign2.jpg';
import GraphicDesign2Webp from '../assets/graphicdesign2.webp';
import GraphicDesign3Png from '../assets/graphicdesign3.jpg';
import GraphicDesign3Webp from '../assets/graphicdesign3.webp';
import GraphicDesign4Png from '../assets/graphicdesign4.jpg';
import GraphicDesign4Webp from '../assets/graphicdesign4.webp';
import GraphicDesign5Png from '../assets/graphicdesign5.jpg';
import GraphicDesign5Webp from '../assets/graphicdesign5.webp';
import GraphicDesign6Png from '../assets/graphicdesign6.jpg';
import GraphicDesign6Webp from '../assets/graphicdesign6.webp';
import GraphicDesign7Png from '../assets/graphicdesign7.jpg';
import GraphicDesign7Webp from '../assets/graphicdesign7.webp';
import GraphicDesign8Png from '../assets/graphicdesign8.jpg';
import GraphicDesign8Webp from '../assets/graphicdesign8.webp';
import GraphicDesign9Png from '../assets/graphicdesign9.jpg';
import GraphicDesign9Webp from '../assets/graphicdesign9.webp';

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

const cardData = [
    {
        id: 1,
        title: 'Purkins Pet Store Logo',
        description: 'Logo created for my small pet-store e-commerce in 2020 to sell pet products. Website was originally designed in Spotify, store is closed now.',
        image: GraphicDesign1Png,
        imageWebp: GraphicDesign1Webp,
        icons: [<SiAdobephotoshop />, <SiAdobeillustrator />],
        link: '',
    },
    {
        id: 2,
        title: 'Blueberry Hill Bakery Graphics',
        description: 'Logo created to substitute the original Blueberry Hill Bakery logo. Made with the intention to reflect their brand identity which serves pastries.',
        image: GraphicDesign2Png,
        imageWebp: GraphicDesign2Webp,
        icons: [<SiAdobephotoshop />, <SiAdobeillustrator />],
        link: 'https://www.behance.net/gallery/153304735/Blueberry-Hill-Logo-and-Product-Packaging',
    },
    {
        id: 3,
        title: 'Com Capricho Brazilian Kitchen & Cafe Logo',
        description: 'Logo created for a small cafe that serves brazilian cuisine. Created using Brazil flag colors as its color scheme',
        image: GraphicDesign3Png,
        imageWebp: GraphicDesign3Webp,
        icons: [<SiAdobephotoshop />, <SiAdobeillustrator />],
        link: 'https://www.behance.net/rodrigocobos1',
    },
    {
        id: 4,
        title: 'DFW Bounce',
        description: 'Logo created for a bounce house company in Dallas, TX. Color scheme was made to reflect a fun time with kids in conjunction with the DFW cityscape as part of it.',
        image: GraphicDesign4Png,
        imageWebp: GraphicDesign4Webp,
        icons: [<SiAdobephotoshop />, <SiAdobeillustrator />],
        link: 'https://www.behance.net/rodrigocobos1',
    },
    {
        id: 5,
        title: 'Jutul Performance Gear',
        description: 'Logo created for a performance wear company. Name based on Norwegian name for "giant". A personal project for an e-commerce store that I plan to launch.',
        image: GraphicDesign5Png,
        imageWebp: GraphicDesign5Webp,
        icons: [<SiAdobephotoshop />, <SiAdobeillustrator />],
        link: 'https://www.behance.net/rodrigocobos1',
    },
    {
        id: 6,
        title: 'Tropical Waves Rentals',
        description: 'Logo created for a beach rental company in Destin, FL. Company serves rentals such as chairs, paddle-boards and other beach gear. Logo currently not active.',
        image: GraphicDesign6Png,
        imageWebp: GraphicDesign6Webp,
        icons: [<SiAdobephotoshop />, <SiAdobeillustrator />],
        link: '',
    },
    {
        id: 7,
        title: 'Amazon Xtreme Fishing',
        description: 'Logo created to substitute the original Amazon Xtreme Fishing logo. I have been working with this company for many years and logo has constantly enhanced.',
        image: GraphicDesign7Png,
        imageWebp: GraphicDesign7Webp,
        icons: [<SiAdobephotoshop />, <SiAdobeillustrator />],
        link: 'https://www.behance.net/rodrigocobos1',
    },
    {
        id: 8,
        title: 'Brazil Fritters Graphics',
        description: 'Logo created for my personal business. A catering company that serves multiple brazilian dishes and fast food plates. Created with the intent of expanding the brand.',
        image: GraphicDesign8Png,
        imageWebp: GraphicDesign8Webp,
        icons: [<SiAdobephotoshop />, <SiAdobeillustrator />],
        link: 'https://www.behance.net/gallery/153311101/Brazil-Fritters-Branding-Development',
    },
    {
        id: 9,
        title: 'Outlander 4WD Customs',
        description: 'Logo created for a venture I took upon in my free time. Company that works with 4WD vehicles. Website not created and with the intent of expanding the business.',
        image: GraphicDesign9Png,
        imageWebp: GraphicDesign9Webp,
        icons: [<SiAdobephotoshop />, <SiAdobeillustrator />],
        link: '',
    },
];

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
                className="text-gray-800 mb-8 text-center"
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
            {card.link && (
                <motion.a
                    href={card.link}
                    target='_blank'
                    rel="noopener noreferrer"
                    aria-label='visit the demo on behance'
                    whileHover="hover"
                    whileTap="tap"
                    variants={buttonVariants}
                >
                    <button aria-hidden="false" className="mt-6 bg-blue-800 hover:bg-transparent hover:text-blue-800 border-2 border-blue-800 transition-all text-white font-semibold text-sm tracking-wide rounded-md px-6 py-2.5">
                        View Demo
                    </button>
                </motion.a>
            )}
        </motion.div>
    </motion.div>
);

const GraphicDesign = () => {
    const settings = {
        dots: true,
        dotsClass: 'slick-dots',
        infinite: true,
        speed: 600,
        accessibility: true,
        defaults: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        swipeToSlide: true,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true,
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
            className="w-full mb-24"
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
                    href='https://www.behance.net/rodrigocobos1'
                    target='_blank'
                    rel="noopener noreferrer"
                    whileHover="hover"
                    whileTap="tap"
                    variants={buttonVariants}
                >
                    <button className="mt-6 bg-blue-800 hover:bg-transparent hover:text-blue-800 border-2 border-blue-800 transition-all text-white font-semibold text-sm tracking-wide rounded-md px-6 py-2.5">
                        View all Projects on Behance
                    </button>
                </motion.a>
            </motion.div>
        </motion.div>
    );
};

export default GraphicDesign;