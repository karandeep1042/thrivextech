import React, { useEffect, useRef, useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import img1 from '../../New Resources/SAPBTP/Picture1.png'
import img2 from '../../New Resources/SAPBTP/Picture2.png'
import img3 from '../../New Resources/SAPBTP/Picture3.png'
import img4 from '../../New Resources/SAPBTP/Picture4.png'
import { FadeUp } from '../Animations/Animations';

export default function CardSlider2() {

    const cardsinfo = [
        {
            logo: img1,
            head: 'Database & Data Management',
            desc: 'Everything you need to flexibly and efficiently store, access, process, integrate, and interpret all relevant data in your landscape through a singular view and at the speed your business demands.',
            desc2: 'SAP HANA, SAP HANA Cloud, SAP Data Warehouse Cloud'
        },
        {
            logo: img2,
            head: 'Analytics',
            desc: 'Plan and forecast, make rapid decisions, and truly become insight driven. Quickly bring data together from internal and external sources to enable identification of anomalies and key performance drivers.',
            desc2: 'SAP Analytics Cloud, SAP Data Warehouse Cloud, SAP BW/4HANA, and others'
        },
        {
            logo: img3,
            head: 'Application Development & Integration',
            desc: 'Tools for agile business process innovation, extension, and integration in the cloud and across hybrid scenarios. Integrate systems, extend current applications, or create new point solutions.',
            desc2: 'SAP Extension Suite, SAP Integration Suite'
        },
        {
            logo: img4,
            head: 'Intelligent Technologies',
            desc: 'AI, machine learning, and IoT are getting ezmbedded into everything, enabling automation of complex business processes and integration of disparate solutions',
            desc2: 'SAP HANA, SAP HANA Cloud, SAP Data Warehouse Cloud'
        }
    ];
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
                    <div className="dataenginfodiv1">
                        <div className="dataenginfomainheader">
                            <p>More Than a Platform-As-A-Service</p>
                        </div>
                    </div>
                    <Slider ref={slider => {
                        sliderRef = slider;
                    }} {...settings}>
                        {cardsinfo.map((option, index) => (
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
                                        <p style={{ marginTop: '3vh' }}><b>Products Include:</b>{option.desc2}</p>
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
    );
}
