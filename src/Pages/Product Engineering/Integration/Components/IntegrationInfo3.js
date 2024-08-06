import React from 'react'
import img1 from '../../../../Resources/dtshero.jpg'

export default function IntegrationInfo3() {
    const activitiesdata = [
        {
            header: 'Reduced Time to Market',
            description: "Launch your products faster with efficient cloud-native development practices."
        },
        {
            header: 'Adaptability',
            description: "Integrate enterprise apps like CRM, CMS, ERP, and social channels for agile rollouts and rapid implementations, ensuring you stay responsive to market changes."
        },
        {
            header: 'Real-Time Data Access',
            description: "Manage critical business data in real-time from diverse systems, enabling informed decision-making and reducing data discrepancies."
        },
        {
            header: 'Enhanced Customer Experience',
            description: "Expand your service offerings and channels to reach customers effectively, leading to higher engagement and satisfaction."
        },
        {
            header: 'Faster Time-to-Market',
            description: "Connect applications and automate workflows to respond swiftly to market demands, ensuring competitive agility and quicker product launches."
        },
    ]

    return (
        <>
            <div className="ednewinfo3maincontainer">
                <div className="ednewinfo3childcontainer">
                    <div className="edinfo3header">
                        <p>
                            Business Benefits with Integration Services
                        </p>
                    </div>
                    <div className="edinfo3lists">
                        {activitiesdata.map((item, index) => (
                            <div className="edinfo3list edinfo3listtype2">
                                <i className="fa-regular fa-circle-check"></i>
                                <div className="edinfo3listchildcontainer">
                                    <div className="edinfo3listheader">
                                        <p>{item.header}</p>
                                    </div>
                                    <div className="edinfo3listdescription">
                                        <p>{item.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
