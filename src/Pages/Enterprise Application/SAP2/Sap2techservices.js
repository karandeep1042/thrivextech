import React from 'react'
import Navbar from '../../Home Page/Navbar'
import Footer from '../../Home Page/Components/Footer'
import Sap2hero from './Components/Sap2hero'
import Sap2info from './Components/Sap2info'
import ContactPage from '../../Contact Page/ContactPage'

export default function Sap2techservices() {
  return (
    <>
      <Navbar />
      <Sap2hero />
      <Sap2info />
      <ContactPage/>
      <Footer />
    </>
  )
}
