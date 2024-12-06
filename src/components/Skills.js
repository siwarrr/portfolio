import React, { useRef } from "react";
import { FaCss3Alt, FaHtml5, FaReact, FaJs, FaAngular, FaNodeJs, FaGit } from "react-icons/fa";
import { SiTailwindcss, SiBootstrap } from "react-icons/si";
import { motion, useInView } from "framer-motion";

const skills = [
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500" />, color: "hover:text-orange-500" },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" />, color: "hover:text-blue-500" },
    { name: "JavaScript", icon: <FaJs className="text-yellow-500" />, color: "hover:text-yellow-500" },
    { name: "Angular", icon: <FaAngular className="text-red-600" />, color: "hover:text-red-600" },
    { name: "React", icon: <FaReact className="text-blue-400" />, color: "hover:text-blue-400" },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" />, color: "hover:text-green-500" },
    { name: "Bootstrap", icon: <SiBootstrap className="text-purple-600" />, color: "hover:text-purple-600" },
    { name: "TailwindCSS", icon: <SiTailwindcss className="text-blue-300" />, color: "hover:text-blue-300" },
    { name: "Git", icon: <FaGit className="text-orange-600" />, color: "hover:text-orange-600" },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

    return (
      <motion.div
      className="bg-gray-50 dark:bg-gray-800 py-16"
      id="skills"
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"} // Animate only when in view
    >
      <div className="container mx-auto px-6">
        {/* Heading Animation */}
        <h2
          className="text-4xl font-extrabold text-center text-purple-600 mb-12"
        >
          Skills & Tools
        </h2>

        {/* Skills Grid Animation */}
        <motion.div
          className="flex flex-wrap justify-center gap-8"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className={`flex flex-col items-center justify-center w-24 h-24 bg-white dark:bg-gray-700 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 hover:scale-110 ${skill.color}`}
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 },
              }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-4xl mb-2">{skill.icon}</div>
              <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
    );
};

export default Skills;