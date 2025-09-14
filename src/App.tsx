import React from 'react'

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
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
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-lg border-b border-slate-100 shadow-sm">
      <div className="mx-auto max-w-7xl px-6 py-3 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <LogoMark className="h-12 w-auto transition-transform duration-300 group-hover:scale-105" />
          <span className="font-extrabold tracking-tight text-2xl bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">LUMICON<span className="opacity-90"> AI</span></span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#verses" className="text-slate-700 hover:text-blue-600 transition-colors duration-200 font-medium">Verses</a>
          <a href="#automation" className="text-slate-700 hover:text-blue-600 transition-colors duration-200 font-medium">Automation</a>
          <a href="#security" className="text-slate-700 hover:text-blue-600 transition-colors duration-200 font-medium">Security</a>
          <a href="#cases" className="text-slate-700 hover:text-blue-600 transition-colors duration-200 font-medium">Results</a>
          <a href="#contact" className="text-slate-700 hover:text-blue-600 transition-colors duration-200 font-medium">Contact</a>
        </nav>
        <div className="flex items-center gap-3">
          <a 
            href="https://calendly.com/redforensic/10-minute-intro-meeting" 
            target="_blank" 
            rel="noreferrer" 
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 font-medium shadow-md hover:shadow-lg hover:-translate-y-0.5"
          >
            Book a Call
          </a>
        </div>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-slate-50 to-blue-50 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-blue-100/70 blur-3xl animate-float" />
        <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-indigo-100/60 blur-3xl animate-float animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[800px] w-[800px] rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 blur-3xl opacity-50" />
      </div>
      
      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:py-32 grid lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-7 space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/90 px-4 py-1.5 text-sm font-medium text-blue-700 shadow-sm backdrop-blur-sm hover:shadow-md transition-all duration-300">
            <SparkIcon className="h-4 w-4 text-blue-500 flex-shrink-0" /> 
            <span className="whitespace-nowrap">New: Conversant Dataverses for SMBs</span>
            <span className="ml-1.5 h-1.5 w-1.5 rounded-full bg-blue-500 animate-pulse-slow"></span>
          </div>
          
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-900">
              <span className="block">Build your </span>
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  conversant dataverse
                </span>
                <span className="absolute -bottom-1 left-0 right-0 h-3 bg-blue-100/60 -z-0 rounded-full"></span>
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl leading-relaxed">
              Transform your business with AI-powered dataverses that understand your data and automate your workflows—securely and locally deployed.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-2">
              <a 
                href="https://calendly.com/redforensic/10-minute-intro-meeting" 
                target="_blank" 
                rel="noreferrer" 
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2 group"
              >
                <span>Book a Strategy Call</span>
                <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#verses" 
                className="px-6 py-3.5 rounded-xl bg-white border border-slate-200 text-slate-700 font-medium hover:bg-slate-50 hover:border-slate-300 transition-all duration-300 flex items-center gap-2"
              >
                Explore Verses
              </a>
            </div>
            
            <div className="pt-2 flex items-center text-sm text-slate-500">
              <div className="flex -space-x-2 mr-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="h-8 w-8 rounded-full bg-white border-2 border-white shadow-sm overflow-hidden">
                    <div className="h-full w-full bg-gradient-to-br from-blue-100 to-indigo-100"></div>
                  </div>
                ))}
              </div>
              <span>Trusted by innovative teams worldwide</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-sm text-slate-600">
            <Pill>Local / VPC</Pill>
            <Pill>Encryption in transit & at rest</Pill>
            <Pill>RBAC & SSO</Pill>
            <Pill>Human-in-the-loop</Pill>
          </div>
        </div>
        
        <div className="lg:col-span-5">
          <div className="rounded-3xl border border-slate-200 shadow-sm p-6 bg-white">
            <div className="flex items-center gap-3">
              <LogoMark className="h-10 w-10" />
              <div>
                <div className="font-bold">Dataverse Preview</div>
                <div className="text-xs text-slate-500">Ask your business anything</div>
              </div>
            </div>
            <div className="mt-6 space-y-3 text-sm">
              <SampleQA q="Show me similar matters to Smith v. Metro and draft a pleading." a="Found 12 similar actions. Drafted a pleading using strongest arguments from prior wins." />
              <SampleQA q="List clients with upcoming renewals where NPS < 7." a="7 clients due next 30 days with NPS < 7. Prepared outreach sequence." />
              <SampleQA q="Summarize last quarter's revenue drivers." a="Top drivers: referrals (+22%), tax planning upsells (+11%)." />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Verses() {
  return (
    <section id="verses" className="mx-auto max-w-7xl px-6 py-16">
      <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Productized Dataverses (“Verses”)</h2>
      <p className="mt-2 text-slate-600 max-w-3xl">Industry-tuned knowledge + retrieval so teams can converse with their entire universe of data—securely, locally, and fast.</p>
      <div className="mt-10 grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        <VerseCard title="LegalVerse" tagline="For law firms" points={["Conversational access to prior cases & pleadings","Rapid first drafts & argument extraction","Local/VPC deployment with audit trails"]} />
        <VerseCard title="WealthVerse" tagline="For financial services" points={["Query client history & performance","Surface what worked (and didn’t)","Assist prep for reviews & outreach"]} />
        <VerseCard title="TaxVerse" tagline="For accounting firms" points={["Search filings, workpapers, memos","Auto-summarize changes & deadlines","Draft client-ready explanations"]} />
        <VerseCard title="SupportVerse" tagline="For customer support" points={["Instant answers from KB, tickets, chats","Auto-tag & route complex cases","QA & insights on deflection"]} />
        <VerseCard title="OpsVerse" tagline="For operations teams" points={["SOP search & action triggering","Scheduling, approvals, CRM sync","KPIs with real-time alerts"]} />
        <VerseCard title="SalesVerse" tagline="For GTM teams" points={["Personalized sequences from notes & CRM","Competitive insights on demand","Auto-assemble collateral"]} />
      </div>
    </section>
  )
}

