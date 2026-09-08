import HeroSection from "@components/HeroSection/widgets/Default";
import AboutSection from "@components/AboutSection/widgets/Default";
import ProjectSection from "@components/Project/ProjectSection/widgets/Default";
import ExperienceSection from "@components/ExperienceSection/widgets/Default";
import EducationSection from "@components/EducationSection/widgets/Default";
import ToolboxSection from "@components/ToolboxSection/widgets/Default";
import ContactSection from "@components/ContactSection/widgets/Default";
export default function Home() {
  return <>
    <HeroSection />
    <AboutSection />
    <ProjectSection />
    <ExperienceSection />
    <EducationSection />
    <ToolboxSection />
    <ContactSection />
  </>;
}
