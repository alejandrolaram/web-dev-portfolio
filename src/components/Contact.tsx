import React, { useState } from 'react';
import { Mail, Send, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Formulario enviado:', formData);
    alert('¡Mensaje enviado! Te contactaré pronto.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section id="contacto" className="py-20 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-r from-pink-300/30 to-cyan-300/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-yellow-300/30 to-green-300/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-300/20 to-purple-300/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="glass-effect rounded-3xl p-8 mb-8 border border-white/30 shadow-2xl max-w-4xl mx-auto backdrop-blur-glass">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 font-inter">
              <span className="text-white text-shadow-glow">Contacto</span>
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto font-medium">
              ¿Tienes un proyecto en mente? ¡Hablemos y hagámoslo realidad juntos! 🚀
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Información de contacto */}
          <div className="space-y-8">
            <div className="glass-effect rounded-2xl p-8 border border-white/30 shadow-2xl backdrop-blur-glass hover-glow">
              <h3 className="text-2xl font-bold text-white mb-6 text-shadow-glow">Información de Contacto</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 glass-effect rounded-xl border border-white/20 hover-glow">
                  <div className="bg-gradient-to-r from-cyan-400 to-blue-500 p-3 rounded-full shadow-lg">
                    <Mail className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-white text-shadow-glow">Email</p>
                    <p className="text-white/80">tu.email@ejemplo.com</p>
                  </div>
                </div>
                
                <div className="flex gap-4 justify-center">
                  <a href="#" className="bg-gradient-to-r from-gray-600 to-gray-800 p-4 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110 border border-white/30 glass-effect">
                    <Github className="text-white" size={24} />
                  </a>
                  <a href="https://www.linkedin.com/in/alejandrolaramoreno/" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-blue-500 to-blue-700 p-4 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110 border border-white/30 glass-effect">
                    <Linkedin className="text-white" size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Formulario de contacto */}
          <div className="glass-effect rounded-3xl p-8 shadow-2xl border border-white/30 backdrop-blur-glass hover-glow">
            <h3 className="text-2xl font-bold text-white mb-6 text-shadow-glow">Envíame un Mensaje</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-white/90 mb-2">
                  Nombre Completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 glass-effect border border-white/30 rounded-xl focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition-all duration-300 text-white placeholder-white/60 backdrop-blur-md"
                  placeholder="Tu nombre completo"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-white/90 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 glass-effect border border-white/30 rounded-xl focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition-all duration-300 text-white placeholder-white/60 backdrop-blur-md"
                  placeholder="tu.email@ejemplo.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-white/90 mb-2">
                  Asunto
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 glass-effect border border-white/30 rounded-xl focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition-all duration-300 text-white placeholder-white/60 backdrop-blur-md"
                  placeholder="¿De qué quieres hablar?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-white/90 mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 glass-effect border border-white/30 rounded-xl focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition-all duration-300 resize-none text-white placeholder-white/60 backdrop-blur-md"
                  placeholder="Cuéntame sobre tu proyecto o idea..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 px-6 rounded-xl font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 border border-white/30 text-shadow-glow"
              >
                <Send size={20} />
                Enviar Mensaje ✨
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
