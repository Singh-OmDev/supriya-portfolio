"use client";

import React from "react";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

export default function Skills() {
    const { skills } = portfolioData;

    return (
        <section className="py-24 flex justify-center" style={{ backgroundColor: 'var(--bg-base)' }}>
            <div className="max-w-5xl w-full px-6 text-left">

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <h2 className="text-3xl font-serif font-bold" style={{
                        background: 'linear-gradient(135deg, var(--brand-primary), var(--brand-accent))',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                    }}>
                        Skills
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {skills.map((categoryGroup, catIndex) => (
                        <motion.div
                            key={catIndex}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: catIndex * 0.1 }}
                        >
                            <h3 className="text-xl font-medium mb-4" style={{ color: 'var(--text-base)' }}>
                                {categoryGroup.category}
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {categoryGroup.items.map((skill, skillIndex) => (
                                    <div
                                        key={skillIndex}
                                        className="px-4 py-2 rounded-lg text-sm font-medium shadow-sm cursor-default transition-all hover:-translate-y-0.5"
                                        style={{
                                            backgroundColor: 'var(--brand-muted)',
                                            color: 'var(--text-base)',
                                            border: '1px solid var(--border-color)',
                                        }}
                                    >
                                        {skill}
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
