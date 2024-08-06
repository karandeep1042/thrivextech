import React from 'react'
import img1 from '../../../../Resources/dtshero.jpg'

export default function DataEngineeringInfo2() {

    const activitiesdata = [
        {
            header: 'Experience enhanced data reliability, relevance, and accessibility',
            description: "Create user-centric designs that engage and delight."
        },
        {
            header: 'Improve decision-making capabilities with actionable insights',
            description: "Create user-centric designs that engage and delight."
        },
        {
            header: 'Streamline data operations for increased operational efficiency',
            description: "Ensure intuitive and accessible interfaces."
        },
        {
            header: 'Achieve seamless integration and migration to modern data platforms',
            description: "Stand out in the market with unique and innovative customer experiences."
        },
        {
            header: 'Enhance security and compliance through robust data governance',
            description: "Foster lasting connections through seamless experiences."
        },
    ]

    return (
        <>
            <div className="ednewinfo3maincontainer">
                <div className="ednewinfo3childcontainer">
                    <div className="edinfo3header">
                        <p>
                            Unlock the Power of Your Data with Enhanced Reliability, Insights, and Security
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
                                    {/* <div className="edinfo3listdescription">
                                        <p>{item.description}</p>
                                    </div> */}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
