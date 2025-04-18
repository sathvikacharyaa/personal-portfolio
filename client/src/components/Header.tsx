import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  const isActive = (id: string) => {
    // Check if we're at the homepage first
    if (location !== "/") return false;
    
    // Get all section elements for checking which one is in view
    const sections = ["hero", "experience", "projects", "skills", "interests", "contact"];
    const sectionElements = sections.map(s => document.getElementById(s));
    
    // If the specific section is in view, return true
    const scrollPosition = window.scrollY + 100;
    
    const currentSection = sectionElements.find((section, index) => {
      if (!section) return false;
      const nextSection = sectionElements[index + 1];
      
      return scrollPosition >= section.offsetTop && 
        (!nextSection || scrollPosition < nextSection.offsetTop);
    });
    
    return currentSection?.id === id;
  };

  return (
    <header className={`fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-40 border-b border-gray-100 transition-all duration-300 ${isScrolled ? 'py-2' : 'py-4'}`}>
      <div className="container">
        <div className="flex items-center justify-between">
          <a 
            href="#hero" 
            className="text-xl font-bold tracking-tight" 
            onClick={() => handleNavClick('hero')}
          >
            <span className="font">B G Sathvik Acharya</span>
            
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a 
              href="#hero" 
              className={`menu-item ${isActive('hero') ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('hero');
              }}
            >
              About
            </a>
            <a 
              href="#experience" 
              className={`menu-item ${isActive('experience') ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('experience');
              }}
            >
              Experience
            </a>
            <a 
              href="#projects" 
              className={`menu-item ${isActive('projects') ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('projects');
              }}
            >
              Projects
            </a>
            <a 
              href="#skills" 
              className={`menu-item ${isActive('skills') ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('skills');
              }}
            >
              Skills
            </a>
            <a 
              href="#interests" 
              className={`menu-item ${isActive('interests') ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('interests');
              }}
            >
              Interests
            </a>
            <a 
              href="#contact" 
              className={`menu-item ${isActive('contact') ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('contact');
              }}
            >
              Contact
            </a>

          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div className={`md:hidden bg-white border-t border-gray-100 animate-slide-down ${isOpen ? 'block' : 'hidden'}`}>
        <div className="container py-2 space-y-3">
          <a 
            href="#hero" 
            className="block py-2 text-sm font-medium hover:text-black transition-colors"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('hero');
            }}
          >
            About
          </a>
          <a 
            href="#experience" 
            className="block py-2 text-sm font-medium hover:text-black transition-colors"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('experience');
            }}
          >
            Experience
          </a>
          <a 
            href="#projects" 
            className="block py-2 text-sm font-medium hover:text-black transition-colors"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('projects');
            }}
          >
            Projects
          </a>
          <a 
            href="#skills" 
            className="block py-2 text-sm font-medium hover:text-black transition-colors"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('skills');
            }}
          >
            Skills
          </a>
          <a 
            href="#interests" 
            className="block py-2 text-sm font-medium hover:text-black transition-colors"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('interests');
            }}
          >
            Interests
          </a>
          <a 
            href="#contact" 
            className="block py-2 text-sm font-medium hover:text-black transition-colors"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('contact');
            }}
          >
            Contact
          </a>

        </div>
      </div>
    </header>
  );
}
