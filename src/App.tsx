import { motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-gray-100 font-sans selection:bg-blue-500/30">
      <Header />
      
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Timeline />
        <Contact />
      </main>
      
      <footer className="py-16 text-center border-t border-zinc-900/50 bg-zinc-950">
        <div className="flex justify-center space-x-6 mb-6">
          <motion.div 
            animate={{ scale: [1, 1.2, 1] }} 
            transition={{ repeat: Infinity, duration: 3 }}
            className="w-1.5 h-1.5 bg-blue-500 rounded-full" 
          />
          <motion.div 
            animate={{ scale: [1, 1.2, 1] }} 
            transition={{ repeat: Infinity, duration: 3, delay: 0.5 }}
            className="w-1.5 h-1.5 bg-purple-500 rounded-full" 
          />
          <motion.div 
            animate={{ scale: [1, 1.2, 1] }} 
            transition={{ repeat: Infinity, duration: 3, delay: 1 }}
            className="w-1.5 h-1.5 bg-emerald-500 rounded-full" 
          />
        </div>
        <p className="text-gray-500 text-sm mb-1 font-medium tracking-tight">Portfolio.AI — 2026</p>
        <p className="text-gray-700 text-[10px] uppercase tracking-[0.2em] font-bold">Innovation Driven by Artificial Intelligence</p>
      </footer>
    </div>
  );
}

export default App;
