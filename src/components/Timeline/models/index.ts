export interface TimelineEntry {
	period: string;
	title: string;
	organization: string;
	description: string;
	current: boolean;
}
export interface TimelineProps {
	items: readonly TimelineEntry[];
	reverse?: boolean;
}
