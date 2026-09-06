import type { Metadata } from "next";
import DefaultSEO from "@configs/SEO";

type IconSources = { default: string } & Record<number, string>;
export default function metaTagIcons(): NonNullable<Metadata["icons"]> {
  const { icons } = DefaultSEO;
  const metadataBase = new URL(process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000");
  const generateIcons = (sources: IconSources, type?: string) =>
    Object.entries(sources)
      .filter(([size]) => size !== "default" && !Number.isNaN(Number(size)))
      .map(([size, src]) => ({
        url: new URL(src, metadataBase).toString(),
        sizes: `${size}x${size}`,
        ...(type ? { type } : {}),
      }));
  return {
    shortcut: new URL(icons.android.default, metadataBase).toString(),
    icon: generateIcons(icons.android, "image/png"),
    apple: generateIcons(icons.apple),
    other: [{ rel: "apple-touch-startup-image", url: new URL(icons.apple.default, metadataBase).toString() }],
  };
}
