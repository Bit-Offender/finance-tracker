import React from 'react'
import Hero from '@/components/Landing/Hero'
import HomeNav from '@/components/Landing/HomeNav'
import Content from '@/components/Landing/Content'
import CallToAction from '@/components/Landing/CallToAction'
import Footer from '@/components/Landing/Footer'

const HomePage = () => {
  return (
    <>

      <HomeNav />

      <Hero />

      <Content />

      <CallToAction />

      <Footer />
      
    </>
  )
}

export default HomePage