import React from "react";
import "../../../css/Home Page/HeroSection.css";
import img1 from '../../../Resources/home1.webp'
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from 'react-awesome-slider/dist/autoplay'
import 'react-awesome-slider/dist/styles.css'
import 'react-awesome-slider/dist/custom-animations/scale-out-animation.css'

export default function HeroSection() {

  const AutoplaySlider = withAutoplay(AwesomeSlider);

  return (
    <>
      <div className="homeheromaincontainer" id="hero" >
        <AutoplaySlider  play={true} interval={7000} buttons={false} animation="scaleOutAnimation" style={{ height: '100%' }}>
          <div style={{backgroundColor : '#0eaae3',color : 'white',fontSize : '2rem',fontWeight : '600'}}>Slide 1</div>
          <div style={{backgroundColor : '#0eaae3',color : 'white',fontSize : '2rem',fontWeight : '600'}}>Slide 2</div>
          <div style={{backgroundColor : '#0eaae3',color : 'white',fontSize : '2rem',fontWeight : '600'}}>Slide 3</div>
        </AutoplaySlider>
      </div>
    </>
  );
}
