import Timeline from "@components/Timeline/widgets/Default";
import { experience } from "../models";
import styles from "../styles/style.module.scss";

export default function ExperienceSection() {

  return (
    <section className="section-block" id="experience">
      <div className="container">
        <div className={styles["experience"]}>
          <div data-reveal>
            <p className={"eyebrow"}>03 / EXPERIENCE</p>
            <h2>Always building.<br />
              <span className={"muted"}>Always growing.</span>
            </h2>
            <p className={styles["experience-intro"]}>Building web experiences with cross-functional teams.</p>
          </div>
          <Timeline items={experience} />
        </div>
      </div>
    </section>
  );
}
