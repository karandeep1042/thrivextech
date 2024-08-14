import React from 'react';
import img1 from '../../Images/astronaut-removebg.png';
import "../../css/Error 404 Page/Error404Page.css"
import { Link } from 'react-router-dom';

export default function Error404Page() {
    return (
        <>
            <div className="errorpagemaincontainer">
                <div className="errorbgimage">
                    <img src={img1} alt="" />
                </div>
                <div className="errorpagecontentparent">
                    <div className="errorpagecontent">
                        <div className="errorpageinfo">
                            <div className="errorpageheader1">Oh no!</div>
                            <div className="errorpageheader2">We have a problem</div>
                            <div className="errorpageheader3"><p>404</p></div>
                            <div className="errorpageheader4">Page not found</div>
                        </div>
                        <div className="errorpagebtncontainer">
                            <Link to='/' className="errorpagebtn" style={{ textDecoration: 'none' }}>
                                Go Home <i className="fa-solid fa-angle-right"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
