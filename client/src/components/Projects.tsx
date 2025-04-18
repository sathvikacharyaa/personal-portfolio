import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { staggerContainer, fadeIn, slideIn } from "@/lib/animations";

const projects = [
  {
    id: 1,
    title: "Deep Space Navigation Using X-Ray Pulsars",
    description: "Analyzed millisecond X-ray pulsars from NASA’s NICER mission for deep space navigation using pulsar timing, employing HEASoft tools (FTOOLS, NICERDAS, XSPEC) for data processing, spectral analysis, and timing studies.",
    techs: ["Shell Scripting", "Data Analysis", "Astronomy","HEASoft"],
    github: "https://github.com/sathvikacharyaa/NICER-XNAV",
  },
  {
    id: 2,
    title: "Siril Tutorial Website",
    description: "Developed a step-by-step astrophotography image stacking guide using Siril, presented as a website to simplify the workflow from image preparation to post-processing for users of all levels.",
    techs: ["HTML", "CSS", "Javascript"],
    github: "https://github.com/sathvikacharyaa/sirilastro",
    live: "https://sathvikacharyaa.github.io/sirilastro/",
  },
  {
    id: 3,
    title: "Image Stacking in Astrophotography",
    description: "Processed and stacked astronomical images to improve signal-to-noise ratio and enhance the visibility of faint celestial objects.",
    techs: ["Siril", "DeepSkyStacker", "PIPP","Sequator"],
  },
];

export default function Projects() {
  return (
    <motion.section 
      id="projects" 
      className="py-16 md:py-24 section"
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <div className="container">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-12"
          variants={fadeIn("up", "tween", 0.2, 1)}
        >
          <p className="text-sm uppercase tracking-wider text-gray-500 font-mono mb-2">Portfolio</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-black mx-auto"></div>
          <p className="text-gray-600 mt-4">Here are some of my recent projects that showcase my technical skills and problem-solving abilities.</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              className="project-card"
              variants={fadeIn("up", "tween", 0.2 + (index * 0.1), 1)}
            >
              <div className="relative h-56 overflow-hidden">
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                  </svg>
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-white text-black rounded text-sm font-medium hover:bg-gray-100 transition-colors">
                    View Project
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techs.map((tech) => (
                    <span key={tech} className="text-xs px-2 py-1 bg-gray-100 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-end">
                  <div className="flex space-x-2">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black transition-colors">
                        <FaGithub />
                      </a>
                    )}
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black transition-colors">
                        <FaExternalLinkAlt />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* View All Projects button removed */}
      </div>
    </motion.section>
  );
}
