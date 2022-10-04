import React from 'react'
import How_to_play from './How_to_play/How_to_play';
import { Link } from "react-router-dom";
import { Header } from '../Routes';
import { Footer } from '../Containers';


function How_to_play_main() {
    return (
        <div>
            <Header />
            <div class="breatcome-area d-flex align-items-center" style={{backgroundColor:'#0B0B47'}}>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="breatcome-content text-center">
                                <div class="breatcome-content-title">
                                    <h1>Contact Us</h1>
                                </div>
                                <div class="breatcome-content-text">
                                    <ul>
                                        <li><Link to="/" >Home <i class="fas fa-chevron-right"></i> </Link> <span>Contact Us</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <How_to_play />
            <Footer />

        </div>
    )
}

export default How_to_play_main