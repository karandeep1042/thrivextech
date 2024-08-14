import React from 'react'
import Navbar from '../Home Page/Navbar'
import Footer from '../Home Page/Components/Footer'
import AboutHero from './Components/AboutHero'
import AboutInfo from './Components/AboutInfo'
import ContactPage from '../Contact Page/ContactPage'
import AboutInfo2 from './Components/AboutInfo2'

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <AboutHero />
      <AboutInfo />
      <AboutInfo2 />
      <ContactPage />
      <Footer />
    </>
  )
}
