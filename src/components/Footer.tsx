
import React from 'react';
import { Heart, Code } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-amber-900 to-orange-900 text-amber-50 py-12 border-t-4 border-amber-600 relative">
      {/* Vintage texture overlay */}
      <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM5OTk5OTkiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzIiBjeT0iMyIgcj0iMyIvPjwvZz48L2c+PC9zdmc+')]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-amber-300 to-yellow-300 bg-clip-text text-transparent mb-4 font-serif">
              Mi Portafolio
            </h3>
            
            {/* Decorative vintage border */}
            <div className="flex mb-4">
              <div className="w-16 h-px bg-gradient-to-r from-amber-400 to-transparent mt-2"></div>
            </div>
            
            <p className="text-amber-200 mb-4 font-serif leading-relaxed">
              Desarrollador Full Stack apasionado por crear experiencias web excepcionales con tecnologías modernas.
            </p>
            <p className="text-sm text-amber-300 font-serif italic">
              HTML5 • CSS3 • JavaScript • React • Node.js • PostgreSQL
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-amber-100 font-serif">Enlaces Rápidos</h4>
            
            {/* Decorative vintage border */}
            <div className="flex mb-4">
              <div className="w-12 h-px bg-gradient-to-r from-amber-400 to-transparent"></div>
            </div>
            
            <div className="space-y-2">
              <button 
                onClick={() => document.getElementById('inicio')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-amber-200 hover:text-amber-100 transition-colors duration-300 font-serif"
              >
                → Inicio
              </button>
              <button 
                onClick={() => document.getElementById('portafolio')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-amber-200 hover:text-amber-100 transition-colors duration-300 font-serif"
              >
                → Portafolio
              </button>
              <button 
                onClick={() => document.getElementById('blog')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-amber-200 hover:text-amber-100 transition-colors duration-300 font-serif"
              >
                → Blog
              </button>
              <button 
                onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-amber-200 hover:text-amber-100 transition-colors duration-300 font-serif"
              >
                → Contacto
              </button>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-amber-100 font-serif">Conecta Conmigo</h4>
            
            {/* Decorative vintage border */}
            <div className="flex mb-4">
              <div className="w-12 h-px bg-gradient-to-r from-amber-400 to-transparent"></div>
            </div>
            
            <p className="text-amber-200 mb-4 font-serif">
              ¿Tienes una idea? ¡Hablemos y hagámosla realidad!
            </p>
            <button 
              onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-6 py-2 rounded-lg font-serif font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 border border-amber-500"
            >
              Contactar Ahora
            </button>
          </div>
        </div>

        {/* Decorative vintage divider */}
        <div className="flex justify-center my-8">
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
          <div className="mx-4 w-2 h-2 bg-amber-400 rounded-full"></div>
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center gap-2 text-amber-300 mb-4 md:mb-0 font-serif">
            <span>Hecho con</span>
            <Heart className="text-red-400" size={16} />
            <span>y</span>
            <Code className="text-amber-400" size={16} />
            <span>por un desarrollador apasionado</span>
          </div>
          
          <p className="text-amber-300 text-sm font-serif">
            © 2024 Mi Portafolio. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
