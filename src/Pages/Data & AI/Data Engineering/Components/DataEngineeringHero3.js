import React from 'react'

import img1 from '../../../../Resources/dtshero.jpg'

export default function DataEngineeringHero3() {
    return (
        <>
            <div className="dtsheromaincontainer">
                <div className="homeinfosection1">
                    <div className="homeinfoheader" style={{ color: '#0eaae3' }}>
                        {/* Establish Your Foundation: Leveraging Our Data Services */}
                        Key Benefits
                    </div>
                    <div className="homeinfolists" >
                        <div className="dtsinfolist" >
                            <div className="dtsinfolistheader" style={{display:'flex',alignItems:'center'}}>
                                <i class="fa-solid fa-check"></i>
                                <p style={{ fontSize: '1.35rem' }}>Experience enhanced data reliability, relevance, and accessibility</p>
                            </div>
                        </div>
                        <div className="dtsinfolist">
                            <div className="dtsinfolistheader" style={{display:'flex',alignItems:'center'}}>
                                <i class="fa-solid fa-check"></i>
                                <p style={{ fontSize: '1.35rem' }}>Improve decision-making capabilities with actionable insights</p>
                            </div>
                        </div>
                        <div className="dtsinfolist">
                            <div className="dtsinfolistheader" style={{display:'flex',alignItems:'center'}}>
                                <i class="fa-solid fa-check"></i>
                                <p style={{ fontSize: '1.35rem' }}>Streamline data operations for increased operational efficiency</p>
                            </div>
                        </div>
                        <div className="dtsinfolist">
                            <div className="dtsinfolistheader" style={{display:'flex',alignItems:'center'}}>
                                <i class="fa-solid fa-check"></i>
                                <p style={{ fontSize: '1.35rem' }}>Achieve seamless integration and migration to modern data platforms</p>
                            </div>
                        </div>
                        <div className="dtsinfolist">
                            <div className="dtsinfolistheader" style={{display:'flex',alignItems:'center'}}>
                                <i class="fa-solid fa-check"></i>
                                <p style={{ fontSize: '1.35em' }}>Enhance security and compliance through robust data governance</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="aboutherosection2">
                    <img src={img1} alt="" />
                </div>
            </div>
        </>
    )
}
