import React from 'react';
import Slider from 'react-slick';
import { FaReact, FaHtml5, FaCss3Alt, FaJsSquare, FaNode, FaDatabase } from 'react-icons/fa';
import { SiAdobephotoshop, SiAdobeillustrator, SiSketch } from "react-icons/si";
// Example icons
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import GraphicDesign1 from '../assets/graphicDesign1.png';
import GraphicDesign2 from '../assets/graphicDesign2.jpg';
import GraphicDesign3 from '../assets/graphicDesign3.jpg';
import GraphicDesign4 from '../assets/graphicDesign4.jpg';
import GraphicDesign5 from '../assets/graphicDesign5.jpg';
import GraphicDesign6 from '../assets/graphicDesign6.jpg';
import GraphicDesign7 from '../assets/graphicDesign7.jpg';
import GraphicDesign8 from '../assets/graphicDesign8.jpg';
import GraphicDesign9 from '../assets/graphicDesign9.png';

const cardData = [
    {
        id: 1,
        title: 'Purkins Pet Store Logo',
        description: 'Logo created for my small pet-store e-commerce in 2020 to sell pet products. Website was originally designed in Spotify, store is closed now.',
        image: GraphicDesign1,
        icons: [<FaReact />, <FaHtml5 />, <FaCss3Alt />, <FaJsSquare />, <FaNode />, <FaDatabase />],
        link: '',
    },
    {
        id: 2,
        title: 'Blueberry Hill Bakery Logo',
        description: 'Logo created to substitute the original Blueberry Hill Bakery logo. Made with the intention to reflect their brand identity which serves pastries.',
        image: GraphicDesign2,
        icons: [<FaReact />, <FaHtml5 />, <FaCss3Alt />, <FaJsSquare />, <FaNode />, <FaDatabase />],
        link: '',
    },
    {
        id: 3,
        title: 'Com Capricho Brazilian Kitchen & Cafe Logo',
        description: 'Logo created for a small cafe that serves brazilian cuisine. Created using Brazil flag colors as its color scheme',
        image: GraphicDesign3,
        icons: [<FaReact />, <FaHtml5 />, <FaCss3Alt />, <FaJsSquare />, <FaNode />, <FaDatabase />],
        link: '',
    },
    {
        id: 4,
        title: 'DFW Bounce',
        description: 'Logo created for a bounce house company in Dallas, TX. Color scheme was made to reflect a fun time with kids with the DFW cityscape.',
        image: GraphicDesign4,
        icons: [<FaReact />, <FaHtml5 />, <FaCss3Alt />, <FaJsSquare />, <FaNode />, <FaDatabase />],
        link: '',
    },
    {
        id: 5,
        title: 'Jutul Performance Gear',
        description: 'Logo created for a performance wear company. Name based on Norwegian name for "giant". A personal project for an e-commerce store that I plan to launch.',
        image: GraphicDesign5,
        icons: [<FaReact />, <FaHtml5 />, <FaCss3Alt />, <FaJsSquare />, <FaNode />, <FaDatabase />],
        link: '',
    },
    {
        id: 6,
        title: 'Card Five',
        description: 'This is a brief description of card five.',
        image: GraphicDesign6,
        icons: [<FaReact />, <FaHtml5 />, <FaCss3Alt />, <FaJsSquare />, <FaNode />, <FaDatabase />],
        link: '',
    },
    {
        id: 7,
        title: 'Card Five',
        description: 'This is a brief description of card five.',
        image: GraphicDesign7,
        icons: [<FaReact />, <FaHtml5 />, <FaCss3Alt />, <FaJsSquare />, <FaNode />, <FaDatabase />],
        link: '',
    },
    {
        id: 8,
        title: 'Card Five',
        description: 'This is a brief description of card five.',
        image: GraphicDesign8,
        icons: [<FaReact />, <FaHtml5 />, <FaCss3Alt />, <FaJsSquare />, <FaNode />, <FaDatabase />],
        link: '',
    },
    {
        id: 9,
        title: 'Card Five',
        description: 'This is a brief description of card five.',
        image: GraphicDesign9,
        icons: [<FaReact />, <FaHtml5 />, <FaCss3Alt />, <FaJsSquare />, <FaNode />, <FaDatabase />],
        link: '',
    },
];

const GraphicDesign = () => {
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
                            <p className="text-gray-600 mb-8">{card.description}</p>
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
            <div className='flex justify-center mt-16'>
                <a href='https://www.behance.net/rodrigocobos1' target='_blank'>
                    <button className="mt-6 bg-blue-600 hover:bg-transparent hover:text-blue-600 border-2 border-blue-600 transition-all text-white font-semibold text-sm tracking-wide rounded-md px-6 py-2.5">
                        View all Projects on Behance
                    </button>
                </a>
            </div>

        </div>
    );
};

export default GraphicDesign;
