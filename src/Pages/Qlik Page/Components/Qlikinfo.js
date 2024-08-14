import React from 'react'
import img1 from '../../../Images/Qlik/qlikinfo1.png'
import img5 from '../../../Images/Qlik/mainpic.png'
import { FadeUp } from '../../Animations/Animations'

export default function Qlikinfo() {
    return (
        <>
            <div className="dataenginfomaincontainer">
                <div className="dataenginfochildcontainer">
                    <FadeUp>
                        <img src={img5} alt="" className='dataenginfomainpic' />
                    </FadeUp>
                    <FadeUp>
                        <div className="dataenginfodiv1">
                            <div className="dataenginfomainheader">
                                <p>Qlik Managed Services</p>
                            </div>
                            <div className="dataenginfomaindesc">
                                <p>Our Qlik Managed Services are designed to support the operational needs of your Qlik environment, allowing your team to focus on strategic initiatives. We offer flexible, customized service plans to manage and enhance your Qlik data analytics and integration platform.</p>
                            </div>
                        </div>
                    </FadeUp>
                    <FadeUp>
                        <div className="dataenginfodiv2">
                            <img src={img1} alt="" />
                        </div>
                    </FadeUp>
                    <FadeUp>
                        <div className="dataenginfodiv1" style={{ marginTop: '4vh' }}>
                            <div className="dataenginfomainheader">
                                <p>Start Your Qlik Journey with Thrivex</p>
                            </div>
                            <div className="dataenginfomaindesc">
                                <p>Partner with Thrivex to leverage Qlik’s powerful analytics capabilities and transform your data into actionable intelligence. Whether you’re just starting with Qlik or looking to optimize and expand your existing setup, our expert team is here to ensure your success every step of the way.</p>
                            </div>
                        </div>
                    </FadeUp>
                </div>
            </div>
        </>
    )
}
