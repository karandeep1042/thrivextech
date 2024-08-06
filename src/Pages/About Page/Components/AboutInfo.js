import React from "react";
import "../../../css/Home Page/HomeInfo.css";
import img1 from '../../../Resources/ba-006.webp'
import '../../../css/About Page/AboutInfo.css'
import { Link } from "react-router-dom";

export default function AbuotInfo() {
  return (
    <>
      <div className="careerinfomaincontainer">
        <div className="careerinfochildcontainer">
          <div className="careerinfodiv1">
            <div className="careerinfoheader">
              <p>Our Purpose</p>
            </div>
            <div className="careerinfodesc">
              <p>Our purpose is to help businesses navigate the ever-evolving digital landscape and achieve their full potential. We believe that technology is a powerful tool for growth and innovation, and we're here to guide you on your digital journey.</p>
            </div>
          </div>
          <div className="careerinfodiv1">
            <div className="careerinfoheader">
              <p>Our Mission</p>
            </div>
            <div className="careerinfodesc">
              <p>Our mission is to be your trusted partner in digital transformation. We achieve this by:</p>
              <ul style={{ marginTop: '3vh' }}>
                <li>Understanding your unique needs and challenges.</li>
                <li>Developing customized solutions that drive measurable results.</li>
                <li>Delivering exceptional service and support every step of the way.</li>
              </ul>
            </div>
          </div>
          <div className="careerinfodiv1">
            <div className="careerinfoheader">
              <p>Our Vision</p>
            </div>
            <div className="careerinfodesc">
              <p>We envision a future where businesses of all sizes can leverage the power of technology to thrive. We are committed to being at the forefront of innovation, helping our clients stay ahead of the curve.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
