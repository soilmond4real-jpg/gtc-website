import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { MapPinned, Layers, Ruler, Satellite, Building2, Route, Phone, Mail, Linkedin, Twitter, Send, Newspaper } from "lucide-react";

const FadeIn = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, delay }}
  >
    {children}
  </motion.div>
);

export default function GTCWebsite() {
  const mainRef = useRef(null);
  useEffect(() => {
    const handler = (e) => {
      const a = e.target.closest('a[href^="#"]');
      if (!a) return;
      const el = document.querySelector(a.getAttribute('href'));
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };
    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, []);

  return (
    <div ref={mainRef} className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-800">
      <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-slate-200/60">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2 font-semibold">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-slate-900 text-white">GTC</span>
            <span className="text-slate-900">Geospatial Task Consultancy</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#services" className="hover:text-slate-900 text-slate-600">Services</a>
            <a href="#projects" className="hover:text-slate-900 text-slate-600">Projects</a>
            <a href="#news" className="hover:text-slate-900 text-slate-600">News</a>
            <a href="#about" className="hover:text-slate-900 text-slate-600">About</a>
            <a href="#contact" className="hover:text-slate-900 text-slate-600">Contact</a>
            <a href="#quote" className="ml-2 inline-flex items-center gap-2 rounded-xl px-4 py-2 bg-slate-900 text-white hover:opacity-90">Request a Quote <Send className="h-4 w-4"/></a>
          </nav>
        </div>
      </header>
      <section id="home" className="mx-auto max-w-7xl px-4 py-20 md:py-28">
        <FadeIn>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">Mapping purpose into every space.</h1>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl">GTC is Nigeria’s trusted partner for surveying, GIS, and remote sensing—delivering precise spatial data and decision-ready insights for government, infrastructure, utilities, agriculture, and humanitarian projects.</p>
        </FadeIn>
      </section>
      {/* ... rest of the site code from previous step ... */}
    </div>
  );
}
