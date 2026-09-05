import styles from "../styles/style.module.scss";
import type { ProjectItemProps } from "../models";
export default function ProjectItem({ project, index }: ProjectItemProps) {

  return (
    <article className={styles["project"]}>
      <div className={[styles["project-preview"], project.theme === "sfi" ? "" : styles[project.theme]].join(" ")} aria-label={`${project.name} illustrative concept preview`}>
        <div className={styles["preview-bar"]}>
          <b>{project.name}</b>
          <span>● ● ●</span>
        </div>
        <div className={styles["preview-content"]}>
          <small>{project.category}</small>
          <h3>{project.title}</h3>
          <span className={styles["preview-pill"]}>Discover more ↗</span>
        </div>
        <span className={styles["preview-shape"]} />
        <span className={styles["concept-label"]}>CONCEPT PREVIEW</span>
      </div>
      <div className={styles["project-meta"]}>
        <span>0{index + 1} / {project.category}</span>
        <span>{project.period}</span>
      </div>
      <h3>{project.name}</h3>
      <p>{project.description}</p>
      <div className={styles["tags"]}>{project.stack.map(tag => <span key={tag}>{tag}</span>)}</div>
    </article>
  );
}
