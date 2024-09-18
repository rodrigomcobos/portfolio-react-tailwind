import React, { useState } from 'react';
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
            },
            {
                title: 'Assistant Store Manager',
                where: 'Eddie Bauer - Miramar Beach, FL',
                when: '2023-2024',
                image: EddieBauerImg,
            },
            {
                title: 'Department Supervisor',
                where: 'Columbia Sportswear - Miramar Beach, FL',
                when: '2022-2023',
                image: ColumbiaImg,
            },
            {
                title: 'Real Estate Agent',
                where: 'Fathom Realty - DFW, TX',
                when: '2019-2022',
                image: FathomImg,
            },
            {
                title: 'Department Supervisor',
                where: 'Costco Wholesale - Dallas, TX',
                when: '2017-2019',
                image: CostcoImg,
            },
            {
                title: 'Branding Manager | UX Designer | Graphic Designer',
                where: 'Amazon Xtreme Fishing, LLC - Remote',
                when: '2015-2019',
                image: AmazonXtremeImg,
            },
        ],
        voluntary: [
            {
                title: 'Front End Web Developer',
                where: 'Blueberry Hill Bakery - Freeport, FL',
                when: '2022',
                image: BlueberryImg,
            },
            {
                title: 'Logo Designer',
                where: 'MOCOP Church - Lewisville, TX',
                when: '2019',
                image: MocopImg,
            }
        ]
    };

    // Function to render the reusable cards based on the active tab
    const renderCards = (tab) => (
        <section>
            {tabsData[tab].map((item, index) => (
                <div key={index} className="max-w-7xl mx-auto max-h-40 mt-10 bg-white shadow-md rounded-lg overflow-hidden mb-6">
                    <div className="flex flex-col md:flex-row">
                        {/* Left Side - 2/3 */}
                        <div className="w-full md:w-2/3 p-6">
                            <h3 className="text-2xl font-bold text-gray-800 mb-2">{item.title}</h3>
                            <p className="text-lg text-blue-600 mb-4">{item.where}</p>
                            <div className="flex items-center text-gray-600">
                                <FaCalendarAlt className="mr-2" />
                                <span>{item.when}</span>
                            </div>
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
        </section>
    );

    return (
        <div id="qualification" className="max-w-7xl max-md:max-w-md mx-auto md:mt-52 mt-24 px-6">
            <p className="text-sm flex justify-center items-center font-bold text-blue-600 mb-2">
                <span className="rotate-90 inline-block mr-2">|</span> QUALIFICATION
            </p>
            <h2 className="text-gray-800 sm:text-4xl text-2xl font-extrabold text-center mb-16">
                Education & Work
            </h2>

            <div className="w-full">
                <div className="relative right-0">
                    {/* Tabs List */}
                    <ul className="relative flex flex-wrap px-1.5 py-1.5 list-none rounded-md bg-slate-100" role="list">
                        <li className="flex-auto text-center">
                            <a
                                className={`flex items-center justify-center w-full px-0 py-2 text-lg font-semibold transition-all ease-in-out border-0 rounded-md cursor-pointer 
                                ${activeTab === 'education' ? 'text-white font-bold bg-blue-600' : 'text-slate-600'}`}
                                onClick={() => setActiveTab('education')}
                                role="tab"
                            >
                                <FaGraduationCap className="inline-block mr-2" />
                                Education
                            </a>
                        </li>
                        <li className="flex-auto text-center">
                            <a
                                className={`flex items-center justify-center w-full px-0 py-2 text-lg font-semibold transition-all ease-in-out border-0 rounded-md cursor-pointer 
                                ${activeTab === 'work' ? 'text-white font-bold bg-blue-600' : 'text-slate-600'}`}
                                onClick={() => setActiveTab('work')}
                                role="tab"
                            >
                                <FaBriefcase className="inline-block mr-2" />
                                Work History
                            </a>
                        </li>
                        <li className="flex-auto text-center">
                            <a
                                className={`flex items-center justify-center w-full px-0 py-2 text-lg font-semibold transition-all ease-in-out border-0 rounded-md cursor-pointer 
                                ${activeTab === 'voluntary' ? 'text-white font-bold bg-blue-600' : 'text-slate-600'}`}
                                onClick={() => setActiveTab('voluntary')}
                                role="tab"
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
