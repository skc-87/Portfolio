"use client";
import { personalInfo } from "@/lib/data";
import ScrollReveal from "@/components/animations/ScrollReveal";
import AnimatedButton from "@/components/ui/AnimatedButton";
import { Mail, Phone, MapPin, Send } from "lucide-react";

function GithubIcon({ size = 20, className = "" }: { size?: number; className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon({ size = 20, className = "" }: { size?: number; className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    isLucide: true,
  },
  {
    icon: Phone,
    label: "Phone",
    value: personalInfo.phone,
    href: `tel:${personalInfo.phone}`,
    isLucide: true,
  },
  {
    icon: null,
    svgIcon: "linkedin",
    label: "LinkedIn",
    value: "sanjay-kumar-330104280",
    href: personalInfo.linkedin,
    isLucide: false,
  },
  {
    icon: null,
    svgIcon: "github",
    label: "GitHub",
    value: "skc-87",
    href: personalInfo.github,
    isLucide: false,
  },
  {
    icon: MapPin,
    label: "Location",
    value: personalInfo.location,
    href: null,
    isLucide: true,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-28 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(139,92,246,0.08)_0%,transparent_60%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-violet-400 text-sm font-semibold uppercase tracking-widest mb-3 block">Reach Out</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Get In Touch</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-violet-500 to-indigo-500 rounded-full mx-auto mb-6" />
            <p className="text-slate-400 max-w-md mx-auto text-lg">
              Open to new opportunities, collaborations, and interesting challenges. Let&apos;s connect!
            </p>
          </div>
        </ScrollReveal>

        <div className="max-w-4xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {contactLinks.map((item, i) => {
              const renderIcon = () => {
                if (item.isLucide && item.icon) {
                  const Icon = item.icon;
                  return <Icon size={20} className="text-violet-400" />;
                }
                if (item.svgIcon === "github") return <GithubIcon size={20} className="text-violet-400" />;
                if (item.svgIcon === "linkedin") return <LinkedinIcon size={20} className="text-violet-400" />;
                return null;
              };

              const content = (
                <div className="group p-5 rounded-2xl bg-slate-900/60 border border-slate-800/60 hover:border-violet-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/5 flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-violet-500/15 border border-violet-500/20 flex-shrink-0 group-hover:bg-violet-500/25 transition-colors">
                    {renderIcon()}
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-slate-500 text-xs font-medium uppercase tracking-wider mb-0.5">{item.label}</p>
                    <p className="text-slate-200 text-sm font-medium truncate group-hover:text-violet-300 transition-colors">
                      {item.value}
                    </p>
                  </div>
                </div>
              );

              return (
                <ScrollReveal key={item.label} delay={i * 0.07}>
                  {item.href ? (
                    <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
                      {content}
                    </a>
                  ) : (
                    content
                  )}
                </ScrollReveal>
              );
            })}
          </div>

          <ScrollReveal delay={0.4}>
            <div className="text-center">
              <AnimatedButton href={`mailto:${personalInfo.email}`} variant="primary" className="mx-auto">
                <Send size={16} />
                Send Me an Email
              </AnimatedButton>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
