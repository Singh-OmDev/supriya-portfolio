"use client";

import React from "react";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

export default function About() {
    const { profile } = portfolioData;

    return (
        <section id="about" className="py-24 md:py-32 flex justify-center overflow-hidden" style={{ backgroundColor: 'var(--bg-base)' }}>
            <div className="max-w-6xl w-full px-6 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20 items-center">

                {/* Content Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="md:col-span-12 max-w-3xl mx-auto text-center"
                >
                    <div className="flex items-center justify-center gap-4 mb-6">
                        <div className="h-px w-12" style={{ backgroundColor: 'var(--brand-primary)' }} />
                        <span className="text-sm font-medium tracking-widest uppercase" style={{ color: 'var(--brand-primary)' }}>
                            About Me
                        </span>
                        <div className="h-px w-12" style={{ backgroundColor: 'var(--brand-primary)' }} />
                    </div>

                    <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8 leading-tight" style={{ color: 'var(--text-base)' }}>
                        Building Impactful AI &amp; Software Solutions
                    </h2>

                    <div className="text-lg leading-relaxed space-y-6 text-left md:text-center" style={{ color: 'var(--text-muted)' }}>
                        {profile.bio.split('\n').filter(Boolean).map((line, index) => (
                            <p key={index}>{line}</p>
                        ))}
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
