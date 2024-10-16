import Image from 'react-image-webp';
import ProfileImgPng from '../assets/profile2.png';
import ProfileImgWebp from '../assets/profile2.webp';
import BehanceLogoPng from '../assets/behancelogo.png';
import BehanceLogoWebp from '../assets/behancelogo.webp';
import GithubLogoPng from '../assets/githublogo.png';
import GithubLogoWebp from '../assets/githublogo.webp';
import LinkedInLogoPng from '../assets/linkedlogo.png';
import LinkedInLogoWebp from '../assets/linkedlogo.webp';

const AboutMe = () => {
    return (
        <div id='about' className="max-w-7xl max-md:max-w-md mx-auto md:mt-64 mt-24 px-6">
            <div className="grid md:grid-cols-2 items-center md:gap-24 gap-6">

                <section className="max-md:order-1 max-md:text-center">
                    <p className="text-sm font-bold text-blue-800 mb-2 text-end"><span className="rotate-90 inline-block mr-2">|</span> ABOUT ME</p>
                    <h2 className="text-gray-800 md:text-3xl text-3xl text-end font-extrabold mb-4 md:!leading-[55px]">Passionate about Growth, Technology, and Hands-On Learning</h2>                    <p className="mt-4 text-base text-gray-800 text-justify">I'm an enthusiastic and curious individual, always eager to expand my knowledge of the latest technologies to become a more skilled developer and designer. Writing clean, efficient code while adhering to best practices is something I take pride in, and I thrive in collaborative environments where teamwork and communication are key. I believe that when a team is in sync, there's no limit to what we can achieve and the heights we can take a project to.</p>
                    <br />
                    <p className="mt-4 text-base text-gray-800 leading-relaxed text-justify">Beyond the digital world, I'm a gearhead at heart. I love working on cars, dismantling and reassembling them, and learning through hands-on experience. Whether it’s problem-solving under the hood or writing elegant code, I find joy in the process of building and improving. Traveling is another passion of mine—I find inspiration in discovering new places, cultures, and perspectives.</p>


                    <hr className="mt-8 border-gray-300" />

                    <section className="mt-8">
                        <p className="text-gray-800 font-bold text-base mb-6">Follow me on Social Media</p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center sm:justify-center">
                            <Image src={GithubLogoPng} webp={GithubLogoWebp} className="w-20 mx-auto" alt="github-logo" />
                            <Image src={LinkedInLogoPng} webp={LinkedInLogoWebp} className="w-28 mx-auto" alt="linkedin-logo" />
                            <Image src={BehanceLogoPng} webp={BehanceLogoWebp} className="w-28 mx-auto" alt="behance-logo" />

                        </div>
                    </section>
                </section>

                <section className="lg:h-[550px] md:h-[450px] hidden md:flex items-center relative max-md:before:hidden before:absolute before:bg-blue-200 before:h-full before:w-3/4 before:right-0 before:z-0">
                    <Image src={ProfileImgPng} webp={ProfileImgWebp} className="rounded-md lg:w-3/4 md:w-11/12 z-20 relative" alt="Profile Image" loading="lazy" />
                </section>

            </div>
        </div>
    )
}

export default AboutMe