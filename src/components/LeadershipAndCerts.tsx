'use client';

import { useState } from "react";
import { Users, Target, BookOpen, FileBadge, X } from "lucide-react";

const leadershipRoles = [
  {
    title: "Founder & Lead",
    org: "Standup PM Club",
    desc: "Established IIIT Lucknow's first PM community. Scaled to 30+ members and designed a curriculum covering Agile workflows, PRD creation, and 0-to-1 product teardowns.",
    icon: Users
  },
  {
    title: "Lead Instructor",
    org: "PM Bootcamp",
    desc: "Running a highly selective bootcamp teaching candidates core PM concepts, metrics tracking, and guiding hands-on product projects from ideation to launch.",
    icon: BookOpen
  },
  {
    title: "Founding Member",
    org: "DOMH Masterclass",
    desc: "Spearheaded an initiative to upskill juniors in high-leverage tools: Advanced Excel, SQL, Power BI, Python, Agile workflows, and Case Study analysis.",
    icon: Target
  }
];

const certifications = [
  {
    title: "Product Roadmapping Micro-Certification (PRC)",
    desc: "Expertise in defining product-market fit and roadmap prioritization.",
    link: "https://drive.google.com/file/d/1YEL9RrzG4vCoNIer_n8rQkfjrJAsOCrE/view?usp=sharing"
  },
  {
    title: "Product Analytics Micro-Certification (PAC)",
    desc: "Expertise in using data to measure post-launch performance and user behavior.",
    link: "https://drive.google.com/file/d/17ap9NLla_X08beNseSxMf7bPAw1fDDDm/view?usp=sharing"
  },
  {
    title: "Artificial Intelligence Micro-Certification (AIC)",
    desc: "Mastery in prompt engineering and LLM orchestration for digital products.",
    link: "https://drive.google.com/file/d/1DYYcLeVXDevuy8FEfTPPpIKlg4WpnLFL/view?usp=sharing"
  },
  {
    title: "Product Strategy Micro-Certification (AIC)",
    desc: "Mastered problem discovery, unit economics, roadmap prioritization, and Product Strategy.",
    link: "https://drive.google.com/file/d/1yDhAyehvN6YC2EI5fZ7pm42KmLHtSxwA/view?usp=sharing"
  },
  {
    title: "McKinsey Forward Program",
    desc: "Developed executive-level problem-solving, structured communication, and adaptable leadership skills.",
    link: "https://drive.google.com/file/d/1Ngga6_GWPu1k1H5XCz12Su3wwjRZpxiL/view?usp=sharing"
  },
  {
    title: "Lead Auditor (ISO 9001:2015 - QMS)",
    desc: "Certified by Exemplar Global to lead management system audit teams and build rigorous QA frameworks.",
    link: "https://drive.google.com/file/d/1f42O1xO_A5J-47pNxNhtrUJRxWJXGhfS/view?usp=sharing"
  }
];

export default function LeadershipAndCerts() {
  const [certLink, setCertLink] = useState<string | null>(null);

  // Safely format Google Drive links to bypass the standard viewer and embed them directly
  const handleOpenCert = (url: string) => {
    const embedUrl = url.includes("drive.google.com") 
      ? url.replace(/\/view.*/, "/preview") 
      : url;
    setCertLink(embedUrl);
  };

  return (
    <section className="py-28 px-6 bg-background border-t border-border" id="leadership-certs">
      <div className="container mx-auto max-w-6xl">
        
        {/* --- LEADERSHIP SECTION --- */}
        <div className="mb-24">
          <div className="section-fade-in mb-14 text-center md:text-left">
            <p className="text-primary text-sm font-bold tracking-widest uppercase mb-3 flex items-center justify-center md:justify-start gap-2">
               <span className="w-2 h-2 rounded-full bg-primary" />
               Ecosystem Impact
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Leadership & 0→1</h2>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Building communities and upskilling teams from the ground up.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {leadershipRoles.map((role, index) => (
              <div key={index} className="group glow-border-hover flex flex-col p-8 border border-border rounded-2xl bg-card hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 shadow-sm">
                <div className="w-12 h-12 bg-secondary border border-border text-primary rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/5 transition-colors">
                  <role.icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-xl text-foreground mb-1">{role.title}</h3>
                <h4 className="text-sm font-semibold text-emerald-500 mb-4">{role.org}</h4>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {role.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* --- CERTIFICATIONS SECTION --- */}
        <div>
          <div className="section-fade-in mb-10 text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Formal Certifications</h2>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Structured training backing the operational execution.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 max-w-4xl">
            {certifications.map((cert, index) => (
              <div key={index} className="group flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-6 border border-border rounded-2xl bg-card hover:border-primary/40 transition-all duration-300 hover:-translate-y-0.5 shadow-sm">
                <div>
                  <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">{cert.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{cert.desc}</p>
                </div>
                <button 
                  onClick={() => handleOpenCert(cert.link)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-secondary/50 border border-border text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary rounded-lg text-sm font-bold transition-all shrink-0"
                >
                  <FileBadge className="w-4 h-4" /> View Certificate
                </button>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* --- FULLSCREEN CERTIFICATE MODAL --- */}
      {certLink && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 md:p-10">
          <div className="relative w-full max-w-5xl h-[85vh] bg-secondary rounded-xl overflow-hidden shadow-2xl flex flex-col border border-border">
            <div className="flex justify-between items-center p-4 bg-background border-b border-border">
              <h3 className="font-bold text-foreground flex items-center gap-2">
                <FileBadge className="w-5 h-5 text-primary" />
                Certificate Viewer
              </h3>
              <button 
                onClick={() => setCertLink(null)}
                className="p-2 hover:bg-secondary rounded-full transition-colors text-muted-foreground hover:text-foreground"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="flex-1 w-full h-full bg-black/5">
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
}