import React, { useEffect } from 'react'
// import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../../../css/SAP BTP/SapbtpCards1.css';
import '../../../New css/CardSlider/CardSlider.css'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Pagination, Navigation, EffectCoverflow } from 'swiper/modules';

export default function SapbtpCards1() {

    const cardsinfo = [
        {
            title: 'Database & Data Management',
            desc1: 'Everything you need to flexibly and efficiently store, access, process, integrate, and interpret all relevant data in your landscape through a singular view and at the speed your business demands.',
            desc2: "SAP HANA, SAP HANA Cloud, SAP Data Warehouse Cloud"
        },
        {
            title: 'Analytics',
            desc1: "Plan and forecast, make rapid decisions, and truly become insight driven. Quickly bring data together from internal and external sources to enable identification of anomalies and key performance drivers.",
            desc2: "SAP Analytics Cloud, SAP Data Warehouse Cloud, SAP BW/4HANA, and others"
        },
        {
            title: 'Application Development & Integration',
            desc1: "Tools for agile business process innovation, extension, and integration in the cloud and across hybrid scenarios. Integrate systems, extend current applications, or create new point solutions.",
            desc2: "SAP Extension Suite, SAP Integration Suite"
        },
        {
            title: 'Intelligent Technologies',
            desc1: "AI, machine learning, and IoT are getting embedded into everything, enabling automation of complex business processes and integration of disparate solutions",
            desc2: "SAP Intelligent Robotic Process Automation (SAP Intelligent RPA), SAP Business AI Services"
        },
    ];


    return (
        <>
            <div className='sapbtpcards1maincontainer'>
                <div className='sapbtpcardsheader'>
                    More Than a Platform-As-A-Service
                </div>
                <div className='sapbtpcards'>
                    <div className="card-slider-container">
                        <div className="card-slider">
                            <Swiper
                                effect='coverflow'
                                centeredSlides={true}
                                slidesPerView={3}
                                spaceBetween={30}
                                loop={true}

                                coverflowEffect={{
                                    rotate: 0,
                                    stretch: 0,
                                    depth: 60,
                                    modifier: 1,
                                    slideShadows: false
                                }}
                                navigation={{
                                    nextEl: '.rightslidebtn',
                                    prevEl: '.leftslidebtn'
                                }}
                                modules={[EffectCoverflow, Pagination, Navigation]}
                                className="mySwiper"
                                wrapperTag='swiperwrapper'
                            // style={{transform: translate3d(-371.667px, 0px, 0px)}}
                            >
                                {cardsinfo.map((option, index) => (
                                    
                                    <SwiperSlide SwiperSlide className = "card card-enter" key = { index } >
                                    <div className='sapbtpcard'>
                                        <div className='sapbtpheadersection'>
                                            <div className='sapbtpheadersectionin'>
                                                {option.title}
                                            </div>
                                        </div>
                                        <div className='sapdescription'>
                                            <div className="sapdescription1">
                                                {option.desc1}
                                            </div>
                                            <div className="sapdescription2">
                                                <b>Products include: </b>
                                                {option.desc2}
                                            </div>
                                        </div>
                                    </div>
                                    </SwiperSlide>
                                ))}
                            <div className="slider-buttons">
                                <i id="leftslidebtn" class="fa-solid fa-chevron-left leftslidebtn"></i>
                                <i id="rightslidebtn" class="fa-solid fa-chevron-right rightslidebtn"></i>
                            </div>
                        </Swiper>
                    </div>
                </div>
            </div>
        </div >
        </>
    )
}
