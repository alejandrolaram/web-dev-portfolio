
import React from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      title: "Mi Viaje en el Desarrollo Web Full Stack",
      excerpt: "Descubre cómo comencé mi aventura en la programación y las tecnologías que han marcado mi crecimiento profesional.",
      date: "2024-01-15",
      readTime: "5 min",
      category: "Experiencia Personal",
      gradient: "from-amber-600 to-orange-600"
    },
    {
      title: "React vs JavaScript Vanilla: ¿Cuándo usar cada uno?",
      excerpt: "Una comparación práctica entre React y JavaScript vanilla, con ejemplos reales de cuándo elegir cada tecnología.",
      date: "2024-01-10",
      readTime: "8 min",
      category: "Desarrollo Frontend",
      gradient: "from-emerald-600 to-teal-600"
    },
    {
      title: "Optimización SEO para Desarrolladores",
      excerpt: "Técnicas esenciales de SEO que todo desarrollador web debe conocer para crear sitios web que rankeen bien.",
      date: "2024-01-05",
      readTime: "6 min",
      category: "SEO",
      gradient: "from-rose-600 to-red-600"
    }
  ];

  return (
    <section id="blog" className="py-20 bg-gradient-to-b from-orange-100 to-amber-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif">
            <span className="bg-gradient-to-r from-amber-800 to-orange-800 bg-clip-text text-transparent">
              Blog
            </span>
          </h2>
          <p className="text-xl text-amber-800 max-w-2xl mx-auto font-serif">
            Comparto mis experiencias, aprendizajes y consejos sobre desarrollo web
          </p>
          
          {/* Decorative vintage border */}
          <div className="flex justify-center mt-8">
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-amber-600 to-transparent"></div>
            <div className="mx-4 w-2 h-2 bg-amber-600 rounded-full"></div>
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-amber-600 to-transparent"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article 
              key={index}
              className="bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-200 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer relative"
              style={{
                boxShadow: '0 8px 32px rgba(217, 119, 6, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.6)'
              }}
            >
              {/* Vintage corner decorations */}
              <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-amber-400"></div>
              <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-amber-400"></div>
              <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-amber-400"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-amber-400"></div>

              <div className={`h-32 bg-gradient-to-r ${post.gradient} relative`}>
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-amber-50/90 text-amber-800 px-3 py-1 rounded-full text-sm font-semibold font-serif border border-amber-300">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-amber-900 mb-3 group-hover:text-orange-700 transition-colors duration-300 font-serif">
                  {post.title}
                </h3>

                <p className="text-amber-800 mb-4 line-clamp-3 font-serif leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between text-sm text-amber-700 mb-4 font-serif">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>{new Date(post.date).toLocaleDateString('es-ES', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={16} />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <button className="flex items-center gap-2 text-amber-700 font-semibold hover:gap-3 transition-all duration-300 font-serif hover:text-orange-600">
                  Leer más
                  <ArrowRight size={16} />
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-8 py-3 rounded-lg font-serif font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 border border-amber-500">
            Ver todos los artículos
          </button>
          
          {/* Decorative vintage border */}
          <div className="flex justify-center mt-8">
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-amber-600 to-transparent"></div>
            <div className="mx-3 w-1.5 h-1.5 bg-amber-600 rounded-full"></div>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-amber-600 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
