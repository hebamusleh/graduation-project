import {
  BookOpenIcon,
  CompassIcon,
  CpuIcon,
  FileTextIcon,
  TrendingUpIcon,
} from "lucide-react";

export default function Features() {
  const items = [
    {
      icon: CompassIcon,
      title: "Guidance to Choose the Right Career Path",
      desc: "We help you identify the technical specialization that matches your skills and ambitions.",
    },
    {
      icon: FileTextIcon,
      title: "Trusted Resources from Industry Experts",
      desc: "Learn from reliable sources and carefully prepared content by professionals.",
    },
    {
      icon: CpuIcon,
      title: "Tips on Using AI for Learning",
      desc: "Benefit from the latest smart tools to enhance your learning skills.",
    },
    {
      icon: TrendingUpIcon,
      title: "Improve Your English for Tech Purposes",
      desc: "We support you with techniques and resources to improve your technical English skills.",
    },
    {
      icon: BookOpenIcon,
      title: "Book One-on-One Sessions with Mentors",
      desc: "Schedule individual mentoring sessions with experts to assist you on your path.",
    },
  ];

  return (
    <section className="px-4 py-20">
      <h2 className="mb-6 text-2xl font-bold">Why Join FOMO Techno?</h2>
      <div className="mx-auto grid max-w-screen-2xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {items.map(({ icon: Icon, title, desc }) => (
          <div
            key={title}
            className="flex flex-col items-center rounded-xl bg-[#F0FCFF] p-6 text-center"
          >
            <Icon className="mb-4 flex-shrink-0" width={32} height={32} />
            <h4 className="mb-2 text-base font-semibold leading-tight text-gray-800">
              {title}
            </h4>
            <p className="text-sm text-gray-600">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
