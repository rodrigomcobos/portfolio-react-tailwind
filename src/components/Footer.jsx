import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 mx-auto md:mt-48 mt-24 py-6 mb-auto">
            <div className="flex justify-between items-center max-lg:flex-col text-center flex-wrap gap-4 px-8">
                <p className="text-[15px] leading-loose">© Rodrigo Cobos. All rights reserved.</p>

                <ul className="flex space-x-6 gap-y-2 max-lg:justify-center flex-wrap">
                    <li><a href="javascript:void(0)" className="text-[15px] hover:text-white">Resume</a></li>
                    <li><a href="javascript:void(0)" className="text-[15px] hover:text-white">Portfolio</a></li>
                    <li><a href="javascript:void(0)" className="text-[15px] hover:text-white">Contact</a></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer