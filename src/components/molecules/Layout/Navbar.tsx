import Link from "next/link";
import { Button } from "@/components/ui/button";
import Logo from "@/components/icons/logo";

export default function Navbar() {
  return (
    <header className="rounded-4xl relative top-4 z-20 mx-auto flex w-full max-w-7xl items-center justify-between bg-white px-4 py-2 shadow-lg sm:px-10 sm:py-4">
      <div className="flex items-center gap-1">
        <Logo className="h-6 w-auto sm:h-10" />
        <span className="text-lg font-extrabold text-blue-600 sm:text-2xl">
          FOMO
        </span>
      </div>

      <nav className="flex items-center gap-3 sm:gap-6">
        <Button className="w-24 rounded-full border border-blue-600 bg-white py-1 text-center text-sm font-medium text-blue-600 transition-colors hover:bg-blue-50 sm:w-32 sm:py-2 sm:text-base">
          <Link href="/login">Login</Link>
        </Button>
        <Button className="w-24 rounded-full bg-blue-600 py-1 text-sm text-white transition-colors hover:bg-blue-700 sm:w-32 sm:py-2 sm:text-base">
          <Link href="/register">Join Now</Link>
        </Button>
      </nav>
    </header>
  );
}
