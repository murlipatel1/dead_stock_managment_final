import React from "react";
import '../Assets/Footer.css'

const Footer = () => {
    return(
        <>
            <div className="footer">
        <footer id="contact">
            <div className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h4>Company</h4>
                            <ul>
                                <li><a href="/about">About us</a></li>
                                <li><a href="#">Our Services</a></li>
            
                            </ul>
                        </div>
                        <div className="col">
                            <h4>Get help</h4>
                            <ul>
                                <li><a href="#">Get help</a></li>
              
                  
                                <li><a href="#">order status</a></li>
                            </ul>
                        </div>
                        <div className="col">
                            <h4>Contact</h4>
                            <ul>
                                <li><a href="#">Manageit.com</a></li>
                                {/* <li><a href="#">+919638935265</a></li>
                                <li><a href="#">support</a></li> */}
                                <li><a href="#">help</a></li>
                            </ul>
                        </div>
                        <div className="col">
                            <h4>Follow us</h4>
                              <div className="social-links">
                                <a href="#" className="inner-links"><i className="fab fa-facebook-f"></i></a>
                                <a href="#" className="inner-links"><i className="fab fa-twitter"></i></a>
                                <a href="#" className="inner-links"><i className="fab fa-instagram"></i></a>
                                <a href="#" className="inner-links"><i className="fab fa-linkedin-in "></i></a>
                              </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </footer>    
        </div>
        </>
    )
}

export default Footer;