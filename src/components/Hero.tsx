
import React from 'react';
import { Code, Rocket, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-6 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
                Desarrollador
              </span>
              <br />
              <span className="text-gray-800">Full Stack</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              Creando experiencias web excepcionales con tecnologías modernas
              <br />
              <span className="text-lg text-gray-500">HTML5 • CSS3 • JavaScript • React • Node.js • PostgreSQL</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button 
                onClick={() => document.getElementById('portafolio')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                Ver Proyectos
              </button>
              <button 
                onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                Contactar
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="flex flex-col items-center p-6 bg-white/50 backdrop-blur-sm rounded-xl hover:shadow-lg transition-all duration-300">
                <div className="bg-blue-100 p-3 rounded-full mb-4">
                  <Code className="text-blue-600" size={24} />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Frontend</h3>
                <p className="text-gray-600 text-center">Interfaces modernas y responsivas con React</p>
              </div>
              
              <div className="flex flex-col items-center p-6 bg-white/50 backdrop-blur-sm rounded-xl hover:shadow-lg transition-all duration-300">
                <div className="bg-purple-100 p-3 rounded-full mb-4">
                  <Rocket className="text-purple-600" size={24} />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Backend</h3>
                <p className="text-gray-600 text-center">APIs robustas con Node.js y Express</p>
              </div>
              
              <div className="flex flex-col items-center p-6 bg-white/50 backdrop-blur-sm rounded-xl hover:shadow-lg transition-all duration-300">
                <div className="bg-teal-100 p-3 rounded-full mb-4">
                  <Zap className="text-teal-600" size={24} />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Base de Datos</h3>
                <p className="text-gray-600 text-center">Gestión eficiente con PostgreSQL</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
