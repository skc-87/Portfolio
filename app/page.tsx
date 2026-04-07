import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      {/* Footer */}
      <footer className="bg-[#050816] border-t border-slate-800/40 py-8 text-center">
        <p className="text-slate-500 text-sm">
          Built with{" "}
          <span className="text-violet-400 font-medium">Next.js</span> &amp;{" "}
          <span className="text-violet-400 font-medium">Framer Motion</span> by{" "}
          <span className="text-white font-semibold">Sanjay Kumar</span>
        </p>
        <p className="text-slate-600 text-xs mt-1">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </footer>
    </main>
  );
}
