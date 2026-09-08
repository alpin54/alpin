import styles from "../styles/style.module.scss";
import { skills } from "../models";
export default function ToolboxSection() {

  return (
    <section>
      <div className="container">
        <div className={styles["toolbox"]} data-reveal>
          <p className={"eyebrow"}>MY EVERYDAY TOOLKIT</p>
          <div>{skills.map(skill => <span key={skill}>{skill}</span>)}</div>
        </div>
      </div>
    </section>
  );
}
