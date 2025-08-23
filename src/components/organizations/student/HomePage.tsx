'use client'

import { SkeletonCard } from '@/components/skeleton'
import { useGetSections } from '@/hooks/services-hooks'
import { ISection } from '@/models'
import Card from './Card'

export default function HomeClient() {
  const { data, isLoading } = useGetSections()
  return (
    <section className="mx-auto max-w-7xl px-4 py-12">
      <h2 className="mb-6 text-2xl font-semibold">Explore Learning Paths And Tech Resources</h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {isLoading ? (
          // eslint-disable-next-line react/no-array-index-key
          [...Array(6)].map((_, index) => <SkeletonCard key={index} />)
        ) : data?.docs?.length === 0 ? (
          <div className='text-center '>No sections found</div>
        ) : (
          data?.docs.map((c: ISection) => (
            <Card
              key={c.id}
              title={c.name}
              description={c.description}
              image={c.coverImage?.url || ''}
              slug={c.id}
              href={
                c.name === 'Tracks'
                  ? '/tracks'
                  : c.name === 'Mentors Blog'
                    ? '/mentors-blog'
                    : `/${c.id}`
              }
            />
          ))
        )}
      </div>
    </section>
  )
}
