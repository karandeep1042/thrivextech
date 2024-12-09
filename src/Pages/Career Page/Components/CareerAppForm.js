import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import { FadeUp } from '../../Animations/Animations';
import { hourglass } from 'ldrs'
import emailjs from '@emailjs/browser';

hourglass.register()

export default function CareerAppForm() {
    const form = useRef();
    const [position, setPosition] = useState();
    const [name, setName] = useState();
    const [emailAddress, setEmailAddress] = useState();
    const [phoneNumber, setPhoneNumber] = useState();
    const [experience, setExperience] = useState();
    const [resumeText, setResumeText] = useState();
    const [resumeFile, setResumeFile] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    let emptyCounter;

    function disableScroll() {
        document.body.classList.add("remove-scrolling");
    }

    function enableScroll() {
        document.body.classList.remove("remove-scrolling");
    }

    const sendApplication = async () => {
        disableScroll();
        setIsLoading(!isLoading);
        document.querySelector('.submitemailpopup').style.display = "flex";
        document.querySelector('.submitemailpopupfailed').style.display = "flex";
        let overlay = document.querySelector('.emailoverlay').style.display = "flex";

        let dataSend = {
            fullname: name,
            phonenumber: phoneNumber,
            position: position,
            experience: experience,
            emailaddress: emailAddress,
            resumetext: resumeText,
            resumefile: resumeFile
        }

        let res = await fetch(`https://thrivexwebbackend.onrender.com/sendapplication`, {
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
    };

    const checkEveryField = () => {
        emptyCounter = 0;
        const elements = document.getElementsByClassName("sapbtpinputtext");
        const element2 = document.querySelector(".sapbtptextarea");
        const errormsg = document.getElementsByClassName("formerrormessage");

        for (let i = 0; i < elements.length; i++) {
            const element = elements[i];
            if (element.value == "" || elements[i].value == "Select...") {
                element.style.border = "1px solid red"
                emptyCounter++;
                errormsg[i].style.visibility = "visible"
                errormsg[i].innerHTML = "This field cannot be empty"
                emptyCounter++;

            } else {
                element.style.border = "none"

                errormsg[i].style.visibility = "hidden"
            }
        }
        if (elements[4].children[1].value.length < 14) {

            elements[4].style.border = "1px solid red"
            errormsg[4].style.visibility = "visible"
            errormsg[4].innerHTML = "This field cannot be empty"
            emptyCounter++;
        } else {
            elements[4].style.border = "none"
            errormsg[4].style.visibility = "hidden"
        }

        if (!elements[3].value.includes("@") || !elements[3].value.includes(".com")) {
            elements[3].style.border = "1px solid red"
            errormsg[3].style.visibility = "visible"
            errormsg[3].innerHTML = "Please enter a valid email"
            emptyCounter++;
        } else {
            elements[3].style.border = "none"
            errormsg[3].style.visibility = "hidden"
        }
        if (emptyCounter == 0) {
            sendApplication();
        }
    }


    const customBase64Uploader = async (event) => {
        // convert file to base64 encoded
        const file = event.target.files[0];
        if (event.target.files && file) {
            const reader = new FileReader();
            reader.onloadend = function () {
                const base64data = reader.result;
                setResumeFile(base64data);
            };
            reader.readAsDataURL(file);
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
            <div className="dataenginfomaincontainer" >
                <div className="dataenginfochildcontainer" >
                    <FadeUp>

                        <div className='dataenginfomainheader'>
                            Ready to Join Us?
                        </div>
                        <div className='dataenginfomaindesc'>
                            If you believe you have what it takes to thrive at Thrivex, we want to hear from you.
                        </div>
                    </FadeUp>
                    <div className='sapbtpappointmentmaincontainer' style={{ marginTop: '4vh' }}>
                        <div className='sapbtpformsection'>
                            <div className='dataenginfomainheader' style={{ marginBottom: '1vh' }}>
                                Application Form
                            </div>
                            <form ref={form}>
                                <div className='sapbtpformbody'>
                                    <div className='sapbtpinputbox sapbtpselect sapbtpselect2'>
                                        <label>Job Position<span>*</span></label>
                                        <input type='text' className='sapbtpinputtext' value={position} onChange={(e) => { setPosition(e.target.value) }} />
                                        <p className='formerrormessage'>demo</p>
                                    </div>
                                    <div className='sapbtpinputbox'>
                                        <label>Upload Resume<span>*</span></label>
                                        <input type="file" accept=".docx,.pdf" placeholder='Maximum 5mb' onChange={(e) => { customBase64Uploader(e) }} id="sapbtpfileinput" className='sapbtpinputtext ' />
                                        <p className='formerrormessage'>demo</p>
                                    </div>
                                    <div className='sapbtpinputbox'>
                                        <label>Name<span>*</span></label>
                                        <input type='text' className='sapbtpinputtext resumefile' value={name} onChange={(e) => { setName(e.target.value) }} />
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
                                            className="sapbtpinputtext"
                                            country={"in"}
                                            enableSearch={true}
                                            value={phoneNumber}
                                            onChange={(phone) => setPhoneNumber(phone)}
                                        />
                                        <p className='formerrormessage'>demo</p>
                                    </div>
                                    <div className='sapbtpinputbox sapbtpselect sapbtpselect2'>
                                        <label>Select Experience<span>*</span></label>
                                        <select value={experience} onChange={(e) => { setExperience(e.target.value) }} className='sapbtpinputtext'>
                                            <option>Select...</option>
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                            <option>6</option>
                                            <option>7</option>
                                            <option>8</option>
                                            <option>9</option>
                                            <option>10</option>
                                            <option>10+</option>
                                        </select>
                                        <p className='formerrormessage'>demo</p>
                                    </div>
                                    <div className='sapbtpinputbox sapbtptextarea'>
                                        <label>Paste Resume<span>*</span></label>
                                        <textarea type='text' minLength={100} placeholder='Minimum 100 characters' rows={10} value={resumeText} onChange={(e) => { setResumeText(e.target.value) }} className='sapbtpinputtext' />
                                        <p className='formerrormessage'>demo</p>
                                    </div>
                                    <div className='sapbtpprivacypolicy'>
                                        Your data will be processed by Thrivex in accordance with our <Link to='/privacypolicy'>Privacy Policy</Link>
                                    </div>
                                    <div className='sapbtpsendmsgbtn' onClick={checkEveryField}>
                                        Submit Application <i class="fa-solid fa-paper-plane"></i>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div >
                </div>
            </div>
            <div className="emailoverlay" style={{ height: '536.5vh' }}></div>
            <div className="submitemailpopup">
                <div className="submitemailpopupchild">
                    <div className="submitemailpopuphead">
                        <i class="fa-solid fa-check"></i>
                    </div>
                    <div className="submitemailpopupdesc">
                        <p>Thank You!</p>
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
        </>
    )
}
