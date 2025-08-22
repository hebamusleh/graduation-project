import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="flex flex-col items-start justify-center gap-8 px-4 py-16 md:flex-row md:py-20">
      {/* Image on the left */}
      <div className="hidden md:flex md:w-1/5 md:flex-shrink-0 lg:w-1/6">
        <Image
          src="/assets/images/side-left.svg"
          alt="Side Left"
          width={220}
          height={220}
          className="mx-auto"
        />
      </div>

      {/* Central content */}
      <div className="w-full px-2 text-center sm:px-4 md:flex-1">
        <h1 className="mx-auto mb-4 max-w-xl text-4xl font-bold">
          Start Your Tech Journey with Confidence!
        </h1>

        <p className="mx-auto mb-6 max-w-3xl text-base text-gray-600 sm:text-lg">
          Whether you are a university student, a recent graduate, or someone
          looking to switch careers... FOMO Techno will guide you toward the
          tech path that fits you best.
        </p>

        <div className="flex justify-center">
          <Button
            size="lg"
            className="w-full rounded-full bg-blue-600 text-white hover:bg-blue-700 sm:w-1/2 md:w-auto"
          >
            <Link href="/signup">Join Now for Free</Link>
          </Button>
        </div>
      </div>

      {/* Image on the right */}
      <div className="hidden md:flex md:w-1/5 md:flex-shrink-0 lg:w-1/6">
        <Image
          src="/assets/images/side-left.svg"
          alt="Side Right"
          width={220}
          height={220}
          className="mx-auto"
        />
      </div>
    </section>
  );
}
