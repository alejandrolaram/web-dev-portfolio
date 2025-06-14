
import React, { useState, useCallback } from 'react';
import { Home, ArrowLeft, Volume2, VolumeX } from 'lucide-react';
import { Link } from 'react-router-dom';

const DrumKit = () => {
  const [isMuted, setIsMuted] = useState(false);
  const [lastPlayed, setLastPlayed] = useState<string | null>(null);

  const drumSounds = [
    { key: 'Q', name: 'Kick', sound: 'kick', color: 'from-red-500 to-red-700' },
    { key: 'W', name: 'Snare', sound: 'snare', color: 'from-blue-500 to-blue-700' },
    { key: 'E', name: 'Hi-Hat', sound: 'hihat', color: 'from-yellow-500 to-yellow-700' },
    { key: 'A', name: 'Open Hat', sound: 'openhat', color: 'from-green-500 to-green-700' },
    { key: 'S', name: 'Ride', sound: 'ride', color: 'from-purple-500 to-purple-700' },
    { key: 'D', name: 'Crash', sound: 'crash', color: 'from-pink-500 to-pink-700' },
    { key: 'Z', name: 'Tom 1', sound: 'tom1', color: 'from-indigo-500 to-indigo-700' },
    { key: 'X', name: 'Tom 2', sound: 'tom2', color: 'from-teal-500 to-teal-700' },
    { key: 'C', name: 'Tom 3', sound: 'tom3', color: 'from-orange-500 to-orange-700' }
  ];

  const playSound = useCallback((soundName: string) => {
    if (isMuted) return;
    
    // Simulamos el sonido con una vibración visual y audio web
    setLastPlayed(soundName);
    
    // Audio Web API simulation
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    // Diferentes frecuencias para cada tipo de sonido
    const frequencies: { [key: string]: number } = {
      kick: 60,
      snare: 200,
      hihat: 8000,
      openhat: 6000,
      ride: 3000,
      crash: 4000,
      tom1: 150,
      tom2: 120,
      tom3: 100
    };
    
    oscillator.frequency.setValueAtTime(frequencies[soundName] || 440, audioContext.currentTime);
    oscillator.type = soundName === 'hihat' || soundName === 'openhat' ? 'sawtooth' : 'sine';
    
    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.5);
    
    setTimeout(() => setLastPlayed(null), 200);
  }, [isMuted]);

  const handleKeyPress = useCallback((event: KeyboardEvent) => {
    const drum = drumSounds.find(d => d.key === event.key.toUpperCase());
    if (drum) {
      playSound(drum.sound);
    }
  }, [drumSounds, playSound]);

  React.useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [handleKeyPress]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black">
      {/* Navigation Header */}
      <nav className="bg-gray-900/95 backdrop-blur-md shadow-lg border-b border-gray-700 p-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link 
            to="/" 
            className="flex items-center gap-2 text-white hover:text-purple-400 transition-colors duration-300"
          >
            <ArrowLeft size={20} />
            <span className="font-semibold">Volver al Portafolio</span>
          </Link>
          
          <Link 
            to="/" 
            className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
          >
            Mi Portafolio
          </Link>
          
          <Link 
            to="/" 
            className="flex items-center gap-2 text-white hover:text-purple-400 transition-colors duration-300"
          >
            <Home size={20} />
            <span className="font-semibold">Inicio</span>
          </Link>
        </div>
      </nav>

      <div className="p-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              🥁 Drum Kit Virtual 🥁
            </h1>
            <p className="text-xl text-gray-300 mb-6">
              ¡Toca la batería con tu teclado! Presiona las teclas Q, W, E, A, S, D, Z, X, C
            </p>
            
            <button
              onClick={() => setIsMuted(!isMuted)}
              className={`flex items-center gap-2 mx-auto px-6 py-3 rounded-lg font-bold transition-colors duration-300 ${
                isMuted 
                  ? 'bg-red-600 hover:bg-red-700 text-white' 
                  : 'bg-green-600 hover:bg-green-700 text-white'
              }`}
            >
              {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
              {isMuted ? 'Activar Sonido' : 'Silenciar'}
            </button>
          </div>

          {/* Drum Kit */}
          <div className="bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-gray-700">
            <div className="grid grid-cols-3 gap-6 max-w-4xl mx-auto">
              {drumSounds.map((drum) => (
                <button
                  key={drum.key}
                  onClick={() => playSound(drum.sound)}
                  className={`relative group h-32 rounded-xl bg-gradient-to-br ${drum.color} 
                    transform transition-all duration-200 hover:scale-105 active:scale-95
                    ${lastPlayed === drum.sound ? 'scale-110 shadow-2xl ring-4 ring-white/50' : ''}
                    shadow-lg hover:shadow-xl border-2 border-white/20`}
                >
                  <div className="absolute inset-0 bg-white/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  
                  <div className="relative z-10 h-full flex flex-col items-center justify-center text-white">
                    <div className="text-3xl font-bold mb-2">{drum.key}</div>
                    <div className="text-lg font-semibold">{drum.name}</div>
                  </div>
                  
                  {/* Efecto de onda al tocar */}
                  {lastPlayed === drum.sound && (
                    <div className="absolute inset-0 rounded-xl bg-white/30 animate-ping" />
                  )}
                </button>
              ))}
            </div>

            {/* Instrucciones */}
            <div className="mt-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">🎵 Instrucciones</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-300">
                <div className="bg-gray-700/50 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">🎹 Controles de Teclado</h4>
                  <p>Usa las teclas Q, W, E, A, S, D, Z, X, C para tocar diferentes elementos de la batería</p>
                </div>
                <div className="bg-gray-700/50 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">🖱️ Controles de Mouse</h4>
                  <p>Haz clic en cualquier pad de la batería para reproducir el sonido correspondiente</p>
                </div>
              </div>
            </div>
          </div>

          {/* Last Played Info */}
          {lastPlayed && (
            <div className="mt-6 text-center">
              <div className="inline-block bg-purple-600/20 border border-purple-400 px-6 py-3 rounded-lg">
                <span className="text-purple-300 font-bold">
                  🎵 Reproduciendo: {drumSounds.find(d => d.sound === lastPlayed)?.name}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DrumKit;
