import React, { useEffect, useRef } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import img1 from '../../../Images/Qlik/Picture1.png'
import img2 from '../../../Images/Qlik/Picture2.png'
import img3 from '../../../Images/Qlik/Picture3.png'
import img4 from '../../../Images/Qlik/Picture4.png'
import img5 from '../../../Images/Qlik/Picture5.png'
import img6 from '../../../Images/Qlik/Picture6.png'
import img7 from '../../../Images/Qlik/Picture7.png'
import '../../../New css/CardSlider/CardSlider.css'
import { FadeUp } from '../../Animations/Animations';

export default function QlikCards() {
    const cardsinfo2 = [
        {
            logo: img1,
            head: 'Dashboard and Report Development',
            desc1: 'Transforming Challenges into Insights',
            desc: 'We specialize in creating and optimizing dashboards and reports that provide insightful, actionable intelligence. Our services include report tuning and troubleshooting, consolidation, and distribution across various devices, ensuring mobile compatibility and seamless user experiences.'
        },
        {
            logo: img2,
            head: 'Qlik Playbook',
            desc1: 'Modernize Your Data Infrastructure',
            desc: 'Receive a customized best practice guide that covers workspace administration, data integration, UI design, and project methodology. This playbook ensures your environment is configured for long-term success.'
        },
        {
            logo: img3,
            head: 'Migration Services',
            desc1: 'Build a Strong Data Foundation for Your Data Strategy',
            desc: "Transition smoothly from legacy BI platforms to Qlik with minimal disruption. Our custom migration plans focus on retaining essential content while optimizing performance."
        },
        {
            logo: img4,
            head: 'Health Check',
            desc1: 'Transforming Challenges into Insights',
            desc: 'Evaluate and enhance your Qlik environment with detailed recommendations for improving performance, scalability, and user adoption. Our health checks cover architecture, tool usage, and feature utilization.'
        },
        {
            logo: img5,
            head: 'Training and Mentoring',
            desc1: 'Modernize Your Data Infrastructure',
            desc: 'Equip your team with the knowledge needed to succeed with Qlik through classroom training, eLearning, mentoring, webinars, seminars, and user adoption plans.'
        },
        {
            logo: img6,
            head: 'SaaS Deployment',
            desc1: 'Build a Strong Data Foundation for Your Data Strategy',
            desc: 'Maximize the benefits of Qlik Sense SaaS with our expert deployment services. We establish your tenant, identify data flow, and set up best practices for a successful platform launch.'
        },
        {
            logo: img7,
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
        dots: true,
        className: "center",
        centerMode: true,
        centerPadding: '0px',
        infinite: true,
        slidesToShow: 3,
        speed: 500,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
        ]
    };

    const calculateCardHeight = () => {
        let elements = document.getElementsByClassName('slidercard');
        let maxHeight = 0;

        for (let i = 0; i < elements.length; i++) {
            const element = elements[i];
            if (element.clientHeight > maxHeight) {
                maxHeight = element.clientHeight
            }
        }

        for (let i = 0; i < elements.length; i++) {
            const element = elements[i];
            element.style.height = `${maxHeight + 20}px`
        }
    }

    useEffect(() => {
        calculateCardHeight();
    }, [])

    return (
        <>
            <FadeUp>
                <div className="slider-container" >
                    <div className="dataenginfodiv1" >
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
            </FadeUp>
        </>
    )
}
