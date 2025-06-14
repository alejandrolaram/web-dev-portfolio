
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageCircle } from 'lucide-react';

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
    // Aquí implementarías la lógica de envío del formulario
    alert('¡Mensaje enviado! Te contactaré pronto.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contacto" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Contacto
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            ¿Tienes un proyecto en mente? ¡Hablemos y hagámoslo realidad juntos!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Información de contacto */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Información de Contacto</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700">
                  <div className="bg-blue-500/20 p-3 rounded-full">
                    <Mail className="text-blue-400" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Email</p>
                    <p className="text-gray-300">tu.email@ejemplo.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700">
                  <div className="bg-green-500/20 p-3 rounded-full">
                    <Phone className="text-green-400" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Teléfono</p>
                    <p className="text-gray-300">+1 234 567 8900</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700">
                  <div className="bg-purple-500/20 p-3 rounded-full">
                    <MapPin className="text-purple-400" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Ubicación</p>
                    <p className="text-gray-300">Tu Ciudad, País</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-bold text-white mb-4">Redes Sociales</h4>
              <div className="flex gap-4">
                <a 
                  href="#" 
                  className="bg-gray-800 p-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110 border border-gray-700"
                >
                  <Github className="text-gray-300" size={24} />
                </a>
                <a 
                  href="#" 
                  className="bg-gray-800 p-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110 border border-gray-700"
                >
                  <Linkedin className="text-blue-400" size={24} />
                </a>
                <a 
                  href="#" 
                  className="bg-gray-800 p-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110 border border-gray-700"
                >
                  <MessageCircle className="text-green-400" size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Formulario de contacto */}
          <div className="bg-gray-800/70 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-6">Envíame un Mensaje</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-2">
                  Nombre Completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400"
                  placeholder="Tu nombre completo"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400"
                  placeholder="tu.email@ejemplo.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-gray-300 mb-2">
                  Asunto
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400"
                  placeholder="¿De qué quieres hablar?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-300 mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none text-white placeholder-gray-400"
                  placeholder="Cuéntame sobre tu proyecto o idea..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
