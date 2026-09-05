import type { ReactNode } from "react";
export default function MainSite({ children }: { children: ReactNode }) {
  return <main id="main">{children}</main>;
}
