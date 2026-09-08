import Button from "@elements/Button/widgets/Default";
import styles from "../styles/style.module.scss";
import Image from "next/image";

import profileImage from "@assets/image/dummy/alpin.png";

export default function HeroSection() {
	return (
		<section id="home">
			<div className="container">
				<div className={styles["hero"]}>
					<div className={styles["hero-copy"]} data-reveal>
						<p className={"eyebrow"}>
							<span className={"status-dot"} /> FRONTEND DEVELOPER · INDONESIA
						</p>
						<h1>
							Thoughtful code.
							<br />
							Meaningful
							<br />
							<span className={"gradient-text"}>digital experiences.</span>
						</h1>
						<p className={styles["hero-description"]}>
							Hi, I’m Alpin — a frontend developer turning ideas into fast,
							intuitive, and beautifully crafted websites.
						</p>
						<div className={styles["hero-actions"]}>
							<Button href="#work">
								Explore my work <span>↗</span>
							</Button>
							<a className={"text-link"} href="#contact">
								Let’s build something <span>→</span>
							</a>
						</div>
						<div className={styles["hero-note"]}>
							<span /> Based in Kuningan, West Java{" "}
							<span className={styles["note-divider"]}>/</span> Building for the
							web.
						</div>
					</div>
					<div className={styles["hero-art"]} data-reveal="fade" data-reveal-order="2">
						<div className={styles.orbit} />
						<div className={[styles["orbit"], styles["orbit-two"]].join(" ")} />
						<div className={styles["code-label"]}>&lt;developer /&gt;</div>
						<div className={styles["portrait"]}>
							<Image
								className={styles["portrait-img"]}
								src={profileImage}
								alt="Stylized placeholder profile illustration of Alpin"
							/>
						</div>
						<div className={styles["art-caption"]}>
							<span className={"status-dot"} />
							<div>
								Made with intention.
								<small>From the first pixel to the last line.</small>
							</div>
							<span>✧</span>
						</div>
						<span className={styles["spark"]}>✳</span>
					</div>
					<div className={styles["hero-bottom"]}>
						<span>SCROLL TO EXPLORE ↓</span>
						<span>DESIGN MINDED. DEVELOPMENT DRIVEN.</span>
					</div>
				</div>
			</div>
		</section>
	);
}
