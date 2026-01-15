
import React from 'react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Upload Docs',
      description: 'Drag and drop your Markdown, MDX, or README files. Or point us to a local directory.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
        </svg>
      )
    },
    {
      number: '02',
      title: 'AI Transformation',
      description: 'Our AI analyzes your content, builds a logical navigation structure, and optimizes readability.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      number: '03',
      title: 'Instant Publish',
      description: 'Your documentation is deployed to a globally distributed edge network with a custom domain.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      )
    }
  ];

  return (
    <section id="how-it-works" className="py-24 md:py-32 bg-white/50 dark:bg-zinc-950/50 relative z-10 border-y border-zinc-200 dark:border-white/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight text-zinc-900 dark:text-white">Ship docs in record time.</h2>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto">Focus on writing code and documentation. We'll handle the infrastructure, styling, and search indexing.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {steps.map((step, idx) => (
            <div 
              key={idx} 
              className="relative p-8 rounded-3xl border border-zinc-200 dark:border-white/5 bg-white dark:bg-zinc-900/30 transition-all duration-500 ease-out hover:scale-[1.03] hover:-translate-y-2 hover:border-indigo-500/40 hover:shadow-2xl hover:shadow-indigo-500/10 dark:hover:shadow-indigo-500/10 cursor-default group"
            >
              <div className="text-6xl font-black text-zinc-100 dark:text-zinc-800/50 absolute top-4 right-8 group-hover:text-indigo-500/10 transition-colors">
                {step.number}
              </div>
              <div className="w-12 h-12 rounded-2xl bg-indigo-600/10 text-indigo-600 dark:text-indigo-500 flex items-center justify-center mb-6">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-zinc-900 dark:text-white">{step.title}</h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
