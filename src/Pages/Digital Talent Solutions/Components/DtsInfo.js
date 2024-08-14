import React from 'react'
import '../../../css/Digital Talent Solutions/DtsInfo.css'
import { FadeLeft, FadeRight, FadeUp } from '../../Animations/Animations'

export default function DtsInfo(props) {
    return (
        <>
            <div className="dataenginfomaincontainer">
                <div className="dataenginfochildcontainer">
                    <FadeUp>
                        <img src={props.img2} alt="" className='dataenginfomainpic' />
                    </FadeUp>
                    <div className="dataenginfodiv1">
                        <FadeUp>
                            <div className="dataenginfomainheader">
                                <p>{props.header}</p>
                            </div>
                        </FadeUp>
                        <FadeUp>
                            <div className="insightsanalyticsinfodescription">
                                <p>{props.desc}</p>
                            </div>
                        </FadeUp>
                    </div>
                    <FadeUp>
                        <div className="dataenginfodiv2">
                            <img src={props.img} alt="" />
                        </div>
                    </FadeUp>
                </div>
            </div>
        </>
    )
}
