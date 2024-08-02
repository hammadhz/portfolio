// Projects.js
import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Project One",
    description:
      "A React.js application that provides a seamless user experience.",
    link: "#",
    image: "https://via.placeholder.com/300", // Replace with your project images
  },
  {
    title: "Project Two",
    description: "A Next.js website optimized for SEO and performance.",
    link: "#",
    image: "https://via.placeholder.com/300", // Replace with your project images
  },
];

const Projects = () => {
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  };

  return (
    <section id="projects" className="bg-black py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-secondary mb-12 font-poppins">
          My Projects
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-[#ffffff] rounded-lg shadow-lg overflow-hidden max-w-sm"
              initial="hidden"
              animate="visible"
              variants={cardVariants}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  className="text-[#F59E0B] hover:underline"
                >
                  Learn More
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
