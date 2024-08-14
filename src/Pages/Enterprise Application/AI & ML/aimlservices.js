import React from 'react'
import Navbar from '../../Home Page/Navbar'
import Footer from '../../Home Page/Components/Footer'
import Aimlhero from './Components/aimlhero'
import Aimlcards from './Components/aimlcards'
import Aimlinfo from './Components/aimlinfo'
import ContactPage from '../../Contact Page/ContactPage'

export default function Aimlservices() {
    return (
        <>
            <Navbar />
            <Aimlhero />
            <Aimlcards />
            <Aimlinfo />
            <ContactPage/>
            <Footer />
        </>
    )
}
