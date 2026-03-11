"use client";

import { useEffect, useId, useState } from "react";

type MermaidDiagramProps = {
  chart: string;
  className?: string;
};

export function MermaidDiagram({ chart, className }: MermaidDiagramProps) {
  const id = useId().replace(/:/g, "");
  const [svg, setSvg] = useState("");

  useEffect(() => {
    let cancelled = false;

    async function renderDiagram() {
      const mermaid = (await import("mermaid")).default;

      mermaid.initialize({
        startOnLoad: false,
        theme: "base",
        securityLevel: "loose",
        flowchart: {
          useMaxWidth: true,
          htmlLabels: true,
          curve: "linear",
        },
        themeVariables: {
          primaryColor: "#FAF5FF",
          primaryTextColor: "#0F0520",
          primaryBorderColor: "#D8B4FE",
          lineColor: "#7C3AED",
          secondaryColor: "#FFFFFF",
          secondaryTextColor: "#0F0520",
          secondaryBorderColor: "#E9D5FF",
          tertiaryColor: "#F3F1FF",
          tertiaryTextColor: "#0F0520",
          tertiaryBorderColor: "#C4B5FD",
          mainBkg: "#FAF5FF",
          nodeBorder: "#D8B4FE",
          clusterBkg: "#FFFFFF",
          clusterBorder: "#E9D5FF",
          fontFamily: "var(--font-sans)",
        },
      });

      const { svg: renderedSvg } = await mermaid.render(`mermaid-${id}`, chart);

      if (!cancelled) {
        setSvg(renderedSvg);
      }
    }

    renderDiagram().catch(() => {
      if (!cancelled) {
        setSvg("");
      }
    });

    return () => {
      cancelled = true;
    };
  }, [chart, id]);

  return (
    <div
      className={className}
      dangerouslySetInnerHTML={svg ? { __html: svg } : undefined}
    />
  );
}
