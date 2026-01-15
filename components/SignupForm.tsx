
import React, { useState } from 'react';

export const SignupForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section id="signup" className="py-24 md:py-40 scroll-mt-24">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 text-zinc-900 dark:text-white">Ready to deploy?</h2>
        <p className="text-xl text-zinc-500 dark:text-zinc-500 mb-12 max-w-xl mx-auto">Join 5,000+ developers shipping beautiful documentation every day.</p>
        
        <div className="max-w-md mx-auto">
          {submitted ? (
            <div className="p-8 rounded-3xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-500 font-bold animate-in zoom-in-95 duration-500 shadow-xl">
              <div className="text-2xl mb-2">🎉</div>
              Thanks! We've added you to the list. Keep an eye on your inbox.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                required
                placeholder="developer@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl px-5 py-5 text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all hover:border-zinc-300 dark:hover:border-zinc-700 shadow-sm"
              />
              <button
                type="submit"
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-10 py-5 rounded-2xl transition-all shadow-xl shadow-indigo-600/20 hover:-translate-y-1 active:scale-95"
              >
                Join Now
              </button>
            </form>
          )}
          <p className="mt-6 text-zinc-400 dark:text-zinc-600 text-xs font-medium uppercase tracking-widest">No spam. Only major updates and beta invites.</p>
        </div>
      </div>
    </section>
  );
};
