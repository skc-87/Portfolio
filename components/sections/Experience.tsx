"use client";
import { experience } from "@/lib/data";
import ScrollReveal from "@/components/animations/ScrollReveal";
import SkillBadge from "@/components/ui/SkillBadge";
import { Briefcase, MapPin, Calendar, ExternalLink } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-28 relative">
      {/* subtle background texture */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.06)_0%,transparent_60%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-violet-400 text-sm font-semibold uppercase tracking-widest mb-3 block">Career</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Work Experience</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-violet-500 to-indigo-500 rounded-full mx-auto" />
          </div>
        </ScrollReveal>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500/60 via-indigo-500/30 to-transparent" />

          <div className="flex flex-col gap-12">
            {experience.map((item, i) => (
              <ScrollReveal key={item.id} delay={i * 0.15}>
                <div
                  className={`relative flex flex-col md:flex-row gap-8 ${
                    i % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-violet-500 to-indigo-500 shadow-lg shadow-violet-500/50 border-2 border-[#050816] z-10 mt-6" />

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block flex-1" />

                  {/* Card */}
                  <div className="flex-1 ml-12 md:ml-0">
                    <div className="group relative p-7 rounded-2xl bg-slate-900/70 border border-slate-800/60 hover:border-violet-500/40 transition-all duration-300 hover:shadow-2xl hover:shadow-violet-500/5">
                      {/* Current badge */}
                      {item.current && (
                        <span className="absolute top-4 right-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-semibold">
                          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                          Current
                        </span>
                      )}

                      <div className="flex items-start gap-4 mb-5">
                        <div className="p-3 rounded-xl bg-violet-500/15 border border-violet-500/20 flex-shrink-0">
                          <Briefcase size={20} className="text-violet-400" />
                        </div>
                        <div>
                          <div className="flex items-center gap-3">
                            <h3 className="text-white font-bold text-xl group-hover:text-violet-300 transition-colors">
                              {item.role}
                            </h3>
                            {item.link && (
                              <a 
                                href={item.link} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="p-1.5 rounded-lg bg-violet-500/10 text-violet-400 hover:bg-violet-500/20 hover:text-white transition-colors border border-violet-500/20"
                                title="View details"
                              >
                                <ExternalLink size={14} />
                              </a>
                            )}
                          </div>
                          <p className="text-violet-400 font-semibold text-base mt-1">
                            {item.company}
                            {item.client && (
                              <span className="text-slate-400 font-normal text-sm ml-1">
                                — for{" "}
                                <span className="text-indigo-300 font-medium">{item.client}</span>
                              </span>
                            )}
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-4 mb-5 text-sm text-slate-400">
                        <div className="flex items-center gap-1.5">
                          <Calendar size={13} className="text-slate-500" />
                          {item.period}
                        </div>
                        <div className="flex items-center gap-1.5">
                          <MapPin size={13} className="text-slate-500" />
                          {item.location}
                        </div>
                      </div>

                      <ul className="space-y-2.5 mb-5">
                        {item.highlights.map((point, j) => (
                          <li key={j} className="flex gap-2.5 text-slate-300 text-sm leading-relaxed">
                            <span className="text-violet-400 mt-1 flex-shrink-0">▸</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2">
                        {item.tags.map((tag) => (
                          <SkillBadge key={tag} label={tag} variant="highlight" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
