import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 mx-auto md:mt-48 mt-14 py-6 mb-auto">
            <div className="flex justify-between items-center max-lg:flex-col text-center flex-wrap gap-4 px-8 max-w-9xl mx-auto">
                <p className="text-[15px]">© Rodrigo Cobos. All rights reserved.</p>
                <p className="text-[11px]">This website was created using React, Tailwind, EmailJS and deployed using Netlify.</p>

                <ul className="flex space-x-6 gap-y-2 max-lg:justify-center flex-wrap">
                    <li><a href="#" className="text-[15px] hover:text-blue-500">Resume</a></li>
                    <li><a href="#portfolio" className="text-[15px] hover:text-blue-500">Portfolio</a></li>
                    <li><a href="mailto:rodrigomcobos@gmail.com" className="text-[15px] hover:text-blue-500">Contact</a></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer