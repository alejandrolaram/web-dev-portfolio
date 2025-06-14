
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import BlogPost1 from "./pages/BlogPost1";
import BlogPost2 from "./pages/BlogPost2";
import BlogPost3 from "./pages/BlogPost3";
import DiceChallenge from "./components/DiceChallenge";
import DrumKit from "./components/DrumKit";
import KeeperApp from "./components/KeeperApp";
import TodoList from "./components/TodoList";

const queryClient = new QueryClient();

// Detectar si estamos en GitHub Pages
const isGitHubPages = window.location.hostname.includes('github.io');
const basename = isGitHubPages ? "/web-dev-portfolio" : "";

console.log('=== DEBUGGING INFO ===');
console.log('Current hostname:', window.location.hostname);
console.log('Current pathname:', window.location.pathname);
console.log('Current search:', window.location.search);
console.log('Current hash:', window.location.hash);
console.log('Is GitHub Pages:', isGitHubPages);
console.log('Using basename:', basename);
console.log('=== END DEBUGGING ===');

const App = () => {
  console.log('App component is rendering');
  
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <div id="app-wrapper" style={{ minHeight: '100vh', background: 'white' }}>
          <BrowserRouter basename={basename}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/blog/mi-viaje-desarrollo-web" element={<BlogPost1 />} />
              <Route path="/blog/react-vs-javascript-vanilla" element={<BlogPost2 />} />
              <Route path="/blog/optimizacion-seo-desarrolladores" element={<BlogPost3 />} />
              <Route path="/dice-challenge" element={<DiceChallenge />} />
              <Route path="/drum-kit" element={<DrumKit />} />
              <Route path="/keeper-app" element={<KeeperApp />} />
              <Route path="/todo-list" element={<TodoList />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
