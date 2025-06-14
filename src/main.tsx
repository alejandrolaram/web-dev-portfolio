
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

console.log('main.tsx is running');
console.log('DOM content loaded, trying to mount React app...');

const rootElement = document.getElementById("root");
console.log('Root element found:', rootElement);

if (rootElement) {
  const root = createRoot(rootElement);
  console.log('React root created, rendering App...');
  root.render(<App />);
  console.log('App rendered successfully');
} else {
  console.error('Root element not found!');
}
