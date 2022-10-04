import React from 'react';
import './How_to_play.css'

function How_to_play() {
  return (
    <div>
        <div class="contact-section style-four pt-110 pb-100 abt_bg"  >
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="dreamit-section-title two text-center pb-20">
                        <div class="dreamit-section-sub-title">
                            <h5 className='head-contact'>Contact</h5>
                        </div>
                        <div class="dreamit-section-main-title">
                            <h1 className='head-contact'>Stay Update With Us</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row pt-20 ms-5  text-center ak-center">
                <div class="col-lg-4 col-md-6">
                    <div class="single-contact-icon-box d-flex align-items-center">
                        <div class="contact-icon">
                            <i class="flaticon-message"></i>
                        </div>
                        <div class="contact-content-text">
                            <p className='link-page'>info@ivorsemetafly.io</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="single-contact-icon-box d-flex align-items-center">
                        <div class="contact-icon">
                            <i class="flaticon-world"></i>
                        </div>
                        <div class="contact-content-text">
                            <p className='link-page'>www.ivorsemetafly.io</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 ">
                    <div class="single-contact-icon-box d-flex align-items-center">
                        <div class="contact-icon">
                            <i class="flaticon-paper-plane"></i>
                        </div>
                        <div class="contact-content-text">
                            <p className='link-page link-page1'>Join Us on Telegram</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row upper12 align-items-center pt-60">
                <div class="col-lg-6 col-md-12 p-0">
                    <div class="contact_from upper10">
                        <div class="dreamit-section-title">
                            <div class="dreamit-section-sub-title">
                                <h5 className='head-contact'>Get In Touch</h5>
                            </div>
                        </div>
                        <form action="">
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="form_box mb-2">
                                        <input class="form-control" type="text" name="name" placeholder=" Name" />
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="form_box mb-2">
                                        <input class="form-control" type="text" name="email" placeholder=" Email" />
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="form_box mb-1">
                                        <input class="form-control" type="text" name="phone" placeholder=" Phone" />
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="form_box mb-1">
                                        <input class="form-control" type="text" name="Web" placeholder=" Website" />
                                    </div>
                                </div>
                                <div class="col-lg-12">
                                    <div class="form_box pt-1">
                                        <textarea  class="form-control ip-mass" name="message" id="message " cols="10" rows="5" placeholder=" Message" />
                                    </div>
                                </div>
                                <div class="ip-header header-btn">
                                    <a class="Styelnone ss-btn" id='ss-btn1' type='submit' >Send Now</a>
                                </div>
                            </div>
                        </form>
                        <div id="status"></div>
                    </div>
                </div>
                <div class="col-lg-6 mt-4">
                    <div class="contact-form-thumb wow fadeInRight" data-wow-delay=".4s">
                        <img className='cart-png' src="assets2/images/about/cartoon-bg.png" alt="" />
                        <div class="form-inner-thumb bounce-animate3">
                            <img className='cart-png1' src="assets2/images/about/cartoon.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default How_to_play