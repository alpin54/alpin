import type { ReactNode } from "react";
import Header from "@components/Header/widgets/Default";
import Footer from "@components/Footer/widgets/Default";
import MainSite from "@components/MainSite";
export default function Template({ children }: { children: ReactNode }) {
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <Header />
    <MainSite>{children}</MainSite>
    <Footer />
  </>;
}
