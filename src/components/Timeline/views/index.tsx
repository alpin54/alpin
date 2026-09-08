import type { TimelineProps } from "../models";
import styles from "../styles/style.module.scss";

export default function Timeline({ items }: TimelineProps) {
	return (
		<div className={styles.timeline}>
			{items.map((item, index) => (
				<article key={item.organization} data-reveal data-reveal-order={index % 3}>
					<span className={styles["timeline-date"]}>{item.period}</span>
					<h3>
						{item.title}
						{item.current && <span aria-label="Current role">↗</span>}
					</h3>
					<h4>{item.organization}</h4>
					{item.description && <p>{item.description}</p>}
				</article>
			))}
		</div>
	);
}
