import React from 'react'
import Navbar from '../../Home Page/Components/Navbar'
import Footer from '../../Home Page/Components/Footer'
import Modernizationhero from './Components/Modernizationhero'
import Modernizationinfo from './Components/Modernizationinfo'
import Modernizationcards from './Components/Modernizationcards'
import SWdevhead from '../Software Development/Components/SWdevhead'
import ContactPage from '../../Contact Page/ContactPage'
import AllEngineeringServices from '../Software Development/Components/AllEngineeringServices'
import DataEngineeringHero from '../../Data & AI/Data Engineering/Components/DataEngineeringHero'
import DtsInfo from '../../Digital Talent Solutions/Components/DtsInfo';
import img1 from '../../../New Resources/Product Engineering/Modernization/info1.png'
import TrendingTechnologies from '../Software Development/Components/TrendingTechnologies'
export default function Modernization() {
  return (
    <>
      <Navbar />
      <DataEngineeringHero heroheader="Modernization" herosubheader="Transform your legacy systems & drive innovation" herodescription="Stay ahead of dynamic user demands and volatile market trends by modernizing your legacy systems and preparing your business for future transformations. Don't let costly, sluggish, and isolated architectures hold you back. Our legacy application modernization services help clients eliminate unnecessary operational costs and empowers your workforce to focus on strategic and transformative projects. " />
      <Modernizationcards />
      <DtsInfo header="Modernize Your Legacy Systems: Choose the Right Approach" desc="We understand that every legacy system is unique. That's why we offer a customized approach to modernization, taking into account your specific needs and budget. We work closely with you to choose the right modernization strategy, whether it's a phased approach, encapsulation, lift and shift, or cloud-native refactoring." img={img1} />
      <Modernizationinfo />
      <TrendingTechnologies />
      <AllEngineeringServices name="Modernization" />
      <ContactPage />
      <Footer />
    </>
  )
}
