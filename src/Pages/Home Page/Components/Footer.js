import React, { useEffect } from "react";
import "../../../css/Home Page/Footer.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Footer() {

  const location = useLocation();

  const checkRoute = (e) => {
    let str = e.target.href.slice(21);
    if(str==location.pathname){
      window.scrollTo(0, 0);
    }
  }

  

  return (
    <>
      <div className="footermaincontainer">
        <div className="footerchildcontainer">
          <div className="footersection2">
            <div className="footersection2header">Useful links</div>
            <div className="footersection2links">
              <Link className="footersection2linkschildcontainer footersection2linksheader" onClick={(e) => { checkRoute(e) }} to='/experiencedesign'>Experience Design</Link>
              <Link className="footersection2linkschildcontainer footersection2linksheader" onClick={(e) => { checkRoute(e) }} to='/digitaltalentsolutions'>Digital Talent Solutions</Link>
              <div className="footersection2linkschildcontainer">
                <div className="footersection2linksheader">
                  Data & AI
                </div>
                <div className="footersection2linksinfo">
                  <Link onClick={(e) => { checkRoute(e) }} to='/dataengineering'>Data Engineering</Link>
                  <Link onClick={(e) => { checkRoute(e) }} to='/insightsanalytics'>Insights & Analytics</Link>
                  <Link onClick={(e) => { checkRoute(e) }} to='/aiml'>AI & ML</Link>
                </div>
              </div>
              <div className="footersection2linkschildcontainer">
                <div className="footersection2linksheader">
                  Engineering
                </div>
                <div className="footersection2linksinfo">
                  <Link onClick={(e) => { checkRoute(e) }} to='/softwaredevelopment'>Software Engineering</Link>
                  <Link onClick={(e) => { checkRoute(e) }} to='/modernization'>Modernization</Link>
                  <Link onClick={(e) => { checkRoute(e) }} to='/cloudnative'>Cloud Native</Link>
                  <Link onClick={(e) => { checkRoute(e) }} to='/integration'>Integration</Link>
                </div>
              </div>
              <div className="footersection2linkschildcontainer">
                <div className="footersection2linksheader">
                  Enterprise Applications
                </div>
                <div className="footersection2linksinfo">
                  <Link onClick={(e) => { checkRoute(e) }} to='/saps4hana'>SAP S/4HANA</Link>
                </div>
                <div className="footersection2linksheader" style={{ marginTop: '4vh' }}>
                  Platforms
                </div>
                <div className="footersection2linksinfo">
                  <Link onClick={(e) => { checkRoute(e) }} to='/sapbtp'>SAP BTP</Link>
                  <Link onClick={(e) => { checkRoute(e) }} to='/qlik'>Qlik</Link>
                </div>
              </div>
              <div className="footersection2linkschildcontainer">
                <div className="footersection2linksheader">
                  About
                </div>
                <div className="footersection2linksinfo">
                  <Link onClick={(e) => { checkRoute(e) }} to='/about'>About Us</Link>
                  <Link onClick={(e) => { checkRoute(e) }} to='/career'>Career</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="footersection3">
            <div className="fs3header">Contact Info</div>
            <div className="fs3items">
              <div className="fs3item">
                <div className="fs3itemsec1">
                  <i className="fa-solid fa-phone"></i>
                </div>
                <div className="fs3itemsec2">
                  <p><b>Phone No:</b>+91-9820xxx041</p>
                  <p>Monday - Friday 10am - 8pm</p>
                </div>
              </div>
              <div className="fs3item">
                <div className="fs3itemsec1">
                  <i className="fa-regular fa-envelope"></i>
                </div>
                <div className="fs3itemsec2">
                  <p><b>Email Address:</b></p>
                  <p>connect@thethrivex.com</p>
                </div>
              </div>
              <div className="fs3item">
                <div className="fs3itemsec1">
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <div className="fs3itemsec2">
                  <p><b>Office Address:</b></p>
                  <p>Thrivex Technologies Pvt. Ltd. 4th Floor, Master Mind IV, Royal Palms, Goregaon (East), Mumbai – 400 065, Maharashtra.</p>
                </div>
              </div>
              <div className="fs3item">
                <div className="fs3itemsec1">
                  <i className="fa-brands fa-linkedin"></i>
                </div>
                <div className="fs3itemsec2">
                  <p>Follow us on LinkedIn for latest updates!</p>
                </div>
              </div>
            </div>
          </div>
          <div className="footersection4">
            <p>© Thrivex Technologies Pvt. Ltd. 2024 <Link onClick={(e) => { checkRoute(e) }} to="/privacypolicy">Privacy & Cookie Policy</Link></p>
          </div>
        </div>
      </div>
    </>
  );
}
