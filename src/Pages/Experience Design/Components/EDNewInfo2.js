import React from 'react'
import '../../../New css/Experience Design/EDNewInfo2.css'
import img1 from '../../../New Resources/Experience Design/info3.png'
export default function EDNewInfo2() {
    return (
        <>
            <div className="ednewinfo2maincontainer">
                <div className="ednewinfo2childcontainer">
                    <div className="ednewinfo2div1">
                        <div className="ednewinfo1header">
                            <p>Our Methodology</p>
                        </div>
                        <div className="ednewinfo1description">
                            <p>We transform imaginative ideas into remarkable products and services through our iterative UX design consulting. Our expert team leverages cutting-edge methods and UX principles to create solutions that are not just functional, but also beautiful and emotionally resonant.</p>
                        </div>
                    </div>
                    <div className="ednewinfo2div2">
                        <img src={img1} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}
