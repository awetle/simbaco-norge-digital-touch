import { MapPin, Linkedin, TrendingDown, Handshake, Users, Lightbulb, ArrowRightLeft, Settings, Globe } from "lucide-react";

const services = [
  { icon: TrendingDown, title: "IT Cost Optimization", desc: "Identifying savings and improving cost efficiency across IT operations and contracts." },
  { icon: Handshake, title: "Procurement & Negotiations", desc: "Strategic sourcing and contract negotiations to secure optimal terms with IT vendors." },
  { icon: Users, title: "Vendor Management", desc: "Building and managing vendor relationships for consistent service delivery and value." },
  { icon: Lightbulb, title: "IT Strategy & Digitalization", desc: "Developing IT strategies aligned with business goals and digital transformation initiatives." },
  { icon: ArrowRightLeft, title: "Outsourcing & Transformation", desc: "Planning and executing IT outsourcing and organizational transformation programs." },
  { icon: Settings, title: "IT Operation Process Design", desc: "Designing efficient IT operational processes and governance frameworks." },
  { icon: Globe, title: "Offshore Agreements", desc: "Structuring and managing offshore and nearshore delivery agreements." },
];

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <button onClick={() => scrollTo("hero")} className="flex items-center gap-3">
            <img src="/logo.svg" alt="Simbaco logo" className="h-10 w-10" />
            <span className="text-lg font-semibold tracking-widest text-foreground">SIMBACO</span>
          </button>
          <nav className="hidden md:flex gap-8 text-sm text-muted-foreground">
            <button onClick={() => scrollTo("about")} className="hover:text-primary transition-colors">About</button>
            <button onClick={() => scrollTo("services")} className="hover:text-primary transition-colors">Services</button>
            <button onClick={() => scrollTo("footer")} className="hover:text-primary transition-colors">Contact</button>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section id="hero" className="py-24 md:py-36 px-4">
        <div className="max-w-3xl mx-auto text-center">
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
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-8">About</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Simbaco AS offers independent IT management and sourcing consultancy built on
              <span className="text-primary font-medium"> over 20 years of experience</span> in
              IT operations, procurement and vendor management.
            </p>
            <p>
              Founder Marius Wetlesen has held leadership roles at <strong className="text-foreground">Orkla</strong>,{" "}
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

      {/* Footer */}
      <footer id="footer" className="border-t border-border bg-secondary py-12 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-8">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <img src="/logo.svg" alt="Simbaco" className="h-8 w-8" />
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
