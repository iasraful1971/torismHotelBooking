
import React from 'react';
import logo from '../../images/logo.png';
import './Footer.css';
const Footer = () => {
    return (
       <>
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-12 col-12 footer-logo-area">
                        <div className="d-flex logo-area">
                            <div><img style={{width:'120px'}} src={logo} alt="" /></div>
                            
                        </div>
                        <p>I was very impressed by the power wash psychotherapy service lorem ipsum is simply free element text available used by copy typing refreshing.</p>
                        <div className="nav-social2 text-right">
                        <i class="fab fa-quora"></i>
                        <i class="fab fa-staylinked"></i>
                        <i class="fab fa-twitter"></i>
                        <i class="fab fa-instagram"></i>  
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-8 col-sm-12 col-12">
                        <div className="row service-area">
                            <div className="col-lg-4 col-md-4 col-sm-12 col-12 footer-list-area">
                                <div><h2>Services</h2></div>
                              <div>  <ul>
                                    <li>Book Resort</li>
                                    <li>Single Room </li>
                                    <li>couples Rooms</li>
                                    <li>Earlier Book resort</li>
                                    <li>Visite Office</li>
                                </ul></div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-12 col-12 footer-list-area">
                                <div><h2>Our Contacts</h2></div>
                                <div className="div"><ul>
                                    <li><i class="fas fa-phone-alt"></i> <span>1-800-123-4567</span></li>
                                    <li><i class="far fa-envelope"></i><span>psychecare@support.com</span></li>
                                    <li><i class="fas fa-map-marker-alt"></i><span>2231 Sycamore Lake Road <br />
                                     Green Bay, WI 54304</span></li>
                                </ul></div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-12 col-12 footer-list-area">
                                <div><h2>Rules and policy</h2></div>
                              <div>  <ul>
                                    <li>Privacy & policy</li>
                                    <li>Cookies</li>
                                    <li>Refund policy</li>
                                    <li>Our client feedback</li>
                                    <li>seminare</li>
                                    <li>our mission</li>
                                    <li>facilities and oppertunities</li>
                                </ul></div>
                            </div>
                        </div>
                    </div>
                </div>
             
            </div>
           
        </div>
           <div className="copy">
           <p>&copy; Copyright  2021 Ora Travel. All Rights Reserved</p>
       </div>
       </>
    );
};

export default Footer;

