import React from 'react'
import ProfileImg from '../assets/profile1.png'

const Hero = () => {
    return (
        <div className="font-sans max-w-7xl max-md:max-w-md mx-auto md:mt-32 mt-12 px-6">
            <div className="grid md:grid-cols-2 items-center md:gap-8 gap-6">
                <div className="max-md:order-1 max-md:text-center z-10 relative items-center">
                    <h2 className="text-gray-800 lg:text-6xl md:text-5xl text-4xl font-extrabold mb-4 md:!leading-[56px]">Hi I'm Rodrigo</h2>
                    <h2 className="text-blue-600 lg:text-5xl md:text-4xl text-3xl font-extrabold md-2">Full Stack Developer</h2>
                    <h2 className="text-gray-400 lg:text-2xl md:text-3xl text-2xl font-extrabold mb-4 md:!leading-[56px]">Located in Dallas, TX</h2>
                    <p className="text-gray-600 mt-6 leading-relaxed">I'm a Full Stack Developer, and a seasoned Product and UX Designer with over 5 years of experience transforming ideas into impactful digital products. I specialize in helping businesses and non-profits scale their potential for meaningful change by delivering thoughtful, user-centered solutions. </p>

                    <p className="text-gray-600 mt-6 leading-relaxed">My expertise spans product strategy, facilitation, and prototyping, all backed by a strong foundation in interface design and frontend development. With a focus on creating intuitive and visually compelling experiences, I’m passionate about bridging the gap between design and technology to bring innovative products to life.</p>

                    <button type='button'
                        className="mt-6 bg-blue-600 hover:bg-transparent hover:text-blue-600 border-2 border-blue-600 transition-all text-white font-semibold text-sm tracking-wide rounded-md px-6 py-2.5">Download Resume</button>

                    <div className="mt-12 w-fit">
                        <div className="flex flex-row justify-center align-middle items-center gap-12">
                            <div className="flex flex-col items-center text-center">
                                <h5 className="text-gray-800 font-bold text-4xl mb-2">5+</h5>
                                <p className="text-gray-600">Years Experience</p>
                            </div>
                            <div className="flex flex-col items-center text-center">
                                <h5 className="text-gray-800 font-bold text-4xl mb-2">10+</h5>
                                <p className="text-gray-600">Projects</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="lg:h-[550px] md:h-[550px] flex items-center relative max-md:before:hidden before:absolute before:bg-[#DEE2E5] before:h-[120%] before:w-[120%] before:right-0 before:z-0">
                    <img src={ProfileImg} className="rounded-md lg:w-4/5 z-20 relative" alt="Profile Image" />
                </div>
            </div>
        </div>
    )
}

export default Hero