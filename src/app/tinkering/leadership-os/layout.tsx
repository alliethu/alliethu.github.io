import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My leadership OS",
  description:
    "A private operating system built by Allie Thu using living context, custom skills, and automations for leadership, product design, and technical sensemaking.",
};

export default function LeadershipOSLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
