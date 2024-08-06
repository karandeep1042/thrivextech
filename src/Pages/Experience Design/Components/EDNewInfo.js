import React,{useEffect} from 'react'
import '../../../New css/Experience Design/EDNewInfo.css'
import img1 from '../../../New Resources/Experience Design/EDInfo.png'

export default function EDNewInfo() {

    const serviceslist = [
        {
            header: "UX Research",
            desc: "Dive deep into product usage, analyzing client offerings and customer behavior to identify areas for enhancement."
        },
        {
            header: "Interaction Design",
            desc: "Craft tailored interactions to meet user needs, ensuring a seamless brand experience."
        },
        {
            header: "Design Strategy",
            desc: "Balance aesthetics with business objectives, aligning designs with brand persona."
        },
        {
            header: "Service Design",
            desc: "Optimize touchpoints by breaking down service processes to deliver customized experiences."
        },
        {
            header: "Data Visualisation",
            desc: "Create compelling visualizations that simplify complex data, making it actionable."
        },
        {
            header: "Visual Design",
            desc: "Elevate digital product appeal and usability, guiding customers through a unique brand narrative."
        },
        {
            header: "Customer Experience",
            desc: "Shape every aspect of the customer journey with customer-centric designs, fostering lasting connections from awareness to retention."
        },
    ]

    const serviceslist2 = [
        {
            header: "User Experience (UX)",
            desc: "Focuses on the individual user's interaction with a product or service, ensuring it is intuitive, efficient, and enjoyable."
        },
        {
            header: "Customer Experience (CX)",
            desc: "Encompasses the entire journey a customer takes with a brand, from initial contact to post-purchase support, aiming to create a positive and lasting impression."
        },
    ]

    return (
        <>
            <div className="ednewinfomaincontainer" >
                <div className="ednewinfodiv1">
                    <div className="ednewinfomainheader">
                        <p>UX vs. CX: Understanding the Difference</p>
                    </div>
                    <div className="ednewinfomainlists">
                        {serviceslist2.map((item, index) => (
                            <div className="ednewinfomainlist" key={index}>
                                <div className="ednewinfomainlistheader">
                                    <p>{item.header}</p>
                                </div>
                                <div className="ednewinfomainlistdesc">
                                    <p>{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="ednewinfodiv2">
                    <img src={img1} id='ednewinfoimg' alt="" />
                </div>
            </div>
        </>
    )
}
