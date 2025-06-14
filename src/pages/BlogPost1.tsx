
import React from 'react';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const BlogPost1 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600">
      <div className="container mx-auto px-6 py-12">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-white hover:text-cyan-200 transition-colors duration-300 mb-8"
        >
          <ArrowLeft size={20} />
          Volver al inicio
        </Link>

        <article className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl max-w-4xl mx-auto">
          <div className="mb-6">
            <span className="bg-cyan-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
              Experiencia Personal
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Mi Viaje en el Desarrollo Web Full Stack
          </h1>

          <div className="flex items-center gap-6 text-white/70 mb-8">
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              <span>15 de enero, 2024</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} />
              <span>5 min de lectura</span>
            </div>
          </div>

          <div className="prose prose-lg text-white/90 leading-relaxed space-y-6">
            <p>
              Todo comenzó hace varios años cuando decidí dar el salto al mundo de la programación. 
              Como muchos desarrolladores, mi viaje no fue lineal, pero cada paso me ha llevado a 
              donde estoy hoy.
            </p>
            
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Los Primeros Pasos</h2>
            <p>
              Inicié con HTML y CSS básico, creando mis primeras páginas web estáticas. 
              La emoción de ver mis primeros diseños cobrar vida en el navegador fue 
              indescriptible. Cada etiqueta aprendida era un pequeño triunfo.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">El Descubrimiento de JavaScript</h2>
            <p>
              JavaScript cambió completamente mi perspectiva. De repente, mis páginas web 
              podían ser interactivas, dinámicas. Fue como descubrir un nuevo mundo de 
              posibilidades infinitas.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">React y el Ecosistema Moderno</h2>
            <p>
              Cuando descubrí React, todo cambió nuevamente. La forma de pensar en componentes, 
              el estado, los hooks... Era como aprender un nuevo idioma que me permitía 
              expresar ideas más complejas de manera elegante.
            </p>

            <p>
              Hoy, continúo aprendiendo cada día. El desarrollo web está en constante evolución, 
              y esa es precisamente la parte más emocionante de esta profesión.
            </p>
          </div>
        </article>
      </div>
    </div>
  );
};

export default BlogPost1;
