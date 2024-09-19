import React from 'react';
import Slider from 'react-slick';
import { FaFigma } from 'react-icons/fa'; // Example icons
import { SiAdobephotoshop, SiAdobeillustrator, SiSketch, SiWix, SiAdobexd } from "react-icons/si";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import UxUiDesign1 from '../assets/uxdesign1.png';
import UxUiDesign2 from '../assets/uxdesign2.png';
import UxUiDesign3 from '../assets/uxdesign3.jpg';
import UxUiDesign4 from '../assets/uxdesign4.jpg';
import UxUiDesign5 from '../assets/uxdesign5.jpg';
import UxUiDesign6 from '../assets/uxdesign6.png';

const cardData = [
    {
        id: 1,
        title: 'Restaurant App',
        description: 'App created using Figma. Restaurant app designed for a Japanese restaurant. Fully complete with most of the essential components. Check it out on my Figma.',
        image: UxUiDesign1,
        icons: [<FaFigma />, <SiAdobephotoshop />],
        link: 'https://www.figma.com/proto/DwQKu9cUD8sRGbjLzD01ms/Sushi-Restaurant-App-Project?page-id=73%3A2366&node-id=81-2367&node-type=canvas&viewport=574%2C528%2C0.21&t=t1FIfsxyztAdkQa0-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=84%3A3315',
    },
    {
        id: 2,
        title: 'Calorie Counter App',
        description: 'App created using Adobe Xd. Simple app with a sequential layout that is clear to use and paired with an apple watch app. Designed logo as well. Check out the demo.',
        image: UxUiDesign2,
        icons: [<SiAdobexd />, <SiAdobephotoshop />, <SiAdobeillustrator />],
        link: 'https://www.behance.net/gallery/154379931/Calorie-Counter-App',
    },
    {
        id: 3,
        title: 'Amazon Xtreme Fishing Website',
        description: 'Website designed using Wix Editor and currently deployed. Client requested an overhaul to the website. Client has requested to convert into a hard coded website soon.',
        image: UxUiDesign3,
        icons: [<SiWix />, <SiAdobephotoshop />, <SiAdobeillustrator />],
        link: 'https://www.amazonxtremefishing.com/',
    },
    {
        id: 4,
        title: 'Brazil Fritters Website',
        description: 'Website created using Wix Editor. Custom made from scratch. Layout was defined after extensive research and testing comparing to competitor sites. Site not currently live.',
        image: UxUiDesign4,
        icons: [<SiWix />, <SiAdobephotoshop />, <SiAdobeillustrator />],
        link: 'https://brazilfritters.wixsite.com/brazilfritters',
    },
    {
        id: 5,
        title: 'Spectre Case Website',
        description: 'E-commerce site created using Wix Editor. Custom made from scratch. Layout was defined after extensive research and testing comparing to competitor sites. Site not live.',
        image: UxUiDesign5,
        icons: [<SiWix />, <SiAdobephotoshop />, <SiAdobeillustrator />],
        link: 'https://spectrecase.wixsite.com/spectrecase',
    },
    {
        id: 6,
        title: 'Destiny Worship Homepage',
        description: 'Redesigned homepage for a local church. Layout was defined after extensive research and testing comparing to competitor sites. Site not live. Hired for redesign.',
        image: UxUiDesign6,
        icons: [<FaFigma />, <SiAdobephotoshop />, <SiAdobeillustrator />],
        link: 'https://www.behance.net/gallery/208227739/Destiny-Worship-Homepage-Redesign',
    },
];

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
        <div className="w-full mb-20">
            <Slider {...settings}>
                {cardData.map((card) => (
                    <div key={card.id} className="p-4">
                        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-between h-full">
                            <img src={card.image} alt={card.title} className="w-full h-56 object-cover mb-4 rounded-md" />
                            <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                            <p className="text-gray-800 text-center mb-8">{card.description}</p>
                            <div className="flex space-x-2 mb-4">
                                {card.icons.map((icon, index) => (
                                    <span key={index} className="text-3xl text-blue-800">
                                        {icon}
                                    </span>
                                ))}
                            </div>
                            <a href={card.link} target='_blank' aria-label='visit the demo for this project' aria-hidden="false">
                                <button aria-hidden="false" className="mt-6 bg-blue-800 hover:bg-transparent hover:text-blue-800 border-2 border-blue-800 transition-all text-white font-semibold text-sm tracking-wide rounded-md px-6 py-2.5">
                                    View Demo
                                </button>
                            </a>
                        </div>
                    </div>
                ))}
            </Slider>
            <div className='flex justify-center mt-16'>
                <a href='https://www.behance.net/rodrigocobos1' target='_blank'>
                    <button className="mt-6 bg-blue-800 hover:bg-transparent hover:text-blue-800 border-2 border-blue-800 transition-all text-white font-semibold text-sm tracking-wide rounded-md px-6 py-2.5">
                        View all Projects on Behance
                    </button>
                </a>
            </div>
        </div>
    );
};

export default UxUiDesign;
