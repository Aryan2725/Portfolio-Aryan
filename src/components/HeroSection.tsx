'use client';

import { useState } from "react";
import { Mail, Calendar, Linkedin, Download, Check, ArrowRight, ShieldCheck, Database, Layers } from "lucide-react";

export const HeroSection = () => {
  const [emailCopied, setEmailCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("aryansinghal352@gmail.com");
    setEmailCopied(true);
    setTimeout(() => {
      setEmailCopied(false);
    }, 2000);
  };

  return (
    <section className="relative pt-20 pb-24 px-6 border-b border-border/80 bg-background overflow-hidden">
      <div className="container mx-auto max-w-5xl">
        {/* Availability bar */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-border bg-card/60 text-xs font-mono text-muted-foreground mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
          <span>Role Focus: Founder's Office · BizOps · Product Operations (Series A & B)</span>
        </div>

        {/* Primary Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground leading-[1.1] mb-6">
          Aryan Singhal
          <span className="block text-2xl sm:text-3xl md:text-4xl font-medium text-muted-foreground mt-3">
            Technical Operator & Systems Architect
          </span>
        </h1>

        {/* Mission / Operator Positioning */}
        <div className="max-w-3xl space-y-4 mb-10 text-base sm:text-lg text-muted-foreground leading-relaxed">
          <p>
            M.Sc. Economics graduate from <span className="text-foreground font-medium">IIIT Lucknow</span> (9.2 CGPA). 
            Most operators write memos without understanding code, and most engineers build features without understanding unit economics.
          </p>
          <p>
            I sit squarely in the middle: auditing take rates, contribution margins, and inventory buffers, then engineering the deterministic software, data contracts, and automation pipelines required to execute them.
          </p>
        </div>

        {/* Action CTAs */}
        <div className="flex flex-wrap items-center gap-3 mb-16">
          <a
            href="https://calendly.com/aryansinghal352/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-primary text-primary-foreground font-medium text-sm hover:brightness-110 transition-all"
          >
            <Calendar className="w-4 h-4" />
            Book 15-min Call
          </a>

          <button
            onClick={handleCopyEmail}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded border border-border bg-card text-foreground font-medium text-sm hover:bg-secondary/60 transition-all cursor-pointer"
          >
            {emailCopied ? <Check className="w-4 h-4 text-emerald-500" /> : <Mail className="w-4 h-4 text-muted-foreground" />}
            {emailCopied ? "Email Copied" : "Copy Email"}
          </button>

          <a
            href="https://drive.google.com/drive/folders/1zOA9VTfNonvN4g8Up23I9lOHER8Gnd65?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded border border-border bg-card text-foreground font-medium text-sm hover:bg-secondary/60 transition-all"
          >
            <Download className="w-4 h-4 text-muted-foreground" />
            Download Resume
          </a>

          <a
            href="https://www.linkedin.com/in/aryan-singhal-3583b8331/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded border border-border bg-card text-muted-foreground hover:text-foreground font-medium text-sm hover:bg-secondary/60 transition-all"
          >
            <Linkedin className="w-4 h-4" />
            LinkedIn
          </a>

          <a
            href="#systems"
            className="inline-flex items-center gap-1.5 px-3 py-2.5 text-muted-foreground hover:text-foreground text-sm font-medium transition-colors ml-auto hidden sm:inline-flex"
          >
            Jump to Proof of Work
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Hard Proof Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border/80 border border-border/80 rounded overflow-hidden">
          <div className="bg-card p-5">
            <div className="flex items-center gap-2 text-muted-foreground text-xs font-mono mb-2">
              <Database className="w-3.5 h-3.5 text-primary" />
              <span>Scale Handled</span>
            </div>
            <div className="text-2xl font-bold font-mono tracking-tight text-foreground tabular-nums">
              310,000+
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              Customers profiled in real time from 809k+ orders
            </p>
          </div>

          <div className="bg-card p-5">
            <div className="flex items-center gap-2 text-muted-foreground text-xs font-mono mb-2">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
              <span>Integrity Logic</span>
            </div>
            <div className="text-2xl font-bold font-mono tracking-tight text-foreground tabular-nums">
              30 Checks
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              Zero-assertion conservation checks per procurement run
            </p>
          </div>

          <div className="bg-card p-5">
            <div className="flex items-center gap-2 text-muted-foreground text-xs font-mono mb-2">
              <Layers className="w-3.5 h-3.5 text-primary" />
              <span>Simulation Speed</span>
            </div>
            <div className="text-2xl font-bold font-mono tracking-tight text-foreground tabular-nums">
              ~40 ms
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              In-memory bitset recalculation without NumPy/Pandas
            </p>
          </div>

          <div className="bg-card p-5">
            <div className="flex items-center gap-2 text-muted-foreground text-xs font-mono mb-2">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
              <span>Reconciliation</span>
            </div>
            <div className="text-2xl font-bold font-mono tracking-tight text-foreground tabular-nums">
              0 Discrepancy
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              Daily CFO-level COD cash audits in zero-buffer supply chains
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
