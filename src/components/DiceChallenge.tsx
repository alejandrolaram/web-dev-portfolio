import React, { useState } from 'react';
import { RefreshCw, Trophy, Users, Home, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const DiceChallenge = () => {
  const [player1Dice, setPlayer1Dice] = useState(1);
  const [player2Dice, setPlayer2Dice] = useState(1);
  const [isRolling, setIsRolling] = useState(false);
  const [winner, setWinner] = useState<string | null>(null);
  const [gameHistory, setGameHistory] = useState<{ player1: number; player2: number; winner: string }[]>([]);

  const getDiceEmoji = (value: number) => {
    const diceEmojis = ['⚀', '⚁', '⚂', '⚃', '⚄', '⚅'];
    return diceEmojis[value - 1];
  };

  const rollDice = () => {
    if (isRolling) return;

    setIsRolling(true);
    setWinner(null);

    // Animación de dados girando
    const rollInterval = setInterval(() => {
      setPlayer1Dice(Math.floor(Math.random() * 6) + 1);
      setPlayer2Dice(Math.floor(Math.random() * 6) + 1);
    }, 100);

    // Detener animación y determinar ganador después de 1 segundo
    setTimeout(() => {
      clearInterval(rollInterval);
      
      const finalPlayer1 = Math.floor(Math.random() * 6) + 1;
      const finalPlayer2 = Math.floor(Math.random() * 6) + 1;
      
      setPlayer1Dice(finalPlayer1);
      setPlayer2Dice(finalPlayer2);
      
      let gameWinner = '';
      if (finalPlayer1 > finalPlayer2) {
        gameWinner = 'Jugador 1';
      } else if (finalPlayer2 > finalPlayer1) {
        gameWinner = 'Jugador 2';
      } else {
        gameWinner = 'Empate';
      }
      
      setWinner(gameWinner);
      setGameHistory(prev => [...prev, { 
        player1: finalPlayer1, 
        player2: finalPlayer2, 
        winner: gameWinner 
      }].slice(-5)); // Mantener solo los últimos 5 juegos
      
      setIsRolling(false);
    }, 1000);
  };

  const resetGame = () => {
    setPlayer1Dice(1);
    setPlayer2Dice(1);
    setWinner(null);
    setGameHistory([]);
  };

  const getWinnerStats = () => {
    const player1Wins = gameHistory.filter(game => game.winner === 'Jugador 1').length;
    const player2Wins = gameHistory.filter(game => game.winner === 'Jugador 2').length;
    const ties = gameHistory.filter(game => game.winner === 'Empate').length;
    return { player1Wins, player2Wins, ties };
  };

  const stats = getWinnerStats();

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-r from-pink-300/30 to-yellow-300/30 rounded-full blur-3xl pulse-slow"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-green-300/30 to-cyan-300/30 rounded-full blur-3xl pulse-slow"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-300/20 to-purple-300/20 rounded-full blur-3xl pulse-slow"></div>
      </div>

      {/* Navigation Header */}
      <nav className="glass-effect shadow-2xl border-b border-white/30 p-4 relative z-50">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link 
            to="/" 
            className="flex items-center gap-2 text-white hover:text-cyan-200 transition-colors duration-300 font-medium"
          >
            <ArrowLeft size={20} />
            <span className="font-semibold">Volver al Portafolio</span>
          </Link>
          
          <Link 
            to="/" 
            className="text-2xl font-bold gradient-text-cyber text-shadow-glow"
          >
            Mi Portafolio ✨
          </Link>
          
          <Link 
            to="/" 
            className="flex items-center gap-2 text-white hover:text-cyan-200 transition-colors duration-300 font-medium"
          >
            <Home size={20} />
            <span className="font-semibold">Inicio</span>
          </Link>
        </div>
      </nav>

      <div className="p-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="glass-effect rounded-3xl p-8 mb-8 border border-white/30 shadow-2xl backdrop-blur-glass">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 gradient-text-cyber text-shadow-glow">
                🎲 Dice Challenge 🎲
              </h1>
              <p className="text-xl text-white/90">
                ¡Lanza los dados y descubre quién tiene la suerte de su lado! ✨
              </p>
            </div>
          </div>

          {/* Game Area */}
          <div className="glass-effect rounded-3xl p-8 mb-8 shadow-2xl border border-white/30 backdrop-blur-glass hover-glow">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {/* Player 1 */}
              <div className="text-center">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center justify-center gap-2 gradient-text-cyber">
                  <Users size={24} />
                  Jugador 1
                </h2>
                <div className={`text-8xl mb-4 transition-transform duration-300 ${
                  isRolling ? 'animate-spin' : 'hover:scale-110'
                }`}>
                  {getDiceEmoji(player1Dice)}
                </div>
                <div className="text-3xl font-bold text-white text-shadow-glow">{player1Dice}</div>
              </div>

              {/* Player 2 */}
              <div className="text-center">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center justify-center gap-2 gradient-text-cyber">
                  <Users size={24} />
                  Jugador 2
                </h2>
                <div className={`text-8xl mb-4 transition-transform duration-300 ${
                  isRolling ? 'animate-spin' : 'hover:scale-110'
                }`}>
                  {getDiceEmoji(player2Dice)}
                </div>
                <div className="text-3xl font-bold text-white text-shadow-glow">{player2Dice}</div>
              </div>
            </div>

            {/* Winner Display */}
            {winner && (
              <div className="text-center mb-6">
                <div className={`text-3xl font-bold p-4 rounded-2xl glass-effect border border-white/30 ${
                  winner === 'Jugador 1' ? 'text-cyan-200' :
                  winner === 'Jugador 2' ? 'text-purple-200' :
                  'text-yellow-200'
                } text-shadow-glow`}>
                  {winner === 'Empate' ? '🤝 ¡Empate!' : `🏆 ¡${winner} Gana!`}
                </div>
              </div>
            )}

            {/* Control Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={rollDice}
                disabled={isRolling}
                className={`px-8 py-4 rounded-xl font-bold text-white text-lg transition-all duration-300 border border-white/30 ${
                  isRolling 
                    ? 'glass-effect cursor-not-allowed opacity-50' 
                    : 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 hover:scale-105 shadow-xl hover:shadow-2xl'
                } text-shadow-glow`}
              >
                {isRolling ? (
                  <span className="flex items-center gap-2">
                    <RefreshCw className="animate-spin" size={20} />
                    Lanzando...
                  </span>
                ) : (
                  '🎲 Lanzar Dados'
                )}
              </button>
              
              <button
                onClick={resetGame}
                className="px-8 py-4 glass-effect hover:bg-white/20 text-white rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 border border-white/30 text-shadow-glow"
              >
                🔄 Reiniciar Juego
              </button>
            </div>
          </div>

          {/* Statistics */}
          {gameHistory.length > 0 && (
            <div className="glass-effect rounded-3xl p-6 shadow-2xl border border-white/30 backdrop-blur-glass hover-glow">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2 gradient-text-cyber">
                <Trophy size={24} />
                Estadísticas del Juego
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="glass-effect p-4 rounded-xl text-center border border-cyan-300/30">
                  <div className="text-2xl font-bold text-cyan-200 text-shadow-glow">{stats.player1Wins}</div>
                  <div className="text-white/80">Victorias J1</div>
                </div>
                <div className="glass-effect p-4 rounded-xl text-center border border-purple-300/30">
                  <div className="text-2xl font-bold text-purple-200 text-shadow-glow">{stats.player2Wins}</div>
                  <div className="text-white/80">Victorias J2</div>
                </div>
                <div className="glass-effect p-4 rounded-xl text-center border border-yellow-300/30">
                  <div className="text-2xl font-bold text-yellow-200 text-shadow-glow">{stats.ties}</div>
                  <div className="text-white/80">Empates</div>
                </div>
              </div>

              {/* Recent Games */}
              <h4 className="text-lg font-bold text-white mb-3">Últimas Partidas:</h4>
              <div className="space-y-2">
                {gameHistory.slice().reverse().map((game, index) => (
                  <div key={index} className="glass-effect p-3 rounded-xl flex justify-between items-center border border-white/20">
                    <div className="flex gap-4">
                      <span className="text-cyan-200">J1: {getDiceEmoji(game.player1)} {game.player1}</span>
                      <span className="text-purple-200">J2: {getDiceEmoji(game.player2)} {game.player2}</span>
                    </div>
                    <span className={`font-bold ${
                      game.winner === 'Jugador 1' ? 'text-cyan-200' :
                      game.winner === 'Jugador 2' ? 'text-purple-200' :
                      'text-yellow-200'
                    } text-shadow-glow`}>
                      {game.winner}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DiceChallenge;
