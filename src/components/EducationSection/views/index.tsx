import Timeline from "@components/Timeline/widgets/Default";
import { education } from "../models";
import styles from "../styles/style.module.scss";

export default function EducationSection() {
	return (
		<section className="section-block" id="education">
			<div className="container">
				<div className={styles["education"]}>
					<div data-reveal>
						<p className={"eyebrow"}>04 / EDUCATION</p>
						<h2>
							A strong foundation.
							<br />
							<span className={"muted"}>A lifelong curiosity.</span>
						</h2>
						<p className={styles["education-intro"]}>
							From computer networks to frontend development, learning is part
							of the journey.
						</p>
					</div>
					<Timeline items={education} />
				</div>
			</div>
		</section>
	);
}
