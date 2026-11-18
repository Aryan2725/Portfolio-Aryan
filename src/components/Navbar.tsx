'use client';

import { Calendar, ArrowUpRight } from "lucide-react";

export const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/80 bg-background/85 backdrop-blur-md">
      <div className="container mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
        {/* Identity & Current Focus */}
        <div className="flex items-center gap-3">
          <a href="#" className="font-semibold text-foreground tracking-tight hover:text-primary transition-colors text-sm">
            Aryan Singhal
          </a>
          <span className="hidden sm:inline-block text-xs font-mono text-muted-foreground border-l border-border pl-3">
            Technical Operator · Founder's Office
          </span>
        </div>

        {/* Navigation Anchors */}
        <nav className="hidden md:flex items-center gap-6 text-xs font-medium text-muted-foreground">
          <a href="#systems" className="hover:text-foreground transition-colors">
            Production Systems
          </a>
          <a href="#sandbox" className="hover:text-foreground transition-colors">
            Logic Sandbox
          </a>
          <a href="#operations" className="hover:text-foreground transition-colors">
            Ground-Truth Ops
          </a>
          <a href="#teardowns" className="hover:text-foreground transition-colors">
            Teardowns
          </a>
          <a href="#specs" className="hover:text-foreground transition-colors">
            Specs & PRDs
          </a>
        </nav>

        {/* Quick Action & Availability */}
        <div className="flex items-center gap-3">
          <div className="hidden lg:flex items-center gap-2 px-2.5 py-1 rounded bg-secondary/50 border border-border text-[11px] font-mono text-muted-foreground">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span>Series A / B · Immediate</span>
          </div>

          <a
            href="https://calendly.com/aryansinghal352/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-primary text-primary-foreground text-xs font-medium hover:brightness-110 transition-all"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Book Call</span>
            <ArrowUpRight className="w-3 h-3 opacity-70" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
