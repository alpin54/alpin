import styles from "../styles/style.module.scss";
import { skills } from "../models";

export default function ToolboxSection() {
	return (
		<section aria-labelledby="toolbox-title">
			<div className="container">
				<div className={styles.toolbox}>
					<div className={styles.heading} data-reveal>
						<p className="eyebrow">MY EVERYDAY TOOLKIT</p>
						<h2 id="toolbox-title">The tools behind <span className="muted">the work.</span></h2>
					</div>
					<dl className={styles.groups}>
						{skills.map((group, index) => (
							<div className={styles.group} key={group.label} data-reveal data-reveal-order={index % 2}>
								<dt className={styles.label}>
									<span className={styles.number} aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
									{group.label}
								</dt>
								<dd className={styles.items}>
									<ul className={styles.tags}>
										{group.items.map(skill => <li className={styles.tag} key={skill}>{skill}</li>)}
									</ul>
								</dd>
							</div>
						))}
					</dl>
				</div>
			</div>
		</section>
	);
}
