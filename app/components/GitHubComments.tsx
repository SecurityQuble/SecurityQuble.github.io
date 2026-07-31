"use client";

import { useEffect, useRef } from "react";

export default function GitHubComments() {
  const commentsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = commentsRef.current;
    if (!container) return;

    container.replaceChildren();

    const script = document.createElement("script");
    script.src = "https://utteranc.es/client.js";
    script.async = true;
    script.crossOrigin = "anonymous";
    script.setAttribute("repo", "SecurityQuble/SecurityQuble.github.io");
    script.setAttribute("issue-term", "pathname");
    script.setAttribute("theme", "github-light");
    container.appendChild(script);

    return () => container.replaceChildren();
  }, []);

  return <div className="github-comments" ref={commentsRef} />;
}
