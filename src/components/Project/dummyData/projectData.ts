import type { Project } from "@components/Project/ProjectItem/models";
// Real project details; the accompanying artwork is an illustrative concept.
const projects: Project[] = [
  { name: "SFI Group", category: "E-COMMERCE", period: "2025 — 2026", theme: "sfi", title: "Everyday essentials.\nExtraordinary quality.", description: "A connected commerce experience with 20+ back-office and storefront modules, payment gateways, and shipping integrations.", stack: ["E-commerce", "REST APIs", "Design system"] },
  { name: "Sele Raya Group", category: "CORPORATE WEBSITE", period: "2026", theme: "srg", title: "Energy for\na better tomorrow.", description: "A responsive corporate presence built with reusable components, semantic structure, and a focus on performance and technical SEO.", stack: ["JavaScript", "SCSS", "Technical SEO"] },
  { name: "RZF Resto", category: "POINT OF SALE", period: "2024", theme: "rzf", title: "Good food.\nGreat operations.", description: "A unified restaurant POS connecting back-office, front-office, and landing page across more than 20 integrated modules.", stack: ["API integration", "POS", "Reusable UI"] },
];
export default projects;
