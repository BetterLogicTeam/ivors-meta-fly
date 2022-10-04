import React, { useEffect } from "react";
import "./Landing.css";
import { useRef, useState } from "react";
// import { Autoplay, EffectCards } from "swiper";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
// import "swiper/css";
// import "swiper/css/effect-cards";
// import { Swiper, SwiperSlide } from "swiper/react";
function Landing() {


  return (
    <div>
      <div class="hero-section slider-area style-five d-flex align-items-center" id="home">
        <video class="lazy-video" src="assets2/images/video3.mp4" loop muted autoPlay playsinline="" poster="#"/>
        <div class="container" style={{marginTop:'-7rem'}}>
            <div class="row align-items-center">
                <div class="col-lg-6 col-md-12 header-1-1">
                    <div class="hero-content">
                        <h4 class="wow fadeInUp fadeInUp1" data-wow-delay=".2s"><span class="other"></span>Ivorsemetafly</h4>
                        <h1 class="wow fadeInUp heading-1" data-wow-delay=".4s">DECENTRALIZED AFFILIATE PLATFORM</h1>
                        <p class="wow fadeInUp para-1" data-wow-delay=".6s" style={{color: "#fff"}}>
                        Ivorsemetafly is an Affiliate Marketing platform providing you with Innovative NFT projects that can give a good profit with not just your investment, but also a Smart Contract based Totally Decentralized Affiliate Program.
                    
                        </p>
                        <div class="dreamit-btn wow fadeInUp" data-wow-delay=".8s">
                            <a href="/Login_main"> <i class="flaticon-play-arrow"> </i>Login</a> 
                        </div>
                        <div class="dreamit-btn wow fadeInUp" data-wow-delay=".8s">
                            <a href="/Register_main"> <i class="flaticon-play-arrow"> </i> Register </a>
                        </div>
                    </div>
                </div>
                
                <div class="col-lg-6 col-md-6 width-pp" >
                    <div class="about-box mt_7">
                        <div class="dreamit-cripto-thumb landing-1 wow fadeInLeft" data-wow-delay=".4s">
                            <div class="cripto-main-thumb">
                                <img src="assets2/images/about/cripto.png" width="100%" alt="" />
                            </div>
                            <div class="cripto-thumb-inner bounce-animate4">
                                <img src="assets2/images/about/cripto1.png" width="100%" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        <div class="animation-box">
            <div class="about-mercury-animation mobile-hidden visible">
                <div class="coin-animation">
                    <i class="coin coin-1"></i>
                    <i class="coin coin-2"></i>
                    <i class="coin coin-3"></i>
                    <i class="coin coin-4"></i>
                    <i class="coin coin-5"></i>
                    <i class="coin coin-6"></i>
                    <i class="coin coin-7"></i>
                    <i class="coin coin-8"></i>
                    <i class="coin coin-9"></i>
                </div>
            </div>
        </div>
    </div>
      

      
     
    </div>


  );
}

export default Landing;
