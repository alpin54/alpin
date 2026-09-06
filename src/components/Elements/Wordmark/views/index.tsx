import Link from "next/link";
import styles from "../styles/style.module.scss";
import type { MouseEventHandler } from "react";
export default function Wordmark({
  onClick,
}: {
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}) {
  return (
    <Link
      className={styles["wordmark"]}
      href="/"
      onClick={onClick}
      aria-label="Alpin home"
    >
      alpin<span>.</span>
    </Link>
  );
}
