import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { HiMail } from "react-icons/hi";

export default function Footer() {
  return (
    <footer className="py-8 bg-gray-900 text-white">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#hero" className="text-xl font-bold tracking-tight">
              <span className="font">B G Sathvik Acharya</span>
            </a>
            
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="https://github.com/sathvikacharyaa/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FaGithub className="text-xl" />
            </a>
            <a 
              href="https://www.linkedin.com/in/sathvikacharya/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FaLinkedinIn className="text-xl" />
            </a>
            <a 
              href="https://x.com/sathvikacharyaa" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FaXTwitter className="text-xl" />
            </a>
            <a 
              href="mailto:sathvikacharya@gmail.com"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <HiMail className="text-xl" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} B G Sathvik Acharya. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
