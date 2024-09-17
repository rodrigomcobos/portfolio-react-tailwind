import React, { useState } from 'react';
import { FaLinkedinIn, FaBehance, FaGithub } from 'react-icons/fa';


const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleMenuClose = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className="text-slate-700 relative mx-full flex flex-col overflow-hidden px-4 py-4 lg:flex-row lg:items-center z-50 mt-4">
            <a href="#" className="flex items-center whitespace-nowrap text-2xl font-black ml-4">
                {/* <span className="mr-2 w-8">
                    <img src="/images/JOJj79gp_Djhwdp_ZOKLL.png" alt="" />
                </span> */}
                Rodrigo Portfolio
            </a>
            <input type="checkbox" className="peer hidden" id="navbar-open" />
            <label className="absolute top-2 right-6 cursor-pointer lg:hidden" htmlFor="navbar-open">
                <svg className="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 22 22" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            </label>
            <nav aria-label="Header Navigation" className="peer-checked:pt-8 peer-checked:max-h-60 flex max-h-0 w-full flex-col items-center overflow-hidden transition-all lg:ml-24 lg:max-h-full lg:flex-row">
                <ul className="flex w-full flex-col items-center space-y-2 lg:flex-row lg:justify-center lg:space-y-0">
                    <li className="lg:mr-12"><a className="rounded text-gray-700 transition focus:outline-none focus:ring-1 focus:ring-blue-700 focus:ring-offset-2" href="#">About</a></li>
                    <li className="lg:mr-12"><a className="rounded text-gray-700 transition focus:outline-none focus:ring-1 focus:ring-blue-700 focus:ring-offset-2" href="#">Skills</a></li>
                    <li className="lg:mr-12"><a className="rounded text-gray-700 transition focus:outline-none focus:ring-1 focus:ring-blue-700 focus:ring-offset-2" href="#">Qualification</a></li>
                    <li className="lg:mr-12"><a className="rounded text-gray-700 transition focus:outline-none focus:ring-1 focus:ring-blue-700 focus:ring-offset-2" href="#">Portfolio</a></li>
                    <li className="lg:mr-12"><a className="rounded text-gray-700 transition focus:outline-none focus:ring-1 focus:ring-blue-700 focus:ring-offset-2" href="#">Contact</a></li>
                </ul>
                <hr className="mt-4 w-full lg:hidden" />

                <div className="my-4 mx-4 flex items-center space-x-6 lg:my-0 lg:ml-auto lg:space-x-8 lg:space-y-0">
                    <a href="https://www.linkedin.com/in/rodrigomcobos/" target="_blank" rel="noreferrer" className="hover:text-blue-700 transition duration-300">
                        <FaLinkedinIn size={24} />
                    </a>
                    <a href="https://www.behance.net/rodrigocobos1" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition duration-300">
                        <FaBehance size={24} />
                    </a>
                    <a href="https://github.com/rodrigomcobos/" target="_blank" rel="noreferrer" className="hover:text-purple-500 transition duration-300">
                        <FaGithub size={24} />
                    </a>
                </div>
            </nav>
        </header>

    );
};

export default Header;
