import React from "react";
import { Link } from "react-router-dom";

export default function ContactPage(props) {

  const desc = 'Share your ideas and vision with us, and together, We can transform them into impactful solutions that drive business growth.';
  const head1 = "Let's Start a"
  const head2 = " Conversation!"
  return (
    <>
      <div className="contactpagemaincontainer">
        <div className="contactpageheader">{head1}<span>{head2}</span></div>
        <div className="contactpagedesc" >{desc}</div>
        <Link to='/contact' className="contactpagebutton">Contact Us</Link>
      </div>
    </>
  );
}
