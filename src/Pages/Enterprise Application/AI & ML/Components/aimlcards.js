import React from 'react'
import img1 from '../../../../New Resources/AI & ML/Picture1.png'
import img2 from '../../../../New Resources/AI & ML/Picture2.png'
import img3 from '../../../../New Resources/AI & ML/Picture3.png'
import img4 from '../../../../New Resources/AI & ML/Picture4.png'

export default function Aimlcards() {
    const cultureData = [
        {
            img: img1,
            title: 'Computer Vision',
            description: 'Utilizing state-of-the-art technology, we empower you to analyse images and videos in ways previously unimagined. From object identification and outcome prediction to uncovering hidden patterns, our solutions provide invaluable insights without human intervention, eliminating traditional data analysis constraints and unlocking a new realm of possibilities with computer vision.'
        },
        {
            img: img2,
            title: 'Natural Language Processing (NLP)',
            description: 'Decipher unstructured data effortlessly with THRIVEX AI & ML consulting services. As data comes into businesses from diverse sources and formats, making sense of it can be overwhelming. However, with NLP, you can cut through the noise in text and audio data to extract vital insights. You can also integrate chatbots into your operations to reduce reliance on human resources for various inquiries, thereby enhancing efficiency and improving customer experience.'
        },
        {
            img: img3,
            title: 'Predictive Analytics',
            description: 'Unleash the full potential of your data with predictive analytics, enabling you to gain deeper insights and envision the future with clarity. In todays data-rich environment, navigating vast datasets can be overwhelming. Predictive analytics, empowers you to swiftly identify potential risks and opportunities, facilitating rapid, data-driven decisions to retain a competitive edge in todays dynamic business landscape.'
        },
        {
            img: img4,
            title: 'Intelligent Cognitive Automation',
            description: 'Transform your operations with intelligent cognitive automation, boosting efficiency and enhancing customer experience simultaneously. At THRIVEX, our experts can seamlessly integrate cutting-edge AI & ML-based tools like chatbots and speech-to-text recognition into your workflows. Cognitive automation streamlines data extraction from unstructured formats, optimizing workflows and enabling you to concentrate on mission-critical tasks. Elevate your business operations with the transformative power of cognitive automation.'
        },
    ]

    return (
        <>
            <div className="careerculturemaincontainer">
                <div className="careerculturechildcontainer">
                    <div className="careercultureheader">
                        <p>AI & ML <span>Services </span></p>
                    </div>
                    <div className="careerculturecards">
                        {cultureData.map((item, index) => (
                            <div className="careerculturecard" style={{margin: '2vh 1vw'}}>
                                <div className="careerculturecardimg">
                                    <img src={item.img} alt="" />
                                </div>
                                <div className="careerculturecardinfo">
                                    <div className="careeerculturecardtitle">
                                        {item.title}
                                    </div>
                                    <div className="careeerculturecarddescription">
                                        {item.description}
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
