import React from 'react'
import img1 from '../../../New Resources/Digital Talent Solutions/infoimage.png'
import '../../../css/Digital Talent Solutions/DtsInfo.css'

export default function DtsInfo(props) {
    return (
        <>
            <div className="aimlinfomaincontainer">
                <div className="aimlinfochildcontainer">
                    <div className="aimlinfodiv1">
                        <div className="aimlinfoheader">
                            <p>{props.header}</p>
                        </div>
                        <div className="aimlinfodescription">
                            <p>{props.desc}</p>
                        </div>
                    </div>
                    <div className="aimlinfodiv2">
                        <img src={props.img} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}
