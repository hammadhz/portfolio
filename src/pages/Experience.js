// // Experience.js
// import React from "react";
// import { motion } from "framer-motion";

// const experiences = [
//   {
//     title: "ReactJS Developer",
//     company: "Pukat Digital Pvt Ltd.",
//     startDate: "Feb 2023",
//     endDate: "Present",
//     techStack: ["React.js", "Tailwind CSS", "Next.js", "Bootstrap"],
//     description:
//       "Worked on developing and maintaining the company’s main web application. Focused on creating responsive and performant user interfaces.",
//   },
//   {
//     title: "MERN Stack Intern",
//     company: "Cybil Tech.",
//     startDate: "Aug 2022",
//     endDate: "Feb 2023",
//     techStack: ["Next.js", "DatoCMS", "Tailwind CSS", "Typescript", "React.js"],
//     description:
//       "Assisted in building scalable applications and APIs. Improved application performance and collaborated with the team to integrate new features.",
//   },
// ];

// const Experience = () => {
//   const timelineVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
//   };

//   return (
//     <section id="experience" className="bg-primary py-20">
//       <div className="container mx-auto text-center">
//         <motion.h2
//           className="text-4xl font-bold text-secondary mb-12 font-poppins"
//           initial="hidden"
//           animate="visible"
//           variants={timelineVariants}
//         >
//           My Experience
//         </motion.h2>
//         <div className="relative max-w-4xl lg:mx-auto mx-8">
//           <div className="absolute inset-0 border-l-2 border-secondary"></div>
//           <ul className="space-y-8">
//             {experiences.map((exp, index) => (
//               <motion.li
//                 key={index}
//                 className="relative flex items-start lg:space-x-6 md:space-x-[50px] space-x-12"
//                 initial="hidden"
//                 animate="visible"
//                 variants={timelineVariants}
//               >
//                 <div className="relative lg:-left-[11px] md:-left-3 -left-[13px]  z-10 flex items-center justify-center lg:w-7 lg:h-6 md:w-10 md:h-6 w-28 h-6 bg-accent rounded-full shadow-lg">
//                   <div className="size-2 bg-secondary rounded-full"></div>
//                 </div>
//                 <div className="ml-4">
//                   <h3 className="text-xl font-semibold text-secondary text-left">
//                     {exp.title}
//                   </h3>
//                   <p className="text-lg text-secondary text-left mb-1">
//                     {exp.company}
//                   </p>
//                   <p className="text-sm text-secondary text-left">
//                     {exp.startDate} - {exp.endDate}
//                   </p>
//                   <p className="text-sm text-secondary text-left mb-2">
//                     Tech Stack: {exp.techStack.join(", ")}
//                   </p>
//                   <p className="text-secondary text-left">{exp.description}</p>
//                 </div>
//               </motion.li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Experience;

import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "ReactJS Developer",
    company: "Pukat Digital Pvt Ltd.",
    startDate: "Feb 2023",
    endDate: "Present",
    techStack: ["React.js", "Tailwind CSS", "Next.js", "Bootstrap"],
    description:
      "Worked on developing and maintaining the company’s main web application. Focused on creating responsive and performant user interfaces.",
  },
  {
    title: "MERN Stack Intern",
    company: "Cybil Tech.",
    startDate: "Aug 2022",
    endDate: "Feb 2023",
    techStack: ["Next.js", "DatoCMS", "Tailwind CSS", "Typescript", "React.js"],
    description:
      "Assisted in building scalable applications and APIs. Improved application performance and collaborated with the team to integrate new features.",
  },
];

const Experience = () => {
  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } },
  };

  return (
    <section id="experience" className="bg-primary py-20">
      <div className="container mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold text-secondary mb-12 font-poppins"
          initial="hidden"
          animate="visible"
          variants={fadeInVariants}
        >
          My Experience
        </motion.h2>
        <div className="max-w-4xl mx-auto px-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="hover:bg-tertiary text-white parentCardExp p-6 mb-8 rounded-lg shadow-lg"
              initial="hidden"
              animate="visible"
              variants={fadeInVariants}
            >
              <div className="flex lg:justify-between lg:flex-row flex-col  gap-5">
                <div className="lg:text-sm text-base text-white mb-4 lg:w-1/3 w-full font-poppins mt-[2px]">
                  {exp.startDate} - {exp.endDate}
                </div>
                <div>
                  <div className="text-xl font-bold mb-2 lg:text-start text-center flex-1 font-poppins">
                    {exp.title}
                  </div>
                  <div className="text-lg font-medium mb-1 lg:text-start text-center font-poppins">
                    {exp.company}
                  </div>
                  <div className="mb-4 text-base font-regular lg:text-start text-center font-poppins">
                    {exp.description}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {exp.techStack.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-tertiary childExpTags font-poppins text-base text-white px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
