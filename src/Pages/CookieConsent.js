import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../css/CookieConsent.css'
import posthog from 'posthog-js'
import { useCookies } from 'react-cookie';

export default function CookieConsent() {

    // const [showbanner, setbanner] = useState(true);
    // const [cookies, setCookie] = useCookies(["cookieConsent"]);

    const giveCookieConsent = () => {
        document.querySelector(".cookieconsentparentcontainer").style.display = "none";
        // setCookie("cookieConsent", true, { path: "/" })
        setCookie("cookie", true, 30);
    }

    const setCookie = (cName, cValue, expDays) => {
        let date = new Date();
        date.setTime(date.getTime() + (expDays * 24 * 60 * 60 * 1000));
        const expires = "expires=" + date.toUTCString();
        document.cookie = cName + "=" + cValue + "; " + expires + "; path=/";
    }

    const getCookie = (cName) => {
        const name = cName + "=";
        const cDecoded = decodeURIComponent(document.cookie);
        const cArr = cDecoded.split("; ");
        let value;
        cArr.forEach(val => {
            if (val.indexOf(name) === 0) {
                value = val.substring(name.length);
            }
        })
        return value;
    }

    const cookieMessage = () => {
        if (!getCookie("cookie")) {
            document.querySelector(".cookieconsentparentcontainer").style.display = "flex";
        }
        else {
            document.querySelector(".cookieconsentparentcontainer").style.display = "none";
        }
    }

    window.addEventListener("load", cookieMessage);

    return (
        <>
            <div className="cookieconsentparentcontainer">
                <div className='cookieconsentmaincontainer' id="cookieconsentmaincontainer">
                    <div className="cookieconsentsec1">
                        <i class="fa-brands fa-codiepie"></i>
                        <p>Cookies Consent</p>
                    </div>
                    <div className="cookieconsentsec2">
                        <p>
                            In order to provide you with the most relevant and personalized experience, we have set our website to store cookies on your computer. By accepting, you agree that you are happy for us to use these cookies. To find out more about the cookies we use, see our 
                            <Link to='/privacypolicy'> Privacy Policy.</Link></p>
                    </div>
                    <div className="cookieconsentsec3">
                        <div className="cookieconsentacceptbtn" onClick={giveCookieConsent}>
                            Accept
                        </div>
                        <div className="cookieconsentdeclinebtn" onClick={giveCookieConsent}>
                            Decline
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
