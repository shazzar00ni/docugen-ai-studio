
import React from 'react';
import { motion } from 'motion/react';
import { Check, Zap, Shield, Globe, Users, Box } from 'lucide-react';

export const Pricing: React.FC = () => {
  const tiers = [
    {
      name: 'Hobby',
      price: '0',
      description: 'Ideal for early-stage side projects and OSS documentation.',
      features: [
        '3 Public Projects',
        'AI Basic Structure',
        'docugen.io subdomain',
        'Markdown & MDX support',
        'Community support',
      ],
      icon: <Box className="w-6 h-6" />,
      cta: 'Start for free',
      highlight: false
    },
    {
      name: 'Pro',
      price: '19',
      description: 'For power users and teams who need professional tooling.',
      features: [
        'Unlimited Public & Private Projects',
        'AI Semantic Search (RAG)',
        'Custom Domains + SSL',
        'Version Control & History',
        'Priority Slack Support',
        'Team Collaboration (up to 5)',
      ],
      icon: <Zap className="w-6 h-6" />,
      cta: 'Get Started with Pro',
      highlight: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'Advanced security, compliance, and custom infrastructure.',
      features: [
        'SSO & SAML Authentication',
        'VPC / On-prem Deployment',
        'White-label Experience',
        'Dedicated Support Engineer',
        'Custom SLA & Legal review',
        'Audit Logs & Compliance',
      ],
      icon: <Shield className="w-6 h-6" />,
      cta: 'Contact Sales',
      highlight: false
    }
  ];

  return (
    <section id="pricing" className="py-24 md:py-32 bg-white/50 dark:bg-zinc-950/50 relative z-10 border-y border-zinc-200 dark:border-white/5 scroll-mt-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 md:mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-zinc-900 dark:text-white"
          >
            Predictable Scaling.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto"
          >
            Start for free and scale as your documentation needs grow. No hidden fees or surprise overages.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative flex flex-col p-8 rounded-[2.5rem] border ${
                tier.highlight 
                  ? 'border-green-500/50 bg-green-500/[0.02] dark:bg-green-500/[0.05] shadow-2xl shadow-green-500/10' 
                  : 'border-zinc-200 dark:border-white/10 bg-white dark:bg-zinc-900/40'
              } glass transition-all duration-300 hover:border-green-500/30 group`}
            >
              {tier.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-green-600 text-white text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 ${
                  tier.highlight ? 'bg-green-600 text-white shadow-lg shadow-green-600/20' : 'bg-zinc-100 dark:bg-white/5 text-zinc-500 dark:text-zinc-400'
                }`}>
                  {tier.icon}
                </div>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">{tier.name}</h3>
                <div className="flex items-baseline gap-1 mb-4">
                  {tier.price !== 'Custom' && <span className="text-sm font-bold text-zinc-500">$</span>}
                  <span className="text-4xl font-bold text-zinc-900 dark:text-white tracking-tight">{tier.price}</span>
                  {tier.price !== 'Custom' && <span className="text-xs text-zinc-500 font-medium">/mo</span>}
                </div>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed min-h-[40px]">
                  {tier.description}
                </p>
              </div>

              <div className="space-y-4 mb-10 flex-1">
                {tier.features.map((feature) => (
                  <div key={feature} className="flex gap-3 items-start group/feat">
                    <div className="mt-1 w-4 h-4 rounded-full bg-green-500/10 flex items-center justify-center shrink-0 border border-green-500/20">
                      <Check className="w-2.5 h-2.5 text-green-600 dark:text-green-400" />
                    </div>
                    <span className="text-xs text-zinc-600 dark:text-zinc-400 group-hover/feat:text-zinc-900 dark:group-hover/feat:text-zinc-200 transition-colors">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <a
                href="#signup"
                className={`w-full py-4 rounded-2xl font-bold text-sm transition-all transform active:scale-[0.98] text-center shadow-lg ${
                  tier.highlight
                    ? 'bg-green-600 text-white hover:bg-green-700 shadow-green-600/20'
                    : 'bg-zinc-900 dark:bg-white text-white dark:text-black hover:opacity-90'
                }`}
              >
                {tier.cta}
              </a>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-xs text-zinc-500 dark:text-zinc-500 mb-6 font-medium">
            Trusted by developers from high-growth engineering teams
          </p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-30 dark:opacity-20 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Using text for logos for now as per instructions to avoid mocks, 
                but styling them to look like wordmarks */}
            <span className="text-sm font-black tracking-tighter">Vercel</span>
            <span className="text-sm font-black tracking-tighter">Stripe</span>
            <span className="text-sm font-black tracking-tighter">GitHub</span>
            <span className="text-sm font-black tracking-tighter">Supabase</span>
            <span className="text-sm font-black tracking-tighter">Linear</span>
          </div>
        </div>
      </div>
    </section>
  );
};
