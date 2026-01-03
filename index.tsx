
import React, { useState, useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import { 
  motion, 
  AnimatePresence, 
  useInView 
} from 'framer-motion';
import { 
  Globe, 
  ChevronDown, 
  ArrowRight, 
  Menu, 
  X,
  Building2,
  Zap, 
  HardHat, 
  Radio,
  Phone,
  Mail,
  MapPin,
  Award,
  Cpu, 
  Lightbulb, 
  Server, 
  Layers, 
  ChevronRight, 
  CheckCircle2, 
  ChevronUp, 
  ShieldCheck, 
  Signal, 
  LayoutDashboard, 
  Users, 
  Briefcase, 
  History, 
  Target, 
  TowerControl as Tower, 
  BatteryCharging, 
  Settings, 
  Activity, 
  BarChart3, 
  Network, 
  Database, 
  BrainCircuit as Brain, 
  ArrowUpCircle, 
  Construction, 
  Medal, 
  FileCheck, 
  GraduationCap, 
  ClipboardList, 
  Stethoscope, 
  TreePine, 
  SearchCheck, 
  Home
} from 'lucide-react';

/**
 * INFINETH SOLUTIONS - PRODUCTION V2.6
 * Proportionally Balanced & Harmonized UI
 */

// --- Types ---
type PageID = 
  | 'home' 
  | 'identity' | 'leadership' | 'board' | 'portfolio-detailed' | 'presence'
  | 'telecom' | 'power' | 'om' | 'mobile-network' | 'energy-mgmt'
  | 'ict' | 'coresite' | 'ai-iot' | 'mobility' | 'datacenters'
  | 'awards' | 'iso' | 'academy' | 'consultancy' | 'ehs';

// --- Global Typography Constants ---
const UI_CLASSES = {
  displayLarge: "text-5xl md:text-8xl font-black tracking-tighter leading-[0.9]",
  sectionTitle: "text-5xl md:text-7xl font-black tracking-tighter leading-[0.95]",
  cardTitle: "text-2xl font-black tracking-tighter leading-tight",
  tag: "font-black uppercase tracking-[0.4em] text-[10px] block",
  bodyLarge: "text-lg md:text-xl font-bold leading-relaxed opacity-60",
};

// --- Constants & Config ---
const NAV_CONFIG = [
  {
    label: 'IDENTITY',
    icon: Globe,
    overview: {
      title: "Who We Are",
      description: "Ethiopia's premier infrastructure provider.",
      cta: "Our History",
      tag: "Corporate"
    },
    items: [
      { label: 'Identity & Impact', page: 'identity', category: 'Corporate' },
      { label: 'Leadership Team', page: 'leadership', category: 'Corporate' },
      { label: 'Board of Directors', page: 'board', category: 'Corporate' },
      { label: 'Impact Portfolio', page: 'portfolio-detailed', category: 'Corporate' },
      { label: 'Global Presence', page: 'presence', category: 'Corporate' }
    ]
  },
  {
    label: 'ENGINEERING',
    icon: HardHat,
    overview: {
      title: "Resilience",
      description: "High-capacity telecom and power systems.",
      cta: "Capabilities",
      tag: "Infrastructure"
    },
    items: [
      { label: 'Telecom Works', page: 'telecom', category: 'Field' },
      { label: 'Power Systems', page: 'power', category: 'Field' },
      { label: 'Operations & Maint.', page: 'om', category: 'Field' },
      { label: 'Network Rollout', page: 'mobile-network', category: 'Field' },
      { label: 'Energy Mgmt', page: 'energy-mgmt', category: 'Field' }
    ]
  },
  {
    label: 'INNOVATION',
    icon: Lightbulb,
    overview: {
      title: "Digital Edge",
      description: "Modernizing industry through ICT and AI.",
      cta: "Digital Road",
      tag: "Technology"
    },
    items: [
      { label: 'ICT & Connectivity', page: 'ict', category: 'Digital' },
      { label: 'CoreSite Cloud', page: 'coresite', category: 'Digital' },
      { label: 'AI & IoT Systems', page: 'ai-iot', category: 'Digital' },
      { label: 'Vertical Mobility', page: 'mobility', category: 'Digital' },
      { label: 'Smart Data Centers', page: 'datacenters', category: 'Digital' }
    ]
  },
  {
    label: 'EXCELLENCE',
    icon: Award,
    overview: {
      title: "Integrity",
      description: "Validated by global ISO standards.",
      cta: "Certifications",
      tag: "Standards"
    },
    items: [
      { label: 'Awards & Honors', page: 'awards', category: 'Standards' },
      { label: 'ISO IMS Standards', page: 'iso', category: 'Standards' },
      { label: 'Engineering Academy', page: 'academy', category: 'Standards' },
      { label: 'Consultancy PMO', page: 'consultancy', category: 'Standards' },
      { label: 'EHS Center', page: 'ehs', category: 'Standards' }
    ]
  }
];

const ISO_DATA = [
  { id: "9001", title: "ISO 9001:2015", description: "Quality Management Systems. Meeting statutory and stakeholder requirements." },
  { id: "14001", title: "ISO 14001:2015", description: "Environmental Management. Systematic management of environmental footprints." },
  { id: "45001", title: "ISO 45001:2018", description: "Health & Safety. The foundation of our nationwide field operations." },
  { id: "27001", title: "ISO 27001:2022", description: "Information Security. Rigorous risk-based security controls." },
  { id: "22301", title: "ISO 22301:2019", description: "Business Continuity. Maintaining operations during disruptions." }
];

const TRUST_PARTNERS = ["NOKIA", "SAFARICOM", "UNITED NATIONS (UN)", "ETHIO TELECOM", "HUAWEI", "ERICSSON", "ZTE", "ABB"];

// --- Optimized Shared Components ---

const LogoSymbol = ({ className = "", forceInvert = false, isFullColor = false }) => {
  const primaryColor = isFullColor ? "#006699" : (forceInvert ? "#FFFFFF" : "#36454F");
  const secondaryColor = isFullColor ? "#36454F" : (forceInvert ? "#FFFFFF" : "#00CFFF");
  
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <motion.path 
        d="M65.4 33.4C74.6 33.4 82 40.8 82 50C82 59.2 74.6 66.6 65.4 66.6L44.6 66.6C35.4 66.6 28 59.2 28 50C28 40.8 35.4 33.4 44.6 33.4L54 33.4" 
        stroke={primaryColor} 
        strokeWidth="10" 
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      />
      <motion.path 
        d="M34.6 66.6C25.4 66.6 18 59.2 18 50C18 40.8 25.4 33.4 34.6 33.4L55.4 33.4C64.6 33.4 72 40.8 72 50C72 59.2 64.6 66.6 55.4 66.6L46 66.6" 
        stroke={secondaryColor} 
        strokeWidth="10" 
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
      />
    </svg>
  );
};

