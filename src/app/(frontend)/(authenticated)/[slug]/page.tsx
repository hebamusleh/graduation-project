import { ClientArticle } from '@/components/organizations/articles'

export default async function page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  return <ClientArticle slug={slug} />
}
