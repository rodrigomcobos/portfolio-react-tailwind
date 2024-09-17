import React from 'react'
import ProfileImg from '../assets/profile2.png'

const AboutMe = () => {
    return (
        <div id='about' className="max-w-7xl max-md:max-w-md mx-auto md:mt-64 mt-24 px-6">
            <div className="grid md:grid-cols-2 items-center md:gap-24 gap-6">
                <section className="lg:h-[550px] md:h-[450px] flex items-center relative max-md:before:hidden before:absolute before:bg-blue-200 before:h-full before:w-3/4 before:right-0 before:z-0">
                    <img src={ProfileImg} className="rounded-md lg:w-3/4 md:w-11/12 z-20 relative" alt="Profile Image" />
                </section>

                <section className="max-md:order-1 max-md:text-center">
                    <p className="text-sm font-bold text-blue-600 mb-2"><span className="rotate-90 inline-block mr-2">|</span> ABOUT ME</p>
                    <h2 className="text-gray-800 md:text-4xl text-2xl font-extrabold mb-4 md:!leading-[55px]">Passionate about Growth, Technology, and Hands-On Learning</h2>
                    <p className="mt-4 text-base text-gray-600 leading-relaxed">I'm an enthusiastic and curious individual, always eager to expand my knowledge of the latest technologies to become a more skilled developer and designer. Writing clean, efficient code while adhering to best practices is something I take pride in, and I thrive in collaborative environments where teamwork and communication are key. I believe that when a team is in sync, there's no limit to what we can achieve and the heights we can take a project to.</p>
                    <br />
                    <p className="mt-4 text-base text-gray-600 leading-relaxed">Beyond the digital world, I'm a gearhead at heart. I love working on cars, dismantling and reassembling them, and learning through hands-on experience. Whether it’s problem-solving under the hood or writing elegant code, I find joy in the process of building and improving. Traveling is another passion of mine—I find inspiration in discovering new places, cultures, and perspectives.</p>


                    <hr className="mt-8 border-gray-300" />

                    <div className="mt-8">
                        <h4 className="text-gray-800 font-bold text-base mb-6">Follow me on Social Media</h4>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/2/29/GitHub_logo_2013.svg" className="w-20 mx-auto" alt="github-logo" />
                            <img src="https://upload.wikimedia.org/wikipedia/commons/0/01/LinkedIn_Logo.svg" className="w-28 mx-auto" alt="linkedin-logo" />
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Behance_logo.svg/1024px-Behance_logo.svg.png" className="w-28 mx-auto" alt="behance-logo" />
                        </div>
                    </div>
                </section>

            </div>
        </div>
    )
}

export default AboutMe