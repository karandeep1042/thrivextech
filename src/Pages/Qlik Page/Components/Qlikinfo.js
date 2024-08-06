import React from 'react'
import img1 from '../../../New Resources/Qlik/qlikinfo1.png'

export default function Qlikinfo() {
    return (
        <>
            <div className="aimlinfomaincontainer">
                <div className="aimlinfochildcontainer">
                    <div className="aimlinfodiv1">
                        <div className="aimlinfoheader">
                            <p>Qlik Managed Services</p>
                        </div>
                        <div className="aimlinfodescription">
                            <p>Our Qlik Managed Services are designed to support the operational needs of your Qlik environment, allowing your team to focus on strategic initiatives. We offer flexible, customized service plans to manage and enhance your Qlik data analytics and integration platform.</p>
                        </div>
                    </div>
                    <div className="aimlinfodiv2">
                        <img src={img1} alt="" />
                    </div>
                    <div className="aimlinfodiv1">
                        <div className="aimlinfoheader">
                            <p>Start Your Qlik Journey with Thrivex</p>
                        </div>
                        <div className="aimlinfodescription">
                            <p>Partner with Thrivex to leverage Qlik’s powerful analytics capabilities and transform your data into actionable intelligence. Whether you’re just starting with Qlik or looking to optimize and expand your existing setup, our expert team is here to ensure your success every step of the way.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
