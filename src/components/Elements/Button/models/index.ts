import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
export type ButtonProps =
  | ({ href: string } & AnchorHTMLAttributes<HTMLAnchorElement>)
  | ({ href?: never } & ButtonHTMLAttributes<HTMLButtonElement>);
