"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { Send, Phone, Mail, User, MessageSquare, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import emailjs from "@emailjs/browser";

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;


export default function Contact() {
    const { socials } = portfolioData;
    const formRef = useRef<HTMLFormElement>(null);

    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        message: ""
    });

    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
            alert("EmailJS keys are missing! Please check your configuration.");
            return;
        }

        setStatus("submitting");

        try {
            await emailjs.sendForm(
                SERVICE_ID,
                TEMPLATE_ID,
                formRef.current!,
                PUBLIC_KEY
            );
            setStatus("success");
            setFormData({ name: "", phone: "", email: "", message: "" });

            // Reset status after 3 seconds
            setTimeout(() => setStatus("idle"), 3000);

        } catch (error) {
            console.error("EmailJS Error:", error);
            setStatus("error");
            setTimeout(() => setStatus("idle"), 3000);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const inputClasses = "w-full px-4 py-3 rounded-full focus:outline-none focus:ring-2 transition-all pl-10 text-sm font-medium" ;
    const inputStyle = { backgroundColor: 'var(--brand-soft)', border: '1px solid var(--border-color)', color: 'var(--text-base)', outline: 'none' } as React.CSSProperties;

    return (
        <section id="contact" className="py-32 flex justify-center w-full overflow-hidden relative" style={{ backgroundColor: 'var(--bg-base)' }}>
            {/* Subdued Rose Gradient Blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[140px] -z-10" 
                style={{ background: 'radial-gradient(circle, rgba(212,130,160,0.1) 0%, transparent 75%)' }} />

            <div className="max-w-4xl w-full px-6">

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12 text-center"
                >
                    <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider uppercase rounded-full mb-4 text-white"
                        style={{ background: 'linear-gradient(135deg, var(--brand-primary), var(--brand-accent))' }}>
                        Contact
                    </span>
                    <h2 className="text-4xl md:text-5xl font-serif font-medium mb-6" style={{ color: 'var(--text-base)' }}>
                        Let&apos;s Work Together
                    </h2>
                    <p className="max-w-xl mx-auto text-lg" style={{ color: 'var(--text-muted)' }}>
                        Have a project in mind or just want to say hello? Fill out the form below and I&apos;ll get back to you as soon as possible.
                    </p>
                </motion.div>

                <motion.form
                    ref={formRef}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    onSubmit={handleSubmit}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6 backdrop-blur-md p-8 rounded-[2rem] shadow-xl"
                    style={{ backgroundColor: 'var(--brand-soft)', border: '1px solid var(--border-color)', opacity: 0.98 }}
                >
                    {/* Name */}
                    <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium flex items-center gap-2 ml-1" style={{ color: 'var(--brand-primary)' }}>
                            Name <span style={{ color: 'var(--brand-primary)' }}>*</span>
                        </label>
                        <div className="relative group">
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Your name"
                                className={inputClasses}
                                style={inputStyle}
                            />
                            <User size={18} className="absolute left-3 top-1/2 -translate-y-1/2 transition-colors" style={{ color: 'var(--brand-primary)' }} />
                        </div>
                    </div>

                    {/* Phone */}
                    <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-medium flex items-center gap-2 ml-1" style={{ color: 'var(--brand-primary)' }}>
                            Phone <span style={{ color: 'var(--brand-primary)' }}>*</span>
                        </label>
                        <div className="relative group">
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                required
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="+91 9876543210"
                                className={inputClasses}
                                style={inputStyle}
                            />
                            <Phone size={18} className="absolute left-3 top-1/2 -translate-y-1/2 transition-colors" style={{ color: 'var(--brand-primary)' }} />
                        </div>
                    </div>

                    {/* Email */}
                    <div className="space-y-2 md:col-span-2">
                        <label htmlFor="email" className="text-sm font-medium flex items-center gap-2 ml-1" style={{ color: 'var(--brand-primary)' }}>
                            Email <span style={{ color: 'var(--brand-primary)' }}>*</span>
                        </label>
                        <div className="relative group">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="your@email.com"
                                className={inputClasses}
                                style={inputStyle}
                            />
                            <Mail size={18} className="absolute left-3 top-1/2 -translate-y-1/2 transition-colors" style={{ color: 'var(--brand-primary)' }} />
                        </div>
                    </div>

                    {/* Message */}
                    <div className="space-y-2 md:col-span-2">
                        <label htmlFor="message" className="text-sm font-medium flex items-center gap-2 ml-1" style={{ color: 'var(--brand-primary)' }}>
                            Message <span style={{ color: 'var(--brand-primary)' }}>*</span>
                        </label>
                        <div className="relative group">
                            <textarea
                                id="message"
                                name="message"
                                required
                                rows={5}
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Tell me about your project..."
                                className={inputClasses.replace("rounded-full", "rounded-2xl") + " pt-3 resize-none"}
                                style={inputStyle}
                            />
                            <MessageSquare size={18} className="absolute left-3 top-4 transition-colors" style={{ color: 'var(--brand-primary)' }} />
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="md:col-span-2 mt-2">
                        <button
                            type="submit"
                            disabled={status === "submitting" || status === "success"}
                            className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 text-white rounded-full font-medium transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-lg"
                            style={{ background: 'linear-gradient(135deg, var(--brand-primary), var(--brand-accent))' }}
                        >
                            {status === "idle" && (
                                <>
                                    <Send size={18} />
                                    Send Message
                                </>
                            )}
                            {status === "submitting" && (
                                <>
                                    <Loader2 size={18} className="animate-spin" />
                                    Sending...
                                </>
                            )}
                            {status === "success" && (
                                <>
                                    <CheckCircle2 size={18} className="text-green-600 dark:text-green-500" />
                                    Message Sent!
                                </>
                            )}
                            {status === "error" && (
                                <>
                                    <AlertCircle size={18} className="text-red-600 dark:text-red-500" />
                                    Failed to Send
                                </>
                            )}
                        </button>
                    </div>

                </motion.form>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="mt-20 text-center text-sm flex flex-col items-center gap-1"
                    style={{ color: 'var(--text-muted)' }}
                >
                    <p>&copy; {new Date().getFullYear()} Supriya Singh. All rights reserved.</p>
                    <p className="text-xs select-none" style={{ color: 'var(--brand-primary)', opacity: 0.6 }}>What happens if you click the cat 5 times...?</p>
                </motion.div>

            </div>
        </section>
    );
}
