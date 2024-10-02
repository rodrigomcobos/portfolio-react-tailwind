import React from 'react'
import { FaReact, FaHtml5, FaCss3Alt, FaJsSquare, FaNode, FaDatabase, } from 'react-icons/fa';
import { SiSequelize, SiPostgresql, SiTailwindcss, SiRedux, SiExpress } from 'react-icons/si';
import CurrentImg from '../assets/currentproject.png';
import CurrentImg2 from '../assets/currentproject2.png';


const CurrentProject = () => {
    return (
        <div>
            <section id="qualification" className="max-w-7xl max-md:max-w-md mx-auto md:mt-52 mt-24 px-6">
                <p className="text-sm flex justify-center items-center font-bold text-blue-800 mb-2">
                    <span className="rotate-90 inline-block mr-2">|</span> IN PROGRESS
                </p>
                <h2 className="text-gray-800 sm:text-4xl text-2xl font-extrabold text-center mb-16">
                    My Current Projects
                </h2>
            </section>

            {/* Project 1 */}
            <section className='mb-48'>
                <section className="grid md:grid-cols-2 items-center md:gap-8 gap-6 font-[sans-serif] max-w-7xl max-md:max-w-md mx-auto px-8">
                    <section className="md:h-[450px] mx-4">
                        <img src={CurrentImg} className="w-full h-full object-cover rounded-lg shadow-md" alt="Dining Experience" />
                    </section>
                    <section className="max-md:order-1 max-md:text-center">
                        <h2 className="md:text-2xl text-2xl md:leading-10 font-extrabold text-gray-800 mb-4">Evento Ticketing Platform</h2>
                        <p className="mt-4 text-base text-gray-800 leading-relaxed">Currently working on this project as an assessment to DevMountain Bootcamp. This will be a fully responsive and fully functional website that will include over 20 components and over 10 pages, utilizing a plethora of tools such as React, JavaScript, Tailwind for the front end and Node, Express, Sequelize ORM and PostgreSQL for the back end, for encryption and authentication I am using Bcrypt, also using EmailJS for form submissions. Also using third party packages like Leaflet, Dotenv, React Icons, Vite with Vite Express, React Router, Redux, Axios, Slick Carousel, React-date picker, and more while utilizing the Ticketmaster API for event data and storing saved data in a database. </p>

                        <div className="mt-8">
                            <p className="text-gray-800 font-bold text-lg mb-6">Main Tools Being Used</p>
                            <div className="flex flex-col items-center sm:items-baseline pl-2 gap-10">
                                <div>
                                    <p className='mb-4 font-semibold'>Frontend:</p>
                                    <div className='flex flex-row gap-2'>
                                        <FaReact size={30} className="inline-block mr-2 text-blue-800" />
                                        <FaHtml5 size={30} className="inline-block mr-2 text-blue-800" />
                                        <FaCss3Alt size={30} className="inline-block mr-2 text-blue-800" />
                                        <FaJsSquare size={30} className="inline-block mr-2 text-blue-800" />
                                        <SiTailwindcss size={30} className="inline-block mr-2 text-blue-800" />
                                    </div>
                                </div>
                                <div>
                                    <p className='mb-4 font-semibold'>Backend & Database:</p>
                                    <div className='flex flex-row gap-2'>
                                        <FaNode size={30} className="inline-block mr-2 text-blue-800" />
                                        <SiRedux size={30} className="inline-block mr-2 text-blue-800" />
                                        <SiExpress size={30} className="inline-block mr-2 text-blue-800" />
                                        <FaDatabase size={30} className="inline-block mr-2 text-blue-800" />
                                        <SiSequelize size={30} className="inline-block mr-2 text-blue-800" />
                                        <SiPostgresql size={30} className="inline-block mr-2 text-blue-800" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>
                <div className='flex justify-center mt-16'>
                    <a href='https://github.com/rodrigomcobos/evento--project-1' target='_blank'>
                        <button className="mt-6 bg-blue-800 hover:bg-transparent hover:text-blue-800 border-2 border-blue-800 transition-all text-white font-semibold text-sm tracking-wide rounded-md px-6 py-2.5">
                            View this Project's Progress on GitHub
                        </button>
                    </a>
                </div>
            </section>

            {/* Project 2 */}
            <section>
                <section className="grid md:grid-cols-2 items-center md:gap-8 gap-6 font-[sans-serif] max-w-7xl max-md:max-w-md mx-auto px-8">
                    <section className="md:h-[450px] mx-4">
                        <img src={CurrentImg2} className="w-full h-full object-cover rounded-lg shadow-md" alt="Dining Experience" />
                    </section>
                    <section className="max-md:order-1 max-md:text-center">
                        <h2 className="md:text-2xl text-2xl md:leading-10 font-extrabold text-gray-800 mb-4">CCBL Church Website Revamp</h2>
                        <p className="mt-4 text-base text-gray-800 leading-relaxed">This is a passion project I’m currently working on for my church, which has had a website in need of some serious attention for years. I took it upon myself to spearhead a complete redesign, leveraging modern technologies like React, EmailJS, TailwindCSS, and Vite to give it a fresh, vibrant look and seamless functionality. It’s still a work in progress, but I’m genuinely excited to see how it evolves and the impact it will have on our church. There are also exciting plans in the pipeline to incorporate a backend, allowing us to store and manage dynamic content like blog posts, sermons, gallery images, and much more. It’s been an incredibly rewarding experience, and I can’t wait to share the final result. </p>

                        <div className="mt-8">
                            <p className="text-gray-800 font-bold text-lg mb-6">Main Tools Being Used</p>
                            <div className="flex flex-col items-center sm:items-baseline pl-2 gap-10">
                                <div>
                                    <p className='mb-4 font-semibold'>Frontend:</p>
                                    <div className='flex flex-row gap-2'>
                                        <FaReact size={30} className="inline-block mr-2 text-blue-800" />
                                        <FaHtml5 size={30} className="inline-block mr-2 text-blue-800" />
                                        <FaCss3Alt size={30} className="inline-block mr-2 text-blue-800" />
                                        <FaJsSquare size={30} className="inline-block mr-2 text-blue-800" />
                                        <SiTailwindcss size={30} className="inline-block mr-2 text-blue-800" />
                                    </div>
                                </div>
                                <div>
                                    <p className='mb-4 font-semibold'>Backend & Database:</p>
                                    <div className='flex flex-row gap-2'>
                                        <FaNode size={30} className="inline-block mr-2 text-blue-800" />
                                        <SiExpress size={30} className="inline-block mr-2 text-blue-800" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>
                <div className='flex justify-center mt-16'>
                    <a href='https://github.com/rodrigomcobos/mocop-church-site' target='_blank'>
                        <button className="mt-6 bg-blue-800 hover:bg-transparent hover:text-blue-800 border-2 border-blue-800 transition-all text-white font-semibold text-sm tracking-wide rounded-md px-6 py-2.5">
                            View this Project's Progress on GitHub
                        </button>
                    </a>
                </div>
            </section>
        </div>

    )
}

export default CurrentProject