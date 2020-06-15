import React,{useState,useEffect} from 'react';
import Navbar from '../components/NavBar'
import Footer from '../components/Footer'
import './contact.css'
const Contact = () => {
    const [navColor, setNavColor] = useState('transparent')

    useEffect(() => {
        document.addEventListener("scroll", () => {
            const backgroundcolor = window.scrollY < 100 ? "transparent" :  "#000000";
            setNavColor(backgroundcolor);
        });
    })
    return (
        <div className="contact d-flex flex-column">
            <Navbar navColor={navColor} />
            <div className="contact_header" >
                <h1> CONTACT US</h1>
                <p>We are always ready to help anytime</p>
            </div>
            
            <section id="contact_body" className="container">
                <h2>Let’s get in touch </h2>
                <div className="row">
                    <div className="col-md-8">
                        <form method="post" action="/contact-us">
                            <div className="contact_form_group">
                                <div className="contact_input_div">
                                    <label htmlFor="firstname">First Name</label>
                                    <input type="text" name="firstname" id="firstname" required/>
                                </div>
                                <div className="contact_input_div">
                                    <label htmlFor="lastname">Last Name</label>
                                    <input type="text" name="lastname" id="lastname" required/>
                                </div>
                            </div>
                            <div className="contact_input_div">
                                <label htmlFor="email">Email</label>
                                <input type="email" name="email" id="email" required/>
                            </div>
                            <div className="contact_input_div">
                                <label htmlFor="subject">Subject</label>
                                <input type="text" name="subject" id="subject" required/>
                            </div>
                            <div className="contact_input_div">
                                <label htmlFor="message">Message</label>
                                <textarea cols="5" rows="10" type="text" name="message" id="message" required></textarea>
                            </div>
                            <div className="contact_input_div">
                                <button>Leave us a message</button>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-4" >
                        <div className="contact_location">
                            <div>
                                <svg width="31" height="37" viewBox="0 0 31 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M29 15.5C29 26 15.5 35 15.5 35C15.5 35 2 26 2 15.5C2 11.9196 3.42232 8.4858 5.95406 5.95406C8.4858 3.42232 11.9196 2 15.5 2C19.0804 2 22.5142 3.42232 25.0459 5.95406C27.5777 8.4858 29 11.9196 29 15.5Z" stroke="#FF7913" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M15.5 20C17.9853 20 20 17.9853 20 15.5C20 13.0147 17.9853 11 15.5 11C13.0147 11 11 13.0147 11 15.5C11 17.9853 13.0147 20 15.5 20Z" stroke="#FF7913" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <p>Golf Estate Enugu, Enugu State, Nigeria</p>
                            </div>
                            <div>
                                <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20.4072 7C21.8723 7.28585 23.2188 8.00239 24.2743 9.0579C25.3298 10.1134 26.0463 11.4599 26.3322 12.925L20.4072 7ZM20.4072 1C23.4511 1.33815 26.2896 2.70126 28.4565 4.86551C30.6235 7.02976 31.9902 9.86651 32.3322 12.91L20.4072 1ZM30.8322 24.88V29.38C30.8339 29.7978 30.7483 30.2113 30.5809 30.594C30.4136 30.9768 30.1681 31.3204 29.8603 31.6028C29.5525 31.8852 29.189 32.1002 28.7933 32.2341C28.3976 32.3679 27.9782 32.4176 27.5622 32.38C22.9464 31.8785 18.5127 30.3012 14.6172 27.775C10.9929 25.472 7.92018 22.3993 5.61718 18.775C3.08214 14.8618 1.50454 10.4065 1.01218 5.77C0.974691 5.3552 1.02399 4.93714 1.15693 4.54244C1.28986 4.14773 1.50353 3.78503 1.78432 3.47743C2.06512 3.16983 2.40688 2.92406 2.78786 2.75578C3.16884 2.5875 3.58069 2.50039 3.99718 2.5H8.49718C9.22514 2.49284 9.93086 2.75062 10.4828 3.2253C11.0348 3.69998 11.3953 4.35917 11.4972 5.08C11.6871 6.5201 12.0394 7.93409 12.5472 9.295C12.749 9.83189 12.7927 10.4154 12.673 10.9763C12.5534 11.5373 12.2755 12.0522 11.8722 12.46L9.96718 14.365C12.1025 18.1203 15.2119 21.2297 18.9672 23.365L20.8722 21.46C21.28 21.0567 21.7949 20.7788 22.3559 20.6591C22.9168 20.5395 23.5003 20.5832 24.0372 20.785C25.3981 21.2928 26.8121 21.6451 28.2522 21.835C28.9808 21.9378 29.6463 22.3048 30.122 22.8662C30.5977 23.4277 30.8504 24.1444 30.8322 24.88Z" stroke="#FF7913" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <p>+234 706 101 1343</p>
                            </div> 
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
    )
}

export default Contact;