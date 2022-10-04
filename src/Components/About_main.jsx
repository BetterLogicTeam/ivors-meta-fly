import React from 'react'
import { Link } from 'react-router-dom'
import About from './About/About'
import Footer from './Footer/Footer'
import Headers from './Header/Header'

function About_main() {
  return (
    <div>
        <Headers/>
        <div class="breatcome-area d-flex align-items-center" style={{backgroundColor:'#0B0B47'}}>
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="breatcome-content text-center">
                        <div class= "breatcome-content-title">
                            <h1>About Us</h1>
                        </div>
                        <div class="breatcome-content-text">
                            <ul>
                              <li><Link to="/" >Home <i class="fas fa-chevron-right"></i> </Link> <span>About Us</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <About />
    <Footer/>
    </div>
  )
}

export default About_main