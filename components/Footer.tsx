
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-zinc-200 dark:border-white/5 bg-zinc-100 dark:bg-zinc-950 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-zinc-800 dark:bg-zinc-700 rounded flex items-center justify-center font-bold text-white text-xs">
              D
            </div>
            <span className="font-bold text-zinc-900 dark:text-white">DocuGen</span>
          </div>
          
          <div className="flex gap-8 text-sm text-zinc-500">
            <a href="#" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Documentation</a>
            <a href="#" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Twitter</a>
            <a href="#" className="hover:text-zinc-900 dark:hover:text-white transition-colors">GitHub</a>
          </div>
          
          <div className="text-zinc-400 dark:text-zinc-600 text-xs">
            © {new Date().getFullYear()} DocuGen Labs. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
