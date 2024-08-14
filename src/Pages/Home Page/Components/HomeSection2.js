import React from 'react'
import '../../../css/Home Page/HomeSection2.css'
import { Link } from 'react-router-dom'
import { FadeUp } from '../../Animations/Animations'

export default function HomeSection2() {
    return (
        <>
            <div className="homepagesection2maincontainer">
                <FadeUp>
                    <div className="homepagesection2mainheader">
                        <p>We deliver innovative software and services, powered by AI and data, to transform businesses and drive growth.</p>
                    </div>
                </FadeUp>
                <FadeUp>
                    <div className="homepagesection2description">
                        <p>We are more than just a partner; we're your catalyst for digital transformation in the ever-evolving business and technology landscape. We leverage the power of experience design, data and AI to unlock the full potential of your organization. Our passionate team of experts collaborates with you to extract actionable insights from your data, crafting innovative solutions that streamline operations, elevate customer experiences, and ultimately propel data-driven business growth.</p>
                    </div>
                </FadeUp>
                <FadeUp>
                    <div className="homepagesection2buttoncontainer">
                        <Link to='/about' className="homepagesection2whowearebtn">
                            <p>Who we are</p><i className="fa-solid fa-arrow-right"></i>
                        </Link>
                    </div>
                </FadeUp>
            </div>
        </>
    )
}
