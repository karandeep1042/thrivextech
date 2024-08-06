import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { FileUpload } from 'primereact/fileupload';
import MuiPhoneNumber from 'material-ui-phone-number';
import emailjs from '@emailjs/browser';
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";

export default function CareerAppForm() {
    const form = useRef();
    const [position, setPosition] = useState();
    const [name, setName] = useState();
    const [emailAddress, setEmailAddress] = useState();
    const [phoneNumber, setPhoneNumber] = useState();
    const [experience, setExperience] = useState();
    const [resumeText, setResumeText] = useState();
    const [resumeFile, setResumeFile] = useState(null);
    let emptyCounter;

    const sendApplication = async () => {
        let dataSend = {
            fullname: name,
            phonenumber: phoneNumber,
            position: position,
            experience: experience,
            emailaddress: emailAddress,
            resumetext: resumeText,
            resumefile: resumeFile
        }

        const res = await fetch(`https://thrivexwebbackend.onrender.com/sendapplication`, {
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
    };

    const checkEveryField = () => {
        // console.log(document.getElementById("sapbtpfileinput").value);
        console.log(document.querySelector('resumefile'));
        emptyCounter = 0;
        const elements = document.getElementsByClassName("sapbtpinputtext");
        console.log(elements);

        for (let i = 0; i < elements.length; i++) {
            const element = elements[i];
            if (element.value == "" || elements[i].value == "Select...") {
                element.style.border = "1px solid red"
                emptyCounter++;
            } else {
                element.style.border = "none"
            }
        }
        console.log(emptyCounter);
        if (emptyCounter == 0) {
            sendApplication();
        }
    }


    const customBase64Uploader = async (event) => {
        // convert file to base64 encoded
        const file = event.target.files[0];
        console.log(event.target.value);
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
            <div className="sapbtpappointmentparentcontainer" style={{ width: '100vw' }}>
                <div className="sapbtpappointmentchildcontainer" style={{ width: '65vw', margin: 'auto' }}>
                    <div className='careerappformheadercontainer'>
                        Ready to Join Us?
                    </div>
                    <div className='careerappformdesc'>
                        If you believe you have what it takes to thrive at Thrivex, we want to hear from you.
                    </div>
                    <div className='sapbtpappointmentmaincontainer' style={{ marginTop: '4vh' }}>
                        <div className='sapbtpformsection'>
                            <div className='sapbtpformheader'>
                                Application Form
                            </div>
                            <form ref={form}>
                                <div className='sapbtpformbody'>
                                    <div className='sapbtpinputbox sapbtpselect sapbtpselect2'>
                                        <label>Job Position<span>*</span></label>
                                        <input type='text' className='sapbtpinputtext' value={position} onChange={(e) => { setEmailAddress(e.target.value) }} />
                                    </div>
                                    <div className='sapbtpinputbox'>
                                        <label>Upload Resume<span>*</span></label>
                                        <input type="file" name="" onChange={(e) => { customBase64Uploader(e) }} id="sapbtpfileinput" className='sapbtpinputtext ' />
                                    </div>
                                    <div className='sapbtpinputbox'>
                                        <label>Name<span>*</span></label>
                                        <input type='text' className='sapbtpinputtext resumefile' value={name} onChange={(e) => { setName(e.target.value) }} />
                                    </div>
                                    <div className='sapbtpinputbox'>
                                        <label>Email Address<span>*</span></label>
                                        <input type='text' className='sapbtpinputtext' value={emailAddress} onChange={(e) => { setEmailAddress(e.target.value) }} />
                                    </div>
                                    <div className='sapbtpinputbox sapbtpselect sapbtpselect2'>
                                        <label>Phone Number<span>*</span></label>
                                        {/* <MuiPhoneNumber defaultCountry={'in'} value={phoneNumber} onChange={(e) => { setPhoneNumber(e.target.value) }} style={{ color: 'white', width: '100%', borderBottom: '1px solid transparent' }} /> */}
                                        <PhoneInput
                                            inputStyle={{ fontSize: '1.3rem' }}
                                            country={"in"}
                                            enableSearch={true}
                                            value={phoneNumber}
                                            onChange={(phone) => setPhoneNumber(phone)}
                                        />
                                    </div>
                                    <div className='sapbtpinputbox sapbtpselect sapbtpselect2'>
                                        <label>Select Experience<span>*</span></label>
                                        <select value={experience} onChange={(e) => { setExperience(e.target.value) }} className='sapbtpinputtext'>
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
                                    </div>
                                    <div className='sapbtpinputbox sapbtptextarea'>
                                        <label>Paste Resume<span>*</span></label>
                                        <textarea type='text' minLength={100} placeholder='Minimum 100 characters' rows={10} value={resumeText} onChange={(e) => { setResumeText(e.target.value) }} className='sapbtpinputtext' />
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
        </>
    )
}
