import React from 'react';
import { motion } from 'framer-motion';
import Image from 'react-image-webp';
import { FaReact, FaHtml5, FaCss3Alt, FaJsSquare, FaNode, FaDatabase } from 'react-icons/fa';
import { SiSequelize, SiPostgresql, SiTailwindcss, SiRedux, SiExpress } from 'react-icons/si';
import Slider from 'react-slick';
import CurrentImgPng from '../assets/currentproject.png';
import CurrentImgWebp from '../assets/currentproject.webp';
import CurrentImg2Png from '../assets/currentproject2.png';
import CurrentImg2Webp from '../assets/currentproject2.webp';
import CurrentImg3Png from '../assets/currentproject3.png';
import CurrentImg3Webp from '../assets/currentproject3.webp';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const TechStack = ({ frontend, backend }) => (
    <motion.div
        className="mt-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
    >
        <p className="text-gray-800 font-bold text-lg mb-6">Main Tools Being Used</p>
        <div className="flex flex-col items-center sm:items-baseline pl-2 gap-10">
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
            >
                <p className='mb-4 font-semibold'>Frontend:</p>
                <div className='flex flex-row gap-2'>
                    {frontend.map((Icon, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: 0.1 * index }}
                            whileHover={{ scale: 1.2 }}
                        >
                            <Icon size={30} className="inline-block mr-2 text-blue-800" />
                        </motion.div>
                    ))}
                </div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
            >
                <p className='mb-4 font-semibold'>Backend & Database:</p>
                <div className='flex flex-row gap-2'>
                    {backend.map((Icon, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: 0.1 * index }}
                            whileHover={{ scale: 1.2 }}
                        >
                            <Icon size={30} className="inline-block mr-2 text-blue-800" />
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    </motion.div>
);

const ProjectSection = ({ image, imageWebp, title, description, frontend, backend, githubLink }) => (
    <motion.div
        className="px-4 py-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
    >
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.02 }}
        >
            <Image
                src={image}
                webp={imageWebp}
                className="w-full h-full object-contain rounded-lg shadow-md mb-6"
                alt={title}
                loading="lazy"
            />
        </motion.div>
        <motion.h2
            className="text-2xl font-extrabold text-gray-800 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
        >
            {title}
        </motion.h2>
        <motion.p
            className="text-base text-gray-800 leading-relaxed mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
        >
            {description}
        </motion.p>
        <TechStack frontend={frontend} backend={backend} />
        <motion.div
            className='flex justify-center mt-8'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
        >
            <motion.a
                href={githubLink}
                target='_blank'
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                <button className="bg-blue-800 hover:bg-transparent hover:text-blue-800 border-2 border-blue-800 transition-all text-white font-semibold text-sm tracking-wide rounded-md px-6 py-2.5">
                    View Project on GitHub
                </button>
            </motion.a>
        </motion.div>
    </motion.div>
);

