
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
    <header className="fixed top-0 left-0 right-0 bg-gradient-to-r from-amber-50/95 to-orange-50/95 backdrop-blur-md shadow-lg z-50 border-b-2 border-amber-200">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-amber-800 to-orange-800 bg-clip-text text-transparent font-serif">
            Mi Portafolio
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('inicio')}
              className="text-amber-800 hover:text-orange-600 transition-colors duration-300 font-serif font-medium relative group"
            >
              Inicio
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-600 transition-all duration-300 group-hover:w-full"></div>
            </button>
            <button 
              onClick={() => scrollToSection('portafolio')}
              className="text-amber-800 hover:text-orange-600 transition-colors duration-300 font-serif font-medium relative group"
            >
              Portafolio
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-600 transition-all duration-300 group-hover:w-full"></div>
            </button>
            <button 
              onClick={() => scrollToSection('blog')}
              className="text-amber-800 hover:text-orange-600 transition-colors duration-300 font-serif font-medium relative group"
            >
              Blog
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-600 transition-all duration-300 group-hover:w-full"></div>
            </button>
            <button 
              onClick={() => scrollToSection('contacto')}
              className="text-amber-800 hover:text-orange-600 transition-colors duration-300 font-serif font-medium relative group"
            >
              Contacto
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-600 transition-all duration-300 group-hover:w-full"></div>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-amber-800 border border-amber-300 rounded-lg bg-amber-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t-2 border-amber-200 bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('inicio')}
                className="text-amber-800 hover:text-orange-600 transition-colors duration-300 text-left font-serif font-medium"
              >
                Inicio
              </button>
              <button 
                onClick={() => scrollToSection('portafolio')}
                className="text-amber-800 hover:text-orange-600 transition-colors duration-300 text-left font-serif font-medium"
              >
                Portafolio
              </button>
              <button 
                onClick={() => scrollToSection('blog')}
                className="text-amber-800 hover:text-orange-600 transition-colors duration-300 text-left font-serif font-medium"
              >
                Blog
              </button>
              <button 
                onClick={() => scrollToSection('contacto')}
                className="text-amber-800 hover:text-orange-600 transition-colors duration-300 text-left font-serif font-medium"
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
