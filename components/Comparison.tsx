
import React from 'react';
import { motion } from 'motion/react';
import { Check, X, Sparkles, Zap, Shield, RefreshCw } from 'lucide-react';

export const Comparison: React.FC = () => {
  const categories = [
    {
      title: "AI Integration",
      icon: <Sparkles className="w-5 h-5 text-indigo-500" />,
      features: [
        { name: 'Search Engine', docugen: 'AI Semantic (Contextual)', competitors: 'Keyword Matching', status: 'ai' },
        { name: 'Navigation Engine', docugen: 'AI-Automated mapping', competitors: 'Manual folder structure', status: 'ai' }
      ]
    },
    {
      title: "Efficiency",
      icon: <Zap className="w-5 h-5 text-amber-500" />,
      features: [
        { name: 'Setup Time', docugen: 'Instant (< 10s)', competitors: 'Hours of configuration', status: 'win' },
        { name: 'Maintenance', docugen: 'Zero-config sync', competitors: 'Manual package updates', status: 'win' }
      ]
    },
    {
      title: "Customization",
      icon: <Shield className="w-5 h-5 text-emerald-500" />,
      features: [
        { name: 'Visual Sync', docugen: 'Dynamic Brand Sync', competitors: 'Limited UI presets', status: 'win' },
        { name: 'SEO Optimization', docugen: 'AI-Generated Meta Tags', competitors: 'Manual SEO config', status: 'ai' }
      ]
    }
  ];

  return (
    <section id="comparison" className="py-24 md:py-32 relative z-10 scroll-mt-24 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none opacity-20 dark:opacity-30">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 dark:text-indigo-400 text-[10px] font-black uppercase tracking-[0.2em] mb-6"
          >
            <RefreshCw className="w-3 h-3 animate-spin" style={{ animationDuration: '3s' }} />
            Competitive Analysis
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-zinc-900 dark:text-white leading-tight">
            Why engineers choose <span className="text-indigo-600 dark:text-indigo-400">DocuGen.</span>
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-lg md:text-xl leading-relaxed">
            Traditional tools like GitBook and Docusaurus require significant manual overhead. 
            We use AI to eliminate the "maintenance" part of documentation.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Headers for Large Screens */}
            <div className="hidden lg:flex lg:col-span-2 flex-col justify-end pb-8">
              <div className="space-y-2">
                <div className="text-xs font-black text-zinc-400 dark:text-zinc-500 uppercase tracking-widest pl-4 border-l-2 border-indigo-500">Key Differentiators</div>
                <p className="text-sm text-zinc-500 pl-4">Focus on velocity and scalability without sacrificing quality.</p>
              </div>
            </div>
            
            {/* Comparison Titles */}
            <div className="lg:col-span-3 grid grid-cols-2 gap-4 mb-4">
              <div className="p-4 md:p-6 rounded-3xl bg-indigo-600 text-white shadow-2xl shadow-indigo-600/20 flex flex-col justify-between items-center text-center">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] opacity-80 mb-2">The Winner</span>
                <span className="text-xl font-black">DocuGen AI</span>
              </div>
              <div className="p-4 md:p-6 rounded-3xl bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10 flex flex-col justify-between items-center text-center">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 mb-2">Industry Standard</span>
                <span className="text-xl font-bold text-zinc-600 dark:text-zinc-300">Competitors</span>
              </div>
            </div>

            {/* Feature Groups */}
            <div className="lg:col-span-5 space-y-12">
              {categories.map((category, catIdx) => (
                <motion.div
                  key={catIdx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: catIdx * 0.1 }}
                  className="space-y-4"
                >
                  <div className="flex items-center gap-3 mb-6 px-4">
                    {category.icon}
                    <h3 className="text-sm font-black uppercase tracking-widest text-zinc-900 dark:text-zinc-200">{category.title}</h3>
                  </div>

                  <div className="space-y-4">
                    {category.features.map((feature, featIdx) => (
                      <div 
                        key={featIdx} 
                        className="grid grid-cols-1 lg:grid-cols-5 gap-4 lg:gap-8 items-center bg-white dark:bg-zinc-900/40 border border-zinc-200 dark:border-white/5 p-4 rounded-[2rem] hover:shadow-xl hover:shadow-indigo-500/5 transition-all group"
                      >
                        <div className="lg:col-span-2">
                          <div className="text-sm font-bold text-zinc-900 dark:text-white mb-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors uppercase tracking-tight">{feature.name}</div>
                          <p className="text-[10px] uppercase font-black tracking-widest text-zinc-400 group-hover:text-zinc-500 transition-colors">Developer Velocity Impact</p>
                        </div>
                        
                        <div className="lg:col-span-3 grid grid-cols-2 gap-4">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-xl bg-indigo-500 text-white flex items-center justify-center shrink-0 shadow-lg shadow-indigo-500/20">
                              {feature.status === 'ai' ? <Sparkles className="w-4 h-4" /> : <Check className="w-4 h-4" />}
                            </div>
                            <span className="text-xs font-bold text-indigo-700 dark:text-indigo-300 truncate">{feature.docugen}</span>
                          </div>

                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-xl bg-zinc-200 dark:bg-white/10 text-zinc-400 dark:text-zinc-600 flex items-center justify-center shrink-0">
                               <X className="w-4 h-4" />
                            </div>
                            <span className="text-xs text-zinc-500 truncate">{feature.competitors}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-24 flex flex-col items-center gap-6">
          <div className="p-8 md:p-12 rounded-[3.5rem] bg-zinc-900 dark:bg-zinc-200 text-white dark:text-black w-full max-w-2xl relative overflow-hidden group shadow-2xl">
            {/* Glow effect */}
            <div className="absolute top-0 right-0 w-60 h-60 bg-indigo-500 opacity-20 blur-[80px] group-hover:opacity-40 transition-opacity" />
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="space-y-2">
                <div className="text-3xl font-black italic tracking-tighter">95% faster documentation.</div>
                <p className="text-sm opacity-60 font-medium">Stop wasting engineering time on manual maintenance.</p>
              </div>
              <button className="px-8 py-4 rounded-2xl bg-indigo-600 text-white text-[10px] font-black uppercase tracking-[0.2em] shadow-xl hover:bg-indigo-700 hover:scale-105 transition-all active:scale-95 shrink-0">
                Switch to DocuGen
              </button>
            </div>
          </div>
          <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.3em]">Institutional Grade Performance • 2024</p>
        </div>
      </div>
    </section>
  );
};
