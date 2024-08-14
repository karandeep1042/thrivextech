import React from 'react'
import img1 from '../../../../Images/SAP S4 HANA/list1.png'
import img2 from '../../../../Images/SAP S4 HANA/list2.png'
import img3 from '../../../../Images/SAP S4 HANA/list3.png'
import img4 from '../../../../Images/SAP S4 HANA/list4.png'

import '../../../../New css/SAP S4 HANA/Sap1info.css'
import { FadeLeft, FadeRight, FadeUp } from '../../../Animations/Animations'

export default function Sap1info() {
  return (
    <>
      <div className="dataenginfomaincontainer">
        <div className="dataenginfochildcontainer">
          <div className="dataenginfodiv1">
            <FadeUp>
              <div className="dataenginfomainheader">
                <p>Why SAP S/4 HANA?</p>
              </div>
            </FadeUp>
            <FadeUp>
              <div className="dataenginfomaindesc">
                <p>SAP S/4HANA introduces a fresh approach to operations. Embrace the potential of this intelligent ERP, engineered to simplify and automate business workflows, empowering your company to advance in digital innovation. Its primary advantages encompass:</p>
              </div>
            </FadeUp>
          </div>
          <div className="sap1infodiv2">
            <div className="sap1infolists">
              <FadeUp>
                <div className="sap1infolist" >
                  <img src={img1} alt="" />
                </div>
              </FadeUp>
              <FadeUp>
                <div className="sap1infolist" >
                  <img src={img2} alt="" />
                </div>
              </FadeUp>
              <FadeUp>
                <div className="sap1infolist" >
                  <img src={img3} alt="" />
                </div>
              </FadeUp>
              <FadeUp>
                <div className="sap1infolist" >
                  <img src={img4} alt="" />
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
