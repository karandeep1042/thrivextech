import React from 'react'
import Navbar from '../../Home Page/Navbar'
import Footer from '../../Home Page/Components/Footer'
import CloudNativeInfo from './Components/CloudNativeInfo'
import CloudNativeCards from './Components/CloudNativeCards'
import CloudNativeInfo2 from './Components/CloudNativeInfo2'
import ContactPage from '../../Contact Page/ContactPage'
import AllEngineeringServices from '../Software Development/Components/AllEngineeringServices'
import DataEngineeringHero from '../../Data & AI/Data Engineering/Components/DataEngineeringHero'
import TrendingTechnologies from '../Software Development/Components/TrendingTechnologies'
import '../../../css/Cloud Native/CloudNativeHero2.css'
export default function CloudNative() {
  return (
    <>
      <Navbar />
      <DataEngineeringHero heroheader="Cloud Native" herosubheader="Build Scalable and Agile Applications for the Future with Cloud-Native Application Development" herodescription="In today's fast-paced market, businesses must quickly adapt to stay competitive. However, the rapid advancement of cloud technology and the shortage of specialized skills make this a challenge. We empower businesses to leverage the agility, scalability, and cost-efficiency of cloud-native application development. Our services encompass the entire process, from microservices architecture design to DevOps implementation and managed cloud support." />
      <CloudNativeCards />
      <CloudNativeInfo2 />
      <CloudNativeInfo />
      <TrendingTechnologies />
      <AllEngineeringServices name="Cloud Native Apps" />
      <ContactPage />
      <Footer />
    </>
  )
}
