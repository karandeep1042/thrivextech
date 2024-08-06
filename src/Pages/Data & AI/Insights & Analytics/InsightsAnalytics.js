import React from 'react'
import Navbar from '../../Home Page/Components/Navbar'
import Footer from '../../Home Page/Components/Footer'
import InsightsAnalyticsCards from './Components/InsightsAnalyticsCards'
import DataAICards2 from '../Data & AI/Components/DataAICards2'
import ContactPage from '../../Contact Page/ContactPage'
import DataEngineeringHero from '../Data Engineering/Components/DataEngineeringHero'
import InsightsAnalyticsInfo2 from './Components/InsightsAnalyticsInfo2'
import InsightsAnalyticsInfo from './Components/InsightsAnalyticsInfo'

export default function InsightsAnalytics() {
    return (
        <>
            <Navbar />
            <DataEngineeringHero heroheader="Insights & Analytics" herosubheader="Unlock the full potential of your data by transforming it into actionable insights through impactful visualizations and effective data storytelling" herodescription=" In today’s ever-changing market landscape, staying ahead and leveraging consumer behavior trends is paramount. To transform rich data sources into meaningful narratives, a reliable partner is essential. BI solutions are needed to derive precise insights and swiftly make strategic and tactical decisions.
            As a leading provider of business intelligence services, we offer extensive expertise in cutting-edge technologies and exceptional service. We empower your business to revolutionize its thinking and operations. Implement data visualization tools to craft impactful narratives, discover innovative ways to engage with your customers, and consistently deliver enhanced experiences. Evolve alongside your customers while maximizing ROI every step of the way."/>
            <InsightsAnalyticsCards />
            <InsightsAnalyticsInfo />
            <InsightsAnalyticsInfo2 />
            <DataAICards2 />
            <ContactPage />
            <Footer />
        </>
    )
}
