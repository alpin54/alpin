import metaTag from "@utils/metaTag";
import Projects from "./modules";

export async function generateMetadata() {
  return metaTag.dynamic({ page: "All Projects", link: "/projects" });
}
export default function ProjectsPage() {
  return <Projects />;
}
