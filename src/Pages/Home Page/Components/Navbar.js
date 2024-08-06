import React, { useState } from "react";
import "../../../css/Home Page/Navbar.css";
import img from "../../../Resources/navbarlogo.jpg";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [sideBarActive, setSideBar] = useState(false);
  const [sideBarServiceActive, setSideBarService] = useState(false);
  const navbaroptionsaarr = [
    // { title: "Home", link: '/' },
    // { title: "About Us", link: '/about' },
    // { title: "Insights", link: '/browseblogs' },
    // { title: "Career", link: '/career' },
    // { title: "Contact", link: '/contact' },
  ];

  const changeNavBar = () => {
    if (window.scrollY > 40) {
      document.getElementById('navbar').classList.add('navbaractive');
    } else {
      document.getElementById('navbar').classList.remove('navbaractive');
    }
  }

  window.addEventListener('scroll', changeNavBar);

  const togglesidebar = () => {
    const sidebar = document.querySelector('.sidebar');
    if (!sideBarActive) {
      sidebar.style.display = 'flex';
      setSideBar(!sideBarActive);
    } else {
      sidebar.style.display = 'none';
      setSideBar(!sideBarActive);
    }
  }

  const togglesidebarservicemenu = () => {
    const sidebar = document.querySelector('.sidebarserviceddmenu');
    const serviceicon = document.querySelector('.sidebarangledown');
    if (!sideBarServiceActive) {
      sidebar.style.display = 'flex';
      console.log(serviceicon.style.rotate = "180deg");
      setSideBarService(!sideBarServiceActive);
    } else {
      console.log(serviceicon.style.rotate = "0deg");
      sidebar.style.display = 'none';
      setSideBarService(!sideBarServiceActive);
    }
  }

  const togglesidebareamenu = () => {
    const sidebar = document.querySelector('.mobileeamenu');
    const serviceicon = document.getElementById('ealogo');
    const eamenuheader = document.querySelector('.mobileeamenuheader');
    console.log(serviceicon);
    if (!sideBarServiceActive) {
      eamenuheader.style.paddingBottom = "15px"
      sidebar.style.display = 'flex';
      console.log(serviceicon.style.rotate = "180deg");
      setSideBarService(!sideBarServiceActive);
    } else {
      console.log(serviceicon.style.rotate = "0deg");
      eamenuheader.style.paddingBottom = "0px"
      sidebar.style.display = 'none';
      setSideBarService(!sideBarServiceActive);
    }
  }

  const togglesidebardamenu = () => {
    const sidebar = document.querySelector('.mobiledamenu');
    const serviceicon = document.getElementById('dalogo');
    const eamenuheader = document.querySelector('.mobiledamenuheader');
    console.log(serviceicon);
    if (!sideBarServiceActive) {
      eamenuheader.style.paddingBottom = "15px"
      sidebar.style.display = 'flex';
      console.log(serviceicon.style.rotate = "180deg");
      setSideBarService(!sideBarServiceActive);
    } else {
      console.log(serviceicon.style.rotate = "0deg");
      eamenuheader.style.paddingBottom = "0px"
      sidebar.style.display = 'none';
      setSideBarService(!sideBarServiceActive);
    }
  }

  const togglesidebarpemenu = () => {
    const sidebar = document.querySelector('.mobilepemenu');
    const serviceicon = document.getElementById('pelogo');
    const eamenuheader = document.querySelector('.mobilepemenuheader');
    console.log(serviceicon);
    if (!sideBarServiceActive) {
      eamenuheader.style.paddingBottom = "15px"
      sidebar.style.display = 'flex';
      console.log(serviceicon.style.rotate = "180deg");
      setSideBarService(!sideBarServiceActive);
    } else {
      console.log(serviceicon.style.rotate = "0deg");
      eamenuheader.style.paddingBottom = "0px"
      sidebar.style.display = 'none';
      setSideBarService(!sideBarServiceActive);
    }
  }

  return (
    <>
      <div className="navbarmaincontainer" id="navbar">
        <div className="navbarlogosection">
          <img src={img} alt="" />
        </div>
        <div className="navbaroptionssection">
          <Link to='/' className="navbaroption">
            Home
          </Link>
          <div className="navbarservices" id='navbarservices'>
            <div id="navbarserviceinfo">
              <p>Services</p><i className="fa-solid fa-angle-down "></i>
            </div>
            <div className="navbarserviceddmenu">
              <Link to='/experiencedesign' className="navbarserviceddoption">Experience Design</Link>
              {/* <Link className="enterpriseApp" id="enterpriseApp">
                <div className="navbarserviceddoption">Data & AI_old</div>
                <i className="fa-solid fa-angle-left ealogo"></i>
                <div className="eamenu">
                  <Link to='/dataservices' className="navbarserviceddoption">Data Services</Link>
                  <Link to='/buisnessintelligence' className="navbarserviceddoption">Business Inteligence</Link>
                  <Link to='/aiandml' className="navbarserviceddoption">AI & ML</Link>
                </div>
              </Link> */}
              <Link className="enterpriseApp" id="enterpriseApp">
                <div className="navbarserviceddoption">Data & AI</div>
                <i className="fa-solid fa-angle-left ealogo"></i>
                <div className="eamenu">
                  {/* <Link to='/dataai' className="navbarserviceddoption">Data & AI</Link> */}
                  <Link to='/dataengineering' className="navbarserviceddoption">Data Engineering</Link>
                  <Link to='/insightsanalytics' className="navbarserviceddoption">Insights & Analytics</Link>
                  <Link to='/aiml' className="navbarserviceddoption">AI & ML</Link>
                </div>
              </Link>
              <Link className="enterpriseApp" id="enterpriseApp">
                <div className="navbarserviceddoption">Product Engineering</div>
                <i className="fa-solid fa-angle-left ealogo"></i>
                <div className="eamenu">
                  <Link to='/softwaredevelopment' className="navbarserviceddoption">Software Development</Link>
                  <Link to='/modernization' className="navbarserviceddoption">Modernization</Link>
                  <Link to='/cloudnative' className="navbarserviceddoption">Cloud Native</Link>
                  <Link to='/integration' className="navbarserviceddoption">Integration</Link>
                </div>
              </Link>
              <Link className="enterpriseApp" id="enterpriseApp">
                <div className="navbarserviceddoption">Enterprise Applications</div>
                <i className="fa-solid fa-angle-left ealogo"></i>
                <div className="eamenu">
                  <Link to='/saps4hana' className="navbarserviceddoption">SAP S/4HANA</Link>
                  {/* <Link to='/sapstechnologyservices' className="navbarserviceddoption">SAP Technology Services</Link> */}
                </div>
              </Link>
              <Link to='/digitaltalentsolutions' className="navbarserviceddoption">Digital Talent Solutions</Link>
            </div>
          </div>
          <div className="navbarservices" id='navbarservices'>
            <div id="navbarserviceinfo">
              <p>Platforms</p><i className="fa-solid fa-angle-down "></i>
            </div>
            <div className="navbarserviceddmenu">
              <Link to='/sapbtp' className="navbarserviceddoption">SAP BTP </Link>
              <Link to='/qlik' className="navbarserviceddoption">Qlik </Link>
            </div>
          </div>
          <div className="navbarservices" id='navbarservices'>
            <div id="navbarserviceinfo">
              <p>About</p><i className="fa-solid fa-angle-down "></i>
            </div>
            <div className="navbarserviceddmenu">
              <Link to='/about' className="navbarserviceddoption">About Us</Link>
              <Link to='/career' className="navbarserviceddoption">Career </Link>
            </div>
          </div>
          {navbaroptionsaarr.map((item, index) => (
            <Link to={item.link} className="navbaroption" key={index}>
              {item.title}
            </Link>
          ))}
          <Link to='/contact' className="navbaroption" id="contactusnavbaroption" >
            Contact Us
          </Link>
        </div>
        <i className="fa-solid fa-bars mbmenubtn" onClick={togglesidebar}></i>
      </div>
      <div className="sidebar">
        <div className="sidedbarheader">
          <img src={img} alt="" />
          <i className="fa-solid fa-xmark" onClick={togglesidebar}></i>
        </div>
        <div className="sidebaroptions">
          {navbaroptionsaarr.map((item, index) => (
            <Link to={item.link} className="navbaroption" key={index}>
              {item.title}
            </Link>
          ))}
          <div className='navbarserviceinfo' id="navbarserviceinfo" onClick={togglesidebarservicemenu}>
            <p>Services</p><i className="fa-solid fa-angle-down sidebarangledown"></i>
          </div>
          <div className="sidebarserviceddmenu">
            <Link to='/digitaltalentsolutions' className="navbarserviceddoption">Digital Talent Solutions</Link>
            <Link className="navbarserviceddoption">Product Engineering</Link>
            <div className="mobileenterpriseApp" style={{ flexDirection: 'column' }} id="#enterpriseApp">
              <div className="mobileeamenuheader" onClick={togglesidebareamenu}>
                <div className="navbarserviceddoption">Enterprise Applications</div>
                <i className="fa-solid fa-angle-down" id="ealogo"></i>
              </div>
              <div className="mobileeamenu">
                <Link to='/saps4hana' className="navbarserviceddoption">SAP S/4HANA</Link>
                <Link to='/sapstechnologyservices' className="navbarserviceddoption">SAP Technology Services</Link>
              </div>
            </div>
            <div className="mobileenterpriseApp" style={{ flexDirection: 'column' }} id="#dataanalytics">
              <div className="mobiledamenuheader" onClick={togglesidebardamenu}>
                <div className="navbarserviceddoption">Data & Analytics</div>
                <i className="fa-solid fa-angle-down" id="dalogo"></i>
              </div>
              <div className="mobiledamenu">
                <Link to='/dataservices' className="navbarserviceddoption"> Data Services</Link>
                <Link to='/buisnessintelligence' className="navbarserviceddoption"> Buisness Intelligence</Link>
                <Link to='/aiandml' className="navbarserviceddoption"> AI & ML Services</Link>
              </div>
            </div>


            <div className="mobileenterpriseApp" style={{ flexDirection: 'column' }} id="#dataanalytics">
              <div className="mobilepemenuheader" onClick={togglesidebarpemenu}>
                <div className="navbarserviceddoption">Product Engineering</div>
                <i className="fa-solid fa-angle-down" id="pelogo"></i>
              </div>
              <div className="mobilepemenu">
                <Link to='/softwaredevelopment' className="navbarserviceddoption">Software Development</Link>
                <Link to='/modernization' className="navbarserviceddoption">Modernization</Link>
                <Link to='/cloudnative' className="navbarserviceddoption">Cloud Native</Link>
                <Link to='/integration' className="navbarserviceddoption">Integration</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
