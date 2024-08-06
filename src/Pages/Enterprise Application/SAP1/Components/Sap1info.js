import React from 'react'
import img1 from '../../../../New Resources/SAP S4 HANA/list1.png'
import img2 from '../../../../New Resources/SAP S4 HANA/list2.png'
import img3 from '../../../../New Resources/SAP S4 HANA/list3.png'
import img4 from '../../../../New Resources/SAP S4 HANA/list4.png'
import '../../../../New css/SAP S4 HANA/Sap1info.css'

export default function Sap1info() {
  return (
    <>
      <div className="sap1infomaincontainer">
        <div className="sap1infochildcontainer">
          <div className="sap1infodiv1">
            <div className="sap1infomainheader">
              <p>Why SAP S/4 HANA?</p>
            </div>
            <div className="sap1infomaindesc">
              <p>SAP S/4HANA introduces a fresh approach to operations. Embrace the potential of this intelligent ERP, engineered to simplify and automate business workflows, empowering your company to advance in digital innovation. Its primary advantages encompass:</p>
            </div>
          </div>
          <div className="sap1infodiv2">
            <div className="sap1infolists">
              <div className="sap1infolist" >
                <img src={img1} alt="" />
              </div>
              <div className="sap1infolist" >
                <img src={img2} alt="" />
              </div>
              <div className="sap1infolist" >
                <img src={img3} alt="" />
              </div>
              <div className="sap1infolist" >
                <img src={img4} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
