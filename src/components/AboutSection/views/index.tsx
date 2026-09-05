import styles from "../styles/style.module.scss";

export default function AboutSection() {

  return (
    <section className={["section-wrap", styles["about"], "section-block"].join(" ")} id="about">
      <div>
        <p className={"eyebrow"}>01 / A LITTLE ABOUT ME</p>
        <h2>More than pixels.<br />
          <span className={"muted"}>Purpose in every line.</span>
        </h2>
      </div>
      <div className={styles["about-copy"]}>
        <p>I’m Alpin, a frontend developer with 3+ years of experience building web applications for e-commerce, B2B, and corporate brands.</p>
        <p>I bridge design and development with scalable React and Next.js architecture, reusable design systems, and a sharp eye for the details that make a website feel right. I work closely with designers, backend developers, and project managers to bring it all together.</p>
        <div className={styles["stats"]}>
          <div>
            <strong>3<span>+</span>
            </strong>
            <small>Years of experience</small>
          </div>
          <div>
            <strong>20<span>+</span>
            </strong>
            <small>Projects delivered</small>
          </div>
          <div>
            <strong>10<span>+</span>
            </strong>
            <small>Client engagements</small>
          </div>
        </div>
      </div>
    </section>
  );
}
