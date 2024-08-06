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

export default function SWdevcards() {
    const cardsinfo2 = [
        {
            logo: img3,
            head: 'Architecture Design',
            desc1: 'Transforming Challenges into Insights',
            desc: 'From concept to execution, we offer end-to-end solutions tailored to your needs. Our architects collaborate closely with you to design, build, and maintain functional technology solutions. Serving as the bridge between your business and technology stakeholders, we translate business requirements into robust technical architecture that disrupts the market and continually drives business value.'
        },
        {
            logo: img4,
            head: 'Application Development',
            desc1: 'Modernize Your Data Infrastructure',
            desc: 'From concept to execution, we offer end-to-end solutions tailored to your needs. Our architects collaborate closely with you to design, build, and maintain functional technology solutions. Serving as the bridge between your business and technology stakeholders, we translate business requirements into robust technical architecture that disrupts the market and continually drives business value.'
        },
        {
            logo: img2,
            head: 'Progressive Apps',
            desc1: 'Build a Strong Data Foundation for Your Data Strategy',
            desc: "We help clients in developing progressive web apps that prioritize fast and reliable user experiences across various networks and devices. Leveraging modern APIs, we ensure your web applications are consistently dependable and capable, regardless of the usage environment."
        },
        {
            logo: img3,
            head: 'Rapid Prototyping and Innovation',
            desc1: 'Transforming Challenges into Insights',
            desc: 'Stay ahead of the competition by seizing opportunities promptly. Our team of software application development experts utilizes rapid prototyping to efficiently bring concepts from idea to implementation. Through iterative development and rigorous testing, we empower you to confidently and efficiently deploy new products.'
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
                        <div id="swdevcard" className="slidercard">
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
