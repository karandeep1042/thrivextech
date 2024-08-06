import React from 'react'
import { Link } from 'react-router-dom'

export default function AboutInfo2() {
    return (
        <>
            <div className="careerinfomaincontainer">
                <div className="careerinfochildcontainer">
                    <div className="careerinfodiv1">
                        <div className="careerinfoheader">
                            <p>Our Values</p>
                        </div>
                        <div className="careerinfodesc">
                            <p>At Thrivex, We foster a vibrant and inclusive company culture that empowers our team members to thrive, innovate, and deliver exceptional results. Our culture is built on the following key values</p>
                        </div>
                    </div>
                    <div className="careerinfodiv1">
                        <div className="aboutinfolists">
                            <div className="aboutinfonewlist">
                                <div className="aboutinfolistheader">
                                    <i className="fa-solid fa-brain"></i>
                                    <p>Bold</p>
                                </div>
                                <div className="aboutinfolistdescription">
                                    We <span className="aboutinfolistdescriptionboldwords">dream big</span> and <span className="aboutinfolistdescriptionboldwords">push boundaries</span>. We're not afraid to take <span className="aboutinfolistdescriptionboldwords">calculated risks</span> and <span className="aboutinfolistdescriptionboldwords">champion innovative ideas. We speak our minds</span> with conviction to find the best solutions.
                                </div>
                            </div>
                            <div className="aboutinfonewlist">
                                <div className="aboutinfolistheader">
                                    <i class="fa-solid fa-sun"></i>
                                    <p>Agile</p>
                                </div>
                                <div className="aboutinfolistdescription">
                                    We move with <span className="aboutinfolistdescriptionboldwords">agility</span>, building solutions quickly and <span className="aboutinfolistdescriptionboldwords">learning</span> even faster from setbacks. We're <span className="aboutinfolistdescriptionboldwords">obsessed with impact</span>, elivering <span className="aboutinfolistdescriptionboldwords">tangible results</span> that <span className="aboutinfolistdescriptionboldwords">exceed expectations.</span>
                                </div>
                            </div>
                            <div className="aboutinfonewlist">
                                <div className="aboutinfolistheader">
                                    <i className="fa-solid fa-brain"></i>
                                    <p>Human</p>
                                </div>
                                <div className="aboutinfolistdescription">
                                    We believe in the power of <span className="aboutinfolistdescriptionboldwords">collaboration</span> and <span className="aboutinfolistdescriptionboldwords">empathy</span>. We foster a <span className="aboutinfolistdescriptionboldwords">supportive</span> environment where <span className="aboutinfolistdescriptionboldwords">everyone feels valued</span> and their <span className="aboutinfolistdescriptionboldwords">curiosity is encouraged</span>. We treat each other <span className="aboutinfolistdescriptionboldwords">respect</span> and strive to build a <span className="aboutinfolistdescriptionboldwords">positive tech ecosystem.</span>
                                </div>
                            </div>
                            <div className="careerinfodesc">
                                <p>
                                    Our dedication to our core values serves as the foundation for our unique culture, which prioritizes our customers.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="careerinfodiv1">
                        <div className="careerinfoheader">
                            <p>Join our Team</p>
                        </div>
                        <div className="careerinfodesc">
                            <p>Are you passionate about technology and making a difference? We're always looking for talented individuals to join our team. <br /><br />
                                Visit our <Link to='/career' style={{ color: '#0eaae3' }}>Careers</Link> Page to learn more about our open positions.</p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
