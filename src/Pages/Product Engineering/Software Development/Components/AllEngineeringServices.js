import React from 'react'
import img5 from '../../../../Resources/Product Engineering/SWdevhero.jpg'
import img2 from '../../../../Resources/Product Engineering/modernizatiohero.jpg'
import img3 from '../../../../Resources/Product Engineering/cloudnativehero.webp'
import img4 from '../../../../Resources/Product Engineering/integrationhero.jpg'
import { Link } from 'react-router-dom'

export default function AllEngineeringServices(props) {

    const cardinfo = [
        {
            logo: "fa-solid fa-code",
            title: 'Software Development',
            link: '/softwaredevelopment',
            desc: 'Build AI-powered software solutions that shape your business'
        },
        {
            logo: "fa-regular fa-lightbulb",
            title: 'Modernization',
            link: '/modernization',
            desc: 'Build AI-powered software solutions that shape your business'
        },
        {
            logo: "fa-solid fa-cloud",
            title: 'Cloud Native Apps',
            link: '/cloudnative',
            desc: 'Build Scalable and Agile Applications with Cloud-Native Dev. Solutions'
        },
        {
            logo: "fa-solid fa-gear",
            title: 'Integration',
            link: '/integration',
            desc: 'Connecting your enterprise data and systems for powerful results'
        },
    ]

    return (
        <>
            <div className='allengsermaincontainer'>
                <div className="allengserchildcontainer">
                    <div className="allengserdiv1">
                        <div className='allengsercardsheader'>
                            Related Engineering Services
                        </div>
                    </div>
                    <div className="allengserdiv2">
                        <div className='allengsercards'>
                            {cardinfo.map((item, index) => (
                                item.title != props.name ?
                                    <Link to={item.link} className='allengsercard'>
                                        <div className="allengsercarddiv1">
                                            <div className='allengsercardimg'>
                                                <i className={item.logo}></i>
                                            </div>
                                            <div className='allengsercardheading'>
                                                {item.title}
                                            </div>
                                        </div>
                                        <div className="allengsercarddiv2">
                                            <p>{item.desc}</p>
                                        </div>
                                    </Link>
                                    : null
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
