"use client";

import { useEffect, useRef } from "react";

export default function GitHubComments() {
  const commentsRef = useRef<HTMLDivElement>(null);
  const isLocalPreview = process.env.NODE_ENV === "development";

  useEffect(() => {
    if (isLocalPreview) return;

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
  }, [isLocalPreview]);

  return (
    <div className="github-comments" ref={commentsRef}>
      {isLocalPreview ? (
        <p className="comments-preview-note">댓글은 공개 사이트에서 정상적으로 표시됩니다.</p>
      ) : null}
    </div>
  );
}
