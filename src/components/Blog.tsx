
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
      gradient: "from-blue-500 to-purple-500"
    },
    {
      title: "React vs JavaScript Vanilla: ¿Cuándo usar cada uno?",
      excerpt: "Una comparación práctica entre React y JavaScript vanilla, con ejemplos reales de cuándo elegir cada tecnología.",
      date: "2024-01-10",
      readTime: "8 min",
      category: "Desarrollo Frontend",
      gradient: "from-green-500 to-teal-500"
    },
    {
      title: "Optimización SEO para Desarrolladores",
      excerpt: "Técnicas esenciales de SEO que todo desarrollador web debe conocer para crear sitios web que rankeen bien.",
      date: "2024-01-05",
      readTime: "6 min",
      category: "SEO",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="blog" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Blog
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Comparto mis experiencias, aprendizajes y consejos sobre desarrollo web
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article 
              key={index}
              className="bg-gray-800 border border-gray-700 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer"
            >
              <div className={`h-32 bg-gradient-to-r ${post.gradient} relative`}>
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-gray-900/80 text-gray-200 px-3 py-1 rounded-full text-sm font-semibold">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                  {post.title}
                </h3>

                <p className="text-gray-300 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
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

                <button className="flex items-center gap-2 text-blue-400 font-semibold hover:gap-3 transition-all duration-300">
                  Leer más
                  <ArrowRight size={16} />
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
            Ver todos los artículos
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
