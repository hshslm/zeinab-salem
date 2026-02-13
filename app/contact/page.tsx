import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import BackButton from "@/components/BackButton";

export const metadata: Metadata = {
  title: "Contact — Zeinab Salem",
  description:
    "For studio appointments, custom commissions, or vessel availability.",
};

export default function ContactPage(): React.ReactElement {
  return (
    <>
      <Header />

      <main className="min-h-screen pt-28 px-6 flex flex-col">
        <div className="max-w-lg mx-auto flex-1 w-full">
          <div className="mb-10">
            <BackButton />
          </div>

          {/* Heading */}
          <div className="mb-12 animate-fade-in-up">
            <h1 className="font-display text-4xl md:text-5xl text-foreground">
              Inquire
            </h1>
          </div>

          {/* Form */}
          <div className="animate-fade-in-up delay-300">
            <ContactForm />
          </div>
        </div>

        <Footer />
      </main>
    </>
  );
}
