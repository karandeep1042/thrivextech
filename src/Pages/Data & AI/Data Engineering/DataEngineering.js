import React from 'react'
import Navbar from '../../Home Page/Components/Navbar'
import DataEngineeringHero from './Components/DataEngineeringHero'
import DataEngineeringInfo from './Components/DataEngineeringInfo'
import Footer from '../../Home Page/Components/Footer'
import DataEngineeringInfo2 from './Components/DataEngineeringInfo2'
import ContactPage from '../../Contact Page/ContactPage'
import DataEngineeringSlider from './Components/DataEngineeringSlider'
import DataAICards2 from '../Data & AI/Components/DataAICards2'

export default function DataEngineering() {
    return (
        <>
            <Navbar />
            <DataEngineeringHero heroheader="Data Engineering" herosubheader="Enable superior data infrastructure to unlock strategic insights, drive data-driven decisions, and achieve outstanding results." herodescription="Transform your data into actionable business solutions through our robust suite of data management services. From big data analytics to data engineering and cloud data services, we provide tailored solutions to address your unique business needs. Our approach integrates cutting-edge technology and industry best practices to ensure your data infrastructure is not just efficient but transformative." />
            <DataEngineeringSlider />
            <DataEngineeringInfo />
            <DataEngineeringInfo2 />
            <DataAICards2 />
            <ContactPage />
            <Footer />
        </>
    )
}
