import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { FaLinkedinIn, FaBehance, FaGithub } from 'react-icons/fa';


const ContactMe = () => {
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const userId = import.meta.env.VITE_EMAILJS_USER_ID;


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
            import.meta.env.VITE_EMAILJS_SERVICE_ID,   // Your Service ID
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,  // Your Template ID
            e.target,
            import.meta.env.VITE_EMAILJS_USER_ID       // Your User ID
        )
            .then((result) => {
                alert('Message sent successfully!');
                console.log(result.text);
            }, (error) => {
                alert('Failed to send message, please try again.');
                console.log(error.text);
            });

        e.target.reset();  // Clear form after submission
    };


    return (
        <div id="contact" className='md:mt-44 mt-24'>
            <p className="text-sm flex justify-center items-center font-bold text-blue-800 mb-2"><span className="rotate-90 inline-block mr-2">|</span> CONTACT</p>
            <h2 className="text-gray-800 sm:text-4xl text-3xl font-extrabold text-center mb-16">Let's Talk</h2>
            <div className="grid sm:grid-cols-2 items-start gap-16 max-w-7xl max-md:max-w-md mx-auto mt-14 px-6">
                <div>
                    <p className="text-md mt-4">Have a bold idea or a brand in need of development? Or maybe your current website could use a refresh or some strategic improvements? Whatever your vision may be, I am here to help bring it to life. Reach out to me and I would love to learn about your project and explore how we can collaborate together in making your business goals a reality.</p>

                    <div className="mt-12">
                        <h2 className="text-gray-800 text-base font-bold">Email</h2>
                        <ul className="mt-4">
                            <li className="flex items-center">
                                <div className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" className='text-blue-800'
                                        viewBox="0 0 479.058 479.058">
                                        <path
                                            d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"
                                            data-original="#000000" />
                                    </svg>
                                </div>
                                <a href="mailto:rodrigomcobos@gmail.com" className="text-blue-800 text-lg ml-4">
                                    <p className="block font-normal">Mail</p>
                                    <p className='font-bold'>rodrigomcobos@gmail.com</p>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="mt-12">
                        <h2 className="text-gray-800 text-base font-bold mb-6">Socials</h2>
                        <div className="my-4 mx-4 flex items-center space-x-6 lg:my-0 lg:ml-auto lg:space-x-8 lg:space-y-0">
                            <a href="https://www.linkedin.com/in/rodrigomcobos/" target="_blank" name="linkedin website" aria-label='visit my linkedin' rel="noreferrer" className="hover:text-blue-700 transition duration-300">
                                <FaLinkedinIn size={24} />
                            </a>
                            <a href="https://www.behance.net/rodrigocobos1" target="_blank" name="behance website" aria-label='visit my behance' rel="noreferrer" className="hover:text-blue-400 transition duration-300">
                                <FaBehance size={24} />
                            </a>
                            <a href="https://github.com/rodrigomcobos/" target="_blank" name="github website" aria-label='visit my github' rel="noreferrer" className="hover:text-purple-500 transition duration-300">
                                <FaGithub size={24} />
                            </a>
                        </div>
                    </div>
                </div>

                <form onSubmit={sendEmail} className="ml-auto space-y-4">
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        onChange={handleChange}
                        value={formData.name}
                        className="w-full rounded-md py-3 px-4 bg-gray-100 text-gray-800 text-sm outline-blue-500 focus:bg-transparent"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        onChange={handleChange}
                        value={formData.email}
                        className="w-full rounded-md py-3 px-4 bg-gray-100 text-gray-800 text-sm outline-blue-500 focus:bg-transparent"
                    />
                    <input
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        onChange={handleChange}
                        value={formData.subject}
                        className="w-full rounded-md py-3 px-4 bg-gray-100 text-gray-800 text-sm outline-blue-500 focus:bg-transparent"
                    />
                    <textarea
                        name="message"
                        placeholder="Message"
                        rows="6"
                        onChange={handleChange}
                        value={formData.message}
                        className="w-full rounded-md px-4 bg-gray-100 text-gray-800 text-sm pt-3 outline-blue-500 focus:bg-transparent"
                    />
                    <button type="submit"
                        className="bg-blue-800 hover:bg-transparent hover:text-blue-800 border-2 border-blue-800 transition-all text-white font-semibold text-sm tracking-wide rounded-md px-6 py-2.5">
                        Send
                    </button>
                </form>

            </div>
        </div>

    )
}

export default ContactMe