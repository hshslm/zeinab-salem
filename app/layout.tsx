import type { Metadata } from "next";
import { Newsreader, Cormorant_Garamond, Noto_Sans } from "next/font/google";
import "./globals.css";

const newsreader = Newsreader({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const notoSans = Noto_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Zeinab Salem — Ceramic Artist",
  description:
    "Exploring the fragile beauty of dark raku-fired vessels. Objects born from fire, smoke, and patience.",
  openGraph: {
    title: "Zeinab Salem — Ceramic Artist",
    description:
      "Exploring the fragile beauty of dark raku-fired vessels. Objects born from fire, smoke, and patience.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): React.ReactElement {
  return (
    <html
      lang="en"
      className={`${newsreader.variable} ${cormorant.variable} ${notoSans.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
