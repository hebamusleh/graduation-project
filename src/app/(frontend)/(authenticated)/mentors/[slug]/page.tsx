import MentorDetailsClient from "@/components/organizations/student/MentorDetails";

export default async function MentorProfile({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <MentorDetailsClient slug={slug} />;
}
