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

  const createDrumSound = (soundName: string) => {
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    
    switch (soundName) {
      case 'kick':
        // Bombo - sonido grave y contundente
        const kickOsc = audioContext.createOscillator();
        const kickGain = audioContext.createGain();
        const kickFilter = audioContext.createBiquadFilter();
        
        kickOsc.frequency.setValueAtTime(60, audioContext.currentTime);
        kickOsc.frequency.exponentialRampToValueAtTime(20, audioContext.currentTime + 0.1);
        kickOsc.type = 'sine';
        
        kickFilter.type = 'lowpass';
        kickFilter.frequency.setValueAtTime(200, audioContext.currentTime);
        
        kickGain.gain.setValueAtTime(0.8, audioContext.currentTime);
        kickGain.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
        
        kickOsc.connect(kickFilter);
        kickFilter.connect(kickGain);
        kickGain.connect(audioContext.destination);
        
        kickOsc.start(audioContext.currentTime);
        kickOsc.stop(audioContext.currentTime + 0.5);
        break;

      case 'snare':
        // Redoblante - combinación de tono y ruido
        const snareOsc = audioContext.createOscillator();
        const snareNoise = audioContext.createBufferSource();
        const snareGain = audioContext.createGain();
        const noiseGain = audioContext.createGain();
        
        // Crear ruido blanco para el snare
        const noiseBuffer = audioContext.createBuffer(1, audioContext.sampleRate * 0.2, audioContext.sampleRate);
        const noiseData = noiseBuffer.getChannelData(0);
        for (let i = 0; i < noiseData.length; i++) {
          noiseData[i] = (Math.random() - 0.5) * 2;
        }
        
        snareNoise.buffer = noiseBuffer;
        snareOsc.frequency.setValueAtTime(200, audioContext.currentTime);
        snareOsc.type = 'triangle';
        
        snareGain.gain.setValueAtTime(0.3, audioContext.currentTime);
        snareGain.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.2);
        
        noiseGain.gain.setValueAtTime(0.4, audioContext.currentTime);
        noiseGain.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
        
        snareOsc.connect(snareGain);
        snareNoise.connect(noiseGain);
        snareGain.connect(audioContext.destination);
        noiseGain.connect(audioContext.destination);
        
        snareOsc.start(audioContext.currentTime);
        snareNoise.start(audioContext.currentTime);
        snareOsc.stop(audioContext.currentTime + 0.2);
        break;

      case 'hihat':
        // Hi-hat cerrado - sonido metálico y corto
        const hihatNoise = audioContext.createBufferSource();
        const hihatGain = audioContext.createGain();
        const hihatFilter = audioContext.createBiquadFilter();
        
        const hihatBuffer = audioContext.createBuffer(1, audioContext.sampleRate * 0.1, audioContext.sampleRate);
        const hihatData = hihatBuffer.getChannelData(0);
        for (let i = 0; i < hihatData.length; i++) {
          hihatData[i] = (Math.random() - 0.5) * 2;
        }
        
        hihatNoise.buffer = hihatBuffer;
        hihatFilter.type = 'highpass';
        hihatFilter.frequency.setValueAtTime(8000, audioContext.currentTime);
        
        hihatGain.gain.setValueAtTime(0.4, audioContext.currentTime);
        hihatGain.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
        
        hihatNoise.connect(hihatFilter);
        hihatFilter.connect(hihatGain);
        hihatGain.connect(audioContext.destination);
        
        hihatNoise.start(audioContext.currentTime);
        break;

      case 'openhat':
        // Hi-hat abierto - más largo y resonante
        const openNoise = audioContext.createBufferSource();
        const openGain = audioContext.createGain();
        const openFilter = audioContext.createBiquadFilter();
        
        const openBuffer = audioContext.createBuffer(1, audioContext.sampleRate * 0.3, audioContext.sampleRate);
        const openData = openBuffer.getChannelData(0);
        for (let i = 0; i < openData.length; i++) {
          openData[i] = (Math.random() - 0.5) * 2;
        }
        
        openNoise.buffer = openBuffer;
        openFilter.type = 'bandpass';
        openFilter.frequency.setValueAtTime(6000, audioContext.currentTime);
        
        openGain.gain.setValueAtTime(0.3, audioContext.currentTime);
        openGain.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
        
        openNoise.connect(openFilter);
        openFilter.connect(openGain);
        openGain.connect(audioContext.destination);
        
        openNoise.start(audioContext.currentTime);
        break;

      case 'ride':
        // Ride cymbal - sonido metálico sostenido
        const rideOsc1 = audioContext.createOscillator();
        const rideOsc2 = audioContext.createOscillator();
        const rideGain = audioContext.createGain();
        
        rideOsc1.frequency.setValueAtTime(2500, audioContext.currentTime);
        rideOsc2.frequency.setValueAtTime(3200, audioContext.currentTime);
        rideOsc1.type = 'sawtooth';
        rideOsc2.type = 'triangle';
        
        rideGain.gain.setValueAtTime(0.2, audioContext.currentTime);
        rideGain.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.8);
        
        rideOsc1.connect(rideGain);
        rideOsc2.connect(rideGain);
        rideGain.connect(audioContext.destination);
        
        rideOsc1.start(audioContext.currentTime);
        rideOsc2.start(audioContext.currentTime);
        rideOsc1.stop(audioContext.currentTime + 0.8);
        rideOsc2.stop(audioContext.currentTime + 0.8);
        break;

      case 'crash':
        // Crash cymbal mejorado - más armonioso y menos ruidoso
        const crashOsc1 = audioContext.createOscillator();
        const crashOsc2 = audioContext.createOscillator();
        const crashOsc3 = audioContext.createOscillator();
        const crashGain = audioContext.createGain();
        const crashFilter = audioContext.createBiquadFilter();
        
        // Múltiples osciladores para crear un sonido más rico pero controlado
        crashOsc1.frequency.setValueAtTime(3000, audioContext.currentTime);
        crashOsc2.frequency.setValueAtTime(4500, audioContext.currentTime);
        crashOsc3.frequency.setValueAtTime(6000, audioContext.currentTime);
        
        crashOsc1.type = 'triangle';
        crashOsc2.type = 'sawtooth';
        crashOsc3.type = 'sine';
        
        // Filtro para suavizar las frecuencias altas
        crashFilter.type = 'lowpass';
        crashFilter.frequency.setValueAtTime(8000, audioContext.currentTime);
        crashFilter.Q.setValueAtTime(1, audioContext.currentTime);
        
        // Volumen más controlado
        crashGain.gain.setValueAtTime(0.25, audioContext.currentTime);
        crashGain.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 1.2);
        
        crashOsc1.connect(crashFilter);
        crashOsc2.connect(crashFilter);
        crashOsc3.connect(crashFilter);
        crashFilter.connect(crashGain);
        crashGain.connect(audioContext.destination);
        
        crashOsc1.start(audioContext.currentTime);
        crashOsc2.start(audioContext.currentTime);
        crashOsc3.start(audioContext.currentTime);
        crashOsc1.stop(audioContext.currentTime + 1.2);
        crashOsc2.stop(audioContext.currentTime + 1.2);
        crashOsc3.stop(audioContext.currentTime + 1.2);
        break;

      case 'tom1':
      case 'tom2':
      case 'tom3':
        // Toms - sonidos resonantes con diferentes tonos
        const frequencies = { tom1: 120, tom2: 100, tom3: 80 };
        const tomOsc = audioContext.createOscillator();
        const tomGain = audioContext.createGain();
        
        tomOsc.frequency.setValueAtTime(frequencies[soundName as keyof typeof frequencies], audioContext.currentTime);
        tomOsc.frequency.exponentialRampToValueAtTime(frequencies[soundName as keyof typeof frequencies] * 0.7, audioContext.currentTime + 0.3);
        tomOsc.type = 'sine';
        
        tomGain.gain.setValueAtTime(0.5, audioContext.currentTime);
        tomGain.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.4);
        
        tomOsc.connect(tomGain);
        tomGain.connect(audioContext.destination);
        
        tomOsc.start(audioContext.currentTime);
        tomOsc.stop(audioContext.currentTime + 0.4);
        break;
    }
  };

  const playSound = useCallback((soundName: string) => {
    if (isMuted) return;
    
    setLastPlayed(soundName);
    createDrumSound(soundName);
    
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
