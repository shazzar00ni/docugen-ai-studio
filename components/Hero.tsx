
import React from 'react';
import { DocMockup } from './DocMockup';

interface HeroProps {
  theme: 'dark' | 'light';
  toggleTheme: () => void;
  isGithubConnected: boolean;
  selectedRepo: string | null;
  onOpenConnect: () => void;
  onDisconnect: () => void;
}

export const Hero: React.FC<HeroProps> = ({ 
  theme, 
  toggleTheme, 
  isGithubConnected, 
  selectedRepo, 
  onOpenConnect,
  onDisconnect 
}) => {
  return (
    <section className="relative pt-12 pb-16 md:pt-24 md:pb-32 overflow-hidden">
      <div className="container mx-auto px-4 text-center">
        {isGithubConnected ? (
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-600 dark:text-emerald-400 text-xs font-bold mb-8 animate-in fade-in duration-700 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Live Sync: {selectedRepo}
          </div>
        ) : (
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-500/20 bg-indigo-500/5 text-indigo-600 dark:text-indigo-400 text-xs font-bold mb-8 animate-in fade-in duration-700 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            Public Beta Now Available
          </div>
        )}
        
        <h1 className="text-4xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.15] animate-in slide-in-from-top-4 fade-in duration-700 text-zinc-900 dark:text-white">
          Transform Markdown into <br />
          <span className="gradient-text">Beautiful Documentation.</span>
        </h1>
        
        <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto mb-12 leading-relaxed animate-in slide-in-from-top-6 fade-in duration-1000">
          The instant site generator for developers. Upload your Markdown or MDX files, and our AI organizes, styles, and deploys them to a lightning-fast static site in seconds.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20 animate-in slide-in-from-bottom-4 fade-in duration-1000">
          {isGithubConnected ? (
            <button 
              onClick={onDisconnect}
              className="w-full sm:w-auto px-8 py-4 bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400 rounded-2xl font-bold text-base transition-all transform hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-3 group"
            >
              <svg className="w-5 h-5 shrink-0 opacity-50 group-hover:opacity-100 transition-opacity" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.341-3.369-1.341-.454-1.152-1.11-1.459-1.11-1.459-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.747-1.026 2.747-1.026.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12c0-5.523-4.477-10-10-10z"/></svg>
              Disconnect {selectedRepo?.split('/')[1]}
            </button>
          ) : (
            <button 
              onClick={onOpenConnect}
              className="w-full sm:w-auto px-8 py-4 bg-zinc-900 dark:bg-white text-white dark:text-black rounded-2xl font-bold text-base shadow-2xl transition-all transform hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-3"
            >
              <svg className="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.341-3.369-1.341-.454-1.152-1.11-1.459-1.11-1.459-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.747-1.026 2.747-1.026.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12c0-5.523-4.477-10-10-10z"/></svg>
              Connect GitHub Repository
            </button>
          )}
          <a 
            href="#live-demo" 
            className="w-full sm:w-auto px-8 py-4 border border-zinc-200 dark:border-zinc-700 hover:border-zinc-400 dark:hover:border-zinc-500 text-zinc-900 dark:text-white rounded-2xl font-bold text-base transition-all transform hover:-translate-y-1 active:scale-95 glass flex items-center justify-center gap-3 shadow-sm"
          >
            <svg className="w-5 h-5 text-indigo-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
            View Live Demo
          </a>
        </div>

        <div className="relative mx-auto max-w-5xl px-4 animate-in fade-in slide-in-from-bottom-10 duration-1000">
          <DocMockup theme={theme} toggleTheme={toggleTheme} />
        </div>
      </div>
    </section>
  );
};
