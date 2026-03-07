import React from 'react';

const leadershipRoles = [
  {
    title: "Lead",
    org: "Standup Project Management Club",
    desc: "Leading the campus PM community, fostering product-thinking through teardowns and strategy sessions."
  },
  {
    title: "Lead Instructor",
    org: "Product Management Bootcamp",
    desc: "Running a highly selective bootcamp teaching core PM concepts, metrics tracking, PRD writing, and guiding hands-on product projects."
  },
  {
    title: "Founding Member",
    org: "DOMH Masterclass",
    desc: "Spearheaded an initiative to upskill juniors in high-leverage tools: Advanced Excel, SQL, Power BI, Python, Agile workflows, and Case Studies."
  }
];

const certifications = [
  "Artificial Intelligence Micro-Certification (AIC) - Product School",
  "Product Analytics Micro-Certification (PAC) - Product School",
  "Product Strategy Micro-Certification (PRC) - Product School"
];

export default function LeadershipAndCerts() {
  return (
    <section className="py-16 px-6 max-w-5xl mx-auto border-t border-zinc-800">
      
      {/* Leadership Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-white mb-8">Leadership & Community</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {leadershipRoles.map((role, index) => (
            <div key={index} className="p-6 bg-zinc-900/50 border border-zinc-800 rounded-xl hover:border-blue-500 transition-all duration-300">
              <h3 className="text-xl font-semibold text-blue-400 mb-2">{role.title}</h3>
              <h4 className="text-sm font-medium text-zinc-300 mb-4">{role.org}</h4>
              <p className="text-sm text-zinc-400 leading-relaxed">{role.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Certifications Section */}
      <div>
        <h2 className="text-3xl font-bold text-white mb-6">Certifications</h2>
        <div className="flex flex-col gap-3">
          {certifications.map((cert, index) => (
            <div key={index} className="flex items-center gap-3 p-4 bg-zinc-900/30 border border-zinc-800/50 rounded-lg">
              <span className="text-blue-500">🏆</span>
              <span className="text-zinc-300 text-sm font-medium">{cert}</span>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}