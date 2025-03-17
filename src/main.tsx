
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Create a function to handle smooth scrolling to sections
const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth'
    });
  }
};

// Make the function globally available
window.scrollToSection = scrollToSection;

createRoot(document.getElementById("root")!).render(<App />);
