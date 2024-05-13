import AboutUs from '@/components/AboutUs'
import { OurTeam } from '@/components/Team'
import React from 'react'

const About = () => {
  return (
    <div className='min-h-screen mt-28'>
      <AboutUs/>
        <OurTeam/>
    </div>
  )
}

export default About