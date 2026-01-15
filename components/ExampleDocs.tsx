
import React, { useState, useMemo, useEffect } from 'react';

type DocPage = 
  | 'introduction' 
  | 'installation' 
  | 'configuration' 
  | 'ai-search' 
  | 'security' 
  | 'performance' 
  | 'integrations' 
  | 'deployment' 
  | 'analytics' 
  | 'versioning' 
  | 'seo' 
  | 'customization' 
  | 'api-reference';

interface ExampleDocsProps {
  theme: 'dark' | 'light';
  isGithubConnected?: boolean;
  selectedRepo?: string | null;
}

const DesignCustomizer: React.FC = () => {
  const [primaryColor, setPrimaryColor] = useState('#6366f1');
  const [fontFamily, setFontFamily] = useState('Inter');

  const colors = [
    { name: 'Indigo', hex: '#6366f1' },
    { name: 'Rose', hex: '#f43f5e' },
    { name: 'Emerald', hex: '#10b981' },
    { name: 'Amber', hex: '#f59e0b' },
    { name: 'Blue', hex: '#3b82f6' },
  ];

  const fonts = [
    { name: 'Sans (Inter)', value: 'Inter, sans-serif' },
    { name: 'Mono (JetBrains)', value: "'JetBrains Mono', monospace" },
    { name: 'Serif', value: 'ui-serif, Georgia, serif' },
    { name: 'System', value: 'system-ui, sans-serif' },
  ];

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-500">
      <p className="text-zinc-600 dark:text-zinc-400">
        Inject custom CSS or use our intuitive theme editor to match your documentation to your product's visual identity.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Controls */}
        <div className="space-y-6 p-6 rounded-2xl border border-zinc-200 dark:border-white/10 bg-white dark:bg-zinc-900/50">
          <div>
            <label className="block text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-4">Primary Brand Color</label>
            <div className="flex flex-wrap gap-3 mb-4">
              {colors.map((c) => (
                <button
                  key={c.hex}
                  onClick={() => setPrimaryColor(c.hex)}
                  className={`w-10 h-10 rounded-full transition-all transform active:scale-90 ${primaryColor === c.hex ? 'ring-4 ring-offset-2 ring-indigo-500/20 dark:ring-offset-zinc-900' : ''}`}
                  style={{ backgroundColor: c.hex }}
                  title={c.name}
                />
              ))}
              <div className="relative group">
                <input 
                  type="color" 
                  value={primaryColor}
                  onChange={(e) => setPrimaryColor(e.target.value)}
                  className="w-10 h-10 rounded-full border-none bg-zinc-200 dark:bg-zinc-800 cursor-pointer overflow-hidden opacity-0 absolute inset-0 z-10"
                />
                <div className="w-10 h-10 rounded-full border-2 border-dashed border-zinc-300 dark:border-zinc-700 flex items-center justify-center text-zinc-400 group-hover:border-zinc-500 transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-zinc-500">HEX:</span>
              <input 
                type="text" 
                value={primaryColor}
                onChange={(e) => setPrimaryColor(e.target.value)}
                className="bg-zinc-100 dark:bg-black/40 border border-zinc-200 dark:border-white/10 rounded-lg px-3 py-1.5 text-xs font-mono text-zinc-900 dark:text-zinc-300 w-24 focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-4">Typography</label>
            <select 
              value={fontFamily}
              onChange={(e) => setFontFamily(e.target.value)}
              className="w-full bg-zinc-100 dark:bg-black/40 border border-zinc-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm text-zinc-900 dark:text-zinc-300 focus:outline-none transition-all cursor-pointer"
            >
              {fonts.map((f) => (
                <option key={f.name} value={f.value}>{f.name}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Live Preview Card */}
        <div className="rounded-2xl border border-zinc-200 dark:border-white/10 bg-white dark:bg-zinc-950 overflow-hidden shadow-2xl relative">
          <div className="absolute top-0 right-0 p-3">
             <span className="text-[10px] font-bold px-2 py-1 bg-zinc-100 dark:bg-white/5 text-zinc-400 rounded-md uppercase">Live Preview</span>
          </div>
          <div className="p-8 space-y-4" style={{ fontFamily }}>
            <div className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: primaryColor }}>Getting Started</div>
            <h3 className="text-2xl font-bold text-zinc-900 dark:text-white leading-tight">Your Documentation. <br /> Your Brand.</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              This is how your headings and accents will look. Every element is carefully balanced for readability and aesthetics.
            </p>
            <div className="flex gap-3 pt-4">
              <button className="px-5 py-2 rounded-lg text-white text-xs font-bold shadow-lg transition-transform active:scale-95" style={{ backgroundColor: primaryColor }}>
                Primary Action
              </button>
              <button className="px-5 py-2 rounded-lg border border-zinc-200 dark:border-white/10 text-zinc-600 dark:text-zinc-400 text-xs font-bold transition-colors hover:bg-zinc-50 dark:hover:bg-white/5">
                Outline
              </button>
            </div>
          </div>
          
          <div className="p-6 bg-zinc-50 dark:bg-black/40 border-t border-zinc-100 dark:border-white/5">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: primaryColor }}></div>
              <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Active Link Style</span>
            </div>
            <div className="h-8 w-3/4 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 flex items-center px-3">
               <div className="w-full h-1 rounded-full opacity-20" style={{ backgroundColor: primaryColor }}></div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 rounded-2xl bg-zinc-950 text-emerald-400 font-mono text-xs overflow-hidden shadow-2xl border border-white/5 relative">
        <div className="absolute top-2 right-4 text-zinc-600 font-bold tracking-tighter">config.json</div>
        <div className="mb-2 text-zinc-600">/* Auto-generated configuration */</div>
        <div>&#123;</div>
        <div className="pl-4">"theme": &#123;</div>
        <div className="pl-8">"primary": <span className="text-pink-400">"{primaryColor}"</span>,</div>
        <div className="pl-8">"fontFamily": <span className="text-pink-400">"{fontFamily.split(',')[0]}"</span></div>
        <div className="pl-4">&#125;</div>
        <div>&#125;</div>
      </div>
    </div>
  );
};

