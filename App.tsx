
import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { HowItWorks } from './components/HowItWorks';
import { ExampleDocs } from './components/ExampleDocs';
import { Features } from './components/Features';
import { Comparison } from './components/Comparison';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Pricing } from './components/Pricing';
import { SignupForm } from './components/SignupForm';
import { Footer } from './components/Footer';
import { BackgroundDots } from './components/BackgroundDots';
import { GitHubModal } from './components/GitHubModal';

const App: React.FC = () => {
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') as 'dark' | 'light' || 'dark';
    }
    return 'dark';
  });

  const [isGithubConnected, setIsGithubConnected] = useState(false);
  const [selectedRepo, setSelectedRepo] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(prev => prev === 'dark' ? 'light' : 'dark');

  const handleConnect = (repo: string) => {
    setSelectedRepo(repo);
    setIsGithubConnected(true);
    setIsModalOpen(false);
  };

  const handleDisconnect = () => {
    setIsGithubConnected(false);
    setSelectedRepo(null);
  };

  return (
    <div className="min-h-screen selection:bg-indigo-500/30 relative bg-zinc-50 dark:bg-[#0a0a0a] scroll-smooth transition-colors duration-300">
      {/* Background Layer */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-500/5 dark:bg-indigo-500/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-blue-500/5 dark:bg-blue-500/10 blur-[120px]" />
        <BackgroundDots count={300} theme={theme} />
      </div>
      
      <div className="relative z-10">
        <Navbar toggleTheme={toggleTheme} theme={theme} />
        <main>
          <Hero 
            theme={theme} 
            toggleTheme={toggleTheme} 
            isGithubConnected={isGithubConnected}
            selectedRepo={selectedRepo}
            onOpenConnect={() => setIsModalOpen(true)}
            onDisconnect={handleDisconnect}
          />
          <ExampleDocs 
            theme={theme} 
            isGithubConnected={isGithubConnected}
            selectedRepo={selectedRepo}
          />
          <HowItWorks />
          <Features />
          <Comparison />
          <Testimonials />
          <FAQ />
          <Pricing />
          <SignupForm />
        </main>
        <Footer />
      </div>

      {isModalOpen && (
        <GitHubModal 
          onClose={() => setIsModalOpen(false)} 
          onConnect={handleConnect}
        />
      )}
    </div>
  );
};

export default App;
