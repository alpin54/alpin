"use client";
import Button from "@elements/Button/widgets/Default";
import styles from "../styles/style.module.scss";
import useContactForm from "../states";
export default function ContactForm() {
  const { status, contact } = useContactForm();
  return (
    <form data-reveal className={styles["contact-form"]} onSubmit={contact}>
      <div className={styles["form-row"]}>
        <label>Your name<input name="name" placeholder="Jane Smith" autoComplete="name" required maxLength={100} />
        </label>
        <label>Email address<input name="email" type="email" placeholder="jane@company.com" autoComplete="email" required maxLength={254} />
        </label>
      </div>
      <label>What are you working on?<textarea name="message" placeholder="Tell me a little about your project…" rows={5} required maxLength={3000} />
      </label>
      <Button type="submit">Let’s start a conversation <span>↗</span>
      </Button>
      <p className={styles["form-note"]}>Opens your email app with a ready-to-send draft.</p>
      <p role="status" className={styles["form-status"]}>{status}</p>
    </form>
  );
}
