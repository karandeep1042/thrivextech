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

export default function Modernizationcards() {
    const cardsinfo2 = [
        {
            logo: img3,
            head: 'Business Architecture',
            desc1: 'Transforming Challenges into Insights',
            desc: 'Future-proof your operations and sharpen your competitive edge with our business architecture services.'
        },
        {
            logo: img4,
            head: 'Technology Roadmap',
            desc1: 'Modernize Your Data Infrastructure',
            desc: 'Ensure your transformation projects stay within budget and on time. We develop a roadmap that aligns seamlessly with your vision and goals.'
        },
        {
            logo: img2,
            head: 'Economic Platforms',
            desc1: 'Build a Strong Data Foundation for Your Data Strategy',
            desc: "Develop and build high-performing, scalable platforms that revolutionize workflows, enhance capabilities, and deliver superior customer experiences."
        },
        {
            logo: img3,
            head: 'Cost Optimization',
            desc1: 'Transforming Challenges into Insights',
            desc: 'Maximize ROI by optimizing costs during the transition of legacy applications into modernized systems.'
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
                        <p>Our Application Modernization Services</p>
                    </div>
                </div>
                <Slider ref={slider => {
                    sliderRef = slider;
                }} {...settings}>
                    {cardsinfo2.map((option, index) => (
                        <div id="" className="slidercard">
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
