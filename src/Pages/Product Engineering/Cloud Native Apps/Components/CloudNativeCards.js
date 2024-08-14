import React, { useEffect, useRef } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import img1 from '../../../../New Resources/Product Engineering/Cloud Native/logo1.png'
import img2 from '../../../../New Resources/Product Engineering/Cloud Native/logo2.png'
import img3 from '../../../../New Resources/Product Engineering/Cloud Native/logo3.png'
import img4 from '../../../../New Resources/Product Engineering/Cloud Native/logo4.png'
import '../../../../New css/CardSlider/CardSlider.css'
import { FadeUp } from '../../../Animations/Animations';

export default function CloudNativeCards() {
    const cardsinfo2 = [
        {
            logo: img1,
            head: 'Microservices Architecture',
            desc1: 'Transforming Challenges into Insights',
            desc: 'Develop applications as collections of small, independently deployable services managed by dedicated teams.'
        },
        {
            logo: img2,
            head: 'Containerization',
            desc1: 'Modernize Your Data Infrastructure',
            desc: 'Use containers to isolate microservices, ensuring high accessibility, scalability, and portability across environments.'
        },
        {
            logo: img3,
            head: 'Cloud Infrastructure',
            desc1: 'Build a Strong Data Foundation for Your Data Strategy',
            desc: "Utilize storage, virtualization, and orchestration tools to support cloud-native computing."
        },
        {
            logo: img4,
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
        let maxHeight=0;

        for (let i = 0; i < elements.length; i++) {
            const element = elements[i];    
            if(element.clientHeight>maxHeight){
                maxHeight=element.clientHeight
            }
        }

        for (let i = 0; i < elements.length; i++) {
            const element = elements[i];
            element.style.height=`${maxHeight+20}px`
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
                            <p>Cloud Native Development Services</p>
                        </div>
                        <div className="dataenginfomainsubhead" >
                            <p>Harness the Power of the Cloud for Superior Business Results:</p>
                        </div>
                        <div className="dataenginfomaindesc" >
                            <p>Cloud-native development promotes rapid software delivery, efficient resource utilization, and alignment with business objectives. Thrivex uses containerization, microservices, and DevOps practices to transform your operations and development processes.</p>
                        </div>
                        <div className="dataenginfomainsubhead">
                            <p>Core Components of the Cloud Native Development:</p>
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
            </FadeUp>
        </>
    )
}
