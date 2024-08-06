import React from 'react'
import img1 from '../../../../New Resources/AI & ML/aimlinfo.png'
import '../../../../New css/Data & AI/AI & ML/AIMLInfo.css'

export default function AIMLInfo() {
    return (
        <>
            <div className="aimlinfomaincontainer">
                <div className="aimlinfochildcontainer">
                    <div className="aimlinfodiv1">
                        <div className="aimlinfoheader">
                            <p>Our Approach to AI & ML Services</p>
                        </div>
                    </div>
                    <div className="aimlinfodiv2">
                        <img src={img1} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}
