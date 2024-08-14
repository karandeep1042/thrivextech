import React from 'react'
import '../../../css/Home Page/HomeSection4.css'
import img1 from '../../../New Resources/Home/Sec3 logo/Picture1.png'
import img2 from '../../../New Resources/Home/Sec3 logo/Picture2.png'
import img3 from '../../../New Resources/Home/Sec3 logo/Picture3.png'
import img4 from '../../../New Resources/Home/Sec3 logo/Picture4.png'
export default function HomeSection4() {

    const homesection4cards = [
        {
            logo: img1,
            header: 'Co-Create. Wow Customers',
            description: 'We go beyond standard client experiences. Our tech and industry experts partner with you to co-create and co-develop superior customer journeys that leave a lasting impression.'
        },
        {
            logo: img2,
            header: 'Future-Proof Your Success',
            description: 'We leverage cutting-edge data, AI, and cloud technologies to deliver future-proof transformations. You get measurable results that drive growth, efficiency, and exceptional customer experiences.'
        },
        {
            logo: img3,
            header: 'Collaborative Partnerships.',
            description: 'We have cultivated a network of leading technology partners, industry leaders, and market experts. Together, we deliver the best possible outcomes for your business.'
        },
        {
            logo: img4,
            header: 'Focused on Agility and Speed.',
            description: "We understand the need for agility in today's market. Our streamlined processes and efficient execution help you achieve your goals faster."
        },
    ]

    return (
        <>
            <div className="homepagesection4maincontainer">
                <div className="homepagesection4childcontainer">
                    <div className="homepagesection4mainheader">
                        <p>Don't Just Transform, <span>Thrive </span>: What Makes Us Different</p>
                    </div>
                    <div className="homepagesection4cards">
                        {homesection4cards.map((item, index) => (
                            <div className="homepagesection4cardmaincontainer">
                                <div className="homepagesection4card">
                                    <div className="homepagesection4cardlogo">
                                        <img src={item.logo} alt="" />
                                    </div>
                                    <div className="homepagesection4cardheader">
                                        <p>{item.header}</p>
                                    </div>
                                    <div className="homepagesection4carddesc">
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
