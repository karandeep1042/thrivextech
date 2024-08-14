import React from 'react'
import '../../../New css/Experience Design/EDNewInfo2.css'
import img1 from '../../../Images/Experience Design Page/info3.png'
import img2 from '../../../Images/Experience Design Page/mainpic.jpg'
import { FadeRight, FadeLeft, FadeUp, FadeDown } from '../../Animations/Animations';

export default function EDNewInfo2() {
    return (
        <>
            <div className="ednewinfo2maincontainer">
                <div className="ednewinfo2childcontainer">
                    <FadeUp>
                        <img src={img2} alt="" style={{ width: '100%', marginBottom: '4vh' }} />
                    </FadeUp>
                    <div className="ednewinfo2div1">
                        <FadeUp>
                            <div className="ednewinfo1header">
                                <p>Our Methodology</p>
                            </div>
                        </FadeUp>
                        <FadeUp>
                            <div className="ednewinfo1description">
                                <p>We transform imaginative ideas into remarkable products and services through our iterative UX design consulting. Our expert team leverages cutting-edge methods and UX principles to create solutions that are not just functional, but also beautiful and emotionally resonant.</p>
                            </div>
                        </FadeUp>
                    </div>
                    <FadeUp>
                        <div className="ednewinfo2div2">
                            <img src={img1} alt="" />
                        </div>
                    </FadeUp>
                </div>
            </div >
        </>
    )
}
