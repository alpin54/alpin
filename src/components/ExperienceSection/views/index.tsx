import { experience } from "../models";
import styles from "../styles/style.module.scss";

export default function ExperienceSection() {

  return (
    <section className="section-block" id="experience">
      <div className="container">
        <div className={styles["experience"]}>
          <div>
            <p className={"eyebrow"}>03 / THE JOURNEY</p>
            <h2>Always building.<br />
              <span className={"muted"}>Always growing.</span>
            </h2>
            <p className={styles["experience-intro"]}>A foundation in the fundamentals.<br />A curiosity for what comes next.</p>
          </div>
          <div className={styles["timeline"]}>{experience.map(item => <article key={item.organization}>
            <span className={styles["timeline-date"]}>{item.period}</span>
            <h3>{item.title}{item.current && <> <span>↗</span>
            </>}</h3>
            <h4>{item.organization}</h4>{item.description && <p>{item.description}</p>}</article>)}</div>
        </div>
      </div>
    </section>
  );
}
