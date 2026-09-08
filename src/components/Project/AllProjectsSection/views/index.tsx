import Link from "next/link";
import ProjectItem from "@components/Project/ProjectItem/widgets/Default";
import projects from "@components/Project/dummyData/projectData";
import styles from "../styles/style.module.scss";

export default function AllProjectsSection() {
  return (
    <section className="section-block" aria-labelledby="projects-title">
      <div className="container">
        <div className={styles.content}>
          <Link className={styles.back} href="/#work">← Back to selected work</Link>
          <div className={styles.heading} data-reveal>
            <div>
              <p className="eyebrow">THE PROJECT COLLECTION</p>
              <h1 id="projects-title">All projects<span className="purple">.</span></h1>
              <p className={styles.description}>E-commerce, corporate websites, and connected POS experiences — a collection of the frontend work I’ve delivered.</p>
            </div>
            <span className={styles.count}>{projects.length} projects / 2022 — 2026</span>
          </div>
          <div className={styles.list}>
            {projects.map((project, index) => (
              <ProjectItem key={project.name} project={project} index={index} />
            ))}
          </div>
          <div className={styles.contact}>
            <p>Have a project in mind?</p>
            <Link href="/#contact">Let’s build something together ↗</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
