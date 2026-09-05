"use client";
import { profile } from "@configs/profile";
import { useState, type FormEvent } from "react";
export default function useContactForm() {
  const [status, setStatus] = useState("");
  function contact(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`Portfolio inquiry from ${data.get("name")}`);
    const body = encodeURIComponent(`Hi Alpin,\n\n${data.get("message")}\n\n${data.get("name")}\n${data.get("email")}`);
    window.location.href = `${profile.emailHref}?subject=${subject}&body=${body}`;
    setStatus("Your email draft is ready to open in your email app. Send it there to get in touch, or email alpinn189@gmail.com directly.");
  }
  return { status, contact };
}
