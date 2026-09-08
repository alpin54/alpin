"use client";

import { useEffect, type RefObject } from "react";
import { scrollMotion } from "@configs/motion";

/** Opt in with data-reveal; content stays visible if animation loading fails. */
export default function useScrollAnimations(scope: RefObject<HTMLElement>) {
  useEffect(() => {
    const root = scope.current;
    if (!root) return;

    let disposed = false;
    let cleanup: (() => void) | undefined;

    const initialize = async () => {
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);
      if (disposed) return;

      gsap.registerPlugin(ScrollTrigger);
      const media = gsap.matchMedia();
      cleanup = () => media.revert();

      media.add("(prefers-reduced-motion: no-preference)", () => {
        const reveals = new Map<HTMLElement, gsap.core.Tween>();
        root.querySelectorAll<HTMLElement>("[data-reveal]").forEach(element => {
          // Preserve transforms used by responsive artwork styles.
          const fadeOnly = element.dataset.reveal === "fade";
          const staggerIndex = Number(element.dataset.revealOrder || 0);
          const delay = Number.isFinite(staggerIndex)
            ? Math.min(Math.max(staggerIndex, 0), 3) * scrollMotion.stagger
            : 0;
          const tween = gsap.fromTo(
            element,
            { opacity: 0, ...(fadeOnly ? {} : { y: scrollMotion.distance }) },
            {
              opacity: 1,
              ...(fadeOnly ? {} : { y: 0 }),
              duration: scrollMotion.duration,
              ease: scrollMotion.ease,
              delay,
              clearProps: fadeOnly ? "opacity" : "opacity,transform",
              scrollTrigger: {
                trigger: element,
                start: scrollMotion.start,
                once: true,
              },
            },
          );
          reveals.set(element, tween);
        });

        // Keyboard navigation must never land on an invisible link or field.
        const revealFocused = (event: FocusEvent) => {
          if (!(event.target instanceof Element)) return;
          const element = event.target.closest<HTMLElement>("[data-reveal]");
          if (!element) return;
          const tween = reveals.get(element);
          tween?.progress(1);
          tween?.scrollTrigger?.kill();
        };
        root.addEventListener("focusin", revealFocused);

        // Refresh positions after local web fonts finish loading.
        let active = true;
        void document.fonts.ready.then(() => {
          if (active && !disposed) ScrollTrigger.refresh();
        });
        return () => {
          active = false;
          root.removeEventListener("focusin", revealFocused);
        };
      }, root);
    };

    void initialize().catch(() => {
      cleanup?.();
    });
    return () => {
      disposed = true;
      cleanup?.();
    };
  }, [scope]);
}
