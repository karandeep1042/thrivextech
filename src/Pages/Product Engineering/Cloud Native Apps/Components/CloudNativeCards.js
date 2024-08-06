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

export default function CloudNativeCards() {
    const cardsinfo2 = [
        {
            logo: img3,
            head: 'Microservices Architecture',
            desc1: 'Transforming Challenges into Insights',
            desc: 'Develop applications as collections of small, independently deployable services managed by dedicated teams.'
        },
        {
            logo: img4,
            head: 'Containerization',
            desc1: 'Modernize Your Data Infrastructure',
            desc: 'Use containers to isolate microservices, ensuring high accessibility, scalability, and portability across environments.'
        },
        {
            logo: img2,
            head: 'Cloud Infrastructure',
            desc1: 'Build a Strong Data Foundation for Your Data Strategy',
            desc: "Utilize storage, virtualization, and orchestration tools to support cloud-native computing."
        },
        {
            logo: img3,
            head: 'DevOps Culture',
            desc1: 'Transforming Challenges into Insights',
            desc: 'Integrate development and operations teams for rapid, consistent software development and deployment.'
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
                        <p>Cloud Native Development Services</p>
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
