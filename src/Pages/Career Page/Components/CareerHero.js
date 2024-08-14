import React from 'react'
import img1 from '../../../Resources/dtshero.jpg'
import '../../../css/Career/CareerHero.css'
import { FadeUp } from '../../Animations/Animations'

export default function CareerHero() {
    return (
        <>
            <div className="aboutheroheader">
                <p>Careers at Thrivex:
                    Join Us in Building the Digital Future
                </p>
            </div>
            <div className="dtsheromaincontainer">
                <div className="aboutherosection1">
                    <div className="ahs1info">
                        <div className="aboutherosection1infodescription">
                            We're on the lookout for talented individuals to join the Thrivex team.
                        </div>
                        <FadeUp>
                            <div className='careerherohead2'>
                                About Our Team
                            </div>
                            <div className='careerdesc'>
                                Our greatest asset is our people. We cultivate a team of skilled professionals who are always ready to tackle challenges head-on. <br /><br />
                                At Thrivex, we pride ourselves on maintaining a flat organizational structure and a positive, upbeat workplace culture. Here, projects are approached with passion, and colleagues are treated with respect. Hard work is expected, and initiative and leadership are celebrated. <br /><br />
                                Our consultants aren’t just colleagues, they’re family.
                            </div>
                        </FadeUp>
                    </div>
                </div>
                <FadeUp>
                    <div className="aboutherosection2">
                        <img src={img1} alt="" />
                    </div>
                </FadeUp>
            </div>
        </>
    )
}
