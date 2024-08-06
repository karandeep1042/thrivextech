import React from 'react'
import img1 from '../../../../Resources/Product Engineering/modernizatiohero.jpg'
import '../../../../New css/Product Engineering/Cloud Native/CloudNativeInfo2.css'

export default function CloudNativeInfo2() {
    return (
        <>
            <div className="cloudnativeinfo2maincontainer">
                <div className="cloudnativeinfo2childcontainer">
                    <div className="cloudnativeinfo2div1">
                        <div className="cloudnativeinfo2header">
                            <p>Our Approach</p>
                        </div>
                        <div className="cloudnativeinfo2desc">
                            <p>Our Cloud-native Application Development Process Guides You Through Every Step Of Your Cloud Journey</p>
                        </div>
                    </div>
                    <div className="cloudnativeinfodiv2">
                        <div className="ahs1info">
                            {/* <div className="aboutherosection1infoheader" style={{ color: '#0eaae3' }}>
                                <p>Cloud-Native Application Development Process Guiding You Through Every Step of Your Cloud Journey</p>
                            </div> */}
                            <div className="aboutherosection1infodescription">
                                <ul className='accordion'>
                                    <li>
                                        <input type='checkbox' name='accordion' id='first' />
                                        <label for='first'>Research</label>
                                        <div className='content'>
                                            <ul className='insidelist'>
                                                <li><i class="fa-solid fa-circle"></i>
                                                    Validate your business idea through product market fit.
                                                </li>
                                                <li><i class="fa-solid fa-circle"></i>
                                                    Understand user needs and solve their problems.
                                                </li>
                                                <li><i class="fa-solid fa-circle"></i>
                                                    Examine customer requirements and scalability needs.
                                                </li>
                                                <li><i class="fa-solid fa-circle"></i>
                                                    Choose platforms (mobile, desktop) and ensure industry standards and security compliance.
                                                </li>
                                            </ul>

                                        </div>
                                    </li>
                                    <li>
                                        <input type='checkbox' name='accordion' id='second' />
                                        <label for='second'>Cloud-Native Architecture</label>
                                        <div className='content'>
                                            <ul className='insidelist'>
                                                <li><i class="fa-solid fa-circle"></i>
                                                    Design a cloud application architecture that supports MVP and future states.
                                                </li>
                                                <li><i class="fa-solid fa-circle"></i>
                                                    Focus on security, cloud economics, development, operations automation, and scalability.
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li>
                                        <input type='checkbox' name='accordion' id='third' />
                                        <label for='third'>Prototyping</label>
                                        <div className='content'>
                                            <ul className='insidelist'>
                                                <li><i class="fa-solid fa-circle"></i>
                                                    Validate technical decisions and emerging technologies.
                                                </li>
                                                <li><i class="fa-solid fa-circle"></i>
                                                    Demonstrate functionality to stakeholders cost-effectively.
                                                </li>
                                                <li><i class="fa-solid fa-circle"></i>
                                                    Prepare foundational infrastructure for MVP build.
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li>
                                        <input type='checkbox' name='accordion' id='fourth' />
                                        <label for='fourth'>Roadmap and Delivery Plan                                    </label>
                                        <div className='content'>
                                            <ul className='insidelist'>
                                                <li><i class="fa-solid fa-circle"></i>
                                                    Translate product requirements into high-level epics and user stories.
                                                </li>
                                                <li><i class="fa-solid fa-circle"></i>
                                                    Define and prioritize the MVP.
                                                </li>
                                                <li><i class="fa-solid fa-circle"></i>
                                                    Develop a phased roadmap to realize business value.
                                                </li>
                                                <li><i class="fa-solid fa-circle"></i>
                                                    Create a delivery plan including resource allocation and costs.
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li>
                                        <input type='checkbox' name='accordion' id='fifth' />
                                        <label for='fifth'>Cloud Infrastructure Build-Out and DevOps</label>
                                        <div className='content'>
                                            <ul className='insidelist'>
                                                <li><i class="fa-solid fa-circle"></i>
                                                    Automate infrastructure deployment and configuration.

                                                </li>
                                                <li><i class="fa-solid fa-circle"></i>
                                                    Implement Continuous Integration (CI) for development automation.

                                                </li>
                                                <li><i class="fa-solid fa-circle"></i>
                                                    Implement Continuous Delivery (CD) for build and release automation.
                                                </li>
                                                <li><i class="fa-solid fa-circle"></i>
                                                    Integrate Continuous Testing (CT) into release pipelines.
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li>
                                        <input type='checkbox' name='accordion' id='sixth' />
                                        <label for='sixth'>Minimum Viable Product (MVP)</label>
                                        <div className='content'>
                                            <ul className='insidelist'>
                                                <li><i class="fa-solid fa-circle"></i>
                                                    Develop and test MVP features efficiently using agile frameworks and DevOps practices.
                                                </li>
                                                <li><i class="fa-solid fa-circle"></i>
                                                    Validate designs for engaging user experiences.
                                                </li>
                                                <li><i class="fa-solid fa-circle"></i>
                                                    Optimize infrastructure and maintain Infrastructure as Code.
                                                </li>
                                                <li><i class="fa-solid fa-circle"></i>
                                                    Maintain CI/CD scripting and automated testing.
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li>
                                        <input type='checkbox' name='accordion' id='seventh' />
                                        <label for='seventh'>Managed Cloud</label>
                                        <div className='content'>
                                            <ul className='insidelist'>
                                                <li>
                                                    Ensure application reliability post-production with:
                                                </li>
                                                <li><i class="fa-solid fa-circle"></i>
                                                    Advanced monitoring for proactive service management.
                                                </li>
                                                <li><i class="fa-solid fa-circle"></i>
                                                    Automated management tools for scaling and security.
                                                </li>
                                                <li><i class="fa-solid fa-circle"></i>
                                                    Support teams for incident resolution according to SLA.
                                                </li>
                                                <li><i class="fa-solid fa-circle"></i>
                                                    Regular maintenance including backup testing and disaster recovery.
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
