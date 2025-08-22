import {
  Features,
  Footer,
  HeroSection,
  HowItWorks,
  MentorCards,
  Navbar,
} from '@/components/molecules'
import './styles.css'

export default async function HomePage() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto">
        <HeroSection />
        <MentorCards />
        <Features />
        <HowItWorks />
      </main>
      <Footer />
    </>
  )
}
