
import React from 'react';
import { Code, Rocket, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 relative overflow-hidden">
      {/* Vintage paper texture overlay */}
      <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM5OTk5OTkiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzIiBjeT0iMyIgcj0iMyIvPjwvZz48L2c+PC9zdmc+')]"></div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="animate-fade-in">
            {/* Decorative vintage header */}
            <div className="flex justify-center mb-8">
              <div className="w-20 h-px bg-gradient-to-r from-transparent via-amber-600 to-transparent"></div>
              <div className="mx-4 w-3 h-3 bg-amber-600 rounded-full border-2 border-amber-200"></div>
              <div className="w-20 h-px bg-gradient-to-r from-transparent via-amber-600 to-transparent"></div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 font-serif">
              <span className="bg-gradient-to-r from-amber-800 via-orange-800 to-red-800 bg-clip-text text-transparent drop-shadow-sm">
                Desarrollador
              </span>
              <br />
              <span className="text-amber-900">Full Stack</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-amber-800 mb-4 leading-relaxed font-serif">
              Creando experiencias web excepcionales con tecnologías modernas
            </p>
            <p className="text-lg text-amber-700 mb-8 font-serif italic">
              HTML5 • CSS3 • JavaScript • React • Node.js • PostgreSQL
            </p>

            {/* Vintage decorative divider */}
            <div className="flex justify-center mb-8">
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-amber-600 to-transparent"></div>
              <div className="mx-3 w-2 h-2 bg-amber-600 rounded-full"></div>
              <div className="mx-1 w-1 h-1 bg-amber-400 rounded-full"></div>
              <div className="mx-3 w-2 h-2 bg-amber-600 rounded-full"></div>
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-amber-600 to-transparent"></div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button 
                onClick={() => document.getElementById('portafolio')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-8 py-4 rounded-lg font-serif font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 border border-amber-500"
                style={{
                  boxShadow: '0 4px 20px rgba(217, 119, 6, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
                }}
              >
                Ver Proyectos
              </button>
              <button 
                onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-amber-600 text-amber-800 bg-amber-50 px-8 py-4 rounded-lg font-serif font-semibold hover:bg-amber-600 hover:text-white transition-all duration-300"
              >
                Contactar
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="flex flex-col items-center p-6 bg-gradient-to-br from-amber-50 to-orange-50 backdrop-blur-sm rounded-lg hover:shadow-lg border-2 border-amber-200 transition-all duration-300 relative">
                {/* Vintage corner decorations */}
                <div className="absolute top-1 left-1 w-3 h-3 border-l border-t border-amber-400"></div>
                <div className="absolute top-1 right-1 w-3 h-3 border-r border-t border-amber-400"></div>
                <div className="absolute bottom-1 left-1 w-3 h-3 border-l border-b border-amber-400"></div>
                <div className="absolute bottom-1 right-1 w-3 h-3 border-r border-b border-amber-400"></div>
                
                <div className="bg-amber-200/60 p-3 rounded-full mb-4 border border-amber-300">
                  <Code className="text-amber-700" size={24} />
                </div>
                <h3 className="font-semibold text-amber-900 mb-2 font-serif">Frontend</h3>
                <p className="text-amber-800 text-center font-serif">Interfaces modernas y responsivas con React</p>
              </div>
              
              <div className="flex flex-col items-center p-6 bg-gradient-to-br from-amber-50 to-orange-50 backdrop-blur-sm rounded-lg hover:shadow-lg border-2 border-amber-200 transition-all duration-300 relative">
                {/* Vintage corner decorations */}
                <div className="absolute top-1 left-1 w-3 h-3 border-l border-t border-amber-400"></div>
                <div className="absolute top-1 right-1 w-3 h-3 border-r border-t border-amber-400"></div>
                <div className="absolute bottom-1 left-1 w-3 h-3 border-l border-b border-amber-400"></div>
                <div className="absolute bottom-1 right-1 w-3 h-3 border-r border-b border-amber-400"></div>
                
                <div className="bg-rose-200/60 p-3 rounded-full mb-4 border border-rose-300">
                  <Rocket className="text-rose-700" size={24} />
                </div>
                <h3 className="font-semibold text-amber-900 mb-2 font-serif">Backend</h3>
                <p className="text-amber-800 text-center font-serif">APIs robustas con Node.js y Express</p>
              </div>
              
              <div className="flex flex-col items-center p-6 bg-gradient-to-br from-amber-50 to-orange-50 backdrop-blur-sm rounded-lg hover:shadow-lg border-2 border-amber-200 transition-all duration-300 relative">
                {/* Vintage corner decorations */}
                <div className="absolute top-1 left-1 w-3 h-3 border-l border-t border-amber-400"></div>
                <div className="absolute top-1 right-1 w-3 h-3 border-r border-t border-amber-400"></div>
                <div className="absolute bottom-1 left-1 w-3 h-3 border-l border-b border-amber-400"></div>
                <div className="absolute bottom-1 right-1 w-3 h-3 border-r border-b border-amber-400"></div>
                
                <div className="bg-emerald-200/60 p-3 rounded-full mb-4 border border-emerald-300">
                  <Zap className="text-emerald-700" size={24} />
                </div>
                <h3 className="font-semibold text-amber-900 mb-2 font-serif">Base de Datos</h3>
                <p className="text-amber-800 text-center font-serif">Gestión eficiente con PostgreSQL</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
