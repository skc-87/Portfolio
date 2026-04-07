"use client";
import { education } from "@/lib/data";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { GraduationCap, MapPin, Calendar } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-28 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-violet-400 text-sm font-semibold uppercase tracking-widest mb-3 block">Education</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">My Background</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-violet-500 to-indigo-500 rounded-full mx-auto" />
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {education.map((ed, i) => (
            <ScrollReveal key={ed.id} delay={i * 0.15}>
              <div className="relative group p-8 rounded-2xl bg-slate-900/60 border border-slate-800/60 hover:border-violet-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-violet-500/5 overflow-hidden h-full">
                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-violet-500/10 to-transparent rounded-bl-3xl" />

                <div className="flex items-start gap-4 mb-5">
                  <div className="p-3 rounded-xl bg-violet-500/15 border border-violet-500/20 flex-shrink-0">
                    <GraduationCap size={22} className="text-violet-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg leading-snug group-hover:text-violet-300 transition-colors">
                      {ed.institution}
                    </h3>
                    <p className="text-violet-400 text-sm font-medium mt-0.5">{ed.degree}</p>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-slate-400 text-sm">
                    <Calendar size={14} className="text-slate-500 flex-shrink-0" />
                    <span>{ed.period}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-400 text-sm">
                    <MapPin size={14} className="text-slate-500 flex-shrink-0" />
                    <span>{ed.location}</span>
                  </div>
                </div>

                <div className="mt-5 pt-5 border-t border-slate-800/60">
                  <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
                    {ed.grade}
                  </span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
