import styles from "../styles/style.module.scss";
import { skills } from "../models";
export default function ToolboxSection() {

  return (
    <section className={["section-wrap", styles["toolbox"]].join(" ")}>
      <p className={"eyebrow"}>MY EVERYDAY TOOLKIT</p>
      <div>{skills.map(skill => <span key={skill}>{skill}</span>)}</div>
    </section>
  );
}
