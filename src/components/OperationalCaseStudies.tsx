'use client';

import { FileText, ArrowUpRight, Activity, Beaker, CheckCircle2, ShieldCheck, GitFork } from "lucide-react";

export const OperationalCaseStudies = () => {
  return (
    <section id="operations" className="py-24 px-6 border-b border-border bg-background">
      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-primary mb-3">
            <Activity className="w-3.5 h-3.5" />
            <span>Ground-Truth Operations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Zero-to-One Execution Debriefs
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground mt-3 max-w-2xl leading-relaxed">
            Where strategy meets reality. Managing unstructured lab setups, high-velocity perishable supply chains, and zero-error executive cash reconciliation.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1: StrainX Biotech */}
          <div className="rounded-lg border border-border bg-card p-6 sm:p-8 flex flex-col justify-between hover:border-white/[0.18] transition-all">
            <div>
              {/* Header */}
              <div className="flex items-start justify-between gap-4 pb-4 border-b border-border/80 mb-5">
                <div>
                  <span className="text-xs font-mono text-primary font-medium block">
                    Product & Ops Analyst · 55-Day Sprint
                  </span>
                  <h3 className="text-xl font-bold text-foreground mt-0.5">
                    StrainX Biotech
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    0→1 Laboratory Setup & B2B Vendor Procurement
                  </p>
                </div>
                <div className="w-10 h-10 rounded bg-secondary/50 border border-border flex items-center justify-center shrink-0">
                  <Beaker className="w-5 h-5 text-primary" />
                </div>
              </div>

              {/* Hard Metric Pill */}
              <div className="mb-6 p-2.5 rounded bg-secondary/30 border border-border/60 text-xs font-mono text-emerald-400 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 shrink-0" />
                <span>5 Workstreams · 55 Milestones · 60+ B2B Vendors</span>
              </div>

              {/* PAR Framework Breakdown */}
              <div className="space-y-4 text-xs text-muted-foreground leading-relaxed">
                <div>
                  <strong className="text-foreground font-mono uppercase block mb-1">
                    [Problem] Zero Visibility
                  </strong>
                  Stepped into an unstructured biotech lab build spanning 7 operational pillars with zero PMO infrastructure, unmapped procurement pipelines, and severe administrative security vulnerabilities.
                </div>

                <div>
                  <strong className="text-foreground font-mono uppercase block mb-1">
                    [Action] PMO Tracking & Direct Sourcing
                  </strong>
                  Engineered a dynamic 55+ milestone tracker adopted for CFO-level operational syncs. Sourced and cold-negotiated with 60+ chemical and equipment suppliers to build a compliant supply chain. Prototyped a two-layer admin approval authentication flow in Figma to secure workspace data.
                </div>

                <div>
                  <strong className="text-foreground font-mono uppercase block mb-1">
                    [Result] 100% On-Time Milestone Delivery
                  </strong>
                  Delivered multi-tab regulatory compliance intelligence for 5 novel sugar substitutes to R&D, eliminated lab procurement delays, and closed security gaps prior to clinical evaluations.
                </div>
              </div>
            </div>

            {/* Action Links */}
            <div className="mt-8 pt-5 border-t border-border/80 flex flex-wrap items-center gap-3">
              <a
                href="/strainx_case_study.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded bg-primary text-primary-foreground text-xs font-medium hover:brightness-110 transition-all"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>View Full Case Study</span>
                <ArrowUpRight className="w-3 h-3 opacity-70" />
              </a>

              <a
                href="https://www.figma.com/design/KovhY5BgqxoGxAHdqI3UTe/two-layered-admin-approval?node-id=0-1&t=qV5evKZXEkHO4PTe-1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded border border-border bg-card text-muted-foreground hover:text-foreground text-xs font-medium hover:border-white/[0.2] transition-colors"
              >
                <GitFork className="w-3.5 h-3.5" />
                <span>Figma 2FA Flow</span>
                <ArrowUpRight className="w-3 h-3 opacity-70" />
              </a>
            </div>
          </div>

          {/* Card 2: Freshly */}
          <div className="rounded-lg border border-border bg-card p-6 sm:p-8 flex flex-col justify-between hover:border-white/[0.18] transition-all">
            <div>
              {/* Header */}
              <div className="flex items-start justify-between gap-4 pb-4 border-b border-border/80 mb-5">
                <div>
                  <span className="text-xs font-mono text-primary font-medium block">
                    Product & Ops Analyst · Jun–Aug 2025
                  </span>
                  <h3 className="text-xl font-bold text-foreground mt-0.5">
                    Freshly (JustFresh)
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    Zero-Buffer Perishable Supply Chain & Cash Reconciliation
                  </p>
                </div>
                <div className="w-10 h-10 rounded bg-secondary/50 border border-border flex items-center justify-center shrink-0">
                  <Activity className="w-5 h-5 text-primary" />
                </div>
              </div>

              {/* Hard Metric Pill */}
              <div className="mb-6 p-2.5 rounded bg-secondary/30 border border-border/60 text-xs font-mono text-emerald-400 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Daily CFO-Level Audits · Zero Cash Discrepancies</span>
              </div>

              {/* PAR Framework Breakdown */}
              <div className="space-y-4 text-xs text-muted-foreground leading-relaxed">
                <div>
                  <strong className="text-foreground font-mono uppercase block mb-1">
                    [Problem] Perishable Margin Bleed
                  </strong>
                  D2C organic produce carries near-zero shelf life. Over-ordering causes catastrophic inventory write-offs; under-ordering creates permanent subscriber churn. Cash-on-Delivery (COD) logistics leaked audit visibility.
                </div>

                <div>
                  <strong className="text-foreground font-mono uppercase block mb-1">
                    [Action] Intraday Demand Sensing & Cash Pipelines
                  </strong>
                  Managed intraday micro-replenishment loops across 3 live operational platforms to adjust procurement mid-cycle. Audited daily COD cash receipts against delivery partner settlements with line-by-line verification. Built an automated real-time invoicing pipeline to eliminate month-end closing lag.
                </div>

                <div>
                  <strong className="text-foreground font-mono uppercase block mb-1">
                    [Result] Zero Discrepancy & 100% Shelf Clearance
                  </strong>
                  Maintained a perfect reconciliation track record with the CFO across thousands of daily deliveries while cutting produce stockout incidents.
                </div>
              </div>
            </div>

            {/* Action Links */}
            <div className="mt-8 pt-5 border-t border-border/80 flex items-center gap-3">
              <a
                href="/freshly_case_study.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded bg-primary text-primary-foreground text-xs font-medium hover:brightness-110 transition-all"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>View Full Case Study</span>
                <ArrowUpRight className="w-3 h-3 opacity-70" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OperationalCaseStudies;
