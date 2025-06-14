
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import DiceChallenge from "./components/DiceChallenge";
import DrumKit from "./components/DrumKit";
import KeeperApp from "./components/KeeperApp";
import TodoList from "./components/TodoList";
import BlogApp from "./components/BlogApp";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/dice-challenge" element={<DiceChallenge />} />
          <Route path="/drum-kit" element={<DrumKit />} />
          <Route path="/keeper-app" element={<KeeperApp />} />
          <Route path="/todo-list" element={<TodoList />} />
          <Route path="/blog" element={<BlogApp />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
