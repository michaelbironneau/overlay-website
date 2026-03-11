"use client";

import { useEffect, useState } from "react";

const CALENDLY_URL = "https://calendly.com/michael-bironneau/overlay-demo";

type CalendlyEmbedProps = {
  className?: string;
  minWidth?: number;
  height?: number;
};

const SCRIPT_ID = "calendly-widget-script";
const STYLE_ID = "calendly-widget-style";

export function CalendlyEmbed({
  className,
  minWidth = 320,
  height = 700,
}: CalendlyEmbedProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!document.getElementById(STYLE_ID)) {
      const link = document.createElement("link");
      link.id = STYLE_ID;
      link.rel = "stylesheet";
      link.href = "https://assets.calendly.com/assets/external/widget.css";
      document.head.appendChild(link);
    }

    if (!document.getElementById(SCRIPT_ID)) {
      const script = document.createElement("script");
      script.id = SCRIPT_ID;
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div
      className={["calendly-inline-widget", className].filter(Boolean).join(" ")}
      data-url={CALENDLY_URL}
      style={{ minWidth: `${minWidth}px`, height: `${height}px` }}
    />
  );
}
