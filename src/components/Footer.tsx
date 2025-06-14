
import React from 'react';
import { Heart, Code } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Mi Portafolio
            </h3>
            <p className="text-gray-300 mb-4">
              Desarrollador Full Stack apasionado por crear experiencias web excepcionales con tecnologías modernas.
            </p>
            <p className="text-sm text-gray-400">
              HTML5 • CSS3 • JavaScript • React • Node.js • PostgreSQL
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
            <div className="space-y-2">
              <button 
                onClick={() => document.getElementById('inicio')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-gray-300 hover:text-blue-400 transition-colors duration-300"
              >
                Inicio
              </button>
              <button 
                onClick={() => document.getElementById('portafolio')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-gray-300 hover:text-blue-400 transition-colors duration-300"
              >
                Portafolio
              </button>
              <button 
                onClick={() => document.getElementById('blog')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-gray-300 hover:text-blue-400 transition-colors duration-300"
              >
                Blog
              </button>
              <button 
                onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-gray-300 hover:text-blue-400 transition-colors duration-300"
              >
                Contacto
              </button>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Conecta Conmigo</h4>
            <p className="text-gray-300 mb-4">
              ¿Tienes una idea? ¡Hablemos y hagámosla realidad!
            </p>
            <button 
              onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Contactar Ahora
            </button>
          </div>
        </div>

        <hr className="border-gray-700 my-8" />

        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center gap-2 text-gray-400 mb-4 md:mb-0">
            <span>Hecho con</span>
            <Heart className="text-red-500" size={16} />
            <span>y</span>
            <Code className="text-blue-400" size={16} />
            <span>por un desarrollador apasionado</span>
          </div>
          
          <p className="text-gray-400 text-sm">
            © 2024 Mi Portafolio. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
