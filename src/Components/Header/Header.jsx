import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import {Navbar} from "react-bootstrap";
import NavDropdown from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaWallet } from "react-icons/fa";
import { AiOutlineMenu } from   "react-icons/ai";
import "./Header.css";

function CollapsibleExample() {
  return (
    <>
     <div class="header-area" id="sticky-header">
        <div class="container">
            <div class="row align-items-center d-flex">
                <div class="col-lg-3">
                    <div class="header-logo">
                        <a class="main-logo" href="index.html"><img src="assets2/images/logo.png" alt="" /></a>
                        <a class="stiky-logo" href="index.html"><img src="assets/images/logo.png" alt="" /></a>
                    </div>
                </div>
                <div class="col-lg-9">
                    <nav class="cryptozen_menu">
                        <div class="header-menu">
                            <ul class="nav_scroll">
                                <li className="li-head">
                                <Link to="/" >
                                  <a className="Styelnone li-head">Home </a>
                                  </Link>
                                  </li>
                                <li>
                                <Link to="/About_main" >
                                  <a className="Styelnone">about</a>
                                  </Link>
                                  </li>
                                <li>
                                {/* <Link to="" > */}
                                  <a href="assets2/white_paper.pdf" className="Styelnone">White Paper</a>
                                  {/* </Link> */}
                                  </li>
                                <li>
                                <Link to="/How_to_play_main" >
                                  
                                  <a className="Styelnone">contact</a>
                                  </Link>
                                  </li>
                            </ul>
                            <div class="header-btn">
                            <Link to="/Login_main" className="Styelnone style-pp">Login</Link>
                            </div>
                            <div class="header-btn">
                            <Link to="/Register_main" className="Styelnone style-pp">Register</Link>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </div>
    
    <div class="mobile-menu-area d-sm-block d-md-block d-lg-none">
        <div class="mobile-menu">
        <a class="stiky-logo" href="index.html"><img src="assets/images/logo.png" alt="" /></a>
            <nav class="itsoft_menu">
            
                <ul class="nav_scroll">
                    <li><a href="/">Home</a></li>
                    <li><a href="/About_main">About</a></li>
                    <li><a href="assets2/white_paper.pdf">White Paper</a></li>
                    <li><a href="/How_to_play_main">Contact</a></li>
                    <li><a href="/Login_main">Login</a></li>
                    <li><a href="/Register_main">Register</a></li>
                </ul>
            </nav>
        </div>
    </div>
    </>
   
  );
}

export default CollapsibleExample;