const InteractiveAPI: React.FC = () => {
  const [method, setMethod] = useState('GET');
  const [endpoint, setEndpoint] = useState('/v1/auth/session');
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState<any>(null);

  const handleExecute = () => {
    setIsLoading(true);
    setResponse(null);
    setTimeout(() => {
      setIsLoading(false);
      setResponse({
        id: "user_" + Math.floor(Math.random() * 10000),
        status: "active",
        timestamp: new Date().toISOString(),
        permissions: ["read", "write"],
        token: "Bearer ••••••••••••••••"
      });
    }, 800);
  };

  return (
    <div className="space-y-6">
      <p className="text-zinc-600 dark:text-zinc-400">
        Generate stunning API references from your code. Use the interactive console below to test our mock authentication endpoint.
      </p>
      
      <div className="rounded-2xl border border-zinc-200 dark:border-white/10 bg-white dark:bg-black/40 overflow-hidden shadow-xl">
        {/* Request Header */}
        <div className="px-5 py-4 bg-zinc-50 dark:bg-zinc-900/80 border-b border-zinc-200 dark:border-white/5 flex flex-wrap items-center gap-3">
          <select 
            value={method}
            onChange={(e) => setMethod(e.target.value)}
            className="bg-indigo-600 text-white text-[10px] font-bold rounded-lg px-3 py-2 outline-none appearance-none cursor-pointer hover:bg-indigo-700 transition-colors"
          >
            <option>GET</option>
            <option>POST</option>
            <option>PUT</option>
            <option>DELETE</option>
          </select>
          <input 
            type="text" 
            value={endpoint}
            onChange={(e) => setEndpoint(e.target.value)}
            className="flex-1 bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10 rounded-lg px-4 py-2 text-xs font-mono text-zinc-900 dark:text-zinc-300 focus:outline-none focus:ring-1 focus:ring-indigo-500/50 transition-all"
          />
          <button 
            onClick={handleExecute}
            disabled={isLoading}
            className="bg-zinc-900 dark:bg-white text-white dark:text-black text-[10px] font-bold px-5 py-2 rounded-lg hover:opacity-90 active:scale-95 transition-all flex items-center gap-2 disabled:opacity-50"
          >
            {isLoading ? (
              <div className="w-3 h-3 border-2 border-current border-t-transparent rounded-full animate-spin" />
            ) : 'EXECUTE'}
          </button>
        </div>

        {/* Response Body */}
        <div className="p-6 bg-zinc-50/50 dark:bg-transparent min-h-[200px] flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <span className="text-[10px] font-bold text-zinc-400 dark:text-zinc-600 uppercase tracking-widest">Response Body</span>
            {response && <span className="text-[10px] font-bold text-emerald-500">200 OK</span>}
          </div>
          
          <div className="flex-1 font-mono text-xs leading-relaxed">
            {isLoading ? (
              <div className="flex items-center justify-center h-full">
                <div className="flex gap-1">
                  <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                  <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            ) : response ? (
              <pre className="text-indigo-600 dark:text-indigo-300 animate-in fade-in slide-in-from-bottom-2 duration-300">
                {JSON.stringify(response, null, 2)}
              </pre>
            ) : (
              <div className="text-zinc-400 dark:text-zinc-600 italic">
                Click Execute to see the response payload...
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 rounded-xl border border-zinc-200 dark:border-white/5 bg-zinc-50 dark:bg-white/5">
          <h4 className="text-[10px] font-bold text-zinc-400 mb-2 uppercase tracking-widest">Authentication</h4>
          <p className="text-xs text-zinc-500">All requests require a valid Bearer token in the Authorization header. Manage your tokens in the Dashboard.</p>
        </div>
        <div className="p-4 rounded-xl border border-zinc-200 dark:border-white/5 bg-zinc-50 dark:bg-white/5">
          <h4 className="text-[10px] font-bold text-zinc-400 mb-2 uppercase tracking-widest">Rate Limiting</h4>
          <p className="text-xs text-zinc-500">Free tier is limited to 1,000 requests per month. Upgrade to Pro for unlimited API access.</p>
        </div>
      </div>
    </div>
  );
};

export const ExampleDocs: React.FC<ExampleDocsProps> = ({ theme, isGithubConnected, selectedRepo }) => {
  const [activePage, setActivePage] = useState<DocPage>('introduction');
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [viewMode, setViewMode] = useState<'rendered' | 'source'>('rendered');

  const pages: Record<DocPage, { title: string, category: string, content: React.ReactNode, source: string }> = {
    introduction: {
      category: 'Getting Started',
      title: 'Introduction',
      source: `# Introduction\n\nWelcome to the DocuGen example documentation. This site was generated entirely from a single directory of Markdown files.\n\n> **Quick Tip**: You can customize the entire theme using a simple \`docugen.json\` file at the root of your project.\n\n### Why DocuGen?\n- **Instant Deploy**: Push to Git and your docs are live.\n- **Semantic Search**: Our built-in RAG system understands your technical context.`,
      content: (
        <div className="space-y-6">
          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Welcome to the DocuGen example documentation. This site was generated entirely from a single 
            directory of Markdown files. No configuration, no complex build steps—just pure, high-performance 
            documentation.
          </p>
          <div className="p-6 rounded-2xl bg-indigo-500/5 border border-indigo-500/10 dark:border-indigo-500/20 shadow-sm">
            <h4 className="text-indigo-600 dark:text-indigo-400 font-bold mb-2 flex items-center gap-2 text-sm">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              Quick Tip
            </h4>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              You can customize the entire theme using a simple <code>docugen.json</code> file at the root of your project.
            </p>
          </div>
          <h3 className="text-xl font-bold text-zinc-900 dark:text-white mt-8">Why DocuGen?</h3>
          <ul className="space-y-4">
            <li className="flex gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 shrink-0" />
              <span className="text-zinc-600 dark:text-zinc-400"><strong className="text-zinc-900 dark:text-zinc-200">Instant Deploy:</strong> Push to Git and your docs are live on our edge network.</span>
            </li>
            <li className="flex gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 shrink-0" />
              <span className="text-zinc-600 dark:text-zinc-400"><strong className="text-zinc-900 dark:text-zinc-200">Semantic Search:</strong> Our built-in RAG system understands your technical context.</span>
            </li>
          </ul>
        </div>
      )
    },
    installation: {
      category: 'Getting Started',
      title: 'Installation',
      source: `# Installation\n\nInstall the DocuGen CLI to start managing your documentation from your local terminal.\n\n\`\`\`bash\nnpm install -g @docugen/cli\n\`\`\`\n\n### Initialize your project\nRun the init command inside your project directory.\n\n\`\`\`bash\ndocugen init\n\`\`\``,
      content: (
        <div className="space-y-6">
          <p className="text-zinc-600 dark:text-zinc-400">Install the DocuGen CLI to start managing your documentation from your local terminal.</p>
          <div className="rounded-xl bg-zinc-100 dark:bg-black border border-zinc-200 dark:border-white/5 p-4 font-mono text-sm overflow-x-auto shadow-inner">
            <div className="flex gap-3">
              <span className="text-zinc-400 dark:text-zinc-600">1</span>
              <span className="text-emerald-600 dark:text-emerald-400">npm</span> install -g @docugen/cli
            </div>
          </div>
          <h3 className="text-xl font-bold text-zinc-900 dark:text-white mt-8">Initialize your project</h3>
          <p className="text-zinc-600 dark:text-zinc-400">Run the init command inside your project directory to generate a default structure.</p>
          <div className="rounded-xl bg-zinc-100 dark:bg-black border border-zinc-200 dark:border-white/5 p-4 font-mono text-sm overflow-x-auto shadow-inner">
            <div className="flex gap-3">
              <span className="text-zinc-400 dark:text-zinc-600">1</span>
              <span className="text-indigo-600 dark:text-indigo-400">docugen</span> init
            </div>
          </div>
        </div>
      )
    },
    configuration: {
      category: 'Core Concepts',
      title: 'Configuration',
      source: `# Configuration\n\nDocuGen works with zero config, but you can fine-tune every aspect of your site using a JSON file.\n\n\`\`\`json\n{\n  "name": "My Project",\n  "theme": "dark",\n  "primaryColor": "#6366f1"\n}\n\`\`\``,
      content: (
        <div className="space-y-6">
          <p className="text-zinc-600 dark:text-zinc-400">DocuGen works with zero config, but you can fine-tune every aspect of your site using a simple configuration file.</p>
          <div className="rounded-xl bg-zinc-100 dark:bg-black border border-zinc-200 dark:border-white/5 p-4 font-mono text-sm overflow-x-auto shadow-inner">
            <pre className="text-zinc-600 dark:text-zinc-400">
{`{
  "name": "My Project",
  "theme": "dark",
  "primaryColor": "#6366f1",
  "search": {
    "enabled": true,
    "provider": "ai-semantic"
  },
  "nav": {
    "introduction": "Welcome",
    "installation": "Set Up"
  }
}`}
            </pre>
          </div>
        </div>
      )
    },
    'ai-search': {
      category: 'Core Concepts',
      title: 'AI Semantic Search',
      source: `# AI Semantic Search\n\nForget keyword matching. DocuGen uses vector embeddings to understand intent.\n\n### Benefits\n- Contextual Understanding\n- Instant Indexing`,
      content: (
        <div className="space-y-6">
          <p className="text-zinc-600 dark:text-zinc-400">Forget keyword matching. DocuGen uses vector embeddings to understand the "why" behind user queries.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-6 rounded-2xl border border-zinc-200 dark:border-white/5 bg-zinc-100 dark:bg-white/5 group hover:border-indigo-500/30 transition-all shadow-sm">
              <h4 className="font-bold text-zinc-900 dark:text-white mb-2 text-sm">Contextual Understanding</h4>
              <p className="text-xs text-zinc-500 leading-relaxed">The engine understands synonyms and technical relationships across your files, making searches smarter.</p>
            </div>
            <div className="p-6 rounded-2xl border border-zinc-200 dark:border-white/5 bg-zinc-100 dark:bg-white/5 group hover:border-indigo-500/30 transition-all shadow-sm">
              <h4 className="font-bold text-zinc-900 dark:text-white mb-2 text-sm">Instant Indexing</h4>
              <p className="text-xs text-zinc-500 leading-relaxed">Every time you push code, our AI re-indexes your content in real-time, typically in under 500ms.</p>
            </div>
          </div>
        </div>
      )
    },
    seo: {
      category: 'Core Concepts',
      title: 'SEO & Meta Tags',
      source: `# SEO & Social\n\nDocuGen automatically generates meta tags for better search engine visibility.\n\n### Features\n- Automatic sitemap.xml generation\n- Social media preview images (OG Tags)\n- JSON-LD structured data`,
      content: (
        <div className="space-y-6">
          <p className="text-zinc-600 dark:text-zinc-400">Documentation is only useful if people can find it. DocuGen ensures your content is optimized for Google and Bing from day one.</p>
          <div className="flex flex-col gap-4">
            <div className="p-4 rounded-xl border border-zinc-200 dark:border-white/5 bg-zinc-100 dark:bg-white/5">
              <div className="flex items-center justify-between mb-2">
                 <span className="text-xs font-bold text-zinc-900 dark:text-white uppercase tracking-wider">Social Preview</span>
                 <span className="text-[10px] text-zinc-400">Auto-generated</span>
              </div>
              <div className="aspect-video rounded-lg bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center text-zinc-400 font-bold overflow-hidden shadow-inner">
                 <div className="text-center">
                    <div className="text-xs text-zinc-500 mb-1">OG:IMAGE PREVIEW</div>
                    <div className="text-indigo-500 text-lg">My Awesome Project</div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    customization: {
      category: 'Design',
      title: 'Custom Themes',
      source: `# Customization\n\nMake your docs look exactly like your brand.\n\n- **Primary Color**: Select your brand color.\n- **Typography**: Choose a font family that fits your style.\n- **Live Preview**: See changes instantly in our design editor.`,
      content: <DesignCustomizer />
    },
    'api-reference': {
      category: 'Advanced',
      title: 'API Reference',
      source: `# API Reference\n\nDocument your REST or GraphQL APIs with beautiful, interactive code blocks.\n\n### Try it out\nUse the interactive console to test endpoints directly from the documentation.\n\n\`\`\`http\nGET /v1/auth/session\n\`\`\``,
      content: <InteractiveAPI />
    },
    performance: {
      category: 'Core Concepts',
      title: 'Performance',
      source: `# Performance\n\nDocuGen is built for speed. Sites are served via a global edge network.\n\n### Key Metrics\n- < 500ms First Contentful Paint\n- 100/100 Lighthouse Score\n- Global CDN distribution`,
      content: (
        <div className="space-y-6">
          <p className="text-zinc-600 dark:text-zinc-400">DocuGen ensures your documentation loads instantly for users worldwide, regardless of their connection speed.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-8 rounded-2xl border border-zinc-200 dark:border-white/5 bg-zinc-100 dark:bg-white/5 text-center shadow-sm">
              <div className="text-4xl font-black text-emerald-500 mb-1">99+</div>
              <div className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Lighthouse Rank</div>
            </div>
            <div className="p-8 rounded-2xl border border-zinc-200 dark:border-white/5 bg-zinc-100 dark:bg-white/5 text-center shadow-sm">
              <div className="text-4xl font-black text-indigo-500 mb-1">&lt; 100ms</div>
              <div className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Edge Latency</div>
            </div>
          </div>
        </div>
      )
    },
    integrations: {
      category: 'Ecosystem',
      title: 'Integrations',
      source: `# Integrations\n\nDocuGen works with the tools you already use.\n\n- **GitHub**: Auto-deploy on push.\n- **Slack**: Get notifications for new doc versions.\n- **Discord**: Sync docs with your community server.`,
      content: (
        <div className="space-y-6">
          <p className="text-zinc-600 dark:text-zinc-400">Connect DocuGen to your existing developer stack with native, one-click integrations.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
             <div className="flex items-center gap-4 p-5 rounded-2xl border border-zinc-200 dark:border-white/5 bg-white dark:bg-zinc-800/20 hover:shadow-lg transition-all cursor-pointer">
                <div className="w-10 h-10 rounded-xl bg-zinc-900 dark:bg-zinc-800 flex items-center justify-center shadow-lg">
                   <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.298 24 12c0-6.627-5.373-12-12-12" /></svg>
                </div>
                <div>
                  <span className="font-bold text-zinc-900 dark:text-white text-sm">GitHub</span>
                  <p className="text-[10px] text-zinc-500">Auto-sync repositories</p>
                </div>
             </div>
             <div className="flex items-center gap-4 p-5 rounded-2xl border border-zinc-200 dark:border-white/5 bg-white dark:bg-zinc-800/20 hover:shadow-lg transition-all cursor-pointer">
                <div className="w-10 h-10 rounded-xl bg-purple-600/10 flex items-center justify-center shadow-lg">
                   <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 24 24"><path d="M6 15a2 2 0 1 0 2 2 2 2 0 0 0-2-2zm0-6a2 2 0 1 0 2 2 2 2 0 0 0-2-2zm6 0a2 2 0 1 0 2 2 2 2 0 0 0-2-2zm6 0a2 2 0 1 0 2 2 2 2 0 0 0-2-2z"/></svg>
                </div>
                <div>
                  <span className="font-bold text-zinc-900 dark:text-white text-sm">Slack</span>
                  <p className="text-[10px] text-zinc-500">Instant notifications</p>
                </div>
             </div>
          </div>
        </div>
      )
    },
    deployment: {
      category: 'Ecosystem',
      title: 'Deployment',
      source: `# Deployment\n\nDocuGen generates highly optimized static files ready for any CDN.\n\n### CLI Deployment\n\`\`\`bash\ndocugen deploy --platform vercel\n\`\`\`\n\n### Platforms\n- Vercel (Recommended)\n- Netlify\n- AWS S3 / CloudFront`,
      content: (
        <div className="space-y-6">
          <p className="text-zinc-600 dark:text-zinc-400">Deploy your documentation anywhere. DocuGen outputs standard HTML/CSS/JS that works on any web host.</p>
          <div className="bg-zinc-100 dark:bg-black/40 rounded-2xl border border-zinc-200 dark:border-white/5 p-6 shadow-inner">
             <h4 className="text-zinc-900 dark:text-white font-bold mb-4 flex items-center gap-2 text-sm">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                Vercel Integration
             </h4>
             <p className="text-xs text-zinc-500 mb-6 leading-relaxed">The easiest way to host. Install our Vercel integration to enable automatic preview deployments for every pull request, providing instant feedback on documentation changes.</p>
             <div className="flex gap-2">
                <button className="bg-zinc-900 dark:bg-white text-white dark:text-black px-5 py-2.5 rounded-xl text-xs font-bold hover:opacity-90 transition-all active:scale-95 shadow-lg">
                    Connect Vercel
                </button>
                <button className="border border-zinc-200 dark:border-white/10 text-zinc-600 dark:text-zinc-400 px-5 py-2.5 rounded-xl text-xs font-bold hover:bg-white/5 transition-all">
                    View Guide
                </button>
             </div>
          </div>
        </div>
      )
    },
    analytics: {
        category: 'Advanced',
        title: 'User Analytics',
        source: `# Analytics\n\nUnderstand how your users interact with your docs.\n\n- Page view tracking\n- Search query insights\n- Drop-off analysis`,
        content: (
          <div className="space-y-6">
            <p className="text-zinc-600 dark:text-zinc-400">Gain actionable insights into what your users are looking for and where they get stuck.</p>
            <div className="grid grid-cols-3 gap-3">
               {[
                 { label: 'Total Views', val: '12.4k', color: 'text-indigo-500' },
                 { label: 'Avg. Session', val: '4m 12s', color: 'text-emerald-500' },
                 { label: 'Search Success', val: '94%', color: 'text-blue-500' }
               ].map(stat => (
                 <div key={stat.label} className="p-4 rounded-xl border border-zinc-100 dark:border-white/5 bg-zinc-50/50 dark:bg-white/5">
                    <div className={`text-lg font-bold ${stat.color}`}>{stat.val}</div>
                    <div className="text-[10px] text-zinc-500 uppercase tracking-tighter">{stat.label}</div>
                 </div>
               ))}
            </div>
          </div>
        )
    },
    versioning: {
        category: 'Advanced',
        title: 'Versioning',
        source: `# Versioning\n\nSupport multiple versions of your documentation simultaneously.\n\n- Semantic versioning support\n- Branch-based docs\n- Archive older versions`,
        content: (
          <div className="space-y-6">
            <p className="text-zinc-600 dark:text-zinc-400">Keep your documentation in sync with your product releases with built-in versioning support.</p>
            <div className="flex items-center gap-2 p-3 rounded-xl bg-zinc-100 dark:bg-zinc-800/50 border border-zinc-200 dark:border-white/5 w-fit">
                <span className="text-[10px] font-bold text-zinc-500 px-2">VERSION</span>
                <div className="px-3 py-1 bg-indigo-600 text-white text-[10px] font-bold rounded-lg shadow-lg">v2.4.0 (Latest)</div>
                <div className="px-3 py-1 bg-zinc-200 dark:bg-zinc-700 text-zinc-600 dark:text-zinc-400 text-[10px] font-bold rounded-lg">v2.3.1</div>
                <div className="px-3 py-1 bg-zinc-200 dark:bg-zinc-700 text-zinc-600 dark:text-zinc-400 text-[10px] font-bold rounded-lg">v1.x</div>
            </div>
          </div>
        )
    },
    security: {
      category: 'Advanced',
      title: 'Security & Auth',
      source: `# Security\n\nProtect your internal documentation with ease.\n\n### Features\n- SSO Integration\n- IP Whitelisting\n- Private Repository Sync`,
      content: (
        <div className="space-y-6">
          <p className="text-zinc-600 dark:text-zinc-400">Ship internal docs securely. We support industry-standard auth providers out of the box.</p>
          <div className="space-y-4">
             <div className="flex items-center gap-4 p-5 rounded-2xl border border-zinc-200 dark:border-white/5 bg-zinc-100 dark:bg-white/5 hover:border-indigo-500/30 transition-all shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-indigo-100 dark:bg-indigo-500/10 flex items-center justify-center text-indigo-600 shadow-sm">
                   <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A10.003 10.003 0 0012 20c4.478 0 8.268-2.943 9.542-7H21c-1.105 0-2-.895-2-2V9a2 2 0 00-2-2h-1M12 11V7m0 11v-3m0 0h.01M12 15h3m-3 0h-3" /></svg>
                </div>
                <div>
                   <h4 className="font-bold text-zinc-900 dark:text-white text-sm">Enterprise SSO</h4>
                   <p className="text-xs text-zinc-500 leading-relaxed">Connect with Okta, Azure AD, or any SAML provider in minutes.</p>
                </div>
             </div>
             <div className="flex items-center gap-4 p-5 rounded-2xl border border-zinc-200 dark:border-white/5 bg-zinc-100 dark:bg-white/5 hover:border-emerald-500/30 transition-all shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-500/10 flex items-center justify-center text-emerald-600 shadow-sm">
                   <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                </div>
                <div>
                   <h4 className="font-bold text-zinc-900 dark:text-white text-sm">Role-Based Access</h4>
                   <p className="text-xs text-zinc-500 leading-relaxed">Granular permissions for teams, stakeholders, and external partners.</p>
                </div>
             </div>
          </div>
        </div>
      )
    }
  };

  const filteredResults = useMemo(() => {
    if (!searchQuery) return [];
    return Object.entries(pages).filter(([id, data]) => 
      data.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      data.category.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (filteredResults.length > 0) {
      setActivePage(filteredResults[0][0] as DocPage);
      setSearchQuery('');
    }
    setIsSearching(true);
    setTimeout(() => setIsSearching(false), 800);
  };

  return (
    <section id="live-demo" className="py-24 md:py-32 relative z-10 overflow-hidden scroll-mt-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight text-zinc-900 dark:text-white">The final result.</h2>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto">This is exactly what your users will see. Fast, focused, and professional documentation designed for modern engineering teams.</p>
        </div>

        <div className="max-w-6xl mx-auto rounded-[2.5rem] border border-zinc-200 dark:border-white/10 bg-white dark:bg-zinc-900/40 glass overflow-hidden shadow-2xl shadow-indigo-600/5 transition-all duration-500 hover:shadow-indigo-500/10">
          {/* Header */}
          <header className="h-16 border-b border-zinc-200 dark:border-white/5 flex items-center justify-between px-6 bg-white/50 dark:bg-zinc-900/60 backdrop-blur-md">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 bg-indigo-600 rounded-lg flex items-center justify-center font-bold text-[11px] text-white shadow-lg shadow-indigo-600/20">D</div>
              <span className="font-bold text-sm text-zinc-900 dark:text-white tracking-tight">DocuGen Docs</span>
            </div>
            
            <div className="relative w-full max-w-xs md:max-w-md mx-4">
              <form onSubmit={handleSearch}>
                <input 
                  type="text" 
                  placeholder="Ask the docs (AI powered)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-zinc-100 dark:bg-black/40 border border-zinc-200 dark:border-white/10 rounded-xl px-10 py-2.5 text-xs text-zinc-900 dark:text-zinc-300 focus:outline-none focus:ring-1 focus:ring-indigo-500/50 transition-all placeholder-zinc-500 shadow-inner"
                />
                <svg className="w-4 h-4 text-zinc-400 dark:text-zinc-600 absolute left-3.5 top-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                {isSearching && (
                  <div className="absolute right-3.5 top-3">
                    <div className="w-3.5 h-3.5 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin" />
                  </div>
                )}
              </form>

              {searchQuery && !isSearching && filteredResults.length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-3 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 rounded-2xl shadow-2xl z-50 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                   <div className="p-2 border-b border-zinc-100 dark:border-white/5 bg-zinc-50/50 dark:bg-white/5 text-[10px] font-bold text-zinc-400 uppercase tracking-widest px-4">AI Search Results</div>
                   {filteredResults.map(([id, data]) => (
                     <button 
                       key={id} 
                       onClick={() => { setActivePage(id as DocPage); setSearchQuery(''); }}
                       className="w-full px-5 py-4 text-left hover:bg-zinc-50 dark:hover:bg-white/5 flex flex-col transition-colors border-b border-zinc-100 dark:border-white/5 last:border-0 group"
                     >
                       <span className="text-xs font-bold text-zinc-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">{data.title}</span>
                       <span className="text-[10px] text-zinc-500">{data.category}</span>
                     </button>
                   ))}
                </div>
              )}
            </div>

            <div className="hidden md:flex items-center gap-4">
               {isGithubConnected && (
                 <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 text-[10px] font-bold">
                    <div className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse"></div>
                    Synced from {selectedRepo?.split('/')[1]}
                 </div>
               )}
               <button className="text-zinc-400 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-white/5">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.298 24 12c0-6.627-5.373-12-12-12" /></svg>
               </button>
            </div>
          </header>

          <div className="flex min-h-[600px]">
            {/* Sidebar */}
            <aside className="w-64 border-r border-zinc-200 dark:border-white/5 p-8 bg-zinc-50 dark:bg-zinc-900/40 hidden md:block overflow-y-auto max-h-[600px] scrollbar-hide">
              {['Getting Started', 'Core Concepts', 'Design', 'Advanced', 'Ecosystem'].map((category) => (
                <div key={category} className="mb-8">
                  <div className="text-[10px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest mb-4">{category}</div>
                  <div className="space-y-1.5">
                    {Object.entries(pages)
                      .filter(([_, data]) => data.category === category)
                      .map(([id, data]) => (
                        <button
                          key={id}
                          onClick={() => { setActivePage(id as DocPage); setViewMode('rendered'); }}
                          className={`w-full text-left text-sm py-1.5 px-3 rounded-lg transition-all ${
                            activePage === id 
                              ? 'text-indigo-600 dark:text-indigo-400 font-bold bg-indigo-50 dark:bg-indigo-500/10 shadow-sm' 
                              : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-white/5'
                          }`}
                        >
                          {data.title}
                        </button>
                      ))}
                  </div>
                </div>
              ))}
            </aside>

            {/* Content Area */}
            <main className="flex-1 p-8 md:p-16 relative overflow-hidden bg-white dark:bg-transparent">
              <div className="flex justify-between items-center mb-10">
                <div className="flex items-center gap-2">
                   <div className="text-xs font-bold text-indigo-600 dark:text-indigo-500 uppercase tracking-wider">{pages[activePage].category}</div>
                   <span className="text-zinc-300 dark:text-zinc-700">/</span>
                   <div className="text-xs font-medium text-zinc-400 dark:text-zinc-600">{pages[activePage].title}</div>
                </div>
                <div className="flex items-center bg-zinc-100 dark:bg-white/5 rounded-xl p-1 border border-zinc-200 dark:border-white/10 shadow-inner">
                  <button 
                    onClick={() => setViewMode('rendered')}
                    className={`px-4 py-1.5 text-[10px] font-bold rounded-lg transition-all ${viewMode === 'rendered' ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/20' : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-300'}`}
                  >
                    PREVIEW
                  </button>
                  <button 
                    onClick={() => setViewMode('source')}
                    className={`px-4 py-1.5 text-[10px] font-bold rounded-lg transition-all ${viewMode === 'source' ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/20' : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-300'}`}
                  >
                    MARKDOWN
                  </button>
                </div>
              </div>

              <div className="animate-in fade-in duration-500" key={activePage + viewMode}>
                {viewMode === 'rendered' ? (
                  <>
                    <h1 className="text-4xl font-extrabold text-zinc-900 dark:text-white mb-8 tracking-tight">{pages[activePage].title}</h1>
                    <div className="prose dark:prose-invert max-w-none prose-headings:text-zinc-900 dark:prose-headings:text-white prose-p:text-zinc-600 dark:prose-p:text-zinc-400 prose-strong:text-zinc-900 dark:prose-strong:text-white">
                      {pages[activePage].content}
                    </div>
                  </>
                ) : (
                  <div className="bg-zinc-100 dark:bg-black/40 rounded-3xl border border-zinc-200 dark:border-white/5 p-8 font-mono text-sm text-zinc-700 dark:text-indigo-300 overflow-x-auto whitespace-pre-wrap leading-relaxed shadow-inner animate-in slide-in-from-bottom-2 duration-300">
                    {pages[activePage].source}
                  </div>
                )}
              </div>

              {/* Navigation Footer */}
              <div className="mt-20 pt-10 border-t border-zinc-100 dark:border-white/5 flex flex-col sm:flex-row gap-6 justify-between items-center text-[10px] font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-600">
                <div className="flex items-center gap-2">
                   <div className="w-4 h-4 rounded-full bg-emerald-500/20 flex items-center justify-center">
                       <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                   </div>
                   Generated by DocuGen AI v2.4
                </div>
                <div className="flex gap-6">
                  <button className="hover:text-zinc-900 dark:hover:text-white transition-colors flex items-center gap-1.5">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
                      Edit on GitHub
                  </button>
                  <button className="hover:text-zinc-900 dark:hover:text-white transition-colors flex items-center gap-1.5">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" /></svg>
                      Share Page
                  </button>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </section>
  );
};