const Brand = ({ forceInvert = true, className = "", onClick }: { forceInvert?: boolean, className?: string, onClick?: () => void }) => (
  <div className={`flex items-center gap-3 cursor-pointer ${className}`} onClick={onClick}>
    <LogoSymbol className="w-10 h-10 md:w-12 md:h-12 shrink-0 transition-transform duration-500 hover:scale-110 drop-shadow-xl" forceInvert={forceInvert} isFullColor={!forceInvert} />
    <div className="flex flex-col leading-none text-left">
      <span className={`text-xl md:text-3xl font-black tracking-tighter transition-colors ${forceInvert ? 'text-white' : 'text-brand-charcoal'}`}>InfinEth</span>
      <span className={`text-[7px] md:text-[10px] font-bold tracking-[0.25em] uppercase mt-0.5 ${forceInvert ? 'text-brand-cyan' : 'text-brand-blue'}`}>Infinite Possibilities</span>
    </div>
  </div>
);

// Fix: Making children optional to ensure compatibility with TS in environments where JSX nested children are not automatically included in the props type.
const SubPageLayout = ({ children, tag, title, description, color = "text-brand-blue", onBack }: { children?: React.ReactNode, tag: string, title: string, description: string, color?: string, onBack: () => void }) => (
  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="pt-32 pb-20 min-h-screen">
    <div className="container mx-auto px-6">
      <nav className="flex items-center gap-4 mb-12 text-[10px] font-black uppercase tracking-[0.3em]">
        <button onClick={onBack} className="flex items-center gap-2 text-slate-400 hover:text-brand-blue transition-colors">
          <Home size={14} /> Home
        </button>
        <ChevronRight size={12} className="text-slate-200" />
        <span className={color}>{tag}</span>
      </nav>
      <div className="mb-16">
        <span className={`${color} ${UI_CLASSES.tag} mb-6`}>{tag}</span>
        <h2 className={`${UI_CLASSES.sectionTitle} text-brand-charcoal mb-6 max-w-5xl`}>{title}</h2>
        <p className={`text-slate-500 max-w-3xl ${UI_CLASSES.bodyLarge}`}>{description}</p>
      </div>
      {children}
      <div className="mt-24 pt-12 border-t border-slate-100 flex justify-between items-center">
         <button onClick={onBack} className="flex items-center gap-4 text-brand-blue font-black uppercase text-xs tracking-widest group">
            <div className="w-10 h-10 rounded-full border border-brand-blue flex items-center justify-center group-hover:bg-brand-blue group-hover:text-white transition-all"><ChevronRight className="rotate-180" size={16} /></div>
            Back to Overview
         </button>
         <Brand forceInvert={false} onClick={onBack} className="opacity-20 hover:opacity-100 transition-opacity" />
      </div>
    </div>
  </motion.div>
);

const HeroSlider = ({ onOpenContact }: { onOpenContact: () => void }) => {
  const [current, setCurrent] = useState(0);
  const slides = [
    { title: "Building the African Connectivity Backbone.", subtitle: "Precision engineering meets digital intelligence.", img: "https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?q=80&w=2000" },
    { title: "Resilient Power Systems for Emergent Markets.", subtitle: "High-capacity energy infrastructure designed for extremes.", img: "https://images.unsplash.com/photo-1542336391-ae2936d8efe4?q=80&w=2000" },
    { title: "Sustainable Urban Digital Architectures.", subtitle: "Next-generation smart-city solutions for expanding metropolises.", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2000" }
  ];
  
  useEffect(() => { 
    const timer = setInterval(() => setCurrent((p) => (p + 1) % slides.length), 8000); 
    return () => clearInterval(timer); 
  }, [slides.length]);

  return (
    <section className="relative h-[85vh] md:h-screen min-h-[700px] w-full overflow-hidden bg-brand-charcoal">
      <AnimatePresence mode="wait">
        <motion.div key={current} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1.5 }} className="absolute inset-0">
          <motion.img 
            src={slides[current].img} 
            className="w-full h-full object-cover brightness-[0.35]" 
            alt="Hero Background" 
            initial={{ scale: 1.1, x: -20, y: -20 }}
            animate={{ scale: 1, x: 0, y: 0 }}
            transition={{ duration: 12, ease: "linear" }}
          />
        </motion.div>
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-b from-brand-charcoal/30 via-transparent to-brand-charcoal/80" />
      <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-center">
        <motion.div key={`text-${current}`} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8 }} className="max-w-4xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-1 bg-brand-cyan" />
            <span className="text-brand-cyan font-black tracking-[0.4em] text-[9px] md:text-[10px] uppercase">ISO Certified Global Engineering</span>
          </div>
          <h1 className={UI_CLASSES.displayLarge + " text-white mb-10"}>{slides[current].title}</h1>
          <p className="text-white/60 text-lg md:text-2xl font-bold max-w-2xl mb-12 leading-relaxed">{slides[current].subtitle}</p>
          <div className="flex flex-wrap gap-5">
            <button onClick={onOpenContact} className="px-10 py-5 bg-brand-cyan text-[#001E3C] rounded-xl font-black tracking-widest text-[10px] uppercase hover:bg-white transition-all shadow-xl flex items-center gap-3 group">
              Start Partnership <ArrowRight size={16} />
            </button>
            <button className="px-10 py-5 bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-xl font-black tracking-widest text-[10px] uppercase hover:bg-white/20 transition-all">
              Capability View
            </button>
          </div>
        </motion.div>
      </div>
      <div className="absolute bottom-12 right-6 z-10 flex gap-3">
        {slides.map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)} className={`h-1 transition-all duration-500 rounded-full ${current === i ? 'bg-brand-cyan w-12' : 'bg-white/20 w-6'}`} />
        ))}
      </div>
    </section>
  );
};

