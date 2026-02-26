import { ArrowDown, Download } from "lucide-react";
import heroBg from "@/assets/hero-bg.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="section-fade-in max-w-3xl mx-auto">
          {/* Tag */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-secondary/50 text-muted-foreground text-sm mb-8">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            AI Generalist & Product Builder
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
            <span className="text-foreground">Aryan Singhal</span>
            <br />
            <span className="text-gradient-primary">High-Agency Product Builder</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Combining M.Sc. Economics & Management logic with AI-assisted vibe coding to ship product solutions fast.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/Aryan_Singhal_Resume.pdf"
              download="Aryan_Singhal_Resume.pdf"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-primary text-primary-foreground font-medium text-base hover:brightness-110 transition-all duration-300 shadow-[0_0_20px_-5px_hsl(var(--glow)/0.4)]"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </a>
            <a
              href="#prototypes"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg border border-border text-foreground font-medium text-base hover:bg-secondary transition-all duration-300"
            >
              View Work
              <ArrowDown className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-5 h-8 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-1">
          <div className="w-1 h-2 rounded-full bg-muted-foreground/50 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;