import React from 'react'
import { Services } from '../components'
import TestimonialsSlider from '../components/TestimonialsSlider'
import CoachingServices from '../components/CoachingServices'
import { PageHero } from '../components'

const ServicesPage = () => {
  return (
    <main>
      <PageHero title='Services' />
      <CoachingServices />
      <Services />     
      <TestimonialsSlider />
    </main>
  )
}

export default ServicesPage