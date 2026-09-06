import { profile } from "@configs/profile";
import styles from "../styles/style.module.scss";
import Wordmark from "@elements/Wordmark/widgets/Default";
export default function Footer() {

  return (
    <footer className={styles["site-footer"]}>
      <div className="container">
        <div className={styles["footer-content"]}>
          <Wordmark />
          <p>© {new Date().getFullYear()} Alpin. Built with care.</p>
          <div>
            <a href={profile.linkedIn} target="_blank" rel="noreferrer">LinkedIn ↗</a>
            <a href={profile.emailHref}>Email ↗</a>
            <a href={profile.whatsApp} target="_blank" rel="noreferrer">WhatsApp ↗</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
