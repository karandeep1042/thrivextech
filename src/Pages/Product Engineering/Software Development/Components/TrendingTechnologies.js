import React from 'react'
import '../../../../New css/Product Engineering/Software Engineering/TrendingTechnologies.css'
import img1 from '../../../../New Resources/Product Engineering/Software Development/tt1.png'
import img2 from '../../../../New Resources/Product Engineering/Software Development/tt2.png'
import { FadeUp, ScaleUp, SlideLeft, SlideRight } from '../../../Animations/Animations'

export default function TrendingTechnologies() {
    return (
        <>
            <div className="dataenginfomaincontainer">
                <div className="dataenginfochildcontainer">
                    <div className="dataenginfodiv1">
                        <FadeUp>
                            <div className="dataenginfomainheader">
                                <p>What’s Trending?</p>
                            </div>
                        </FadeUp>
                    </div>
                    <FadeUp>
                        <div className="trendingtechdiv2">
                            <img src={img1} alt="" />
                            <img src={img2} alt="" />
                        </div>
                    </FadeUp>
                </div>
            </div>
        </>
    )
}
