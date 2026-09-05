"use client";
import { useState } from "react";
export default function useHeaderMenu() {
  const [open, setOpen] = useState(false);
  return { open, setOpen };
}
