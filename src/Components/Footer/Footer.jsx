import React from 'react';
import '../Footer/Footer.css';
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { ImReddit } from "react-icons/im";
import { FaTelegram } from "react-icons/fa";
import { Link } from "react-router-dom";


function Footer() {
  return (
    <div>
        <div class="footer pt-100" style={{backgroundColor:'#0B0B47'}}>
        <div class="container">
            <div class="row">
                <div class="col-lg-9">
                    <div class="footer-social-box">
                        <div class="social-content">
                            <h3 id='quick-font'>Quick Links</h3>
                        </div>
                        <div class="footer-about-social-icon1 pt-20">
                            <ul className='ul-page'>
                                <li>
                                <Link className='underline' to="/" >Home</Link></li>
                                <li> <Link className='underline' to="/About_main" >About Us</Link></li>
                               
                                <li> <Link className='underline' to="/How_to_play_main" >Contact</Link></li>
                                <li><Link className='underline' to="/Login_main" >Login</Link></li>
                                <li><Link className='underline' to="/Register_main" >Register</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3">
                    <div class="footer-social-box">
                        <div class="social-content">
                            <h3 id='quick-font'>Follow Us</h3>
                        </div>
                        <div class="footer-about-social-icon pt-20">
                            <ul className='ul-link'>
                                <li>
                                    <a href="#"><i class="fab fa-facebook-f"></i></a>
                                </li>
                                <li>
                                    <a href="#"><i class="fab fa-twitter"></i></a>
                                </li>
                                <li>
                                    <a href="#"><i class="fab fa-pinterest"></i></a>
                                </li>
                                <li>
                                    <a href="#"><i class="fab fa-linkedin-in"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row upper11 mt-50 align-items-center">
                <div class="col-lg-12 col-md-12 text-center">
                    <div class="footer-copyright-text">
                        <p class="text-white gfs">Copyright © NFT Xpress all rights reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    {/* <div class="scroll-area">
        <div class="top-wrap">
            <div class="go-top-btn-wraper">
                <div class="go-top go-top-button">
                    <i class="fas fa-arrow-up"></i>
                    <i class="fas fa-arrow-up"></i>
                </div>
            </div>
        </div>
    </div> */}
    </div>
  )
}

export default Footer