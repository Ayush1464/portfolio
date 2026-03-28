import { useEffect, useState } from 'react';
import LoadingScreen from './app/components/LoadingScreen';
import ThemeToggle from './app/components/ThemeToggle';
import Hero from './app/components/Hero';
import About from './app/components/About';
import Skills from './app/components/Skills';
import Projects from './app/components/Projects';
import Experience from './app/components/Experience';
import Contact from './app/components/Contact';
import Footer from './app/components/Footer';
import { ThemeProvider } from './app/components/context/ThemeContext';
import { ToastProvider } from './app/components/ui/toast';


export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Smooth scrolling
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Loading animation
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <ThemeProvider>
      <ToastProvider>

      <div className="relative bg-[var(--app-bg)] text-[var(--app-text)] overflow-x-hidden transition-colors duration-300">
        {/* Background noise texture */}
        <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-0">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')]"></div>
        </div>

        {/* Gradient orbs */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-1/4 left-1/3 w-[450px] h-[450px] bg-pink-500/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        {/* <ThemeToggle /> */}

        <div className="relative z-10">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
          <Footer />
        </div>
      </div>
      </ToastProvider>
    </ThemeProvider>
  );
}