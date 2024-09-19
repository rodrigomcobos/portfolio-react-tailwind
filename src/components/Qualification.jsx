import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar, Pagination, Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';

import { FaGraduationCap, FaBriefcase, FaCalendarAlt } from 'react-icons/fa';
import { MdVolunteerActivism } from "react-icons/md";
import ColumbiaImg from '../assets/columbia.png';
import CostcoImg from '../assets/costco.png';
import CourseraImg from '../assets/coursera.png';
import DevMountainImg from '../assets/devmountain.png';
import EddieBauerImg from '../assets/eddiebauer.png';
import FathomImg from '../assets/fathom.png';
import NctcImg from '../assets/nctc.png';
import FreelanceImg from '../assets/freelance.png';
import AmazonXtremeImg from '../assets/amazonxtreme.png';
import BlueberryImg from '../assets/blueberry.png';
import MocopImg from '../assets/mocop.png';

const Qualification = () => {
    const [activeTab, setActiveTab] = useState('education'); // Set default tab

    const tabsData = {
        education: [
            {
                title: 'Full Stack Web Developer',
                where: 'DevMountain - Lehi, UT',
                when: 'July 2024  - October 2024',
                image: DevMountainImg,
            },
            {
                title: 'Google UX Design Specialization',
                where: 'Coursera',
                when: '2022',
                image: CourseraImg,
            },
            {
                title: 'Computer Science Associate Degree',
                where: 'North Central Texas College - Denton, TX',
                when: '2010-2012',
                image: NctcImg,
            },
        ],
        work: [
            {
                title: 'UX Designer | FrontEnd Web Developer | Graphic Designer',
                where: 'Freelance - Remote',
                when: '2015-Present',
                image: FreelanceImg,
                description: 'I have contributed to numerous projects, including Amazon Xtreme, Blueberry Hill Bakery, REO MakeReady, and Mocop Church, as well as several smaller businesses like DFW Bounce and Brazil Fritters. For Blueberry Hill Bakery, I handled their graphic design and website development free of charge, motivated by both the experience and the satisfaction of helping the client. Most recently, I completed a UX design project, revamping the homepage for Destiny Worship in Destin, FL.',
            },
            {
                title: 'Assistant Store Manager',
                where: 'Eddie Bauer - Miramar Beach, FL',
                when: '2023-2024',
                image: EddieBauerImg,
                description: 'Through diligent market research, my team successfully increased sales by gaining a deep understanding of client needs and preferences. By utilizing tools like PowerBI to analyze consumer trends, I was able to identify patterns in customer behavior, seasonal demand shifts, and the impact of corporate strategies. This data-driven approach not only allowed me to tailor our offerings to meet evolving customer expectations, but also led to a significant boost in overall sales and profitability by 10.4% compared to previous YTD. By adapting to both customer feedback and seasonal changes, I consistently aligned business operations with market demands, ensuring sustained growth and success.'
            },
            {
                title: 'Department Supervisor',
                where: 'Columbia Sportswear - Miramar Beach, FL',
                when: '2022-2023',
                image: ColumbiaImg,
                description: "I was consistently recognized for achieving the best department performance, maintaining a strong upward trajectory with year-to-date (YTD) metrics that outperformed the previous year's by 13.8%. This success was driven in part by my efforts to coach and mentor sales associates, equipping them with strategic techniques to enhance their individual performance and meet sales targets. Additionally, I optimized my own sales strategies through the careful analysis of PowerBI data and other key departmental metrics, allowing me to fine-tune approaches and contribute to the department's overall success."
            },
            {
                title: 'Real Estate Agent',
                where: 'Fathom Realty - DFW, TX',
                when: '2019-2022',
                image: FathomImg,
                description: "I developed comprehensive marketing plans and strategies, utilizing social media platforms such as Facebook Marketplace and FiveMiles to attract buyers and achieve a remarkable 100% profit with zero upfront monetary investment. By effectively leveraging CRM tools to manage leads and prospects, I drove a 24% increase in gross profit growth. In my first year in the market, I achieved personal best sales of over $3 million. Building strong customer relationships and cultivating a robust referral network allowed me to fuel business growth while keeping marketing costs low, significantly boosting net income. I also led negotiations, helping clients save thousands of dollars by securing optimal deals, and personally performed professional property photoshoots while designing all marketing materials to further enhance sales and engagement."
            },
            {
                title: 'Department Supervisor',
                where: 'Costco Wholesale - Dallas, TX',
                when: '2017-2019',
                image: CostcoImg,
                description: "I was quickly promoted to management within my first year, recognized for my exemplary performance as a regular employee. In this leadership role, I coached and mentored team members on strategic sales techniques, fostering both individual and collective growth. I coordinated multiple interviews and pre-screening applications, ensuring we selected the best candidates to strengthen our team. By creating a competitive yet collaborative culture, I motivated colleagues and improved overall department performance by 4.2%, driving success through teamwork and a shared commitment to excellence."
            },
            {
                title: 'Branding Manager | UX Designer | Graphic Designer',
                where: 'Amazon Xtreme Fishing, LLC - Remote',
                when: '2015-2019',
                image: AmazonXtremeImg,
                description: "I achieved a remarkable 200% growth in social media presence, increasing engagement from 300+ to over 1,200 likes. This expansion in visibility translated into 80k+ active user views on the website, reflecting a significant boost in traffic. Positive user feedback highlighted the intuitive design and usability of the site, reinforcing the success of these efforts. Additionally, I successfully elevated the website’s SEO performance, securing a 3rd place ranking on Google Search, further enhancing the company's digital footprint and visibility."
            },
        ],
        voluntary: [
            {
                title: 'Front End Web Developer',
                where: 'Blueberry Hill Bakery - Freeport, FL',
                when: '2022',
                image: BlueberryImg,
                description: 'I took the initiative to design and develop a complete website for a small mom-and-pop shop in Freeport, FL, including creating their logo and crafting the UI from scratch. I implemented a fully responsive design to enhance user experience across devices. Drawn by their fantastic pastries and the genuine charm of the business, I volunteered for the project after noticing their outdated website, which was in urgent need of improvement. It was a challenge I was eager to tackle, knowing how much a strong online presence could benefit their growth.'
            },
            {
                title: 'Logo Designer',
                where: 'MOCOP Church - Lewisville, TX',
                when: '2019',
                image: MocopImg,
                description: 'I designed a refreshed logo for the church using Illustrator after they approached me for an update. It was a meaningful project, as it was the church I attended before relocating to Florida in 2021. While they later made some modifications to the logo, I remain involved with their branding and intend to revamp their outdated website, which is in serious need of improvement.'
            }
        ]
    };

    // Function to render the reusable cards based on the active tab
    const renderCards = (tab) => (
        <section>
            <div className="block md:hidden"> {/* Mobile view slider */}
                <Swiper
                    modules={[Pagination, Scrollbar, Autoplay, Navigation]}
                    spaceBetween={10}
                    slidesPerView={1}
                    loop={false}
                    scrollbar={{ draggable: true }}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 2000, disableOnInteraction: false }}
                    navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
                >
                    {tabsData[tab].map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="bg-white shadow-md rounded-lg overflow-hidden mb-6">
                                <div className="p-6 pb-8">
                                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{item.title}</h3>
                                    <p className="text-lg text-blue-800 mb-4">{item.where}</p>
                                    <div className="flex items-center text-gray-800">
                                        <FaCalendarAlt className="mr-2" />
                                        <span>{item.when}</span>
                                    </div>
                                    <p className="text-gray-800 mt-4">{item.description}</p>
                                </div>
                                <div className="flex justify-center">
                                    <img
                                        src={item.image}
                                        alt="image"
                                        className="object-contain h-36 border-[20px] border-white"
                                    />
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <div className="hidden md:block"> {/* Desktop view */}
                {tabsData[tab].map((item, index) => (
                    <div key={index} className="max-w-7xl mx-auto mt-10 bg-white shadow-md rounded-lg overflow-hidden mb-6">
                        <div className="flex flex-col md:flex-row">
                            {/* Left Side - 2/3 */}
                            <div className="w-full md:w-2/3 p-6 pb-8">
                                <h3 className="text-2xl font-bold text-gray-800 mb-2">{item.title}</h3>
                                <p className="text-lg text-blue-800 mb-4">{item.where}</p>
                                <div className="flex items-center text-gray-800">
                                    <FaCalendarAlt className="mr-2" />
                                    <span>{item.when}</span>
                                </div>
                                <p className="text-gray-800 mt-4">{item.description}</p>
                            </div>

                            {/* Right Side - 1/3 */}
                            <div className="w-full md:w-1/3 hidden md:block">
                                <img
                                    src={item.image}
                                    alt="image"
                                    className="object-contain h-36 mx-auto border-[20px] border-white"
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );



    return (
        <div id="qualification" className="max-w-7xl max-md:max-w-md mx-auto md:mt-52 mt-24 px-6">
            <p className="text-sm flex justify-center items-center font-bold text-blue-800 mb-2">
                <span className="rotate-90 inline-block mr-2">|</span> QUALIFICATION
            </p>
            <h2 className="text-gray-800 sm:text-4xl text-3xl font-extrabold text-center mb-16">
                Education & Work
            </h2>

            <div className="w-full">
                <div className="relative right-0">
                    {/* Tabs List */}
                    <ul className="relative flex flex-wrap px-1.5 py-1.5 list-none rounded-md bg-slate-100" role="list">
                        <li role='presentation' className="flex-auto text-center">
                            <a
                                className={`flex items-center justify-center w-full px-0 py-2 text-lg font-semibold transition-all ease-in-out border-0 rounded-md cursor-pointer 
                                ${activeTab === 'education' ? 'text-white font-bold bg-blue-800' : 'text-slate-800'}`}
                                onClick={() => setActiveTab('education')}
                                role="tab education"
                            >
                                <FaGraduationCap className="inline-block mr-2" />
                                Education
                            </a>
                        </li>
                        <li className="flex-auto text-center">
                            <a
                                className={`flex items-center justify-center w-full px-0 py-2 text-lg font-semibold transition-all ease-in-out border-0 rounded-md cursor-pointer 
                                ${activeTab === 'work' ? 'text-white font-bold bg-blue-800' : 'text-slate-800'}`}
                                onClick={() => setActiveTab('work')}
                                role="tab work"
                            >
                                <FaBriefcase className="inline-block mr-2" />
                                Work History
                            </a>
                        </li>
                        <li className="flex-auto text-center">
                            <a
                                className={`flex items-center justify-center w-full px-0 py-2 text-lg font-semibold transition-all ease-in-out border-0 rounded-md cursor-pointer 
                                ${activeTab === 'voluntary' ? 'text-white font-bold bg-blue-800' : 'text-slate-800'}`}
                                onClick={() => setActiveTab('voluntary')}
                                role="tab voluntary"
                            >
                                <MdVolunteerActivism className="inline-block mr-2" />
                                Volunteer Work
                            </a>
                        </li>
                    </ul>

                    {/* Tabs Content */}
                    <div className="p-5">
                        {activeTab === 'education' && renderCards('education')}
                        {activeTab === 'work' && renderCards('work')}
                        {activeTab === 'voluntary' && renderCards('voluntary')}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Qualification;
