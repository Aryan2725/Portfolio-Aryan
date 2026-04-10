'use client';

import { useState } from "react";
import { ArrowDown, Mail, Calendar, Linkedin, Download, Check } from "lucide-react";
import heroBg from "@/assets/hero-bg.png";

const HeroSection = () => {
  const [emailCopied, setEmailCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("aryansinghal352@gmail.com");
    setEmailCopied(true);
    setTimeout(() => {
      setEmailCopied(false);
    }, 2000);
  };

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
        <div className="section-fade-in max-w-4xl mx-auto">
          
          {/* Availability Signal (CRITICAL for recruiters scanning in 3 seconds) */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-sm font-medium mb-8">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Currently seeking: Product Ops · Founder's Office — Available immediately
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
            <span className="text-foreground">Aryan Singhal</span>
            <br />
            <span className="text-gradient-primary">Technical Operator | Product × Ops × AI</span>
          </h1>

          {/* Subheadline (Replaced fluff with hard, undeniable metrics) */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            M.Sc. Economics (IIIT Lucknow · 9.2 CGPA) · Ran live ops at 2 early-stage startups · Shipped 5 AI products
          </p>

          {/* CTAs (Focused on direct contact and booking) */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            
            {/* Primary CTA: Calendly Booking */}
            <a
              href="https://calendly.com/aryansinghal352/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-primary text-primary-foreground font-medium text-base hover:brightness-110 transition-all duration-300 shadow-[0_0_20px_-5px_hsl(var(--glow)/0.4)]"
            >
              <Calendar className="w-4 h-4" />
              Book 15-min Call
            </a>

            {/* Secondary CTA: Copy Email Button */}
            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg border border-border text-foreground font-medium text-base hover:bg-secondary transition-all duration-300 cursor-pointer"
            >
              {emailCopied ? <Check className="w-4 h-4 text-emerald-500" /> : <Mail className="w-4 h-4" />}
              {emailCopied ? "Email Copied!" : "Copy Email"}
            </button>
            
            {/* Secondary CTA: Resume Folder */}
            <a
              href="https://drive.google.com/drive/folders/1zOA9VTfNonvN4g8Up23I9lOHER8Gnd65?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg border border-border text-foreground font-medium text-base hover:bg-secondary transition-all duration-300"
            >
              <Download className="w-4 h-4" />
              Download Resumes
            </a>

            {/* Secondary CTA: LinkedIn */}
            <a
              href="https://www.linkedin.com/in/aryan-singhal-3583b8331/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg border border-border text-foreground font-medium text-base hover:bg-secondary transition-all duration-300"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>

            {/* Scroll down link */}
            <a
              href="#prototypes"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg border border-transparent text-muted-foreground hover:text-foreground font-medium text-base transition-all duration-300"
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