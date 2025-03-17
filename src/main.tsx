
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Create a function to handle smooth scrolling to sections
const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth'
    });
  }
};

// Make the function globally available by extending Window interface
declare global {
  interface Window {
    scrollToSection: (sectionId: string) => void;
  }
}

window.scrollToSection = scrollToSection;

createRoot(document.getElementById("root")!).render(<App />);
