import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import LivePrototypes from "@/components/LivePrototypes";
import FeaturedProject from "@/components/FeaturedProject";
import TeardownsAndStrategy from "@/components/TeardownsAndStrategy";
import OperationalCaseStudies from "@/components/OperationalCaseStudies"; // New Import
import Footer from "@/components/Footer";
import { X, FileBadge, Users, Target, BookOpen } from "lucide-react";

const Index = () => {
  // State to control the certificate modal
  const [certLink, setCertLink] = useState<string | null>(null);

  // Function to safely format Google Drive links for iframes
  const handleOpenCert = (url: string) => {
    const embedUrl = url.includes("drive.google.com") 
      ? url.replace(/\/view.*/, "/preview") 
      : url;
    setCertLink(embedUrl);
  };

  return (
    <main className="min-h-screen bg-background relative">
      <HeroSection />
      
      {/* --- ABOUT SECTION --- */}
      <section className="py-20 bg-background" id="about">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">About Me</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            I don't wait for roadmaps; I ship them. Currently pursuing an M.Sc. in Economics & Management at IIIT Lucknow (9.2 CGPA), I bridge the gap between economic logic and functional engineering. From auditing P&L to boost margins by 12% to deploying full-stack AI micro-apps in 24 hours, I solve operational bottlenecks by building the solutions myself.
          </p>
        </div>
      </section>

      {/* --- CORE WORK (PROJECTS, STRATEGY, & OPS) --- */}
      <LivePrototypes />
      <FeaturedProject />
      <TeardownsAndStrategy />
      <OperationalCaseStudies /> {/* Integrated New Section */}

      {/* --- SKILLS SECTION --- */}
      <section className="py-20 bg-secondary/20" id="skills">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold mb-10 text-center">Technical & Product Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-background border border-border p-8 rounded-xl shadow-sm hover:shadow-md transition-all text-center md:text-left">
              <h3 className="font-bold text-xl mb-4 text-foreground">Tech Stack</h3>
              <p className="text-muted-foreground leading-relaxed">
                AI Builder Stack (Firebase Genkit, Gemini, Lovable, Emergent, Google AI Studio, Google Opal), SQL (Intermediate), Advanced Excel (VBA/Pivot), Figma.
              </p>
            </div>
            <div className="bg-background border border-border p-8 rounded-xl shadow-sm hover:shadow-md transition-all text-center md:text-left">
              <h3 className="font-bold text-xl mb-4 text-foreground">Core Competencies</h3>
              <p className="text-muted-foreground leading-relaxed">
                Unit Economics (CAC/LTV), P&L Auditing, Regulatory Compliance, Stakeholder Management, Agile Methodologies (JIRA), Process Scaling, Asana, Trello, Confluence, ExcaliDraw.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- LEADERSHIP & COMMUNITY SECTION --- */}
      <section className="py-20 bg-background" id="leadership">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl font-bold mb-10 text-center">Leadership & Community</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="flex flex-col p-8 border border-border rounded-xl bg-secondary/10 hover:border-primary/50 transition-all shadow-sm">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center mb-6">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-xl text-foreground mb-2">Lead & Founder</h3>
              <h4 className="text-sm font-semibold text-primary mb-4">Standup Product Management Club</h4>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Established IIIT Lucknow's first PM community. Scaled to 30+ members and designed a curriculum covering Agile workflows, PRD creation, and 0-to-1 product teardowns.
              </p>
            </div>

            <div className="flex flex-col p-8 border border-border rounded-xl bg-secondary/10 hover:border-primary/50 transition-all shadow-sm">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center mb-6">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-xl text-foreground mb-2">Lead Instructor</h3>
              <h4 className="text-sm font-semibold text-primary mb-4">PM Bootcamp</h4>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Running a highly selective bootcamp teaching candidates core PM concepts, metrics tracking, and guiding hands-on product projects from ideation to launch.
              </p>
            </div>

            <div className="flex flex-col p-8 border border-border rounded-xl bg-secondary/10 hover:border-primary/50 transition-all shadow-sm">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center mb-6">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-xl text-foreground mb-2">Founding Member</h3>
              <h4 className="text-sm font-semibold text-primary mb-4">DOMH Masterclass</h4>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Spearheaded an initiative to upskill juniors in high-leverage tools: Advanced Excel, SQL, Power BI, Python, Agile workflows, and Case Study analysis.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* --- CERTIFICATES SECTION --- */}
      <section className="py-20 bg-secondary/20" id="certificates">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold mb-10 text-center">Certifications</h2>
          <div className="space-y-4">
            
            {/* Certificate 1 */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-6 border border-border rounded-xl bg-background hover:bg-secondary/30 transition-colors">
              <div>
                <h3 className="font-bold text-lg text-foreground">Product Roadmapping Micro-Certification (PRC)</h3>
                <p className="text-sm text-muted-foreground mt-1">Expertise in defining product-market fit and roadmap prioritization.</p>
              </div>
              <button 
                onClick={() => handleOpenCert("https://drive.google.com/file/d/1YEL9RrzG4vCoNIer_n8rQkfjrJAsOCrE/view?usp=sharing")}
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary hover:bg-primary/20 rounded-lg text-sm font-medium transition-colors shrink-0"
              >
                <FileBadge className="w-4 h-4" /> View Certificate
              </button>
            </div>

            {/* Certificate 2 */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-6 border border-border rounded-xl bg-background hover:bg-secondary/30 transition-colors">
              <div>
                <h3 className="font-bold text-lg text-foreground">Product Analytics Micro-Certification (PAC)</h3>
                <p className="text-sm text-muted-foreground mt-1">Expertise in using data to measure post-launch performance and user behavior.</p>
              </div>
              <button 
                onClick={() => handleOpenCert("https://drive.google.com/file/d/17ap9NLla_X08beNseSxMf7bPAw1fDDDm/view?usp=sharing")}
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary hover:bg-primary/20 rounded-lg text-sm font-medium transition-colors shrink-0"
              >
                <FileBadge className="w-4 h-4" /> View Certificate
              </button>
            </div>

            {/* Certificate 3 */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-6 border border-border rounded-xl bg-background hover:bg-secondary/30 transition-colors">
              <div>
                <h3 className="font-bold text-lg text-foreground">Artificial Intelligence Micro-Certification (AIC)</h3>
                <p className="text-sm text-muted-foreground mt-1">Mastery in prompt engineering and LLM orchestration for digital products.</p>
              </div>
              <button 
                onClick={() => handleOpenCert("https://drive.google.com/file/d/1DYYcLeVXDevuy8FEfTPPpIKlg4WpnLFL/view?usp=sharing")}
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary hover:bg-primary/20 rounded-lg text-sm font-medium transition-colors shrink-0"
              >
                <FileBadge className="w-4 h-4" /> View Certificate
              </button>
            </div>

            {/* Certificate 4 */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-6 border border-border rounded-xl bg-background hover:bg-secondary/30 transition-colors">
              <div>
                <h3 className="font-bold text-lg text-foreground">Product Strategy Micro-Certification (AIC)</h3>
                <p className="text-sm text-muted-foreground mt-1">Mastered problem discovery, unit economics, roadmap prioritization, and Product Strategy.</p>
              </div>
              <button 
                onClick={() => handleOpenCert("https://drive.google.com/file/d/1yDhAyehvN6YC2EI5fZ7pm42KmLHtSxwA/view?usp=sharing")}
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary hover:bg-primary/20 rounded-lg text-sm font-medium transition-colors shrink-0"
              >
                <FileBadge className="w-4 h-4" /> View Certificate
              </button>
            </div>

            {/* Certificate 5 */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-6 border border-border rounded-xl bg-background hover:bg-secondary/30 transition-colors">
              <div>
                <h3 className="font-bold text-lg text-foreground">McKinsey Forward Program</h3>
                <p className="text-sm text-muted-foreground mt-1">Developed executive-level problem-solving, structured communication, and adaptable leadership skills. Trained to navigate complex business challenges and drive cross-functional alignment.</p>
              </div>
              <button 
                onClick={() => handleOpenCert("https://drive.google.com/file/d/1Ngga6_GWPu1k1H5XCz12Su3wwjRZpxiL/view?usp=sharing")}
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary hover:bg-primary/20 rounded-lg text-sm font-medium transition-colors shrink-0"
              >
                <FileBadge className="w-4 h-4" /> View Certificate
              </button>
            </div>

            {/* Certificate 6 */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-6 border border-border rounded-xl bg-background hover:bg-secondary/30 transition-colors">
              <div>
                <h3 className="font-bold text-lg text-foreground">Lead Auditor (ISO 9001:2015 - QMS)</h3>
                <p className="text-sm text-muted-foreground mt-1">Certified by Exemplar Global to lead management system audit teams. Built rigorous QA frameworks and process compliance protocols to ensure operational excellence.</p>
              </div>
              <button 
                onClick={() => handleOpenCert("https://drive.google.com/file/d/1f42O1xO_A5J-47pNxNhtrUJRxWJXGhfS/view?usp=sharing")}
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary hover:bg-primary/20 rounded-lg text-sm font-medium transition-colors shrink-0"
              >
                <FileBadge className="w-4 h-4" /> View Certificate
              </button>
            </div>

          </div>
        </div>
      </section>

      <Footer />

      {/* --- FULLSCREEN CERTIFICATE MODAL --- */}
      {certLink && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 md:p-10">
          <div className="relative w-full max-w-5xl h-[85vh] bg-secondary rounded-xl overflow-hidden shadow-2xl flex flex-col">
            <div className="flex justify-between items-center p-4 bg-background border-b border-border">
              <h3 className="font-bold text-foreground">Certificate Viewer</h3>
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
    </main>
  );
};

export default Index;