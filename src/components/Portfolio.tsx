
import React from 'react';
import { ExternalLink, Github, Dice1, Music, StickyNote, CheckSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  const projects = [
    {
      title: "Dice Challenge",
      description: "Juego interactivo de dados con interfaz moderna y animaciones fluidas. Desarrollado con JavaScript vanilla y CSS3.",
      icon: <Dice1 className="text-blue-400" size={24} />,
      tech: ["React", "TypeScript", "Tailwind CSS"],
      status: "Completado",
      gradient: "from-blue-500 to-cyan-500",
      demoUrl: "/dice-challenge",
      isActive: true
    },
    {
      title: "Drum Kit",
      description: "Kit de batería virtual con sonidos auténticos y respuesta táctil. Interfaz intuitiva para crear ritmos.",
      icon: <Music className="text-purple-400" size={24} />,
      tech: ["React", "TypeScript", "Web Audio API", "Tailwind CSS"],
      status: "Completado",
      gradient: "from-purple-500 to-pink-500",
      demoUrl: "/drum-kit",
      isActive: true
    },
    {
      title: "Keeper App",
      description: "Aplicación de gestión de notas con funcionalidades completas de CRUD. Inspirada en Google Keep.",
      icon: <StickyNote className="text-yellow-400" size={24} />,
      tech: ["React", "TypeScript", "Local Storage", "Tailwind CSS"],
      status: "Completado",
      gradient: "from-yellow-500 to-orange-500",
      demoUrl: "/keeper-app",
      isActive: true
    },
    {
      title: "To-Do List",
      description: "Lista de tareas avanzada con categorías, fechas límite y funcionalidades completas.",
      icon: <CheckSquare className="text-green-400" size={24} />,
      tech: ["React", "TypeScript", "Local Storage", "Tailwind CSS"],
      status: "Completado",
      gradient: "from-green-500 to-teal-500",
      demoUrl: "/todo-list",
      isActive: true
    }
  ];

  return (
    <section id="portafolio" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Mi Portafolio
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Una colección de proyectos que demuestran mis habilidades en desarrollo web full stack
          </p>
        </div>

        {/* Distribución en 2x2 para pantallas grandes, responsive para móviles */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-700"
            >
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />
              
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-gray-800 p-3 rounded-full mr-4 group-hover:scale-110 transition-transform duration-300">
                    {project.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                    <span className={`text-sm font-semibold ${
                      project.isActive ? 'text-green-400' : 'text-orange-400'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>

                <p className="text-gray-300 mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-blue-500/20 text-blue-300 text-sm rounded-full border border-blue-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  {project.isActive ? (
                    <Link 
                      to={project.demoUrl}
                      className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-300"
                    >
                      <ExternalLink size={16} />
                      Demo
                    </Link>
                  ) : (
                    <button className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-gray-400 rounded-lg transition-colors duration-300 cursor-not-allowed border border-gray-700">
                      <ExternalLink size={16} />
                      Demo
                    </button>
                  )}
                  <button className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-gray-400 rounded-lg transition-colors duration-300 cursor-not-allowed border border-gray-700">
                    <Github size={16} />
                    Código
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-300 mb-4">
            ✅ Todos los proyectos están completados y funcionales
          </p>
          <p className="text-sm text-gray-400">
            Cada proyecto demuestra diferentes aspectos del desarrollo web moderno
          </p>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
