import React from 'react'
import img1 from '../../../Resources/dtshero.jpg'
import '../../../New css/SAPBTP/SapbtpInfo.css'

export default function SapbptInfo() {

    const carddata = [
        {
            header: 'SAP Integration Suite',
            desc: 'Leverage the full potential of your technology solutions by integrating them with your enterprise’s digital core. We can help your team take advantage of SAP’s comprehensive integration system on BTP, eliminating siloed technology and integrating your entire tech landscape.'
        },
        {
            header: 'SAP Build Work Zone',
            desc: 'Enable a customized user experience driven by your organization’s business needs while providing secure and centralized access to SAP and non-SAP systems, data, and processes with SAP Build Work Zone. The result? Users can say goodbye to navigating through multiple systems to complete simple transactions. Whether connecting to on-prem or cloud-based systems, SAP Build Work Zone provides an intuitive experience to internal and external users with access to all enterprise applications in one place.'
        },
        {
            header: 'Clean Core and Extensibility in SAP BTP ',
            desc: 'Keep the SAP innovation rolling along with regular upgrades and robust development tools. SAP BTP offers a wide range of tools and development environments, allowing you to explore new applications suitable for your business. We will help guide your transformation efforts with custom code analysis for BTP and deliver guidance on the customization level available for your system, along with the remediation steps necessary for a clean core approach to S/4HANA migrations.'
        },
        {
            header: 'SAP Datasphere and SAP Analytics Cloud',
            desc: 'Manage your data seamlessly and effortlessly through a centralized, comprehensive repository offering state-of-the-art data flow capabilities. With SAP Datasphere and Analytics Cloud, your organization will easily access data from different parts of the business. Imagine decision-makers across your organization empowered with actionable insights from historical data and project future trends, enabling informed decision-making.'
        },
    ]

    return (
        <>
            <div className="sapbtpinfomaincontainer">
                <div className="sapbtpinfochildcontainer">
                    <div className="sapbtpinfodiv1">
                        <div className="sapbtpinfomainheader">
                            <p>Our Services</p>
                        </div>
                        <div className="sapbtpinfomaindescription">
                            <p>We help businesses achieve digital transformation through SAP BTP, a comprehensive platform combining database management, application development, analytics, and intelligent technologies. Our SAP BTP services offer agile integration, robust solutions, and expert guidance to optimize operations, enhance data management, and accelerate innovation. By leveraging SAP BTP's capabilities, businesses can unlock data insights, streamline processes, and extend SAP applications, driving business value and continuous improvement.</p>
                        </div>
                    </div>
                    <div className="sapbtpinfodiv2">
                        <div className="sapbtpinfolists">
                            {carddata.map((item, index) => (
                                <div className="sapbtpinfolist">
                                    <div className="sapbtpinfolistdiv1">
                                        <p>{item.header}</p>
                                    </div>
                                    <div className="sapbtpinfolistdiv2">
                                        <p>{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
