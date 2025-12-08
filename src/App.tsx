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
  Shield as ShieldIcon,
  Server as ServerIcon
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
    <div className="min-h-screen relative bg-black text-white antialiased font-sans">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <Header />
        <main>
          <Hero />
          <Verses />
          <Automation />
          <Security />
          <CTA />
        </main>
        <Footer />
      </div>
    </div>
  )
}

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-sm border-b border-white/5' : 'bg-transparent'
      }`}>
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="flex items-center gap-2 group">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur opacity-75 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative bg-black p-2 rounded-full border border-white/10">
                <LogoMark className="h-6 w-6 text-white" />
              </div>
            </div>
            <span className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">Lumicon</span>
          </a>

          <nav className="hidden md:flex items-center gap-6">
            {['LegalVerse', 'Automation', 'Security'].map((item) => (
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
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="relative pt-32 pb-24 md:pt-40 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/30 border border-white/10 backdrop-blur-sm mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-400"></span>
              </span>
              <span className="text-sm font-medium text-blue-400">Now available for early access</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-6">
              <span className="block">LegalVerse</span>
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                The In-House Legal AI
              </span>
            </h1>

            <p className="text-lg text-gray-400 max-w-2xl leading-relaxed mb-8">
              Transform your firm with a fully conversant dataverse. We load your existing data into a secure, RAG-based system that runs entirely in-house.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <a
                href="https://calendly.com/redforensic/10-minute-intro-meeting"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3.5 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 flex items-center gap-2 group"
              >
                <span>Book a Strategy Call</span>
                <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#legalverse"
                className="px-6 py-3.5 rounded-lg bg-black/30 border border-white/10 text-white font-medium hover:bg-white/5 transition-all duration-300 flex items-center gap-2 group"
              >
                Explore LegalVerse
              </a>
            </div>

            <div className="flex flex-wrap gap-3 mb-8">
              <div className="px-3 py-1.5 rounded-lg bg-black/30 text-xs font-medium text-gray-300 border border-white/10">
                Local / VPC
              </div>
              <div className="px-3 py-1.5 rounded-lg bg-black/30 text-xs font-medium text-gray-300 border border-white/10">
                End-to-end encryption
              </div>
              <div className="px-3 py-1.5 rounded-lg bg-black/30 text-xs font-medium text-gray-300 border border-white/10">
                RBAC & SSO
              </div>
            </div>

            <div className="flex items-center text-sm text-gray-400">
              <div className="flex -space-x-2 mr-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="h-8 w-8 rounded-full border-2 border-black/20 overflow-hidden">
                    <div className="h-full w-full bg-gradient-to-br from-blue-500/20 to-purple-500/20"></div>
                  </div>
                ))}
              </div>
              <span>Trusted by innovative teams worldwide</span>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 rounded-2xl bg-gradient-to-br from-gray-900 to-black p-6 border border-white/5 shadow-2xl overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/5 via-transparent to-transparent opacity-30"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-6">
                  <div className="flex gap-2">
                    <div className="h-3 w-3 rounded-full bg-red-500"></div>
                    <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                    <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="flex-1 text-center text-sm font-medium text-gray-400">terminal</div>
                </div>

                <div className="font-mono text-sm text-gray-300 space-y-3">
                  <div className="flex">
                    <span className="text-blue-400">$</span>
                    <span className="ml-2 text-white">lumicon init --verse legal</span>
                  </div>
                  <div className="text-emerald-400 flex items-center">
                    <svg className="h-4 w-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Initialized LegalVerse workspace
                  </div>
                  <div className="text-emerald-400 flex items-center">
                    <svg className="h-4 w-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Connected to secure VPC
                  </div>
                  <div className="text-emerald-400 flex items-center mb-4">
                    <svg className="h-4 w-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Authenticated with SSO
                  </div>

                  <div className="pt-4 border-t border-white/5">
                    <div className="flex mb-2">
                      <span className="text-blue-400">$</span>
                      <span className="ml-2 text-white">lumicon query</span>
                      <span className="ml-1 text-gray-400">"Show pending cases with high priority"</span>
                    </div>
                    <div className="text-emerald-400 flex items-center mb-2">
                      <svg className="h-4 w-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Found 3 high-priority cases
                    </div>
                    <div className="pl-6 text-gray-400 space-y-1">
                      <div className="flex items-center">
                        <span className="text-emerald-400 mr-2">•</span>
                        <span>Smith v. Metro (Due: 2d) - Discovery</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-emerald-400 mr-2">•</span>
                        <span>Johnson LLC (Due: 3d) - Contract Review</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-emerald-400 mr-2">•</span>
                        <span>Acme Corp (Due: 5d) - Compliance</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -inset-4 -z-10 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl blur-2xl opacity-30"></div>
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
                <ArrowRightIcon className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
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
            <div className="relative z-10 rounded-2xl bg-gradient-to-br from-gray-950 to-gray-900 p-6 border border-gray-800/40 shadow-neon">
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
    <section id="legalverse" className="relative py-24 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/30 border border-white/10 text-blue-400 text-sm font-medium mb-4">
            <ScaleIcon className="h-4 w-4" />
            LegalVerse
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-8">
            Your Firm's Intelligence, <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Fully Conversant</span>
          </h2>

          <div className="relative rounded-2xl bg-gradient-to-br from-gray-900 to-black p-8 border border-white/10 shadow-2xl text-left">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent opacity-50"></div>
            <p className="text-xl text-gray-300 leading-relaxed relative z-10">
              "Lumicon’s LegalVerse device supports ABA-aligned AI use and client data protection because it runs entirely on dedicated hardware inside the firm, it keeps all client data and AI prompts local, and never sends information to public or third‑party AI services over the internet. This design avoids the core confidentiality and privilege risks highlighted in ABA and state guidance, which focus on exposure created when lawyers upload client information to external, “self‑learning” or data‑retaining AI platforms."
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-colors">
            <ScaleIcon className="h-8 w-8 text-blue-400 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">ABA-Aligned Security</h3>
            <p className="text-gray-400">Avoids confidentiality risks by keeping all client data and AI prompts entirely local.</p>
          </div>

          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/30 transition-colors">
            <ServerIcon className="h-8 w-8 text-purple-400 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Dedicated Hardware</h3>
            <p className="text-gray-400">Runs on powerful, dedicated hardware sitting safely inside your firm's infrastructure.</p>
          </div>

          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-pink-500/30 transition-colors">
            <DocumentTextIcon className="h-8 w-8 text-pink-400 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">RAG-Based Intelligence</h3>
            <p className="text-gray-400">Chat with your firm's entire history of cases, pleadings, and memos in seconds.</p>
          </div>
        </div>

      </div>
    </section>
  )
}

function Automation() {
  return (
    <section id="automation" className="relative py-24 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/30 border border-white/10 text-purple-400 text-sm font-medium mb-4">
            <ZapIcon className="h-4 w-4" />
            Workflow Automation
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
            Automate the Busywork — <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Keep Humans in Control</span>
          </h2>
          <p className="text-lg text-gray-400">
            Agentic workflows that plan multi-step tasks, call tools (calendar, CRM, docs), and request human approval at decision points.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
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
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/50 to-black/50 p-px backdrop-blur-sm border border-white/5 hover:border-white/10 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10 h-full rounded-2xl bg-gradient-to-br from-gray-900/50 to-black/50 p-6 backdrop-blur-sm">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
                    <p className="mt-1.5 text-gray-400">{feature.desc}</p>
                  </div>
                </div>

                <div className="mt-8 pt-5 border-t border-white/5">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">Workflow Example</span>
                    <a
                      href="#contact"
                      className="inline-flex items-center text-xs font-medium text-purple-400 hover:text-purple-300 transition-colors group-hover:translate-x-0.5 duration-300"
                    >
                      View
                      <svg className="ml-1 h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>

                  <div className="bg-black/30 rounded-lg p-3 text-xs text-gray-300 font-mono border border-white/5">
                    <div className="text-purple-400">on: <span className="text-white">new_lead</span></div>
                    <div className="text-purple-400">steps: <span className="text-white">[enrich, route]</span></div>
                    <div className="text-purple-400">requires_approval: <span className="text-white">true</span></div>
                  </div>
                </div>
              </div>

              <div className="absolute -inset-4 -z-10 bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-blue-500/10 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
    <section id="security" className="relative py-24 overflow-hidden bg-gradient-to-b from-black to-gray-950">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium">
              <ShieldIcon className="h-4 w-4" />
              Enterprise-Grade Security
            </div>

            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
              Local, Private, and <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Secure by Design</span>
            </h2>

            <p className="text-lg text-gray-400">
              Deploy in your VPC or on-prem. Bring-your-own keys. Observe everything with audit trails, role-based access, and policy guardrails.
            </p>

            <ul className="space-y-3.5">
              {[
                "Encryption in transit & at rest",
                "RBAC, SSO (Okta/Azure AD/Google), least privilege",
                "PII redaction & policy-based data retention",
                "Content filters & human-in-the-loop approvals",
                "Full action & prompt/response auditability"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0 mt-0.5 mr-3 flex items-center justify-center h-5 w-5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                    <CheckIcon className="h-3 w-3 text-emerald-400" />
                  </div>
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>

            <div className="pt-2">
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
            <div className="relative z-10 rounded-2xl bg-gradient-to-br from-gray-900 to-black p-8 border border-white/5 shadow-2xl overflow-hidden">
              <div className="absolute top-0 right-0 -mt-4 -mr-4 w-32 h-32 rounded-full bg-emerald-500/10 blur-3xl"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-2 text-sm font-medium text-emerald-400 mb-6">
                  <ShieldIcon className="h-4 w-4" />
                  Reference Architecture
                </div>

                <div className="space-y-6">
                  <div className="relative p-5 rounded-xl bg-black/30 border border-white/5">
                    <div className="absolute -top-2.5 left-4 px-3 py-0.5 bg-emerald-500/10 text-emerald-400 text-xs font-medium rounded-full border border-emerald-500/20">
                      Your VPC
                    </div>
                    <div className="h-64 flex items-center justify-center">
                      <div className="text-center">
                        <div className="mx-auto h-16 w-16 rounded-full bg-emerald-500/10 flex items-center justify-center mb-4">
                          <ServerIcon className="h-8 w-8 text-emerald-400" />
                        </div>
                        <h4 className="text-white font-medium mb-1">Private Cloud Deployment</h4>
                        <p className="text-sm text-gray-400">Your data never leaves your infrastructure</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -inset-4 -z-10 bg-gradient-to-br from-emerald-500/10 via-cyan-500/10 to-blue-500/10 rounded-2xl blur-2xl opacity-50"></div>
          </div>
        </div>
      </div>
    </section>
  )
}



function CTA() {
  return (
    <section id="contact" className="relative py-24 overflow-hidden bg-gradient-to-br from-blue-600 to-cyan-600">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium mb-6">
          <ZapIcon className="h-4 w-4" />
          Get Started
        </div>

        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
          Ready to transform your team's productivity?
        </h2>

        <p className="mx-auto max-w-2xl text-xl text-white/90 mb-10">
          See how Lumicon can help your organization work smarter, not harder. Get in touch for a personalized demo.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-xl bg-white px-8 py-4 text-base font-semibold text-gray-900 hover:bg-slate-100 transition-all transform hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/30"
          >
            Book a Demo
            <ArrowRightIcon className="ml-2 h-4 w-4" />
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-xl bg-transparent px-8 py-4 text-base font-medium text-white ring-2 ring-inset ring-white/20 hover:bg-white/10 transition-all transform hover:-translate-y-0.5 hover:shadow-lg hover:shadow-white/10"
          >
            Contact Sales
          </a>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-6">
          <div className="flex items-center">
            <div className="flex -space-x-2 mr-3">
              <img className="h-8 w-8 rounded-full border-2 border-white" src="https://randomuser.me/api/portraits/women/44.jpg" alt="" />
              <img className="h-8 w-8 rounded-full border-2 border-white" src="https://randomuser.me/api/portraits/men/32.jpg" alt="" />
              <img className="h-8 w-8 rounded-full border-2 border-white" src="https://randomuser.me/api/portraits/women/68.jpg" alt="" />
            </div>
            <span className="text-sm text-white/80">Join 1,000+ happy customers</span>
          </div>

          <div className="h-4 w-px bg-white/30 hidden sm:block"></div>

          <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-white/80">
            <div className="flex items-center gap-2">
              <CheckIcon className="h-4 w-4 text-white/90" />
              <span>14-day free trial</span>
            </div>
            <div className="h-4 w-px bg-white/30 hidden sm:block"></div>
            <div className="flex items-center gap-2">
              <CheckIcon className="h-4 w-4 text-white/90" />
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="relative bg-black text-gray-400 overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/5 to-transparent opacity-30"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center">
                <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Lumicon AI</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-xs">
              The most powerful AI platform for building next-generation applications.
            </p>
            <div className="flex items-center space-x-4">
              {[
                { name: 'Twitter', icon: 'M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z' },
                { name: 'GitHub', icon: 'M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z' },
                { name: 'LinkedIn', icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' }
              ].map((social) => (
                <a
                  key={social.name}
                  href="#"
                  className="text-gray-500 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/5"
                  aria-label={social.name}
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d={social.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {[
            {
              title: 'Product',
              links: ['Features', 'Solutions', 'Pricing', 'Changelog', 'Roadmap']
            },
            {
              title: 'Resources',
              links: ['Documentation', 'Tutorials', 'Blog', 'Community', 'Support']
            },
            {
              title: 'Company',
              links: ['About', 'Careers', 'Contact', 'Press', 'Brand']
            }
          ].map((column, i) => (
            <div key={i}>
              <h3 className="text-sm font-semibold text-white/90 mb-4">{column.title}</h3>
              <ul className="space-y-3">
                {column.links.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors text-sm hover:pl-1 block"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Lumicon AI. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex items-center space-x-6">
            {['Privacy', 'Terms', 'Cookies'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-sm text-gray-400 hover:text-white transition-colors hover:underline"
              >
                {item}
              </a>
            ))}
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
      <ul className="mt-4 space-y-2 text-sm text-slate-700 list-disc pl-5">{points.map((p, i) => (<li key={i}>{p}</li>))}</ul>
      <a href="#contact" className="mt-6 inline-flex items-center gap-2 text-slate-900 font-semibold">Learn more <ArrowRightIcon className="h-4 w-4" /></a>
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
      <defs><linearGradient id="grad" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#FDBA74" /><stop offset="1" stopColor="#F97316" /></linearGradient></defs>
      <rect x="10" y="20" width="160" height="60" rx="12" fill="url(#grad)" /><text x="90" y="55" textAnchor="middle" fontSize="12" fill="white">Apps & Tools</text>
      <rect x="200" y="20" width="160" height="60" rx="12" fill="#fff" stroke="#cbd5e1" /><text x="280" y="45" textAnchor="middle" fontSize="12" fill="#0f172a">Orchestration /</text><text x="280" y="62" textAnchor="middle" fontSize="12" fill="#0f172a">Agent Planner</text>
      <rect x="380" y="20" width="150" height="60" rx="12" fill="#fff" stroke="#cbd5e1" /><text x="455" y="45" textAnchor="middle" fontSize="12" fill="#0f172a">Human</text><text x="455" y="62" textAnchor="middle" fontSize="12" fill="#0f172a">Approval</text>
      <rect x="10" y="120" width="160" height="60" rx="12" fill="#fff" stroke="#cbd5e1" /><text x="90" y="145" textAnchor="middle" fontSize="12" fill="#0f172a">Embeddings / RAG</text><text x="90" y="162" textAnchor="middle" fontSize="12" fill="#0f172a">Index</text>
      <rect x="200" y="120" width="160" height="60" rx="12" fill="#fff" stroke="#cbd5e1" /><text x="280" y="145" textAnchor="middle" fontSize="12" fill="#0f172a">Connectors</text><text x="280" y="162" textAnchor="middle" fontSize="12" fill="#0f172a">(Docs, CRM, DBs)</text>
      <rect x="380" y="120" width="150" height="60" rx="12" fill="#fff" stroke="#cbd5e1" /><text x="455" y="145" textAnchor="middle" fontSize="12" fill="#0f172a">Policy & Guardrails</text><text x="455" y="162" textAnchor="middle" fontSize="12" fill="#0f172a">Audit & Logging</text>
      <rect x="10" y="200" width="520" height="30" rx="10" fill="#e2e8f0" /><text x="270" y="218" textAnchor="middle" fontSize="12" fill="#0f172a">Local/VPC • Encryption • RBAC/SSO • PII Redaction</text>
      <line x1="170" y1="50" x2="200" y2="50" stroke="#94a3b8" /><line x1="360" y1="50" x2="380" y2="50" stroke="#94a3b8" /><line x1="90" y1="80" x2="90" y2="120" stroke="#94a3b8" /><line x1="280" y1="80" x2="280" y2="120" stroke="#94a3b8" /><line x1="455" y1="80" x2="455" y2="120" stroke="#94a3b8" />
      <line x1="90" y1="180" x2="270" y2="200" stroke="#94a3b8" /><line x1="280" y1="180" x2="270" y2="200" stroke="#94a3b8" /><line x1="455" y1="180" x2="270" y2="200" stroke="#94a3b8" />
    </svg>
  )
}
