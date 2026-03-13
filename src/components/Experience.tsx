"use client";

import React from "react";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import Image from "next/image";

export default function Experience() {
    const { experience } = portfolioData;

    return (
        <section id="experience" className="py-20 flex justify-center" style={{ backgroundColor: 'var(--bg-base)' }}>
            <div className="max-w-3xl w-full px-6">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-serif font-medium" style={{
                        background: 'linear-gradient(135deg, var(--brand-primary), var(--brand-accent))',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                    }}>
                        Education & Experience
                    </h2>
                </motion.div>

                <div className="space-y-12">
                    {experience.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative"
                        >
                            <div className="flex flex-col md:flex-row gap-6 md:items-start">
                                {/* Logo */}
                                <div className="flex-shrink-0 w-12 h-12 relative rounded-full overflow-hidden border" style={{ borderColor: 'var(--border-color)', backgroundColor: 'var(--brand-soft)' }}>
                                    <Image src={item.logo} alt={item.company} fill sizes="48px" className="object-cover" />
                                </div>

                                {/* Content */}
                                <div className="flex-grow">
                                    <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
                                        <h3 className="text-xl font-medium" style={{ color: 'var(--text-base)' }}>
                                            {item.company}
                                        </h3>
                                        <span className="text-sm font-medium" style={{ color: 'var(--brand-primary)' }}>
                                            {item.period}
                                        </span>
                                    </div>

                                    <div className="text-base font-medium mb-2" style={{ color: 'var(--brand-accent)' }}>
                                        {item.role}
                                    </div>

                                    <p className="leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                                        {item.description}
                                    </p>
                                </div>
                            </div>

                            {/* Divider */}
                            {index !== experience.length - 1 && (
                                <div className="mt-12 h-px w-full" style={{ backgroundColor: 'var(--border-color)' }} />
                            )}
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
