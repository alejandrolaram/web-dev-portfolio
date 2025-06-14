
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
    { value: 'low', label: 'Baja', color: 'bg-green-500' },
    { value: 'medium', label: 'Media', color: 'bg-yellow-500' },
    { value: 'high', label: 'Alta', color: 'bg-red-500' }
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-green-50">
      {/* Navigation Header */}
      <nav className="bg-white shadow-lg border-b border-gray-200 p-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link 
            to="/" 
            className="flex items-center gap-2 text-gray-600 hover:text-green-600 transition-colors duration-300"
          >
            <ArrowLeft size={20} />
            <span className="font-semibold">Volver al Portafolio</span>
          </Link>
          
          <Link 
            to="/" 
            className="text-2xl font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent"
          >
            Mi Portafolio
          </Link>
          
          <Link 
            to="/" 
            className="flex items-center gap-2 text-gray-600 hover:text-green-600 transition-colors duration-300"
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
              ✅ To-Do List Pro ✅
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Organiza tus tareas de manera eficiente y productiva
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-blue-500">
              <div className="text-2xl font-bold text-blue-600">{stats.total}</div>
              <div className="text-gray-600">Total</div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-yellow-500">
              <div className="text-2xl font-bold text-yellow-600">{stats.pending}</div>
              <div className="text-gray-600">Pendientes</div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-green-500">
              <div className="text-2xl font-bold text-green-600">{stats.completed}</div>
              <div className="text-gray-600">Completadas</div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-red-500">
              <div className="text-2xl font-bold text-red-600">{stats.highPriority}</div>
              <div className="text-gray-600">Alta Prioridad</div>
            </div>
          </div>

          {/* Controls */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="flex gap-4">
                <select
                  value={filter}
                  onChange={(e) => setFilter(e.target.value as any)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  <option value="all">Todas</option>
                  <option value="pending">Pendientes</option>
                  <option value="completed">Completadas</option>
                </select>
                
                <select
                  value={categoryFilter}
                  onChange={(e) => setCategoryFilter(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  <option value="all">Todas las categorías</option>
                  {categories.map(cat => (
                    <option key={cat} value={cat}>{cat.charAt(0).toUpperCase() + cat.slice(1)}</option>
                  ))}
                </select>
              </div>
              
              <button
                onClick={() => setIsCreating(true)}
                className="flex items-center gap-2 px-6 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg font-semibold transition-colors duration-300"
              >
                <Plus size={20} />
                Nueva Tarea
              </button>
            </div>
          </div>

          {/* Create Todo Form */}
          {isCreating && (
            <div className="bg-white rounded-lg shadow-lg p-6 mb-8 border-l-4 border-green-500">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Crear Nueva Tarea</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  placeholder="Título de la tarea..."
                  value={newTodo.title}
                  onChange={(e) => setNewTodo({ ...newTodo, title: e.target.value })}
                  className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                
                <select
                  value={newTodo.category}
                  onChange={(e) => setNewTodo({ ...newTodo, category: e.target.value })}
                  className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
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
                className="w-full mb-4 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
              />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <select
                  value={newTodo.priority}
                  onChange={(e) => setNewTodo({ ...newTodo, priority: e.target.value as any })}
                  className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
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
                  className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              
              <div className="flex gap-4">
                <button
                  onClick={addTodo}
                  className="px-6 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg font-semibold transition-colors duration-300"
                >
                  Crear Tarea
                </button>
                <button
                  onClick={() => setIsCreating(false)}
                  className="px-6 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-lg font-semibold transition-colors duration-300"
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
                  className={`bg-white rounded-lg shadow-md p-4 border-l-4 transition-all duration-300 ${
                    todo.completed 
                      ? 'border-gray-400 bg-gray-50' 
                      : overdue 
                        ? 'border-red-500' 
                        : 'border-green-500'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <button
                      onClick={() => toggleTodo(todo.id)}
                      className={`mt-1 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors duration-200 ${
                        todo.completed
                          ? 'bg-green-500 border-green-500 text-white'
                          : 'border-gray-300 hover:border-green-500'
                      }`}
                    >
                      {todo.completed && <Check size={16} />}
                    </button>
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className={`font-bold text-lg ${
                          todo.completed ? 'line-through text-gray-500' : 'text-gray-800'
                        }`}>
                          {todo.title}
                        </h3>
                        
                        <span className={`px-2 py-1 rounded-full text-xs font-semibold text-white ${priority?.color}`}>
                          {priority?.label}
                        </span>
                        
                        <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">
                          {todo.category}
                        </span>
                      </div>
                      
                      {todo.description && (
                        <p className={`text-gray-600 mb-2 ${
                          todo.completed ? 'line-through' : ''
                        }`}>
                          {todo.description}
                        </p>
                      )}
                      
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        {todo.dueDate && (
                          <div className={`flex items-center gap-1 ${
                            overdue && !todo.completed ? 'text-red-600 font-semibold' : ''
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
                      className="text-gray-500 hover:text-red-600 transition-colors duration-200"
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
              <div className="text-6xl mb-4">📋</div>
              <h3 className="text-xl font-bold text-gray-600 mb-2">No hay tareas que mostrar</h3>
              <p className="text-gray-500">
                {filter === 'all' ? 'Crea tu primera tarea para comenzar' : `No hay tareas ${filter === 'pending' ? 'pendientes' : 'completadas'}`}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TodoList;
