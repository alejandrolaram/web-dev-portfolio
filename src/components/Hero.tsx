import React from 'react';
import { Code, Rocket, Zap } from 'lucide-react';
const Hero = () => {
  return <section id="inicio" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 relative overflow-hidden">
      {/* Animated background elements - Frutiger Aero style */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-green-300/30 to-blue-300/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-pink-300/30 to-yellow-300/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-cyan-300/20 to-purple-300/20 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="animate-fade-in">
            {/* Frutiger Aero style header with glass morphism */}
            <div className="flex justify-center mb-8">
              <div className="bg-white/20 backdrop-blur-md rounded-full px-8 py-2 border border-white/30 shadow-xl">
                <span className="text-white/90 font-medium tracking-wide">Hola, soy Alejandro Lara</span>
              </div>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold mb-6 font-sans">
              <span className="bg-gradient-to-r from-white via-cyan-200 to-blue-200 bg-clip-text text-transparent drop-shadow-2xl">
                Desarrollador
              </span>
              <br />
              <span className="bg-gradient-to-r from-green-300 via-blue-300 to-purple-300 bg-clip-text text-transparent">
                Full Stack
              </span>
            </h1>
            
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 mb-8 border border-white/20 shadow-2xl max-w-2xl mx-auto">
              <p className="text-xl md:text-2xl text-white/90 mb-4 leading-relaxed">Creando experiencias web con tecnología de vanguardia</p>
              <div className="flex flex-wrap justify-center gap-3">
                {['HTML5', 'CSS3', 'JavaScript', 'React', 'Node.js', 'PostgreSQL'].map(tech => <span key={tech} className="bg-gradient-to-r from-cyan-400/20 to-blue-400/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium border border-white/20 shadow-lg">
                    {tech}
                  </span>)}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button onClick={() => document.getElementById('portafolio')?.scrollIntoView({
              behavior: 'smooth'
            })} className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border border-white/20 backdrop-blur-sm" style={{
              boxShadow: '0 8px 32px rgba(6, 182, 212, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
            }}>
                🚀 Ver Proyectos
              </button>
              <button onClick={() => document.getElementById('contacto')?.scrollIntoView({
              behavior: 'smooth'
            })} className="bg-white/20 backdrop-blur-md text-white border-2 border-white/40 px-8 py-4 rounded-xl font-semibold hover:bg-white/30 transition-all duration-300 shadow-xl">
                💬 Contáctame
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 hover:shadow-2xl border border-white/20 transition-all duration-300 hover:scale-105">
                <div className="bg-gradient-to-br from-cyan-400 to-blue-500 p-4 rounded-2xl mb-4 mx-auto w-fit shadow-xl">
                  <Code className="text-white" size={32} />
                </div>
                <h3 className="font-bold text-white mb-2 text-xl">Frontend</h3>
                <p className="text-white/80 text-center">Interfaces modernas y responsivas con React</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 hover:shadow-2xl border border-white/20 transition-all duration-300 hover:scale-105">
                <div className="bg-gradient-to-br from-pink-400 to-purple-500 p-4 rounded-2xl mb-4 mx-auto w-fit shadow-xl">
                  <Rocket className="text-white" size={32} />
                </div>
                <h3 className="font-bold text-white mb-2 text-xl">Backend</h3>
                <p className="text-white/80 text-center">APIs robustas con Node.js y Express</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 hover:shadow-2xl border border-white/20 transition-all duration-300 hover:scale-105">
                <div className="bg-gradient-to-br from-green-400 to-emerald-500 p-4 rounded-2xl mb-4 mx-auto w-fit shadow-xl">
                  <Zap className="text-white" size={32} />
                </div>
                <h3 className="font-bold text-white mb-2 text-xl">Bases de Datos</h3>
                <p className="text-white/80 text-center">Gestión eficiente con PostgreSQL</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;