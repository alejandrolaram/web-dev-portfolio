import React, { useState, useEffect } from 'react';
import { ArrowLeft, Plus, Trash2, Edit3, Search, X } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Note {
  id: string;
  title: string;
  content: string;
  color: string;
  createdAt: Date;
  updatedAt: Date;
}

const KeeperApp = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [isCreating, setIsCreating] = useState(false);
  const [editingNote, setEditingNote] = useState<Note | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [newNote, setNewNote] = useState({ title: '', content: '', color: '#00f5ff' });

  const colors = [
    { name: 'Cyan', value: '#00f5ff' },
    { name: 'Rosa', value: '#ff6b9d' },
    { name: 'Verde', value: '#4ade80' },
    { name: 'Azul', value: '#3b82f6' },
    { name: 'Púrpura', value: '#a855f7' },
    { name: 'Naranja', value: '#f97316' }
  ];

  useEffect(() => {
    const savedNotes = localStorage.getItem('keeper-notes');
    if (savedNotes) {
      const parsedNotes = JSON.parse(savedNotes);
      setNotes(parsedNotes.map((note: any) => ({
        ...note,
        createdAt: new Date(note.createdAt),
        updatedAt: new Date(note.updatedAt)
      })));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('keeper-notes', JSON.stringify(notes));
  }, [notes]);

  const createNote = () => {
    if (newNote.title.trim() || newNote.content.trim()) {
      const note: Note = {
        id: Date.now().toString(),
        title: newNote.title || 'Sin título',
        content: newNote.content,
        color: newNote.color,
        createdAt: new Date(),
        updatedAt: new Date()
      };
      setNotes([note, ...notes]);
      setNewNote({ title: '', content: '', color: '#00f5ff' });
      setIsCreating(false);
    }
  };

  const updateNote = (updatedNote: Note) => {
    setNotes(notes.map(note => 
      note.id === updatedNote.id 
        ? { ...updatedNote, updatedAt: new Date() }
        : note
    ));
    setEditingNote(null);
  };

  const deleteNote = (id: string) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  const filteredNotes = notes.filter(note =>
    note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    note.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-r from-yellow-300/30 to-pink-300/30 rounded-full blur-3xl pulse-slow"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-green-300/30 to-cyan-300/30 rounded-full blur-3xl pulse-slow"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-300/20 to-purple-300/20 rounded-full blur-3xl pulse-slow"></div>
      </div>

      {/* Navigation Header */}
      <nav className="glass-effect shadow-2xl border-b border-white/30 p-4 relative z-50">
        <div className="max-w-6xl mx-auto flex items-center justify-center">
          <Link 
            to="/" 
            className="flex items-center gap-2 text-white hover:text-cyan-200 transition-colors duration-300 font-medium"
          >
            <ArrowLeft size={20} />
            <span className="font-semibold">Volver al Portafolio</span>
          </Link>
        </div>
      </nav>

      <div className="p-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="glass-effect rounded-3xl p-8 mb-8 border border-white/30 shadow-2xl backdrop-blur-glass">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 gradient-text-cyber text-shadow-glow">
                📝 Keeper App 📝
              </h1>
              <p className="text-xl text-white/90 mb-6">
                Tu aplicación personal de notas - Captura tus ideas al instante ✨
              </p>
            </div>
          </div>

          {/* Search and Add Button */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/70" size={20} />
              <input
                type="text"
                placeholder="Buscar notas..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 glass-effect border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 text-white placeholder-white/60 backdrop-blur-md"
              />
            </div>
            <button
              onClick={() => setIsCreating(true)}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white rounded-xl font-semibold transition-all duration-300 border border-white/30 hover:scale-105 shadow-xl text-shadow-glow"
            >
              <Plus size={20} />
              Nueva Nota
            </button>
          </div>

          {/* Create Note Form */}
          {isCreating && (
            <div className="mb-8 glass-effect rounded-2xl shadow-2xl p-6 border border-white/30 backdrop-blur-glass">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-bold text-white gradient-text-cyber">Crear Nueva Nota</h3>
                <button
                  onClick={() => setIsCreating(false)}
                  className="text-white/70 hover:text-white"
                >
                  <X size={20} />
                </button>
              </div>
              
              <input
                type="text"
                placeholder="Título de la nota..."
                value={newNote.title}
                onChange={(e) => setNewNote({ ...newNote, title: e.target.value })}
                className="w-full mb-4 p-3 glass-effect border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-400 text-white placeholder-white/60 backdrop-blur-md"
              />
              
              <textarea
                placeholder="Escribe tu nota aquí..."
                value={newNote.content}
                onChange={(e) => setNewNote({ ...newNote, content: e.target.value })}
                rows={4}
                className="w-full mb-4 p-3 glass-effect border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-400 resize-none text-white placeholder-white/60 backdrop-blur-md"
              />
              
              <div className="flex items-center gap-4 mb-4">
                <span className="text-white font-medium">Color:</span>
                {colors.map((color) => (
                  <button
                    key={color.value}
                    onClick={() => setNewNote({ ...newNote, color: color.value })}
                    className={`w-8 h-8 rounded-full border-2 ${
                      newNote.color === color.value ? 'border-white scale-110' : 'border-white/30'
                    } transition-all duration-200 shadow-lg`}
                    style={{ backgroundColor: color.value }}
                  />
                ))}
              </div>
              
              <button
                onClick={createNote}
                className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white rounded-xl font-semibold transition-all duration-300 border border-white/30 text-shadow-glow"
              >
                Guardar Nota
              </button>
            </div>
          )}

          {/* Notes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredNotes.map((note) => (
              <div
                key={note.id}
                className="glass-effect rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 p-4 border border-white/30 hover:scale-105 backdrop-blur-glass"
                style={{ borderLeftColor: note.color, borderLeftWidth: '4px' }}
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-bold text-white line-clamp-2 text-shadow-glow">{note.title}</h3>
                  <div className="flex gap-1">
                    <button
                      onClick={() => setEditingNote(note)}
                      className="text-white/70 hover:text-cyan-300 transition-colors duration-200"
                    >
                      <Edit3 size={16} />
                    </button>
                    <button
                      onClick={() => deleteNote(note.id)}
                      className="text-white/70 hover:text-pink-300 transition-colors duration-200"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
                
                <p className="text-white/80 mb-3 line-clamp-4">{note.content}</p>
                
                <div className="text-xs text-white/60">
                  Creada: {note.createdAt.toLocaleDateString()}
                </div>
              </div>
            ))}
          </div>

          {filteredNotes.length === 0 && (
            <div className="text-center py-12">
              <div className="glass-effect rounded-3xl p-12 border border-white/30 backdrop-blur-glass">
                <div className="text-6xl mb-4">📝</div>
                <h3 className="text-xl font-bold text-white mb-2 gradient-text-cyber">
                  {searchTerm ? 'No se encontraron notas' : 'No tienes notas aún'}
                </h3>
                <p className="text-white/80">
                  {searchTerm ? 'Intenta con otros términos de búsqueda' : 'Crea tu primera nota para comenzar'}
                </p>
              </div>
            </div>
          )}

          {/* Edit Note Modal */}
          {editingNote && (
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
              <div className="glass-effect rounded-2xl shadow-2xl p-6 w-full max-w-lg border border-white/30 backdrop-blur-glass">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-bold text-white gradient-text-cyber">Editar Nota</h3>
                  <button
                    onClick={() => setEditingNote(null)}
                    className="text-white/70 hover:text-white"
                  >
                    <X size={20} />
                  </button>
                </div>
                
                <input
                  type="text"
                  value={editingNote.title}
                  onChange={(e) => setEditingNote({ ...editingNote, title: e.target.value })}
                  className="w-full mb-4 p-3 glass-effect border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-400 text-white placeholder-white/60 backdrop-blur-md"
                />
                
                <textarea
                  value={editingNote.content}
                  onChange={(e) => setEditingNote({ ...editingNote, content: e.target.value })}
                  rows={4}
                  className="w-full mb-4 p-3 glass-effect border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-400 resize-none text-white placeholder-white/60 backdrop-blur-md"
                />
                
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-white font-medium">Color:</span>
                  {colors.map((color) => (
                    <button
                      key={color.value}
                      onClick={() => setEditingNote({ ...editingNote, color: color.value })}
                      className={`w-8 h-8 rounded-full border-2 ${
                        editingNote.color === color.value ? 'border-white scale-110' : 'border-white/30'
                      } transition-all duration-200 shadow-lg`}
                      style={{ backgroundColor: color.value }}
                    />
                  ))}
                </div>
                
                <button
                  onClick={() => updateNote(editingNote)}
                  className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white rounded-xl font-semibold transition-all duration-300 border border-white/30 text-shadow-glow"
                >
                  Actualizar Nota
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default KeeperApp;
