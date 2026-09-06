import type { Viewport } from "next";

// -- config
import DefaultSEO from "@configs/SEO";

// -- metaTagViewport
const metaTagViewport = (): Viewport => {
	return {
		...DefaultSEO.viewport,
		themeColor: DefaultSEO.themeColor,
	};
};

export default metaTagViewport;
