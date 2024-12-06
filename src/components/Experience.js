import React from "react";
import { FaAws, FaFreeCodeCamp, FaDatabase } from "react-icons/fa";

const Experience = () => {
  const internships = [
    {
      title: "Software Engineer Intern",
      company: "Softylines",
      duration: "February 2024 - July 2024",
      description: (
        <>
          <ul className="list-disc pl-5">
            <li>
            Designed and developed an accessible learning platform adhering to <span className="font-medium text-purple-700 dark:text-purple-100">WCAG standards</span>, supporting learners with special needs.
            </li>
            <li>
            Built a <span className="font-medium text-purple-700 dark:text-purple-100">RESTful API</span> with <span className="font-medium text-purple-700 dark:text-purple-100">Node.js</span> and crafted a dynamic frontend using <span className="font-medium text-purple-700 dark:text-purple-100">Angular</span>.
            </li>
            <li>
            Created an intelligent chatbot with the <span className="font-medium text-purple-700 dark:text-purple-100">Rasa Framework</span>, utilizing <span className="font-medium text-purple-700 dark:text-purple-100">Python</span> for custom logic.
            </li>
            <li>
            Integrated <span className="font-medium text-purple-700 dark:text-purple-100">Elasticsearch</span> to enable fast and accurate course search functionality.
            </li>
            <li>
            Enhanced chatbot interaction quality through <span className="font-medium text-purple-700 dark:text-purple-100">Natural Language Processing (NLP)</span> using <span className="font-medium text-purple-700 dark:text-purple-100">NLTK</span>.
            </li>
          </ul>
        </>
      ),      
    },
    {
      title: "Web Developer Intern",
      company: "Hadooc",
      duration: "July 2023",
      description: (
        <>
          <ul className="list-disc pl-5">
            <li>
              Developed a web application to manage enterprise systems using the OKR (Objectives and Key Results) methodology.
            </li>
          </ul>
        </>
      ),
    },
    {
      title: "Web Developer Intern",
      company: "JPARTNERS",
      duration: "February 2021 - July 2021",
      description: (
        <>
          <ul className="list-disc pl-5">
            <li>
              Built an E-commerce platform enabling users to create virtual stores at minimal cost.
            </li>
            <li>
              Integrated "Drop Shipping" options and inventory management.
            </li>
            <li>
              Enabled customers to place and track orders efficiently.
            </li>
          </ul>
        </>
      ),
    },
  ];

  const certifications = [
    {
      title: "JavaScript Algorithms and Data Structures",
      provider: (<><div className="flex items-center gap-2"><FaFreeCodeCamp />"freeCodeCamp"</div></>),
      link: "https://www.freecodecamp.org/certification/fccfffa6231-5d4a-4a9a-a7c4-5c18ca025e8a/javascript-algorithms-and-data-structures-v8",
    },
    {
      title: "Responsive Web Design",
      provider: (<><div className="flex items-center gap-2"><FaFreeCodeCamp />"freeCodeCamp"</div></>),
      link: "https://www.freecodecamp.org/certification/fccfffa6231-5d4a-4a9a-a7c4-5c18ca025e8a/responsive-web-design",
    },
    {
      title: "Oracle Cloud Infrastructure AI Certified Foundations Associate",
      provider: (<><div className="flex items-center gap-2"><FaDatabase />"Oracle"</div></>),
      link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=315D9087DD008B2C5ECE8E661E145EC97960E969A8ED4194A96C3D6042F89BF9",
    },
    {
      title: "AWS Academy Cloud Foundations",
      provider: (<><div className="flex items-center gap-2"><FaAws className="text-orange-600" />"Amazon Web Services (AWS)"</div></>),
      link: "https://www.credly.com/badges/d3a3f6d6-207c-463f-bd77-5e28c0857601?source=linked_in_profile",
    },
    {
      title: "AWS Academy Machine Learning Foundations",
      provider: (<><div className="flex items-center gap-2"><FaAws className="text-orange-600" />"Amazon Web Services (AWS)"</div></>),
      link: "https://www.credly.com/badges/9c00c1f9-bb04-473d-8780-4bbdc3ef8632?source=linked_in_profile",
    },
  ];

  return (
    <div className="bg-gray-50 dark:bg-gray-800 py-16" id="experience">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center text-purple-600 mb-12">
          Experience & Certifications
        </h2>

        {/* Timeline Section */}
        <div className="relative">
          <div className="border-l-4 border-purple-600">
            {internships.map((internship, index) => (
              <div key={index} className="mb-10 ml-6">
                <div className="absolute w-6 h-6 bg-purple-600 rounded-full -left-3.5"></div>
                <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <h4 className="text-2xl font-semibold text-gray-900 dark:text-white">
                    {internship.title}
                  </h4>
                  <p className="text-lg font-semibold flex gap-2 text-purple-500">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
                      </svg>{internship.company}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 italic">
                    {internship.duration}
                  </p>
                  <div className="text-gray-700 dark:text-gray-300 mt-4">
                    {internship.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div>
          <h3 className="text-3xl font-bold text-purple-600 mb-6">
            Certifications
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((certification, index) => (
              <a
                key={index}
                href={certification.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 hover:scale-105"
              >
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {certification.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  {certification.provider}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
