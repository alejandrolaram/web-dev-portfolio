
import React, { useState } from 'react';
import { RefreshCw, Trophy, Users } from 'lucide-react';

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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            🎲 Dice Challenge 🎲
          </h1>
          <p className="text-xl text-gray-300">
            ¡Lanza los dados y descubre quién tiene la suerte de su lado!
          </p>
        </div>

        {/* Game Area */}
        <div className="bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 mb-8 shadow-2xl border border-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Player 1 */}
            <div className="text-center">
              <h2 className="text-2xl font-bold text-blue-400 mb-4 flex items-center justify-center gap-2">
                <Users size={24} />
                Jugador 1
              </h2>
              <div className={`text-8xl mb-4 transition-transform duration-300 ${
                isRolling ? 'animate-spin' : 'hover:scale-110'
              }`}>
                {getDiceEmoji(player1Dice)}
              </div>
              <div className="text-3xl font-bold text-white">{player1Dice}</div>
            </div>

            {/* Player 2 */}
            <div className="text-center">
              <h2 className="text-2xl font-bold text-purple-400 mb-4 flex items-center justify-center gap-2">
                <Users size={24} />
                Jugador 2
              </h2>
              <div className={`text-8xl mb-4 transition-transform duration-300 ${
                isRolling ? 'animate-spin' : 'hover:scale-110'
              }`}>
                {getDiceEmoji(player2Dice)}
              </div>
              <div className="text-3xl font-bold text-white">{player2Dice}</div>
            </div>
          </div>

          {/* Winner Display */}
          {winner && (
            <div className="text-center mb-6">
              <div className={`text-3xl font-bold p-4 rounded-lg ${
                winner === 'Jugador 1' ? 'bg-blue-500/20 text-blue-400' :
                winner === 'Jugador 2' ? 'bg-purple-500/20 text-purple-400' :
                'bg-yellow-500/20 text-yellow-400'
              }`}>
                {winner === 'Empate' ? '🤝 ¡Empate!' : `🏆 ¡${winner} Gana!`}
              </div>
            </div>
          )}

          {/* Control Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={rollDice}
              disabled={isRolling}
              className={`px-8 py-4 rounded-lg font-bold text-white text-lg transition-all duration-300 ${
                isRolling 
                  ? 'bg-gray-600 cursor-not-allowed' 
                  : 'bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 hover:scale-105 shadow-lg'
              }`}
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
              className="px-8 py-4 bg-gray-600 hover:bg-gray-700 text-white rounded-lg font-bold text-lg transition-all duration-300 hover:scale-105"
            >
              🔄 Reiniciar Juego
            </button>
          </div>
        </div>

        {/* Statistics */}
        {gameHistory.length > 0 && (
          <div className="bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <Trophy size={24} />
              Estadísticas del Juego
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-blue-500/20 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-blue-400">{stats.player1Wins}</div>
                <div className="text-gray-300">Victorias J1</div>
              </div>
              <div className="bg-purple-500/20 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-purple-400">{stats.player2Wins}</div>
                <div className="text-gray-300">Victorias J2</div>
              </div>
              <div className="bg-yellow-500/20 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-yellow-400">{stats.ties}</div>
                <div className="text-gray-300">Empates</div>
              </div>
            </div>

            {/* Recent Games */}
            <h4 className="text-lg font-bold text-white mb-3">Últimas Partidas:</h4>
            <div className="space-y-2">
              {gameHistory.slice().reverse().map((game, index) => (
                <div key={index} className="bg-gray-700/50 p-3 rounded-lg flex justify-between items-center">
                  <div className="flex gap-4">
                    <span className="text-blue-400">J1: {getDiceEmoji(game.player1)} {game.player1}</span>
                    <span className="text-purple-400">J2: {getDiceEmoji(game.player2)} {game.player2}</span>
                  </div>
                  <span className={`font-bold ${
                    game.winner === 'Jugador 1' ? 'text-blue-400' :
                    game.winner === 'Jugador 2' ? 'text-purple-400' :
                    'text-yellow-400'
                  }`}>
                    {game.winner}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DiceChallenge;
