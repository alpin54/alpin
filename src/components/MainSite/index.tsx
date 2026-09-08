"use client";

// -- libraries
import { useEffect, useRef } from "react";

// -- hooks
import useBrowserCheck from "@hooks/useBrowserCheck";
import useScrollable from "@hooks/useScrollable";
import useScrollAnimations from "@hooks/useScrollAnimations";

const RESIZE_DEBOUNCE = 200;

const MainSite = (props: { children: React.ReactNode }) => {
	const { children } = props;
	const mainRef = useRef<HTMLDivElement>(null);
	useScrollAnimations(mainRef);
	const rtimeRef = useRef<number>(0);
	const timeoutRef = useRef<boolean>(false);
	const lastWindowWidthRef = useRef<number>(
		typeof window !== "undefined" ? window.innerWidth : 0,
	);
	const resizeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
	const { enableScroll } = useScrollable();

	// Check browser compatibility
	useBrowserCheck();

	useEffect(() => {
		// Main effect, runs on mount and after resize ends
		const handleEffect = () => {
			document.querySelectorAll(".main-site").forEach((el) => {
				el.classList.remove("main-site--hide");
			});
			enableScroll();
		};

		// run effect when mount
		handleEffect();
		document.body.classList.remove("hold-transition");

		// Handle resize end
		const handleResizeEnd = () => {
			if (Date.now() - rtimeRef.current < RESIZE_DEBOUNCE) {
				resizeTimerRef.current = setTimeout(handleResizeEnd, RESIZE_DEBOUNCE);
			} else {
				timeoutRef.current = false;
				document.body.classList.remove("hold-transition");
				lastWindowWidthRef.current = window.innerWidth;
				handleEffect();
			}
		};

		// Handle resize
		const onResize = () => {
			rtimeRef.current = Date.now();
			if (!timeoutRef.current) {
				if (lastWindowWidthRef.current !== window.innerWidth) {
					timeoutRef.current = true;
					document.body.classList.add("hold-transition");
					resizeTimerRef.current = setTimeout(handleResizeEnd, RESIZE_DEBOUNCE);
				}
			}
		};

		window.addEventListener("resize", onResize);

		return () => {
			window.removeEventListener("resize", onResize);
			if (resizeTimerRef.current) clearTimeout(resizeTimerRef.current);
		};
	}, [enableScroll]);

	return <div ref={mainRef} className="main-site main-site--hide">{children}</div>;
};

export default MainSite;
