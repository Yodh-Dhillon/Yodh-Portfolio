import type { Metadata } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://yodhdhillon.in"),
  title: {
    default: "Yodh Dhillon | Freelance Web Developer in India",
    template: "%s | Yodh Dhillon",
  },
  description:
    "Freelance web developer based in Punjab, India, building fast, responsive, SEO-friendly websites with React and Next.js for businesses, startups, and personal brands.",
  keywords: [
    "freelance web developer",
    "hire web developer India",
    "React developer",
    "Next.js developer",
    "web developer Punjab",
  ],
  authors: [{ name: "Yodh Dhillon" }],
  creator: "Yodh Dhillon",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://yodhdhillon.in",
    title: "Yodh Dhillon | Freelance Web Developer in India",
    description:
      "Freelance web developer building fast, modern, SEO-optimized websites.",
    siteName: "Yodh Dhillon",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yodh Dhillon | Freelance Web Developer",
    description:
      "Freelance web developer building fast, modern, SEO-optimized websites.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fraunces.variable} ${inter.variable} ${jetbrainsMono.variable}`}
      >
        <Header />
        {children}
         <Footer />
      </body>
    </html>
  );
}