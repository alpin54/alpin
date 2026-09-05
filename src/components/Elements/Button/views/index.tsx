import type { ButtonProps } from "../models";
import styles from "../styles/style.module.scss";
export default function Button(props: ButtonProps) {
  const className = ["action-button", styles.button, styles.primary, props.className].filter(Boolean).join(" ");
  if (typeof props.href === "string") {
    return <a {...props} className={className} />;
  }
  return <button {...props} type={props.type ?? "button"} className={className} />;
}
