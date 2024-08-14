import React from 'react'
import { FadeRight, FadeLeft, FadeUp, FadeDown, SlideUp } from '../../Animations/Animations';
import '../../../New css/Experience Design/EDFAQ.css'

export default function EDqanda() {

    const qandainfo = [
        {
            question: '1.	What are experience design services?',
            answer: 'Experience design services focus on creating user-centric products that provide seamless and engaging experiences for end users. These services include user research, UX/UI design, prototyping, design sprints, and developing design systems that help businesses create meaningful interactions, consistent interfaces, and smooth customer journeys.'
        },
        {
            question: '2.	Is experience design the same as UX?',
            answer: 'Experience design is a broader term that includes UX (User Experience) design, UI (User Interface) design, and other aspects of product design. While UX primarily focuses on understanding user needs and behaviours to create user-friendly solutions, experience design goes beyond this to ensure the entire customer journey is enjoyable, engaging, and consistent across all touchpoints.'
        },
        {
            question: '3.	Why are UX services important?',
            answer: 'UX services are crucial because they help businesses understand their users, identify pain points, and create solutions that meet their needs. By focusing on UX, companies can design products that delight customers, increase user adoption, boost customer satisfaction, and ultimately drive business growth.'
        },
        {
            question: '4.	What are design sprints?',
            answer: 'Design sprints are an iterative process that allows businesses to quickly solve problems and validate ideas through design, prototyping, and testing. Typically conducted over a period of two weeks, design sprints help teams identify critical issues, brainstorm solutions, create prototypes, and gather user feedback to refine and improve the product before significant resources are invested in development.'
        },
        {
            question: '5.	What is a design system, and why is it important?',
            answer: "A design system is a collection of reusable components, guidelines, and standards that ensure consistency across a product's interface. It is important because it helps maintain a cohesive look and feel, improves efficiency by streamlining the design and development process, and ensures that the user experience is uniform and predictable across different platforms and touchpoints."
        },
        {
            question: "6.	How is Thrivex's experience design process different?",
            answer: 'Thrivex takes a design-first approach, prioritizing user-centric solutions and leveraging our expertise to craft seamless customer journeys. This holistic approach delivers customized, engaging experiences that drive business results and build loyalty.'
        },
        {
            question: '7.	How does user research contribute to experience design?',
            answer: "User research is a foundational component of experience design. It involves gathering insights about users' needs, behaviors, and pain points through methods like interviews, surveys, and usability testing. This information guides the design process, ensuring that the final product is aligned with user expectations and delivers a satisfying experience."
        }
    ]

    const toggleAccordion = (e) => {
        const faqs = document.querySelectorAll('.accordionicon');
        const faqsans = document.querySelectorAll('.edqandaanswer');

        faqsans[e].classList.toggle("edqandaansweractive");
        faqs[e].classList.toggle("accordioniconrotate");
        if (!faqs[e].className.includes("edqandaansweractive")) {
            faqs[e].classList.add("edqandaansweractive");
            faqs[e].style.transform = "rotate(180deg)";
        } else {
            faqs[e].classList.remove("edqandaansweractive");
            faqs[e].style.transform = "rotate(0deg)";
        }
    }

    return (
        <>
            <div className="dataenginfomaincontainer">
                <div className="dataenginfochildcontainer">
                    <SlideUp>
                        <div className="dataenginfomainheader">
                            Got questions? We’ve got answers!
                        </div>
                    </SlideUp>
                    <div className="edqandachildcontainer">
                        {qandainfo.map((item, index) => (
                            <SlideUp>
                                <div className="edqandacontainer" onClick={() => { toggleAccordion(index) }} >
                                    <div className="edqandaquestion" >
                                        <p>{item.question}</p>
                                        <i className="fa-solid fa-angle-down accordionicon"></i>
                                    </div>
                                    <div className="edqandaanswer">
                                        <p>{item.answer}</p>
                                    </div>
                                </div>
                            </SlideUp>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

