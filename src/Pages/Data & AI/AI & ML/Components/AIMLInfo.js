import React from 'react'
import img1 from '../../../../New Resources/AI & ML/aimlinfo.png'
import img2 from '../../../../New Resources/AI & ML/mainpic.png'
import '../../../../New css/Data & AI/AI & ML/AIMLInfo.css'
import { FadeRight, FadeUp } from '../../../Animations/Animations'

export default function AIMLInfo() {
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
                                <p>Our Approach to AI & ML Services</p>
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
