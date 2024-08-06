import React from 'react'
import img1 from '../../../Resources/dtshero.jpg'

export default function SapbtpInfo2() {

    const activitiesdata = [
        {
            header: 'Flexibility and Independence',
            description: "SAP BTP provides the agility and autonomy that companies need to migrate resources to the cloud, integrate their IT landscape, and configure and extend SAP and third-party applications. We provide individualized services and skills to make the transition to the cloud a seamless experience with minimum disruption."
        },
        {
            header: 'Support for a Multi-Cloud Approach',
            description: "SAP BTP supports a multi-cloud approach; thus, businesses can use cloud providers to get the advantages of different clouds and at the same time avoid vendor lock-in. We assist companies in selecting the best-fit cloud service provider(s) for their specific needs, which in turn, help them to build a flexible and cost-effective cloud strategy."
        },
        {
            header: 'Faster Time to Value',
            description: "The SAP BTP takes care of fully managed PaaS (Platform-as-a-Service) offerings that enable quicker time to value and help organizations achieve their innovation goals faster. As an SAP BTP expert, we are a one-stop solution that covers all the steps from planning to realization, and thus, enterprises can expect to get the most out of SAP BTP and reach their business objectives quickly."
        },
        {
            header: 'Modern SAP CX-Integrated Interfaces',
            description: "SAP Business Technology Platform (SAP BTP) revolutionizes user interfaces with Fiori enhancements and development that provide modern and highly customizable interfaces for all applications. This transformation leads to a heightened user experience, supporting employees with intuitive interfaces that streamline their work processes."
        },
        {
            header: 'Enhanced Analytics Capabilities',
            description: "SAP BTP empowers organizations with a centralized platform for data management and analytics. By leveraging SAP Analytics Cloud and SAP Data Warehouse Cloud, businesses can gain a holistic view of their data, identify trends and patterns, and make data-driven decisions with confidence. This improved decision-making capability leads to increased efficiency, cost optimization, and a competitive advantage."
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
