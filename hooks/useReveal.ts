"use client";

import { useEffect, useRef, useState } from "react";

export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let timeoutId: number | undefined;

    const obs = new IntersectionObserver(
      ([e]) => {
        if (!e?.isIntersecting) return;
        obs.disconnect();
        // Defer: some browsers fire this synchronously from `observe()`,
        // which can overlap React commit / Strict Mode remounts.
        timeoutId = window.setTimeout(() => {
          setVisible(true);
        }, 0);
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    obs.observe(el);
    return () => {
      obs.disconnect();
      if (timeoutId !== undefined) window.clearTimeout(timeoutId);
    };
  }, []);

  return { ref, visible };
}
