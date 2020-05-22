import React,{useState,useEffect} from 'react';
import Navbar from './components/NavBar'
import Footer from './components/Footer'
const Contact = () => {
    const [navColor, setNavColor] = useState('#000000')

    useEffect(() => {
        document.addEventListener("scroll", () => {
            const backgroundcolor = window.scrollY < 100 ? "#000000" : "#000000";
            setNavColor(backgroundcolor);
        });
    })
    return (
        <div classNameName="Contact d-flex flex-column">
            <Navbar navColor={navColor} />
            <section className="contact"
                id="contact">
                <h2>CONTACT US</h2>
                <p>
                    Catering Services | Consultancy and Training for School
                    and Businesses
            </p>
                <p className="contact-address">We are just a call/mail away.
                Get in touch with us and experience a boost in your busines</p>
                <p>Email : <a href="mailto:dverybest8@gmail.com?Subject=Hello"
                    target="_top">dverybest8@gmail.com</a></p>
                <p>Phone : <a href="tel:07061011343">07061011343</a></p>

                <div className="form-div">
                    <form action="#"
                        id="form">
                        <fieldset>
                            <legend>Subscribe to our monthly news-letter</legend>
                            <input className="input-field mr-1"
                                type="email"
                                required
                                id="email"
                                placeholder="enter your email"
                                name="email" />
                            <input className="input-field"
                                type="submit"
                                disabled
                                id="submit"
                                name="submit"/>
                    </fieldset>
                </form>
            </div>
        </section>
        <Footer/>
        </div>
    )
}

export default Contact;