import type { Metadata } from "next";
import "@styles/app.scss";

export const metadata: Metadata = {
  title: "Alpin — Frontend Developer",
  description: "Frontend developer in Kuningan, Indonesia. Building thoughtful, scalable web experiences with React, Next.js, and design systems.",
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en">
    <body>{children}</body>
  </html>;
}

