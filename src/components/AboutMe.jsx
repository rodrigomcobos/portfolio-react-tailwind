import React from 'react'
import ProfileImg from '../assets/profile2.png'

const AboutMe = () => {
    return (
        <div className="font-sans max-w-6xl max-md:max-w-md mx-auto mt-44 px-6">
            <div className="grid md:grid-cols-2 items-center md:gap-8 gap-6">
                <section className="lg:h-[650px] md:h-[550px] flex items-center relative max-md:before:hidden before:absolute before:bg-blue-200 before:h-full before:w-3/4 before:right-0 before:z-0">
                    <img src={ProfileImg} className="rounded-md lg:w-3/4 md:w-11/12 z-50 relative" alt="Dining Experience" />
                </section>

                <section className="max-md:order-1 max-md:text-center">
                    <p className="text-sm font-bold text-blue-600 mb-2"><span className="rotate-90 inline-block mr-2">|</span> ABOUT ME</p>
                    <h2 className="text-gray-800 md:text-4xl text-2xl font-extrabold mb-4 md:!leading-[55px]">Passionate about Growth, Technology, and Hands-On Learning</h2>
                    <p className="mt-4 text-base text-gray-600 leading-relaxed">I'm a passionate person willing to learn more technologies to become a better developer and designer. I enjoy writing clean code, following best practices and working in a collaborative environment. I believe a strong team connection will take a project to great heights.

                        Besides working with computers, I'm a gear head that enjoys working on cars, taking things apart and putting them back together and learning while doing it. Traveling is one of my favorite things as well.</p>
                    <div className="mt-8 space-x-4">
                        <button type='button'
                            className="bg-blue-600 hover:bg-transparent hover:text-blue-600 border-2 border-blue-600 transition-all text-white font-semibold tracking-wide text-sm rounded-full px-6 py-2.5">Get started</button>
                        <button type='button'
                            className="bg-transparent hover:bg-blue-600 hover:text-white border-2 border-blue-600 transition-all text-blue-600 font-semibold tracking-wide text-sm rounded-full px-6 py-2.5">Learn more</button>
                    </div>

                    <hr className="mt-8 border-gray-300" />

                    <div className="mt-8">
                        <h4 className="text-gray-800 font-bold text-base mb-4">Trusted by teams around the word</h4>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center">
                            <img src="https://readymadeui.com/google-logo.svg" className="w-28 mx-auto" alt="google-logo" />
                            <img src="https://readymadeui.com/facebook-logo.svg" className="w-28 mx-auto" alt="facebook-logo" />
                            <img src="https://readymadeui.com/linkedin-logo.svg" className="w-28 mx-auto" alt="linkedin-logo" />
                            <img src="https://readymadeui.com/pinterest-logo.svg" className="w-28 mx-auto" alt="pinterest-logo" />
                        </div>
                    </div>
                </section>

            </div>
        </div>
    )
}

export default AboutMe