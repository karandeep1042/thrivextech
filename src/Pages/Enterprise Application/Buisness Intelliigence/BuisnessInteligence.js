import React from 'react'
import Navbar from '../../Home Page/Navbar'
import BuisnessIntelligenceHero from './Components/BuisnessIntelligenceHero'
import Footer from '../../Home Page/Components/Footer'
import BuisnessIntelligenceCards from './Components/BuisnessIntelligenceCards'
import BuisnessIntelligenceInfo from './Components/BuisnessIntelligenceInfo'
import ContactPage from '../../Contact Page/ContactPage'

export default function BuisnessInteligence() {
  return (
    <>
     <Navbar/>
     <BuisnessIntelligenceHero/>
     <BuisnessIntelligenceCards/>
     <BuisnessIntelligenceInfo/>
     <ContactPage/>
     <Footer/> 
    </>
  )
}
