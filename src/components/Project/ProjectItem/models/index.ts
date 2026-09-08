export interface Project {
	link: string;
	image: { src: string };
	name: string;
	category: string;
	period: string;
	theme: "sfi" | "srg" | "rzf";
	title: string;
	description: string;
	stack: string[];
}
export interface ProjectItemProps {
	project: Project;
	index: number;
}
