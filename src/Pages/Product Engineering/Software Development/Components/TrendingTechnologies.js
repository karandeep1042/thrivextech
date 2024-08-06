import React from 'react'
import '../../../../New css/Product Engineering/Software Engineering/TrendingTechnologies.css'
import img1 from '../../../../New Resources/Product Engineering/Software Development/tt1.png'
import img2 from '../../../../New Resources/Product Engineering/Software Development/tt2.png'

export default function TrendingTechnologies() {
    return (
        <>
            <div className="trendingtechmaincontainer">
                <div className="trendingtechchildcontainer">
                    <div className="trendingtechdiv1">
                        <div className="trendingtechmainheader">
                            <p>What’s Trending!</p>
                        </div>
                    </div>
                    <div className="trendingtechdiv2">
                        <img src={img1} alt="" />
                        <img src={img2} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}
