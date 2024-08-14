import React from 'react'
import '../../../css/Digital Talent Solutions/Dtshero.css'
import { FadeUp } from '../../Animations/Animations'

export default function DtsHero() {
    return (
        <>
            <div className="dataengheromaincontainer">
                <div className="dataengherodiv1">
                    <div className="dataengherodiv1childcontainer">
                        <div className="dataengheromainheader">
                            <p>NextGen <i className="fa-solid fa-angle-right"></i> Digital Talent Solutions</p>
                        </div>
                        <div className="dataengheromainsubheader">
                            <p>Building Your Dream Tech Team - Faster & Smarter</p>
                        </div>
                    </div>
                </div>
                <FadeUp>
                    <div className="dataengherodiv2">
                        <div className="dataengherolists">
                            <div className="dataengherolist" style={{ marginBottom: '6vh' }}>
                                <div className="dataengheromaindesc">
                                    <p>Finding the perfect tech talent to drive your business forward is a struggle in today's dynamic market. Thrivex Technologies offers comprehensive Talent Augmentation Services to bridge your digital talent gap. We provide rapid access to skilled IT professionals who seamlessly integrate into your team, delivering exceptional results. </p>
                                </div>
                            </div>
                            <div className="dataengherolist">
                                <div className="dataengherolistheader" style={{ marginBottom: '3vh' }}>
                                    <p>Our Unparalleled Service Approach</p>
                                </div>
                                <div className="dataenginfomainsubhead" style={{ color: '#0eaae3' }}>
                                    <p>Swift Talent Acquisition</p>
                                </div>
                                <div className="dataengherolistdesc">
                                    <p>Our streamlined process ensures you find the right talent quickly, without compromising quality.</p>
                                </div>
                            </div>
                            <div className="dataengherolist">
                                <div className="dataenginfomainsubhead" style={{ color: '#0eaae3' }}>
                                    <p>Deep Skill Match</p>
                                </div>
                                <div className="dataengherolistdesc">
                                    <p>We go beyond traditional recruitment by aligning candidates' skills and experience precisely with your project requirements.</p>
                                </div>
                            </div>
                            <div className="dataengherolist">
                                <div className="dataenginfomainsubhead" style={{ color: '#0eaae3' }}>
                                    <p>Flexible Engagement Models</p>
                                </div>
                                <div className="dataengherolistdesc">
                                    <p>Choose from various engagement options to suit your project needs, whether it's short-term, long-term, or project-based.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </FadeUp>
            </div>
        </>
    )
}
