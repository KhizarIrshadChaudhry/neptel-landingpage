import Hero from '@/app/components/Hero'
import ProblemStatement from '@/app/components/ProblemStatement'
import VelocityScrollingData from '@/app/components/VelocityScrollingData'
import SolutionStatement from '@/app/components/SolutionStatement'
import WhyNeptel from '@/app/components/WhyNeptel'
import VisionMission from '@/app/components/VisionMission'
import AboutSection from '@/app/components/AboutSection'
import GettingStarted from '@/app/components/GettingStarted'
import Footer from '@/app/components/Footer'

export const metadata = {
  title: 'Neptel',
  description:
    'Neptel — enterprise AI infrastructure that keeps your data private and under your control.',
  openGraph: {
    url: 'https://your-domain.com/',
    title: 'Home | Neptel',
    description:
      'Neptel — enterprise AI infrastructure that keeps your data private and under your control.',
    images: [
      {
        url: 'https://your-domain.com/home-og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Home | Neptel',
    description:
      'Neptel — enterprise AI infrastructure that keeps your data private and under your control.',
    images: ['https://your-domain.com/home-og-image.jpg'],
    site: '@yourhandle',
    creator: '@yourhandle',
  },
}

export default function Home() {
  return (
    <main className="bg-[#0D1117] text-white font-sans">
      <Hero />
      <ProblemStatement />
      <VelocityScrollingData />
      <SolutionStatement />
      <WhyNeptel />
      <VisionMission />
      <AboutSection />
      <GettingStarted />
      <Footer />
    </main>
  )
}
