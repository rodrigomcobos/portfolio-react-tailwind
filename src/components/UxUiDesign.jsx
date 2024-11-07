import React from 'react';
import { motion } from 'framer-motion';
import Image from 'react-image-webp';
import Slider from 'react-slick';
import { FaFigma } from 'react-icons/fa';
import { SiAdobephotoshop, SiAdobeillustrator, SiSketch, SiWix, SiAdobexd } from "react-icons/si";

import UxUiDesign1Png from '../assets/uxdesign1.png';
import UxUiDesign1Webp from '../assets/uxdesign1.webp';
import UxUiDesign2Png from '../assets/uxdesign2.png';
import UxUiDesign2Webp from '../assets/uxdesign2.webp';
import UxUiDesign3Png from '../assets/uxdesign3.jpg';
import UxUiDesign3Webp from '../assets/uxdesign3.webp';
import UxUiDesign4Png from '../assets/uxdesign4.jpg';
import UxUiDesign4Webp from '../assets/uxdesign4.webp';
import UxUiDesign5Png from '../assets/uxdesign5.jpg';
import UxUiDesign5Webp from '../assets/uxdesign5.webp';
import UxUiDesign6Png from '../assets/uxdesign6.png';
import UxUiDesign6Webp from '../assets/uxdesign6.webp';

const cardData = [
    {
        id: 1,
        title: 'Restaurant App',
        description: 'App created using Figma. Restaurant app designed for a Japanese restaurant. Fully complete with most of the essential components. Check it out on my Figma.',
        image: UxUiDesign1Png,
        imageWebp: UxUiDesign1Webp,
        icons: [<FaFigma />, <SiAdobephotoshop />],
        link: 'https://www.figma.com/proto/DwQKu9cUD8sRGbjLzD01ms/Sushi-Restaurant-App-Project?page-id=73%3A2366&node-id=81-2367&node-type=canvas&viewport=574%2C528%2C0.21&t=t1FIfsxyztAdkQa0-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=84%3A3315',
    },
    {
        id: 2,
        title: 'Calorie Counter App',
        description: 'App created using Adobe Xd. Simple app with a sequential layout that is clear to use and paired with an apple watch app. Designed logo as well. Check out the demo.',
        image: UxUiDesign2Png,
        imageWebp: UxUiDesign2Webp,
        icons: [<SiAdobexd />, <SiAdobephotoshop />, <SiAdobeillustrator />],
        link: 'https://www.behance.net/gallery/154379931/Calorie-Counter-App',
    },
    {
        id: 3,
        title: 'Amazon Xtreme Fishing Website',
        description: 'Website designed using Wix Editor and currently deployed. Client requested an overhaul to the website. Client has requested to convert into a hard coded website soon.',
        image: UxUiDesign3Png,
        imageWebp: UxUiDesign3Webp,
        icons: [<SiWix />, <SiAdobephotoshop />, <SiAdobeillustrator />],
        link: 'https://www.amazonxtremefishing.com/',
    },
    {
        id: 4,
        title: 'Brazil Fritters Website',
        description: 'Website created using Wix Editor. Custom made from scratch. Layout was defined after extensive research and testing comparing to competitor sites. Site not currently live.',
        image: UxUiDesign4Png,
        imageWebp: UxUiDesign4Webp,
        icons: [<SiWix />, <SiAdobephotoshop />, <SiAdobeillustrator />],
        link: 'https://brazilfritters.wixsite.com/brazilfritters',
    },
    {
        id: 5,
        title: 'Spectre Case Website',
        description: 'E-commerce site created using Wix Editor. Custom made from scratch. Layout was defined after extensive research and testing comparing to competitor sites. Site not live.',
        image: UxUiDesign5Png,
        imageWebp: UxUiDesign5Webp,
        icons: [<SiWix />, <SiAdobephotoshop />, <SiAdobeillustrator />],
        link: 'https://spectrecase.wixsite.com/spectrecase',
    },
    {
        id: 6,
        title: 'Destiny Worship Homepage',
        description: 'Redesigned homepage for a local church. Layout was defined after extensive research and testing comparing to competitor sites. Site not live. Hired for redesign.',
        image: UxUiDesign6Png,
        imageWebp: UxUiDesign6Webp,
        icons: [<FaFigma />, <SiAdobephotoshop />, <SiAdobeillustrator />],
        link: 'https://www.behance.net/gallery/208227739/Destiny-Worship-Homepage-Redesign',
    },
];


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
        className="p-4 h-full"
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
    >
        <motion.div
            className="bg-white rounded-lg shadow-md p-6 flex flex-col h-[550px] sm:h-[650px]"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
        >
            {/* Image container with fixed height */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.02 }}
                className="w-full h-fit"
            >
                <Image
                    src={card.image}
                    webp={card.imageWebp}
                    alt={card.title}
                    className="w-full h-full object-cover rounded-md"
                    loading="lazy"
                />
            </motion.div>

            {/* Content container with flex grow */}
            <div className="flex flex-col flex-grow">
                <motion.h3
                    className="text-xl font-semibold mt-4 mb-2 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    {card.title}
                </motion.h3>

                <motion.p
                    className="text-gray-800 text-center flex-grow"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    {card.description}
                </motion.p>

                {/* Bottom section with fixed positioning */}
                <div className="mt-auto">
                    <div className="flex justify-center space-x-2 mb-4">
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
                        aria-label='visit the demo for this project'
                        whileHover="hover"
                        whileTap="tap"
                        variants={buttonVariants}
                        className="block text-center"
                    >
                        <button
                            aria-hidden="false"
                            className="bg-blue-800 hover:bg-transparent hover:text-blue-800 border-2 border-blue-800 transition-all text-white font-semibold text-sm tracking-wide rounded-md px-6 py-2.5"
                        >
                            View Demo
                        </button>
                    </motion.a>
                </div>
            </div>
        </motion.div>
    </motion.div>
);

const UxUiDesign = () => {
    const settings = {
        dots: true,
        dotsClass: 'slick-dots',
        infinite: true,
        accessibility: true,
        defaults: true,
        speed: 600,
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
            className="max-w-9xl mb-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            <motion.section
                id="qualification"
                className="max-w-9xl max-md:max-w-md mx-auto md:mt-52 mt-24 px-6"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <motion.h2
                    className="text-gray-800 sm:text-4xl text-2xl font-extrabold text-center mb-8 sm:mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    UX/UI Design Projects
                </motion.h2>
            </motion.section>

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

export default UxUiDesign;