"use client";

import { useState, FormEvent } from "react";
import { FiMail, FiSend, FiCheckCircle, FiAlertCircle } from "react-icons/fi";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState<Status>("idle");

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (!name || !email || !message) return;

        setStatus("submitting");

        try {
            const res = await fetch("https://formspree.io/f/xzzbjbwp", {
                method: "POST",
                headers: { "Content-Type": "application/json", Accept: "application/json" },
                body: JSON.stringify({ name, email, subject, message }),
            });

            if (res.ok) {
                setStatus("success");
                setName(""); setEmail(""); setSubject(""); setMessage("");
            } else {
                setStatus("error");
            }
        } catch {
            // Fallback: open mailto link if fetch fails
            const mailto = `mailto:support@spinpickonline.com?subject=${encodeURIComponent(subject || "Contact from SpinPickOnline")}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;
            window.location.href = mailto;
            setStatus("idle");
        }
    }

    if (status === "success") {
        return (
            <div className="flex flex-col items-center justify-center py-10 text-center gap-4">
                <FiCheckCircle className="w-14 h-14 text-green-500" />
                <h3 className="text-lg font-bold text-gray-900">Message Sent!</h3>
                <p className="text-sm text-gray-600 max-w-xs">
                    Thanks for reaching out. We'll get back to you within 24–48 hours.
                </p>
                <button
                    onClick={() => setStatus("idle")}
                    className="mt-2 px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg transition-colors"
                >
                    Send Another Message
                </button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1.5">
                        Name <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        id="name"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-3 py-2 text-sm border-2 border-gray-200 rounded-lg focus:border-blue-400 focus:outline-none transition-all"
                        placeholder="John Doe"
                    />
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1.5">
                        Email <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <FiMail className="text-gray-400 text-sm" />
                        </div>
                        <input
                            type="email"
                            id="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full pl-9 pr-3 py-2 text-sm border-2 border-gray-200 rounded-lg focus:border-blue-400 focus:outline-none transition-all"
                            placeholder="you@example.com"
                        />
                    </div>
                </div>
            </div>

            <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-1.5">Subject</label>
                <input
                    type="text"
                    id="subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full px-3 py-2 text-sm border-2 border-gray-200 rounded-lg focus:border-blue-400 focus:outline-none transition-all"
                    placeholder="e.g. Feature request, Bug report..."
                />
            </div>

            <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Message <span className="text-red-500">*</span>
                </label>
                <textarea
                    id="message"
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-3 py-2 text-sm border-2 border-gray-200 rounded-lg focus:border-blue-400 focus:outline-none transition-all resize-none"
                    placeholder="How can we help you?"
                />
            </div>

            {status === "error" && (
                <div className="flex items-center gap-2 text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-3 py-2">
                    <FiAlertCircle className="flex-shrink-0" />
                    Something went wrong. Please email us directly at support@spinpickonline.com
                </div>
            )}

            <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full cursor-pointer bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-2.5 sm:py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all shadow-md hover:shadow-lg active:scale-95 flex items-center justify-center gap-2 text-sm disabled:opacity-70 disabled:cursor-not-allowed"
            >
                <FiSend className="w-4 h-4" />
                {status === "submitting" ? "Sending..." : "Send Message"}
            </button>
        </form>
    );
}
