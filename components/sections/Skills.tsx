"use client";
import { skills } from "@/lib/data";
import ScrollReveal from "@/components/animations/ScrollReveal";
import SkillBadge from "@/components/ui/SkillBadge";
import { Code2, Layers, Wrench, Brain, Award, ExternalLink } from "lucide-react";

const skillGroups = [
  { key: "languages", label: "Languages", icon: Code2, items: skills.languages, variant: "highlight" as const },
  { key: "frameworks", label: "Frameworks", icon: Layers, items: skills.frameworks, variant: "highlight" as const },
  { key: "tools", label: "Tools & Databases", icon: Wrench, items: skills.tools, variant: "default" as const },
  { key: "aiml", label: "AI / ML", icon: Brain, items: skills.aiml, variant: "default" as const },
];

export default function Skills() {
  return (
    <section id="skills" className="py-28 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.06)_0%,transparent_60%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-violet-400 text-sm font-semibold uppercase tracking-widest mb-3 block">Expertise</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Skills & Technologies</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-violet-500 to-indigo-500 rounded-full mx-auto" />
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {skillGroups.map((group, i) => {
            const Icon = group.icon;
            return (
              <ScrollReveal key={group.key} delay={i * 0.1}>
                <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/60 hover:border-violet-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-violet-500/5 h-full">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="p-2.5 rounded-xl bg-violet-500/15 border border-violet-500/20">
                      <Icon size={18} className="text-violet-400" />
                    </div>
                    <h3 className="text-white font-bold text-sm">{group.label}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <SkillBadge key={item} label={item} variant={group.variant} />
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Certificates */}
        <ScrollReveal delay={0.3}>
          <div className="p-8 rounded-2xl bg-gradient-to-r from-violet-900/20 to-indigo-900/20 border border-violet-500/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-violet-500/20 border border-violet-500/30">
                <Award size={20} className="text-violet-300" />
              </div>
              <h3 className="text-white font-bold text-lg">Certifications</h3>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {skills.certificates.map((cert) => {
                const content = (
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/60 border border-slate-800/60 hover:border-violet-500/30 transition-all duration-200 h-full group-hover:border-violet-500/40">
                    <div className="w-3 h-3 rounded-full bg-gradient-to-br from-violet-400 to-indigo-400 flex-shrink-0" />
                    <div>
                      <p className="flex items-center gap-2 text-white font-semibold text-sm">
                        {cert.name}
                        {cert.link && <ExternalLink size={14} className="text-violet-400" />}
                      </p>
                      <p className="text-slate-400 text-xs">{cert.issuer}</p>
                    </div>
                  </div>
                );

                return cert.link ? (
                  <a
                    key={cert.name}
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block group"
                  >
                    {content}
                  </a>
                ) : (
                  <div key={cert.name} className="block group">
                    {content}
                  </div>
                );
              })}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
