import React from 'react'
import img1 from '../../../Images/Career Page/img1.png'
import img2 from '../../../Images/Career Page/img2.png'
import '../../../css/Career/CareerInfo.css'
import { FadeLeft, FadeRight, FadeUp } from '../../Animations/Animations'

export default function CareerInfo() {
    return (
        <>
            <div className="dataenginfomaincontainer">
                <div className="dataenginfochildcontainer">
                    <FadeUp>
                        <div className="careerinfodiv1">
                            <div className="dataenginfomainheader">
                                <p>About Our Team</p>
                            </div>
                            <div className="dataenginfomaindesc">
                                <p>Our greatest asset is our people. We cultivate a team of skilled professionals who are always ready to tackle challenges head-on. <br /><br />

                                    At Thrivex, we pride ourselves on maintaining a flat organizational structure and a positive, upbeat workplace culture. Here, projects are approached with passion, and colleagues are treated with respect. Hard work is expected, and initiative and leadership are celebrated. <br /><br />

                                    Our consultants aren’t just colleagues, they’re family
                                </p>
                            </div>
                        </div>
                    </FadeUp>
                    <div className="careerinfodiv1">
                        <FadeUp>
                            <img src={img1} alt="" style={{ width: '100%', marginBottom: '8vh' }} />
                        </FadeUp>
                        <FadeUp>
                            <div className="dataenginfomainheader">
                                <p>Are you our Ideal Candidate?</p>
                            </div>
                            <div className="dataenginfomaindesc">
                                <p>We seek corporate athletes who can excel in various settings. While no two Thrivex consultants are alike—our diversity is crucial to our success—there are key attributes we look for in each team member.</p>
                            </div>
                        </FadeUp>
                    </div>
                    <FadeUp>
                        <div className="careerinfodiv1">
                            <div className="dataenginfomainheader">
                                <p>Thrivex Athlete Attributes:</p>
                            </div>
                            <div className="dataenginfomaindesc">
                                <ul>
                                    <li>Humbly accepts their status as a top performer in all professional settings</li>
                                    <li>Acknowledges their strong academic background and prides themselves on being a quick learner</li>
                                    <li>Seeks a better model and believes in improving the way we work in this field</li>
                                    <li>Values the success of the team and team effort over individual accolades</li>
                                    <li>Seeks a better model and believes in improving the way we work in this field</li>
                                </ul>
                            </div>
                        </div>
                    </FadeUp>
                    <div className="careerinfodiv1">
                        <FadeUp>
                            <img src={img2} alt="" style={{ width: '100%', marginBottom: '8vh' }} />
                        </FadeUp>
                        <FadeUp>
                            <div className="dataenginfomainheader">
                                <p>Requisite Skills:</p>
                            </div>
                        </FadeUp>
                        <div className="dataenginfomaindesc">
                            <ul>
                                <FadeUp>
                                    <li>Proactive communicator</li>
                                </FadeUp>
                                <FadeUp>
                                    <li>Critical thinker</li>
                                </FadeUp>
                                <FadeUp>
                                    <li>Collaborative team player</li>
                                </FadeUp>
                                <FadeUp>
                                    <li>Analytical powerhouse</li>
                                </FadeUp>
                                <FadeUp>
                                    <li>Change agent</li>
                                </FadeUp>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
