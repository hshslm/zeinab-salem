"use client";

import { useState, useEffect, useRef } from "react";

const FORMSPREE_URL = "https://formspree.io/f/FORM_ID_PLACEHOLDER";

interface InquiryFormProps {
  productName?: string;
  productId?: string;
  open: boolean;
  onClose: () => void;
}

export default function InquiryForm({
  productName,
  productId,
  open,
  onClose,
}: InquiryFormProps): React.ReactElement | null {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (open) {
      dialog.showModal();
      document.body.style.overflow = "hidden";
    } else {
      dialog.close();
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    function handleClose(): void {
      onClose();
      setStatus("idle");
    }

    dialog.addEventListener("close", handleClose);
    return () => dialog.removeEventListener("close", handleClose);
  }, [onClose]);

  function handleBackdropClick(e: React.MouseEvent<HTMLDialogElement>): void {
    if (e.target === dialogRef.current) {
      onClose();
    }
  }

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

  return (
    <dialog
      ref={dialogRef}
      onClick={handleBackdropClick}
      className="fixed inset-0 z-50 m-auto w-full max-w-lg bg-transparent backdrop:bg-black/70 backdrop:backdrop-blur-sm open:animate-fade-in-up"
    >
      <div className="bg-card border border-border rounded-sm p-8 md:p-10">
        {/* Close button */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-display text-2xl text-foreground">
            {status === "success" ? "Thank You" : "Inquire"}
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="text-subtle hover:text-foreground transition-colors p-1"
            aria-label="Close"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {status === "success" ? (
          <div className="py-8 text-center">
            <p className="text-subtle leading-relaxed">
              Your inquiry has been received.
              <br />
              We&apos;ll be in touch shortly.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="mt-8 inline-block border border-foreground/30 px-8 py-3 text-sm tracking-widest uppercase text-foreground hover:bg-foreground hover:text-background transition-all duration-300"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Hidden product fields */}
            {productId && (
              <input type="hidden" name="product_id" value={productId} />
            )}
            {productName && (
              <input type="hidden" name="product" value={productName} />
            )}

            {productName && (
              <p className="text-sm text-subtle">
                Inquiring about{" "}
                <span className="text-foreground">{productName}</span>
              </p>
            )}

            <div>
              <label htmlFor="inquiry-name" className="block text-sm text-subtle mb-2">
                Name
              </label>
              <input
                id="inquiry-name"
                name="name"
                type="text"
                required
                autoComplete="name"
                className="w-full bg-transparent border-b border-border py-2 text-foreground placeholder:text-subtle/50 focus:border-accent focus:outline-none transition-colors"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="inquiry-email" className="block text-sm text-subtle mb-2">
                Email
              </label>
              <input
                id="inquiry-email"
                name="email"
                type="email"
                required
                autoComplete="email"
                className="w-full bg-transparent border-b border-border py-2 text-foreground placeholder:text-subtle/50 focus:border-accent focus:outline-none transition-colors"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label htmlFor="inquiry-message" className="block text-sm text-subtle mb-2">
                Message
              </label>
              <textarea
                id="inquiry-message"
                name="message"
                rows={4}
                className="w-full bg-transparent border-b border-border py-2 text-foreground placeholder:text-subtle/50 focus:border-accent focus:outline-none transition-colors resize-none"
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
              className="w-full border border-foreground/30 px-8 py-3 text-sm tracking-widest uppercase text-foreground hover:bg-foreground hover:text-background transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "loading" ? "Sending..." : "Send Inquiry"}
            </button>
          </form>
        )}
      </div>
    </dialog>
  );
}
