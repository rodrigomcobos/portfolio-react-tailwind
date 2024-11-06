import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar, Pagination, Autoplay, Navigation } from 'swiper/modules';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'react-image-webp';
import { FaGraduationCap, FaBriefcase, FaCalendarAlt } from 'react-icons/fa';
import { MdVolunteerActivism } from "react-icons/md";
import { qualificationData } from './QualificationData';
import 'swiper/css';

const Qualification = () => {
    const [activeTab, setActiveTab] = useState('education');

    const cardVariants = {
        hidden: {
            opacity: 0,
            y: 20
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        },
        exit: {
            opacity: 0,
            y: -20,
            transition: {
                duration: 0.3
            }
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        },
        exit: { opacity: 0 }
    };

    const renderCards = (tab) => (
        <motion.section
            key={tab}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={containerVariants}
        >
            <div className="block md:hidden">
                <Swiper
                    modules={[Pagination, Scrollbar, Autoplay, Navigation]}
                    spaceBetween={10}
                    slidesPerView={1}
                    loop={false}
                    scrollbar={{ draggable: true }}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 2000, disableOnInteraction: false }}
                    navigation
                >
                    {qualificationData[tab].map((item, index) => (
                        <SwiperSlide key={index}>
                            <motion.div
                                variants={cardVariants}
                                className="bg-white shadow-md rounded-lg overflow-hidden mb-6"
                            >
                                <div className="p-6 pb-8">
                                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{item.title}</h3>
                                    <p className="text-lg text-blue-800 mb-4">{item.where}</p>
                                    <div className="flex items-center text-gray-800">
                                        <FaCalendarAlt className="mr-2" />
                                        <span>{item.when}</span>
                                    </div>
                                    <p className="text-gray-800 mt-4">{item.description}</p>
                                </div>
                                <motion.div
                                    className="flex justify-center"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <Image
                                        src={item.image}
                                        webp={item.imageWebp}
                                        alt="image"
                                        className="object-contain h-36 border-[20px] border-white"
                                        loading="lazy"
                                    />
                                </motion.div>
                            </motion.div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <div className="hidden md:block">
                <motion.div variants={containerVariants}>
                    {qualificationData[tab].map((item, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            className="max-w-7xl mx-auto mt-10 bg-white shadow-md rounded-lg overflow-hidden mb-6"
                        >
                            <div className="flex flex-col md:flex-row">
                                <div className="w-full md:w-2/3 p-6 pb-8">
                                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{item.title}</h3>
                                    <p className="text-lg text-blue-800 mb-4">{item.where}</p>
                                    <div className="flex items-center text-gray-800">
                                        <FaCalendarAlt className="mr-2" />
                                        <span>{item.when}</span>
                                    </div>
                                    <p className="text-gray-800 mt-4">{item.description}</p>
                                </div>
                                <motion.div
                                    className="w-full md:w-1/3 hidden md:block"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <Image
                                        src={item.image}
                                        webp={item.imageWebp}
                                        alt="image"
                                        className="object-contain h-36 mx-auto border-[20px] border-white"
                                        loading="lazy"
                                    />
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.section>
    );

    return (
        <div id="qualification" className="max-w-9xl max-md:max-w-md mx-auto md:mt-24 mt-12 px-6">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <p className="text-sm flex justify-center items-center font-bold text-blue-800 mb-2">
                    <span className="rotate-90 inline-block mr-2">|</span> QUALIFICATION
                </p>
                <h2 className="text-gray-800 sm:text-4xl text-3xl font-extrabold text-center mb-16">
                    Education & Work
                </h2>
            </motion.div>

            <div className="w-full">
                <div className="relative right-0">
                    <ul className="relative flex flex-wrap px-1.5 py-1.5 list-none rounded-md bg-slate-100" role="list">
                        <li role='presentation' className="flex-auto text-center">
                            <motion.a
                                className={`flex items-center justify-center w-full px-0 py-2 text-lg font-semibold transition-all ease-in-out border-0 rounded-md cursor-pointer 
                                ${activeTab === 'education' ? 'text-white font-bold bg-blue-800' : 'text-slate-800'}`}
                                onClick={() => setActiveTab('education')}
                                role="tab education"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <FaGraduationCap className="inline-block mr-2" />
                                Education
                            </motion.a>
                        </li>
                        <li className="flex-auto text-center">
                            <motion.a
                                className={`flex items-center justify-center w-full px-0 py-2 text-lg font-semibold transition-all ease-in-out border-0 rounded-md cursor-pointer 
                                ${activeTab === 'work' ? 'text-white font-bold bg-blue-800' : 'text-slate-800'}`}
                                onClick={() => setActiveTab('work')}
                                role="tab work"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <FaBriefcase className="inline-block mr-2" />
                                Work History
                            </motion.a>
                        </li>
                        <li className="flex-auto text-center">
                            <motion.a
                                className={`flex items-center justify-center w-full px-0 py-2 text-lg font-semibold transition-all ease-in-out border-0 rounded-md cursor-pointer 
                                ${activeTab === 'voluntary' ? 'text-white font-bold bg-blue-800' : 'text-slate-800'}`}
                                onClick={() => setActiveTab('voluntary')}
                                role="tab voluntary"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <MdVolunteerActivism className="inline-block mr-2" />
                                Volunteer Work
                            </motion.a>
                        </li>
                    </ul>

                    <div className="p-5">
                        <AnimatePresence mode="sync">
                            {renderCards(activeTab)}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Qualification;