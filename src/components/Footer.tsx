import React from 'react';
import { Heart, Code } from 'lucide-react';
const Footer = () => {
  return <footer className="bg-gradient-to-br from-purple-900 via-blue-900 to-cyan-900 text-white py-12 border-t border-white/20 relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-48 h-48 bg-gradient-to-r from-cyan-300/10 to-blue-300/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-56 h-56 bg-gradient-to-r from-purple-300/10 to-pink-300/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent mb-4">Sobre mí</h3>
            
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 mb-4 border border-white/20 shadow-xl">
              <p className="text-white/90 mb-4 leading-relaxed">
                Desarrollador Full Stack apasionado por crear experiencias web excepcionales con tecnologías modernas.
              </p>
              <div className="flex flex-wrap gap-2">
                {['HTML5', 'CSS3', 'JavaScript', 'React', 'Node.js', 'PostgreSQL'].map(tech => <span key={tech} className="bg-gradient-to-r from-cyan-400/20 to-blue-400/20 text-white/80 text-xs px-2 py-1 rounded-full border border-white/20">
                    {tech}
                  </span>)}
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Enlaces Rápidos</h4>
            
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 shadow-xl">
              <div className="space-y-3">
                <button onClick={() => document.getElementById('inicio')?.scrollIntoView({
                behavior: 'smooth'
              })} className="block text-white/80 hover:text-cyan-300 transition-colors duration-300">
                  → Inicio
                </button>
                <button onClick={() => document.getElementById('portafolio')?.scrollIntoView({
                behavior: 'smooth'
              })} className="block text-white/80 hover:text-cyan-300 transition-colors duration-300">
                  → Portafolio
                </button>
                <button onClick={() => document.getElementById('blog')?.scrollIntoView({
                behavior: 'smooth'
              })} className="block text-white/80 hover:text-cyan-300 transition-colors duration-300">
                  → Blog
                </button>
                <button onClick={() => document.getElementById('contacto')?.scrollIntoView({
                behavior: 'smooth'
              })} className="block text-white/80 hover:text-cyan-300 transition-colors duration-300">
                  → Contacto
                </button>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Conecta Conmigo</h4>
            
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 shadow-xl">
              <p className="text-white/80 mb-4">
                ¿Tienes una idea? ¡Hablemos y hagámosla realidad!
              </p>
              <button onClick={() => document.getElementById('contacto')?.scrollIntoView({
              behavior: 'smooth'
            })} className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border border-white/20 w-full">
                Contactar Ahora 🚀
              </button>
            </div>
          </div>
        </div>

        <div className="flex justify-center my-8">
          <div className="bg-white/10 backdrop-blur-md rounded-full h-px w-64"></div>
        </div>

        <div className="flex justify-center">
          <p className="text-white/70 text-sm">© 2024 Alejandro Lara. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>;
};
export default Footer;