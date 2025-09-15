import React, { useEffect, useState } from 'react';
import { 
  Scale as ScaleIcon, 
  DollarSign as CurrencyDollarIcon, 
  FileText as DocumentTextIcon, 
  MessageSquare as ChatBubbleLeftRightIcon,
  Settings as Cog6ToothIcon,
  Rocket as RocketLaunchIcon,
  ArrowRight as ArrowRightIcon,
  Check as CheckIcon,
  Sparkles as SparkIcon,
  Compass as CompassIcon,
  Zap as ZapIcon,
  Shield as ShieldIcon
} from 'lucide-react';

export default function App() {
  // Set dark mode by default and add mouse move effect for glow
  useEffect(() => {
    document.documentElement.classList.add('dark')
    
    // Mouse move effect for glow
    const handleMouseMove = (e: MouseEvent) => {
      const cards = document.querySelectorAll('.mouse-follow-effect');
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        (card as HTMLElement).style.setProperty('--mouse-x', `${x}px`);
        (card as HTMLElement).style.setProperty('--mouse-y', `${y}px`);
      });
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, [])

  return (
    <div className="min-h-screen relative bg-black text-gray-100 antialiased">
      <Header />
      <Hero />
      <Verses />
      <Automation />
      <Security />
      <CaseStudies />
      <CTA />
      <Footer />
    </div>
  )
}

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-gray-900/80 backdrop-blur-md border-b border-white/5 shadow-xl' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative bg-gray-900 p-2 rounded-lg">
              <LogoMark className="h-6 w-6 text-white" />
            </div>
          </div>
          <span className="text-xl font-bold font-display tracking-tight text-gradient glow-text">Lumicon</span>
        </a>
        
        <nav className="hidden md:flex items-center gap-6">
          {['Verses', 'Automation', 'Security', 'Case Studies'].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase().replace(' ', '-')}`} 
              className="text-sm font-medium text-gray-400 hover:text-white transition-colors relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>
        
        <div className="flex items-center gap-4">
          <a 
            href="https://calendly.com/redforensic/10-minute-intro-meeting" 
            target="_blank" 
            rel="noreferrer"
            className="hidden md:inline-flex items-center px-4 py-2.5 rounded-lg text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 transition-all border border-white/10 hover:border-white/20"
          >
            Book a Call
          </a>
          <a 
            href="https://calendly.com/redforensic/10-minute-intro-meeting" 
            target="_blank" 
            rel="noreferrer"
            className="group relative overflow-hidden px-5 py-2.5 rounded-lg text-sm font-semibold text-white transition-all"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-90 group-hover:opacity-100 transition-opacity"></div>
            <div className="absolute inset-0.5 rounded bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative flex items-center">
              <span>Get Started</span>
              <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </div>
          </a>
        </div>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-24 md:pt-40">
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800/70 border border-gray-700 backdrop-blur-sm glow-effect">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span className="text-sm font-medium text-blue-400">Now available for early access</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight">
              <span className="block text-white">Build your</span>
              <span className="block bg-gradient-to-r from-cyan-300 via-sky-300 to-purple-300 bg-clip-text text-transparent">conversant dataverse</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed">
              Transform your business with AI-powered dataverses that understand your data and automate your workflows—securely and locally deployed.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-2">
              <a 
                href="https://calendly.com/redforensic/10-minute-intro-meeting" 
                target="_blank" 
                rel="noreferrer" 
                className="px-6 py-3.5 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold hover:shadow-glow transition-all duration-300 flex items-center gap-2 group"
              >
                <span>Book a Strategy Call</span>
                <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#verses" 
                className="px-6 py-3.5 rounded-lg bg-gray-800/80 border border-gray-700 text-gray-100 font-medium hover:bg-gray-800/90 hover:border-gray-600 transition-all duration-300 flex items-center gap-2 group"
              >
                Explore Verses
              </a>
            </div>
            
            <div className="pt-2 flex items-center text-sm text-gray-500">
              <div className="flex -space-x-2 mr-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="h-8 w-8 rounded-full border-2 border-gray-800 overflow-hidden">
                    <div className="h-full w-full bg-gradient-to-br from-blue-500/20 to-cyan-500/20"></div>
                  </div>
                ))}
              </div>
              <span>Trusted by innovative teams worldwide</span>
            </div>
            
            <div className="flex flex-wrap gap-3 pt-4">
              <div className="px-3 py-1.5 rounded-md bg-gray-800/50 text-xs font-medium text-gray-300 border border-gray-700/50">
                Local / VPC
              </div>
              <div className="px-3 py-1.5 rounded-md bg-gray-800/50 text-xs font-medium text-gray-300 border border-gray-700/50">
                End-to-end encryption
              </div>
              <div className="px-3 py-1.5 rounded-md bg-gray-800/50 text-xs font-medium text-gray-300 border border-gray-700/50">
                RBAC & SSO
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 p-6 border border-gray-800/60 shadow-neon glow-card mouse-follow-effect">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-3 w-3 rounded-full bg-red-500"></div>
                <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                <div className="h-3 w-3 rounded-full bg-green-500"></div>
                <div className="flex-1 text-center text-sm font-medium text-gray-400">terminal</div>
              </div>
              
              <div className="font-mono text-sm text-gray-300 space-y-4">
                <div className="flex">
                  <span className="text-cyan-300">$</span>
                  <span className="ml-2">lumicon init --verse legal</span>
                </div>
                <div className="text-emerald-400">✓ Initialized LegalVerse workspace</div>
                <div className="text-emerald-400">✓ Connected to secure VPC</div>
                <div className="text-emerald-400">✓ Authenticated with SSO</div>
                <div className="pt-2">
                  <div className="flex">
                    <span className="text-cyan-300">$</span>
                    <span className="ml-2 text-gray-400">lumicon query "Show pending cases with high priority"</span>
                  </div>
                </div>
                <div className="text-green-400">✓ Found 3 high-priority cases</div>
                <div className="pl-4 text-gray-400">• Smith v. Metro (Due: 2d) - Discovery</div>
                <div className="pl-4 text-gray-400">• Johnson LLC (Due: 3d) - Contract Review</div>
                <div className="pl-4 text-gray-400">• Acme Corp (Due: 5d) - Compliance</div>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -right-4 w-full h-full rounded-2xl bg-gradient-to-br from-cyan-400/15 to-purple-400/15 -z-10 blur-xl"></div>
          </div>
        </div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800/70 border border-gray-700 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span className="text-sm font-medium text-blue-400">Now available for early access</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight">
              <span className="block text-white">Build your</span>
              <span className="block bg-gradient-to-r from-cyan-300 via-sky-300 to-purple-300 bg-clip-text text-transparent">conversant dataverse</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed">
              Transform your business with AI-powered dataverses that understand your data and automate your workflows—securely and locally deployed.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-2">
              <a 
                href="https://calendly.com/redforensic/10-minute-intro-meeting" 
                target="_blank" 
                rel="noreferrer" 
                className="px-6 py-3.5 rounded-lg bg-gradient-to-r from-cyan-400 to-purple-500 text-gray-900 font-semibold hover:shadow-neon transition-all duration-300 flex items-center gap-2 group"
              >
                <span>Book a Strategy Call</span>
                <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#verses" 
                className="px-6 py-3.5 rounded-lg bg-gray-800/80 border border-gray-700 text-gray-100 font-medium hover:bg-gray-800/90 hover:border-gray-600 transition-all duration-300 flex items-center gap-2 group"
              >
                Explore Verses
              </a>
            </div>
            
            <div className="pt-2 flex items-center text-sm text-gray-500">
              <div className="flex -space-x-2 mr-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="h-8 w-8 rounded-full border-2 border-gray-800 overflow-hidden">
                    <div className="h-full w-full bg-gradient-to-br from-blue-500/20 to-cyan-500/20"></div>
                  </div>
                ))}
              </div>
              <span>Trusted by innovative teams worldwide</span>
            </div>
            
            <div className="flex flex-wrap gap-3 pt-4">
              <div className="px-3 py-1.5 rounded-md bg-gray-800/50 text-xs font-medium text-gray-300 border border-gray-700/50">
                Local / VPC
              </div>
              <div className="px-3 py-1.5 rounded-md bg-gray-800/50 text-xs font-medium text-gray-300 border border-gray-700/50">
                End-to-end encryption
              </div>
              <div className="px-3 py-1.5 rounded-md bg-gray-800/50 text-xs font-medium text-gray-300 border border-gray-700/50">
                RBAC & SSO
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 p-6 border border-gray-800/60 shadow-neon">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-3 w-3 rounded-full bg-red-500"></div>
                <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                <div className="h-3 w-3 rounded-full bg-green-500"></div>
                <div className="flex-1 text-center text-sm font-medium text-gray-400">terminal</div>
              </div>
              
              <div className="font-mono text-sm text-gray-300 space-y-4">
                <div className="flex">
                  <span className="text-cyan-300">$</span>
                  <span className="ml-2">lumicon init --verse legal</span>
                </div>
                <div className="text-emerald-400">✓ Initialized LegalVerse workspace</div>
                <div className="text-emerald-400">✓ Connected to secure VPC</div>
                <div className="text-emerald-400">✓ Authenticated with SSO</div>
                <div className="pt-2">
                  <div className="flex">
                    <span className="text-cyan-300">$</span>
                    <span className="ml-2 text-gray-400">lumicon query "Show pending cases with high priority"</span>
                  </div>
                </div>
                <div className="text-green-400">✓ Found 3 high-priority cases</div>
                <div className="pl-4 text-gray-400">• Smith v. Metro (Due: 2d) - Discovery</div>
                <div className="pl-4 text-gray-400">• Johnson LLC (Due: 3d) - Contract Review</div>
                <div className="pl-4 text-gray-400">• Acme Corp (Due: 5d) - Compliance</div>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -right-4 w-full h-full rounded-2xl bg-gradient-to-br from-cyan-400/15 to-purple-400/15 -z-10 blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Verses() {
  return (
    <section id="verses" className="relative py-24 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-gray-950"></div>
        <div className="absolute inset-0 [background:radial-gradient(circle_at_50%_50%,hsl(var(--primary)/0.03),transparent_70%)]"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 relative">
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full bg-blue-500/10 blur-3xl -z-10"></div>
          <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-white mb-4">
            Productized <span className="text-gradient">Dataverses</span>
          </h2>
          <p className="text-lg text-gray-300">
            Industry-tuned knowledge + retrieval so teams can converse with their entire universe of data—securely, locally, and fast.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "LegalVerse",
              tagline: "For law firms",
              points: [
                "Conversational access to prior cases & pleadings",
                "Rapid first drafts & argument extraction",
                "Local/VPC deployment with audit trails"
              ],
              gradient: "from-blue-500/10 to-blue-600/10",
              icon: <ScaleIcon className="h-6 w-6 text-blue-400" />,
              color: "blue"
            },
            {
              title: "WealthVerse",
              tagline: "For financial services",
              points: [
                "Query client history & performance",
                "Surface what worked (and didn't)",
                "Assist prep for reviews & outreach"
              ],
              gradient: "from-emerald-500/10 to-emerald-600/10",
              icon: <CurrencyDollarIcon className="h-6 w-6 text-emerald-400" />,
              color: "emerald"
            },
            {
              title: "TaxVerse",
              tagline: "For accounting firms",
              points: [
                "Search filings, workpapers, memos",
                "Auto-summarize changes & deadlines",
                "Draft client-ready explanations"
              ],
              gradient: "from-purple-500/10 to-purple-600/10",
              icon: <DocumentTextIcon className="h-6 w-6 text-purple-400" />,
              color: "purple"
            },
            {
              title: "SupportVerse",
              tagline: "For customer support",
              points: [
                "Instant answers from KB, tickets, chats",
                "Auto-tag & route complex cases",
                "QA & insights on deflection"
              ],
              gradient: "from-amber-500/10 to-amber-600/10",
              icon: <ChatBubbleLeftRightIcon className="h-6 w-6 text-amber-400" />,
              color: "amber"
            },
            {
              title: "OpsVerse",
              tagline: "For operations teams",
              points: [
                "SOP search & action triggering",
                "Scheduling, approvals, CRM sync",
                "KPIs with real-time alerts"
              ],
              gradient: "from-rose-500/10 to-rose-600/10",
              icon: <Cog6ToothIcon className="h-6 w-6 text-rose-400" />,
              color: "rose"
            },
            {
              title: "SalesVerse",
              tagline: "For GTM teams",
              points: [
                "Personalized sequences from notes & CRM",
                "Competitive insights on demand",
                "Auto-assemble collateral"
              ],
              gradient: "from-indigo-500/10 to-indigo-600/10",
              icon: <RocketLaunchIcon className="h-6 w-6 text-indigo-400" />,
              color: "indigo"
            }
          ].map((verse, index) => (
            <div 
              key={index}
              className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${verse.gradient} p-px backdrop-blur-sm glow-card mouse-follow-effect`}
            >
              <div className="h-full rounded-2xl bg-gray-900/80 p-6 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 rounded-lg bg-${verse.color}-500/10`}>
                    {verse.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white">{verse.title}</h3>
                    <p className="text-sm text-gray-400">{verse.tagline}</p>
                  </div>
                </div>
                <ul className="space-y-3 mt-6">
                  {verse.points.map((point, i) => (
                    <li key={i} className="flex items-start group">
                      <div className="flex-shrink-0 mt-0.5 mr-3 flex items-center justify-center h-5 w-5 rounded-full bg-gray-800/50 border border-gray-700 group-hover:bg-gray-800 transition-colors">
                        <svg className={`h-3 w-3 text-${verse.color}-400`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-300 group-hover:text-white transition-colors">{point}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-4 border-t border-gray-800">
                  <a 
                    href="#contact" 
                    className="inline-flex items-center text-sm font-medium text-gray-400 hover:text-white transition-colors group-hover:translate-x-1 duration-300"
                  >
                    Learn more about {verse.title}
                    <svg className="ml-1.5 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Automation() {
  return (
    <section id="automation" className="relative py-24 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10"></div>
      
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-white mb-4">
            Automate the Busywork — <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Keep Humans in Control</span>
          </h2>
          <p className="text-lg text-gray-200">
            Agentic workflows that plan multi-step tasks, call tools (calendar, CRM, docs), and request human approval at decision points.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: <ZapIcon className="h-6 w-6 text-blue-400" />,
              title: "Intake & Triage",
              desc: "Capture, enrich, and route leads or matters. Escalate with full context.",
              gradient: "from-blue-500/10 to-blue-600/10"
            },
            {
              icon: <CompassIcon className="h-6 w-6 text-emerald-400" />,
              title: "Document Intelligence",
              desc: "Summarize, compare versions, extract entities, and draft next steps.",
              gradient: "from-emerald-500/10 to-emerald-600/10"
            },
            {
              icon: <ShieldIcon className="h-6 w-6 text-purple-400" />,
              title: "Approvals & Audits",
              desc: "Human sign-off checkpoints and immutable logs for every action.",
              gradient: "from-purple-500/10 to-purple-600/10"
            }
          ].map((feature, index) => (
            <div 
              key={index}
              className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${feature.gradient} p-0.5 backdrop-blur-sm shadow-neon`}
            >
              <div className="h-full rounded-2xl bg-gray-900/80 p-6 backdrop-blur-sm">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-lg bg-gray-800/50 text-blue-400">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
                    <p className="mt-1 text-gray-300">{feature.desc}</p>
                  </div>
                </div>
                
                <div className="mt-6 pt-4 border-t border-gray-800">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-gray-500">WORKFLOW EXAMPLE</span>
                    <a 
                      href="#contact" 
                      className="inline-flex items-center text-xs font-medium text-blue-400 hover:text-blue-300 transition-colors group-hover:translate-x-1 duration-300"
                    >
                      View
                      <svg className="ml-1 h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                  
                  <div className="mt-2 bg-gray-800/50 rounded-lg p-3 text-xs text-gray-400 font-mono border border-gray-700/50">
                    <div>on: new_lead</div>
                    <div>steps: [enrich, route]</div>
                    <div>requires_approval: true</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="#contact" 
            className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium hover:shadow-lg hover:shadow-blue-500/20 transition-all group"
          >
            Explore Workflow Builder
            <svg className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

function Security() {
  return (
    <section id="security" className="relative py-24 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10"></div>
      
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-900/30 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-2">
              <ShieldIcon className="h-4 w-4" />
              Enterprise-Grade Security
            </div>
            
            <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-white">
              Local, Private, and <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Secure by Design</span>
            </h2>
            
            <p className="text-lg text-gray-400">
              Deploy in your VPC or on-prem. Bring-your-own keys. Observe everything with audit trails, role-based access, and policy guardrails.
            </p>
            
            <ul className="space-y-3 text-gray-300">
              {[
                "Encryption in transit & at rest",
                "RBAC, SSO (Okta/Azure AD/Google), least privilege",
                "PII redaction & policy-based data retention",
                "Content filters & human-in-the-loop approvals",
                "Full action & prompt/response auditability"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckIcon className="h-5 w-5 flex-shrink-0 mt-0.5 text-emerald-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            
            <div className="pt-4">
              <a 
                href="#contact" 
                className="inline-flex items-center text-sm font-medium text-emerald-400 hover:text-emerald-300 transition-colors group"
              >
                Request Security Whitepaper
                <svg className="ml-1.5 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 p-6 border border-gray-700/50 shadow-2xl overflow-hidden">
              <div className="absolute top-0 right-0 -mt-4 -mr-4 w-32 h-32 rounded-full bg-emerald-500/10 blur-3xl"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-2 text-sm font-medium text-emerald-400 mb-6">
                  <ShieldIcon className="h-4 w-4" />
                  Reference Architecture
                </div>
                
                <div className="space-y-6">
                  <div className="relative p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
                    <div className="absolute -top-2 left-4 px-2 py-0.5 bg-emerald-500/10 text-emerald-400 text-xs font-mono rounded-full border border-emerald-500/20">
                      Your VPC
                    </div>
                    <ArchDiagram />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function CaseStudies() {
  return (
    <section id="cases" className="relative py-24 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10"></div>
      
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-900/30 border border-purple-500/20 text-purple-400 text-sm font-medium mb-4">
            <SparkIcon className="h-4 w-4" />
            Success Stories
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-white mb-4">
            Trusted by <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Innovative Teams</span>
          </h2>
          <p className="text-lg text-gray-200">
            See how organizations are transforming their operations with Lumicon AI.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              logo: "AM",
              company: "AmLaw 100 Firm",
              industry: "Legal Services",
              quote: "Lumicon cut our contract review time by 85% while improving accuracy. The AI surfaces critical issues we used to miss.",
              results: [
                { metric: "85%", label: "Faster", note: "contract review" },
                { metric: "3.2x", label: "More", note: "issues caught" },
                { metric: "$2.4M", label: "Saved", note: "annualized" }
              ],
              gradient: "from-blue-500/10 to-blue-600/10"
            },
            {
              logo: "FT",
              company: "Fortune 500",
              industry: "Financial Services",
              quote: "The knowledge base search has transformed how our advisors find client information. What used to take 20+ minutes now takes seconds.",
              results: [
                { metric: "92%", label: "Faster", note: "retrieval" },
                { metric: "40%", label: "Higher", note: "productivity" },
                { metric: "4.9/5", label: "User", note: "satisfaction" }
              ],
              gradient: "from-purple-500/10 to-purple-600/10"
            }
          ].map((caseStudy, index) => (
            <div 
              key={index}
              className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${caseStudy.gradient} p-0.5 backdrop-blur-sm shadow-neon`}
            >
              <div className="h-full rounded-2xl bg-gray-900/80 p-6 backdrop-blur-sm">
                <div className="flex items-center gap-4">
                  <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center text-2xl font-bold text-white">
                    {caseStudy.logo}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{caseStudy.company}</h3>
                    <p className="text-sm text-gray-400">{caseStudy.industry}</p>
                  </div>
                </div>
                
                <div className="mt-6 relative">
                  <svg 
                    className="absolute -top-4 -left-1 h-8 w-8 text-purple-500/20" 
                    fill="currentColor" 
                    viewBox="0 0 32 32"
                    aria-hidden="true"
                  >
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.224 6.624 8.224 3.36 0 5.856-2.624 5.856-5.856 0-3.232-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.168-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.224 6.624 8.224 3.264 0 5.856-2.624 5.856-5.856 0-3.264-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 2.88-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <p className="relative z-10 text-gray-300 pl-8">{caseStudy.quote}</p>
                </div>
                
                <div className="mt-6 pt-6 border-t border-gray-800">
                  <div className="text-xs font-medium text-gray-500 mb-3">KEY RESULTS</div>
                  <div className="grid grid-cols-3 gap-3">
                    {caseStudy.results.map((result, i) => (
                      <div key={i} className="bg-gray-800/50 rounded-lg p-3 border border-gray-700/50">
                        <div className="text-xl font-bold text-white">{result.metric}</div>
                        <div className="text-xs text-gray-400">
                          <span className="text-blue-400">{result.label}</span> {result.note}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-500 mb-6">
            Want to see results like these? We'd love to discuss your use case.
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium hover:shadow-lg hover:shadow-purple-500/20 transition-all group"
          >
            Schedule a Demo
            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  )
}

function CTA() {
  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium mb-6">
          <ZapIcon className="h-4 w-4" />
          Get Started
        </div>
        
        <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-white mb-4">
          Ready to transform your team's productivity?
        </h2>
        
        <p className="mx-auto max-w-2xl text-lg text-white/90 mb-8">
          See how Lumicon can help your organization work smarter, not harder. Get in touch for a personalized demo.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3.5 text-base font-semibold text-gray-900 hover:bg-slate-100 transition-all transform hover:-translate-y-0.5 hover:shadow-neon"
          >
            Book a Demo
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-3.5 text-base font-medium text-white hover:bg-white/20 transition-all transform hover:-translate-y-0.5 hover:shadow-neon"
          >
            Contact Sales
          </a>
        </div>
        
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-white/80">
          <div className="flex items-center gap-2">
            <CheckIcon className="h-4 w-4 text-white/90" />
            <span>No credit card required</span>
          </div>
          <div className="h-4 w-px bg-amber-200/30"></div>
          <div className="flex items-center gap-2">
            <CheckIcon className="h-4 w-4 text-white/90" />
            <span>14-day free trial</span>
          </div>
          <div className="h-4 w-px bg-amber-200/30"></div>
          <div className="flex items-center gap-2">
            <CheckIcon className="h-4 w-4 text-white/90" />
            <span>Cancel anytime</span>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="relative bg-gray-950 text-gray-400 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-gray-950"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/5 via-transparent to-transparent"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <LogoMark className="h-8 w-auto" />
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">Lumicon</span>
            </div>
            <p className="text-sm text-gray-500 mt-2">
              AI-powered knowledge retrieval and automation for modern teams. Secure, private, and built for the enterprise.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a href="#" className="text-gray-500 hover:text-white transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors">
                <span className="sr-only">GitHub</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Product</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">Verses</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">Integrations</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">API Reference</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">Guides</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">Legal</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-600">
            &copy; {new Date().getFullYear()} Lumicon AI. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex items-center gap-6">
            <a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">Security</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

function LogoMark({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <img 
      src="/logo.png" 
      alt="Lumicon AI Logo" 
      className={className} 
    />
  )
}

function CheckIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  )
}

function SparkIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  )
}

function CompassIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  )
}

function ZapIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  )
}

function ShieldIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.008-2.052-.013-3.016z" />
    </svg>
  )
}

function ArrowRight({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  )
}

function Pill({ children }: { children: React.ReactNode }) { 
  return <span className="px-3 py-1 rounded-full border border-slate-300 bg-white/50 text-slate-700 text-xs">{children}</span> 
}

function Feature({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="rounded-3xl border border-slate-200 p-6 bg-white shadow-sm hover:shadow-glow transition-shadow">
      <div className="flex items-center gap-3">
        <div className="h-9 w-9 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center">{icon}</div>
        <h3 className="font-semibold text-lg">{title}</h3>
      </div>
      <p className="mt-3 text-slate-600 text-sm">{desc}</p>
    </div>
  )
}

function VerseCard({ title, tagline, points }: { title: string, tagline: string, points: string[] }) {
  return (
    <div className="rounded-3xl border border-slate-200 p-6 bg-white shadow-sm hover:shadow-glow transition-shadow">
      <div className="flex items-center gap-3">
      <LogoMark className="h-8 w-8" /><div><div className="font-semibold text-lg">{title}</div><div className="text-xs text-slate-500">{tagline}</div></div>
    </div>
    <ul className="mt-4 space-y-2 text-sm text-slate-700 list-disc pl-5">{points.map((p,i)=>(<li key={i}>{p}</li>))}</ul>
    <a href="#contact" className="mt-6 inline-flex items-center gap-2 text-slate-900 font-semibold">Learn more <ArrowRight className="h-4 w-4" /></a>
  </div>)
}
function ResultCard({ metric, label, note }: { metric: string, label: string, note: string }) {
  return (<div className="rounded-3xl border border-slate-200 p-6 bg-white shadow-sm">
    <div className="text-4xl font-extrabold">{metric}</div><div className="mt-2 font-semibold">{label}</div><div className="text-slate-600 text-sm mt-1">{note}</div>
  </div>)
}
function SampleQA({ q, a }: { q: string, a: string }) {
  return (<div className="rounded-xl border border-slate-200 p-4 bg-white">
    <div className="text-xs uppercase tracking-wide text-slate-500">Prompt</div><div className="font-medium mt-1">{q}</div>
    <div className="text-xs uppercase tracking-wide text-slate-500 mt-3">Answer</div><div className="mt-1 text-slate-700">{a}</div>
  </div>)
}
function ArchDiagram() {
  return (
    <svg viewBox="0 0 540 240" className="mt-4 w-full h-auto">
      <defs><linearGradient id="grad" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#FDBA74"/><stop offset="1" stopColor="#F97316"/></linearGradient></defs>
      <rect x="10" y="20" width="160" height="60" rx="12" fill="url(#grad)"/><text x="90" y="55" textAnchor="middle" fontSize="12" fill="white">Apps & Tools</text>
      <rect x="200" y="20" width="160" height="60" rx="12" fill="#fff" stroke="#cbd5e1"/><text x="280" y="45" textAnchor="middle" fontSize="12" fill="#0f172a">Orchestration /</text><text x="280" y="62" textAnchor="middle" fontSize="12" fill="#0f172a">Agent Planner</text>
      <rect x="380" y="20" width="150" height="60" rx="12" fill="#fff" stroke="#cbd5e1"/><text x="455" y="45" textAnchor="middle" fontSize="12" fill="#0f172a">Human</text><text x="455" y="62" textAnchor="middle" fontSize="12" fill="#0f172a">Approval</text>
      <rect x="10" y="120" width="160" height="60" rx="12" fill="#fff" stroke="#cbd5e1"/><text x="90" y="145" textAnchor="middle" fontSize="12" fill="#0f172a">Embeddings / RAG</text><text x="90" y="162" textAnchor="middle" fontSize="12" fill="#0f172a">Index</text>
      <rect x="200" y="120" width="160" height="60" rx="12" fill="#fff" stroke="#cbd5e1"/><text x="280" y="145" textAnchor="middle" fontSize="12" fill="#0f172a">Connectors</text><text x="280" y="162" textAnchor="middle" fontSize="12" fill="#0f172a">(Docs, CRM, DBs)</text>
      <rect x="380" y="120" width="150" height="60" rx="12" fill="#fff" stroke="#cbd5e1"/><text x="455" y="145" textAnchor="middle" fontSize="12" fill="#0f172a">Policy & Guardrails</text><text x="455" y="162" textAnchor="middle" fontSize="12" fill="#0f172a">Audit & Logging</text>
      <rect x="10" y="200" width="520" height="30" rx="10" fill="#e2e8f0"/><text x="270" y="218" textAnchor="middle" fontSize="12" fill="#0f172a">Local/VPC • Encryption • RBAC/SSO • PII Redaction</text>
      <line x1="170" y1="50" x2="200" y2="50" stroke="#94a3b8" /><line x1="360" y1="50" x2="380" y2="50" stroke="#94a3b8" /><line x1="90" y1="80" x2="90" y2="120" stroke="#94a3b8" /><line x1="280" y1="80" x2="280" y2="120" stroke="#94a3b8" /><line x1="455" y1="80" x2="455" y2="120" stroke="#94a3b8" />
      <line x1="90" y1="180" x2="270" y2="200" stroke="#94a3b8" /><line x1="280" y1="180" x2="270" y2="200" stroke="#94a3b8" /><line x1="455" y1="180" x2="270" y2="200" stroke="#94a3b8" />
    </svg>
  )
}
