import React from 'react'
import img1 from '../../../../New Resources/Universal/heroImage.png'
import '../../../../New css/Data & AI/Data Engineering/DataEngineeringHero.css'

export default function DataEngineeringHero(props) {
    return (
        <>
            {/* <div className="aboutheroheader" >
                <p>Data Engineering</p>
            </div>
            <div className="dtsheromaincontainer">
                <div className="aboutherosection1">
                    <div className="ahs1info">
                        <div className="aboutherosection1infoheader" style={{ color: '#0eaae3' }}>
                            <p>Enable superior data infrastructure to unlock strategic insights, drive data-driven decisions, and achieve outstanding results.
                            </p>
                        </div>
                        <div className="aboutherosection1infodescription">
                        Transform your data into actionable business solutions through our robust suite of data management services. From big data analytics to data engineering and cloud data services, we provide tailored solutions to address your unique business needs. Our approach integrates cutting-edge technology and industry best practices to ensure your data infrastructure is not just efficient but transformative. <br />
                        </div>
                    </div>
                </div>
                <div className="aboutherosection2">
                    <img src={img1} alt="" />
                </div>
            </div> */}
            <div className="dataengheromaincontainer">
                <div className="dataengherodiv1">
                    <div className="dataengherodiv1childcontainer">
                        <div className="dataengheromainheader">
                            <p>{props.heroheader}</p>
                        </div>
                        <div className="dataengheromainsubheader">
                            <p>{props.herosubheader}</p>
                        </div>
                    </div>
                </div>
                <div className="dataengherodiv2">
                    <div className="dataengheromaindesc">
                        <p>{props.herodescription}</p>
                    </div>
                </div>
            </div>
        </>
    )
}
