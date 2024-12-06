import React, { useState } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import emailjs from "emailjs-com";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // EmailJS configuration
        emailjs.send(
            "service_gei7y7x",
            "template_hle6iwu",
            {
                from_name: formData.name,
                to_name: "Siwar",
                message: formData.message,
            },
            "g5dmieL6UGbutzsoi"
        ).then(
            (response) => {
                console.log("SUCCESS!", response.status, response.text);
                setIsSubmitted(true);
                setFormData({ name: "", email: "", message: "" });
                setError(null);
            },
            (err) => {
                console.error("FAILED...", err.status, err.text); // Affiche le statut exact
                setError("Failed to send message. Please try again.");
            }
        );
    };        

    return (
        <div className="bg-gray-50 dark:bg-gray-800 py-16 px-6 flex justify-center items-center min-h-screen" id="contact">
            <div className="container mx-auto">
                <h2 className="text-4xl font-extrabold text-center text-purple-600 mb-12">
                    Contact Me
                </h2>
                <div className="flex flex-col items-center">
                    {/* Contact Info */}
                    <div className="lg:flex gap-4 mb-8 text-center sm:block">
                        <div className="flex items-center justify-center dark:bg-gray-600 border border-purple-500 bg-purple-100 rounded-lg p-5 text-gray-700 dark:text-gray-200 mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                            </svg>
                            <a href="mailto:siwarbenzayed2@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-purple-700 dark:hover:text-purple-400 ml-2">
                                siwarbenzayed2@gmail.com
                            </a>
                        </div>
                        <div className="flex items-center justify-center dark:bg-gray-600 border border-purple-500 bg-purple-100 rounded-lg p-5 text-gray-700 dark:text-gray-200 mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                            </svg>
                            <a href="tel:+21654906781" className="hover:underline hover:text-purple-700 dark:hover:text-purple-400 ml-2">
                                +216 54 906 781
                            </a>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="mb-8 w-full max-w-lg">
                        {isSubmitted ? (
                            <p className="text-green-500 font-extralight text-center">Thank you! Your message has been sent.</p>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="sr-only block text-sm font-medium text-gray-700 dark:text-gray-300">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder="Your Name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="mt-1 block w-full px-4 py-2 border border-purple-300 rounded-md shadow-sm focus:ring-pink-300 focus:border-pink-300 dark:bg-gray-600 dark:border-gray-700 dark:text-white"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="sr-only block text-sm font-medium text-gray-700 dark:text-gray-300">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="Your Email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="mt-1 block w-full px-4 py-2 border border-purple-300 rounded-md shadow-sm focus:ring-pink-300 focus:border-pink-300 dark:bg-gray-600 dark:border-gray-700 dark:text-white"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="sr-only block text-sm font-medium text-gray-700 dark:text-gray-300">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        placeholder="Write Your Message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows="4"
                                        className="mt-1 block w-full px-4 py-2 border border-purple-300 rounded-md shadow-sm focus:ring-pink-300 focus:border-pink-300 dark:bg-gray-600 dark:border-gray-700 dark:text-white"
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-pink-300"
                                >
                                    Send Message
                                </button>
                                {error && <p className="text-red-500 font-extralight mt-2 text-center">{error}</p>}
                            </form>
                        )}
                    </div>
                </div>
            </div>
            {/* Social Media Icons */}
            <div   className="hidden lg:flex fixed bottom-0 left-0 mb-8 ml-2 z-50 flex-col gap-4 bg-gray-900 rounded-full p-2">
                <a href="https://www.linkedin.com/in/siwar-benzayed-079741178/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="text-white hover:text-purple-400 text-2xl" />
                </a>
                <a href="https://github.com/siwarrr" target="_blank" rel="noopener noreferrer" >
                    <FaGithub className="text-white hover:text-purple-400 text-2xl" />
                </a>
            </div>
        </div>
    );
};

export default Contact;
