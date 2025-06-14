
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
      gradient: "from-cyan-400 to-blue-500"
    },
    {
      title: "React vs JavaScript Vanilla: ¿Cuándo usar cada uno?",
      excerpt: "Una comparación práctica entre React y JavaScript vanilla, con ejemplos reales de cuándo elegir cada tecnología.",
      date: "2024-01-10",
      readTime: "8 min",
      category: "Desarrollo Frontend",
      gradient: "from-green-400 to-emerald-500"
    },
    {
      title: "Optimización SEO para Desarrolladores",
      excerpt: "Técnicas de SEO esenciales que todo desarrollador web debe conocer para crear sitios que posicionen bien.",
      date: "2024-01-05",
      readTime: "6 min",
      category: "SEO",
      gradient: "from-pink-400 to-purple-500"
    }
  ];

  return (
    <section id="blog" className="py-20 bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-600 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-yellow-300/20 to-pink-300/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-gradient-to-r from-green-300/20 to-cyan-300/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 mb-8 border border-white/20 shadow-2xl max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-cyan-200 to-purple-200 bg-clip-text text-transparent">
                Blog
              </span>
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Comparto mis experiencias, aprendizajes y consejos sobre desarrollo web
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article 
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-3xl shadow-2xl hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] transition-all duration-500 overflow-hidden group cursor-pointer border border-white/20 hover:scale-105"
            >
              <div className={`h-32 bg-gradient-to-r ${post.gradient} relative`}>
                <div className="absolute inset-0 bg-white/20"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-4 py-2 rounded-full text-sm font-semibold border border-white/50 shadow-lg">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors duration-300">
                  {post.title}
                </h3>

                <p className="text-white/80 mb-4 line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between text-sm text-white/70 mb-4">
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

                <button className="flex items-center gap-2 text-cyan-300 font-semibold hover:gap-3 transition-all duration-300 hover:text-white">
                  Leer más
                  <ArrowRight size={16} />
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border border-white/20 backdrop-blur-sm">
            Ver todos los artículos
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
