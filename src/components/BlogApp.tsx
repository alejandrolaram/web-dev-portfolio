
import React, { useState, useEffect } from 'react';
import { Home, ArrowLeft, Plus, Edit3, Trash2, Calendar, User, Tag, Search, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BlogPost {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  author: string;
  category: string;
  tags: string[];
  createdAt: Date;
  views: number;
  published: boolean;
}

interface Comment {
  id: string;
  postId: string;
  author: string;
  content: string;
  createdAt: Date;
}

const BlogApp = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [comments, setComments] = useState<Comment[]>([]);
  const [currentView, setCurrentView] = useState<'list' | 'create' | 'view'>('list');
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [newPost, setNewPost] = useState({
    title: '',
    content: '',
    excerpt: '',
    author: 'Admin',
    category: 'tecnologia',
    tags: '',
    published: true
  });
  const [newComment, setNewComment] = useState({ author: '', content: '' });

  const categories = ['tecnologia', 'diseño', 'desarrollo', 'tutoriales', 'noticias'];

  useEffect(() => {
    const savedPosts = localStorage.getItem('blog-posts');
    const savedComments = localStorage.getItem('blog-comments');
    
    if (savedPosts) {
      const parsedPosts = JSON.parse(savedPosts);
      setPosts(parsedPosts.map((post: any) => ({
        ...post,
        createdAt: new Date(post.createdAt)
      })));
    } else {
      // Sample posts
      const samplePosts: BlogPost[] = [
        {
          id: '1',
          title: 'Introducción a React y TypeScript',
          content: 'React es una biblioteca de JavaScript para construir interfaces de usuario. TypeScript añade tipado estático a JavaScript, lo que nos ayuda a escribir código más robusto y mantenible.\n\nEn este artículo exploraremos cómo combinar estas dos tecnologías poderosas para crear aplicaciones web modernas y escalables.',
          excerpt: 'Aprende cómo combinar React con TypeScript para crear aplicaciones más robustas.',
          author: 'Admin',
          category: 'tecnologia',
          tags: ['react', 'typescript', 'frontend'],
          createdAt: new Date(Date.now() - 86400000),
          views: 45,
          published: true
        },
        {
          id: '2',
          title: 'Diseño de Interfaces Modernas',
          content: 'El diseño de interfaces ha evolucionado significativamente en los últimos años. Los principios de diseño centrado en el usuario, la accesibilidad y la experiencia de usuario son fundamentales.\n\nTailwind CSS nos permite crear interfaces hermosas y responsivas de manera eficiente.',
          excerpt: 'Explora los principios del diseño moderno de interfaces de usuario.',
          author: 'Admin',
          category: 'diseño',
          tags: ['ui', 'ux', 'tailwind'],
          createdAt: new Date(Date.now() - 172800000),
          views: 32,
          published: true
        }
      ];
      setPosts(samplePosts);
    }
    
    if (savedComments) {
      const parsedComments = JSON.parse(savedComments);
      setComments(parsedComments.map((comment: any) => ({
        ...comment,
        createdAt: new Date(comment.createdAt)
      })));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('blog-posts', JSON.stringify(posts));
  }, [posts]);

  useEffect(() => {
    localStorage.setItem('blog-comments', JSON.stringify(comments));
  }, [comments]);

  const createPost = () => {
    if (newPost.title.trim() && newPost.content.trim()) {
      const post: BlogPost = {
        id: Date.now().toString(),
        title: newPost.title,
        content: newPost.content,
        excerpt: newPost.excerpt || newPost.content.substring(0, 150) + '...',
        author: newPost.author,
        category: newPost.category,
        tags: newPost.tags.split(',').map(tag => tag.trim()).filter(tag => tag),
        createdAt: new Date(),
        views: 0,
        published: newPost.published
      };
      setPosts([post, ...posts]);
      setNewPost({
        title: '',
        content: '',
        excerpt: '',
        author: 'Admin',
        category: 'tecnologia',
        tags: '',
        published: true
      });
      setCurrentView('list');
    }
  };

  const viewPost = (post: BlogPost) => {
    setPosts(posts.map(p => 
      p.id === post.id ? { ...p, views: p.views + 1 } : p
    ));
    setSelectedPost(post);
    setCurrentView('view');
  };

  const deletePost = (id: string) => {
    setPosts(posts.filter(post => post.id !== id));
    setComments(comments.filter(comment => comment.postId !== id));
  };

  const addComment = () => {
    if (newComment.author.trim() && newComment.content.trim() && selectedPost) {
      const comment: Comment = {
        id: Date.now().toString(),
        postId: selectedPost.id,
        author: newComment.author,
        content: newComment.content,
        createdAt: new Date()
      };
      setComments([comment, ...comments]);
      setNewComment({ author: '', content: '' });
    }
  };

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = categoryFilter === 'all' || post.category === categoryFilter;
    
    return matchesSearch && matchesCategory && post.published;
  });

  const postComments = selectedPost ? comments.filter(c => c.postId === selectedPost.id) : [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-red-50">
      {/* Navigation Header */}
      <nav className="bg-white shadow-lg border-b border-gray-200 p-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link 
            to="/" 
            className="flex items-center gap-2 text-gray-600 hover:text-red-600 transition-colors duration-300"
          >
            <ArrowLeft size={20} />
            <span className="font-semibold">Volver al Portafolio</span>
          </Link>
          
          <Link 
            to="/" 
            className="text-2xl font-bold bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent"
          >
            Mi Portafolio
          </Link>
          
          <Link 
            to="/" 
            className="flex items-center gap-2 text-gray-600 hover:text-red-600 transition-colors duration-300"
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
              📝 Mi Blog Personal 📝
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Comparto mis conocimientos sobre desarrollo web y tecnología
            </p>
          </div>

          {/* Navigation Buttons */}
          <div className="flex flex-wrap gap-4 mb-8 justify-center">
            <button
              onClick={() => setCurrentView('list')}
              className={`px-6 py-3 rounded-lg font-semibold transition-colors duration-300 ${
                currentView === 'list' 
                  ? 'bg-red-500 text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-300'
              }`}
            >
              Ver Artículos
            </button>
            <button
              onClick={() => setCurrentView('create')}
              className={`px-6 py-3 rounded-lg font-semibold transition-colors duration-300 flex items-center gap-2 ${
                currentView === 'create' 
                  ? 'bg-red-500 text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-300'
              }`}
            >
              <Plus size={20} />
              Nuevo Artículo
            </button>
          </div>

          {/* Blog Posts List */}
          {currentView === 'list' && (
            <>
              {/* Search and Filters */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type="text"
                      placeholder="Buscar artículos..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                  </div>
                  <select
                    value={categoryFilter}
                    onChange={(e) => setCategoryFilter(e.target.value)}
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  >
                    <option value="all">Todas las categorías</option>
                    {categories.map(cat => (
                      <option key={cat} value={cat}>
                        {cat.charAt(0).toUpperCase() + cat.slice(1)}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Posts Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPosts.map((post) => (
                  <article key={post.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-semibold">
                          {post.category}
                        </span>
                        <div className="flex items-center text-gray-500 text-sm">
                          <Eye size={14} className="mr-1" />
                          {post.views}
                        </div>
                      </div>
                      
                      <h2 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2">
                        {post.title}
                      </h2>
                      
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.map((tag, index) => (
                          <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-sm">
                            #{tag}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-gray-500 text-sm">
                          <User size={14} className="mr-1" />
                          {post.author}
                        </div>
                        <div className="flex items-center text-gray-500 text-sm">
                          <Calendar size={14} className="mr-1" />
                          {post.createdAt.toLocaleDateString()}
                        </div>
                      </div>
                      
                      <div className="flex gap-2 mt-4">
                        <button
                          onClick={() => viewPost(post)}
                          className="flex-1 px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg font-semibold transition-colors duration-300"
                        >
                          Leer Más
                        </button>
                        <button
                          onClick={() => deletePost(post.id)}
                          className="px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-lg transition-colors duration-300"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {filteredPosts.length === 0 && (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">📖</div>
                  <h3 className="text-xl font-bold text-gray-600 mb-2">No se encontraron artículos</h3>
                  <p className="text-gray-500">Intenta con otros términos de búsqueda o crea un nuevo artículo</p>
                </div>
              )}
            </>
          )}

          {/* Create Post Form */}
          {currentView === 'create' && (
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Crear Nuevo Artículo</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <input
                  type="text"
                  placeholder="Título del artículo..."
                  value={newPost.title}
                  onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                  className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                
                <select
                  value={newPost.category}
                  onChange={(e) => setNewPost({ ...newPost, category: e.target.value })}
                  className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  {categories.map(cat => (
                    <option key={cat} value={cat}>
                      {cat.charAt(0).toUpperCase() + cat.slice(1)}
                    </option>
                  ))}
                </select>
              </div>
              
              <textarea
                placeholder="Extracto del artículo (opcional)..."
                value={newPost.excerpt}
                onChange={(e) => setNewPost({ ...newPost, excerpt: e.target.value })}
                rows={3}
                className="w-full mb-6 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 resize-none"
              />
              
              <textarea
                placeholder="Contenido del artículo..."
                value={newPost.content}
                onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
                rows={10}
                className="w-full mb-6 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 resize-none"
              />
              
              <input
                type="text"
                placeholder="Tags (separados por comas)..."
                value={newPost.tags}
                onChange={(e) => setNewPost({ ...newPost, tags: e.target.value })}
                className="w-full mb-6 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              
              <div className="flex gap-4">
                <button
                  onClick={createPost}
                  className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white rounded-lg font-semibold transition-colors duration-300"
                >
                  Publicar Artículo
                </button>
                <button
                  onClick={() => setCurrentView('list')}
                  className="px-6 py-3 bg-gray-500 hover:bg-gray-600 text-white rounded-lg font-semibold transition-colors duration-300"
                >
                  Cancelar
                </button>
              </div>
            </div>
          )}

          {/* View Post */}
          {currentView === 'view' && selectedPost && (
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-8">
                <button
                  onClick={() => setCurrentView('list')}
                  className="flex items-center gap-2 text-red-600 hover:text-red-700 mb-6 transition-colors duration-300"
                >
                  <ArrowLeft size={20} />
                  Volver a la lista
                </button>
                
                <article>
                  <header className="mb-6">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-semibold">
                        {selectedPost.category}
                      </span>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Eye size={14} className="mr-1" />
                        {selectedPost.views} visualizaciones
                      </div>
                    </div>
                    
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                      {selectedPost.title}
                    </h1>
                    
                    <div className="flex items-center gap-6 text-gray-500 text-sm mb-4">
                      <div className="flex items-center">
                        <User size={16} className="mr-2" />
                        {selectedPost.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar size={16} className="mr-2" />
                        {selectedPost.createdAt.toLocaleDateString()}
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {selectedPost.tags.map((tag, index) => (
                        <span key={index} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </header>
                  
                  <div className="prose max-w-none">
                    {selectedPost.content.split('\n').map((paragraph, index) => (
                      <p key={index} className="text-gray-700 mb-4 leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </article>
                
                {/* Comments Section */}
                <section className="mt-12 border-t border-gray-200 pt-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">
                    Comentarios ({postComments.length})
                  </h3>
                  
                  {/* Add Comment Form */}
                  <div className="bg-gray-50 rounded-lg p-6 mb-8">
                    <h4 className="font-semibold text-gray-800 mb-4">Agregar Comentario</h4>
                    <input
                      type="text"
                      placeholder="Tu nombre..."
                      value={newComment.author}
                      onChange={(e) => setNewComment({ ...newComment, author: e.target.value })}
                      className="w-full mb-4 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                    <textarea
                      placeholder="Tu comentario..."
                      value={newComment.content}
                      onChange={(e) => setNewComment({ ...newComment, content: e.target.value })}
                      rows={4}
                      className="w-full mb-4 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 resize-none"
                    />
                    <button
                      onClick={addComment}
                      className="px-6 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg font-semibold transition-colors duration-300"
                    >
                      Comentar
                    </button>
                  </div>
                  
                  {/* Comments List */}
                  <div className="space-y-6">
                    {postComments.map((comment) => (
                      <div key={comment.id} className="bg-gray-50 rounded-lg p-6">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center">
                            <User size={16} className="mr-2 text-gray-500" />
                            <span className="font-semibold text-gray-800">{comment.author}</span>
                          </div>
                          <span className="text-gray-500 text-sm">
                            {comment.createdAt.toLocaleDateString()}
                          </span>
                        </div>
                        <p className="text-gray-700">{comment.content}</p>
                      </div>
                    ))}
                  </div>
                  
                  {postComments.length === 0 && (
                    <div className="text-center py-8">
                      <p className="text-gray-500">No hay comentarios aún. ¡Sé el primero en comentar!</p>
                    </div>
                  )}
                </section>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogApp;
