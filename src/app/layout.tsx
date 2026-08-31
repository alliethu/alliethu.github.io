import type { Metadata } from "next";
import Script from "next/script";
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
    default: "Allie Thu | Design leader and builder",
    template: "%s | Allie Thu",
  },
  description:
    "Design leader and builder at GitHub, leading Core UX Design across design systems and accessibility.",
  metadataBase: new URL("https://alliethu.com"),
  openGraph: {
    title: "Allie Thu | Design leader and builder",
    description:
      "Design leader and builder at GitHub, leading Core UX Design across design systems and accessibility.",
    url: "https://alliethu.com",
    siteName: "Allie Thu",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Allie Thu | Design leader and builder",
    description:
      "Design leader and builder at GitHub, leading Core UX Design across design systems and accessibility.",
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
        <Script
          data-goatcounter="https://alliethu.goatcounter.com/count"
          src="//gc.zgo.at/count.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