const CurrentProject = () => {
    const projects = [
        {
            image: CurrentImgPng,
            imageWebp: CurrentImgWebp,
            title: "Evento Ticketing Platform",
            description: "Currently working on this project as an assessment to DevMountain Bootcamp. This will be a fully responsive and fully functional website that will include over 20 components and over 10 pages, utilizing a plethora of tools such as React, JavaScript, Tailwind for the front end and Node, Express, Sequelize ORM and PostgreSQL for the back end, for encryption and authentication I am using Bcrypt, also using EmailJS for form submissions. Also using third party packages like Leaflet, Dotenv, React Icons, Vite with Vite Express, React Router, Redux, Axios, Slick Carousel, React-date picker, and more while utilizing the Ticketmaster API for event data and storing saved data in a database.",
            frontend: [FaReact, FaHtml5, FaCss3Alt, FaJsSquare, SiTailwindcss],
            backend: [FaNode, SiRedux, SiExpress, FaDatabase, SiSequelize, SiPostgresql],
            githubLink: 'https://github.com/rodrigomcobos/evento--project-1'
        },
        {
            image: CurrentImg3Png,
            imageWebp: CurrentImg3Webp,
            title: "Timeline Slot Scheduling Platform",
            description: "Timeline Slot is an online appointment scheduling platform developed by a team of three developers to simplify booking for service-based businesses. The platform allows businesses to manage schedules, clients, and services efficiently, while providing clients with a user-friendly interface for booking and managing appointments. Built with React for a responsive interface and Redux for efficient state management, the platform uses Tailwind CSS for modern styling. On the backend, Node.js, Express, and Sequelize manage API requests and database communication with PostgreSQL. Key features include ChartJS for visual analytics, React Scheduler for flexible calendar management, and EmailJS for automated client notifications. Bcrypt ensures secure authentication, while Vite optimizes development speed, making the platform robust and efficient for businesses of all sizes.",
            frontend: [FaReact, FaHtml5, FaCss3Alt, FaJsSquare, SiTailwindcss],
            backend: [FaNode, SiRedux, SiExpress, FaDatabase, SiSequelize, SiPostgresql],
            githubLink: 'https://github.com/Devmountain-group-projects/timeslot-project'
        },
        {
            image: CurrentImg2Png,
            imageWebp: CurrentImg2Webp,
            title: "CCBL Church Website Revamp",
            description: "This is a passion project I'm currently working on for my church, which has had a website in need of some serious attention for years. I took it upon myself to spearhead a complete redesign, leveraging modern technologies like React, EmailJS, TailwindCSS, and Vite to give it a fresh, vibrant look and seamless functionality. It's still a work in progress, but I'm genuinely excited to see how it evolves and the impact it will have on our church. There are also exciting plans in the pipeline to incorporate a backend, allowing us to store and manage dynamic content like blog posts, sermons, gallery images, and much more. It's been an incredibly rewarding experience, and I can't wait to share the final result.",
            frontend: [FaReact, FaHtml5, FaCss3Alt, FaJsSquare, SiTailwindcss],
            backend: [FaNode, SiExpress],
            githubLink: 'https://github.com/rodrigomcobos/mocop-church-site'
        }
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    };

    return (
        <div>
            <motion.section
                id="qualification"
                className="max-w-9xl max-md:max-w-md mx-auto md:mt-12 mt-24 px-6"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <p className="text-sm flex justify-center items-center font-bold text-blue-800 mb-2">
                    <span className="rotate-90 inline-block mr-2">|</span> IN PROGRESS
                </p>
                <motion.h2
                    className="text-gray-800 sm:text-4xl text-2xl font-extrabold text-center mb-8 sm:mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    My Current Projects
                </motion.h2>
            </motion.section>

            <div className="md:hidden">
                <Slider {...settings}>
                    {projects.map((project, index) => (
                        <ProjectSection key={index} {...project} />
                    ))}
                </Slider>
            </div>

            <div className="hidden md:block">
                {projects.map((project, index) => (
                    <motion.section
                        key={index}
                        className="grid md:grid-cols-2 items-start md:gap-8 gap-6 font-[sans-serif] max-w-9xl max-md:max-w-md mx-auto px-8 mb-48"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <motion.section
                            className="mx-4"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            whileHover={{ scale: 1.02 }}
                        >
                            <Image
                                src={project.image}
                                webp={project.imageWebp}
                                className="w-[80%] h-auto mx-auto object-contain rounded-lg shadow-md"
                                alt={project.title}
                                loading="lazy"
                            />
                        </motion.section>
                        <motion.section
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <motion.h2
                                className="md:text-2xl text-2xl md:leading-10 font-extrabold text-gray-800 mb-4"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                            >
                                {project.title}
                            </motion.h2>
                            <motion.p
                                className="mt-4 text-base text-gray-800 leading-relaxed"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                            >
                                {project.description}
                            </motion.p>
                            <TechStack frontend={project.frontend} backend={project.backend} />
                            <motion.div
                                className='flex justify-start mt-8'
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                            >
                                <motion.a
                                    href={project.githubLink}
                                    target='_blank'
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <button className="bg-blue-800 hover:bg-transparent hover:text-blue-800 border-2 border-blue-800 transition-all text-white font-semibold text-sm tracking-wide rounded-md px-6 py-2.5">
                                        View Project on GitHub
                                    </button>
                                </motion.a>
                            </motion.div>
                        </motion.section>
                    </motion.section>
                ))}
            </div>
        </div>
    );
};

export default CurrentProject;