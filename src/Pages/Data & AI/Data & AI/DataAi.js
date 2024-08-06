import React from 'react'
import Navbar from '../../Home Page/Components/Navbar'
import Footer from '../../Home Page/Components/Footer'
import DataAIHero from './Components/DataAIHero'
import DataAICards from './Components/DataAICards'
import DataAICards2 from './Components/DataAICards2'
import DataAIContactForm from './Components/DataAIContactForm'
import RelatedTopics from '../Insights & Analytics/Components/RelatedTopics'
import ContactPage from '../../Contact Page/ContactPage'

export default function () {
    return (
        <>
            <Navbar />
            <DataAIHero />
            <DataAICards />
            {/* <DataAICards2 /> */}
            <ContactPage />
            <Footer />
        </>
    )
}
