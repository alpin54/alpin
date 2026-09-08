import type { Project } from "@components/Project/ProjectItem/models";
import SFIImage from "@assets/image/dummy/sfi-group.jpg";
import SRGImage from "@assets/image/dummy/sele-raya.jpg";
import RZFImage from "@assets/image/dummy/rzf-resto.jpg";
import PTTImage from "@assets/image/dummy/ptt-lubricants.jpg";
import AdenaCoffeeImage from "@assets/image/dummy/adena-coffe.jpg";
import SRBImage from "@assets/image/dummy/srb.jpg";
import PhanindoImage from "@assets/image/dummy/phanindo.jpg";
import AracordImage from "@assets/image/dummy/aracord.jpg";
import AddtreeImage from "@assets/image/dummy/adtree.jpg";

// Real project details; the accompanying artwork is an illustrative concept.
const projects: Project[] = [
	{
		link: "https://sfi-group.id/en",
		name: "SFI Group",
		image: SFIImage,
		category: "E-COMMERCE",
		period: "2025 — 2026",
		theme: "sfi",
		title: "Everyday essentials.\nExtraordinary quality.",
		description:
			"A connected commerce experience with 20+ back-office and storefront modules, payment gateways, and shipping integrations.",
		stack: ["E-commerce", "REST APIs", "Design system"],
	},
	{
		link: "https://seleraya.co.id",
		name: "Sele Raya Group",
		image: SRGImage,
		category: "CORPORATE WEBSITE",
		period: "2026",
		theme: "srg",
		title: "Energy for\na better tomorrow.",
		description:
			"A responsive corporate presence built with reusable components, semantic structure, and a focus on performance and technical SEO.",
		stack: ["JavaScript", "SCSS", "Technical SEO"],
	},
	{
		link: "https://rzf-resto.com",
		name: "RZF Resto",
		image: RZFImage,
		category: "POINT OF SALE",
		period: "2024",
		theme: "rzf",
		title: "Good food.\nGreat operations.",
		description:
			"A unified restaurant POS connecting back-office, front-office, and landing page across more than 20 integrated modules.",
		stack: ["API integration", "POS", "Reusable UI"],
	},
	// {"name": "Stellalunardy", "category": "E-COMMERCE", "period": "2025 \u2014 2026", "theme": "sfi", "title": "A considered shopping experience.", "description": "An e-commerce platform connecting 20+ back-office and storefront modules, with payment and shipping integrations, reusable design-system components, and performance optimization.", "stack": ["E-commerce", "REST APIs", "Design system"]},
	{
		link: "https://pttlubricants.co.id",
		name: "PTT Lubricants",
		image: PTTImage,
		category: "E-COMMERCE",
		period: "2025",
		theme: "sfi",
		title: "Commerce built to perform.",
		description:
			"Integrated 20+ back-office and front-office modules, third-party payments, and shipping APIs into a consistent, SEO-friendly commerce experience.",
		stack: ["E-commerce", "API integration", "Technical SEO"],
	},
	{
		link: "https://srb.co.id",
		name: "Sele Raya Belida",
		image: SRBImage,
		category: "CORPORATE WEBSITE",
		period: "2026",
		theme: "srg",
		title: "A clear corporate presence.",
		description:
			"A corporate website built with HTML, JavaScript, SCSS, PUG, and Gulp, using reusable components and optimized semantic page structure.",
		stack: ["JavaScript", "SCSS", "PUG"],
	},
	{
		link: "https://phanindo.com",
		name: "Phanindo",
		image: PhanindoImage,
		category: "CORPORATE WEBSITE",
		period: "2025",
		theme: "srg",
		title: "Designed for a lasting impression.",
		description:
			"A responsive corporate website with a reusable design system, SEO-friendly structure, and performance-focused frontend implementation.",
		stack: ["JavaScript", "SCSS", "Technical SEO"],
	},
	{
		link: "https://aracord.id",
		name: "Aracord",
		image: AracordImage,
		category: "CORPORATE WEBSITE",
		period: "2025",
		theme: "srg",
		title: "Connected from front to back.",
		description:
			"A corporate website connecting back-office and front-office across five modules with PHP and CodeIgniter, supported by reusable components and technical SEO.",
		stack: ["PHP", "CodeIgniter", "API integration"],
	},
	{
		link: "https://adenacoffee.com",
		name: "Adena Coffee",
		image: AdenaCoffeeImage,
		category: "CORPORATE WEBSITE",
		period: "2024",
		theme: "rzf",
		title: "A fresh digital presence.",
		description:
			"A freelance corporate website built with HTML, JavaScript, SCSS, PUG, and Gulp, with consistent reusable components and an emphasis on performance.",
		stack: ["JavaScript", "SCSS", "Freelance"],
	},
	{
		link: "https://addtree.co.id",
		name: "Addtree",
		image: AddtreeImage,
		category: "CORPORATE WEBSITE",
		period: "2022",
		theme: "srg",
		title: "Ideas brought to the web.",
		description:
			"A freelance corporate website built with HTML, JavaScript, SCSS, PUG, and Gulp, applying reusable design-system components and SEO best practices.",
		stack: ["JavaScript", "PUG", "Freelance"],
	},
];
export default projects;

export const selectedProjects = projects.filter((project) =>
	["SFI Group", "Sele Raya Group", "RZF Resto"].includes(project.name),
);
