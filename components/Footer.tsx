
import React from 'react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { name: 'Features', href: '#features' },
      { name: 'Pricing', href: '#pricing' },
      { name: 'Live Demo', href: '#live-demo' },
      { name: 'Comparison', href: '#comparison' },
    ],
    resources: [
      { name: 'Documentation', href: '#live-demo' },
      { name: 'FAQ', href: '#faq' },
      { name: 'Community', href: 'https://github.com' },
      { name: 'Guides', href: '#how-it-works' },
    ],
    company: [
      { name: 'About', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Twitter', href: 'https://twitter.com' },
      { name: 'GitHub', href: 'https://github.com' },
    ],
    legal: [
      { name: 'Privacy', href: '#' },
      { name: 'Terms', href: '#' },
      { name: 'Security', href: '#' },
    ],
  };

  return (
    <footer className="pt-24 pb-12 border-t border-zinc-200 dark:border-white/5 bg-zinc-100 dark:bg-zinc-950 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-12 mb-16">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center font-bold text-white shadow-lg shadow-indigo-600/20">
                D
              </div>
              <span className="text-xl font-bold tracking-tight text-zinc-900 dark:text-white">DocuGen</span>
            </div>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 max-w-xs leading-relaxed">
              Empowering developers to ship beautiful, accessible, and high-performance documentation sites instantly with AI.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-xs uppercase tracking-widest text-zinc-900 dark:text-white mb-6">Product</h4>
            <ul className="space-y-4">
              {footerLinks.product.map(link => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-zinc-500 dark:text-zinc-400 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-xs uppercase tracking-widest text-zinc-900 dark:text-white mb-6">Resources</h4>
            <ul className="space-y-4">
              {footerLinks.resources.map(link => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-zinc-500 dark:text-zinc-400 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-xs uppercase tracking-widest text-zinc-900 dark:text-white mb-6">Company</h4>
            <ul className="space-y-4">
              {footerLinks.company.map(link => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-zinc-500 dark:text-zinc-400 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-zinc-200 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-6">
            <span className="text-zinc-400 dark:text-zinc-600 text-xs">
              © {currentYear} DocuGen Labs Inc.
            </span>
            <div className="flex gap-4">
              {footerLinks.legal.map(link => (
                <a key={link.name} href={link.href} className="text-xs text-zinc-400 dark:text-zinc-600 hover:text-zinc-900 dark:hover:text-white transition-colors">{link.name}</a>
              ))}
            </div>
          </div>
          
          <div className="flex items-center gap-4">
             <a href="https://github.com" className="w-8 h-8 rounded-full border border-zinc-200 dark:border-white/10 flex items-center justify-center text-zinc-500 dark:text-zinc-400 hover:bg-white dark:hover:bg-white/5 transition-all">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.298 24 12c0-6.627-5.373-12-12-12" /></svg>
             </a>
             <a href="https://twitter.com" className="w-8 h-8 rounded-full border border-zinc-200 dark:border-white/10 flex items-center justify-center text-zinc-500 dark:text-zinc-400 hover:bg-white dark:hover:bg-white/5 transition-all">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
             </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
