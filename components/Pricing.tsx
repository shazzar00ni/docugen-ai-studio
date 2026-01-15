
import React from 'react';

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 md:py-32 bg-white/50 dark:bg-zinc-950/50 relative z-10 border-y border-zinc-200 dark:border-white/5 scroll-mt-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto p-12 md:p-16 rounded-[2.5rem] border border-zinc-200 dark:border-white/5 bg-white dark:bg-zinc-900/40 text-center glass relative overflow-hidden transition-all duration-500 ease-out hover:scale-[1.01] hover:border-indigo-500/30 hover:shadow-2xl dark:hover:shadow-indigo-500/5 cursor-default group shadow-sm">
          <div className="absolute top-0 right-0 p-8 text-6xl font-black text-indigo-500/5 rotate-12 transition-transform duration-700 group-hover:rotate-6 group-hover:scale-110">FREE BETA</div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight text-zinc-900 dark:text-white">Simple Pricing. <br /> Coming Soon.</h2>
          <p className="text-zinc-600 dark:text-zinc-400 mb-10 max-w-md mx-auto">During our early access beta, DocuGen is 100% free to use. Join now to lock in early adopter benefits.</p>
          
          <div className="inline-block p-6 rounded-2xl bg-zinc-50 dark:bg-white/5 border border-zinc-200 dark:border-white/10 mb-10 text-left w-full max-w-sm transition-colors duration-500 group-hover:border-indigo-200 dark:group-hover:border-white/20">
            <div className="flex items-center justify-between mb-4">
              <span className="font-bold text-zinc-900 dark:text-white">Beta Program</span>
              <span className="text-indigo-600 dark:text-indigo-400 font-mono text-xs">$0 / mo</span>
            </div>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                <svg className="w-4 h-4 text-emerald-500" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" /></svg>
                Unlimited Public Projects
              </li>
              <li className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                <svg className="w-4 h-4 text-emerald-500" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" /></svg>
                AI Structure Generation
              </li>
              <li className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                <svg className="w-4 h-4 text-emerald-500" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" /></svg>
                Global CDN Hosting
              </li>
            </ul>
          </div>
          
          <div>
            <a href="#signup" className="inline-block bg-zinc-900 dark:bg-white text-white dark:text-black px-10 py-4 rounded-2xl font-bold hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all transform active:scale-95 shadow-lg shadow-black/5 dark:shadow-white/10">
              Join the Beta Waitlist
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
