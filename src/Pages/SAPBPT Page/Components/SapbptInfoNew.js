import React from 'react'
import img1 from '../../../Images/SAPBTP/img1.jpg'
import { FadeIn, FadeUp, SlideRight } from '../../Animations/Animations'

export default function SapbptInfoNew() {
    const switchtab = (evt, index) => {
        let elements = document.getElementsByClassName('sap1info2tabdiv2');
        let elements2 = document.getElementsByClassName('sap1info2tabhead');
        for (let i = 0; i < elements.length; i++) {
            if (i == index) {
                elements[i].classList.add('tabactive');
                elements2[i].classList.add('headactive');
            }
            else {
                elements[i].classList.remove('tabactive');
                elements2[i].classList.remove('headactive');
            }
        }
    }


    return (
        <>
            <div className="dataenginfomaincontainer">
                <div className="dataenginfochildcontainer">
                    <FadeUp>
                        <img src={img1} alt="" className='dataenginfomainpic' />
                    </FadeUp>
                    <FadeUp>
                        <div className="dataenginfomainheader">
                            <p>Our Services</p>
                        </div>
                    </FadeUp>
                    <FadeUp>
                        <div className="sap1info2tabcontainer">
                            <div className="sap1info2tabdiv1">
                                <FadeIn>
                                    <p className="sap1info2tabhead headactive" onClick={(e) => { switchtab(e, 0) }}>SAP Integration Suite</p>
                                </FadeIn>
                                <FadeIn>
                                    <p className="sap1info2tabhead" onClick={(e) => { switchtab(e, 1) }}>SAP Build Work Zone</p>
                                </FadeIn>
                                <FadeIn>
                                    <p className="sap1info2tabhead" onClick={(e) => { switchtab(e, 2) }}>Clean Core and Extensibility in SAP BTP </p>
                                </FadeIn>
                                <FadeIn>
                                    <p className="sap1info2tabhead" onClick={(e) => { switchtab(e, 3) }}>SAP Datasphere and SAP Analytics Cloud</p>
                                </FadeIn>
                            </div>
                            <div className="sap1info2tabdiv2 tabactive">
                                <p>Leverage the full potential of your technology solutions by integrating them with your enterprise’s digital core. We can help your team take advantage of SAP’s comprehensive integration system on BTP, eliminating siloed technology and integrating your entire tech landscape.</p>
                            </div>
                            <div className="sap1info2tabdiv2">
                                <p>Enable a customized user experience driven by your organization’s business needs while providing secure and centralized access to SAP and non-SAP systems, data, and processes with SAP Build Work Zone. The result? Users can say goodbye to navigating through multiple systems to complete simple transactions. Whether connecting to on-prem or cloud-based systems, SAP Build Work Zone provides an intuitive experience to internal and external users with access to all enterprise applications in one place.</p>
                            </div>
                            <div className="sap1info2tabdiv2">
                                <p>Keep the SAP innovation rolling along with regular upgrades and robust development tools. SAP BTP offers a wide range of tools and development environments, allowing you to explore new applications suitable for your business. We will help guide your transformation efforts with custom code analysis for BTP and deliver guidance on the customization level available for your system, along with the remediation steps necessary for a clean core approach to S/4HANA migrations.</p>
                            </div>
                            <div className="sap1info2tabdiv2">
                                <p>Manage your data seamlessly and effortlessly through a centralized, comprehensive repository offering state-of-the-art data flow capabilities. With SAP Datasphere and Analytics Cloud, your organization will easily access data from different parts of the business. Imagine decision-makers across your organization empowered with actionable insights from historical data and project future trends, enabling informed decision-making.</p>
                            </div>
                        </div>
                    </FadeUp>
                </div>
            </div>
        </>
    )
}
