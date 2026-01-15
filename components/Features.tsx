
import React from 'react';

export const Features: React.FC = () => {
  const features = [
    {
      title: 'MDX Support',
      description: 'Use React components inside your documentation for interactive examples.',
      icon: '⚛️'
    },
    {
      title: 'Auto-Navigation',
      description: 'AI-generated sidebar that maps perfectly to your project structure.',
      icon: '🗺️'
    },
    {
      title: 'Instant Search',
      description: 'Fast, semantic search indexing so users find answers in milliseconds.',
      icon: '🔍'
    },
    {
      title: 'Syntax Highlighting',
      description: 'Built-in support for 100+ programming languages out of the box.',
      icon: '💻'
    },
    {
      title: 'Custom Domains',
      description: 'Link your own domain with automatic SSL and global CDN.',
      icon: '🌐'
    },
    {
      title: 'No Lock-in',
      description: 'Export your documentation as standard static HTML at any time.',
      icon: '🔓'
    }
  ];

  return (
    <section id="features" className="py-24 md:py-32 relative z-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 items-end mb-20">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight text-zinc-900 dark:text-white">Built for modern <br /> developers.</h2>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">DocuGen isn't just a static generator. It's a fully automated workflow that treats documentation like high-quality code.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div 
              key={i} 
              className="p-8 rounded-3xl border border-zinc-200 dark:border-white/5 bg-white dark:bg-zinc-900/30 glass group transition-all duration-500 ease-out hover:scale-[1.03] hover:-translate-y-2 hover:border-indigo-500/40 hover:shadow-2xl dark:hover:shadow-indigo-500/10 cursor-default shadow-sm"
            >
              <div className="text-3xl mb-4 grayscale group-hover:grayscale-0 transition-all duration-300">{f.icon}</div>
              <h3 className="text-lg font-bold mb-2 text-zinc-900 dark:text-white">{f.title}</h3>
              <p className="text-zinc-500 dark:text-zinc-500 text-sm leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
