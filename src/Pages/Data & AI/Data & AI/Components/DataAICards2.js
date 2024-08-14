import React, { useEffect } from 'react'
import '../../../../css/Data & AI/DataAICards2.css'
import img1 from '../../../../Resources/Data & AI/Microsoft_logo_(2012).svg.webp'
import img2 from '../../../../Resources/Data & AI/Google_Cloud_logo.svg.png'
import img3 from '../../../../Resources/Data & AI/Snowflake_Logo.svg.png'
import img4 from '../../../../Resources/Data & AI/databricks-logo.png'
import img5 from '../../../../Resources/Data & AI/Qlik Logo No Trademark 2 Color Positive RGB.png'
import img6 from '../../../../Resources/Data & AI/640px-Tableau_Logo.png'
import img7 from '../../../../Resources/Data & AI/power-bi_logo.png'
import img8 from '../../../../Resources/Data & AI/SAP_2011_logo.svg.png'
import img9 from '../../../../Resources/Data & AI/logo-btp.png'
import { SlideRight, SlideLeft, SlideUp, SlideDown, FadeDown, FadeLeft, FadeRight, FadeUp, ScaleDown, ScaleUp } from '../../../Animations/Animations';

export default function DataAICards2() {

    const cardinfo = [img1, img2, img3, img4, img5, img6, img7, img8, img9]

    const calculateWidth = () => {
        let elements = document.getElementsByClassName('dataaicards2image');
        let maxWidth=0,index;
        for (let i = 0; i < elements.length; i++) {
            const element = elements[i];
            
            if(element.clientWidth > maxWidth){
                maxWidth = element.clientWidth
                index=i;
            }
        }

        let elements2 = document.getElementsByClassName('dataaicards2maincontainercard');

        for (let i = 0; i < elements2.length; i++) {
            const element = elements2[i];
            element.style.width = `450px`
        }
    }

    // useEffect(() => {
    //     calculateWidth();
    // }, [])

    return (
        <>
            <div className="dataaicards2maincontainer">
                <FadeUp>
                    <div className="dataenginfomainheader">
                        Delivering Solutions with Leading Technologies
                    </div>
                </FadeUp>
                <div className="dataaicards2maincontainercards">
                    {cardinfo.map((item, index) => (
                        <ScaleUp>
                            <div className="dataaicards2maincontainercard">
                                <img src={item} alt="" className='dataaicards2image' style={{width:index==1||index==3?'90%':'auto'}} />
                            </div>
                        </ScaleUp>
                    ))}
                </div>
            </div>
        </>
    )
}
