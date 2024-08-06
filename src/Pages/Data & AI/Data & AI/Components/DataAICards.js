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

export default function DataAICards() {

    const cardsinfo2 = [
        {
            logo: img2,
            head: 'Foundational ML',
            desc1: 'Build a Strong Data Foundation for Your Data Strategy',
            desc: 'Utilize foundational ML algorithms for pricing optimization, consumer segmentation, analysis & prediction, and inventory forecasting'
        },
        {
            logo: img3,
            head: 'MLOps',
            desc1: 'Transforming Challenges into Insights',
            desc: 'Streamline deployment of ML models with automated CI/CD pipelines, real-time monitoring, scalability solutions, and governance frameworks'
        },
        {
            logo: img4,
            head: 'Advanced AI',
            desc1: 'Modernize Your Data Infrastructure',
            desc: 'Harness deep learning for OCR, NLP, computer vision, text summarization, chatbots, and real-time inferencing'
        },
        {
            logo: img2,
            head: 'Generative AI',
            desc1: 'Build a Strong Data Foundation for Your Data Strategy',
            desc: "Create tailored content, designs, and solutions using industry-specific data for enhanced business outcomes"
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
                <Slider ref={slider => {
                    sliderRef = slider;
                }} {...settings}>
                    {cardsinfo2.map((option, index) => (
                        <div id="insightanalyticscard" className="slidercard">
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
