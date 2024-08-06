import React, { useRef } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import img1 from '../../../New Resources/Experience Design/logo1.png'
import img2 from '../../../New Resources/Experience Design/logo2.png'
import img3 from '../../../New Resources/Experience Design/logo3.png'
import img4 from '../../../New Resources/Experience Design/logo4.png'
import img5 from '../../../New Resources/Experience Design/logo5.png'
import img6 from '../../../New Resources/Experience Design/logo6.png'
import img7 from '../../../New Resources/Experience Design/logo7.png'
import '../../../New css/CardSlider/CardSlider.css'

export default function QlikCards() {
    const cardsinfo2 = [
        {
            logo: img3,
            head: 'Dashboard and Report Development',
            desc1: 'Transforming Challenges into Insights',
            desc: 'We specialize in creating and optimizing dashboards and reports that provide insightful, actionable intelligence. Our services include report tuning and troubleshooting, consolidation, and distribution across various devices, ensuring mobile compatibility and seamless user experiences.'
        },
        {
            logo: img4,
            head: 'Qlik Playbook',
            desc1: 'Modernize Your Data Infrastructure',
            desc: 'Receive a customized best practice guide that covers workspace administration, data integration, UI design, and project methodology. This playbook ensures your environment is configured for long-term success.'
        },
        {
            logo: img2,
            head: 'Migration Services',
            desc1: 'Build a Strong Data Foundation for Your Data Strategy',
            desc: "Transition smoothly from legacy BI platforms to Qlik with minimal disruption. Our custom migration plans focus on retaining essential content while optimizing performance."
        },
        {
            logo: img3,
            head: 'Health Check',
            desc1: 'Transforming Challenges into Insights',
            desc: 'Evaluate and enhance your Qlik environment with detailed recommendations for improving performance, scalability, and user adoption. Our health checks cover architecture, tool usage, and feature utilization.'
        },
        {
            logo: img4,
            head: 'Training and Mentoring',
            desc1: 'Modernize Your Data Infrastructure',
            desc: 'Equip your team with the knowledge needed to succeed with Qlik through classroom training, eLearning, mentoring, webinars, seminars, and user adoption plans.'
        },
        {
            logo: img2,
            head: 'SaaS Deployment',
            desc1: 'Build a Strong Data Foundation for Your Data Strategy',
            desc: 'Maximize the benefits of Qlik Sense SaaS with our expert deployment services. We establish your tenant, identify data flow, and set up best practices for a successful platform launch.'
        },
        {
            logo: img4,
            head: 'Data Integration',
            desc1: 'Modernize Your Data Infrastructure',
            desc: 'Strengthen your analytics infrastructure with our data integration services. Leverage Qlik’s leading CDC data integration platform to enhance your data journey.'
        },
    ]

    let sliderRef = useRef(null);
    const next = () => {
        sliderRef.slickNext();
    };
    const previous = () => {
        sliderRef.slickPrev();
    };

    const settings = {
        className: "center",
        centerMode: true,
        centerPadding: '0px',
        infinite: true,
        slidesToShow: 3,
        speed: 500,
    };

    return (
        <>
            <div className="slider-container" style={{ width: '65vw', margin: 'auto' }} >
                <div className="dataenginfodiv1" style={{ marginBottom: '3vh' }}>
                    <div className="dataenginfomainheader">
                        <p>Our Services</p>
                    </div>
                </div>
                <Slider ref={slider => {
                    sliderRef = slider;
                }} {...settings}>
                    {cardsinfo2.map((option, index) => (
                        <div id="qlikcard" className="slidercard">
                            <div className="slidercardsection1">
                                <div className="slidercardlogo">
                                    <img src={option.logo} alt="" />
                                </div>
                                <div className="slidercardheader">
                                    <p>{option.head}</p>
                                </div>
                            </div>
                            <div className="slidercardsection2">
                                <div className="slidercarddesc">
                                    {/* <b style={{ marginBottom: '1.5vh' }}>{option.desc1}</b> */}
                                    <p>{option.desc}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
                <div style={{ textAlign: "center" }}>
                    <div className="slider-buttons">
                        <i id="leftslidebtn" class="fa-solid fa-chevron-left leftslidebtn" onClick={previous}></i>
                        <i id="rightslidebtn" class="fa-solid fa-chevron-right rightslidebtn" onClick={next}></i>
                    </div>
                </div>
            </div>
        </>
    )
}
