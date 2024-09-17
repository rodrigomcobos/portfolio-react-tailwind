import React from 'react';
import Slider from 'react-slick';
import { FaReact, FaHtml5, FaCss3Alt, FaJsSquare, FaNode, FaDatabase } from 'react-icons/fa'; // Example icons
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import UxUiDesign1 from '../assets/uxdesign1.png';
import UxUiDesign2 from '../assets/uxdesign2.png';
import UxUiDesign3 from '../assets/uxdesign3.jpg';
import UxUiDesign4 from '../assets/uxdesign4.jpg';
import UxUiDesign5 from '../assets/uxdesign5.jpg';

const cardData = [
    {
        id: 1,
        title: 'Card One',
        description: 'This is a brief description of card one.',
        image: UxUiDesign1,
        icons: [<FaReact />, <FaHtml5 />, <FaCss3Alt />, <FaJsSquare />, <FaNode />, <FaDatabase />],
        link: '',
    },
    {
        id: 2,
        title: 'Card Two',
        description: 'This is a brief description of card two.',
        image: UxUiDesign2,
        icons: [<FaReact />, <FaHtml5 />, <FaCss3Alt />, <FaJsSquare />, <FaNode />, <FaDatabase />],
        link: '',
    },
    {
        id: 3,
        title: 'Card Three',
        description: 'This is a brief description of card three.',
        image: UxUiDesign3,
        icons: [<FaReact />, <FaHtml5 />, <FaCss3Alt />, <FaJsSquare />, <FaNode />, <FaDatabase />],
        link: '',
    },
    {
        id: 4,
        title: 'Card Four',
        description: 'This is a brief description of card four.',
        image: UxUiDesign4,
        icons: [<FaReact />, <FaHtml5 />, <FaCss3Alt />, <FaJsSquare />, <FaNode />, <FaDatabase />],
        link: '',
    },
    {
        id: 5,
        title: 'Card Five',
        description: 'This is a brief description of card five.',
        image: UxUiDesign5,
        icons: [<FaReact />, <FaHtml5 />, <FaCss3Alt />, <FaJsSquare />, <FaNode />, <FaDatabase />],
        link: '',
    }
];

const UxUiDesign = () => {
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
        <div className="w-full mb-20">
            <Slider {...settings}>
                {cardData.map((card) => (
                    <div key={card.id} className="p-4">
                        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-between h-full">
                            <img src={card.image} alt={card.title} className="w-full h-56 object-cover mb-4 rounded-md" />
                            <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
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

export default UxUiDesign;
