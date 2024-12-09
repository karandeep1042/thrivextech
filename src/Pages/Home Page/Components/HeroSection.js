import React from "react";
import "../../../css/Home Page/HeroSection.css";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from 'react-awesome-slider/dist/autoplay'
import 'react-awesome-slider/dist/styles.css'
import 'react-awesome-slider/dist/custom-animations/scale-out-animation.css'
import '../../../New css/Home Page/HeroSlider.css'
import { Link } from "react-router-dom";
import img1 from '../../../Images/Home Page/Picture1.png'
import img2 from '../../../Images/Home Page/Picture2.png'
import img3 from '../../../Images/Home Page/Picture3.png'
import img4 from '../../../Images/Home Page/Picture4.png'
import img5 from '../../../Images/Home Page/Picture5.png'
import img6 from '../../../Images/Home Page/Picture6.png'
import { FontAwesomeIcon } from '@fortawesome/fontawesome-free'

export default function HeroSection() {
  const AutoplaySlider = withAutoplay(AwesomeSlider);

  const sliderdata = [
    {
      img: img1,
      head: 'We’re THRIVEX',
      desc: 'A digitally native company that helps organizations reimagine themselves and unlock their untapped potential',
      link: '/about'
    },
    {
      img: img2,
      head: 'THRIVEX + Qlik = Data-Driven Success',
      desc: 'Empowering businesses with data-driven solutions.',
      link: '/qlik'
    },
    {
      img: img3,
      head: 'Embrace the Future with SAP BTP',
      desc: 'Unlock innovation with SAP BTP, the most comprehensive cloud platform.',
      link: '/sapbtp'
    },
    {
      img: img4,
      head: 'Transform Data into Actionable Insights',
      desc: 'Our data and insights expertise improves decision-making speed and accuracy, driving business growth and efficiency.',
      link: '/insightsanalytics'
    },
    {
      img: img5,
      head: 'Accelerate Your Digital Journey',
      desc: 'Leverage our engineering expertise to deliver innovative digital solutions and transform your business.',
      link: '/softwaredevelopment'
    },
    {
      img: img6,
      head: 'Your Success, Our Passion',
      desc: 'Achieve your business goals with our expertise-driven digital talent solutions and strong partnerships.',
      link: '/digitaltalentsolutions'
    },
  ]

  return (
    <>
      <div className="homeheromaincontainer" id="hero" >
        <AutoplaySlider play={true} interval={10000} buttons={false} animation="scaleOutAnimation" style={{ height: '100%' }}>
          {sliderdata.map((item, index) => (
            <div className="homeslidermaincontainer" >
              <img src={item.img} alt="" style={{ width: '100%' }} />
              <div className="homeslidercontent">
                <div className="homesliderhead">
                  <p>{item.head}</p>
                </div>
                <div className="homeslidersubhead">
                  <p>{item.desc}</p>
                </div>
                <div className="homesliderbtn">
                  <Link to={item.link}>Explore More <i className="fa-solid fa-arrow-right"></i></Link>
                  {/* <Link to={item.link}>Explore More <FontAwesomeIcon icon={} /></Link> */}
                </div>
              </div>
            </div>
          ))}
        </AutoplaySlider>
      </div>
    </>
  );
}
