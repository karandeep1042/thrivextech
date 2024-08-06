import React from 'react'
import '../../../css/Home Page/HomeSection3.css'
import { Link } from 'react-router-dom'

export default function HomeSection3() {

    const homesection3cards = [
        {
            logo: 'fa-solid fa-mobile-screen-button',
            mainheader: 'Experience Design',
            maindesc: 'Design simple and engaging experiences that transform your digital products and drive results',
            classname: 'homesection3cardsubcard2',
            subcard: [
                {
                    subcardheader: 'User Research',
                    subcarddesc: 'User needs vs wants, behaviour mapping, customer journey mapping'
                },
                {
                    subcardheader: 'UX/UI Design',
                    subcarddesc: 'Wireframing, user interface and interactive designs'
                },
                {
                    subcardheader: 'Prototyping',
                    subcarddesc: 'Mock-ups, interactive prototypes, user testing and validation'
                },
                {
                    subcardheader: 'Application Design',
                    subcarddesc: 'Mobile and web-based apps, data visualizations'
                },
            ],
            linkpage: '/experiencedesign'
        },
        {
            logo: 'fa-solid fa-database',
            mainheader: 'Data & AI',
            maindesc: 'Leverage the power of data & AI to drive decisions, enhance business efficiencies, and gain a competitive edge',
            classname: 'homesection3cardsubcard',
            subcard: [
                {
                    subcardheader: 'Data Engineering',
                    subcarddesc: 'Establish foundation, setup architecture, data modelling, ELT, data streaming and cloudification',
                    link:'/dataengineering'
                },
                {
                    subcardheader: 'Insights & Analytics',
                    subcarddesc: 'Data storytelling, visualizations, self service enablement, reporting and analysis, technology recommendations',
                    link:'/insightsanalytics'
                },
                {
                    subcardheader: 'AI/ML',
                    subcarddesc: 'Foundational ML, MLOps, Personalization, recommendation systems, process automations, Gen AI',
                    link:'/aiml'
                },
            ],
            linkpage: '/dataengineering'
        },
        {
            logo: 'fa-solid fa-code',
            mainheader: 'Engineering',
            maindesc: 'Bring your software vision to life with our unique engineering solutions for a connected world',
            classname: 'homesection3cardsubcard',
            subcard: [
                {
                    subcardheader: 'Software Development',
                    subcarddesc: 'SaaS, Enterprise portals, Web portals, rapid prototyping, progressive apps',
                    link:'/softwaredevelopment'
                },
                {
                    subcardheader: 'Modernization',
                    subcarddesc: 'Re-architecture, technology roadmap, cost optimization, platform selection',
                    link:'/modernization'
                },
                {
                    subcardheader: 'Cloud Native Apps',
                    subcarddesc: 'Cloud native architecture, containerization, microservices, DevOps and managed cloud',
                    link:'/cloudnative'
                },
                {
                    subcardheader: 'Enterprise Integrations',
                    subcarddesc: 'ERP, CRM, SCM and other API-led system integrations and customizations',
                    link:'/integration'
                },
            ],
            linkpage: '/softwaredevelopment'
        },
        {
            logo: 'fa-solid fa-medal',
            mainheader: 'Enterprise Applications',
            maindesc: 'Unlocking enterprise application adoption for intelligent enterprises',
            classname: 'homesection3cardsubcard',
            subcard: [
                {
                    subcardheader: 'SAP S/4 HANA',
                    subcarddesc: 'Implementation, integration, and managed operations support for SAP S4/HANA core modules',
                    link:'/saps4hana'
                },
            ],
            linkpage: '/saps4hana'
        },
        {
            logo: 'fa-brands fa-medapps',
            mainheader: 'Digital Talent Solutions',
            maindesc: 'Supercharge your projects with our talent augmentation solutions for faster delivery',
            classname: 'homesection3cardsubcard2',
            subcard: [
                {
                    subcardheader: 'Digital Talent On Demand',
                    subcarddesc: 'Fuel innovations and experience faster delivery with top talent augmentation'
                },
            ],
            linkpage: '/digitaltalentsolutions'
        },
    ]
    
    return (
        <>
            <div className="homepagesection3maincontainer">
                <div className="homepagesection3mainheader">
                    <p>OUR SERVICES</p>
                </div>
                <div className="homepagesection3maindescription">
                    <p>Transform your business with advanced technologies</p>
                </div>
                <div className="homesection3cards">
                    {homesection3cards.map((item, index) => (
                        <div className="homesection3card">
                            <div className="homesection3cardheader">
                                <i className={item.logo}></i><p>{item.mainheader}</p>
                            </div>
                            <div className="homesection3carddescription">
                                <p>{item.maindesc}</p>
                            </div>
                            <div className="homesection3cardsubcards">
                                {item.subcard.map((item2, index2) => (
                                    <Link to={item2.link} className={item.classname}>
                                        <div className="homesection3cardsubcardheader">
                                            <p>{item2.subcardheader}</p>
                                        </div>
                                        <div className="homesection3cardsubcarddescription">
                                            <p>{item2.subcarddesc}</p>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                            <div className="homepagesection2buttoncontainer" style={{ marginTop: '3vh' }}>
                                <Link to={item.linkpage} className="homepagesection2whowearebtn">
                                    <p>Explore more</p><i className="fa-solid fa-arrow-right-long"></i>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
