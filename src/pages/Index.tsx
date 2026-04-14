import { MapPin, Linkedin, TrendingDown, Handshake, Users, Lightbulb, ArrowRightLeft, Settings, Globe, Calendar, Building2, Briefcase } from "lucide-react";

const services = [
  { icon: TrendingDown, title: "IT Cost Optimization", desc: "Identifying savings and improving cost efficiency across IT operations and contracts." },
  { icon: Handshake, title: "Procurement & Negotiations", desc: "Strategic sourcing and contract negotiations to secure optimal terms with IT vendors." },
  { icon: Users, title: "Vendor Management", desc: "Building and managing vendor relationships for consistent service delivery and value." },
  { icon: Lightbulb, title: "IT Strategy & Digitalization", desc: "Developing IT strategies aligned with business goals and digital transformation initiatives." },
  { icon: ArrowRightLeft, title: "Outsourcing & Transformation", desc: "Planning and executing IT outsourcing and organizational transformation programs." },
  { icon: Settings, title: "IT Operation Process Design", desc: "Designing efficient IT operational processes and governance frameworks." },
  { icon: Globe, title: "Offshore Agreements", desc: "Structuring and managing offshore and nearshore delivery agreements." },
];

const projects = [
  {
    company: "Aker Solutions",
    title: "Sourcing Category Manager IT",
    period: "Jan 2025 – Present",
    desc: "Acting sourcing category manager for Aker Solutions with 200+ IT vendors. Includes contract management for the Cognizant managed service agreement.",
  },
  {
    company: "Aker Solutions / Schlumberger",
    title: "Subsea Divesture",
    period: "Apr 2023 – Apr 2025",
    desc: "Responsible for enabling IT contracts to support the establishment of OneSubsea, a joint venture between Aker Solutions and Schlumberger — a new world-leading subsea company.",
  },
  {
    company: "Aker Solutions",
    title: "ServiceNow Negotiations",
    period: "Dec 2024 – Mar 2025",
    desc: "Lead negotiator for a strategic ServiceNow agreement covering IT, OT, HR, Finance and Supply Chain modules.",
  },
  {
    company: "Aker Group",
    title: "Microsoft Azure Consumption Commitment",
    period: "Sep 2024 – Nov 2024",
    desc: "Lead negotiator for MACC agreements for six of the largest companies in the Aker group. Highly successful result and 10-digit agreement.",
  },
  {
    company: "Aker Group",
    title: "Microsoft Enterprise Agreement Renewal",
    period: "Dec 2022 – Jun 2023",
    desc: "Managed the process and negotiated terms for the Aker group's Microsoft Agreements — 18 companies, 30,000 users and a large Azure spend.",
  },
  {
    company: "Cognite",
    title: "Public Cloud Cost Optimization",
    period: "Nov 2021 – Aug 2022",
    desc: "Led efforts to reduce infrastructure cloud spend by more than 40% in 12 months across Microsoft Azure and Google Cloud Platform — one of the largest IaaS footprints in the Nordics.",
  },
  {
    company: "Cognite",
    title: "Vendor Management Implementation",
    period: "Dec 2021 – Apr 2022",
    desc: "Designed and implemented Supplier Management controls and processes for SOC2 and ISO27001 compliance in a critical SaaS environment.",
  },
  {
    company: "Orkla Group",
    title: "Project One — S/4 HANA ERP",
    period: "Jan 2020 – Dec 2021",
    desc: "Contract management for one of the largest ERP projects in the Nordics — Orkla's transition to a new S/4 HANA template solution with Accenture.",
  },
  {
    company: "Orkla",
    title: "Network Transformation",
    period: "Jan 2017 – Dec 2019",
    desc: "Replaced 1,000+ network components across 50+ locations and implemented a new, more secure network design.",
  },
  {
    company: "Orkla",
    title: "Cognizant Service Operations Renegotiation",
    period: "Aug 2017 – Jun 2018",
    desc: "Renegotiated the managed services agreement for a new 5+2 year term with improved services and 20+ transformation projects.",
  },
  {
    company: "Telenor",
    title: "Duplo Offshoring Program",
    period: "2009 – 2011",
    desc: "One of the largest IT offshoring programs in the Nordics — application maintenance for 100+ systems offshored to India with TCS and Capgemini.",
  },
  {
    company: "Telenor Group",
    title: "IT Partner Agreement — Unitech Wireless",
    period: "2008 – 2009",
    desc: "Part of the commercial negotiation team for the IT Partner Agreement in Telenor's India operation (Uninor) — a 9-year agreement covering all IT areas.",
  },
];

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans relative">
      {/* Faded background logo watermark */}
      <div className="fixed inset-0 z-0 pointer-events-none flex items-center justify-center">
        <img src="/logo-icon.svg" alt="" className="w-[600px] h-[600px] opacity-[0.03]" />
      </div>
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border relative">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <button onClick={() => scrollTo("hero")} className="flex items-center gap-3">
            <img src="/logo-icon.svg" alt="Simbaco logo" className="h-10 w-10" />
            <span className="text-lg font-semibold tracking-widest text-foreground">SIMBACO</span>
          </button>
          <nav className="hidden md:flex gap-8 text-sm text-muted-foreground">
            <button onClick={() => scrollTo("about")} className="hover:text-primary transition-colors">About</button>
            <button onClick={() => scrollTo("services")} className="hover:text-primary transition-colors">Services</button>
            <button onClick={() => scrollTo("projects")} className="hover:text-primary transition-colors">Projects</button>
            <button onClick={() => scrollTo("footer")} className="hover:text-primary transition-colors">Contact</button>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section id="hero" className="py-24 md:py-36 px-4 relative overflow-hidden">
        <div className="absolute right-[-80px] top-1/2 -translate-y-1/2 opacity-[0.04] hidden md:block">
          <img src="/logo-icon.svg" alt="" className="w-[400px] h-[400px]" />
        </div>
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground leading-tight">
            IT Management &<br />Sourcing Consultancy
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl mx-auto">
            Open, honest and effective collaboration
          </p>
          <div className="mt-8 inline-flex items-center gap-2 text-sm text-muted-foreground bg-secondary rounded-full px-4 py-2">
            <MapPin className="h-4 w-4 text-primary" />
            Oslo, Norway
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 px-4 bg-secondary">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-8">About</h2>
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <img
              src="/profile.jpg"
              alt="Asbjørn Wetlesen"
              className="w-40 h-40 md:w-48 md:h-48 rounded-lg object-cover object-top border-2 border-primary/20 flex-shrink-0"
            />
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Simbaco AS offers independent IT management and sourcing consultancy built on
                <span className="text-primary font-medium"> over 20 years of experience</span> in
                IT operations, procurement and vendor management.
              </p>
              <p>
                Founder <strong className="text-foreground">Asbjørn Wetlesen</strong> has held leadership roles at{" "}
                <strong className="text-foreground">Orkla</strong>,{" "}
                <strong className="text-foreground">Cognite</strong> and <strong className="text-foreground">Telenor</strong>,
                managing large-scale IT operations, sourcing strategies and digital transformation programs.
              </p>
              <p>
                Currently supporting <strong className="text-foreground">Aker Solutions</strong> and{" "}
                <strong className="text-foreground">Omny Security</strong> with IT sourcing strategy,
                vendor management and operational excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-12 text-center">Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                className="rounded-lg border border-border bg-card p-6 hover:border-primary transition-colors group"
              >
                <s.icon className="h-6 w-6 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 px-4 bg-secondary">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4 text-center">Selected Projects</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            A selection of key engagements across IT sourcing, vendor management and digital transformation.
          </p>
          <div className="space-y-4">
            {projects.map((p, i) => (
              <div
                key={i}
                className="rounded-lg border border-border bg-card p-5 md:p-6 hover:border-primary/50 transition-colors"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 md:gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <Building2 className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-sm font-medium text-primary">{p.company}</span>
                    </div>
                    <h3 className="font-semibold text-foreground mb-1">{p.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground whitespace-nowrap md:mt-1">
                    <Calendar className="h-3.5 w-3.5" />
                    {p.period}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="footer" className="border-t border-border bg-background py-12 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-8">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <img src="/logo-icon.svg" alt="Simbaco" className="h-8 w-8" />
              <span className="font-semibold tracking-widest text-foreground">SIMBACO AS</span>
            </div>
            <p className="text-sm text-muted-foreground">Org.nr 930 277 851</p>
            <p className="text-sm text-muted-foreground">Furulundsveien 7c, 0282 Oslo</p>
          </div>
          <div className="flex items-end">
            <a
              href="https://www.linkedin.com/in/wetlesen"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="h-5 w-5" />
              LinkedIn
            </a>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-border text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Simbaco AS. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Index;
