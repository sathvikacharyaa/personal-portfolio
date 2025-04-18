import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/lib/animations";
import { Button } from "@/components/ui/button";

export default function About() {
  return (
    <motion.section 
      id="about" 
      className="py-16 md:py-24 bg-gray-50 section"
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
          <p className="text-sm uppercase tracking-wider text-gray-500 font-mono mb-2">About Me</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Background</h2>
          <div className="w-20 h-1 bg-black mx-auto"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={fadeIn("right", "tween", 0.3, 1)}
          >
            <div className="rounded-lg shadow-lg bg-gray-200 h-64 md:h-80 w-full flex items-center justify-center">
              <svg className="w-24 h-24 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("left", "tween", 0.4, 1)}
          >
            <h3 className="text-2xl font-bold mb-4">Passionate Computer Science Student</h3>
            <p className="text-gray-600 mb-4">
              I'm a junior year Computer Science student at State University with a focus on web development and machine learning. 
              My journey in technology began when I was 14, building simple games and websites.
            </p>
            <p className="text-gray-600 mb-6">
              Today, I combine my technical knowledge with creative problem-solving to build applications that are both functional and user-friendly. 
              I'm particularly interested in how technology can create meaningful impact in education and healthcare.
            </p>
            
            <div className="space-y-4">
              <div className="flex flex-col md:flex-row md:items-center">
                <span className="font-bold min-w-32">Name:</span>
                <span className="text-gray-600">B G Sathvik Acharya</span>
              </div>
              <div className="flex flex-col md:flex-row md:items-center">
                <span className="font-bold min-w-32">Education:</span>
                <span className="text-gray-600">B.S. Computer Science, State University (2021-2025)</span>
              </div>
              <div className="flex flex-col md:flex-row md:items-center">
                <span className="font-bold min-w-32">Location:</span>
                <span className="text-gray-600">San Francisco, California</span>
              </div>
              <div className="flex flex-col md:flex-row md:items-center">
                <span className="font-bold min-w-32">Email:</span>
                <a href="mailto:johndoe@example.com" className="text-gray-600 hover:text-black">johndoe@example.com</a>
              </div>
            </div>
            
            <div className="mt-8">
              <Button className="px-6 py-3 bg-black text-white rounded hover:bg-gray-800 transition-colors">
                Download CV
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
