"use client";

// hooks/useWindowSize.js
import { useState, useEffect } from "react";

export interface WindowSize { width: number | undefined; height: number | undefined; }

const useWindowSize = (): WindowSize => {
	const [windowSize, setWindowSize] = useState<WindowSize>({
		width: undefined,
		height: undefined,
	});

	useEffect(() => {
		const handleResize = () => {
			setWindowSize({
				width: window.innerWidth,
				height: window.innerHeight,
			});
		};

		// Set initial size
		handleResize();

		// Add event listener
		window.addEventListener("resize", handleResize);

		// Cleanup event listener on unmount
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return windowSize;
};

export default useWindowSize;
