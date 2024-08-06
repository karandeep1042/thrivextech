import React from 'react'
import Navbar from '../Home Page/Components/Navbar'
import ResumeForm from '../About Page/Components/ResumeForm'
import Footer from '../Home Page/Components/Footer'
import ContactPage from '../Contact Page/ContactPage'
import CareerHero from './Components/CareerHero'
import CareerInfo from './Components/CareerInfo'
import CareerAppForm from './Components/CareerAppForm'
import DataEngineeringHero from '../Data & AI/Data Engineering/Components/DataEngineeringHero'
export default function Career() {
  return (
    <>
      <Navbar />
      <DataEngineeringHero heroheader="Careers @ Thrivex" herosubheader="Join Us in Building the Digital Future" herodescription="We're on the lookout for talented individuals to join the Thrivex team." />
      <CareerInfo />
      <CareerAppForm />
      <ContactPage />
      <Footer />
    </>
  )
}
