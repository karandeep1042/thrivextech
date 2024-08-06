import React from 'react'
import img1 from '../../../../Resources/Product Engineering/modernizationinfo.jpg'

export default function Modernizationinfo() {
    const activitiesdata = [
        {
            header: 'Faster Time to Market',
            description: "Get your software to market quicker with our agile approach and AI-powered development."
        },
        {
            header: 'Improved Security',
            description: "Modernized systems benefit from enhanced security features and reduced vulnerabilities."
        },
        {
            header: 'Enhanced Agility',
            description: "Respond faster to market changes and opportunities with a modernized IT landscape."
        },
        {
            header: 'Simplified Integration',
            description: "Integrate legacy systems with newer technologies for a more unified IT ecosystem."
        },
        {
            header: 'Reduced Outages',
            description: "Minimize system outages and improve application reliability."
        },
        {
            header: 'Future-Proof Your Business',
            description: "Invest in a modernized foundation for long-term growth and success."
        },
    ]

    return (
        <>
            <div className="ednewinfo3maincontainer">
                <div className="ednewinfo3childcontainer">
                    <div className="edinfo3header">
                        <p>
                        Maximize Business Benefits Custom Software
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
