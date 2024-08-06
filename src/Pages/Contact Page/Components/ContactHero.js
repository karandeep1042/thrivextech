import React from "react";
import "../../../css/Contact Page/ContactHero.css";

export default function ContactHero() {
  return (
    <>
      <div className="dataengheromaincontainer">
        <div className="dataengherodiv1" style={{backgroundColor:'#3E3E3E',backgroundImage:'none'}}>
          <div className="dataengherodiv1childcontainer">
            <div className="dataengheromainheader">
              <p style={{border:'none'}}>Let's Start a <span style={{color:'#0eaae3'}}>Conversation!</span><i style={{marginLeft:'35px'}} className="fa-solid fa-comments"></i></p>
            </div>
            <div className="dataengheromainsubheader">
              <p></p>
            </div>
          </div>
        </div>
        <div className="dataengherodiv2">
          <div className="dataengheromaindesc">
            <p>Share your ideas and vision with us, and together, We can transform them into impactful solutions that drive business growth.</p>
          </div>
        </div>
      </div>
    </>
  );
}
