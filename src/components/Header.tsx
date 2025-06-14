
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/10 backdrop-blur-md shadow-2xl z-50 border-b border-white/20">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            My Portfolio ✨
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('inicio')}
              className="text-white/90 hover:text-cyan-300 transition-colors duration-300 font-medium relative group"
            >
              Home
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 group-hover:w-full"></div>
            </button>
            <button 
              onClick={() => scrollToSection('portafolio')}
              className="text-white/90 hover:text-cyan-300 transition-colors duration-300 font-medium relative group"
            >
              Portfolio
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 group-hover:w-full"></div>
            </button>
            <button 
              onClick={() => scrollToSection('blog')}
              className="text-white/90 hover:text-cyan-300 transition-colors duration-300 font-medium relative group"
            >
              Blog
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 group-hover:w-full"></div>
            </button>
            <button 
              onClick={() => scrollToSection('contacto')}
              className="text-white/90 hover:text-cyan-300 transition-colors duration-300 font-medium relative group"
            >
              Contact
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 group-hover:w-full"></div>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-white bg-white/20 backdrop-blur-md border border-white/30 rounded-lg shadow-xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 shadow-xl">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('inicio')}
                className="text-white/90 hover:text-cyan-300 transition-colors duration-300 text-left font-medium"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('portafolio')}
                className="text-white/90 hover:text-cyan-300 transition-colors duration-300 text-left font-medium"
              >
                Portfolio
              </button>
              <button 
                onClick={() => scrollToSection('blog')}
                className="text-white/90 hover:text-cyan-300 transition-colors duration-300 text-left font-medium"
              >
                Blog
              </button>
              <button 
                onClick={() => scrollToSection('contacto')}
                className="text-white/90 hover:text-cyan-300 transition-colors duration-300 text-left font-medium"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
