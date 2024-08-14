import React from 'react'
import Navbar from '../Home Page/Navbar'
import Footer from '../Home Page/Components/Footer'
import PrivacyPolicyBody from './Components/PrivacyPolicyBody'
import CookiePolicyBody from './Components/CookiePolicyBody'

export default function PrivacyPolicy() {
    return (
        <>
            <Navbar />
            <PrivacyPolicyBody />
            <CookiePolicyBody />
            <Footer />
        </>
    )
}
