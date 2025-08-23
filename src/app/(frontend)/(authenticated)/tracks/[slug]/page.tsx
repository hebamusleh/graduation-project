// src/app/tracks/[slug]/page.tsx

import TrackDetailClientPage from '@/components/organizations/student/TrackDetails'

export default async function page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params

  return <TrackDetailClientPage slug={slug} />
}
