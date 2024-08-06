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

export default function EDNewCards() {

    const cardsinfo2 = [
        {
            logo: img1,
            head: 'UX Research',
            desc: 'Dive deep into product usage,analyzing client offerings and customer behaviour to identify areas for enhancement'
        },
        {
            logo: img2,
            head: 'Interaction Design',
            desc: 'Craft tailored interactions to meet user needs, ensuring a seamless brand experience.'
        },
        {
            logo: img3,
            head: 'Design Strategy',
            desc: 'Balance aesthetics with business objectives, aligning designs with brand persona.'
        },
        {
            logo: img4,
            head: 'Service Design',
            desc: 'Optimize touchpoints by breaking down service processes to deliver customized experiences.'
        },
        {
            logo: img5,
            head: 'Data Visualisation',
            desc: 'Create compelling visualizations that simplify complex data, making it actionable.'
        },
        {
            logo: img6,
            head: 'Visual Design',
            desc: 'Elevate digital product appeal and usability, guiding customers through a unique brand narrative.'
        },
        {
            logo: img7,
            head: 'Customer Experience',
            desc: 'Shape every aspect of the customer journey with customer-centric designs, fostering lasting connections from awareness to retention.'
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
                        <div className="slidercard" style={{ display: 'flex' }}>
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
