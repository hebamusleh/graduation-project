// app/not-found.tsx
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4">
      <h1 className="mb-4 text-8xl font-bold text-gray-800">404</h1>
      <p className="mb-6 text-2xl text-gray-500">Page Not Found</p>
      <Link
        href="/"
        className="text-xl text-blue-700 underline transition hover:text-blue-900"
      >
        Go to home page
      </Link>
    </div>
  );
}
