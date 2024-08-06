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

export default function InsightsAnalyticsCards() {
    const cardsinfo2 = [
        {
            logo: img2,
            head: 'Data Storytelling',
            desc1: 'Build a Strong Data Foundation for Your Data Strategy',
            desc: 'Business agility is key to success. With modern tools and exponentially growing data, distilling insights relevant to your business is achievable. Crafting compelling narratives allows you to interpret complex data swiftly, accelerating the journey from insight to value. As your trusted BI consultants, We collaborate with you to unveil business stories that are relevant, simple, and accessible, reducing the time to insight.'
        },
        {
            logo: img3,
            head: 'Data Visualization',
            desc1: 'Transforming Challenges into Insights',
            desc: 'Transforming vast data ecosystems into actionable insights poses a significant challenge. Leveraging our expertise in product development and top-tier UX capabilities, our BI consultants assist you in creating intelligent and impactful data visualizations. Enhance your ability to identify relationships and patterns, understand behaviors, and effectively communicate these insights to broader audiences.'
        },
        {
            logo: img4,
            head: 'Self-Service Enablement',
            desc1: 'Modernize Your Data Infrastructure',
            desc: 'Navigating the vast array of technological options can be daunting. Our BI consultants collaborate closely with you to understand your unique business needs and recommend tailored solutions. With our in-depth knowledge of various tools and technologies, we ensure optimal tech adoption aligned with your strategic objectives.'
        },
        {
            logo: img2,
            head: 'Operational Reporting',
            desc1: 'Build a Strong Data Foundation for Your Data Strategy',
            desc: "Data offers invaluable insights into daily operations and future possibilities. Through 'what-if' analysis, We help you anticipate and plan for future scenarios, enabling proactive decision-making and better preparedness for upcoming challenges."
        },
        {
            logo: img3,
            head: 'What-If Analysis and Planning',
            desc1: 'Transforming Challenges into Insights',
            desc: 'While self-service capabilities are prevalent in the BI market, their successful implementation hinges on data literacy and culture. We transcend traditional governance and security protocols by fostering a self-service culture tailored to your business needs. Through collaboration and targeted training, we empower your workforce to independently harness data, ensuring long-term effectiveness.'
        },
        {
            logo: img4,
            head: 'Technology Recommendation',
            desc1: 'Modernize Your Data Infrastructure',
            desc: 'Modernize your data infrastructure with our comprehensive cloud data services. Whether migrating from legacy systems or integrating modern frameworks, leverage our in-house tools to enhance performance and streamline data management. Our proficiency in data migration frameworks and governance tools ensures a seamless transition to a modern data platform. Benefit from optimized data operations while minimizing disruption and maximizing efficiency.'
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
