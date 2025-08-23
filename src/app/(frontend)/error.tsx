// app/error.tsx
"use client";

import { useEffect } from "react";
import Link from "next/link";

interface ErrorPageProps {
  error: Error;
  reset: () => void;
}

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    console.error("Error thrown in a route segment:", error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4">
      <div className="mb-4 text-4xl font-semibold text-red-600">
        Something went wrong
      </div>
      <p className="mb-6 text-lg text-gray-700">{error.message}</p>
      <div className="flex gap-4">
        <button
          onClick={() => reset()}
          className="rounded-full bg-blue-500 px-6 py-2 font-bold text-white transition hover:bg-blue-700"
        >
          Try again
        </button>
        <Link
          href="/"
          className="inline-block self-center text-lg text-blue-700 underline"
        >
          Go to home page
        </Link>
      </div>
    </div>
  );
}
