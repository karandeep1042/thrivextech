import React from 'react'
import Navbar from '../../Home Page/Navbar'
import Footer from '../../Home Page/Components/Footer'
import DataServicesHero from './Components/DataServicesHero'
import DataServicesCards from './Components/DataServicesCards'
import DataServicesInfo from './Components/DataServicesInfo'
import ContactPage from '../../Contact Page/ContactPage'

export default function DataServices() {
  return (
    <>
     <Navbar/>
     <DataServicesHero/>
     <DataServicesCards/>
     <DataServicesInfo/>
     <ContactPage/>
     <Footer/>
    </>
  )
}
