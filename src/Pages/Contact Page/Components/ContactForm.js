import '../../../css/Contact Page/ContactForm.css'
import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { FileUpload } from 'primereact/fileupload';
import MuiPhoneNumber from 'material-ui-phone-number';
import Navbar from '../../Home Page/Components/Navbar';
import Footer from '../../Home Page/Components/Footer';
import emailjs from '@emailjs/browser';
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";

export default function ContactForm() {

  const form = useRef();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [position, setPosition] = useState();
  const [userIndustry, setUserIndustry] = useState();
  const [emailAddress, setEmailAddress] = useState();
  const [infoSource, setInfoSource] = useState();
  const [resumeText, setResumeText] = useState();
  let emptyCounter;

  let emailMessage = `
  Full Name : ${firstName} ${lastName}
  Phone Number : ${phoneNumber}
  Position : ${position}
  Your Industry : ${userIndustry}
  Email Address : ${emailAddress}
  How did you hear about us ? : ${infoSource}
  User Message : 
  ${resumeText}`

  const sendMessage = async () => {
    let dataSend = {
      fullname: `${firstName} ${lastName}`,
      phonenumber: phoneNumber,
      position: position,
      // experience: experience,
      emailaddress: emailAddress,
      userindustry: userIndustry,
      infosource: infoSource,
      usermessage: resumeText
    }

    const res = await fetch(`https://thrivexwebbackend.onrender.com/sendmessage`, {
      method: "POST",
      body: JSON.stringify(dataSend),
      headers: {
        Accept: 'application/json',
        "Content-Type": "application/json"
      },
    })
      .then((res) => {
        console.log(res);
        if (res.status > 199 && res.status < 300) {
          alert('Sent Successfully');
        }
      });
  }

  const customBase64Uploader = async (event) => {
    const file = event.files[0];
    const reader = new FileReader();
    let blob = await fetch(file.objectURL).then((r) => r.blob()); //blob:url

    reader.readAsDataURL(blob);

    reader.onloadend = function () {
      const base64data = reader.result;
    };
  }

  const checkEveryField = () => {
    emptyCounter = 0;
    const elements = document.getElementsByClassName("sapbtpinputtext");
    console.log(elements[3].children[1].value.length);
    for (let i = 0; i < elements.length; i++) {
      const element = elements[i];
      if (element.value == "" || elements[i].value == "Select..." || elements[3].children[1].value.length < 14) {
        element.style.border = "1px solid red"
        emptyCounter++;
      } else {
        element.style.border = "none"
      }
    }
    console.log(emptyCounter);
    if (emptyCounter == 0) {
      sendMessage();
    }
  }

  return (
    <>
      <div className='sapbtpappointmentmaincontainer' style={{ margin: '0vh auto' }}>
        <div className='sapbtpformsection' style={{ margin: '0vh auto' }}>
          <div className='sapbtpformheader'>
            Tell us about your needs
          </div>
          <div className='sapbtpformbody'>
            <div className='sapbtpinputbox sapbtpselect sapbtpselect2'>
              <label>First Name<span>*</span></label>
              <input type='text' className='sapbtpinputtext' value={firstName} onChange={(e) => { setFirstName(e.target.value) }} />
            </div>
            <div className='sapbtpinputbox'>
              <label>Last Name<span>*</span></label>
              <input type='text' className='sapbtpinputtext' value={lastName} onChange={(e) => { setLastName(e.target.value) }} />
            </div>
            <div className='sapbtpinputbox'>
              <label>Email Address<span>*</span></label>
              <input type='text' className='sapbtpinputtext' value={emailAddress} onChange={(e) => { setEmailAddress(e.target.value) }} />
            </div>
            <div className='sapbtpinputbox sapbtpselect sapbtpselect2'>
              <label>Phone Number<span>*</span></label>
              <PhoneInput
                inputStyle={{fontSize:'1.3rem'}}
                country={"in"}
                enableSearch={true}
                value={phoneNumber}
                onChange={(phone) => setPhoneNumber(phone)}
                className='sapbtpinputtext'
              />
            </div>
            <div className='sapbtpinputbox'>
              <label>Your Role<span></span></label>
              <input type='text' className='sapbtpinputtext' value={position} onChange={(e) => { setPosition(e.target.value) }} />
            </div>
            <div className='sapbtpinputbox sapbtpselect sapbtpselect2'>
              <label>Your Industry<span>*</span></label>
              <select className='sapbtpinputtext' value={userIndustry} onChange={(e) => { setUserIndustry(e.target.value) }}>
                <option>Select...</option>
                <option>Banking & Financial Services</option>
                <option>Insurance</option>
                <option>Retail & Consumer Packaged Goods</option>
                <option>Manufacturing</option>
                <option>Energy</option>
                <option>Utilities</option>
                <option>Hi-Tech</option>
                <option>Communications, Media & Entertainment</option>
                <option>Travel,Transport & Hospitality</option>
                <option>Health</option>
                <option>Life Sciences</option>
                <option>Others</option>
              </select>
            </div>
            <div className='sapbtpinputbox sapbtpselect'>
              <label>How did you hear about us<span>*</span></label>
              <select className='sapbtpinputtext' value={infoSource} onChange={(e) => { setInfoSource(e.target.value) }}>
                <option>Select...</option>
                <option>Search Engine</option>
                <option>Sales Person</option>
                <option>Trade Show / Conferences</option>
                <option>Referred by Peer</option>
                <option>Referred by Industry Analyst</option>
              </select>
            </div>
            <div className='sapbtpinputbox sapbtptextarea'>
              <label>Your Message<span>*</span></label>
              <textarea className='sapbtpinputtext' type='text' placeholder='Minimum 100 characters' rows={10} value={resumeText} onChange={(e) => { setResumeText(e.target.value) }} />
            </div>
            <div className='sapbtpprivacypolicy'>
              Your data will be processed by THRIVEX in accordance with our <Link to='/privacypolicy'>privacy policy</Link>
            </div>
            <div className='sapbtpsendmsgbtn' onClick={checkEveryField}>
              Send Message <i class="fa-solid fa-paper-plane"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
