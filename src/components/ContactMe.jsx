import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import { FaLinkedinIn, FaBehance, FaGithub } from 'react-icons/fa';

const ContactMe = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            e.target,
            import.meta.env.VITE_EMAILJS_USER_ID
        )
            .then((result) => {
                alert('Message sent successfully!');
                console.log(result.text);
            }, (error) => {
                alert('Failed to send message, please try again.');
                console.log(error.text);
            });

        e.target.reset();
    };

    // Animation variants
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
            transition: { duration: 0.5 }
        }
    };

    const formItemVariants = {
        hidden: { x: 50, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: { duration: 0.5 }
        }
    };

    const socialIconVariants = {
        hidden: { scale: 0, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: { type: "spring", stiffness: 260, damping: 20 }
        },
        hover: {
            scale: 1.2,
            transition: { duration: 0.2 }
        }
    };

    return (
        <div id="contact" className='px-4 sm:px-6 lg:px-6 pb-6 mt-2'>
            <div className="max-w-9xl mx-auto">
                <div className="bg-gray-200 rounded-3xl overflow-hidden relative">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="py-12 sm:py-24 px-6 sm:px-12"
                    >
                        <div className="text-center mb-16">
                            <p className="text-sm flex justify-center items-center font-bold text-blue-800 mb-2">
                                <span className="rotate-90 inline-block mr-2">|</span> CONTACT
                            </p>
                            <h2 className="text-gray-800 sm:text-4xl text-3xl font-extrabold">
                                Let's Talk
                            </h2>
                        </div>

                        <div className="grid sm:grid-cols-2 items-start gap-16 max-md:max-w-md mx-auto">
                            <motion.div
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                            >
                                <motion.p
                                    variants={itemVariants}
                                    className="text-md mt-4"
                                >
                                    Have a bold idea or a brand in need of development? Or maybe your current website could use a refresh or some strategic improvements? Whatever your vision may be, I am here to help bring it to life. Reach out to me and I would love to learn about your project and explore how we can collaborate together in making your business goals a reality.
                                </motion.p>

                                <motion.div
                                    className="mt-12"
                                    variants={itemVariants}
                                >
                                    <h2 className="text-gray-800 text-base font-bold">Email</h2>
                                    <motion.ul
                                        className="mt-4"
                                        whileHover={{ scale: 1.02 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <li className="flex items-center">
                                            <motion.div
                                                className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0"
                                                whileHover={{ rotate: 360 }}
                                                transition={{ duration: 0.5 }}
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" className='text-blue-800'
                                                    viewBox="0 0 479.058 479.058">
                                                    <path
                                                        d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"
                                                        data-original="#000000" />
                                                </svg>
                                            </motion.div>
                                            <motion.a
                                                href="mailto:rodrigomcobos@gmail.com"
                                                className="text-blue-800 text-lg ml-4"
                                                whileHover={{ x: 5 }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                <p className="block font-normal">Mail</p>
                                                <p className='font-bold'>rodrigomcobos@gmail.com</p>
                                            </motion.a>
                                        </li>
                                    </motion.ul>
                                </motion.div>

                                <motion.div
                                    className="mt-12"
                                    variants={itemVariants}
                                >
                                    <h2 className="text-gray-800 text-base font-bold mb-6">Socials</h2>
                                    <div className="my-4 mx-4 flex items-center space-x-6 lg:my-0 lg:ml-auto lg:space-x-8 lg:space-y-0">
                                        {[
                                            { href: "https://www.linkedin.com/in/rodrigomcobos/", Icon: FaLinkedinIn, hoverColor: "text-blue-700", name: "LinkedIn" },
                                            { href: "https://www.behance.net/rodrigocobos1", Icon: FaBehance, hoverColor: "text-blue-400", name: "Behance" },
                                            { href: "https://github.com/rodrigomcobos/", Icon: FaGithub, hoverColor: "text-purple-500", name: "GitHub" }
                                        ].map((social, index) => (
                                            <motion.a
                                                key={index}
                                                href={social.href}
                                                target="_blank"
                                                rel="noreferrer"
                                                variants={socialIconVariants}
                                                whileHover="hover"
                                                className={`transition duration-300 hover:${social.hoverColor}`}
                                                aria-label={social.name}
                                            >
                                                <social.Icon size={24} />
                                            </motion.a>
                                        ))}
                                    </div>
                                </motion.div>
                            </motion.div>

                            <motion.form
                                onSubmit={sendEmail}
                                className="ml-auto space-y-4"
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                            >
                                {[
                                    { type: "text", name: "name", placeholder: "Name" },
                                    { type: "email", name: "email", placeholder: "Email" },
                                    { type: "text", name: "subject", placeholder: "Subject" }
                                ].map((input, index) => (
                                    <motion.input
                                        key={index}
                                        type={input.type}
                                        name={input.name}
                                        placeholder={input.placeholder}
                                        onChange={handleChange}
                                        value={formData[input.name]}
                                        className="w-full rounded-md py-3 px-4 bg-gray-100 text-gray-800 text-sm outline-blue-500 focus:bg-transparent"
                                        variants={formItemVariants}
                                        whileFocus={{ scale: 1.01 }}
                                    />
                                ))}

                                <motion.textarea
                                    name="message"
                                    placeholder="Message"
                                    rows="6"
                                    onChange={handleChange}
                                    value={formData.message}
                                    className="w-full rounded-md px-4 bg-gray-100 text-gray-800 text-sm pt-3 outline-blue-500 focus:bg-transparent"
                                    variants={formItemVariants}
                                    whileFocus={{ scale: 1.01 }}
                                />

                                <motion.button
                                    type="submit"
                                    className="bg-blue-800 hover:bg-transparent hover:text-blue-800 border-2 border-blue-800 transition-all text-white font-semibold text-sm tracking-wide rounded-md px-6 py-2.5"
                                    variants={formItemVariants}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Send
                                </motion.button>
                            </motion.form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default ContactMe;