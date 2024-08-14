import React, { useEffect, useRef } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import img1 from '../../../../Images/Data & AI/AI & ML/Picture1.png'
import img2 from '../../../../Images/Data & AI/AI & ML/Picture2.png'
import img3 from '../../../../Images/Data & AI/AI & ML/Picture3.png'
import img4 from '../../../../Images/Data & AI/AI & ML/Picture4.png'
import '../../../../New css/CardSlider/CardSlider.css'
import { FadeUp } from '../../../Animations/Animations';

export default function AIMLCards() {

    const cardsinfo2 = [
        {
            logo: img1,
            head: 'Foundational ML',
            desc1: 'Build a Strong Data Foundation for Your Data Strategy',
            desc: 'Utilize foundational ML algorithms for pricing optimization, consumer segmentation, analysis & prediction, and inventory forecasting'
        },
        {
            logo: img2,
            head: 'MLOps',
            desc1: 'Transforming Challenges into Insights',
            desc: 'Streamline deployment of ML models with automated CI/CD pipelines, real-time monitoring, scalability solutions, and governance frameworks'
        },
        {
            logo: img3,
            head: 'Advanced AI',
            desc1: 'Modernize Your Data Infrastructure',
            desc: 'Harness deep learning for OCR, NLP, computer vision, text summarization, chatbots, and real-time inferencing'
        },
        {
            logo: img4,
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
                <div className="slider-container"  >
                    <div className="dataenginfodiv1" >
                        <div className="dataenginfomainheader">
                            <p>Our Services</p>
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
