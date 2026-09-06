/** Convert a page title into a comma-separated keyword list. */
export default function stringKeywords(value: string): string {
  return value.trim().split(/\s+/).filter(Boolean).join(", ");
}
