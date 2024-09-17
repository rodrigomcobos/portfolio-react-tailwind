import React from 'react'
import ProfileImg from '../assets/profile2.png'

const AboutMe = () => {
    return (
        <div className="max-w-7xl max-md:max-w-md mx-auto md:mt-64 mt-24 px-6">
            <div className="grid md:grid-cols-2 items-center md:gap-24 gap-6">
                <section className="lg:h-[550px] md:h-[450px] flex items-center relative max-md:before:hidden before:absolute before:bg-blue-200 before:h-full before:w-3/4 before:right-0 before:z-0">
                    <img src={ProfileImg} className="rounded-md lg:w-3/4 md:w-11/12 z-20 relative" alt="Profile Image" />
                </section>

                <section className="max-md:order-1 max-md:text-center">
                    <p className="text-sm font-bold text-blue-600 mb-2"><span className="rotate-90 inline-block mr-2">|</span> ABOUT ME</p>
                    <h2 className="text-gray-800 md:text-4xl text-2xl font-extrabold mb-4 md:!leading-[55px]">Passionate about Growth, Technology, and Hands-On Learning</h2>
                    <p className="mt-4 text-base text-gray-600 leading-relaxed">I'm a passionate person willing to learn more technologies to become a better developer and designer. I enjoy writing clean code, following best practices and working in a collaborative environment. I believe a strong team connection will take a project to great heights.</p>
                    <br />
                    <p className="mt-4 text-base text-gray-600 leading-relaxed">Besides working with computers, I'm a gear head that enjoys working on cars, taking things apart and putting them back together and learning while doing it. Traveling is one of my favorite things as well.</p>


                    <hr className="mt-8 border-gray-300" />

                    <div className="mt-8">
                        <h4 className="text-gray-800 font-bold text-base mb-4">Follow me on Social Media</h4>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/2/29/GitHub_logo_2013.svg" className="w-16 mx-auto" alt="github-logo" />
                            <img src="https://readymadeui.com/linkedin-logo.svg" className="w-28 mx-auto" alt="linkedin-logo" />
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Behance_logo.svg/1024px-Behance_logo.svg.png" className="w-20 mx-auto" alt="behance-logo" />
                        </div>
                    </div>
                </section>

            </div>
        </div>
    )
}

export default AboutMe