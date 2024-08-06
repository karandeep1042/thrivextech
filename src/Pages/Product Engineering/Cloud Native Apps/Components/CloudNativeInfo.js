import React from 'react'
import img1 from '../../../../Resources/Product Engineering/modernizatiohero.jpg'

export default function CloudNativeInfo() {
    const activitiesdata = [
        {
            header: 'Reduced Time to Market',
            description: "Launch your products faster with efficient cloud-native development practices."
        },
        {
            header: 'Enhanced Scalability',
            description: "Easily scale your applications up or down to meet changing demands."
        },
        {
            header: 'Increased Reliability and Reduced Downtime',
            description: "Benefit from the inherent resilience and fault tolerance of cloud-native applications."
        },
        {
            header: 'Greater Innovation',
            description: "Focus on building innovative features instead of managing infrastructure."
        },
        {
            header: 'Simplified Maintenance',
            description: " 	Automate tasks and streamline application management."
        },
    ]

    return (
        <>
            <div className="ednewinfo3maincontainer">
                <div className="ednewinfo3childcontainer">
                    <div className="edinfo3header">
                        <p>Maximize Business Benefits Custom Software Solutions</p>
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
    );
}
