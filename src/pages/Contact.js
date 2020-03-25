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
        <div className="Contact d-flex flex-column">
            <Navbar navColor={navColor} />
            <div className='contactMe '>
                <div className='transparentDiv d-flex flex-column'>
                    <div> <h1>Contact Me</h1></div>
                    <div className="form container  flex-column d-flex flex-grow-1 my-5">
                        <div className='row px-3'>
                            <div className='col-md-7 card '>
                                <form className='py-3'>
                                    <div className='form-row'>
                                        <div className="form-group col">
                                            <input type="text" class="form-control" id="email" placeholder="Enter Name" name="email" />
                                        </div>
                                        <div className="form-group col">
                                            <input type="email" class="form-control" id="email" placeholder="Enter email" name="email" />
                                        </div>
                                    </div>
                                    <div className="form-group">

                                        <textarea name="message" cols="40" rows="10" className=" form-control"
                                            aria-required="true" aria-invalid="false" placeholder="Your Message"></textarea>
                                    </div>
                                    

                                    <button type="submit" class="btn btn-primary form-control">Submit</button>
                                    
                                </form>
                            </div>
                            <div className='col-md-5 px-5 my-5'>
                                 <div >
                                    <h4 className='d-flex align-content-center justify-content-around text-center' style={{fontSize:25,color:'#fff'}}>STAY CONNECTED</h4>
                                    <div className="line row mx-1"></div>
                                 <div className="d-flex align-content-center justify-content-around my-3">
                                     <span ><a href="https://www.facebook.com/bestinol"><i className="fa fa-facebook-square"></i></a></span>
                                    <span > <a href="https://www.twitter.com/"><i className="fa fa-twitter-square" style={{color:'white'}}></i></a></span>
                                    <span> <a href="https://www.twitter.com/"><i className="fa fa-youtube-play" style={{color:'red'}}></i></a></span>
                                 </div>
                                    <div className="d-flex align-content-center justify-content-center" style={{fontSize:20,color:'#fff'}}>
                                        <i className="fa fa-phone" ></i>  +2347061011343
                                    </div>
                                    <div className="d-flex align-content-center justify-content-center" style={{fontSize:20,color:'#fff',textAlign:'center'}}>
                                        <i className="fa fa-envelope-o mr-2" ></i>   evakitchen@gmail.com
                                    </div>
                                 </div>
                                    
                            </div>
                        </div>

                    </div>
           
                </div>
            </div>
                <Footer/>
        </div>
    )
}

export default Contact;