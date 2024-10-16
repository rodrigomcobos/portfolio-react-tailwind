import React from 'react';
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
        <div className="w-full mb-24">
            <Slider {...settings}>
                {cardData.map((card) => (
                    <div key={card.id} className="p-4">
                        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-between h-full">
                            <Image src={card.image} webp={card.imageWebp} alt={card.title} className="w-full h-56 object-cover mb-4 rounded-md" loading="lazy" />
                            <h3 className="text-xl font-semibold mb-2 text-center">{card.title}</h3>
                            <p className="text-gray-800 text-center mb-8">{card.description}</p>
                            <div className="flex space-x-2 mb-4">
                                {card.icons.map((icon, index) => (
                                    <span key={index} className="text-3xl text-blue-800">
                                        {icon}
                                    </span>
                                ))}
                            </div>
                            <a href={card.link} target='_blank' rel="noopener noreferrer" aria-label='visit demo website' aria-hidden="false">
                                <button aria-hidden="false" className="mt-6 bg-blue-800 hover:bg-transparent hover:text-blue-800 border-2 border-blue-800 transition-all text-white font-semibold text-sm tracking-wide rounded-md px-6 py-2.5">
                                    View Demo
                                </button>
                            </a>
                        </div>
                    </div>
                ))}
            </Slider>
            <div className='flex justify-center mt-16'>
                <a href='https://github.com/rodrigomcobos' target='_blank' rel="noopener noreferrer">
                    <button className="mt-6 bg-blue-800 hover:bg-transparent hover:text-blue-800 border-2 border-blue-800 transition-all text-white font-semibold text-sm tracking-wide rounded-md px-6 py-2.5">
                        View all Projects on GitHub
                    </button>
                </a>
            </div>
        </div>
    );
};

export default Frontend;