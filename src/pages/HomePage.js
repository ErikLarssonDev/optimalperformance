import React from 'react'
import { Hero, Services } from '../components'
import TestimonialsSlider from '../components/TestimonialsSlider'
import CoachingServices from '../components/CoachingServices'
import FeaturedPrograms from '../components/FeaturedPrograms'
const HomePage = () => {
  return (
    <main>
      <Hero />
      <FeaturedPrograms />
      <CoachingServices />
      <Services />     
      <TestimonialsSlider />
    </main>
  )
}

export default HomePage
