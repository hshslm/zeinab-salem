"use client";

import { useState } from "react";

const FORMSPREE_URL = "https://formspree.io/f/meelavzl";

export default function ContactForm(): React.ReactElement {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>): Promise<void> {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.currentTarget);

    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="py-16 text-center">
        <p className="font-display text-2xl text-foreground">Thank you</p>
        <p className="mt-2 text-sm text-subtle">
          We&apos;ll be in touch shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="relative">
        <label
          htmlFor="contact-name"
          className="block text-xs uppercase tracking-widest text-subtle/60 mb-1"
        >
          Full Name
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          required
          autoComplete="name"
          className="w-full bg-transparent border-b border-border/40 py-3 text-foreground placeholder:text-subtle/30 focus:border-accent focus:outline-none transition-colors"
          placeholder="Your name"
        />
      </div>

      <div className="relative">
        <label
          htmlFor="contact-email"
          className="block text-xs uppercase tracking-widest text-subtle/60 mb-1"
        >
          Email Address
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="w-full bg-transparent border-b border-border/40 py-3 text-foreground placeholder:text-subtle/30 focus:border-accent focus:outline-none transition-colors"
          placeholder="your@email.com"
        />
      </div>

      <div className="relative">
        <label
          htmlFor="contact-message"
          className="block text-xs uppercase tracking-widest text-subtle/60 mb-1"
        >
          Your Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          className="w-full bg-transparent border-b border-border/40 py-3 text-foreground placeholder:text-subtle/30 focus:border-accent focus:outline-none transition-colors resize-none"
          placeholder="Your message..."
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-400">
          Something went wrong. Please try again.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full border border-foreground/30 px-8 py-3.5 text-sm tracking-widest uppercase text-foreground hover:bg-foreground hover:text-background transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "loading" ? "Sending..." : "Send Message"}
      </button>

      <p className="text-center text-sm text-subtle/60">
        Or call{" "}
        <a href="tel:+201223190242" className="text-foreground hover:text-accent transition-colors">
          +20 122 319 0242
        </a>
      </p>
    </form>
  );
}
