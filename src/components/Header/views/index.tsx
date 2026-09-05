"use client";
import styles from "../styles/style.module.scss";
import Wordmark from "@elements/Wordmark/widgets/Default";
import useHeaderMenu from "../states";
import Link from "next/link";
export default function Header() {
	const { open, setOpen } = useHeaderMenu();
	return (
		<header className={styles["site-header"]}>
			<Wordmark onClick={() => setOpen(false)} />
			<button
				className={styles["menu-toggle"]}
				aria-expanded={open}
				aria-controls="navigation"
				onClick={() => setOpen(!open)}
			>
				{open ? "Close ✕" : "Menu ☰"}
			</button>
			<nav
				id="navigation"
				className={[styles.navigation, open ? styles["is-open"] : ""].join(" ")}
				aria-label="Main navigation"
				onKeyDown={(event) => {
					if (event.key === "Escape") setOpen(false);
				}}
			>
				<Link href="/#about" onClick={() => setOpen(false)}>
					About
				</Link>
				<Link href="/#work" onClick={() => setOpen(false)}>
					Work
				</Link>
				<Link href="/#experience" onClick={() => setOpen(false)}>
					Experience
				</Link>
				<Link
					className={styles["nav-contact"]}
					href="/#contact"
					onClick={() => setOpen(false)}
				>
					Let’s talk <span>↗</span>
				</Link>
			</nav>
		</header>
	);
}
