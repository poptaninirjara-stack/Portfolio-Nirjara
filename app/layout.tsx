import type { Metadata } from "next";
import { Fraunces, Work_Sans } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: "variable",
  style: ["normal", "italic"],
  axes: ["opsz", "SOFT"],
});

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Nirjara Poptani — Copywriter & Editor",
  description:
    "A writer who edits, and an editor who writes. Portfolio of Nirjara Poptani, copywriter and editor.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-GB"
      className={`${fraunces.variable} ${workSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-page-bg text-navy">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
