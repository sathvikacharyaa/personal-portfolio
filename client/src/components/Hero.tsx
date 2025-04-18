import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { HiMail } from "react-icons/hi";
import { staggerContainer, fadeIn, slideIn } from "@/lib/animations";

export default function Hero() {
  return (
    <motion.section 
      id="hero" 
      className="min-h-screen flex items-center pt-16 section"
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <div className="container py-12 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div 
            className="order-2 md:order-1"
            variants={fadeIn("right", "tween", 0.2, 1)}
          >
            <motion.p 
              className="text-sm md:text-base font-mono text-gray-500 mb-2"
              variants={fadeIn("up", "tween", 0.3, 1)}
            >
              Hello, I'm
            </motion.p>
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-4"
              variants={fadeIn("up", "tween", 0.4, 1)}
            >
             B G Sathvik Acharya<span className="text-gray-400">.</span>
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl font-light mb-6"
              variants={fadeIn("up", "tween", 0.5, 1)}
            >
              Physics Computer Science Undergraduate
            </motion.p>
            <motion.p 
              className="text-gray-600 mb-8 max-w-md"
              variants={fadeIn("up", "tween", 0.6, 1)}
            >
              A Physics and Computer Science undergraduate at St. Aloysius College (Autonomous) Mangalore, I am pursuing a dual major, driven by a deep passion for exploring both fields.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              variants={fadeIn("up", "tween", 0.7, 1)}
            >
              <a 
                href="#projects" 
                className="px-6 py-3 bg-black text-white rounded hover:bg-gray-800 transition-colors text-center"
                onClick={(e) => {
                  e.preventDefault();
                  const projectsSection = document.getElementById('projects');
                  if (projectsSection) {
                    window.scrollTo({
                      top: projectsSection.offsetTop - 80,
                      behavior: 'smooth'
                    });
                  }
                }}
              >
                View My Work
              </a>
              <a 
                href="#contact" 
                className="px-6 py-3 border border-black rounded hover:bg-gray-50 transition-colors text-center"
                onClick={(e) => {
                  e.preventDefault();
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    window.scrollTo({
                      top: contactSection.offsetTop - 80,
                      behavior: 'smooth'
                    });
                  }
                }}
              >
                Get In Touch
              </a>
            </motion.div>
            <motion.div 
              className="flex items-center space-x-4 mt-8"
              variants={fadeIn("up", "tween", 0.8, 1)}
            >
              <a 
                href="https://github.com/sathvikacharyaa/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-600 hover:text-black transition-colors"
              >
                <FaGithub className="text-xl" />
              </a>
              <a 
                href="https://www.linkedin.com/in/sathvikacharya/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-600 hover:text-black transition-colors"
              >
                <FaLinkedinIn className="text-xl" />
              </a>
              <a 
                href="https://x.com/sathvikacharyaa" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-600 hover:text-black transition-colors"
              >
                <FaXTwitter className="text-xl" />
              </a>
              <a 
                href="mailto:sathvikacharya@gmail.com" 
                className="text-gray-600 hover:text-black transition-colors"
              >
                <HiMail className="text-xl" />
              </a>
            </motion.div>
          </motion.div>
          <motion.div 
            className="order-1 md:order-2 flex justify-center"
            variants={slideIn("left", "tween", 0.2, 1)}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-gray-100 overflow-hidden border-8 border-white shadow-lg">
              <img 
                src="/assets/profile.jpg" 
                alt="B G Sathvik Acharya" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
