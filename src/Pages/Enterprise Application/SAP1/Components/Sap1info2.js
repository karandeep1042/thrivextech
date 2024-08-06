import React from 'react'
import '../../../../New css/SAP S4 HANA/Sap1info2.css'

export default function Sap1info2() {

    const switchtab = (evt,index) => {
        let elements = document.getElementsByClassName('sap1info2tabdiv2')
        let elements2 = document.getElementsByClassName('sap1info2tabhead')
        console.log(evt);
        for (let i = 0; i < elements.length; i++) {
            if(i==index){
                console.log(elements[i]);
                elements[i].classList.add('tabactive');
                elements2[i].classList.add('headactive');
            }
            else{
                elements[i].classList.remove('tabactive');
                elements2[i].classList.remove('headactive');
            }
        }
    }
    
    
    return (
        <>
            <div className="sap1info2maincontainer">
                <div className="sap1info2childcontainer">
                    <div className="sap1info2mainheader">
                        <p>Our S/4 HANA Services</p>
                    </div>
                    <div className="sap1info2tabcontainer">
                        <div className="sap1info2tabdiv1">
                            <p className="sap1info2tabhead headactive" onClick={(e) => { switchtab(e, 0) }}>Implementation</p>
                            <p className="sap1info2tabhead" onClick={(e) => { switchtab(e, 1) }}>Migration</p>
                            <p className="sap1info2tabhead" onClick={(e) => { switchtab(e, 2) }}>Integration</p>
                            <p className="sap1info2tabhead" onClick={(e) => { switchtab(e, 3) }}>Customization</p>
                            <p className="sap1info2tabhead" onClick={(e) => { switchtab(e, 4) }}>Managed Services</p>
                        </div>
                        <div className="sap1info2tabdiv2 tabactive">
                            <p>Leveraging proven methodologies like ASAP and SAP Activate, we deliver custom implementations tailored to your specific needs. Our experts ensure seamless integration of vital business functions in real-time, regardless of whether you're implementing on a greenfield, brownfield, or hybrid landscape. Additionally, we personalize user experiences with SAP Fiori, maximizing user adoption and productivity.</p>
                        </div>
                        <div className="sap1info2tabdiv2">
                            <p>We guide you through a smooth transition from SAP ECC to S/4HANA with minimal disruption. Our approach includes a thorough analysis of your current SAP setup, addressing potential challenges, and recommending the optimal migration strategy (greenfield, brownfield, or hybrid). We handle the entire process, including data migration, customization, integration, and change management, ensuring a successful migration journey.
                            </p>
                        </div>
                        <div className="sap1info2tabdiv2">
                            <p>Our comprehensive integration services are designed to meet your evolving business needs. We specialize in seamlessly integrating SAP S/4HANA Cloud and various data types, utilizing the latest integration technologies and API-driven approaches. This empowers you to achieve a modern and unified ERP landscape, enhancing your overall integration strategy and driving business value.</p>
                        </div>
                        <div className="sap1info2tabdiv2">
                            <p>We customize SAP S/4HANA to perfectly align with your unique business requirements. This ensures smooth integration and optimized functionality by tailoring the system to your organizational structures and processes. By maximizing the benefits of SAP S/4HANA Cloud specifically for your business, you unlock its full potential to streamline operations and achieve greater efficiency.</p>
                        </div>
                        <div className="sap1info2tabdiv2">
                            <p>Our comprehensive application management services ensure the smooth operation, continuous optimization, and proactive support of your SAP S/4HANA environment. We provide end-to-end management of your applications, including monitoring, maintenance, upgrades, and performance optimization, giving you peace of mind and allowing you to focus on your core business activities.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
