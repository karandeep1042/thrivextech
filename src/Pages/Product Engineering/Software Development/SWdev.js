import React from 'react'
import Navbar from '../../Home Page/Components/Navbar';
import Footer from '../../Home Page/Components/Footer';
import SWdevHero from './Components/SWdevHero';
import SWdevcards from './Components/SWdevcards';
import SWdevinfo from './Components/SWdevinfo';
import SWdevhead from './Components/SWdevhead';
import ContactPage from '../../Contact Page/ContactPage';
import AllEngineeringServices from './Components/AllEngineeringServices';
import DataEngineeringHero from '../../Data & AI/Data Engineering/Components/DataEngineeringHero'
import DtsInfo from '../../Digital Talent Solutions/Components/DtsInfo';
import img1 from '../../../New Resources/Product Engineering/Software Development/info1.png'
import TrendingTechnologies from './Components/TrendingTechnologies';

export default function SWdev() {
  return (
    <>
      <Navbar />
      <DataEngineeringHero heroheader="Software Engineering" herosubheader="We build AI-powered software solutions that shape your business" herodescription="In today's digital landscape, effective software solutions are indispensable for businesses. Our software engineering experts specialize in evolving solutions rather than merely sustaining them. From modernizing legacy systems to harnessing AI for accelerated development, we transform your vision into robust architectures using dedicated teams and agile practices. The result? Intuitive, adaptable software that empowers your business to thrive" />
      <SWdevcards />
      <DtsInfo header="Our Approach" desc="We transform your vision into adaptable software, using agile practices and expert teams. This ensures fast delivery, scalability, and continuous innovation for your business." img={img1} />
      <SWdevinfo />
      <TrendingTechnologies />
      <AllEngineeringServices name='Software Development' />
      <ContactPage />
      <Footer />
    </>
  )
}
