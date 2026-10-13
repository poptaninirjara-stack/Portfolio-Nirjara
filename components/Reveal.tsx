"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Gentle fade-in on scroll. Reduced-motion users see content immediately:
 * globals.css forces [data-reveal] to full opacity under that media query.
 */
export default function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      data-reveal
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
