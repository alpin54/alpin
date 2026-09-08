import Link from "next/link";
import styles from "../styles/style.module.scss";
import ProjectItem from "@components/Project/ProjectItem/widgets/Default";
import { selectedProjects } from "@components/Project/dummyData/projectData";
export default function ProjectSection() {

  return (
    <section className="section-block" id="work">
      <div className="container">
        <div className={styles["section-heading"]} data-reveal>
          <div>
            <p className={"eyebrow"}>02 / SELECTED WORK</p>
            <h2>A few things I’ve built<span className={"purple"}>.</span>
            </h2>
          </div>
          <p>Real projects. Thoughtful solutions.</p>
        </div>
        <div className={styles["project-list"]}>{selectedProjects.map((project, index) => <ProjectItem key={project.name} project={project} index={index} />)}</div>
        <Link className={styles["all-projects"]} href="/projects">View all projects <span aria-hidden="true">↗</span></Link>
      </div>
    </section>
  );
}
