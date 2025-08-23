import { Hero, HomeClient } from '@/components/organizations'

const page = () => {
  return (
    <>
      <Hero isMentor={true} />
      <HomeClient />
    </>
  )
}

export default page
