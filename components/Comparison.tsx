
import React from 'react';

export const Comparison: React.FC = () => {
  const features = [
    { 
      name: 'Search Engine', 
      docugen: 'AI Semantic (Contextual)', 
      gitbook: 'Keyword Matching', 
      docusaurus: 'Keyword Matching (Algolia)' 
    },
    { 
      name: 'Setup Time', 
      docugen: 'Instant (Seconds)', 
      gitbook: 'Minutes', 
      docusaurus: 'Hours (Build required)' 
    },
    { 
      name: 'Navigation', 
      docugen: 'AI-Automated mapping', 
      gitbook: 'Manual folder structure', 
      docusaurus: 'Config-based' 
    },
    { 
      name: 'Styling', 
      docugen: 'Dynamic Brand Sync', 
      gitbook: 'Limited UI presets', 
      docusaurus: 'CSS-heavy (Manual)' 
    },
    { 
      name: 'Maintenance', 
      docugen: 'Zero-config sync', 
      gitbook: 'Manual UI updates', 
      docusaurus: 'Regular package updates' 
    }
  ];

  return (
    <section id="comparison" className="py-24 md:py-32 relative z-10 scroll-mt-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight text-zinc-900 dark:text-white">How we compare.</h2>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto">Traditional tools require manual overhead. DocuGen uses AI to eliminate the "maintenance" part of documentation.</p>
        </div>

        <div className="max-w-4xl mx-auto overflow-x-auto">
          <table className="w-full text-left border-collapse rounded-[2rem] overflow-hidden shadow-2xl shadow-indigo-500/5 border border-zinc-200 dark:border-white/5">
            <thead>
              <tr className="bg-white dark:bg-zinc-900/60 border-b border-zinc-200 dark:border-white/5">
                <th className="p-6 md:p-8 text-sm font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest">Feature</th>
                <th className="p-6 md:p-8 text-sm font-bold text-indigo-600 dark:text-indigo-400">DocuGen AI</th>
                <th className="p-6 md:p-8 text-sm font-bold text-zinc-900 dark:text-white">GitBook</th>
                <th className="p-6 md:p-8 text-sm font-bold text-zinc-900 dark:text-white">Docusaurus</th>
              </tr>
            </thead>
            <tbody className="bg-white/50 dark:bg-zinc-950/20 backdrop-blur-sm">
              {features.map((feature, idx) => (
                <tr key={idx} className="border-b border-zinc-100 dark:border-white/5 last:border-0 hover:bg-zinc-50 dark:hover:bg-white/5 transition-colors">
                  <td className="p-6 md:p-8 text-sm font-bold text-zinc-900 dark:text-white">{feature.name}</td>
                  <td className="p-6 md:p-8 text-sm">
                    <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-bold">
                      <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" /></svg>
                      {feature.docugen}
                    </div>
                  </td>
                  <td className="p-6 md:p-8 text-sm text-zinc-500 dark:text-zinc-400">{feature.gitbook}</td>
                  <td className="p-6 md:p-8 text-sm text-zinc-500 dark:text-zinc-400">{feature.docusaurus}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.2em]">Based on internal developer workflow benchmarks (2024)</p>
        </div>
      </div>
    </section>
  );
};
