import '../../../css/Contact Page/ContactForm.css'
import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import '../../../css/Loader/Loader.css'
import { hourglass } from 'ldrs'
import emailjs from '@emailjs/browser';

hourglass.register()

export default function ContactForm() {

  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);
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

  function disableScroll() {
    document.body.classList.add("remove-scrolling");
  }

  function enableScroll() {
    document.body.classList.remove("remove-scrolling");
  }

  const sendMessage = async () => {
    disableScroll();
    setIsLoading(!isLoading);
    document.querySelector('.submitemailpopup').style.display = "flex";
    document.querySelector('.submitemailpopupfailed').style.display = "flex";
    let overlay = document.querySelector('.emailoverlay').style.display = "flex";

    let service_key = 'service_ktc88y9';
    let public_key = 'MBOoGx2dJN-fehq3E';
    let template_key = 'template_3hexz7p'

    let templateparams = {
      from_name: firstName,
      message: resumeText,
    }

    // emailjs
    //   .send(service_key, template_key, templateparams, public_key )
    //   .then(
    //     () => {
    //       setIsLoading(false);
    //       document.querySelector('.submitemailpopup').style.transform = "scale(1)";
    //     },
    //     (error) => {
    //       setIsLoading(false);
    //       document.querySelector('.submitemailpopupfailed').style.transform = "scale(1)";
    //       console.log('FAILED...', error);
    //     },
    //   );
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

    let res = await fetch(`https://thrivexwebbackend.onrender.com/sendmessage`, {
      method: "POST",
      body: JSON.stringify(dataSend),
      headers: {
        Accept: 'application/json',
        "Content-Type": "application/json"
      },
    })

    res = await res.json();
    if (res.msg == 'sent') {
      setIsLoading(false);
      document.querySelector('.submitemailpopup').style.transform = "scale(1)";
    } else {
      setIsLoading(false);
      document.querySelector('.submitemailpopupfailed').style.transform = "scale(1)";
    }
  }

  const checkEveryField = () => {
    emptyCounter = 0;
    const elements = document.getElementsByClassName("sapbtpinputtext");
    const errormsg = document.getElementsByClassName("formerrormessage");
    for (let i = 0; i < elements.length; i++) {
      const element = elements[i];
      if (element.value == "") {
        element.style.border = "1px solid red"
        emptyCounter++;
        errormsg[i].style.visibility = "visible"
        errormsg[i].innerHTML = "This field cannot be empty"

      } else if (element.value == "Select...") {
        element.style.border = "1px solid red"
        emptyCounter++;
        errormsg[i].style.visibility = "visible"
        errormsg[i].innerHTML = "This field cannot be empty"
      } else {
        errormsg[i].style.visibility = "hidden"
        element.style.border = "none"
      }
    }
    if (elements[3].children[1].value.length < 14) {
      elements[3].style.border = "1px solid red"
      errormsg[3].style.visibility = "visible"
      errormsg[3].innerHTML = "This field cannot be empty"
      emptyCounter++;
    } else {
      elements[3].style.border = "none"
      errormsg[3].style.visibility = "hidden"
    }

    if (!elements[2].value.includes("@") || !elements[2].value.includes(".com")) {
      elements[2].style.border = "1px solid red"
      errormsg[2].style.visibility = "visible"
      errormsg[2].innerHTML = "Please enter a valid email"
      emptyCounter++;
    } else {
      elements[2].style.border = "1px solid red"
      errormsg[2].style.visibility = "visible"
    }


    if (emptyCounter == 0) {
      sendMessage();
    }
  }

  return (
    <>
      {isLoading && <l-hourglass id="loadingtimer"
        size="100"
        bg-opacity="0.1"
        speed="1.8"
        color="#0eaae3"
      ></l-hourglass>}
      <div className='dataenginfomaincontainer' >
        <div className="dataenginfochildcontainer">
          <div className='sapbtpformsection' >
            <div className='dataenginfomainheader'>
              Tell us about your needs
            </div>
            <div className='sapbtpformbody' style={{ marginTop: '1vh' }}>
              <div className='sapbtpinputbox sapbtpselect sapbtpselect2'>
                <label>First Name<span>*</span></label>
                <input type='text' className='sapbtpinputtext' value={firstName} onChange={(e) => { setFirstName(e.target.value) }} />
                <p className='formerrormessage'>demo</p>
              </div>
              <div className='sapbtpinputbox'>
                <label>Last Name<span>*</span></label>
                <input type='text' className='sapbtpinputtext' value={lastName} onChange={(e) => { setLastName(e.target.value) }} />
                <p className='formerrormessage'>demo</p>
              </div>
              <div className='sapbtpinputbox'>
                <label>Email Address<span>*</span></label>
                <input type='text' className='sapbtpinputtext' value={emailAddress} onChange={(e) => { setEmailAddress(e.target.value) }} />
                <p className='formerrormessage'>demo</p>
              </div>
              <div className='sapbtpinputbox sapbtpselect sapbtpselect2'>
                <label>Phone Number<span>*</span></label>
                <PhoneInput
                  inputStyle={{ fontSize: '1.3rem' }}
                  country={"in"}
                  enableSearch={true}
                  value={phoneNumber}
                  onChange={(phone) => setPhoneNumber(phone)}
                  className='sapbtpinputtext'
                />
                <p className='formerrormessage'>demo</p>
              </div>
              <div className='sapbtpinputbox'>
                <label>Your Role<span></span></label>
                <input type='text' className='sapbtpinputtext' value={position} onChange={(e) => { setPosition(e.target.value) }} />
                <p className='formerrormessage'>demo</p>
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
                <p className='formerrormessage'>demo</p>
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
                <p className='formerrormessage'>demo</p>
              </div>
              <div className='sapbtpinputbox sapbtptextarea'>
                <label>Your Message<span>*</span></label>
                <textarea className='sapbtpinputtext' type='text' placeholder='Minimum 100 characters' rows={10} value={resumeText} onChange={(e) => { setResumeText(e.target.value) }} />
                <p className='formerrormessage'>demo</p>
              </div>
              <div className='sapbtpprivacypolicy'>
                Your data will be processed by Thrivex in accordance with our <Link to='/privacypolicy'>Privacy Policy</Link>
              </div>
              <div className='sapbtpsendmsgbtn' onClick={checkEveryField}>
                Send Message <i class="fa-solid fa-paper-plane"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="emailoverlay" style={{ height: '272vh' }}></div>
        <div className="submitemailpopup">
          <div className="submitemailpopupchild">
            <div className="submitemailpopuphead">
              <i class="fa-solid fa-check"></i>
            </div>
            <div className="submitemailpopupdesc">
              <p>Thank You</p>
              <label>Your Information has been submitted.</label>
              <label>we will contact you shortly.</label>
              <Link to='/' onClick={() => { enableScroll() }} className='submitemailpopupdescbackbtn'>Back Home</Link>
            </div>
          </div>
        </div>
        <div className="submitemailpopupfailed">
          <div className="submitemailpopupchild">
            <div className="submitemailpopuphead">
              <i class="fa-solid fa-xmark"></i>
            </div>
            <div className="submitemailpopupdesc">
              <p>Sorry :(</p>
              <label>Your Information count not be sent.</label>
              <label>Please try again.</label>
              <Link to='/' onClick={() => { enableScroll() }} className='submitemailpopupdescbackbtn'>Back Home</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
