// -- configs
import DefaultSEO from "@configs/SEO";

// -- models
import type { Metadata } from "next";
import type { DynamicMetadataOptions } from "./type";

// -- utils
import stringKeywords from "@utils/stringKeywords";

const metaTagDynamic = async (
	d: DynamicMetadataOptions = {},
): Promise<Metadata> => {
	const dataDefault = d.defaults;
	const metadataBase = new URL(
		process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000",
	);

	const title = dataDefault?.title || DefaultSEO.title;
	const description = dataDefault?.description || DefaultSEO.description;
	const keywords = dataDefault?.keyword || DefaultSEO.keywords;
	const siteURL = dataDefault?.site_url || DefaultSEO.siteURL;
	const siteName = dataDefault?.site_name || DefaultSEO.siteName;
	const twitterUsername = dataDefault?.twitter || DefaultSEO.twitter.username;
	const openGraphImage = dataDefault?.og_image || DefaultSEO.openGraph.image;
	const twitterImage = dataDefault?.twitter_image || DefaultSEO.twitter.image;
	const robots = dataDefault?.robots || "index, follow";
	const author = dataDefault?.author || DefaultSEO.author;
	const themeColor = dataDefault?.theme_color || "#ffffff";

	const openGraph = DefaultSEO.openGraph;
	const twitter = DefaultSEO.twitter;

	// Build page metadata
	const pageTitle = d.page ? `${d.page} | ${title}` : title;
	const pageDescription = d.page ? `${d.page} | ${description}` : description;
	const pageKeywords = d.page
		? `${stringKeywords(d.page)}, ${keywords}`
		: keywords;

	const pageUrl = new URL(d.link || "/", siteURL).toString();
	const canonicalUrl = new URL(d.link || "/", metadataBase).toString();

	return {
		title: pageTitle,
		description: pageDescription,
		keywords: pageKeywords.toLowerCase(),
		authors: [{ name: author }],
		robots: robots,
		metadataBase,
		alternates: {
			canonical: canonicalUrl,
		},
		other: {
			"theme-color": themeColor,
			refresh: dataDefault?.refresh || 1200,
		},
		...(openGraph.enable && {
			openGraph: {
				locale: openGraph.locale,
				type: openGraph.type,
				siteName: siteName,
				title: pageTitle,
				description: pageDescription,
				url: pageUrl,
				images: [
					{
						url: new URL(d.ogImage || openGraphImage, metadataBase).toString(),
						alt: d.title || title,
						width: 1200,
						height: 630,
					},
				],
			},
		}),
		...(twitter.enable && {
			twitter: {
				card: twitter.card,
				site: twitterUsername,
				siteId: twitterUsername,
				creator: twitterUsername,
				title: pageTitle,
				description: pageDescription,
				images: [
					new URL(d.twitterImage || twitterImage, metadataBase).toString(),
				],
			},
		}),
	};
};

export default metaTagDynamic;
