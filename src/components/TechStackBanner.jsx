import React from 'react';
import {
    FaWordpress,
    FaHtml5,
    FaReact,
    FaNodeJs,
    FaCss3Alt,
    FaShopify,
    FaBootstrap
} from 'react-icons/fa';
import { SiWoo } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";

const TechStackBanner = () => {
    const technologies = [
        { icon: FaWordpress, name: 'WordPress' },
        { icon: FaHtml5, name: 'HTML' },
        { icon: FaReact, name: 'ReactJS' },
        { icon: IoLogoJavascript, name: 'Javascript' },
        { icon: FaNodeJs, name: 'NodeJS' },
        { icon: FaCss3Alt, name: 'CSS' },
        { icon: FaShopify, name: 'Shopify' },
        { icon: SiWoo, name: 'WooCommerce' },
        { icon: FaBootstrap, name: 'Bootstrap' },
        { icon: RiTailwindCssFill, name: 'TailwindCSS' }
    ];

    return (
        <div className="relative w-full h-40 overflow-visible">
            {/* Container with padding to prevent clipping */}
            <div className="absolute inset-0 py-12">
                {/* Black strip with opposite skew */}
                <div className="absolute left-0 right-0 bg-black transform skew-y-3 py-10 translate-y-2"></div>

                {/* Tech stack banner with blue background */}
                <div className="absolute left-0 right-0 bg-blue-800 transform -skew-y-3 py-6">
                    <div className="relative overflow-hidden">
                        <div className="flex items-center whitespace-nowrap animate-scroll">
                            {[...technologies, ...technologies].map((tech, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-3 text-white mx-8 shrink-0"
                                >
                                    <tech.icon className="w-6 h-6" />
                                    <span className="text-xl font-bold">{tech.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TechStackBanner;