import React from 'react'
import '../../../../New css/Data & AI/Insights & Analytics/InsightsAnalyticsInfo.css'
import img1 from '../../../../New Resources/Insights & Analytics/info.png'

export default function InsightsAnalyticsInfo() {

    const infodata = [
        {
            header: "Tool Agnostic Technology Recommendations for Maximum Impact",
            description: "Recognizing the uniqueness of every business, we conduct a comprehensive analysis to understand your specific needs, market demands, and revenue potential. Based on this understanding, we recommend the best-suited technology solutions to optimize your business potential."
        },
        {
            header: "Realize Tangible Business Benefits",
            description: "Accelerate your data reporting processes and minimize time to market with our agile data management solutions. Experience increased ROI and enhanced efficiency as we guide you towards tangible business benefits, driving growth and success at every turn."
        },
        {
            header: "Create Compelling Narratives from Data",
            description: "While out-of-the-box data visualization software may fall short, we ensure tailored implementation that aligns seamlessly with your business objectives, facilitating a more efficient understanding of consumer behavior and trends."
        },
        {
            header: "Preparing for the Agile Future",
            description: "In a rapidly evolving landscape, agility is paramount. We equip your business and teams with cutting-edge analytics tools and comprehensive training, ensuring readiness to navigate unpredictable challenges and seize emerging opportunities."
        },
    ]

    return (
        <>
            <div className="insightsanalyticsinfomaincontainer">
                <div className="insightsanalyticsinfochildcontainer">
                    <div className="insightsanalyticsinfodiv1">
                        <div className="insightsanalyticsinfoheader">
                            <p>Our Approach to Insights & Analytics</p>
                        </div>
                        <div className="insightsanalyticsinfodescription">
                            <p>With the right business intelligence tools, we empower you to delve deep into consumer behavior, driving profitability, sustainability, and transformative change throughout your organization. We collaborate closely with you to implement intelligent solutions that revolutionize your business operations, both internally and externally. This translates into enhanced agility and decision-making through actionable business insights that inform present strategies and propel your business towards future success.</p>
                        </div>
                    </div>
                    <div className="insightsanalyticsinfodiv2">
                        <img src={img1} alt="" />
                        {/* <div className="insightsanalyticsinfolists">
                            {infodata.map((item, index) => (
                                <div className="insightsanalyticsinfolist">
                                    <div className="insightsanalyticsinfolistheader">
                                        <p>{item.header}</p>
                                    </div>
                                    <div className="insightsanalyticsinfolistdescription">
                                        <p>{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    )
}
