import React from "react";
import '../../App.css';
import './About.css'
function ContactComponent() {
    return(
        <>
            <div className="contactme" id="contact">
                <div className="contactoverlay">
                    <div className="container">
                        <div className="form">
                            <form action="" onSubmit="">
                                <div className="about-p">
                                    <h2 >Contact Us</h2>
                                    <span>Full Name</span>
                                    <br />
                                    <input className="input100" type="text" name="fullName" required/>
                                    <br /><span>Phone Number</span><br/>

                                    <input className="input100" type="text" name="phone" required/>

                                    <br /> <span>Enter Email</span> <br />
                                    <input className="input100" type="text" name="email" required />
                                    <br />
                                </div>

                                <div className="about-p">
                                    <span>Message</span>
                                    <br /><textarea name="message" required></textarea><br />
                                    <button className="about-btn">SUBMIT</button>

                                    <div className="row"></div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

function About() {
    return (
        <div>
            <section className="section bg-light border-bottom">
                <div className="container">
                    <h5 className= "about-heading">Our Company</h5>
                    <hr className="kill-me"/>
                    <div className= "underline"></div>
                    <p className="about-p">
                        We are a service to the Nittany Lion students of Penn State Harrisburg to make sure they have the necessities
                        they need to pursue their college career. We only provide the best brand and quality of food, produce, etc. to
                        insure that our students will be satisfied.
                    </p>
                </div>
            </section>
            {/* Contact Us */}
            <div className="App">
                <ContactComponent />
            </div>
        </div>
    );
}

export default About;