import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaLinkedinIn, FaBehance, FaGithub } from 'react-icons/fa';
import { SlMenu } from "react-icons/sl";
import { TypeAnimation } from 'react-type-animation';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
    const [visible, setVisible] = useState(true);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;

            // Set visible based on scroll direction
            setVisible(
                (prevScrollPos > currentScrollPos) ||  // Scrolling up
                currentScrollPos < 10                  // At the top
            );

            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos]);

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleMenuClose = () => {
        setIsMenuOpen(false);
    };

    return (
        <>
            <div
                className={`fixed top-0 left-0 right-0 z-50 w-full bg-white transition-transform duration-300 ${visible ? 'translate-y-0' : '-translate-y-full'
                    }`}
            >
                <section className="flex flex-wrap gap-4 items-center justify-center text-center bg-blue-800 text-white px-4 py-2">
                    <p className="text-base">Looking for a new team to join!</p>
                    <div className="flex gap-2">
                        <a href="https://www.linkedin.com/in/rodrigomcobos/" target="_blank" rel="noreferrer">
                            <button type="button" className="bg-white text-blue-800 py-1 px-3 rounded text-sm hover:bg-blue-900 hover:text-white transition duration-200">
                                Hire Me Today
                            </button>
                        </a>
                    </div>
                </section>

                <header className="text-slate-700 w-full px-4 py-4">
                    <div className="max-w-9xl mx-auto flex flex-col lg:flex-row lg:items-center">
                        <div className="flex justify-between items-center">
                            <Link to="/" className="flex items-center text-2xl font-jersey font-bold">
                                &lt;Rodrigo/&gt;&nbsp;
                                <span className="text-blue-800">
                                    <TypeAnimation
                                        sequence={[
                                            ' Portfolio',
                                            2000,
                                            ' Frontend Dev',
                                            2000,
                                            ' Graphic Designer',
                                            2000,
                                            ' UX Designer',
                                            2000,
                                        ]}
                                        wrapper="span"
                                        speed={50}
                                        repeat={Infinity}
                                    />
                                </span>
                            </Link>
                            <button
                                className="lg:hidden p-2"
                                onClick={handleMenuToggle}
                                aria-label="Toggle menu"
                            >
                                <SlMenu className="w-6 h-6" />
                            </button>
                        </div>

                        <nav className={`${isMenuOpen ? 'block' : 'hidden'} lg:flex lg:items-center lg:justify-end lg:flex-1 mt-4 lg:mt-0`}>
                            <ul className="flex flex-col lg:flex-row items-center space-y-2 lg:space-y-0">
                                {location.pathname === '/' ? (
                                    <>
                                        <li className="lg:ml-12"><a className="rounded text-gray-700 transition focus:outline-none focus:ring-1 focus:ring-blue-700 focus:ring-offset-2" href="#about" onClick={handleMenuClose}>About</a></li>
                                        <li className="lg:ml-12"><a className="rounded text-gray-700 transition focus:outline-none focus:ring-1 focus:ring-blue-700 focus:ring-offset-2" href="#skills" onClick={handleMenuClose}>Skills</a></li>
                                        <li className="lg:ml-12"><a className="rounded text-gray-700 transition focus:outline-none focus:ring-1 focus:ring-blue-700 focus:ring-offset-2" href="#qualification" onClick={handleMenuClose}>Qualification</a></li>
                                        <li className="lg:ml-12"><a className="rounded text-gray-700 transition focus:outline-none focus:ring-1 focus:ring-blue-700 focus:ring-offset-2" href="#portfolio" onClick={handleMenuClose}>Portfolio</a></li>
                                        <li className="lg:ml-12"><a className="rounded text-gray-700 transition focus:outline-none focus:ring-1 focus:ring-blue-700 focus:ring-offset-2" href="#contact" onClick={handleMenuClose}>Contact</a></li>
                                    </>
                                ) : (
                                    <li className="lg:ml-12">
                                        <Link
                                            to="/"
                                            className="rounded text-gray-700 transition focus:outline-none focus:ring-1 focus:ring-blue-700 focus:ring-offset-2"
                                            onClick={handleMenuClose}
                                        >
                                            Home
                                        </Link>
                                    </li>
                                )}
                                <li className="lg:ml-12">
                                    <Link
                                        to="/projects"
                                        className={`rounded-xl p-2 transition duration-200 ${location.pathname === '/projects' ? 'bg-blue-800 text-white' : 'text-gray-700'}`}
                                        onClick={handleMenuClose}
                                    >
                                        Projects
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </header>
            </div>

            {/* Add a spacer to prevent content from jumping */}
            <div className="h-[105px]" /> {/* Adjust this height to match your header height */}

            {/* Floating Social Media Icons */}
            <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
                <a
                    href="https://www.linkedin.com/in/rodrigomcobos/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="visit my linkedin"
                    className="bg-blue-800 text-white p-3 rounded-full shadow-lg hover:bg-blue-900 transition-colors duration-300 flex items-center justify-center"
                >
                    <FaLinkedinIn size={20} />
                </a>
                <a
                    href="https://www.behance.net/rodrigocobos1"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="visit my behance"
                    className="bg-blue-800 text-white p-3 rounded-full shadow-lg hover:bg-blue-900 transition-colors duration-300 flex items-center justify-center"
                >
                    <FaBehance size={20} />
                </a>
                <a
                    href="https://github.com/rodrigomcobos/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="visit my github"
                    className="bg-blue-800 text-white p-3 rounded-full shadow-lg hover:bg-blue-900 transition-colors duration-300 flex items-center justify-center"
                >
                    <FaGithub size={20} />
                </a>
            </div>
        </>
    );
};

export default Header;