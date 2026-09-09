export interface SkillGroup {
	label: string;
	items: readonly string[];
}

export const skills: readonly SkillGroup[] = [
	{
		label: "Languages",
		items: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3/SCSS", "PHP"],
	},
	{
		label: "Frameworks & Libraries",
		items: ["React.js", "Next.js", "jQuery", "Bootstrap", "Ant Design"],
	},
	{
		label: "Back-end & Database",
		items: ["PHP", "CodeIgniter", "MySQL"],
	},
	{
		label: "Tools & Platforms",
		items: ["Git", "npm", "Gulp", "Figma"],
	},
	{
		label: "Web Performance & SEO",
		items: [
			"Code Splitting",
			"Lazy Loading",
			"Core Web Vitals",
			"Technical SEO",
			"Responsive Design",
			"Cross-Browser Compatibility",
			"REST API Integration",
		],
	},
];
