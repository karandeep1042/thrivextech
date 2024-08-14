import React from 'react'
import img1 from '../../../../Images/Data & AI/Data Engineering/lifecycle.png'
import img2 from '../../../../Images/Data & AI/Data Engineering/Main pic.png'
import '../../../../New css/Data & AI/Data Engineering/DataEngineeringInfo.css'
import { SlideRight, SlideLeft, SlideUp, SlideDown, FadeDown, FadeLeft, FadeRight, FadeUp } from '../../../Animations/Animations';

export default function DataEngineeringInfo() {
    return (
        <>
            <div className="dataenginfomaincontainer">
                <div className="dataenginfochildcontainer">
                    <FadeUp>
                        <img src={img2} alt="" className='dataenginfomainpic' />
                    </FadeUp>
                    <FadeUp>
                        <div className="dataenginfodiv1">
                            <div className="dataenginfomainheader">
                                <p>Data Engineering Lifecycle</p>
                            </div>
                        </div>
                    </FadeUp>
                    <FadeUp>
                        <div className="dataenginfodiv2">
                            <img src={img1} alt="" />
                        </div>
                    </FadeUp>
                </div>
            </div>
        </>
    )
}
