import React from "react";
import "../../../css/Home Page/HomeInfo.css";
import img1 from '../../../Images/About Page/img1.png'
import '../../../css/About Page/AboutInfo.css'
import { FadeLeft, FadeRight, FadeUp } from "../../Animations/Animations";

export default function AbuotInfo() {
  return (
    <>
      <div className="dataenginfomaincontainer">
        <div className="dataenginfochildcontainer">
          <div className="careerinfodiv1">
            <FadeUp>
              <img src={img1} alt="" className="dataenginfomainpic" />
            </FadeUp>
            <FadeUp>
              <div className="dataenginfomainheader">
                <p>Our Purpose</p>
              </div>
            </FadeUp>
            <FadeUp>
              <div className="dataenginfomaindesc">
                <p>Our purpose is to help businesses navigate the ever-evolving digital landscape and achieve their full potential. We believe that technology is a powerful tool for growth and innovation, and we're here to guide you on your digital journey.</p>
              </div>
            </FadeUp>
          </div>
          <FadeUp>
            <div className="careerinfodiv1">
              <div className="dataenginfomainheader">
                <p>Our Mission</p>
              </div>
              <div className="dataenginfomaindesc">
                <p>Our mission is to be your trusted partner in digital transformation. We achieve this by:</p>
                <ul style={{ marginTop: '3vh' }}>
                  <li>Understanding your unique needs and challenges.</li>
                  <li>Developing customized solutions that drive measurable results.</li>
                  <li>Delivering exceptional service and support every step of the way.</li>
                </ul>
              </div>
            </div>
          </FadeUp>
          <FadeUp>
            <div className="careerinfodiv1">
              <div className="dataenginfomainheader">
                <p>Our Vision</p>
              </div>
              <div className="dataenginfomaindesc">
                <p>We envision a future where businesses of all sizes can leverage the power of technology to thrive. We are committed to being at the forefront of innovation, helping our clients stay ahead of the curve.</p>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </>
  );
}
