import React from 'react'
import { FaReact, FaHtml5, FaCss3Alt, FaJsSquare, FaNode, FaDatabase, } from 'react-icons/fa';
import { SiSequelize, SiPostgresql, SiTailwindcss, SiRedux, SiExpress } from 'react-icons/si';
import CurrentImg from '../assets/currentproject.png';


const CurrentProject = () => {
    return (
        <div>
            <section id="qualification" className="max-w-7xl max-md:max-w-md mx-auto md:mt-52 mt-24 px-6">
                <p className="text-sm flex justify-center items-center font-bold text-blue-600 mb-2">
                    <span className="rotate-90 inline-block mr-2">|</span> IN PROGRESS
                </p>
                <h2 className="text-gray-800 sm:text-4xl text-2xl font-extrabold text-center mb-16">
                    My Current Project
                </h2>
            </section>

            <div className="grid md:grid-cols-2 items-center md:gap-8 gap-6 font-[sans-serif] max-w-7xl max-md:max-w-md mx-auto px-8">
                <div className="max-md:order-1 max-md:text-center">
                    <h2 className="md:text-3xl text-2xl md:leading-10 font-extrabold text-gray-800 mb-4">Evento Events Website</h2>
                    <p className="mt-4 text-base text-gray-600 leading-relaxed">Currently working on this project as an assessment to DevMountain Bootcamp. This will be a fully responsive and fully functional website that will include over 20 components and over 10 pages, utilizing a plethora of tools such as React, JavaScript, Tailwind for the front end and Node, Express, Sequelize ORM and PostgreSQL for the back end, for encryption and authentication I am using Bcrypt, also using EmailJS for form submissions. Also using third party packages like Leaflet, Dotenv, React Icons, Vite with Vite Express, React Router, Redux, Axios, Slick Carousel, React-date picker, and more while utilizing the Eventbrite API for event data and storing saved data in a database. </p>

                    <div className="mt-8">
                        <h4 className="text-gray-800 font-bold text-lg mb-6">Main Tools Being Used</h4>
                        <div className="flex flex-col items-center sm:items-baseline pl-2 gap-10">
                            <div>
                                <p className='mb-4 font-semibold'>Frontend:</p>
                                <div className='flex flex-row gap-2'>
                                    <FaReact size={30} className="inline-block mr-2 text-blue-600" />
                                    <FaHtml5 size={30} className="inline-block mr-2 text-blue-600" />
                                    <FaCss3Alt size={30} className="inline-block mr-2 text-blue-600" />
                                    <FaJsSquare size={30} className="inline-block mr-2 text-blue-600" />
                                    <SiTailwindcss size={30} className="inline-block mr-2 text-blue-600" />
                                </div>
                            </div>
                            <div>
                                <p className='mb-4 font-semibold'>Backend & Database:</p>
                                <div className='flex flex-row gap-2'>
                                    <FaNode size={30} className="inline-block mr-2 text-blue-600" />
                                    <SiRedux size={30} className="inline-block mr-2 text-blue-600" />
                                    <SiExpress size={30} className="inline-block mr-2 text-blue-600" />
                                    <FaDatabase size={30} className="inline-block mr-2 text-blue-600" />
                                    <SiSequelize size={30} className="inline-block mr-2 text-blue-600" />
                                    <SiPostgresql size={30} className="inline-block mr-2 text-blue-600" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="md:h-[450px]">
                    <img src={CurrentImg} className="w-full h-full object-cover rounded-lg shadow-md" alt="Dining Experience" />
                </div>
            </div>
            <div className='flex justify-center mt-16'>
                <a href='https://github.com/rodrigomcobos/evento--project-1' target='_blank'>
                    <button className="mt-6 bg-blue-600 hover:bg-transparent hover:text-blue-600 border-2 border-blue-600 transition-all text-white font-semibold text-sm tracking-wide rounded-md px-6 py-2.5">
                        View this Project's Progress on GitHub
                    </button>
                </a>
            </div>
        </div>

    )
}

export default CurrentProject