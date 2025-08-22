// components/MentorCard.tsx
import Image from "next/image";
import { ArrowUpRightIcon, StarIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface Mentor {
  name: string;
  role: string;
  years: number;
  rating: number;
  reviews: number;
  imageSrc: string;
}

const mentors: Mentor[] = [
  {
    imageSrc: "/assets/images/avatar3.svg",
    name: "Ethan Cole",
    role: "Senior UX/UI Designer",
    years: 5,
    rating: 4.5,
    reviews: 29,
  },
  {
    imageSrc: "/assets/images/avatar3.svg",
    name: "Ava Mitchell",
    role: "Product Designer",
    years: 7,
    rating: 4.8,
    reviews: 42,
  },
  {
    imageSrc: "/assets/images/avatar3.svg",
    name: "Liam Johnson",
    role: "Visual Designer",
    years: 4,
    rating: 4.3,
    reviews: 18,
  },
  {
    imageSrc: "/assets/images/avatar3.svg",
    name: "Sophia Lee",
    role: "UX Researcher",
    years: 6,
    rating: 4.7,
    reviews: 35,
  },
];

export default function MentorCards() {
  return (
    <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 sm:grid-cols-2 md:grid-cols-4">
      {mentors.map((m, i) => (
        <div key={i} className="mx-auto w-full rounded-2xl bg-white p-6 shadow">
          {/* Header: Image + Info */}
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row sm:items-start">
            <div className="flex items-center gap-4">
              <Image
                src={m.imageSrc}
                alt={m.name}
                width={48}
                height={48}
                className="flex-shrink-0 rounded-full"
              />
              <div className="text-center sm:text-left">
                <h3 className="text-base font-semibold">{m.name}</h3>
                <p className="text-sm text-gray-500">{m.role}</p>
              </div>
            </div>
            <ArrowUpRightIcon className="h-5 w-5 flex-shrink-0 text-blue-500" />
          </div>

          {/* Experience */}
          <p className="mt-4 text-center text-sm sm:text-left">
            {m.years} Years of experience
          </p>

          {/* Rating */}
          <p className="mt-2 flex items-center justify-center gap-1 text-sm text-yellow-500 sm:justify-start">
            <StarIcon className="h-4 w-4 flex-shrink-0 fill-current" />
            {m.rating} ({m.reviews} reviews)
          </p>

          {/* Badges */}
          <div className="mt-4 flex flex-wrap justify-center gap-2 sm:justify-start">
            <Badge className="whitespace-nowrap rounded-full bg-blue-50 px-2 py-1 text-blue-500">
              Design Thinking
            </Badge>
            <Badge className="whitespace-nowrap rounded-full bg-blue-50 px-2 py-1 text-blue-500">
              UCD
            </Badge>
            <Badge className="whitespace-nowrap rounded-full bg-blue-50 px-2 py-1 text-blue-500">
              more +
            </Badge>
          </div>
        </div>
      ))}
    </div>
  );
}
