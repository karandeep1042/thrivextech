import React from 'react'
import Navbar from '../../Home Page/Components/Navbar'
import Footer from '../../Home Page/Components/Footer'
import ContactPage from '../../Contact Page/ContactPage'
import IntegrationHero from './Components/IntegrationHero'
import IntegrationInfo from './Components/IntegrationInfo'
import IntegrationInfo2 from './Components/IntegrationInfo2'
import IntegrationInfo3 from './Components/IntegrationInfo3'
import AllEngineeringServices from '../Software Development/Components/AllEngineeringServices'
import SWdevhead from '../Software Development/Components/SWdevhead'
import DataEngineeringHero from '../../Data & AI/Data Engineering/Components/DataEngineeringHero'
import DtsInfo from '../../Digital Talent Solutions/Components/DtsInfo';
import img1 from '../../../New Resources/Product Engineering/Integration/info.png'
import TrendingTechnologies from '../Software Development/Components/TrendingTechnologies'

export default function Integration() {
    return (
        <>
            <Navbar />
            <DataEngineeringHero heroheader="Integration" herosubheader="Connecting your enterprise data and systems for powerful results" herodescription="Don't let siloed data and disconnected systems hinder your business growth. In today's digital landscape, seamless integration is crucial for leveraging advanced technologies and maximizing efficiency. Whether you need to connect internal systems like ERP and CRM or integrate with external partner platforms, achieving high availability, scalability, and reliability is paramount. Our Enterprise Integration services help businesses transition from traditional methods to modern integration approaches, boosting efficiency, security, customer experience, and overall business performance." />
            <IntegrationInfo />
            <DtsInfo header="Our Approach to Integration" desc="We take a holistic approach to deliver tailored integration solutions. Here's how we ensure a successful project:" img={img1} />
            <IntegrationInfo3 />
            <TrendingTechnologies />
            <AllEngineeringServices name="Integration" />
            <ContactPage desc="Discover how our integration solutions can propel your business forward. Contact us today and embark on your digital transformation." />
            <Footer />
        </>
    )
}
