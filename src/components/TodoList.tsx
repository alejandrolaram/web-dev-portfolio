import React, { useState, useEffect } from 'react';
import { Home, ArrowLeft, Plus, Trash2, Check, Clock, Flag, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Todo {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  priority: 'low' | 'medium' | 'high';
  category: string;
  dueDate: string;
  createdAt: Date;
}

const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<'all' | 'pending' | 'completed'>('all');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [isCreating, setIsCreating] = useState(false);
  const [newTodo, setNewTodo] = useState({
    title: '',
    description: '',
    priority: 'medium' as const,
    category: 'personal',
    dueDate: ''
  });

  const categories = ['personal', 'trabajo', 'estudio', 'hogar', 'salud'];
  const priorities = [
    { value: 'low', label: 'Baja', color: 'from-green-400 to-green-600' },
    { value: 'medium', label: 'Media', color: 'from-yellow-400 to-orange-500' },
    { value: 'high', label: 'Alta', color: 'from-pink-400 to-red-500' }
  ];

  useEffect(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      const parsedTodos = JSON.parse(savedTodos);
      setTodos(parsedTodos.map((todo: any) => ({
        ...todo,
        createdAt: new Date(todo.createdAt)
      })));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (newTodo.title.trim()) {
      const todo: Todo = {
        id: Date.now().toString(),
        title: newTodo.title,
        description: newTodo.description,
        completed: false,
        priority: newTodo.priority,
        category: newTodo.category,
        dueDate: newTodo.dueDate,
        createdAt: new Date()
      };
      setTodos([todo, ...todos]);
      setNewTodo({
        title: '',
        description: '',
        priority: 'medium',
        category: 'personal',
        dueDate: ''
      });
      setIsCreating(false);
    }
  };

  const toggleTodo = (id: string) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const filteredTodos = todos.filter(todo => {
    const statusFilter = filter === 'all' || 
      (filter === 'pending' && !todo.completed) ||
      (filter === 'completed' && todo.completed);
    
    const catFilter = categoryFilter === 'all' || todo.category === categoryFilter;
    
    return statusFilter && catFilter;
  });

  const getTodoStats = () => {
    const total = todos.length;
    const completed = todos.filter(t => t.completed).length;
    const pending = total - completed;
    const highPriority = todos.filter(t => t.priority === 'high' && !t.completed).length;
    
    return { total, completed, pending, highPriority };
  };

  const stats = getTodoStats();

  const isOverdue = (dueDate: string) => {
    if (!dueDate) return false;
    return new Date(dueDate) < new Date();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-r from-green-300/30 to-emerald-300/30 rounded-full blur-3xl pulse-slow"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-blue-300/30 to-cyan-300/30 rounded-full blur-3xl pulse-slow"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-300/20 to-pink-300/20 rounded-full blur-3xl pulse-slow"></div>
      </div>

      {/* Navigation Header */}
      <nav className="glass-effect shadow-2xl border-b border-white/30 p-4 relative z-50">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link 
            to="/" 
            className="flex items-center gap-2 text-white hover:text-green-200 transition-colors duration-300 font-medium"
          >
            <ArrowLeft size={20} />
            <span className="font-semibold">Volver al Portafolio</span>
          </Link>
          
          <Link 
            to="/" 
            className="text-2xl font-bold text-white text-shadow-glow"
          >
            Mi Portafolio ✨
          </Link>
          
          <Link 
            to="/" 
            className="flex items-center gap-2 text-white hover:text-green-200 transition-colors duration-300 font-medium"
          >
            <Home size={20} />
            <span className="font-semibold">Inicio</span>
          </Link>
        </div>
      </nav>

      <div className="p-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="glass-effect rounded-3xl p-8 mb-8 border border-white/30 shadow-2xl backdrop-blur-glass">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 text-shadow-glow">
                ✅ To-Do List Pro ✅
              </h1>
              <p className="text-xl text-white/90 mb-6">
                Organiza tus tareas de manera eficiente y productiva ✨
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <div className="glass-effect rounded-2xl shadow-xl p-4 border border-cyan-300/30 hover-glow">
              <div className="text-2xl font-bold text-white text-shadow-glow">{stats.total}</div>
              <div className="text-white/80">Total</div>
            </div>
            <div className="glass-effect rounded-2xl shadow-xl p-4 border border-yellow-300/30 hover-glow">
              <div className="text-2xl font-bold text-white text-shadow-glow">{stats.pending}</div>
              <div className="text-white/80">Pendientes</div>
            </div>
            <div className="glass-effect rounded-2xl shadow-xl p-4 border border-green-300/30 hover-glow">
              <div className="text-2xl font-bold text-white text-shadow-glow">{stats.completed}</div>
              <div className="text-white/80">Completadas</div>
            </div>
            <div className="glass-effect rounded-2xl shadow-xl p-4 border border-pink-300/30 hover-glow">
              <div className="text-2xl font-bold text-white text-shadow-glow">{stats.highPriority}</div>
              <div className="text-white/80">Alta Prioridad</div>
            </div>
          </div>

          {/* Controls */}
          <div className="glass-effect rounded-2xl shadow-xl p-6 mb-8 border border-white/30 backdrop-blur-glass">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="flex gap-4">
                <select
                  value={filter}
                  onChange={(e) => setFilter(e.target.value as any)}
                  className="px-4 py-2 glass-effect border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-400 text-white backdrop-blur-md"
                >
                  <option value="all">Todas</option>
                  <option value="pending">Pendientes</option>
                  <option value="completed">Completadas</option>
                </select>
                
                <select
                  value={categoryFilter}
                  onChange={(e) => setCategoryFilter(e.target.value)}
                  className="px-4 py-2 glass-effect border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-400 text-white backdrop-blur-md"
                >
                  <option value="all">Todas las categorías</option>
                  {categories.map(cat => (
                    <option key={cat} value={cat}>{cat.charAt(0).toUpperCase() + cat.slice(1)}</option>
                  ))}
                </select>
              </div>
              
              <button
                onClick={() => setIsCreating(true)}
                className="flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-white rounded-xl font-semibold transition-all duration-300 border border-white/30 hover:scale-105 shadow-xl text-shadow-glow"
              >
                <Plus size={20} />
                Nueva Tarea
              </button>
            </div>
          </div>

          {/* Create Todo Form */}
          {isCreating && (
            <div className="glass-effect rounded-2xl shadow-2xl p-6 mb-8 border border-white/30 backdrop-blur-glass">
              <h3 className="text-lg font-bold text-white mb-4 text-shadow-glow">Crear Nueva Tarea</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  placeholder="Título de la tarea..."
                  value={newTodo.title}
                  onChange={(e) => setNewTodo({ ...newTodo, title: e.target.value })}
                  className="p-3 glass-effect border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-400 text-white placeholder-white/60 backdrop-blur-md"
                />
                
                <select
                  value={newTodo.category}
                  onChange={(e) => setNewTodo({ ...newTodo, category: e.target.value })}
                  className="p-3 glass-effect border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-400 text-white backdrop-blur-md"
                >
                  {categories.map(cat => (
                    <option key={cat} value={cat}>{cat.charAt(0).toUpperCase() + cat.slice(1)}</option>
                  ))}
                </select>
              </div>
              
              <textarea
                placeholder="Descripción de la tarea..."
                value={newTodo.description}
                onChange={(e) => setNewTodo({ ...newTodo, description: e.target.value })}
                rows={3}
                className="w-full mb-4 p-3 glass-effect border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-400 resize-none text-white placeholder-white/60 backdrop-blur-md"
              />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <select
                  value={newTodo.priority}
                  onChange={(e) => setNewTodo({ ...newTodo, priority: e.target.value as any })}
                  className="p-3 glass-effect border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-400 text-white backdrop-blur-md"
                >
                  {priorities.map(priority => (
                    <option key={priority.value} value={priority.value}>
                      Prioridad {priority.label}
                    </option>
                  ))}
                </select>
                
                <input
                  type="date"
                  value={newTodo.dueDate}
                  onChange={(e) => setNewTodo({ ...newTodo, dueDate: e.target.value })}
                  className="p-3 glass-effect border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-400 text-white backdrop-blur-md"
                />
              </div>
              
              <div className="flex gap-4">
                <button
                  onClick={addTodo}
                  className="px-6 py-2 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-white rounded-xl font-semibold transition-all duration-300 border border-white/30 text-shadow-glow"
                >
                  Crear Tarea
                </button>
                <button
                  onClick={() => setIsCreating(false)}
                  className="px-6 py-2 glass-effect hover:bg-white/20 text-white rounded-xl font-semibold transition-all duration-300 border border-white/30 text-shadow-glow"
                >
                  Cancelar
                </button>
              </div>
            </div>
          )}

          {/* Todos List */}
          <div className="space-y-4">
            {filteredTodos.map((todo) => {
              const priority = priorities.find(p => p.value === todo.priority);
              const overdue = isOverdue(todo.dueDate);
              
              return (
                <div
                  key={todo.id}
                  className={`glass-effect rounded-2xl shadow-xl p-4 border transition-all duration-300 backdrop-blur-glass hover-glow ${
                    todo.completed 
                      ? 'border-white/20' 
                      : overdue 
                        ? 'border-pink-400/50' 
                        : 'border-white/30'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <button
                      onClick={() => toggleTodo(todo.id)}
                      className={`mt-1 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
                        todo.completed
                          ? 'bg-gradient-to-r from-green-400 to-emerald-500 border-green-400 text-white shadow-lg'
                          : 'border-white/40 hover:border-green-400 glass-effect'
                      }`}
                    >
                      {todo.completed && <Check size={16} />}
                    </button>
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className={`font-bold text-lg ${
                          todo.completed ? 'line-through text-white/60' : 'text-white text-shadow-glow'
                        }`}>
                          {todo.title}
                        </h3>
                        
                        <span className={`px-2 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${priority?.color} shadow-lg`}>
                          {priority?.label}
                        </span>
                        
                        <span className="px-2 py-1 bg-gradient-to-r from-white/20 to-white/10 text-white rounded-full text-xs font-semibold border border-white/30">
                          {todo.category}
                        </span>
                      </div>
                      
                      {todo.description && (
                        <p className={`text-white/80 mb-2 ${
                          todo.completed ? 'line-through' : ''
                        }`}>
                          {todo.description}
                        </p>
                      )}
                      
                      <div className="flex items-center gap-4 text-sm text-white/70">
                        {todo.dueDate && (
                          <div className={`flex items-center gap-1 ${
                            overdue && !todo.completed ? 'text-pink-300 font-semibold' : ''
                          }`}>
                            <Clock size={14} />
                            {new Date(todo.dueDate).toLocaleDateString()}
                            {overdue && !todo.completed && ' (Vencida)'}
                          </div>
                        )}
                        
                        <div>
                          Creada: {todo.createdAt.toLocaleDateString()}
                        </div>
                      </div>
                    </div>
                    
                    <button
                      onClick={() => deleteTodo(todo.id)}
                      className="text-white/60 hover:text-pink-300 transition-colors duration-200"
                    >
                      <Trash2 size={20} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {filteredTodos.length === 0 && (
            <div className="text-center py-12">
              <div className="glass-effect rounded-3xl p-12 border border-white/30 backdrop-blur-glass">
                <div className="text-6xl mb-4">📋</div>
                <h3 className="text-xl font-bold text-white mb-2 text-shadow-glow">No hay tareas que mostrar</h3>
                <p className="text-white/80">
                  {filter === 'all' ? 'Crea tu primera tarea para comenzar' : `No hay tareas ${filter === 'pending' ? 'pendientes' : 'completadas'}`}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TodoList;
