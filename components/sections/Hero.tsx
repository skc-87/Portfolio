"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { personalInfo } from "@/lib/data";
import AnimatedButton from "@/components/ui/AnimatedButton";
import { Mail, Phone, Download, ArrowDown } from "lucide-react";

function GithubIcon({ size = 18, className = "" }: { size?: number; className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon({ size = 18, className = "" }: { size?: number; className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

const TypewriterText = ({ texts }: { texts: string[] }) => {
  const [displayText, setDisplayText] = useState("");
  const indexRef = useRef(0);
  const phaseRef = useRef<"typing" | "pausing" | "deleting" | "waiting">("typing");
  const charRef = useRef(0);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    const tick = () => {
      const fullText = texts[indexRef.current];

      switch (phaseRef.current) {
        case "typing":
          charRef.current++;
          setDisplayText(fullText.substring(0, charRef.current));
          if (charRef.current >= fullText.length) {
            phaseRef.current = "pausing";
            timer = setTimeout(tick, 3000); // 3s pause after full word
          } else {
            timer = setTimeout(tick, 150); // typing speed
          }
          break;

        case "pausing":
          phaseRef.current = "deleting";
          timer = setTimeout(tick, 100);
          break;

        case "deleting":
          charRef.current--;
          setDisplayText(fullText.substring(0, charRef.current));
          if (charRef.current <= 0) {
            phaseRef.current = "waiting";
            timer = setTimeout(tick, 1000); // 1s pause before next word
          } else {
            timer = setTimeout(tick, 80); // deleting speed
          }
          break;

        case "waiting":
          indexRef.current = (indexRef.current + 1) % texts.length;
          phaseRef.current = "typing";
          timer = setTimeout(tick, 200);
          break;
      }
    };

    timer = setTimeout(tick, 500);
    return () => clearTimeout(timer);
  }, [texts]);

  return (
    <span className="text-violet-300">
      {displayText}
      <span className="animate-[pulse_1s_ease-in-out_infinite] border-r-2 border-violet-400 ml-1 opacity-70" />
    </span>
  );
};

export default function Hero() {
  const titles = [
    "Software Engineer",
    "Data Analyst",
    "AI/ML Developer",
    "Full-Stack Explorer"
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-violet-700/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-indigo-700/25 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-900/10 rounded-full blur-3xl" />
        {/* Grid lines */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(139,92,246,1) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-24">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-24">
          {/* Left: Text content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 text-sm font-medium mb-6">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                Available for opportunities
              </span>
            </motion.div>

            <motion.h1
              className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white mb-4 leading-tight tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Sanjay{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-400">
                Kumar
              </span>
            </motion.h1>

            <div className="h-10 mb-4 sm:h-12 flex justify-center lg:justify-start">
              <p className="text-xl sm:text-2xl font-medium">
                I am a <TypewriterText texts={titles} />
              </p>
            </div>

            <motion.p
              className="text-slate-400 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {personalInfo.tagline}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <AnimatedButton 
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${personalInfo.email}`} 
                target="_blank" 
                variant="primary"
              >
                <Mail size={16} />
                Get in Touch
              </AnimatedButton>
              <AnimatedButton href={personalInfo.resume} download variant="secondary">
                <Download size={16} />
                Download CV
              </AnimatedButton>
            </motion.div>

            {/* Social links */}
            <motion.div
              className="flex items-center gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm"
              >
                <GithubIcon size={18} className="group-hover:scale-110 transition-transform" />
                GitHub
              </a>
              <span className="text-slate-700">|</span>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-slate-400 hover:text-violet-400 transition-colors text-sm"
              >
                <LinkedinIcon size={18} className="group-hover:scale-110 transition-transform" />
                LinkedIn
              </a>
              <span className="text-slate-700">|</span>
              <a
                href={`tel:${personalInfo.phone}`}
                className="group flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm"
              >
                <Phone size={18} className="group-hover:scale-110 transition-transform" />
                {personalInfo.phone}
              </a>
            </motion.div>
          </div>

          {/* Right: Profile photo */}
          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <div className="relative">
              {/* Glowing ring */}
              <div className="absolute -inset-1 bg-gradient-to-br from-violet-500 to-indigo-500 rounded-full blur-md opacity-70 animate-pulse" />
              <div className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-violet-500/50 shadow-2xl shadow-violet-500/30">
                <Image
                  src="/images/profile.jpg"
                  alt="Sanjay Kumar"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
              {/* Floating badge */}
              <motion.div
                className="absolute -bottom-4 -right-4 bg-slate-900 border border-violet-500/40 rounded-2xl px-4 py-2 shadow-xl"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <p className="text-violet-300 font-bold text-sm">MERN Stack &amp; Data</p>
                <p className="text-slate-400 text-xs">Engineer</p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ArrowDown size={16} />
        </motion.div>
      </div>
    </section>
  );
}
