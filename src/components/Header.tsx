
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
    <header className="fixed top-0 left-0 right-0 bg-gray-900/95 backdrop-blur-md shadow-lg z-50 border-b border-gray-700">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Mi Portafolio
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('inicio')}
              className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
            >
              Inicio
            </button>
            <button 
              onClick={() => scrollToSection('portafolio')}
              className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
            >
              Portafolio
            </button>
            <button 
              onClick={() => scrollToSection('blog')}
              className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
            >
              Blog
            </button>
            <button 
              onClick={() => scrollToSection('contacto')}
              className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
            >
              Contacto
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-gray-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-700">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('inicio')}
                className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-left"
              >
                Inicio
              </button>
              <button 
                onClick={() => scrollToSection('portafolio')}
                className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-left"
              >
                Portafolio
              </button>
              <button 
                onClick={() => scrollToSection('blog')}
                className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-left"
              >
                Blog
              </button>
              <button 
                onClick={() => scrollToSection('contacto')}
                className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-left"
              >
                Contacto
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
