import React from "react";
import Navbar from "../Home Page/Components/Navbar";
import Footer from "../Home Page/Components/Footer";
import ContactHero from "./Components/ContactHero";
import ContactForm from "./Components/ContactForm";
import { Link } from "react-router-dom";

export default function ContactPage(props) {

  const desc = 'Share your ideas and vision with us, and together, We can transform them into impactful solutions that drive business growth.';
  const head1 = "Let's Start a"
  const head2 = " Conversation!"
  // const desc = props.desc || 'Share your ideas and vision with us, and together, We can transform them into impactful solutions that drive business growth.';
  // const head1 = props.head1 || "Let's Start a"
  // const head2 = props.head2 || " Conversation"
  return (
    <>
      <div className="contactpagemaincontainer">
        <div className="contactpageheader">{head1}<span>{head2}</span></div>
        <div className="contactpageheader" style={{ fontSize: '1.6rem', textAlign: 'center', width: '60vw' }}>{desc}</div>
        <Link to='/contact' style={{ textDecoration: 'none', color: 'white' }} className="contactpagebutton">Contact Us</Link>
      </div>
    </>
  );
}
