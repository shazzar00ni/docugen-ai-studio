
import React, { useState } from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-zinc-200 dark:border-white/5">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left group transition-all"
      >
        <span className={`text-lg font-bold tracking-tight transition-colors ${isOpen ? 'text-indigo-600 dark:text-indigo-400' : 'text-zinc-900 dark:text-zinc-200 group-hover:text-zinc-600 dark:group-hover:text-white'}`}>
          {question}
        </span>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center border transition-all ${isOpen ? 'bg-indigo-600 border-indigo-600 text-white rotate-180' : 'border-zinc-200 dark:border-white/10 text-zinc-400 group-hover:border-zinc-400 dark:group-hover:border-zinc-600'}`}>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
        </div>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}>
        <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-2xl">
          {answer}
        </p>
      </div>
    </div>
  );
};

export const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "How does the AI semantic search work?",
      answer: "DocuGen doesn't just look for keywords. It uses vector embeddings to understand the intent behind a user's question. This means it can find answers even if the exact search term isn't in your documentation."
    },
    {
      question: "Can I connect my own custom domain?",
      answer: "Absolutely. You can link any domain or subdomain. We provide global edge delivery and automatic SSL certificate management via Let's Encrypt at no extra cost."
    },
    {
      question: "Which formats do you support?",
      answer: "We currently support standard Markdown (.md), MDX (.mdx), and plain text files. Our engine is optimized for common GitHub-flavored Markdown conventions."
    },
    {
      question: "Is there a limit on how many pages I can have?",
      answer: "During our beta period, there is no hard limit on the number of pages. We've tested repositories with over 2,000 files without any performance degradation."
    },
    {
      question: "How do I migrate from GitBook or Docusaurus?",
      answer: "Just point DocuGen to your existing docs folder. Since we use standard Markdown, you usually won't need to change a single line of your content."
    }
  ];

  return (
    <section id="faq" className="py-24 md:py-32 relative z-10 scroll-mt-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight text-zinc-900 dark:text-white">Got questions?</h2>
            <p className="text-zinc-600 dark:text-zinc-400">Everything you need to know about the platform and the beta program.</p>
          </div>
          
          <div className="bg-white/30 dark:bg-zinc-900/20 rounded-[2.5rem] p-8 md:p-12 border border-zinc-200 dark:border-white/5 shadow-sm">
            {faqs.map((faq, i) => (
              <FAQItem key={i} question={faq.question} answer={faq.answer} />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              Can't find what you're looking for? <a href="#" className="text-indigo-600 dark:text-indigo-400 font-bold hover:underline">Contact our support team</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
