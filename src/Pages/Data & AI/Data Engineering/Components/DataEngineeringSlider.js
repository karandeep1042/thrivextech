import React, { useRef } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import img1 from '../../../../New Resources/Experience Design/logo1.png'
import img2 from '../../../../New Resources/Experience Design/logo2.png'
import img3 from '../../../../New Resources/Experience Design/logo3.png'
import img4 from '../../../../New Resources/Experience Design/logo4.png'
import img5 from '../../../../New Resources/Experience Design/logo5.png'
import img6 from '../../../../New Resources/Experience Design/logo6.png'
import img7 from '../../../../New Resources/Experience Design/logo7.png'
import '../../../../New css/CardSlider/CardSlider.css'

export default function DataEngineeringSlider() {

    const cardsinfo2 = [
        {
            logo: img2,
            head: 'Data Foundation',
            desc1: 'Build a Strong Data Foundation for Your Data Strategy',
            desc: 'Maximize the value of your data with our expert data engineering services. We specialize in managing and optimizing data to tailor bespoke solutions that align with your business goals. From data architecture design to implementation, ensure your data is organized, relevant, and reliable to tackle business challenges with confidence. Our expertise spans data modernization, data platform optimization, master data management, and robust data governance frameworks.'
        },
        {
            logo: img3,
            head: 'Big Data Analytics',
            desc1: 'Transforming Challenges into Insights',
            desc: 'Transform raw data challenges into actionable insights with our data analytics consulting services. We align your data architecture with business objectives using industry-leading practices, managing the entire lifecycle from data collection to processing. Harness vast and complex datasets to drive informed decisions and optimize operations, anticipating customer behavior changes effectively.'
        },
        {
            logo: img4,
            head: 'Cloud Data Services',
            desc1: 'Modernize Your Data Infrastructure',
            desc: 'Modernize your data infrastructure with our comprehensive cloud data services. Whether migrating from legacy systems or integrating modern frameworks, leverage our in-house tools to enhance performance and streamline data management. Our proficiency in data migration frameworks and governance tools ensures a seamless transition to a modern data platform. Benefit from optimized data operations while minimizing disruption and maximizing efficiency.'
        },
        {
            logo: img2,
            head: 'Data Foundation',
            desc1: 'Build a Strong Data Foundation for Your Data Strategy',
            desc: 'Maximize the value of your data with our expert data engineering services. We specialize in managing and optimizing data to tailor bespoke solutions that align with your business goals. From data architecture design to implementation, ensure your data is organized, relevant, and reliable to tackle business challenges with confidence. Our expertise spans data modernization, data platform optimization, master data management, and robust data governance frameworks.'
        },
        {
            logo: img3,
            head: 'Big Data Analytics',
            desc1: 'Transforming Challenges into Insights',
            desc: 'Transform raw data challenges into actionable insights with our data analytics consulting services. We align your data architecture with business objectives using industry-leading practices, managing the entire lifecycle from data collection to processing. Harness vast and complex datasets to drive informed decisions and optimize operations, anticipating customer behavior changes effectively.'
        },
        {
            logo: img4,
            head: 'Cloud Data Services',
            desc1: 'Modernize Your Data Infrastructure',
            desc: 'Modernize your data infrastructure with our comprehensive cloud data services. Whether migrating from legacy systems or integrating modern frameworks, leverage our in-house tools to enhance performance and streamline data management. Our proficiency in data migration frameworks and governance tools ensures a seamless transition to a modern data platform. Benefit from optimized data operations while minimizing disruption and maximizing efficiency.'
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
                <div className="dataenginfodiv1" style={{marginBottom:'3vh'}}>
                    <div className="dataenginfomainheader">
                        <p>Our Services</p>
                    </div>
                </div>
                <Slider ref={slider => {
                    sliderRef = slider;
                }} {...settings}>
                    {cardsinfo2.map((option, index) => (
                        <div id="decard" className="slidercard">
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
                                    <b style={{ marginBottom: '1.5vh' }}>{option.desc1}</b>
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
            </div >
        </>
    )
}
