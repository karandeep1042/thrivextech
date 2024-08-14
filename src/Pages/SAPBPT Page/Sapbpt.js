import React from 'react'
import Navbar from '../Home Page/Navbar'
import Footer from '../Home Page/Components/Footer'
import SapbptHero from './Components/SapbptHero'
import ContactPage from '../Contact Page/ContactPage'
import SapbtpInfo2 from './Components/SapbtpInfo2'
import CardSlider2 from '../CardSlider/CardSlider2'
import SapbptInfoNew from './Components/SapbptInfoNew'
import '../../css/SAP BTP/SapbtpAppointment.css'

export default function Sapbpt() {
    return (
        <>
            <Navbar />
            <SapbptHero />
            <CardSlider2 />
            <SapbptInfoNew />
            <SapbtpInfo2 />
            <ContactPage />
            <Footer />
        </>
    )
}
