import React from 'react'
import '../../../New css/Experience Design/EDNewInfo4.css'

export default function EDNewInfo4() {

    const activitiesdata = [
        {
            header: 'Enhanced User Engagement',
            description: "Create user-centric designs that engage and delight."
        },
        {
            header: 'Improved Usability',
            description: "Ensure intuitive and accessible interfaces."
        },
        {
            header: 'Competitive Advantage',
            description: "Stand out in the market with unique and innovative customer experiences."
        },
        {
            header: 'Increased Customer Satisfaction',
            description: "Foster lasting connections through seamless experiences."
        },
    ]

    return (
        <>
            <div className="ednewinfo3maincontainer">
                <div className="ednewinfo3childcontainer">
                    <div className="edinfo3header">
                        <p>
                            Unleash the Power of Experience Design: Engage, Delight, and Drive Business Success
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
