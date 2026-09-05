import styles from "../styles/style.module.scss";
import ProjectItem from "@components/Project/ProjectItem/widgets/Default";
import projects from "@components/Project/dummyData/projectData";
export default function ProjectSection() {

  return (
    <section className={["section-wrap", "section-block"].join(" ")} id="work">
      <div className={styles["section-heading"]}>
        <div>
          <p className={"eyebrow"}>02 / SELECTED WORK</p>
          <h2>A few things I’ve built<span className={"purple"}>.</span>
          </h2>
        </div>
        <p>Real projects. Thoughtful solutions.</p>
      </div>
      <div className={styles["project-grid"]}>{projects.map((project, index) => <ProjectItem key={project.name} project={project} index={index} />)}</div>
    </section>
  );
}
