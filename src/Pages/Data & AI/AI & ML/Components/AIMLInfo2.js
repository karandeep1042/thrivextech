import React from 'react'
import img1 from '../../../../Resources/dtshero.jpg'

export default function AIMLInfo2() {

    const activitiesdata = [
        {
            header: 'Identify trends, extract insights, and optimize strategic planning with advanced data analytics.',
        },
        {
            header: 'Target audiences effectively, increase ROI, and drive sales through personalized marketing campaigns.',
        },
        {
            header: 'Tailor user experiences to boost customer satisfaction and engagement.',
        },
        {
            header: 'Streamline processes, increase efficiency, and reduce operational costs through task automation.',
        },
        {
            header: 'Improve customer support with AI-driven chatbots and virtual assistants.',
        },
    ]

    return (
        <>
            <div className="ednewinfo3maincontainer">
                <div className="ednewinfo3childcontainer">
                    <div className="edinfo3header">
                        <p>
                            Unlocking Business Potential: Key Benefits of AI & ML Services
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
