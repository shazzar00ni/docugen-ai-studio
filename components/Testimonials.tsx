
import React from 'react';

export const Testimonials: React.FC = () => {
  const reviews = [
    {
      name: 'Sarah Chen',
      role: 'Lead Developer at CloudScale',
      content: 'DocuGen saved us weeks of design and infrastructure work. We just pointed it at our READMEs and had a beautiful docs site in minutes. Truly magical.',
      avatar: 'SC'
    },
    {
      name: 'Marcus Thorne',
      role: 'CTO at DevStream',
      content: 'The AI search is a game changer. Our users are actually finding answers without opening support tickets. It understands context, not just keywords.',
      avatar: 'MT'
    },
    {
      name: 'Alex Rivera',
      role: 'Independent Software Engineer',
      content: 'Clean, fast, and zero complex configuration. It’s the documentation tool I’ve been waiting for. No lock-in, just pure static performance.',
      avatar: 'AR'
    }
  ];

  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight text-zinc-900 dark:text-white">Loved by developers.</h2>
          <p className="text-zinc-600 dark:text-zinc-500 max-w-xl mx-auto">See why engineering teams are switching to DocuGen for their project documentation.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reviews.map((review, i) => (
            <div 
              key={i} 
              className="p-8 rounded-[2rem] border border-zinc-200 dark:border-white/5 bg-white dark:bg-zinc-900/20 glass flex flex-col justify-between transition-all duration-500 ease-out hover:scale-[1.03] hover:-translate-y-2 hover:border-indigo-500/40 hover:shadow-2xl dark:hover:shadow-indigo-500/10 cursor-default shadow-sm"
            >
              <div>
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-indigo-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed mb-8 italic">"{review.content}"</p>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-600/20 border border-indigo-200 dark:border-indigo-500/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400 font-bold text-xs">
                  {review.avatar}
                </div>
                <div>
                  <div className="text-zinc-900 dark:text-white font-semibold text-sm">{review.name}</div>
                  <div className="text-zinc-500 text-xs">{review.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
