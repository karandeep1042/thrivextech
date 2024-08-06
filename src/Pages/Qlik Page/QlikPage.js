import React from 'react'
import QlikHero from './Components/QlikHero'
import Navbar from '../Home Page/Components/Navbar'
import Footer from '../Home Page/Components/Footer'
import Qlikinfo from './Components/Qlikinfo'
import QlikCards from './Components/QlikCards'
import ContactPage from '../Contact Page/ContactPage'
import DataEngineeringHero from '../Data & AI/Data Engineering/Components/DataEngineeringHero'

export default function QlikPage() {
    return (
        <>
            <Navbar />
            <DataEngineeringHero heroheader="Qlik Services" herosubheader="Transform Your Data with Our Qlik Consulting Practice" herodescription="At Thrivex, We specialize in helping businesses harness the full potential of the Qlik platform. Our comprehensive Qlik consulting services are designed to transform your raw data into strategic insights that drive decision-making and give you a competitive edge. With extensive experience and a proven track record, our team of Qlik experts is here to guide you every step of the way." />
            <QlikCards />
            <Qlikinfo />
            <ContactPage />
            <Footer />
        </>
    )
}
