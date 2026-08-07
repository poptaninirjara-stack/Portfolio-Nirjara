"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    instgrm?: {
      Embeds: { process: () => void };
    };
  }
}

export default function InstagramEmbed({ url }: { url: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const existing = document.getElementById("instagram-embed-script");

    const process = () => window.instgrm?.Embeds.process();

    if (existing) {
      process();
    } else {
      const script = document.createElement("script");
      script.id = "instagram-embed-script";
      script.src = "https://www.instagram.com/embed.js";
      script.async = true;
      script.onload = process;
      document.body.appendChild(script);
    }
  }, [url]);

  return (
    <div ref={ref} className="flex justify-center">
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={url}
        data-instgrm-version="14"
        style={{
          background: "#FFF",
          border: 0,
          borderRadius: "12px",
          margin: "0 auto",
          maxWidth: "540px",
          minWidth: "300px",
          width: "100%",
        }}
      />
    </div>
  );
}
