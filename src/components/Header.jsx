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
        <div>
            <section className="flex gap-4 items-center justify-center text-center bg-blue-600 text-white px-6 py-2 font-[sans-serif]">
                <p className="text-base">Looking for a new team to join!</p>

                <div className="flex gap-2">
                    <a href="https://www.linkedin.com/in/rodrigomcobos/" target="_blank">
                        <button type="button" className="bg-white text-blue-500 py-1 px-3 rounded text-sm hover:bg-blue-800 hover:text-white transition duration-200">
                            Hire Me Today
                        </button>
                    </a>
                </div>
            </section>
            <header className="text-slate-700 bg-white  mx-full flex flex-col overflow-hidden px-4 py-4 lg:flex-row lg:items-center z-50 mt-4 sticky top-0">
                <a href="#" className="flex items-center whitespace-nowrap text-2xl font-black ml-4">
                    {/* <span className="mr-2 w-8">
                    <img src="/images/JOJj79gp_Djhwdp_ZOKLL.png" alt="" />
                </span> */}
                    &lt;/Rodrigo&gt; <span className="text-blue-600">Portfolio</span>
                </a>
                <input type="checkbox" className="peer hidden" id="navbar-open" />
                <label className="absolute top-4 right-8 cursor-pointer lg:hidden" htmlFor="navbar-open">
                    <svg className="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 22 22" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </label>
                <nav aria-label="Header Navigation" className="peer-checked:pt-8 peer-checked:max-h-60 flex max-h-0 w-full flex-col items-center overflow-hidden transition-all lg:ml-24 lg:max-h-full lg:flex-row">
                    <ul className="flex w-full flex-col items-center space-y-2 lg:flex-row lg:justify-center lg:space-y-0">
                        <li className="lg:mr-12"><a className="rounded text-gray-700 transition focus:outline-none focus:ring-1 focus:ring-blue-700 focus:ring-offset-2" href="#about">About</a></li>
                        <li className="lg:mr-12"><a className="rounded text-gray-700 transition focus:outline-none focus:ring-1 focus:ring-blue-700 focus:ring-offset-2" href="#skills">Skills</a></li>
                        <li className="lg:mr-12"><a className="rounded text-gray-700 transition focus:outline-none focus:ring-1 focus:ring-blue-700 focus:ring-offset-2" href="#qualification">Qualification</a></li>
                        <li className="lg:mr-12"><a className="rounded text-gray-700 transition focus:outline-none focus:ring-1 focus:ring-blue-700 focus:ring-offset-2" href="#portfolio">Portfolio</a></li>
                        <li className="lg:mr-12"><a className="rounded text-gray-700 transition focus:outline-none focus:ring-1 focus:ring-blue-700 focus:ring-offset-2" href="#contact">Contact</a></li>
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
        </div>


    );
};

export default Header;
