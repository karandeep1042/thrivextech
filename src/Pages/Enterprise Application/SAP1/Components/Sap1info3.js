import React from 'react'

export default function Sap1info3() {

    const activitiesdata = [
        {
            header: 'Real-time Decision Making',
            description: "Gain a single view of your entire business with up-to-the-second data, enabling instant reactions to market changes and data-driven decisions to optimize performance."
        },
        {
            header: 'Enhanced Customer Experience',
            description: "Respond to customer needs in real-time with access to complete customer data, allowing for personalized interactions and improved customer satisfaction."
        },
        {
            header: 'Streamlined Operations',
            description: "Automate workflows and integrate processes across your entire value chain, reducing complexity, eliminating bottlenecks, and boosting overall productivity."
        },
        {
            header: 'Reduced Costs',
            description: "Minimize hardware and software expenses with efficient data management and eliminate the need for complex middleware, reducing IT infrastructure costs."
        },
        {
            header: 'Future-Proof Innovation',
            description: "Built on the powerful HANA in-memory database, SAP S/4HANA scales and adapts as your business grows, ensuring a platform that supports your evolving needs and future innovations."
        },
    ]

    return (
        <>
            <div className="ednewinfo3maincontainer">
                <div className="ednewinfo3childcontainer">
                    <div className="edinfo3header">
                        <p>
                            Maximize Business Benefits with SAP S/4HANA
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
