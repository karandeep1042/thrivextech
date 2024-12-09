import React, { useState } from "react";
import "../../css/Home Page/Navbar.css";
import img from "../../Images/Home Page/imgonline-com-ua-dexifqZe3KKrlaiVF.jpg";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [sideBarActive, setSideBar] = useState(false);

  const changeNavBar = () => {
    if (window.scrollY > 40) {
      document.getElementById('navbar').classList.add('navbaractive');
    } else {
      document.getElementById('navbar').classList.remove('navbaractive');
    }
  }

  window.addEventListener('scroll', changeNavBar);

  const togglesidebar = () => {
    const sidebar = document.querySelector('.mobilenavbarcontentcontainer');
    if (!sideBarActive) {
      sidebar.classList.add("mobilenavbarcontentcontaineractive")
      setSideBar(!sideBarActive);
    } else {
      sidebar.classList.remove("mobilenavbarcontentcontaineractive")
      setSideBar(!sideBarActive);
    }
  }

  const toggleAccordion = (e) => {
    const faqs = document.querySelectorAll('.accordionicon');
    const faqsans = document.querySelectorAll('.edqandaanswersparent');
    console.log(e);

    faqsans[e].classList.toggle("edqandaansweractives");
    faqs[e].classList.toggle("accordioniconrotate");
    if (!faqs[e].className.includes("edqandaansweractives")) {
      faqs[e].classList.add("edqandaansweractives");
      faqs[e].style.transform = "rotate(180deg";
      faqsans[e].style.display = "flex";
    } else {
      faqs[e].classList.remove("edqandaansweractives");
      faqs[e].style.transform = "rotate(0deg)";
      faqsans[e].style.display = "none";
    }
  }

  const sidebardata = [
    {
      head: 'About',
      list1: [
        {
          head: 'Corporate Overview',
          link: '',
          list2: [
            {
              title: 'Our Story',
              link: '/about'
            },
            {
              title: 'Our Purposes',
              link: '/about'
            },
            {
              title: 'Our Values',
              link: '/about'
            },
          ],
        },
        {
          head: 'Join Our Team',
          link: '',
          list2: [
            {
              title: 'Career @ Thrivex',
              link: '/career'
            }
          ],
        }
      ]
    },
    {
      head: 'Capabilities',
      list1: [
        {
          head: 'Experience Design',
          link: '/experiencedesign',
          list2: [
            {
              title: '',
              link: ''
            },
          ],
        },
        {
          head: 'Digital Talent Solutions',
          link: '/digitaltalentsolutions',
          list2: [
            {
              title: '',
              link: ''
            },
          ],
        },
        {
          head: 'Data & AI',
          link: '',
          list2: [
            {
              title: 'Data Engineering',
              link: '/dataengineering'
            },
            {
              title: 'Insights & Analytics',
              link: '/insightsanalytics'
            },
            {
              title: 'AI & ML',
              link: '/aiml'
            },
          ],
        },
        {
          head: 'Engineering',
          link: '',
          list2: [
            {
              title: 'Sotware Engineering',
              link: '/softwaredevelopment'
            },
            {
              title: 'Modernization',
              link: '/modernization'
            },
            {
              title: 'Cloud Native',
              link: '/cloudnative'
            },
            {
              title: 'Integration',
              link: '/integration'
            },
          ]
        },
        {
          head: 'Enterprise Application',
          link: '',
          list2: [
            {
              title: 'SAP S/4 HANA',
              link: '/saps4hana'
            },
          ]
        }
      ]
    },
    {
      head: 'Platforms',
      list1: [
        {
          head: '',
          link: '',
          list2: [
            {
              title: 'SAP BTP',
              link: '/sapbtp'
            },
            {
              title: 'Qlik',
              link: '/qlik'
            },
          ],
        },
      ]
    },
  ]

  return (
    <>
      <div className="navbarmaincontainer" id="navbar">
        <Link to="/" className="navbarlogosection">
          <img src={img} alt="" />
        </Link>
        <div className="ddmenulist">
          <div className="ddmenuparent">
            <p>About</p>
            {/* <div className="navbaroverlay"></div> */}
            <div className="ddmenuchild">
              <div className="ddmenucontainer ddaboutmenucontainer">
                <div className="ddmenuchildsec1">
                  <label>About Us</label>
                </div>
                <div className="ddmenuchildsec2">
                  <div className="ddmenuchildsec2item">
                    <div className="ddmenuchildsec2itemheading">
                      Corporate Overiview
                    </div>
                    <div className="ddmenuchildsec2itemdesc">
                      <Link to="/about">Our Story</Link>
                      <Link to="/about">Our Purposes</Link>
                      <Link to="/about">Our Values</Link>
                    </div>
                  </div>
                  <div className="ddmenuchildsec2item">
                    <div className="ddmenuchildsec2itemheading">
                      Join Our Team
                    </div>
                    <div className="ddmenuchildsec2itemdesc">
                      <Link to='/career'>Careers @ Thrivex</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ddmenuparent">
            <p>Capabilities</p>
            <div className="ddmenuchild ">
              <div className="ddmenucontainer ">
                <div className="ddmenuchildsec1 ">
                  <label>Capabilities</label>
                </div>
                <div className="ddmenuchildsec2">
                  <div className="ddmenuchildsec2item">
                    <div className="ddmenuchildsec2itemheading">
                      <Link to="/experiencedesign">Experience Design</Link>
                    </div>
                  </div>
                  <div className="ddmenuchildsec2item">
                    <div className="ddmenuchildsec2itemheading">
                      Data & AI
                    </div>
                    <div className="ddmenuchildsec2itemdesc">
                      <Link to="/dataengineering">Data Engineering</Link>
                      <Link to="/insightsanalytics">Insights & Analytics</Link>
                      <Link to="/aiml">AI & ML</Link>
                    </div>
                  </div>
                  <div className="ddmenuchildsec2item">
                    <div className="ddmenuchildsec2itemheading">
                      Enterprise Application
                    </div>
                    <div className="ddmenuchildsec2itemdesc">
                      <Link to='/saps4hana'>SAP S/4 HANA</Link>
                    </div>
                  </div>
                </div>
                <div className="ddmenuchildsec2">
                  <div className="ddmenuchildsec2item">
                    <div className="ddmenuchildsec2itemheading">
                      <Link to='/digitaltalentsolutions'>Digital Talent Solutions</Link>
                    </div>
                  </div>
                  <div className="ddmenuchildsec2item">
                    <div className="ddmenuchildsec2itemheading">
                      Engineering
                    </div>
                    <div className="ddmenuchildsec2itemdesc">
                      <Link to='/softwaredevelopment'>Software Engineering</Link>
                      <Link to='/modernization'>Modernization</Link>
                      <Link to='/cloudnative'>Cloud Native</Link>
                      <Link to='/integration'>Integration</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ddmenuparent">
            <p>Platforms</p>
            <div className="ddmenuchild ddplatformsmenu">
              <div className="ddmenucontainer ddplatformsmenucontainer">
                <div className="ddmenuchildsec1">
                  <label>Platforms</label>
                </div>
                <div className="ddmenuchildsec2">
                  <div className="ddmenuchildsec2item">
                    <div className="ddmenuchildsec2itemdesc ddplatformsmenuchildsec2itemdesc">
                      <Link to="/sapbtp">SAP BTP</Link>
                      <Link to="/qlik">Qlik</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="navbarcontactbtncontainer">
            <Link to="/contact" className="navbarcontactbtn">
              <p>Contact Us</p>
            </Link>
          </div>
        </div>
      </div>
      <div className="mobilenavbarmaincontainer">
        <div className="mobilenavbarchildcontainer">
          <Link to="/" className="mobilenavbarlogo">
            <img src={img} alt="" />
          </Link>
          <div className="mobilenavbarbtn">
            <i class="fa-solid fa-bars" onClick={togglesidebar}></i>
          </div>
          <div className="mobilenavbarcontentcontainer">
            <div className="mobilenavbarcontentdiv1">
              <div className="mobilenavbarcontentlogo">
                <img src={img} alt="" />
              </div>
            </div>
            <div className="mobilenavbarcontentdiv2">
              <div className="mobilenavbarcloseicon">
                <i class="fa-solid fa-angle-right" onClick={togglesidebar}></i>
              </div>
              <div className="mobilenavbarcontentinfo">
                {sidebardata.map((item, index) => (
                  <div className="edqandacontainer edqandacontainermn"  >
                    <div className="edqandaquestion" onClick={() => { toggleAccordion(index) }}>
                      <p>{item.head}</p>
                      <i className="fa-solid fa-angle-down accordionicon"></i>
                    </div>
                    <div className="edqandaanswersparent">
                      {item.list1.map((item2, index) => (
                        <div className="edqandaanswers">
                          <Link to={item2.link} className="edqandaanswerhead">
                            <p>{item2.head}</p>
                          </Link>
                          {item2.list2.map((item3, index) => (
                            <div className="edqandaanswerdesc">
                              <Link to={item3.link}>{item3.title}</Link>
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="navbarcontactbtncontainer">
              <Link to="/contact" className="navbarcontactbtn">
                <p>Contact Us</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
