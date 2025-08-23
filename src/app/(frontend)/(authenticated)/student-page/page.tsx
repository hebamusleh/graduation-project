import { Hero, HomeClient } from '@/components/organizations'
import { Suspense } from 'react'

const page = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Hero isMentor={false} />
      <HomeClient />
    </Suspense>
  )
}

export default page
