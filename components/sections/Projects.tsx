"use client";
import { projects } from "@/lib/data";
import ScrollReveal from "@/components/animations/ScrollReveal";
import SkillBadge from "@/components/ui/SkillBadge";
import { BrainCircuit, Server, Code2, ExternalLink } from "lucide-react";

function GithubIcon({ size = 18, className = "" }: { size?: number; className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-28 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(99,102,241,0.06)_0%,transparent_60%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-violet-400 text-sm font-semibold uppercase tracking-widest mb-3 block">Work</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Featured Projects</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-violet-500 to-indigo-500 rounded-full mx-auto" />
          </div>
        </ScrollReveal>

        {projects.map((project) => (
          <ScrollReveal key={project.id} delay={0.1}>
            <div className="group relative rounded-3xl overflow-hidden bg-slate-900/60 border border-slate-800/60 hover:border-violet-500/40 transition-all duration-500 hover:shadow-2xl hover:shadow-violet-500/10">
              <div className="flex flex-col lg:flex-row">
                {/* Visual panel */}
                <div className="lg:w-2/5 relative bg-gradient-to-br from-violet-900/40 via-indigo-900/30 to-slate-900 min-h-64 lg:min-h-full flex items-center justify-center p-8 overflow-hidden">
                  <div className="absolute -top-8 -left-8 w-40 h-40 bg-violet-600/20 rounded-full blur-2xl" />
                  <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-indigo-600/20 rounded-full blur-2xl" />

                  <div className="relative z-10 flex flex-col items-center gap-6">
                    <div className="w-20 h-20 rounded-2xl bg-violet-500/20 border border-violet-500/30 flex items-center justify-center">
                      <BrainCircuit size={40} className="text-violet-300" />
                    </div>
                    <div className="flex gap-6">
                      <div className="flex flex-col items-center gap-2">
                        <div className="w-10 h-10 rounded-xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center">
                          <Server size={18} className="text-indigo-300" />
                        </div>
                        <span className="text-slate-400 text-xs">Backend</span>
                      </div>
                      <div className="flex flex-col items-center gap-2">
                        <div className="w-10 h-10 rounded-xl bg-violet-500/20 border border-violet-500/30 flex items-center justify-center">
                          <Code2 size={18} className="text-violet-300" />
                        </div>
                        <span className="text-slate-400 text-xs">ML/AI</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 p-8 lg:p-10">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <span className="text-violet-400 text-xs font-semibold uppercase tracking-widest mb-2 block">
                        {project.role}
                      </span>
                      <h3 className="text-white font-bold text-xl lg:text-2xl leading-snug group-hover:text-violet-200 transition-colors">
                        {project.title}
                      </h3>
                    </div>
                    <div className="flex gap-3">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-shrink-0 p-2.5 rounded-xl bg-violet-500/10 border border-violet-500/30 text-violet-300 hover:text-white hover:border-violet-500/60 hover:bg-violet-500/20 transition-all duration-200"
                          aria-label="Live Website"
                        >
                          <ExternalLink size={18} />
                        </a>
                      )}
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-shrink-0 p-2.5 rounded-xl bg-slate-800 border border-slate-700 text-slate-400 hover:text-white hover:border-violet-500/50 hover:bg-violet-500/10 transition-all duration-200"
                        aria-label="GitHub"
                      >
                        <GithubIcon size={18} />
                      </a>
                    </div>
                  </div>

                  <p className="text-slate-400 text-sm mb-6 leading-relaxed">{project.description}</p>

                  <ul className="space-y-3 mb-7">
                    {project.highlights.map((point, j) => (
                      <li key={j} className="flex gap-3 text-slate-300 text-sm leading-relaxed">
                        <span className="text-violet-400 mt-0.5 flex-shrink-0">▸</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <SkillBadge key={tag} label={tag} variant="default" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
