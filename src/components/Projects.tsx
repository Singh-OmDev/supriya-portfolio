"use client";

import React from "react";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import Image from "next/image";
import Link from "next/link";
import { Github, Globe } from "lucide-react";
import Tilt from "react-parallax-tilt";
import PlayAudioButton from "@/components/PlayAudioButton";

export default function Projects() {
    const { projects } = portfolioData;

    return (
        <section id="projects" className="py-20 flex justify-center" style={{ backgroundColor: 'var(--bg-base)' }}>
            <div className="max-w-6xl w-full px-6">

                {/* Header */}
                <div className="mb-20 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block mb-4"
                    >
                        <span className="px-4 py-1.5 text-sm font-medium rounded-full"
                            style={{ 
                                background: 'linear-gradient(135deg, var(--brand-soft), var(--brand-muted))',
                                border: '1px solid var(--border-color)',
                                color: 'var(--brand-primary)' 
                            }}>
                            My Projects
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-serif font-bold mb-6"
                        style={{ color: 'var(--text-base)' }}
                    >
                        Check out my latest work
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xl font-serif max-w-2xl mx-auto"
                        style={{ color: 'var(--text-muted)' }}
                    >
                        I&apos;ve worked on a variety of projects, from simple websites to complex applications. Here are a few of my favorites.
                    </motion.p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="h-full"
                        >
                            <Tilt
                                tiltMaxAngleX={4}
                                tiltMaxAngleY={4}
                                scale={1.02}
                                transitionSpeed={2000}
                                className="group flex flex-col rounded-2xl p-0 overflow-hidden h-full shadow-lg"
                                style={{ backgroundColor: 'var(--brand-soft)', border: '1px solid var(--border-color)' }}
                                perspective={1000}
                                glareEnable={true}
                                glareMaxOpacity={0.12}
                                glareColor="#f9a8d4"
                                glarePosition="all"
                                glareBorderRadius="16px"
                            >
                                {/* Image Card - Clickable */}
                                <Link href={`/projects/${project.id || project.title.toLowerCase().replace(/ /g, "-")}`} className="block relative aspect-video w-full overflow-hidden cursor-pointer" style={{ backgroundColor: 'var(--brand-muted)' }}>
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        unoptimized
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                                    />
                                </Link>

                                {/* Text Content */}
                                <div className="p-6 flex flex-col flex-grow">
                                    <div className="flex justify-between items-start mb-2 gap-4">
                                        <Link href={`/projects/${project.id || project.title.toLowerCase().replace(/ /g, "-")}`} className="block">
                                            <h3 className="text-2xl font-serif font-bold transition-colors" style={{ color: 'var(--text-base)' }}>
                                                {project.title}
                                            </h3>
                                        </Link>
                                        {project.status && (
                                            <span className={`px-2 py-1 mt-1 text-[10px] font-bold uppercase tracking-wider rounded-md border whitespace-nowrap ${project.status === 'Completed' ? 'bg-green-100/50 text-green-700 border-green-200 dark:bg-green-900/30 dark:text-green-400 dark:border-green-800/50' :
                                                project.status === 'Building' || project.status === 'In Progress' ? 'bg-yellow-100/80 text-yellow-700 border-yellow-300 dark:bg-yellow-900/50 dark:text-yellow-400 dark:border-yellow-700/80' :
                                                    project.status === 'Prototype' ? 'bg-purple-100/50 text-purple-700 border-purple-200 dark:bg-purple-900/30 dark:text-purple-400 dark:border-purple-800/50' :
                                                        'bg-neutral-100/50 text-neutral-700 border-neutral-200 dark:bg-neutral-800/50 dark:text-neutral-400 dark:border-neutral-700/50'
                                                }`}>
                                                {project.status === 'Building' ? 'In Progress' : project.status}
                                            </span>
                                        )}
                                    </div>
                                    <p className="font-serif mb-4 min-h-[3rem]" style={{ color: 'var(--text-muted)' }}>
                                        {project.description}
                                    </p>

                                    {/* Tech Pills */}
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.tech.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-3 py-1 text-xs font-medium rounded-md font-serif"
                                                style={{ 
                                                    backgroundColor: 'var(--brand-muted)',
                                                    color: 'var(--text-base)',
                                                    border: '1px solid var(--border-color)'
                                                }}
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Buttons */}
                                    <div className="flex flex-wrap items-center gap-3 mt-auto">
                                        <Link
                                            href={`/projects/${project.id || project.title.toLowerCase().replace(/ /g, "-")}`}
                                            className="flex-grow flex items-center justify-center gap-2 px-4 py-2 text-white rounded-lg text-sm font-medium font-serif hover:brightness-105 transition-all shadow-sm"
                                            style={{ background: 'linear-gradient(135deg, var(--brand-primary), var(--brand-accent))' }}
                                        >
                                            View Details
                                        </Link>
                                        {project.github !== "#" && (
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold font-serif transition-colors"
                                                style={{ backgroundColor: 'var(--brand-muted)', color: 'var(--brand-primary)', border: '1px solid var(--border-color)' }}
                                                aria-label="View Source Code"
                                            >
                                                <Github size={16} />
                                            </a>
                                        )}
                                        {project.link !== "#" && (
                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold font-serif transition-colors"
                                                style={{ backgroundColor: 'var(--brand-muted)', color: 'var(--brand-primary)', border: '1px solid var(--border-color)' }}
                                                aria-label="View Live Demo"
                                            >
                                                <Globe size={16} />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </Tilt>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
