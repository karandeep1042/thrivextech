import React from 'react'
import Navbar from '../Home Page/Navbar'
import Footer from '../Home Page/Components/Footer'
import DtsHero from './Components/DtsHero'
import DtsInfo from './Components/DtsInfo'
import ContactPage from '../Contact Page/ContactPage'
import DtsInfo2 from './Components/DtsInfo2'
import DtsInfo3 from './Components/DtsInfo3'
import img1 from '../../Images/Digital Talent Solutions/infoimage.png'
import img2 from '../../Images/Digital Talent Solutions/mainpic.jpg'

export default function DigitalTalentSolutions() {
  return (
    <>
      <Navbar />
      <DtsHero />
      <DtsInfo header="Our Unparalleled Service Approach" desc="We know seamless team integration is crucial for success. That's why our fast and efficient service approach ensures you are in safe hands every step of the way:" img={img1} img2={img2}/>
      <DtsInfo2 />
      <DtsInfo3 />
      <ContactPage />
      <Footer />
    </>
  )
}
