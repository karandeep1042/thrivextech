import React from 'react'
import '../../../css/Home Page/HomeSection3.css'
import { Link } from 'react-router-dom'
import img1 from '../../../Images/Home Page/mainpc.png'
import img2 from '../../../Images/Home Page/Sec4logo/Picture1.png'
import img3 from '../../../Images/Home Page/Sec4logo/Picture2.png'
import img4 from '../../../Images/Home Page/Sec4logo/Picture3.png'
import img5 from '../../../Images/Home Page/Sec4logo/Picture4.png'
import img6 from '../../../Images/Home Page/Sec4logo/Picture5.png'
import { FadeIn, FadeUp, ScaleUp } from '../../Animations/Animations'

export default function HomeSection3() {

    const homesection3cards = [
        {
            logo: img2,
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
            logo: img3,
            mainheader: 'Data & AI',
            maindesc: 'Leverage the power of data & AI to drive decisions, enhance business efficiencies, and gain a competitive edge',
            classname: 'homesection3cardsubcard',
            subcard: [
                {
                    subcardheader: 'Data Engineering',
                    subcarddesc: 'Establish foundation, setup architecture, data modelling, ELT, data streaming and cloudification',
                    link: '/dataengineering'
                },
                {
                    subcardheader: 'Insights & Analytics',
                    subcarddesc: 'Data storytelling, visualizations, self service enablement, reporting and analysis, technology recommendations',
                    link: '/insightsanalytics'
                },
                {
                    subcardheader: 'AI/ML',
                    subcarddesc: 'Foundational ML, MLOps, Personalization, recommendation systems, process automations, Gen AI',
                    link: '/aiml'
                },
            ],
            linkpage: '/dataengineering'
        },
        {
            logo: img4,
            mainheader: 'Engineering',
            maindesc: 'Bring your software vision to life with our unique engineering solutions for a connected world',
            classname: 'homesection3cardsubcard',
            subcard: [
                {
                    subcardheader: 'Software Development',
                    subcarddesc: 'SaaS, Enterprise portals, Web portals, rapid prototyping, progressive apps',
                    link: '/softwaredevelopment'
                },
                {
                    subcardheader: 'Modernization',
                    subcarddesc: 'Re-architecture, technology roadmap, cost optimization, platform selection',
                    link: '/modernization'
                },
                {
                    subcardheader: 'Cloud Native Apps',
                    subcarddesc: 'Cloud native architecture, containerization, microservices, DevOps and managed cloud',
                    link: '/cloudnative'
                },
                {
                    subcardheader: 'Integrations',
                    subcarddesc: 'ERP, CRM, SCM and other API-led system integrations and customizations',
                    link: '/integration'
                },
            ],
            linkpage: '/softwaredevelopment'
        },
        {
            logo: img5,
            mainheader: 'Enterprise Applications',
            maindesc: 'Unlocking enterprise application adoption for intelligent enterprises',
            classname: 'homesection3cardsubcard',
            subcard: [
                {
                    subcardheader: 'SAP S/4 HANA',
                    subcarddesc: 'Implementation, integration, and managed operations support for SAP S4/HANA core modules',
                    link: '/saps4hana'
                },
            ],
            linkpage: '/saps4hana'
        },
        {
            logo: img6,
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
                <FadeUp>
                    <img src={img1} alt="" style={{ width: '100%', marginBottom: '3vh' }} />
                </FadeUp>
                <FadeUp>
                    <div className="homepagesection3mainheader">
                        <p>Capabilities</p>
                    </div>
                </FadeUp>
                <FadeUp>
                    <div className="homepagesection3maindescription">
                        <p>Transform your business with advanced technologies</p>
                    </div>
                </FadeUp>
                <div className="homesection3cards">
                    {homesection3cards.map((item, index) => (
                        <FadeUp>
                            <div className="homesection3card">
                                <div className="homesection3cardheader">
                                    <img src={item.logo} alt="" /><p>{item.mainheader}</p>
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
                                <div className="homepagesection2buttoncontainer" >
                                    <Link to={item.linkpage} className="homepagesection2whowearebtn">
                                        <p>Explore more</p><i className="fa-solid fa-arrow-right-long"></i>
                                    </Link>
                                </div>
                            </div>
                        </FadeUp>
                    ))}
                </div>
            </div >
        </>
    )
}
