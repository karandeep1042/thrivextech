import React from 'react'
import img1 from '../../../../Resources/Product Engineering/SWdevinfo.png'
import '../../../../css/SW dev/SWdevinfo.css'

export default function SWdevinfo() {

    const activitiesdata = [
        {
            header: 'Faster Time to Market',
            description: "Get your software to market quicker with our agile approach and AI-powered development."
        },
        {
            header: 'Scalable and Maintainable Solutions',
            description: "Build software that grows with your business and is easy to maintain."
        },
        {
            header: 'Enhanced User Experience',
            description: "Deliver intuitive and user-friendly applications that keep your users engaged."
        },
        {
            header: 'Continuous Innovation',
            description: "Stay ahead of the competition with cutting-edge features and functionality."
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
