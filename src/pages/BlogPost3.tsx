
import React from 'react';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const BlogPost3 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-400 via-purple-500 to-indigo-600">
      <div className="container mx-auto px-6 py-12">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-white hover:text-pink-200 transition-colors duration-300 mb-8"
        >
          <ArrowLeft size={20} />
          Volver al inicio
        </Link>

        <article className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl max-w-4xl mx-auto">
          <div className="mb-6">
            <span className="bg-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
              SEO
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Optimización SEO para Desarrolladores
          </h1>

          <div className="flex items-center gap-6 text-white/70 mb-8">
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              <span>5 de enero, 2024</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} />
              <span>6 min de lectura</span>
            </div>
          </div>

          <div className="prose prose-lg text-white/90 leading-relaxed space-y-6">
            <p>
              El SEO no es solo responsabilidad del equipo de marketing. Como desarrolladores, 
              tenemos un papel crucial en asegurar que nuestros sitios web posicionen bien 
              en los motores de búsqueda.
            </p>
            
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Fundamentos Técnicos del SEO</h2>
            <p>
              Los aspectos técnicos más importantes incluyen:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Estructura HTML semántica</li>
              <li>Optimización de velocidad de carga</li>
              <li>Diseño responsive</li>
              <li>URLs limpias y descriptivas</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Meta Tags y Schema Markup</h2>
            <p>
              Implementar correctamente los meta tags y el schema markup puede marcar 
              la diferencia entre aparecer en la primera página de Google o perderse 
              en las profundidades del internet.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Rendimiento Web</h2>
            <p>
              Google considera la velocidad de carga como factor de ranking. Optimizar 
              imágenes, minimizar JavaScript y CSS, y usar técnicas como lazy loading 
              son esenciales.
            </p>

            <p>
              Recuerda: un sitio web técnicamente perfecto pero lento es como un 
              Ferrari sin gasolina. La optimización técnica y la experiencia de 
              usuario van de la mano.
            </p>
          </div>
        </article>
      </div>
    </div>
  );
};

export default BlogPost3;
