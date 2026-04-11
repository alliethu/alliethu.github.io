import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import { Playfair_Display, DM_Sans } from "next/font/google";
import ThemeProvider from "@/components/ThemeProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import AmbientGlow from "@/components/AmbientGlow";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const dmSerif = Playfair_Display({
  variable: "--font-dm-serif",
  weight: ["400"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Allie Thu — Design Leader & Systems Thinker",
    template: "%s | Allie Thu",
  },
  description:
    "Design leader who builds systems, frameworks, and cross-functional partnerships that create lasting change.",
  metadataBase: new URL("https://alliethu.github.io"),
  openGraph: {
    title: "Allie Thu — Design Leader & Systems Thinker",
    description:
      "Design leader who builds systems, frameworks, and cross-functional partnerships that create lasting change.",
    url: "https://alliethu.github.io",
    siteName: "Allie Thu",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Allie Thu — Design Leader & Systems Thinker",
    description:
      "Design leader who builds systems, frameworks, and cross-functional partnerships that create lasting change.",
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
        className={`${dmSans.variable} ${geistMono.variable} ${dmSerif.variable} flex min-h-screen flex-col antialiased`}
      >
        <ThemeProvider>
          <AmbientGlow />
          <Header />
          <main className="flex-1">
            <PageTransition>{children}</PageTransition>
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
