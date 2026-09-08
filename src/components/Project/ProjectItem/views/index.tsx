import styles from "../styles/style.module.scss";
import type { ProjectItemProps } from "../models";
import Image from "next/image";
export default function ProjectItem({ project, index }: ProjectItemProps) {
	return (
		<article className={styles["project"]} data-reveal data-reveal-order={index % 3}>
			<a
				className={styles["project-link"]}
				href={project.link}
				target="_blank"
				rel="noopener noreferrer"
			>
				{project.name}
			</a>
			<div
				className={styles["project-preview"]}
				aria-label={`${project.name} illustrative concept preview`}
			>
				<Image
					className={styles["project-preview-img"]}
					src={project.image.src}
					alt={`${project.name} illustrative concept preview`}
					width={1200}
					height={720}
				/>
			</div>
			<div className={styles["project-meta"]}>
				<span>
					{String(index + 1).padStart(2, "0")} / {project.category}
				</span>
				<span>{project.period}</span>
			</div>
			<h3>{project.name}</h3>
			<p>{project.description}</p>
			<div className={styles["tags"]}>
				{project.stack.map((tag) => (
					<span key={tag}>{tag}</span>
				))}
			</div>
		</article>
	);
}
