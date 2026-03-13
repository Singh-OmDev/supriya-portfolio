"use client";

import React from "react";
import Playground from "@/components/Playground";
import { ArrowLeft } from "lucide-react";
import NextLink from "next/link";

export default function PlaygroundPage() {
    return (
        <main className="min-h-screen selection:bg-brand-muted" style={{ backgroundColor: 'var(--bg-base)', color: 'var(--text-base)' }}>
            {/* Top Navigation Bar */}
            <nav className="fixed top-0 left-0 right-0 z-50 p-6 flex justify-between items-center backdrop-blur-md border-b"
                style={{ backgroundColor: 'var(--bg-base)', opacity: 0.9, borderBottomColor: 'var(--border-color)' }}>
                <NextLink
                    href="/"
                    className="flex items-center gap-2 text-sm font-medium transition-colors group"
                    style={{ color: 'var(--text-muted)' }}
                >
                    <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                    Back to Portfolio
                </NextLink>
                <div className="text-xl font-serif font-bold tracking-tight" style={{ color: 'var(--brand-primary)' }}>
                    SS.
                </div>
            </nav>

            <div className="pt-20">
                <Playground />
            </div>

        </main>
    );
}
