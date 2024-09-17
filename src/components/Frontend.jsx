import React from 'react';
import Slider from 'react-slick';
import { FaReact, FaHtml5, FaCss3Alt, FaJsSquare, FaNode, FaDatabase, FaBootstrap } from 'react-icons/fa';
import { SiJquery } from "react-icons/si";
import FrontendImg1 from '../assets/frontend1.jpg';
import FrontendImg2 from '../assets/frontend2.jpg';
import FrontendImg3 from '../assets/frontend3.jpg';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const cardData = [
    {
        id: 1,
        title: 'Blueberry Hill Bakery',
        description: 'Website created for a small business located in Freeport, FL. Website responsive with all UI components.',
        image: FrontendImg1,
        icons: [<FaHtml5 />, <FaCss3Alt />, <FaBootstrap />, <FaNode />, <SiJquery />],
        link: 'https://blueberry-hill-bakery.netlify.app',
    },
    {
        id: 2,
        title: 'Brazilian Ecotourism Landing',
        description: 'Landing page responsive with all UI components and animated interactions. Created for a local tour company.',
        image: FrontendImg2,
        icons: [<FaHtml5 />, <FaCss3Alt />],
        link: 'https://amazonas-ecoturismo.netlify.app',
    },
    {
        id: 3,
        title: 'REO MakeReady Landing',
        description: 'Responsive landing page with all UI components. Created for a local remodeling company.',
        image: FrontendImg3,
        icons: [<FaHtml5 />, <FaCss3Alt />],
        link: 'https://reo-make-ready.netlify.app',
    },
];

const Frontend = () => {
    const settings = {
        dots: true,
        dotsClass: 'slick-dots',
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
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
                            <img src={card.image} alt={card.title} className="w-full h-56 object-cover mb-4 rounded-md" />
                            <h3 className="text-xl font-semibold mb-2 text-center">{card.title}</h3>
                            <p className="text-gray-600 text-center mb-8">{card.description}</p>
                            <div className="flex space-x-2 mb-4">
                                {card.icons.map((icon, index) => (
                                    <span key={index} className="text-2xl text-blue-500">
                                        {icon}
                                    </span>
                                ))}
                            </div>
                            <a href={card.link} target='_blank'>
                                <button className="mt-6 bg-blue-600 hover:bg-transparent hover:text-blue-600 border-2 border-blue-600 transition-all text-white font-semibold text-sm tracking-wide rounded-md px-6 py-2.5">
                                    View Demo
                                </button>
                            </a>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Frontend;
