import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

import Link from "next/link";
import { ArrowRight, TerminalSquare } from "lucide-react";
import { Metadata } from "next";
import { portfolioData } from "@/data/portfolio";

export const metadata: Metadata = {
  title: `${portfolioData.profile.name} | ${portfolioData.profile.role}`,
  description: portfolioData.profile.tagline,
  openGraph: {
    title: `${portfolioData.profile.name} | ${portfolioData.profile.role}`,
    description: portfolioData.profile.tagline,
    url: portfolioData.socials.website,
    siteName: `${portfolioData.profile.name} Portfolio`,
    images: [
      {
        url: portfolioData.profile.avatar,
        width: 800,
        height: 600,
        alt: `${portfolioData.profile.name} Profile Image`,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${portfolioData.profile.name} | ${portfolioData.profile.role}`,
    description: portfolioData.profile.tagline,
    images: [portfolioData.profile.avatar],
  },
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />


      {/* Backend Playground CTA */}
      <section className="py-24 flex justify-center w-full px-6 relative z-10 overflow-hidden" style={{ backgroundColor: 'var(--bg-base)' }}>
        <div className="max-w-4xl w-full text-center flex flex-col items-center">
          <div className="p-4 rounded-2xl mb-6" style={{ backgroundColor: 'var(--brand-soft)', border: '1px solid var(--border-color)' }}>
            <TerminalSquare size={32} style={{ color: 'var(--brand-primary)' }} />
          </div>

          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 tracking-tight" style={{ color: 'var(--text-base)' }}>
            Backend Playground
          </h2>
          <p className="max-w-xl mx-auto text-lg leading-relaxed mb-8" style={{ color: 'var(--text-muted)' }}>
            Explore interactive visualizers for core system design concepts like Rate Limiting, Load Balancing, and Distributed Caching.
          </p>
          <Link
            href="/playground"
            className="inline-flex items-center gap-2 px-8 py-4 text-white rounded-full font-medium hover:brightness-105 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 group"
            style={{ background: 'linear-gradient(135deg, var(--brand-primary), var(--brand-accent))' }}
          >
            Enter Playground
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      <Contact />
    </main>
  );
}
