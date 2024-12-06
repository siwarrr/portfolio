import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Hero = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, margin: "-100px" });

    return (
        <motion.section
         id="home" 
         className="bg-gray-50 dark:bg-gray-800 h-screen flex flex-col justify-center items-center text-gray-800 dark:text-white"
         ref={ref}
         initial="hidden"
         animate={isInView ? "visible" : "hidden"}
         >
            <motion.div 
            className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8"
            variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: { opacity: 1, scale: 1 },
            }}
            transition={{ delay: 0.3, duration: 0.8 }}
            >
                <div className="relative w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-purple-500 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <motion.img
                      src="/assets/Profile.png"
                      alt="Siwar"
                      className="w-full h-full object-cover"
                      variants={{
                        hidden: { scale: 0.8 },
                        visible: { scale: 1 },
                      }}
                      transition={{ duration: 0.8 }}
                    />
                </div>
                <motion.div 
                className="text-center md:text-left"
                variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                >
                   <h1 className="text-5xl font-bold mb-2">Hello, I'm Siwar</h1>
                   <p className="text-lg text-gray-600 dark:text-gray-400">
                      Software Engineer | Full Stack JS Developer 
                   </p>
                </motion.div>
            </motion.div>

        <motion.div
            className="flex space-x-4 mt-8"
            variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ delay: 0.6, duration: 0.8 }}
        >
        <a
          href="/assets/Siwar_Benzayed.pdf"
          download="Siwar_Benzayed.pdf"
          className="bg-purple-500 px-6 py-2 rounded-lg hover:bg-purple-600 flex items-center space-x-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7.5 7.5h-.75A2.25 2.25 0 0 0 4.5 9.75v7.5a2.25 2.25 0 0 0 2.25 2.25h7.5a2.25 2.25 0 0 0 2.25-2.25v-7.5a2.25 2.25 0 0 0-2.25-2.25h-.75m-6 3.75 3 3m0 0 3-3m-3 3V1.5m6 9h.75a2.25 2.25 0 0 1 2.25 2.25v7.5a2.25 2.25 0 0 1-2.25 2.25h-7.5a2.25 2.25 0 0 1-2.25-2.25v-.75"
            />
          </svg>
          <span>Resume</span>
        </a>
        <a
          href="#contact"
          className="bg-white text-purple-600 px-6 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 active:border-2 active:border-purple-600 hover:border-2 hover:border-purple-600 flex items-center space-x-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
            />
          </svg>
          <span>Hire Me</span>
        </a>
        </motion.div>
        </motion.section>
    );
};


export default Hero;
