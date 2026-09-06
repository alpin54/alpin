/* ------------------------------------------------------------------------------
@name: Default Schema
@description: Default Schema
--------------------------------------------------------------------------------- */

const DefaultSchema = {
	organization: {
		context: "http://schema.org",
		id: "https://alpin-zeta.vercel.app/#organization",
		type: "Organization",
		name: "SFI Group",
		url: "https://alpin-zeta.vercel.app/",
		logo: "https://api.sfigroup.co.id/uploads/logo-sfi.png",
		contactPoint: [
			{
				"@type": "ContactPoint",
				telephone: "+6285811602018",
				contactType: "sales",
				areaServed: "ID",
			},
		],
		sameAs: [
			"https://www.instagram.com/sfigroup",
			"https://www.facebook.com/sfigroup",
			"https://www.tiktok.com/@sfigroup",
		],
	},
	website: {
		context: "http://schema.org",
		id: "https://alpin-zeta.vercel.app/#website",
		type: "WebSite",
		url: "https://alpin-zeta.vercel.app/",
		name: "SFI Group",
	},
	webpage: {
		context: "http://schema.org",
		id: "https://alpin-zeta.vercel.app/#webpage",
		type: "WebPage",
		url: "https://alpin-zeta.vercel.app/",
		name: "SFI Group",
	},
} as const;

export default DefaultSchema;

export type SchemaConfig = typeof DefaultSchema;
