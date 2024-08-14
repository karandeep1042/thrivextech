import React from "react";
import "../../../css/About Page/AboutHero.css";
import { FadeUp } from "../../Animations/Animations";

export default function AboutHero() {
  return (
    <>
      <div className="dataengheromaincontainer">
        <div className="dataengherodiv1">
          <div className="dataengherodiv1childcontainer">
            <div className="dataengheromainheader">
              <p>About Us</p>
            </div>
          </div>
        </div>
        <div className="dataengherodiv2">
          <div className="dataengherolists">
            <div className="dataengherolist">
              <FadeUp>
                <div className="dataenginfomainheader">
                  <p >Our Story</p>
                </div>
                <div className="dataenginfomaindesc">
                  <p>Thrivex Technologies started with a spark – a shared passion for using technology to revolutionize businesses. We envisioned a company that blends cutting-edge solutions with a strong emphasis on quality and innovation. Today, that spark has grown into a team of dedicated tech enthusiasts and experts, all committed to empowering your business with the latest solutions and insights.</p>
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
