"use client";

import React from "react";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import Image from "next/image";




export default function Hero() {
    const { profile } = portfolioData;

    return (
        <section id="hero" className="min-h-[85vh] flex items-center justify-center pt-20 relative">
            <div className="max-w-5xl w-full px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="order-2 md:order-1"
                >
                    <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight mb-6"
                        style={{ color: 'var(--text-base)' }}>
                        Hi, I&apos;m{" "}
                        <span style={{
                            background: 'linear-gradient(135deg, var(--brand-primary), var(--brand-accent))',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}>
                            {profile.name}
                        </span>
                    </h1>

                    <p className="text-xl md:text-2xl font-serif leading-relaxed max-w-lg mb-6"
                        style={{ color: 'var(--text-muted)' }}>
                        {profile.tagline}
                    </p>

                   

                </motion.div>

                {/* Image Content */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="order-1 md:order-2 flex flex-col items-center justify-center gap-8"
                >
                    <div className="relative w-64 h-64 md:w-80 md:h-80">
                        <div className="absolute inset-0 rounded-full transform rotate-6 scale-105"
                            style={{ border: '1px solid var(--brand-primary)', opacity: 0.5 }} />
                        <div className="relative w-full h-full rounded-full overflow-hidden transition-all duration-700 shadow-xl"
                            style={{ boxShadow: '0 0 40px rgba(192, 132, 151, 0.2)' }}>
                            <Image
                                src={profile.avatar}
                                alt={profile.name}
                                fill
                                sizes="(max-width: 768px) 256px, 320px"
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section >
    );
}
