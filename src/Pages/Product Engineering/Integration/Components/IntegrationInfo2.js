import React from 'react'
import img1 from '../../../../New Resources/Product Engineering/Integration/Picture1.png'

export default function IntegrationInfo2() {
    return (
        <>
            <div className="dtsheromaincontainer">
                <div className="homeinfosection1">
                    <div className="homeinfoheader" style={{ color: '#0eaae3' }}>
                        Our Approach to Integration
                    </div>
                    <div className="homeinfodescription" style={{ margin: '1vh 0vw' }}>
                        <p>
                            We adopt a comprehensive approach to ensure seamless integration solutions tailored to your business needs and goals. We ensure optimal outcomes through:
                        </p>
                    </div>
                    <div className="homeinfolists">
                        <div className="dtsinfolist">
                            <div className="dtsinfolistheader">
                                <i class="fa-solid fa-check"></i>
                                <p>
                                    Current State Assessment
                                </p>
                            </div>
                            <div className="dtsinfolistedescription">
                                We start by assessing your integration maturity to identify strengths and areas for improvement quickly. Our services include vendor assessments and business case development to lay a solid foundation for integration enhancements.
                            </div>
                        </div>
                        <div className="dtsinfolist">
                            <div className="dtsinfolistheader">
                                <i class="fa-solid fa-check"></i>
                                <p>
                                    Strategy and Roadmap
                                </p>
                            </div>
                            <div className="dtsinfolistedescription">
                                Aligning your organization with a strategic vision for integration modernization is crucial. We define an integration operating model, develop integration and data strategies, and implement APIs for optimized environments to drive sustainable growth.
                            </div>
                        </div>
                        <div className="dtsinfolist">
                            <div className="dtsinfolistheader">
                                <i class="fa-solid fa-check"></i>
                                <p>
                                    Blueprinting
                                </p>
                            </div>
                            <div className="dtsinfolistedescription">
                                Establishing technical clarity is key to successful integration. We define future integration architecture through meticulous integration architecture and design, coupled with API blueprint and management, ensuring a robust framework for implementation.
                            </div>
                        </div>
                        <div className="dtsinfolist">
                            <div className="dtsinfolistheader">
                                <i class="fa-solid fa-check"></i>
                                <p>
                                    Implementation
                                </p>
                            </div>
                            <div className="dtsinfolistedescription">
                                Executing integration initiatives requires meticulous planning and execution. We select, plan, mobilize, deliver, and manage change using a combination of cutting-edge technologies. Our services include API Factory for efficient delivery, specialized data integration services and managed services.
                            </div>
                        </div>
                    </div>
                    <div className="homeinfodescription" style={{ margin: '1vh 0vw' }}>
                        <p>
                            We are committed to delivering tailored integration solutions that drive efficiency, innovation, and business success.
                        </p>
                    </div>
                </div>
                <div className="aboutherosection2">
                    <img src={img1} alt="" />
                </div>
            </div>
        </>
    )
}
