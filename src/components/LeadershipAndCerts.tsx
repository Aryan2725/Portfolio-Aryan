'use client';

import { useState } from "react";
import { Users, Target, BookOpen, FileBadge, X, ArrowUpRight, Award } from "lucide-react";

const leadershipRoles = [
  {
    title: "Founder & Lead",
    org: "Standup PM Club",
    desc: "Established IIIT Lucknow's first PM community. Scaled to 30+ members and designed a curriculum covering Agile workflows, PRD creation, and 0-to-1 product teardowns.",
    icon: Users,
  },
  {
    title: "Lead Instructor",
    org: "PM Bootcamp",
    desc: "Ran a selective bootcamp teaching candidates core PM concepts, unit economics, metrics tracking, and guiding product projects from ideation to launch.",
    icon: BookOpen,
  },
  {
    title: "Founding Member",
    org: "DOMH Masterclass",
    desc: "Spearheaded an initiative to upskill juniors in high-leverage tools: Advanced Excel, SQL, Python, Agile workflows, and Case Study analysis.",
    icon: Target,
  },
];

const certifications = [
  {
    title: "Product Roadmapping Micro-Certification (PRC)",
    desc: "Product School · Defining product-market fit, backlog prioritization, and roadmap milestones.",
    link: "https://drive.google.com/file/d/1YEL9RrzG4vCoNIer_n8rQkfjrJAsOCrE/view?usp=sharing",
  },
  {
    title: "Product Analytics Micro-Certification (PAC)",
    desc: "Product School · Measuring post-launch performance, funnel cohort retention, and event tracking.",
    link: "https://drive.google.com/file/d/17ap9NLla_X08beNseSxMf7bPAw1fDDDm/view?usp=sharing",
  },
  {
    title: "Artificial Intelligence Micro-Certification (AIC)",
    desc: "Product School · Prompt architecture, LLM orchestration, and AI-enabled product workflows.",
    link: "https://drive.google.com/file/d/1DYYcLeVXDevuy8FEfTPPpIKlg4WpnLFL/view?usp=sharing",
  },
  {
    title: "Product Strategy Micro-Certification (PSC)",
    desc: "Product School · Opportunity discovery, unit economics, and competitive moat modeling.",
    link: "https://drive.google.com/file/d/1yDhAyehvN6YC2EI5fZ7pm42KmLHtSxwA/view?usp=sharing",
  },
  {
    title: "McKinsey Forward Program",
    desc: "McKinsey & Company · Structured communication, executive problem-solving, and adaptive leadership.",
    link: "https://drive.google.com/file/d/1Ngga6_GWPu1k1H5XCz12Su3wwjRZpxiL/view?usp=sharing",
  },
  {
    title: "Lead Auditor (ISO 9001:2015 - QMS)",
    desc: "Exemplar Global · Certified to audit quality management systems, compliance workflows, and QA governance.",
    link: "https://drive.google.com/file/d/1f42O1xO_A5J-47pNxNhtrUJRxWJXGhfS/view?usp=sharing",
  },
];

export const LeadershipAndCerts = () => {
  const [certLink, setCertLink] = useState<string | null>(null);

  const handleOpenCert = (url: string) => {
    const embedUrl = url.includes("drive.google.com")
      ? url.replace(/\/view.*/, "/preview")
      : url;
    setCertLink(embedUrl);
  };

  return (
    <section id="leadership" className="py-24 px-6 border-b border-border bg-background">
      <div className="container mx-auto max-w-5xl">
        {/* --- LEADERSHIP SECTION --- */}
        <div className="mb-20">
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-primary mb-3">
              <Users className="w-3.5 h-3.5" />
              <span>Ecosystem Building</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              Leadership & Community 0→1
            </h2>
            <p className="text-base text-muted-foreground mt-2 max-w-2xl leading-relaxed">
              Founding communities, mentoring junior operators, and establishing structured learning cohorts from the ground up.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {leadershipRoles.map((role, idx) => (
              <div
                key={idx}
                className="p-6 rounded-lg border border-border bg-card hover:border-white/[0.2] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-9 h-9 rounded bg-secondary/60 border border-border flex items-center justify-center mb-4">
                    <role.icon className="w-4 h-4 text-primary" />
                  </div>
                  <h3 className="text-base font-bold text-foreground mb-0.5">{role.title}</h3>
                  <span className="text-xs font-mono text-primary font-medium block mb-3">{role.org}</span>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {role.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- CERTIFICATIONS SECTION --- */}
        <div>
          <div className="mb-10">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-primary mb-2">
              <Award className="w-3.5 h-3.5" />
              <span>Credentials</span>
            </div>
            <h3 className="text-2xl font-bold text-foreground">Formal Certifications</h3>
            <p className="text-xs text-muted-foreground mt-1">
              Structured professional qualifications backing operational and analytical execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {certifications.map((cert, idx) => (
              <div
                key={idx}
                className="p-4 rounded-lg border border-border bg-card hover:border-white/[0.2] transition-all flex items-start justify-between gap-4"
              >
                <div>
                  <h4 className="text-sm font-semibold text-foreground">{cert.title}</h4>
                  <p className="text-xs text-muted-foreground mt-1">{cert.desc}</p>
                </div>

                <button
                  onClick={() => handleOpenCert(cert.link)}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded border border-border bg-secondary/40 text-xs font-mono text-muted-foreground hover:text-foreground hover:bg-secondary/70 transition-colors shrink-0 cursor-pointer"
                >
                  <FileBadge className="w-3.5 h-3.5" />
                  <span>Verify</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* --- FULLSCREEN CERTIFICATE MODAL --- */}
      {certLink && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 md:p-10">
          <div className="relative w-full max-w-4xl h-[80vh] bg-card rounded-lg overflow-hidden border border-border flex flex-col">
            <div className="flex justify-between items-center px-4 py-3 bg-secondary/30 border-b border-border">
              <span className="font-mono text-xs font-semibold text-foreground flex items-center gap-2">
                <FileBadge className="w-4 h-4 text-primary" />
                Certificate Viewer
              </span>
              <button
                onClick={() => setCertLink(null)}
                className="p-1 rounded text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="flex-1 w-full h-full bg-background">
              <iframe
                src={certLink}
                className="w-full h-full border-none"
                title="Certificate Viewer"
                allow="autoplay"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default LeadershipAndCerts;