// Updated Trust Bar component with a subtle dark background and clearly visible logos/text.
const ClientTrustBar = () => (
  <div className="sticky bottom-0 left-0 w-full bg-slate-900/95 backdrop-blur-xl border-t border-white/5 z-[90] py-4 shadow-2xl overflow-hidden group">
    <div className="container mx-auto px-6 flex items-center gap-10">
      {/* Context Label */}
      <div className="hidden md:flex items-center gap-3 shrink-0 border-r border-white/10 pr-10">
        <ShieldCheck size={16} className="text-brand-cyan" />
        <span className="text-[9px] font-black uppercase tracking-[0.15em] text-white/40 leading-tight">Strategic <br/> Alliances</span>
      </div>
      
      {/* Horizontal Scrolling Marquee */}
      <div className="flex-grow overflow-hidden relative">
        <div className="flex gap-16 items-center animate-marquee whitespace-nowrap py-1.5 opacity-60 group-hover:opacity-100 transition-opacity duration-700">
          {TRUST_PARTNERS.concat(TRUST_PARTNERS).map((partner, i) => (
            <span key={i} className="text-lg md:text-xl font-black text-white tracking-tighter uppercase inline-block">
              {partner}
            </span>
          ))}
        </div>
        {/* Subtle Side Fades in dark mode */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-slate-900 to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-slate-900 to-transparent pointer-events-none" />
      </div>
      
      {/* Secondary Info */}
      <div className="hidden lg:flex shrink-0 items-center gap-5">
        <div className="flex items-center gap-2">
          <Award size={14} className="text-brand-cyan" />
          <span className="text-[9px] font-black uppercase tracking-widest text-white/30">Global Engineering Partner</span>
        </div>
      </div>
    </div>
  </div>
);

const CountUp = ({ value, suffix = "" }: { value: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  useEffect(() => { if (isInView) { let s = 0; const end = value; const timer = setInterval(() => { s++; if (s >= 60) { setCount(end); clearInterval(timer); } else { setCount(v => v + (end/60)); } }, 1000/30); return () => clearInterval(timer); } }, [isInView, value]);
  return <span ref={ref}>{Number.isInteger(value) ? Math.floor(count) : count.toFixed(1)}{suffix}</span>;
};

// --- Subpage Content Definitions ---

const CorporatePages = {
  Identity: ({ onBack }: { onBack: () => void }) => (
    <SubPageLayout onBack={onBack} tag="Corporate Identity" title="Foundations of Reliability." description="Pioneering Ethiopia's infrastructure landscape since 1995.">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-10">
          <div className="flex gap-6 group"><div className="w-14 h-14 rounded-xl bg-brand-blue flex items-center justify-center text-white shrink-0 group-hover:rotate-6 transition-transform"><History size={28} /></div><div><h3 className={UI_CLASSES.cardTitle + " text-brand-charcoal mb-3"}>A Legacy of Resilience</h3><p className="text-slate-500 font-medium leading-relaxed text-sm">Maintaining a zero-failure record on mission-critical national assets.</p></div></div>
          <div className="flex gap-6 group"><div className="w-14 h-14 rounded-xl bg-brand-cyan flex items-center justify-center text-brand-charcoal shrink-0 group-hover:rotate-6 transition-transform"><Target size={28} /></div><div><h3 className={UI_CLASSES.cardTitle + " text-brand-charcoal mb-3"}>Strategic Mission</h3><p className="text-slate-500 font-medium leading-relaxed text-sm">Accelerating digital transformation through resilient infrastructure.</p></div></div>
        </div>
        <div className="rounded-[3rem] overflow-hidden shadow-xl h-[500px] bg-slate-200"><img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200" className="w-full h-full object-cover" alt="Identity" /></div>
      </div>
    </SubPageLayout>
  ),
  Leadership: ({ onBack }: { onBack: () => void }) => (
    <SubPageLayout onBack={onBack} tag="Leadership Team" title="Architects of Growth." description="Global technical mastery fused with regional intelligence.">
      <div className="grid md:grid-cols-3 gap-8">
        {[{n:"Dawit Amare", r:"CEO", b:"25+ years in rollout."}, {n:"Sara Teferra", r:"CTO", b:"Digital convergence strategies."}, {n:"Elias Bekele", r:"VP Operations", b:"Nationwide field services."}].map((l, i) => (
          <div key={i} className="bg-white p-10 rounded-[2.5rem] border border-slate-100 group shadow-sm hover:shadow-xl transition-all">
            <div className="w-16 h-16 bg-brand-charcoal rounded-full mb-6 flex items-center justify-center text-white font-black text-xl uppercase shadow-lg">{l.n.charAt(0)}</div>
            <h3 className={UI_CLASSES.cardTitle + " text-brand-charcoal mb-1.5"}>{l.n}</h3><p className="text-brand-blue font-black text-[9px] tracking-widest uppercase mb-4">{l.r}</p><p className="text-slate-400 font-medium text-xs leading-relaxed">{l.b}</p>
          </div>
        ))}
      </div>
    </SubPageLayout>
  ),
  Board: ({ onBack }: { onBack: () => void }) => (
    <SubPageLayout onBack={onBack} tag="Governance" title="Board of Directors." description="Committed to maintaining global ethical standards and transparency.">
      <div className="bg-brand-charcoal text-white rounded-[3rem] p-12 md:p-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 opacity-[0.02] pointer-events-none"><LogoSymbol className="w-80 h-80 scale-150" forceInvert={true} /></div>
        <div className="relative z-10 grid md:grid-cols-2 gap-16">
          <div className="space-y-6"><h3 className="text-3xl font-black tracking-tighter text-brand-cyan">Strategic Oversight</h3><p className="text-white/50 font-medium leading-relaxed text-sm">Providing independent oversight of our strategy, ESG commitments, and financial integrity.</p><div className="flex gap-4"><ShieldCheck size={32} className="text-brand-emerald" /><Award size={32} className="text-brand-blue" /></div></div>
          <div className="space-y-4">{["Advisory Councils", "ESG Oversight", "Technical Audit Board"].map(t => <div key={t} className="pb-4 border-b border-white/10 flex justify-between items-center group cursor-pointer hover:border-brand-cyan transition-colors"><span className="text-lg font-bold">{t}</span><ArrowRight size={18} className="text-brand-cyan group-hover:translate-x-2 transition-transform" /></div>)}</div>
        </div>
      </div>
    </SubPageLayout>
  ),
  Portfolio: ({ onBack }: { onBack: () => void }) => (
    <SubPageLayout onBack={onBack} tag="Portfolio" title="Impact Case Studies." description="Scalable infrastructure projects across the southern corridor.">
      <div className="grid md:grid-cols-2 gap-8">
        {[{t:"Energy Grid", d:"MV/HV Substation deployment.", i:"https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=800"}, {t:"Smart Fiber", d:"2,500km backbone deployment.", i:"https://images.unsplash.com/photo-1551703599-6b3e8379aa8c?q=80&w=800"}].map((p, i) => (
          <div key={i} className="group relative h-[380px] overflow-hidden rounded-[2.5rem] shadow-lg">
            <img src={p.i} alt={p.t} className="absolute inset-0 w-full h-full object-cover brightness-75 group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 p-10 flex flex-col justify-end text-white z-10 pointer-events-none">
              <h3 className={UI_CLASSES.cardTitle + " mb-2 group-hover:text-brand-cyan transition-colors"}>{p.t}</h3><p className="text-white/60 text-xs font-medium">{p.d}</p>
            </div>
          </div>
        ))}
      </div>
    </SubPageLayout>
  ),
  Presence: ({ onBack }: { onBack: () => void }) => (
    <SubPageLayout onBack={onBack} tag="Global Presence" title="Localized Precision." description="Regional hubs ensuring rapid deployment and technical oversight.">
      <div className="grid md:grid-cols-4 gap-6">
        {[{c:"Addis Ababa", t:"HQ & Design"}, {c:"Bahir Dar", t:"Northern Hub"}, {c:"Dire Dawa", t:"Logistics Hub"}, {c:"Mekelle", t:"Support Center"}].map((o, i) => (
          <div key={i} className="p-8 bg-white rounded-[2rem] border border-slate-100 shadow-sm text-center">
            <MapPin size={28} className="text-brand-blue mx-auto mb-4" /><h3 className={UI_CLASSES.cardTitle + " text-brand-charcoal mb-1"}>{o.c}</h3><p className="text-slate-400 text-[9px] font-bold uppercase tracking-widest">{o.t}</p>
          </div>
        ))}
      </div>
    </SubPageLayout>
  )
};

// --- Infrastructure Subpages ---
const InfrastructurePages = {
  Telecom: ({ onBack }: { onBack: () => void }) => (
    <SubPageLayout onBack={onBack} tag="Telecom" title="Telecom Excellence." description="Pioneering mission-critical networks nationwide.">
      <div className="grid lg:grid-cols-3 gap-8">
        {[{i:Tower, t:"Tower Works"}, {i:Radio, t:"Active Radio"}, {i:Layers, t:"Fiber Optic"}].map((item, i) => (
          <div key={i} className="p-10 bg-white rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all"><item.i size={36} className="text-brand-blue mb-6" /><h3 className={UI_CLASSES.cardTitle + " text-brand-charcoal mb-3"}>{item.t}</h3><p className="text-slate-500 text-xs font-medium leading-relaxed">Certified engineering for resilient structures and signal integration.</p></div>
        ))}
      </div>
    </SubPageLayout>
  ),
  Power: ({ onBack }: { onBack: () => void }) => (
    <SubPageLayout onBack={onBack} tag="Power Systems" title="Stable Energy Grid." description="Robust solutions from industrial substations to renewable microgrids.">
      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div className="p-8 bg-brand-charcoal text-white rounded-[2rem] shadow-xl"><Zap size={28} className="text-brand-emerald mb-4" /><h3 className={UI_CLASSES.cardTitle + " mb-2"}>Electrification</h3><p className="text-white/50 text-xs">MV/HV system design for industrial clusters.</p></div>
          <div className="p-8 bg-brand-blue text-white rounded-[2rem] shadow-xl"><BatteryCharging size={28} className="text-brand-cyan mb-4" /><h3 className={UI_CLASSES.cardTitle + " mb-2"}>Solar Microgrids</h3><p className="text-white/50 text-xs">Hybrid solutions for remote off-grid operations.</p></div>
        </div>
        <div className="bg-white rounded-[3rem] p-12 border border-slate-100 flex flex-col justify-center"><h3 className="text-2xl font-black text-brand-charcoal mb-6">Technical Proficiency</h3><ul className="space-y-4">{["Switchgear Supply", "HV Transformer O&M", "Automation Panels", "Lightning Protection"].map(t => <li key={t} className="flex items-center gap-3 text-slate-500 font-bold text-sm"><CheckCircle2 className="text-brand-emerald" size={18} />{t}</li>)}</ul></div>
      </div>
    </SubPageLayout>
  ),
  OM: ({ onBack }: { onBack: () => void }) => (
    <SubPageLayout onBack={onBack} tag="O&M" title="Zero-Failure Ops." description="Maintaining 99.9% uptime through 24/7 field service.">
      <div className="grid lg:grid-cols-4 gap-6">
        {[{i:Activity, l:"Monitoring"}, {i:Settings, l:"Audit"}, {i:Zap, l:"Logistics"}, {i:Radio, l:"Radio O&M"}].map((s, i) => (
          <div key={i} className="p-8 bg-white rounded-[2rem] border border-slate-100 text-center shadow-sm hover:border-brand-blue transition-colors">
            <s.i size={28} className="text-brand-blue mx-auto mb-4" /><h3 className="font-black text-brand-charcoal uppercase tracking-widest text-[10px]">{s.l}</h3>
          </div>
        ))}
      </div>
    </SubPageLayout>
  ),
  Network: ({ onBack }: { onBack: () => void }) => (
    <SubPageLayout onBack={onBack} tag="Rollout" title="Network Expansion." description="Accelerating the implementation of 4G/5G networks.">
       <div className="rounded-[3rem] bg-brand-charcoal overflow-hidden text-white flex flex-col md:flex-row h-[420px]">
          <div className="md:w-1/2 p-16 flex flex-col justify-center"><h2 className="text-3xl font-black mb-6 tracking-tighter">Carrier Implementation</h2><p className="text-white/40 text-base leading-relaxed mb-8">Handling acquisition to technical commissioning for global carriers.</p></div>
          <div className="md:w-1/2 h-full"><img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800" className="w-full h-full object-cover" alt="Net" /></div>
       </div>
    </SubPageLayout>
  ),
  EnergyMgmt: ({ onBack }: { onBack: () => void }) => (
    <SubPageLayout onBack={onBack} tag="Energy" title="Intelligent Efficiency." description="IoT and automation to minimize environmental footprint.">
      <div className="grid md:grid-cols-3 gap-8">
        {[{i:BarChart3, t:"Analytics"}, {i:Cpu, t:"Controllers"}, {i:Target, t:"Green Footprint"}].map((s, i) => (
          <div key={i} className="p-10 bg-white rounded-[2rem] border border-slate-100 flex flex-col shadow-sm"><s.i size={28} className="text-brand-blue mb-6" /><h3 className={UI_CLASSES.cardTitle + " text-brand-charcoal mb-3"}>{s.t}</h3><p className="text-slate-400 font-medium text-xs">Modeling consumption to optimize operational spend.</p></div>
        ))}
      </div>
    </SubPageLayout>
  )
};

// --- Innovation & Excellence Subpages ---
const SubContentGrids = {
  Innovation: (onBack: () => void, tag: string, title: string, desc: string, icon1: any, icon2: any, icon3: any) => (
    <SubPageLayout onBack={onBack} tag={tag} title={title} description={desc} color="text-brand-cyan">
       <div className="grid md:grid-cols-3 gap-8">
          {[icon1, icon2, icon3].map((Icon, i) => (
            <div key={i} className="p-10 bg-white rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all">
              <Icon size={40} className="text-brand-cyan mb-6" /><h3 className={UI_CLASSES.cardTitle + " text-brand-charcoal mb-3"}>Core Solution {i+1}</h3><p className="text-slate-500 font-medium text-xs">Scaling digital infrastructure with next-gen AI and connected compute.</p>
            </div>
          ))}
       </div>
    </SubPageLayout>
  ),
  Excellence: (onBack: () => void, tag: string, title: string, desc: string, icon1: any, icon2: any, icon3: any) => (
    <SubPageLayout onBack={onBack} tag={tag} title={title} description={desc} color="text-brand-emerald">
       <div className="grid md:grid-cols-3 gap-8">
          {[icon1, icon2, icon3].map((Icon, i) => (
            <div key={i} className="p-10 bg-white rounded-[2rem] border border-slate-100 shadow-sm hover:border-brand-emerald/20 transition-all">
              <Icon size={40} className="text-brand-emerald mb-6" /><h3 className={UI_CLASSES.cardTitle + " text-brand-charcoal mb-3"}>Standard Pillar {i+1}</h3><p className="text-slate-500 font-medium text-xs">Validating leadership through rigorous audits and world-class technical certification.</p>
            </div>
          ))}
       </div>
    </SubPageLayout>
  )
};

// --- Main App Logic ---

const App = () => {
  const [currentPage, setCurrentPage] = useState<PageID>('home');
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [activeISO, setActiveISO] = useState("9001");
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const h = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener('scroll', h);
    return () => window.removeEventListener('scroll', h);
  }, []);

  const navigateTo = (page: PageID, hash?: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMobileOpen(false);
    setActiveMenu(null);
    if (hash && page === 'home') {
      setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    }
  };

  const renderContent = () => {
    switch(currentPage) {
      case 'identity': return <CorporatePages.Identity onBack={() => navigateTo('home')} />;
      case 'leadership': return <CorporatePages.Leadership onBack={() => navigateTo('home')} />;
      case 'board': return <CorporatePages.Board onBack={() => navigateTo('home')} />;
      case 'portfolio-detailed': return <CorporatePages.Portfolio onBack={() => navigateTo('home')} />;
      case 'presence': return <CorporatePages.Presence onBack={() => navigateTo('home')} />;
      case 'telecom': return <InfrastructurePages.Telecom onBack={() => navigateTo('home')} />;
      case 'power': return <InfrastructurePages.Power onBack={() => navigateTo('home')} />;
      case 'om': return <InfrastructurePages.OM onBack={() => navigateTo('home')} />;
      case 'mobile-network': return <InfrastructurePages.Network onBack={() => navigateTo('home')} />;
      case 'energy-mgmt': return <InfrastructurePages.EnergyMgmt onBack={() => navigateTo('home')} />;
      case 'ict': return SubContentGrids.Innovation(() => navigateTo('home'), "ICT", "Network Convergence.", "Deploying high-speed network backbones.", Network, ShieldCheck, Server);
      case 'coresite': return SubContentGrids.Innovation(() => navigateTo('home'), "CoreSite", "Carrier Neutral.", "Edge compute and low-latency cloud access.", Database, Globe, Signal);
      case 'ai-iot': return SubContentGrids.Innovation(() => navigateTo('home'), "AI & IoT", "Predictive Insights.", "Industrial monitoring via real-time sensors.", Brain, Activity, LayoutDashboard);
      case 'mobility': return SubContentGrids.Innovation(() => navigateTo('home'), "Vertical", "Smart Transit.", "Elevator systems and traffic analysis.", ArrowUpCircle, Settings, Construction);
      case 'datacenters': return SubContentGrids.Innovation(() => navigateTo('home'), "Data Centers", "Tier-3 Ops.", "High-availability facility design.", Server, Database, Zap);
      case 'awards': return SubContentGrids.Excellence(() => navigateTo('home'), "Awards", "Carrier Grade.", "Celebrating 30 years of precision.", Medal, ShieldCheck, Award);
      case 'iso': return SubContentGrids.Excellence(() => navigateTo('home'), "ISO", "IMS Quality.", "Rigorous Integrated Management Systems.", FileCheck, CheckCircle2, ShieldCheck);
      case 'academy': return SubContentGrids.Excellence(() => navigateTo('home'), "Academy", "Mastery Hub.", "Investing in African engineering talent.", GraduationCap, Users, History);
      case 'consultancy': return SubContentGrids.Excellence(() => navigateTo('home'), "Consultancy", "Strategic Advisory.", "Feasibility studies and PMO.", ClipboardList, SearchCheck, Target);
      case 'ehs': return SubContentGrids.Excellence(() => navigateTo('home'), "EHS Center", "Zero Incident.", "Occupational health and green stewardship.", Stethoscope, TreePine, HardHat);
      default: return (
        <>
          <HeroSlider onOpenContact={() => setIsContactOpen(true)} />
          {/* Trust Bar sticky bottom marquee implementation */}
          <ClientTrustBar />
          
          <section className="py-16 bg-white overflow-hidden border-b border-slate-50">
             <div className="container mx-auto px-6 mb-8 flex items-center gap-3"><LogoSymbol className="w-6 h-6 opacity-30" /><span className={UI_CLASSES.tag + " text-brand-charcoal/30"}>Strategic Delivery Network</span></div>
             <div className="flex gap-20 items-center animate-marquee whitespace-nowrap opacity-[0.1] hover:opacity-[0.8] transition-opacity duration-700">{TRUST_PARTNERS.concat(TRUST_PARTNERS).map((n, i) => (<span key={i} className="text-4xl md:text-5xl font-black text-brand-charcoal tracking-tighter uppercase">{n}</span>))}</div>
          </section>
          
          <section id="infrastructure" className="py-24 bg-white">
            <div className="container mx-auto px-6">
               <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-10">
                 <div className="max-w-2xl"><span className={`text-brand-blue ${UI_CLASSES.tag} mb-6`}>Pillar I</span><h2 className={`${UI_CLASSES.sectionTitle} text-brand-charcoal`}>Structural <br/> Infrastructure.</h2></div>
                 <p className={`text-slate-500 max-w-sm ${UI_CLASSES.bodyLarge}`}>National connectivity and power systems engineered for resilience.</p>
               </div>
               <div className="grid md:grid-cols-2 gap-10">
                 <ServiceCard title="Telecom Systems" icon={Radio} color="bg-brand-blue" items={["Tower Civil Works", "Mobile Network Rollout"]} onClick={() => navigateTo('telecom')} />
                 <ServiceCard title="Power & Energy" icon={Zap} color="bg-brand-charcoal" items={["Industrial Electrification", "Solar Microgrids"]} onClick={() => navigateTo('power')} />
               </div>
            </div>
          </section>

          <section id="innovation" className="py-24 bg-slate-50">
            <div className="container mx-auto px-6">
              <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-10">
                <div className="max-w-2xl"><span className={`text-brand-cyan ${UI_CLASSES.tag} mb-6`}>Pillar II</span><h2 className={`${UI_CLASSES.sectionTitle} text-brand-charcoal`}>Digital <br/> Convergence.</h2></div>
                <p className={`text-slate-500 max-sm ${UI_CLASSES.bodyLarge}`}>Fusing industrial hardware with next-gen intelligence.</p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                <ServiceCard title="ICT Systems" icon={Server} color="bg-brand-blue" items={["Data Centers", "Enterprise Networks"]} onClick={() => navigateTo('ict')} />
                <ServiceCard title="Smart AI" icon={Cpu} color="bg-brand-cyan" items={["IoT Integrations", "Predictive Ops"]} onClick={() => navigateTo('ai-iot')} />
                <ServiceCard title="Vertical Mobility" icon={Layers} color="bg-slate-400" items={["Elevator Systems", "Traffic Analytics"]} onClick={() => navigateTo('mobility')} />
              </div>
            </div>
          </section>

          <section id="excellence" className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-6">
              <div className="max-w-3xl mb-16"><span className={`text-brand-emerald ${UI_CLASSES.tag} mb-6`}>Pillar III</span><h2 className={`${UI_CLASSES.sectionTitle} text-brand-charcoal mb-8`}>The Integrity Framework.</h2></div>
              <div className="bg-brand-charcoal rounded-[3rem] overflow-hidden grid lg:grid-cols-5 shadow-xl">
                <div className="lg:col-span-2 min-h-[450px] flex flex-col items-center justify-center p-12 bg-gradient-to-br from-brand-charcoal to-slate-900">
                  <AnimatePresence mode="wait"><motion.div key={activeISO} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="w-64 h-64 bg-white rounded-full p-10 shadow-xl flex flex-col items-center justify-center relative"><span className="text-[9px] font-black tracking-[0.2em] text-brand-charcoal/40 uppercase mb-2">Certified</span><span className="text-4xl font-black text-brand-charcoal tracking-tighter">ISO {activeISO}</span></motion.div></AnimatePresence>
                </div>
                <div className="lg:col-span-3 p-10 md:p-16 bg-white/5 divide-y divide-white/5">{ISO_DATA.map((iso) => (<div key={iso.id} className="py-8 cursor-pointer group" onClick={() => setActiveISO(iso.id)}><div className="flex items-center justify-between"><div className="flex items-center gap-8"><div className={`w-12 h-12 rounded-xl flex items-center justify-center ${activeISO === iso.id ? 'bg-brand-emerald text-brand-charcoal' : 'bg-white/5 text-white/10'}`}><CheckCircle2 size={24} /></div><h3 className={`text-2xl md:text-3xl font-black tracking-tighter ${activeISO === iso.id ? 'text-white' : 'text-white/20'}`}>{iso.title}</h3></div><ChevronDown size={28} className={`transition-all ${activeISO === iso.id ? 'rotate-180 text-brand-emerald' : 'text-white/5'}`} /></div>{activeISO === iso.id && <motion.p initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="text-white/40 text-base leading-relaxed font-bold mt-6 pl-20">{iso.description}</motion.p>}</div>))}</div>
              </div>
            </div>
          </section>

          <section className="py-24 bg-brand-charcoal text-white relative z-10 text-center">
            <div className="container mx-auto px-6 grid md:grid-cols-4 gap-16">
              {[{l:"Chapters", v:3}, {l:"Field Staff", v:120, s:"+"}, {l:"Projects", v:450, s:"+"}, {l:"Uptime", v:99.9, s:"%"}].map((st, i) => (
                <div key={i}>
                  <div className="text-6xl font-black mb-3 tracking-tighter leading-none"><CountUp value={st.v} suffix={st.s || ""} /></div>
                  <p className="text-brand-cyan/40 font-black uppercase text-[9px] tracking-[0.3em]">{st.l}</p>
                </div>
              ))}
            </div>
          </section>
          
          <section className="py-32 bg-white text-center">
            <div className="container mx-auto px-6">
              <h2 className={UI_CLASSES.displayLarge + " text-brand-charcoal mb-16"}>Precise Engineering. <br/> Without Limits.</h2>
              <button onClick={() => setIsContactOpen(true)} className="bg-brand-blue text-white px-16 py-8 rounded-2xl font-black tracking-widest text-[11px] shadow-2xl hover:scale-105 transition-all uppercase">Partner With Us</button>
            </div>
          </section>
        </>
      );
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 selection:bg-brand-blue selection:text-white">
      {/* Header Implementation */}
      <header className="fixed top-0 left-0 w-full h-[36px] bg-brand-emerald z-[120] flex items-center justify-center overflow-hidden border-b border-black/5">
        <div className="container mx-auto px-6 flex items-center justify-center gap-4 text-brand-charcoal font-black text-[10px] tracking-[0.1em] uppercase"><LogoSymbol className="w-4 h-4" /><p>ISO 27001 Security Excellence Certified</p></div>
      </header>
      <header className={`fixed top-[36px] left-0 w-full z-[100] transition-all duration-500 border-b ${isScrolled ? 'bg-[#001E3C]/95 border-white/10 shadow-2xl py-3 backdrop-blur-md' : 'bg-transparent border-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex items-center justify-between">
          <Brand forceInvert={true} onClick={() => navigateTo('home')} />
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_CONFIG.map((nav, idx) => {
              const isHovered = activeMenu === nav.label;
              const dropdownPosition = idx === 0 ? 'left-0' : (idx === 1 ? 'left-1/2 -translate-x-1/2' : (idx === 2 ? 'left-1/2 -translate-x-1/2' : 'right-0'));
              
              return (
                <div key={nav.label} className="relative px-3 py-2 group" onMouseEnter={() => setActiveMenu(nav.label)} onMouseLeave={() => setActiveMenu(null)}>
                  <div className={`flex items-center gap-1.5 cursor-pointer text-[11px] font-black tracking-[0.2em] transition-all duration-300 uppercase drop-shadow-md ${isHovered ? 'text-brand-cyan' : 'text-white/80 hover:text-white'}`}>
                    {nav.label} 
                    <ChevronDown size={12} className={`transition-all duration-300 ease-out ${isHovered ? 'rotate-180 text-brand-cyan scale-110' : 'opacity-40 group-hover:opacity-100'}`} />
                  </div>
                  <AnimatePresence>
                    {isHovered && (
                      <motion.div initial={{ opacity: 0, y: 8, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 8, scale: 0.98 }} transition={{ duration: 0.2 }} className={`absolute top-full mt-2 w-[420px] max-w-[calc(100vw-2rem)] bg-white shadow-2xl rounded-[1rem] overflow-hidden grid grid-cols-12 border border-slate-100/50 z-[110] ${dropdownPosition}`}>
                        <div className="col-span-5 bg-[#001E3C] p-6 text-white relative overflow-hidden flex flex-col justify-between">
                          <div className="relative z-10">
                            <span className="text-[7.5px] font-black uppercase tracking-[0.2em] text-brand-cyan mb-2.5 block">{nav.overview.tag}</span>
                            <h3 className="text-base font-black tracking-tight mb-2 leading-tight">{nav.overview.title}</h3>
                            <p className="text-white/30 text-[9px] font-bold leading-relaxed">{nav.overview.description}</p>
                          </div>
                          <button onClick={() => navigateTo('home')} className="group flex items-center gap-2.5 text-[7.5px] font-black uppercase tracking-[0.3em] text-white hover:text-brand-cyan mt-5">
                            <span className="border-b border-white/10 group-hover:border-brand-cyan transition-colors pb-0.5">{nav.overview.cta}</span>
                            <ArrowRight size={10} className="group-hover:translate-x-1 transition-transform" />
                          </button>
                        </div>
                        <div className="col-span-7 p-3.5 bg-white">
                          <div className="grid grid-cols-1 gap-0.5">
                            {nav.items.map((item, i) => (
                              <button key={i} onClick={() => navigateTo(item.page as PageID)} className="flex items-center justify-between w-full px-3 py-2 rounded-lg hover:bg-slate-50 text-slate-600 hover:text-brand-blue group transition-all">
                                <div className="flex flex-col text-left">
                                  <span className="font-bold text-[11px] tracking-tight leading-none mb-0.5">{item.label}</span>
                                  <span className="text-[6.5px] font-black text-slate-300 uppercase tracking-[0.15em]">{item.category}</span>
                                </div>
                                <ChevronRight size={10} className="opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all text-brand-blue" />
                              </button>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
            <button onClick={() => setIsContactOpen(true)} className="ml-4 px-5 py-2.5 rounded-lg bg-brand-cyan text-[#001E3C] text-[10px] font-black tracking-widest uppercase hover:bg-white hover:scale-105 active:scale-95 transition-all shadow-lg border border-brand-cyan/20">Contact</button>
          </nav>
          <button onClick={() => setIsMobileOpen(true)} className="lg:hidden p-3 rounded-xl bg-white/20 text-white"><Menu size={24} /></button>
        </div>
      </header>

      {/* Mobile Nav Drawer */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsMobileOpen(false)} className="fixed inset-0 z-[140] bg-brand-charcoal/80 backdrop-blur-sm lg:hidden" />
            <motion.div initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ type: 'spring', damping: 25, stiffness: 200 }} className="fixed inset-y-0 right-0 z-[150] w-full max-w-[320px] bg-[#001E3C] text-white shadow-2xl flex flex-col lg:hidden">
               <div className="flex justify-between items-center p-8 border-b border-white/10">
                 <Brand forceInvert={true} onClick={() => navigateTo('home')} className="scale-90 origin-left" />
                 <button onClick={() => setIsMobileOpen(false)} className="p-3 bg-white/5 hover:bg-white/10 rounded-2xl transition-all text-brand-cyan active:scale-90" aria-label="Close menu"><X size={32} /></button>
               </div>
               <nav className="flex-grow overflow-y-auto p-8 space-y-10">
                  {NAV_CONFIG.map(cat => (
                    <div key={cat.label} className="space-y-4">
                      <div className="flex items-center gap-3"><cat.icon size={14} className="text-brand-cyan/40" /><span className="text-[10px] font-black uppercase text-brand-cyan/40 tracking-[0.4em]">{cat.label}</span></div>
                      <div className="grid gap-2 pl-4 border-l border-white/5">{cat.items.map(item => (<button key={item.label} onClick={() => navigateTo(item.page as PageID)} className="text-lg font-bold text-left text-white/70 hover:text-brand-cyan transition-all py-1 flex items-center justify-between group">{item.label}<ChevronRight size={16} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" /></button>))}</div>
                    </div>
                  ))}
               </nav>
               <div className="p-8 border-t border-white/10 bg-brand-charcoal/30"><button onClick={() => { setIsMobileOpen(false); setIsContactOpen(true); }} className="w-full bg-brand-cyan text-brand-charcoal py-5 rounded-2xl font-black uppercase text-[11px] tracking-widest shadow-xl active:scale-95 transition-all flex items-center justify-center gap-3">Get In Touch <ArrowRight size={16} /></button></div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <main className="min-h-screen">
        <AnimatePresence mode="wait"><motion.div key={currentPage} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>{renderContent()}</motion.div></AnimatePresence>
      </main>

      <footer className="bg-brand-charcoal text-white pt-32 pb-16">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-4 gap-16 mb-24">
            <div className="col-span-2 space-y-10"><Brand onClick={() => navigateTo('home')} /><p className="text-white/40 text-2xl max-w-lg leading-snug font-bold">Pioneering Ethiopia's modern infrastructure through precision engineering.</p></div>
            <div className="space-y-8"><h5 className="font-black text-white/20 uppercase text-[9px] tracking-[0.4em]">HQ Addis</h5><ul className="space-y-6 text-white/50 text-sm font-bold"><li className="flex gap-4"><MapPin className="text-brand-cyan" size={20} /><span>Senior Gete Bldg, 3rd Floor</span></li><li className="flex gap-4"><Phone className="text-brand-cyan" size={20} /><span>+251 11 635 4312</span></li></ul></div>
            <div className="space-y-8"><h5 className="font-black text-white/20 uppercase text-[9px] tracking-[0.4em]">Links</h5><ul className="space-y-4 text-white/50 text-sm font-bold"><li className="hover:text-white cursor-pointer" onClick={() => navigateTo('home', '#infrastructure')}>Infrastructure</li><li className="hover:text-white cursor-pointer" onClick={() => navigateTo('home', '#innovation')}>Innovation</li><li className="hover:text-white cursor-pointer" onClick={() => navigateTo('home', '#excellence')}>Academy</li></ul></div>
          </div>
          <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between text-[9px] font-black text-white/10 uppercase tracking-[0.5em]"><div>© 2025 InfinEth Solutions.</div><div className="flex gap-8"><span>Telecom</span><span>Power</span><span>ICT</span></div></div>
        </div>
      </footer>
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </div>
  );
};

const ServiceCard = ({ title, items, icon: Icon, color, onClick }: { title: string, items: string[], icon: any, color: string, onClick?: () => void }) => (
  <motion.div whileHover={{ y: -8 }} onClick={onClick} className={`p-8 bg-white rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all cursor-pointer flex flex-col h-full group`}>
    <div className={`${color} w-14 h-14 rounded-xl flex items-center justify-center text-white mb-8 group-hover:rotate-6 transition-transform shadow-lg`}><Icon size={28} /></div>
    <h3 className={UI_CLASSES.cardTitle + " text-brand-charcoal mb-6"}>{title}</h3>
    <ul className="space-y-3 mb-8 flex-grow">{items.map((item, idx) => (<li key={idx} className="flex items-start gap-2.5 text-slate-500 text-sm font-bold leading-relaxed"><div className="w-1.5 h-1.5 rounded-full bg-brand-cyan/40 mt-1.5 shrink-0"></div>{item}</li>))}</ul>
    <div className="flex items-center gap-2 text-brand-blue font-black text-[9px] tracking-widest uppercase mt-auto">Details <ArrowRight size={14} /></div>
  </motion.div>
);

const ContactModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[300] flex items-center justify-center p-6 bg-brand-charcoal/95 backdrop-blur-xl">
        <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="relative w-full max-w-4xl bg-white rounded-[2.5rem] overflow-hidden flex flex-col md:flex-row shadow-2xl h-[90vh] md:h-auto">
          <button onClick={onClose} className="absolute top-6 right-6 z-10 p-2.5 bg-slate-100 rounded-xl"><X size={20} /></button>
          <div className="hidden md:flex md:w-5/12 bg-brand-charcoal p-12 text-white flex-col justify-between"><Brand /><h2 className="text-3xl font-black tracking-tighter mb-10">Start Your <br/><span className="text-brand-cyan">Next Project.</span></h2><div className="space-y-4 text-white/40 text-xs font-bold"><p>+251 11 635 4312</p><p>hello@infineth.com</p></div></div>
          <div className="w-full md:w-7/12 p-12 bg-white overflow-y-auto">
            <h3 className="text-2xl font-black mb-10 text-brand-charcoal">Inquiry Form</h3>
            <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); onClose(); }}>
              <div className="grid gap-6">
                <div className="space-y-2"><label className="text-[9px] font-black uppercase text-slate-400">Full Name</label><input type="text" className="w-full bg-slate-50 p-4 rounded-xl outline-none font-bold text-brand-charcoal" required /></div>
                <div className="space-y-2"><label className="text-[9px] font-black uppercase text-slate-400">Email</label><input type="email" className="w-full bg-slate-50 p-4 rounded-xl outline-none font-bold text-brand-charcoal" required /></div>
                <div className="space-y-2"><label className="text-[9px] font-black uppercase text-slate-400">Project Details</label><textarea rows={3} className="w-full bg-slate-50 p-4 rounded-xl outline-none resize-none font-bold text-brand-charcoal" required></textarea></div>
              </div>
              <button type="submit" className="w-full bg-brand-blue text-white py-5 rounded-xl font-black tracking-widest uppercase shadow-xl hover:bg-brand-blue/90 transition-all">Initialize</button>
            </form>
          </div>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

const root = createRoot(document.getElementById('root')!);
root.render(<App />);
