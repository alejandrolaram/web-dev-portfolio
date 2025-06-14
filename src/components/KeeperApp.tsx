
import React, { useState, useEffect } from 'react';
import { Home, ArrowLeft, Plus, Trash2, Edit3, Search, X } from 'lucide-react';
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
  const [newNote, setNewNote] = useState({ title: '', content: '', color: '#fbbf24' });

  const colors = [
    { name: 'Amarillo', value: '#fbbf24' },
    { name: 'Rosa', value: '#f472b6' },
    { name: 'Verde', value: '#34d399' },
    { name: 'Azul', value: '#60a5fa' },
    { name: 'Púrpura', value: '#a78bfa' },
    { name: 'Naranja', value: '#fb923c' }
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
      setNewNote({ title: '', content: '', color: '#fbbf24' });
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
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-yellow-50">
      {/* Navigation Header */}
      <nav className="bg-white shadow-lg border-b border-gray-200 p-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link 
            to="/" 
            className="flex items-center gap-2 text-gray-600 hover:text-yellow-600 transition-colors duration-300"
          >
            <ArrowLeft size={20} />
            <span className="font-semibold">Volver al Portafolio</span>
          </Link>
          
          <Link 
            to="/" 
            className="text-2xl font-bold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent"
          >
            Mi Portafolio
          </Link>
          
          <Link 
            to="/" 
            className="flex items-center gap-2 text-gray-600 hover:text-yellow-600 transition-colors duration-300"
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
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
              📝 Keeper App 📝
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Tu aplicación personal de notas - Captura tus ideas al instante
            </p>
          </div>

          {/* Search and Add Button */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Buscar notas..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
              />
            </div>
            <button
              onClick={() => setIsCreating(true)}
              className="flex items-center gap-2 px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg font-semibold transition-colors duration-300"
            >
              <Plus size={20} />
              Nueva Nota
            </button>
          </div>

          {/* Create Note Form */}
          {isCreating && (
            <div className="mb-8 bg-white rounded-lg shadow-lg p-6 border-l-4 border-yellow-500">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-bold text-gray-800">Crear Nueva Nota</h3>
                <button
                  onClick={() => setIsCreating(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X size={20} />
                </button>
              </div>
              
              <input
                type="text"
                placeholder="Título de la nota..."
                value={newNote.title}
                onChange={(e) => setNewNote({ ...newNote, title: e.target.value })}
                className="w-full mb-4 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              
              <textarea
                placeholder="Escribe tu nota aquí..."
                value={newNote.content}
                onChange={(e) => setNewNote({ ...newNote, content: e.target.value })}
                rows={4}
                className="w-full mb-4 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 resize-none"
              />
              
              <div className="flex items-center gap-4 mb-4">
                <span className="text-gray-700 font-medium">Color:</span>
                {colors.map((color) => (
                  <button
                    key={color.value}
                    onClick={() => setNewNote({ ...newNote, color: color.value })}
                    className={`w-8 h-8 rounded-full border-2 ${
                      newNote.color === color.value ? 'border-gray-800 scale-110' : 'border-gray-300'
                    } transition-all duration-200`}
                    style={{ backgroundColor: color.value }}
                  />
                ))}
              </div>
              
              <button
                onClick={createNote}
                className="px-6 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg font-semibold transition-colors duration-300"
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
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-4 border-l-4"
                style={{ borderLeftColor: note.color }}
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-bold text-gray-800 line-clamp-2">{note.title}</h3>
                  <div className="flex gap-1">
                    <button
                      onClick={() => setEditingNote(note)}
                      className="text-gray-500 hover:text-blue-600 transition-colors duration-200"
                    >
                      <Edit3 size={16} />
                    </button>
                    <button
                      onClick={() => deleteNote(note.id)}
                      className="text-gray-500 hover:text-red-600 transition-colors duration-200"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-3 line-clamp-4">{note.content}</p>
                
                <div className="text-xs text-gray-400">
                  Creada: {note.createdAt.toLocaleDateString()}
                </div>
              </div>
            ))}
          </div>

          {filteredNotes.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">📝</div>
              <h3 className="text-xl font-bold text-gray-600 mb-2">
                {searchTerm ? 'No se encontraron notas' : 'No tienes notas aún'}
              </h3>
              <p className="text-gray-500">
                {searchTerm ? 'Intenta con otros términos de búsqueda' : 'Crea tu primera nota para comenzar'}
              </p>
            </div>
          )}

          {/* Edit Note Modal */}
          {editingNote && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
              <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-lg">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-bold text-gray-800">Editar Nota</h3>
                  <button
                    onClick={() => setEditingNote(null)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <X size={20} />
                  </button>
                </div>
                
                <input
                  type="text"
                  value={editingNote.title}
                  onChange={(e) => setEditingNote({ ...editingNote, title: e.target.value })}
                  className="w-full mb-4 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
                
                <textarea
                  value={editingNote.content}
                  onChange={(e) => setEditingNote({ ...editingNote, content: e.target.value })}
                  rows={4}
                  className="w-full mb-4 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 resize-none"
                />
                
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-gray-700 font-medium">Color:</span>
                  {colors.map((color) => (
                    <button
                      key={color.value}
                      onClick={() => setEditingNote({ ...editingNote, color: color.value })}
                      className={`w-8 h-8 rounded-full border-2 ${
                        editingNote.color === color.value ? 'border-gray-800 scale-110' : 'border-gray-300'
                      } transition-all duration-200`}
                      style={{ backgroundColor: color.value }}
                    />
                  ))}
                </div>
                
                <button
                  onClick={() => updateNote(editingNote)}
                  className="px-6 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg font-semibold transition-colors duration-300"
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
