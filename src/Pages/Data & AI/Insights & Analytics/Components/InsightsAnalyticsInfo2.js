import React from 'react'

export default function InsightsAnalyticsInfo2() {
    const activitiesdata = [
        {
            header: 'Drive revenue growth through actionable insights derived from data',
        },
        {
            header: 'Improve operational efficiency by optimizing processes based on data-driven decisions',
        },
        {
            header: 'Enhance customer satisfaction and loyalty through personalized insights',
        },
        {
            header: 'Mitigate risks with proactive identification and resolution of issues',
        },
        {
            header: 'Gain competitive advantage by staying ahead of market trends and consumer behaviour',
        },
        {
            header: 'Increase agility and responsiveness to market changes with real-time data analytics',
        },
    ]

    return (
        <>
            <div className="ednewinfo3maincontainer">
                <div className="ednewinfo3childcontainer">
                    <div className="edinfo3header">
                        <p>
                            Unlocking Business Success: Key Benefits of Data-Driven Insights
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
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
