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

export default function IntegrationInfo() {

    const cardsinfo2 = [
        {
            logo: img3,
            head: 'API-Led Integration ',
            desc1: 'Transforming Challenges into Insights',
            desc: 'Our API solutions synchronize data, boost productivity, and drive revenue. Using off-the-shelf tools or customized frameworks, we tailor solutions to your business needs. Our API-led approach connects disparate technologies through reusable services, enhancing automation, security, and efficiency while reducing costs and improving partner interactions.'
        },
        {
            logo: img4,
            head: 'Data Integration ',
            desc1: 'Modernize Your Data Infrastructure',
            desc: 'Achieve platform independence with seamless data integration, consolidating diverse data sources to support informed decision-making. This unified approach drives business growth by leveraging comprehensive insights, enhancing agility to adapt to evolving needs, and fostering innovation through advanced technologies.'
        },
        {
            logo: img2,
            head: 'Enterprise App Integration',
            desc1: 'Build a Strong Data Foundation for Your Data Strategy',
            desc: "Implement real-time, message-based integration between applications to streamline IT landscapes, automate processes, and minimize redundancies. This enhances operational efficiency and simplifies management, ensuring smoother business operations."
        },
        {
            logo: img3,
            head: 'SaaS Platform Integration ',
            desc1: 'Transforming Challenges into Insights',
            desc: 'Integrate cloud applications with on-premises systems to ensure robust data governance while providing enhanced access, flexibility, and scalability. This integration empowers businesses to leverage cloud advantages while maintaining control over critical data and adapting swiftly to changing business requirements.'
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
                        <p>Our Integration Services</p>
                    </div>
                </div>
                <Slider ref={slider => {
                    sliderRef = slider;
                }} {...settings}>
                    {cardsinfo2.map((option, index) => (
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
