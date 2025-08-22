import Image from "next/image";

const steps = [
  {
    num: "1",
    title: "Explore Tech Path",
    desc: "Discover areas like AI, Web Dev, Cybersecurity, and more.",
  },
  {
    num: "2",
    title: "Learn from Expert Content",
    desc: "Articles, videos, books, and real-world insights from pros.",
  },
  {
    num: "3",
    title: "Develop Your Skills Your Way",
    desc: "Smart tips & AI tools to learn faster and more effectively.",
  },
  {
    num: "4",
    title: "Book a Session with a Mentor",
    desc: "Connect with inspiring Arab mentors for step-by-step guidance.",
  },
];

export default function HowItWorks() {
  return (
    <section className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-4 py-20 lg:flex-row lg:items-start">
      {/* Text */}
      <div className="flex-1 space-y-6">
        <h2 className="text-center text-3xl font-bold lg:text-left">
          How Do You Use FOMO Techno?
        </h2>
        <ol className="space-y-4">
          {steps.map((s) => (
            <li
              key={s.num}
              className="flex flex-col items-center gap-4 sm:flex-row sm:items-start"
            >
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-orange-100 font-semibold text-orange-500">
                {s.num}
              </div>
              <div className="text-center sm:text-left">
                <p className="font-semibold">{s.title}</p>
                <p className="text-sm text-gray-600">{s.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>

      {/* Image */}
      <div className="flex flex-1 justify-end">
        <Image
          src="/assets/images/laptop.png"
          alt="Demo"
          width={600}
          height={360}
          className="w-full max-w-md object-contain"
        />
      </div>
    </section>
  );
}
