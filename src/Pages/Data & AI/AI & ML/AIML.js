import React from 'react'
import Navbar from '../../Home Page/Components/Navbar'
import Footer from '../../Home Page/Components/Footer'
import ContactPage from '../../Contact Page/ContactPage'
import DataEngineeringHero from '../Data Engineering/Components/DataEngineeringHero'
import AIMLCards from './Components/AIMLCards'
import img1 from '../../../New Resources/AI & ML/card1.png'
import AIMLInfo2 from './Components/AIMLInfo2'
import DataAICards2 from '../Data & AI/Components/DataAICards2'
import AIMLInfo from './Components/AIMLInfo'

export default function AIML() {

    return (
        <>
            <Navbar />
            <DataEngineeringHero heroheader="AI & ML Services" herosubheader="Unlock the full potential of your data, elevate automation, and reimagine business possibilities with our advanced analytics solutions." herodescription="The first step toward transformation begins with investing in the right technology. We harness the power of artificial intelligence and machine learning to revolutionize your business operations and enhance productivity. Our comprehensive approach to AI & ML solutions integrates human expertise with cutting-edge technology to deliver optimal results. By staying ahead of the curve and embracing emerging technologies, we enable your business to scale the impact of AI across all operations, leading to faster decisions, sustainable capabilities, and increased efficiency." />
            <AIMLCards />
            <AIMLInfo />
            <AIMLInfo2 />
            <DataAICards2 />
            <ContactPage />
            <Footer />
        </>
    )
}
