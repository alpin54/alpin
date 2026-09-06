import type { Metadata } from "next";
export interface MetadataDefaults {
  title?: string;
  description?: string;
  keyword?: string;
  site_url?: string;
  site_name?: string;
  twitter?: string;
  og_image?: string;
  twitter_image?: string;
  robots?: Metadata["robots"];
  author?: string;
  theme_color?: string;
  refresh?: number;
}
export interface DynamicMetadataOptions {
  page?: string;
  link?: string;
  title?: string;
  ogImage?: string;
  twitterImage?: string;
  defaults?: MetadataDefaults;
}
