import React, { useEffect } from 'react'
import '../../../../css/Data & AI/DataAICards2.css'
import img1 from '../../../../Images/Data & AI/Trending Technologies/Microsoft_logo_(2012).svg.webp'
import img2 from '../../../../Images/Data & AI/Trending Technologies/Google_Cloud_logo.svg.png'
import img3 from '../../../../Images/Data & AI/Trending Technologies/Snowflake_Logo.svg.png'
import img4 from '../../../../Images/Data & AI/Trending Technologies/databricks-logo.png'
import img5 from '../../../../Images/Data & AI/Trending Technologies/Qlik Logo No Trademark 2 Color Positive RGB.png'
import img6 from '../../../../Images/Data & AI/Trending Technologies/640px-Tableau_Logo.png'
import img7 from '../../../../Images/Data & AI/Trending Technologies/power-bi_logo.png'
import img8 from '../../../../Images/Data & AI/Trending Technologies/SAP_2011_logo.svg.png'
import img9 from '../../../../Images/Data & AI/Trending Technologies/logo-btp.png'
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
