
import React from 'react';

interface NavbarProps {
  toggleTheme: () => void;
  theme: 'dark' | 'light';
}

export const Navbar: React.FC<NavbarProps> = ({ toggleTheme, theme }) => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-zinc-200 dark:border-white/10 glass">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center font-bold text-white shadow-lg shadow-indigo-600/20">
            D
          </div>
          <span className="text-xl font-bold tracking-tight text-zinc-900 dark:text-white">DocuGen</span>
        </div>
        
        <div className="hidden md:flex items-center gap-6 text-xs font-bold uppercase tracking-widest text-zinc-500 dark:text-zinc-500">
          <a href="#live-demo" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Demo</a>
          <a href="#features" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Features</a>
          <a href="#comparison" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Comparison</a>
          <a href="#faq" className="hover:text-zinc-900 dark:hover:text-white transition-colors">FAQ</a>
          <a href="#pricing" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Pricing</a>
        </div>

        <div className="flex items-center gap-3">
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-xl border border-zinc-200 dark:border-white/10 text-zinc-500 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-white/5 transition-all"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 9h-1m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
            )}
          </button>
          <button className="hidden sm:block text-sm font-medium text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">Log in</button>
          <a href="#signup" className="bg-zinc-900 dark:bg-white text-white dark:text-black text-sm font-semibold px-4 py-2 rounded-full hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all active:scale-95 shadow-lg shadow-indigo-600/10 dark:shadow-white/5">
            Get Started
          </a>
        </div>
      </div>
    </nav>
  );
};
