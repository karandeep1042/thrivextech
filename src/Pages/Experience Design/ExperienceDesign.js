import React from 'react'
import Navbar from '../Home Page/Components/Navbar'
import Footer from '../Home Page/Components/Footer'
import EDHero from './Components/EDHero'
import EDInfo from './Components/EDInfo'
import ContactPage from '../Contact Page/ContactPage'
import EDHero2 from './Components/EDHero2'
import EDqanda from './Components/EDqanda'
import EDNewHero from './Components/EDNewHero'
import EDNewInfo from './Components/EDNewInfo'
import EDNewInfo2 from './Components/EDNewInfo2'
import EDNewInfo3 from './Components/EDNewInfo3'
import EDNewInfo4 from './Components/EDNewInfo4'
import DataEngineeringHero from '../Data & AI/Data Engineering/Components/DataEngineeringHero'
import EDNewCards from './Components/EDNewCards'

export default function ExperienceDesign() {
  return (
    <>
      <Navbar />
      <DataEngineeringHero heroheader="Experience Design" herosubheader="Transform your digital products with engaging and user-centric experiences." herodescription="In today's competitive landscape, businesses thrive by creating experiences that seamlessly integrate physical, digital, and service design. At Thrivex, We specialize in crafting user and customer experiences that drive meaningful engagement and tangible business results. From insightful user research to innovative software and product design, our expertise in design thinking ensures a holistic and impactful customer journey." />
      <EDNewCards />
      <EDNewInfo />
      <EDNewInfo2 />
      <EDNewInfo4 />
      <EDqanda />
      <ContactPage />
      <Footer />
    </>
  )
}
