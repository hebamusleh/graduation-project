"use client";

// app/signup/[role]/page.tsx
import React, { useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import SignupForm from "./SignupForm";

export default function RegisterRolePage() {
  const { role: initialRole } = useParams() as { role: "student" | "mentor" };
  const router = useRouter();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [initialRole]);

  const switchRole = (newRole: "student" | "mentor") => {
    router.push(`/register/${newRole}`);
  };

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      <SignupForm initialRole={initialRole} onSwitchRole={switchRole} />
    </>
  );
}
