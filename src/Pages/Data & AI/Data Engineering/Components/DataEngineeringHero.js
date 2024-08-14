import React from 'react'
import '../../../../New css/Data & AI/Data Engineering/DataEngineeringHero.css'
import { FadeUp } from '../../../Animations/Animations'

export default function DataEngineeringHero(props) {
    return (
        <>
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
                <FadeUp>
                    <div className="dataengherodiv2">
                        <div className="dataengheromaindesc">
                            <p>{props.herodescription}</p>
                        </div>
                    </div>
                </FadeUp>
            </div>
        </>
    )
}
