import React from 'react'

export default function DtsInfo3() {
    const activitiesdata = [
        {
            header: 'Faster Hires:',
            description: " Reduce your recruitment timeline"
        },
        {
            header: 'Cost Savings:',
            description: " Eliminate the need for expensive, in-house talent acquisition teams."
        },
        {
            header: 'Top Talent: ',
            description: " Access a wider pool of elite tech professionals and secure the perfect fit."
        },
        {
            header: 'Enhanced Team Culture: ',
            description: " Integrate talent who aligns with your culture, fostering a cohesive work environment."
        },
        {
            header: 'Strategic Focus: ',
            description: " Free up valuable time and resources to focus on core business strategies, propelling your success further."
        },
    ]

    return (
        <>
            <div className="ednewinfo3maincontainer">
                <div className="ednewinfo3childcontainer">
                    <div className="edinfo3header">
                        <p>
                            Unlock Benefits with Our Talent Solutions
                        </p>
                    </div>
                    <div className="edinfo3lists">
                        {activitiesdata.map((item, index) => (
                            <div className="edinfo3list edinfo3listtype2">
                                <i className="fa-regular fa-circle-check"></i>
                                <div className="edinfo3listchildcontainer">
                                    <div className="edinfo3listdescription">
                                        <p><b>{item.header}</b>{item.description}</p>
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
