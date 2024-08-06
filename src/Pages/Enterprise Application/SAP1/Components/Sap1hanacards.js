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

export default function Sap1hanacards() {
    const cardsinfo2 = [
        {
            logo: img2,
            head: 'Lead to Cash (L2C)',
            desc1: 'Build a Strong Data Foundation for Your Data Strategy',
            desc: 'The Lead to Cash (L2C) solutions offered by SAP offer a full range of integrated tools specifically designed to manage lead generation, sales, invoicing, and collections activities. These technologies are designed to maximize revenue, improve client lifecycle management, and streamline sales operations. They offer total control over the whole process from client acquisition to revenue generation, integrating smoothly with other systems like inventory and financial administration. As a result, SAP streamlines the lead-to-cash procedure, guaranteeing effectiveness and providing insightful data on sales operations.'
        },
        {
            logo: img3,
            head: 'Design to Operate (D2O)',
            desc1: 'Transforming Challenges into Insights',
            desc: 'Design to Operate (D2O) from SAP provides integrated capabilities for supply chain, operations management, product design, and production planning, covering the entire product lifecycle. Through the use of cutting-edge technology like AI and IoT, these solutions improve productivity, profitability, and quality. D2O promotes product design and manufacturing agility, inventory optimization, lead time reduction, prompt delivery, and consistent quality assurance, all of which enhance customer satisfaction as well as align with sustainability goals.'
        },
        {
            logo: img4,
            head: 'Source to Pay (S2P)',
            desc1: 'Modernize Your Data Infrastructure',
            desc: 'SAPs Source-to-Pay (S2P) solutions digitize the entire procurement process, spanning from need identification to payment. These solutions are designed to enhance efficiency, productivity, and transparency by automating repetitive tasks and improving inventory management. Additionally, SAPs S2P facilitates better collaboration with suppliers, consolidates purchases to enhance performance, conducts spend analysis, and ultimately drives business value.'
        },
        {
            logo: img2,
            head: 'Recruit-to-Retire (R2R)',
            desc1: 'Build a Strong Data Foundation for Your Data Strategy',
            desc: "SAPs Recruit-to-Retire (R2R) solutions oversee the complete employee lifecycle, from recruitment to retirement. These solutions facilitate recruitment processes, streamline onboarding, manage performance, support skills development, administer compensation and benefits, and facilitate succession planning. Furthermore, they ensure smooth integration across different SAP modules, thereby enhancing workforce management, payroll, and retirement planning, which includes managing travel and expense reports."
        },
        {
            logo: img3,
            head: 'Record to Report (R2R)',
            desc1: 'Transforming Challenges into Insights',
            desc: 'SAPs Record-to-Report (R2R) solutions effectively manage the full spectrum of financial transactions, from inception to reporting. These tools streamline tasks like general ledger accounting, accounts receivable and payable, asset management, financial analysis, and reporting. R2R solutions deliver real-time visibility into financial data, facilitating better decision-making and regulatory adherence, while also reducing inaccuracies and expediting financial closing procedures.'
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
                        <p>Core Business Processes Optimized with SAP S/4 HANA</p>
                    </div>
                </div>
                <Slider ref={slider => {
                    sliderRef = slider;
                }} {...settings}>
                    {cardsinfo2.map((option, index) => (
                        <div id="s4hanacard" className="slidercard">
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
