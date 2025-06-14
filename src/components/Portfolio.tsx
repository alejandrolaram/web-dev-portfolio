
import React from 'react';
import { ExternalLink, Github, Dice1, Music, StickyNote, CheckSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  const projects = [
    {
      title: "Desafío de Dados",
      description: "Juego interactivo de dados con interfaz moderna y animaciones suaves. Construido con JavaScript vanilla y CSS3.",
      icon: <Dice1 className="text-white" size={28} />,
      tech: ["React", "TypeScript", "Tailwind CSS"],
      gradient: "from-cyan-400 to-blue-500",
      demoUrl: "/dice-challenge",
      githubUrl: "https://github.com/alejandrolaram/web-dev-portfolio/tree/main/src/components/DiceChallenge.tsx",
      isActive: true
    },
    {
      title: "Batería Virtual",
      description: "Batería virtual con sonidos auténticos y respuesta táctil. Interfaz intuitiva para crear ritmos.",
      icon: <Music className="text-white" size={28} />,
      tech: ["React", "TypeScript", "Web Audio API", "Tailwind CSS"],
      gradient: "from-pink-400 to-purple-500",
      demoUrl: "/drum-kit",
      githubUrl: "https://github.com/alejandrolaram/web-dev-portfolio/tree/main/src/components/DrumKit.tsx",
      isActive: true
    },
    {
      title: "Keeper App",
      description: "Aplicación de gestión de notas con funcionalidad CRUD completa. Inspirada en Google Keep.",
      icon: <StickyNote className="text-white" size={28} />,
      tech: ["React", "TypeScript", "Local Storage", "Tailwind CSS"],
      gradient: "from-yellow-400 to-orange-500",
      demoUrl: "/keeper-app",
      githubUrl: "https://github.com/alejandrolaram/web-dev-portfolio/tree/main/src/components/KeeperApp.tsx",
      isActive: true
    },
    {
      title: "Lista de Tareas",
      description: "Lista de tareas avanzada con categorías, fechas límite y funcionalidad completa.",
      icon: <CheckSquare className="text-white" size={28} />,
      tech: ["React", "TypeScript", "Local Storage", "Tailwind CSS"],
      gradient: "from-green-400 to-emerald-500",
      demoUrl: "/todo-list",
      githubUrl: "https://github.com/alejandrolaram/web-dev-portfolio/tree/main/src/components/TodoList.tsx",
      isActive: true
    }
  ];

  return (
    <section id="portafolio" className="py-20 bg-gradient-to-b from-purple-600 via-blue-500 to-cyan-400 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-10 w-72 h-72 bg-gradient-to-r from-pink-300/20 to-purple-300/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-r from-cyan-300/20 to-blue-300/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 mb-8 border border-white/20 shadow-2xl max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-cyan-200 to-blue-200 bg-clip-text text-transparent">
                Mi Portafolio
              </span>
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Una colección de proyectos que muestran mis habilidades de desarrollo web full stack
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-3xl shadow-2xl hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] transition-all duration-500 overflow-hidden group border border-white/20 hover:scale-105"
            >
              <div className={`h-4 bg-gradient-to-r ${project.gradient} relative`}>
                <div className="absolute inset-0 bg-white/20"></div>
              </div>
              
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className={`bg-gradient-to-br ${project.gradient} p-4 rounded-2xl mr-4 group-hover:scale-110 transition-transform duration-300 shadow-xl`}>
                    {project.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                  </div>
                </div>

                <p className="text-white/80 mb-6 leading-relaxed text-lg">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3 mb-8">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white text-sm rounded-full border border-white/30 font-medium shadow-lg"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  {project.isActive ? (
                    <Link 
                      to={project.demoUrl}
                      className={`flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${project.gradient} hover:shadow-2xl text-white rounded-xl transition-all duration-300 font-semibold transform hover:scale-105`}
                    >
                      <ExternalLink size={18} />
                      Demo
                    </Link>
                  ) : (
                    <button className="flex items-center gap-2 px-6 py-3 bg-gray-500/50 text-gray-300 rounded-xl transition-colors duration-300 cursor-not-allowed border border-white/20">
                      <ExternalLink size={18} />
                      Demo
                    </button>
                  )}
                  <a 
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm text-white rounded-xl transition-all duration-300 hover:bg-white/30 border border-white/30 font-semibold transform hover:scale-105"
                  >
                    <Github size={18} />
                    Código
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
