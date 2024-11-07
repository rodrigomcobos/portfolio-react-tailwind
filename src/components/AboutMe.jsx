import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'react-image-webp';

// Images in PNG format
import ProfileImgPng from '../assets/profile2.png';
import BehanceLogoPng from '../assets/behancelogo.png';
import GithubLogoPng from '../assets/githublogo.png';
import LinkedInLogoPng from '../assets/linkedlogo.png';
import CodeBackground from '../assets/codebackground.jpeg';

// Images in WebP format
import ProfileImgWebp from '../assets/profile2.webp';
import BehanceLogoWebp from '../assets/behancelogo.webp';
import GithubLogoWebp from '../assets/githublogo.webp';
import LinkedInLogoWebp from '../assets/linkedlogo.webp';
import CodeBackgroundWebp from '../assets/codebackground.webp';

const AboutMe = () => {
    // Animation variants for text content
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    // Social media icons animation variants
    const socialIconsVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.4,
                staggerChildren: 0.1
            }
        }
    };

    const iconVariants = {
        hidden: { scale: 0, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 260,
                damping: 20
            }
        }
    };

    // Image animation variants
    const imageVariants = {
        hidden: {
            opacity: 0,
            x: 50
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    return (
        <div id='about' className="max-w-9xl max-md:max-w-md mx-auto py-24 sm:py-36 px-6">
            <motion.div
                className="grid md:grid-cols-2 items-center md:gap-24 gap-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={containerVariants}
            >
                <motion.section
                    className="max-md:order-1 max-md:text-center"
                    variants={containerVariants}
                >
                    <motion.p
                        className="text-sm font-bold text-blue-800 mb-2 text-end"
                        variants={itemVariants}
                    >
                        <span className="rotate-90 inline-block mr-2">|</span> ABOUT ME
                    </motion.p>

                    <motion.h2
                        className="text-gray-800 md:text-3xl text-3xl text-end font-extrabold mb-4 md:!leading-[55px]"
                        variants={itemVariants}
                    >
                        Passionate about Growth, Technology, and Hands-On Learning
                    </motion.h2>

                    <motion.p
                        className="mt-4 text-base text-gray-800 text-justify"
                        variants={itemVariants}
                    >
                        I'm an enthusiastic and curious individual, always eager to expand my knowledge of the latest technologies to become a more skilled developer and designer. Writing clean, efficient code while adhering to best practices is something I take pride in, and I thrive in collaborative environments where teamwork and communication are key. I believe that when a team is in sync, there's no limit to what we can achieve and the heights we can take a project to.
                    </motion.p>

                    <motion.p
                        className="mt-4 text-base text-gray-800 leading-relaxed text-justify"
                        variants={itemVariants}
                    >
                        Beyond the digital world, I'm a gearhead at heart. I love working on cars, dismantling and reassembling them, and learning through hands-on experience. Whether it's problem-solving under the hood or writing elegant code, I find joy in the process of building and improving. Traveling is another passion of mine—I find inspiration in discovering new places, cultures, and perspectives.
                    </motion.p>

                    <motion.hr
                        className="mt-8 border-gray-300"
                        variants={itemVariants}
                    />

                    <motion.section
                        className="mt-8"
                        variants={socialIconsVariants}
                    >
                        <motion.p
                            className="text-gray-800 font-bold text-base mb-6"
                            variants={itemVariants}
                        >
                            Follow me on Social Media
                        </motion.p>

                        <motion.div
                            className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center sm:justify-center"
                            variants={socialIconsVariants}
                        >
                            <motion.div variants={iconVariants} whileHover={{ scale: 1.1 }}>
                                <Image src={GithubLogoPng} webp={GithubLogoWebp} className="w-20 mx-auto" alt="github-logo" />
                            </motion.div>
                            <motion.div variants={iconVariants} whileHover={{ scale: 1.1 }}>
                                <Image src={LinkedInLogoPng} webp={LinkedInLogoWebp} className="w-28 mx-auto" alt="linkedin-logo" />
                            </motion.div>
                            <motion.div variants={iconVariants} whileHover={{ scale: 1.1 }}>
                                <Image src={BehanceLogoPng} webp={BehanceLogoWebp} className="w-28 mx-auto" alt="behance-logo" />
                            </motion.div>
                        </motion.div>
                    </motion.section>
                </motion.section>

                <motion.section
                    className="lg:h-[550px] md:h-[450px] hidden md:flex items-center relative max-md:before:hidden before:absolute before:h-full before:w-3/4 before:right-0 before:z-0 before:rounded-xl before:bg-[image:var(--code-bg)] before:bg-cover before:bg-center before:opacity-50 before:bg-no-repeat rounded-2xl"
                    style={{
                        '--code-bg': `url(${CodeBackground})`
                    }}
                    variants={imageVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{
                            opacity: 1,
                            scale: 1,
                            transition: {
                                duration: 0.8,
                                ease: "easeOut"
                            }
                        }}
                        viewport={{ once: true }}
                    >
                        <Image
                            src={ProfileImgPng}
                            webp={ProfileImgWebp}
                            className="rounded-md lg:w-3/4 md:w-11/12 z-20 relative"
                            alt="Profile Image"
                            loading="lazy"
                        />
                    </motion.div>
                </motion.section>
            </motion.div>
        </div>
    );
};

export default AboutMe;