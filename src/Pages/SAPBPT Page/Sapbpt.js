import React from 'react'
import Navbar from '../Home Page/Navbar'
import Footer from '../Home Page/Components/Footer'
import SapbptHero from './Components/SapbptHero'
import SapbptInfo from './Components/SapbptInfo'
import SapbtpHero2 from './Components/SapbtpHero2'
import SapbtpCards1 from './Components/SapbtpCards1'
import SapbtpCards2 from './Components/SapbtpCards2'
import ContactPage from '../Contact Page/ContactPage'
import SapbtpInfo2 from './Components/SapbtpInfo2'
import DataEngineeringHero from '../Data & AI/Data Engineering/Components/DataEngineeringHero'
import CardSlider from '../CardSlider/CardSlider'
import CardSlider2 from '../CardSlider/CardSlider2'
import SapbptInfoNew from './Components/SapbptInfoNew'
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
