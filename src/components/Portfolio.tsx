
import React from 'react';
import { ExternalLink, Github, Dice1, Music, StickyNote, CheckSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  const projects = [
    {
      title: "Dice Challenge",
      description: "Juego interactivo de dados con interfaz moderna y animaciones fluidas. Desarrollado con JavaScript vanilla y CSS3.",
      icon: <Dice1 className="text-amber-400" size={24} />,
      tech: ["React", "TypeScript", "Tailwind CSS"],
      status: "Completado",
      gradient: "from-amber-600 to-orange-600",
      demoUrl: "/dice-challenge",
      isActive: true
    },
    {
      title: "Drum Kit",
      description: "Kit de batería virtual con sonidos auténticos y respuesta táctil. Interfaz intuitiva para crear ritmos.",
      icon: <Music className="text-rose-400" size={24} />,
      tech: ["React", "TypeScript", "Web Audio API", "Tailwind CSS"],
      status: "Completado",
      gradient: "from-rose-600 to-red-600",
      demoUrl: "/drum-kit",
      isActive: true
    },
    {
      title: "Keeper App",
      description: "Aplicación de gestión de notas con funcionalidades completas de CRUD. Inspirada en Google Keep.",
      icon: <StickyNote className="text-yellow-500" size={24} />,
      tech: ["React", "TypeScript", "Local Storage", "Tailwind CSS"],
      status: "Completado",
      gradient: "from-yellow-600 to-amber-600",
      demoUrl: "/keeper-app",
      isActive: true
    },
    {
      title: "To-Do List",
      description: "Lista de tareas avanzada con categorías, fechas límite y funcionalidades completas.",
      icon: <CheckSquare className="text-emerald-400" size={24} />,
      tech: ["React", "TypeScript", "Local Storage", "Tailwind CSS"],
      status: "Completado",
      gradient: "from-emerald-600 to-teal-600",
      demoUrl: "/todo-list",
      isActive: true
    }
  ];

  return (
    <section id="portafolio" className="py-20 bg-gradient-to-b from-amber-50 to-orange-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif">
            <span className="bg-gradient-to-r from-amber-800 to-orange-800 bg-clip-text text-transparent">
              Mi Portafolio
            </span>
          </h2>
          <p className="text-xl text-amber-900 max-w-2xl mx-auto font-serif">
            Una colección de proyectos que demuestran mis habilidades en desarrollo web full stack
          </p>
          
          {/* Decorative vintage border */}
          <div className="flex justify-center mt-8">
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-amber-600 to-transparent"></div>
            <div className="mx-4 w-2 h-2 bg-amber-600 rounded-full"></div>
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-amber-600 to-transparent"></div>
          </div>
        </div>

        {/* Distribución en 2x2 para pantallas grandes, responsive para móviles */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group border-2 border-amber-200 relative"
              style={{
                boxShadow: '0 8px 32px rgba(217, 119, 6, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.6)'
              }}
            >
              {/* Vintage corner decorations */}
              <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-amber-400"></div>
              <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-amber-400"></div>
              <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-amber-400"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-amber-400"></div>
              
              <div className={`h-3 bg-gradient-to-r ${project.gradient} relative`}>
                <div className="absolute inset-0 bg-black bg-opacity-10"></div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-gradient-to-br from-amber-100 to-orange-100 p-3 rounded-full mr-4 group-hover:scale-110 transition-transform duration-300 border border-amber-300 shadow-inner">
                    {project.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-amber-900 font-serif">{project.title}</h3>
                    <span className={`text-sm font-semibold font-serif ${
                      project.isActive ? 'text-emerald-700' : 'text-orange-700'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>

                <p className="text-amber-800 mb-4 line-clamp-3 font-serif leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-amber-200/60 text-amber-800 text-sm rounded-full border border-amber-300 font-serif font-medium shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  {project.isActive ? (
                    <Link 
                      to={project.demoUrl}
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white rounded-lg transition-all duration-300 font-serif font-semibold shadow-md hover:shadow-lg transform hover:scale-105"
                    >
                      <ExternalLink size={16} />
                      Demo
                    </Link>
                  ) : (
                    <button className="flex items-center gap-2 px-4 py-2 bg-amber-200 text-amber-600 rounded-lg transition-colors duration-300 cursor-not-allowed border border-amber-300 font-serif">
                      <ExternalLink size={16} />
                      Demo
                    </button>
                  )}
                  <button className="flex items-center gap-2 px-4 py-2 bg-amber-200 text-amber-600 rounded-lg transition-colors duration-300 cursor-not-allowed border border-amber-300 font-serif">
                    <Github size={16} />
                    Código
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-amber-800 mb-4 font-serif text-lg">
            ✨ Todos los proyectos están completados y funcionales ✨
          </p>
          <p className="text-sm text-amber-700 font-serif italic">
            Cada proyecto demuestra diferentes aspectos del desarrollo web moderno
          </p>
          
          {/* Decorative vintage border */}
          <div className="flex justify-center mt-6">
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-amber-600 to-transparent"></div>
            <div className="mx-3 w-1.5 h-1.5 bg-amber-600 rounded-full"></div>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-amber-600 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
