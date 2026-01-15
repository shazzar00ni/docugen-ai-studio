
import React, { useState } from 'react';

interface GitHubModalProps {
  onClose: () => void;
  onConnect: (repo: string) => void;
}

export const GitHubModal: React.FC<GitHubModalProps> = ({ onClose, onConnect }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSyncing, setIsSyncing] = useState<string | null>(null);

  const repos = [
    { name: 'facebook/react', stars: '215k', language: 'TypeScript' },
    { name: 'vercel/next.js', stars: '112k', language: 'JavaScript' },
    { name: 'tailwindlabs/tailwindcss', stars: '74k', language: 'CSS' },
    { name: 'google/genai', stars: '2.5k', language: 'TypeScript' },
    { name: 'your-username/project-docs', stars: '12', language: 'Markdown' },
  ];

  const filteredRepos = repos.filter(r => r.name.toLowerCase().includes(searchQuery.toLowerCase()));

  const handleSelect = (repo: string) => {
    setIsSyncing(repo);
    // Simulate API connection time
    setTimeout(() => {
      onConnect(repo);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300" onClick={onClose} />
      
      <div className="relative w-full max-w-lg bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-white/10 shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
        <div className="p-6 border-b border-zinc-100 dark:border-white/5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-zinc-900 dark:bg-white flex items-center justify-center text-white dark:text-black">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.341-3.369-1.341-.454-1.152-1.11-1.459-1.11-1.459-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.747-1.026 2.747-1.026.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12c0-5.523-4.477-10-10-10z"/></svg>
            </div>
            <div>
              <h3 className="font-bold text-lg text-zinc-900 dark:text-white leading-tight">Connect Repository</h3>
              <p className="text-xs text-zinc-500">Select a repository to start syncing.</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-zinc-100 dark:hover:bg-white/5 rounded-full transition-colors">
            <svg className="w-5 h-5 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>

        <div className="p-6">
          <div className="relative mb-6">
            <input 
              type="text" 
              placeholder="Search your repositories..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-zinc-100 dark:bg-black/40 border border-zinc-200 dark:border-white/10 rounded-2xl px-12 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all shadow-inner"
            />
            <svg className="w-5 h-5 text-zinc-400 absolute left-4 top-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </div>

          <div className="space-y-2 max-h-[300px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-zinc-200 dark:scrollbar-thumb-zinc-800">
            {filteredRepos.length > 0 ? filteredRepos.map((repo) => (
              <button
                key={repo.name}
                disabled={!!isSyncing}
                onClick={() => handleSelect(repo.name)}
                className={`w-full text-left p-4 rounded-2xl border border-zinc-100 dark:border-white/5 hover:bg-zinc-50 dark:hover:bg-white/5 transition-all flex items-center justify-between group ${isSyncing === repo.name ? 'bg-indigo-500/10 border-indigo-500/30' : ''}`}
              >
                <div className="flex items-center gap-3">
                  <svg className={`w-5 h-5 ${isSyncing === repo.name ? 'text-indigo-500' : 'text-zinc-400 group-hover:text-zinc-600 dark:group-hover:text-zinc-300'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" /></svg>
                  <div>
                    <div className="text-sm font-bold text-zinc-900 dark:text-white">{repo.name}</div>
                    <div className="text-[10px] text-zinc-500 flex items-center gap-2">
                      <span className="flex items-center gap-1">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                        {repo.stars}
                      </span>
                      <span>•</span>
                      <span>{repo.language}</span>
                    </div>
                  </div>
                </div>
                {isSyncing === repo.name ? (
                  <div className="w-5 h-5 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin" />
                ) : (
                  <svg className="w-5 h-5 text-zinc-300 opacity-0 group-hover:opacity-100 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                )}
              </button>
            )) : (
              <div className="text-center py-12">
                <p className="text-zinc-500 text-sm">No repositories found matching your search.</p>
              </div>
            )}
          </div>
        </div>

        <div className="p-6 bg-zinc-50 dark:bg-black/20 border-t border-zinc-100 dark:border-white/5 text-center">
          <p className="text-[10px] text-zinc-500 font-medium uppercase tracking-widest">
            Secured by DocuGen GitHub App integration
          </p>
        </div>
      </div>
    </div>
  );
};
