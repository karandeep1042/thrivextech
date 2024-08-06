import React from 'react'
import img1 from '../../../../New Resources/Data Engineering/lifecycle.png'
import '../../../../New css/Data & AI/Data Engineering/DataEngineeringInfo.css'

export default function DataEngineeringInfo() {
    return (
        <>
            <div className="dataenginfomaincontainer">
                <div className="dataenginfochildcontainer">
                    <div className="dataenginfodiv1">
                        <div className="dataenginfomainheader">
                            <p>DATA ENGINEERING LIFECYCLE</p>
                        </div>
                    </div>
                    <div className="dataenginfodiv2">
                        <img src={img1} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}
