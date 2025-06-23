import React from 'react';
const Footer = () => {
  return <footer className="bg-gradient-to-br from-purple-900 via-blue-900 to-cyan-900 text-white py-12 border-t border-white/20 relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-48 h-48 bg-gradient-to-r from-cyan-300/10 to-blue-300/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-56 h-56 bg-gradient-to-r from-purple-300/10 to-pink-300/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex justify-center">
          <p className="text-white/70 text-sm">© 2025 Alejandro Lara. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>;
};
export default Footer;