
import React from 'react';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const BlogPost2 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-400 via-emerald-500 to-cyan-600">
      <div className="container mx-auto px-6 py-12">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-white hover:text-green-200 transition-colors duration-300 mb-8"
        >
          <ArrowLeft size={20} />
          Volver al inicio
        </Link>

        <article className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl max-w-4xl mx-auto">
          <div className="mb-6">
            <span className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
              Desarrollo Frontend
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            React vs JavaScript Vanilla: ¿Cuándo usar cada uno?
          </h1>

          <div className="flex items-center gap-6 text-white/70 mb-8">
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              <span>10 de enero, 2024</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} />
              <span>8 min de lectura</span>
            </div>
          </div>

          <div className="prose prose-lg text-white/90 leading-relaxed space-y-6">
            <p>
              Una de las preguntas más frecuentes que recibo es: "¿Cuándo debería usar React 
              y cuándo JavaScript vanilla?" La respuesta no es simple, pero aquí te ayudo 
              a tomar la mejor decisión.
            </p>
            
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">JavaScript Vanilla: La Base Sólida</h2>
            <p>
              JavaScript vanilla es perfecto para:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Proyectos pequeños con poca interactividad</li>
              <li>Páginas web estáticas con funcionalidades simples</li>
              <li>Cuando el rendimiento es crítico</li>
              <li>Aprender los fundamentos del lenguaje</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">React: Potencia para Aplicaciones Complejas</h2>
            <p>
              React brilla cuando necesitas:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Manejar estados complejos</li>
              <li>Crear interfaces de usuario dinámicas</li>
              <li>Reutilizar componentes</li>
              <li>Desarrollar aplicaciones de una sola página (SPA)</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Mi Recomendación</h2>
            <p>
              Siempre recomiendo empezar con JavaScript vanilla para entender los fundamentos. 
              Una vez que domines los conceptos básicos, React se convertirá en una herramienta 
              natural y poderosa en tu arsenal de desarrollo.
            </p>
          </div>
        </article>
      </div>
    </div>
  );
};

export default BlogPost2;