function Automation() {
  return (
    <section id="automation" className="bg-slate-50 border-y border-slate-200">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Automate the Busywork — Keep Humans in Control</h2>
        <p className="mt-2 text-slate-600 max-w-3xl">Agentic workflows that plan multi-step tasks, call tools (calendar, CRM, docs), and request human approval at decision points.</p>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <Feature icon={<ZapIcon className="h-6 w-6" />} title="Intake & Triage" desc="Capture, enrich, and route leads or matters. Escalate with full context." />
          <Feature icon={<CompassIcon className="h-6 w-6" />} title="Document Intelligence" desc="Summarize, compare versions, extract entities, and draft next steps." />
          <Feature icon={<ShieldIcon className="h-6 w-6" />} title="Approvals & Audits" desc="Human sign-off checkpoints and immutable logs for every action." />
        </div>
      </div>
    </section>
  )
}

function Security() {
  return (
    <section id="security" className="mx-auto max-w-7xl px-6 py-16">
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Local, Private, and Secure by Design</h2>
          <p className="mt-3 text-slate-600">Deploy in your VPC or on-prem. Bring-your-own keys. Observe everything with audit trails, role-based access, and policy guardrails.</p>
          <ul className="mt-6 space-y-3 text-sm text-slate-700">
            <li className="flex items-start gap-2"><CheckIcon className="h-5 w-5 mt-0.5 text-slate-600"/> Encryption in transit & at rest</li>
            <li className="flex items-start gap-2"><CheckIcon className="h-5 w-5 mt-0.5 text-slate-600"/> RBAC, SSO (Okta/Azure AD/Google), least privilege</li>
            <li className="flex items-start gap-2"><CheckIcon className="h-5 w-5 mt-0.5 text-slate-600"/> PII redaction & policy-based data retention</li>
            <li className="flex items-start gap-2"><CheckIcon className="h-5 w-5 mt-0.5 text-slate-600"/> Content filters & human-in-the-loop approvals</li>
            <li className="flex items-start gap-2"><CheckIcon className="h-5 w-5 mt-0.5 text-slate-600"/> Full action & prompt/response auditability</li>
          </ul>
        </div>
        <div className="rounded-3xl border border-slate-200 p-6 bg-white">
          <div className="font-semibold">Reference Architecture</div>
          <ArchDiagram />
        </div>
      </div>
    </section>
  )
}

function CaseStudies() {
  return (
    <section id="cases" className="bg-white border-y border-slate-200">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Results You Can Measure</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <ResultCard metric="6×" label="Faster doc review" note="Summarization + retrieval from prior matters" />
          <ResultCard metric="40%" label="Ops time saved" note="Email triage, scheduling, CRM sync" />
          <ResultCard metric="+22%" label="Referral revenue" note="Proactive client insights & outreach" />
        </div>
      </div>
    </section>
  )
}

function CTA() {
  return (
    <section id="contact" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-amber-500 to-orange-600" />
      <div className="mx-auto max-w-7xl px-6 py-16 text-white">
        <h2 className="text-3xl font-extrabold tracking-tight">Ready to build your Verse?</h2>
        <p className="mt-2 text-amber-100 max-w-2xl">In a 30‑minute call, we’ll map 2–3 high‑ROI automations and a secure dataverse plan tailored to your stack.</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href="https://calendly.com/redforensic/10-minute-intro-meeting" target="_blank" rel="noreferrer" className="px-5 py-3 rounded-2xl bg-white text-slate-900 font-semibold hover:bg-amber-50">Book a Call</a>
          <a href="#verses" className="px-5 py-3 rounded-2xl border border-white/30 font-semibold hover:bg-white/10">See the Verses</a>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-10 text-sm text-slate-500 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <LogoMark className="h-5 w-5"/>
          <span>© {new Date().getFullYear()} Lumicon AI, LLC</span>
        </div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-slate-700">Privacy</a>
          <a href="#" className="hover:text-slate-700">Terms</a>
          <a href="#" className="hover:text-slate-700">Contact</a>
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
function Pill({ children }: { children: React.ReactNode }) { return <span className="px-3 py-1 rounded-full border border-slate-300 bg-white/50 text-slate-700 text-xs">{children}</span> }
function Feature({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (<div className="rounded-3xl border border-slate-200 p-6 bg-white shadow-sm">
    <div className="flex items-center gap-3">
      <div className="h-9 w-9 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center">{icon}</div>
      <h3 className="font-semibold text-lg">{title}</h3>
    </div>
    <p className="mt-3 text-slate-600 text-sm">{desc}</p>
  </div>)
}
function VerseCard({ title, tagline, points }: { title: string, tagline: string, points: string[] }) {
  return (<div className="rounded-3xl border border-slate-200 p-6 bg-white shadow-sm hover:shadow-glow transition-shadow">
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
function CheckIcon({ className = "h-5 w-5" }: { className?: string }) { return (<svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>) }
function SparkIcon({ className = "h-5 w-5" }: { className?: string }) { return (<svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8L12 2z"/></svg>) }
function CompassIcon({ className = "h-5 w-5" }: { className?: string }) { return (<svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="16 8 12 14 8 16 10 12 16 8"/></svg>) }
function ZapIcon({ className = "h-5 w-5" }: { className?: string }) { return (<svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>) }
function ShieldIcon({ className = "h-5 w-5" }: { className?: string }) { return (<svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>) }
function ArrowRight({ className = "h-4 w-4" }: { className?: string }) { return (<svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>) }
