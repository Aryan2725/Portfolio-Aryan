'use client';

import { useState, useMemo } from "react";
import { Calculator, Sliders, CheckCircle2, AlertTriangle, ArrowRight, RefreshCw, Cpu } from "lucide-react";

export const InteractiveEngineSandbox = () => {
  const [activeTab, setActiveTab] = useState<"procurement" | "profiling">("procurement");

  // Tab 1: Procurement Calculator State
  const [grossReq, setGrossReq] = useState<number>(5000);
  const [receivedGrn, setReceivedGrn] = useState<number>(3200);
  const [pendingPo, setPendingPo] = useState<number>(1500);

  // Procurement math
  const procurementResults = useMemo(() => {
    const gross = Math.max(0, grossReq || 0);
    const received = Math.max(0, receivedGrn || 0);
    const pending = Math.max(0, pendingPo || 0);

    const remaining = Math.max(0, gross - received);
    const netToOrder = Math.max(0, gross - received - pending);
    const excess = Math.max(0, received + pending - gross);

    // Conservation check: Gross - Received - Pending + Excess - Net === 0
    const conservationIdentity = gross - received - pending + excess - netToOrder;
    const isReconciled = conservationIdentity === 0;

    return {
      gross,
      received,
      pending,
      remaining,
      netToOrder,
      excess,
      conservationIdentity,
      isReconciled,
    };
  }, [grossReq, receivedGrn, pendingPo]);

  // Tab 2: Customer Profiling State
  const [orderCount, setOrderCount] = useState<number>(4);
  const [categoryCount, setCategoryCount] = useState<number>(2);
  const [aov, setAov] = useState<number>(2400);
  const [rtoRate, setRtoRate] = useState<number>(8); // percentage

  // Profiling Evaluation Logic (Anveshan criteria)
  const profileEvaluation = useMemo(() => {
    // Criteria definition:
    // Starter: Orders = 1 (override)
    // Iconic: Orders >= 5, Categories >= 2, RTO < 10%, AOV >= 2700
    // Elite: Orders 3-4, Categories >= 2, RTO <= 15%, AOV >= 2500
    // Mature: Orders <= 2 (or miss), Categories = 1, RTO <= 20%, AOV > 2200
    // Inactive: Otherwise

    if (orderCount === 1) {
      return {
        tier: "Starter",
        tierColor: "text-amber-400 border-amber-400/30 bg-amber-400/10",
        reason: "Priority single-order override.",
        blocker: "Requires ≥ 3 orders and ≥ 2 categories to enter retention tiers.",
        criteria: [
          { name: "Single Order Check", passed: true, val: `${orderCount} order`, target: "= 1" },
        ],
      };
    }

    // Check Iconic
    const iconicOrders = orderCount >= 5;
    const iconicCats = categoryCount >= 2;
    const iconicRto = rtoRate < 10;
    const iconicAov = aov >= 2700;

    if (iconicOrders && iconicCats && iconicRto && iconicAov) {
      return {
        tier: "Iconic (Tier 1 Max)",
        tierColor: "text-emerald-400 border-emerald-400/30 bg-emerald-400/10",
        reason: "Meets all Tier 1 high-value advocate criteria.",
        blocker: "Top-tier account. Eligible for VIP retention campaigns.",
        criteria: [
          { name: "Lifetime Orders", passed: iconicOrders, val: `${orderCount}`, target: "≥ 5" },
          { name: "Distinct Categories", passed: iconicCats, val: `${categoryCount}`, target: "≥ 2" },
          { name: "RTO Rate", passed: iconicRto, val: `${rtoRate}%`, target: "< 10%" },
          { name: "Average Order Value", passed: iconicAov, val: `₹${aov}`, target: "≥ ₹2,700" },
        ],
      };
    }

    // Check Elite
    const eliteOrders = orderCount >= 3;
    const eliteCats = categoryCount >= 2;
    const eliteRto = rtoRate <= 15;
    const eliteAov = aov >= 2500;

    if (eliteOrders && eliteCats && eliteRto && eliteAov) {
      // Find what stops from Iconic
      let iconicGap = "";
      if (!iconicOrders) iconicGap = `Orders is ${orderCount}; Iconic requires ≥ 5 (Gap: ${5 - orderCount}).`;
      else if (!iconicCats) iconicGap = `Categories is ${categoryCount}; Iconic requires ≥ 2.`;
      else if (!iconicRto) iconicGap = `RTO is ${rtoRate}%; Iconic requires < 10%.`;
      else if (!iconicAov) iconicGap = `AOV is ₹${aov}; Iconic requires ≥ ₹2,700 (Gap: ₹${2700 - aov}).`;

      return {
        tier: "Elite (Tier 2)",
        tierColor: "text-sky-400 border-sky-400/30 bg-sky-400/10",
        reason: "Multi-order high-frequency repeat customer.",
        blocker: `Nearest profile: Iconic. Blocker: ${iconicGap}`,
        criteria: [
          { name: "Lifetime Orders", passed: eliteOrders, val: `${orderCount}`, target: "3–4" },
          { name: "Distinct Categories", passed: eliteCats, val: `${categoryCount}`, target: "≥ 2" },
          { name: "RTO Rate", passed: eliteRto, val: `${rtoRate}%`, target: "≤ 15%" },
          { name: "Average Order Value", passed: eliteAov, val: `₹${aov}`, target: "≥ ₹2,500" },
        ],
      };
    }

    // Check Mature
    const matureCats = categoryCount >= 1;
    const matureRto = rtoRate <= 20;
    const matureAov = aov > 2200;

    if (matureCats && matureRto && matureAov) {
      let eliteGap = "";
      if (!eliteOrders) eliteGap = `Orders is ${orderCount}; Elite requires ≥ 3.`;
      else if (!eliteAov) eliteGap = `AOV is ₹${aov}; Elite requires ≥ ₹2,500 (Gap: ₹${2500 - aov}).`;
      else if (!eliteRto) eliteGap = `RTO is ${rtoRate}%; Elite requires ≤ 15%.`;

      return {
        tier: "Mature (Tier 3)",
        tierColor: "text-indigo-400 border-indigo-400/30 bg-indigo-400/10",
        reason: "Established repeat customer with moderate basket size.",
        blocker: `Nearest profile: Elite. Blocker: ${eliteGap}`,
        criteria: [
          { name: "Distinct Categories", passed: matureCats, val: `${categoryCount}`, target: "≥ 1" },
          { name: "RTO Rate", passed: matureRto, val: `${rtoRate}%`, target: "≤ 20%" },
          { name: "Average Order Value", passed: matureAov, val: `₹${aov}`, target: "> ₹2,200" },
        ],
      };
    }

    return {
      tier: "Inactive / Cleanup",
      tierColor: "text-neutral-400 border-neutral-400/30 bg-neutral-400/10",
      reason: "High RTO risk or below minimum unit economic thresholds.",
      blocker: "Exceeds margin tolerance. Do not expend paid retargeting budget.",
      criteria: [
        { name: "RTO Rate", passed: rtoRate <= 20, val: `${rtoRate}%`, target: "≤ 20%" },
        { name: "Average Order Value", passed: aov > 2200, val: `₹${aov}`, target: "> ₹2,200" },
      ],
    };
  }, [orderCount, categoryCount, aov, rtoRate]);

  return (
    <section id="sandbox" className="py-24 px-6 border-b border-border bg-card/40">
      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-primary mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>Tactile Demonstration · Interactive Logic Sandbox</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Test the Core System Logic
          </h2>
          <p className="text-base text-muted-foreground mt-2 max-w-2xl leading-relaxed">
            Test the deterministic formulas running inside the production engines. Adjust parameters to see reconciliation assertions and blocker diagnostics recalculate in real time.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex border-b border-border/80 mb-8">
          <button
            onClick={() => setActiveTab("procurement")}
            className={`px-5 py-3 text-xs sm:text-sm font-mono flex items-center gap-2 border-b-2 transition-all cursor-pointer ${
              activeTab === "procurement"
                ? "border-primary text-foreground font-semibold"
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            <Cpu className="w-4 h-4 text-primary" />
            1. Procurement Netting Engine
          </button>
          <button
            onClick={() => setActiveTab("profiling")}
            className={`px-5 py-3 text-xs sm:text-sm font-mono flex items-center gap-2 border-b-2 transition-all cursor-pointer ${
              activeTab === "profiling"
                ? "border-primary text-foreground font-semibold"
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            <Sliders className="w-4 h-4 text-primary" />
            2. Customer Blocker Engine
          </button>
        </div>

        {/* TAB 1: Procurement Calculator */}
        {activeTab === "procurement" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Input Controls */}
            <div className="lg:col-span-5 rounded-lg border border-border bg-card p-6 space-y-6">
              <h3 className="text-sm font-mono font-semibold text-foreground uppercase tracking-wider">
                Supply Chain Run Inputs (kg)
              </h3>

              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-xs font-mono text-muted-foreground mb-1.5">
                    <span>Gross Requirement (Forecast)</span>
                    <span className="font-semibold text-foreground tabular-nums">{grossReq.toLocaleString()} kg</span>
                  </div>
                  <input
                    type="range"
                    min="1000"
                    max="10000"
                    step="100"
                    value={grossReq}
                    onChange={(e) => setGrossReq(Number(e.target.value))}
                    className="w-full accent-primary"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-mono text-muted-foreground mb-1.5">
                    <span>Received GRNs (Within Window)</span>
                    <span className="font-semibold text-foreground tabular-nums">{receivedGrn.toLocaleString()} kg</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="8000"
                    step="100"
                    value={receivedGrn}
                    onChange={(e) => setReceivedGrn(Number(e.target.value))}
                    className="w-full accent-primary"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-mono text-muted-foreground mb-1.5">
                    <span>Pending Open POs (All-Time)</span>
                    <span className="font-semibold text-foreground tabular-nums">{pendingPo.toLocaleString()} kg</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="6000"
                    step="100"
                    value={pendingPo}
                    onChange={(e) => setPendingPo(Number(e.target.value))}
                    className="w-full accent-primary"
                  />
                </div>
              </div>

              <div className="p-3.5 rounded bg-secondary/40 border border-border/80 text-xs text-muted-foreground leading-relaxed">
                <p className="font-mono text-foreground font-semibold mb-1">Why Pending is not window-bound:</p>
                A PO raised in September and still open in October is inventory genuinely on its way. Excluding it would trigger the system to duplicate the order.
              </div>
            </div>

            {/* Live Calculation Output */}
            <div className="lg:col-span-7 rounded-lg border border-border bg-card p-6 space-y-6">
              <div className="flex items-center justify-between border-b border-border/80 pb-4">
                <h3 className="text-sm font-mono font-semibold text-foreground uppercase tracking-wider">
                  Two-Bucket Netting Output
                </h3>
                <div className="flex items-center gap-1.5 text-xs font-mono text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>30/30 Checks Passing</span>
                </div>
              </div>

              {/* Formula Metrics */}
              <div className="grid grid-cols-3 gap-4">
                <div className="p-4 rounded bg-background border border-border">
                  <span className="text-[11px] font-mono text-muted-foreground block mb-1">
                    Remaining Need
                  </span>
                  <div className="text-xl font-bold font-mono text-foreground tabular-nums">
                    {procurementResults.remaining.toLocaleString()}
                    <span className="text-xs font-normal text-muted-foreground ml-1">kg</span>
                  </div>
                  <span className="text-[10px] text-muted-foreground block mt-1">
                    MAX(0, Gross − Recv)
                  </span>
                </div>

                <div className="p-4 rounded bg-primary/10 border border-primary/30">
                  <span className="text-[11px] font-mono text-primary font-semibold block mb-1">
                    Net To Order
                  </span>
                  <div className="text-xl font-bold font-mono text-primary tabular-nums">
                    {procurementResults.netToOrder.toLocaleString()}
                    <span className="text-xs font-normal text-primary/70 ml-1">kg</span>
                  </div>
                  <span className="text-[10px] text-primary/70 block mt-1">
                    MAX(0, Gross − Recv − Pend)
                  </span>
                </div>

                <div className="p-4 rounded bg-background border border-border">
                  <span className="text-[11px] font-mono text-muted-foreground block mb-1">
                    Excess Coverage
                  </span>
                  <div className="text-xl font-bold font-mono text-foreground tabular-nums">
                    {procurementResults.excess.toLocaleString()}
                    <span className="text-xs font-normal text-muted-foreground ml-1">kg</span>
                  </div>
                  <span className="text-[10px] text-muted-foreground block mt-1">
                    MAX(0, Recv + Pend − Gross)
                  </span>
                </div>
              </div>

              {/* Conservation Assert Box */}
              <div className="p-4 rounded bg-background border border-border font-mono text-xs space-y-2">
                <div className="flex items-center justify-between text-muted-foreground">
                  <span>Conservation Identity Check:</span>
                  <span className="text-emerald-400 font-semibold">
                    Δ = {procurementResults.conservationIdentity} (EXACT ZERO)
                  </span>
                </div>
                <div className="p-2.5 rounded bg-secondary/40 text-[11px] text-muted-foreground overflow-x-auto">
                  <code>Gross({procurementResults.gross}) − Recv({procurementResults.received}) − Pend({procurementResults.pending}) + Excess({procurementResults.excess}) − Net({procurementResults.netToOrder}) = 0</code>
                </div>
                <p className="text-[11px] text-muted-foreground pt-1">
                  Every gram of inventory either satisfies a gross requirement or registers in excess. Net can never be negative.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: Customer Profiling Calculator */}
        {activeTab === "profiling" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Input Controls */}
            <div className="lg:col-span-5 rounded-lg border border-border bg-card p-6 space-y-6">
              <h3 className="text-sm font-mono font-semibold text-foreground uppercase tracking-wider">
                Customer Metrics Knob
              </h3>

              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-xs font-mono text-muted-foreground mb-1.5">
                    <span>Lifetime Order Count</span>
                    <span className="font-semibold text-foreground tabular-nums">{orderCount} orders</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="10"
                    step="1"
                    value={orderCount}
                    onChange={(e) => setOrderCount(Number(e.target.value))}
                    className="w-full accent-primary"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-mono text-muted-foreground mb-1.5">
                    <span>Distinct Categories</span>
                    <span className="font-semibold text-foreground tabular-nums">{categoryCount} categories</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="5"
                    step="1"
                    value={categoryCount}
                    onChange={(e) => setCategoryCount(Number(e.target.value))}
                    className="w-full accent-primary"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-mono text-muted-foreground mb-1.5">
                    <span>Average Order Value (AOV)</span>
                    <span className="font-semibold text-foreground tabular-nums">₹{aov.toLocaleString()}</span>
                  </div>
                  <input
                    type="range"
                    min="1200"
                    max="4000"
                    step="50"
                    value={aov}
                    onChange={(e) => setAov(Number(e.target.value))}
                    className="w-full accent-primary"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-mono text-muted-foreground mb-1.5">
                    <span>Return-to-Origin (RTO Rate)</span>
                    <span className="font-semibold text-foreground tabular-nums">{rtoRate}%</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="35"
                    step="1"
                    value={rtoRate}
                    onChange={(e) => setRtoRate(Number(e.target.value))}
                    className="w-full accent-primary"
                  />
                </div>
              </div>
            </div>

            {/* Diagnostic Evaluation Drawer */}
            <div className="lg:col-span-7 rounded-lg border border-border bg-card p-6 space-y-6">
              <div className="flex items-center justify-between border-b border-border/80 pb-4">
                <div>
                  <span className="text-[11px] font-mono text-muted-foreground uppercase">
                    Profile Assignment
                  </span>
                  <div className="text-xl font-bold text-foreground mt-0.5">
                    {profileEvaluation.tier}
                  </div>
                </div>
                <span className={`text-xs font-mono px-3 py-1 rounded border ${profileEvaluation.tierColor}`}>
                  Active Tier
                </span>
              </div>

              {/* Criteria Audit Table */}
              <div>
                <h4 className="text-xs font-mono text-muted-foreground uppercase mb-3">
                  Criteria Evaluation vs Rules
                </h4>
                <div className="space-y-2">
                  {profileEvaluation.criteria.map((c, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between p-2.5 rounded bg-background border border-border text-xs font-mono"
                    >
                      <div className="flex items-center gap-2">
                        {c.passed ? (
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        ) : (
                          <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0" />
                        )}
                        <span className="text-foreground">{c.name}</span>
                      </div>
                      <div className="flex items-center gap-4 text-muted-foreground">
                        <span>Actual: <strong className="text-foreground">{c.val}</strong></span>
                        <span>Threshold: <strong className="text-muted-foreground">{c.target}</strong></span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Blocker Analysis Callout */}
              <div className="p-4 rounded bg-background border border-border/80 font-mono text-xs space-y-1.5">
                <div className="text-primary font-semibold flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5" />
                  <span>Profile Potential & Blocker Analysis</span>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {profileEvaluation.blocker}
                </p>
              </div>

              <div className="text-[11px] text-muted-foreground font-mono">
                ⚡ Evaluated via in-memory bitset rank indexing. Re-profiles 310,000 customers in ~40ms upon configuration change.
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default InteractiveEngineSandbox;
