
import React from 'react';

interface DocMockupProps {
  theme: 'dark' | 'light';
  toggleTheme: () => void;
}

export const DocMockup: React.FC<DocMockupProps> = ({ theme, toggleTheme }) => {
  const isDark = theme === 'dark';

  return (
    <div className={`rounded-2xl border ${isDark ? 'border-white/10 bg-zinc-900/50' : 'border-zinc-200 bg-white shadow-2xl'} p-2 glass overflow-hidden transition-colors duration-500`}>
      {/* Browser Bar */}
      <div className={`flex items-center justify-between px-4 py-3 border-b ${isDark ? 'border-white/5 bg-zinc-900/80' : 'border-zinc-100 bg-zinc-50'} transition-colors duration-500`}>
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/50" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
          <div className="w-3 h-3 rounded-full bg-green-500/50" />
        </div>
        
        <div className={`w-1/3 h-6 rounded-md ${isDark ? 'bg-white/5 text-zinc-500' : 'bg-zinc-200/50 text-zinc-400'} flex items-center justify-center text-[10px] font-mono transition-colors duration-500`}>
          docs.yourproject.com
        </div>

        <button 
          onClick={toggleTheme}
          className={`p-1.5 rounded-lg border ${isDark ? 'border-white/10 text-zinc-400 hover:bg-white/5' : 'border-zinc-200 text-zinc-500 hover:bg-zinc-100'} transition-all`}
          aria-label="Toggle Theme in Mockup"
        >
          {isDark ? (
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 9h-1m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
          ) : (
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
          )}
        </button>
      </div>
      
      {/* Content Area */}
      <div className="flex min-h-[400px] md:min-h-[500px]">
        {/* Sidebar */}
        <aside className={`hidden md:block w-64 border-r ${isDark ? 'border-white/5' : 'border-zinc-100'} p-6 text-left transition-colors duration-500`}>
          <div className={`font-semibold ${isDark ? 'text-zinc-500' : 'text-zinc-400'} mb-4 text-[10px] uppercase tracking-wider`}>Getting Started</div>
          <div className="space-y-3">
            <div className={`text-sm ${isDark ? 'text-indigo-400 font-medium' : 'text-indigo-600 font-bold'}`}>Introduction</div>
            <div className={`text-sm ${isDark ? 'text-zinc-500' : 'text-zinc-400'} hover:text-indigo-500 cursor-pointer`}>Quick Start</div>
            <div className={`text-sm ${isDark ? 'text-zinc-500' : 'text-zinc-400'} hover:text-indigo-500 cursor-pointer`}>Installation</div>
          </div>
          <div className={`font-semibold ${isDark ? 'text-zinc-500' : 'text-zinc-400'} mt-8 mb-4 text-[10px] uppercase tracking-wider`}>Core Features</div>
          <div className="space-y-3">
            <div className={`text-sm ${isDark ? 'text-zinc-500' : 'text-zinc-400'} hover:text-indigo-500 cursor-pointer`}>AI Search</div>
            <div className={`text-sm ${isDark ? 'text-zinc-500' : 'text-zinc-400'} hover:text-indigo-500 cursor-pointer`}>API Reference</div>
            <div className={`text-sm ${isDark ? 'text-zinc-500' : 'text-zinc-400'} hover:text-indigo-500 cursor-pointer`}>Custom Domains</div>
          </div>
        </aside>
        
        {/* Main Doc */}
        <div className={`flex-1 p-8 md:p-12 text-left ${isDark ? 'bg-transparent' : 'bg-white'} transition-colors duration-500`}>
          <div className="max-w-2xl">
            <div className={`font-semibold mb-2 text-sm ${isDark ? 'text-indigo-500' : 'text-indigo-600'}`}>Introduction</div>
            <h2 className={`text-3xl font-bold mb-6 ${isDark ? 'text-white' : 'text-zinc-900'}`}>Getting Started with DocuGen</h2>
            <p className={`mb-8 leading-relaxed ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
              DocuGen makes it incredibly easy to ship professional documentation without the manual overhead. Simply push your Markdown files and let our AI handle the navigation, styling, and search indexing.
            </p>
            
            <div className={`p-4 rounded-lg border font-mono text-sm mb-8 overflow-hidden transition-colors duration-500 ${isDark ? 'bg-black border-white/5' : 'bg-zinc-50 border-zinc-200'}`}>
              <div className="flex gap-2 mb-2">
                <span className="text-zinc-600">1</span>
                <span className={isDark ? 'text-indigo-400' : 'text-indigo-600'}>npx</span> <span className={isDark ? 'text-emerald-400' : 'text-emerald-600'}>docugen</span> deploy ./docs
              </div>
              <div className="flex gap-2">
                <span className="text-zinc-600">2</span>
                <span className="text-zinc-400"># Site deployed to: docs.yoursite.com</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className={`p-4 rounded-xl border transition-colors duration-500 ${isDark ? 'border-white/5 bg-white/5' : 'border-zinc-100 bg-zinc-50'}`}>
                <div className={`font-semibold mb-1 ${isDark ? 'text-white' : 'text-zinc-900'}`}>Fast Navigation</div>
                <div className="text-[10px] text-zinc-500">Automatically generated sidebar and breadcrumbs based on file structure.</div>
              </div>
              <div className={`p-4 rounded-xl border transition-colors duration-500 ${isDark ? 'border-white/5 bg-white/5' : 'border-zinc-100 bg-zinc-50'}`}>
                <div className={`font-semibold mb-1 ${isDark ? 'text-white' : 'text-zinc-900'}`}>AI Search</div>
                <div className="text-[10px] text-zinc-500">Semantic search that understands context, not just keywords.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
