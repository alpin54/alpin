import { profile } from "@configs/profile";
import styles from "../styles/style.module.scss";
import ContactForm from "@components/ContactForm/widgets/Default";
export default function ContactSection() {

  return (
    <section className={["section-wrap", "section-block", styles["contact"]].join(" ")} id="contact">
      <div>
        <p className={"eyebrow"}>04 / LET’S CONNECT</p>
        <h2>Have something<br />in mind?<br />
          <span className={"gradient-text"}>Let’s make it real.</span>
        </h2>
        <p>Have a project, an opportunity, or just want to say hello? I’d love to hear from you.</p>
        <a className={styles["email-link"]} href={profile.emailHref}>{profile.email} ↗</a>
        <a className={styles["phone-link"]} href={profile.phoneHref}>{profile.phone}</a>
        <span className={styles["location"]}>{profile.location}</span>
      </div>
      <ContactForm />
    </section>
  );
}
