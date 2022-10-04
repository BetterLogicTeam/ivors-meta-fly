import React, { useEffect, useState } from 'react';
import { loadWeb3 } from "../apis/api";
import { FaTelegram } from "react-icons/fa";
import { Link } from "react-router-dom";
import Confirm from './Confirm';
import './Login-main.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
// import { Spinner } from './Spinner';
import { toast } from 'react-toastify';
var bol = false;
function Login_main({ notify }) {
  const navigate = useNavigate();
  const [loader,setloader] = useState(false)
  const [uid, setuid] = useState();
  const [openLogin ,setOpenLogin]= useState(false);
  const [address, setaddress] = useState('');
  const [connected, setconnected] = useState('MetaMask is not connected..!..Wait...')

  const callapi = async () => {
    setloader(true)

    if(uid.length>6){
      console.log("logindata_Address",)

      let res = await axios.get(`https://nftworld-api.herokuapp.com/login?id='${uid}'`);
      console.log("logindata",res.data.data)
      if (res.data.data !== 0) {
       
        toast.success('Login Successfully')
        localStorage.setItem("isAuthenticated", true);
        localStorage.setItem("user", JSON.stringify(res.data.data));
        navigate('/Dashboard/Home')
      }else{
        toast.error("Something went wrong ! ");
  
      }
    }else{
      let res = await axios.get(`https://nftworld-api.herokuapp.com/login?id=${uid}`);
      console.log("logindata",res.data.data)
      if (res.data.data == 0) {
       
        toast.success('Login Successfully')
        localStorage.setItem("isAuthenticated", true);
        localStorage.setItem("user", JSON.stringify(res.data.data));
        navigate('/Dashboard/Home')
      }else{
        toast.error("Something went wrong ! ");
  
      }
    }
    setloader(false) 

  }

  const ConnectToMetaMask = async () => {

    setloader(true)

    let acc = await loadWeb3();
  
    if (acc == 'No Wallet') {
      notify('No Wallet')
    }
    else if (acc == 'Wrong Network') {
      notify('Wrong Network')
    }
    else {
      //   notify("Wallet Connected");
      setuid(acc)

      setaddress(acc)
      setconnected('MetaMask is connected... Ready To Go')
    }
    setloader(false)

  }

  useEffect(() => {
    console.log("what is input value", uid)

  }, [uid])
  return (
    <div className='row m-0 justify-content-center align-items-center' style={{height:'100vh'}}>
      {openLogin && <Confirm handleLogin={callapi} setRegistered={setOpenLogin} />}
            {/* { loader == true ?   <></>} */}
            <div className=' col-md-4 col-lg-3 bg-white  mainForm'>
            <div className="main_form  ">
            <a class="main-logo" href="/"><img src="assets2/images/logo.png" alt="" /></a>
                        {/* <a class="stiky-logo" href="index.html"><img src="assets/images/logo.png" alt="" /></a> */}
                {/* <h2 className='hh mb-3'>Login</h2> */}
                <p className='peera'>Access your personal account</p>

                {/* <img src="ule_maticogo.png" width="150px" alt="" /> */}
                { connected=='Wallet is not connected..!..Wait...' ? <p className='peera2 ' style={{color:'red'}}>{connected}</p> : <p className='peera2 pt-3' style={{color:'green'}}>{connected}</p>}

                <div className="batan">
                  <div className="btn log_batan" onClick={ConnectToMetaMask}>Authorized Login</div>
                  <p class="note">Remember to authorize with the correct Wallet address.</p>
                  <div class="subtitle">View an Account</div>
                  <input className='btn inpt-ip'  name='signin' value={uid} placeholder='Please enter ID or Wallet address' onChange={(e) => {
                    setuid(e.target.value)
                  }} />
                  {/* <div className=""></div> */}
                  <p class="note">Enter the account id or Wallet address</p>
                  <button className="btn log_batan log-ip-btn" onClick={() => {
                    setOpenLogin(true)
                  }}>Login</button>
                  {/* <button className="btn log_batan" onClick={() => {
                    navigate('/Register_with_Matic')
                  }}>Register</button> */}
                  <button className="btn log_batan log-ip-btn" onClick={() => {
                    navigate('/')
                  }}>Go To Home</button>
                  <p class="reg-footnote">
                        Don’t have an account?
                    </p>
                    <div class="footer-section2">
                        Copyright © 2022 ivorsemetafly.io . All Rights Reserved.&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp;&nbsp;<a href="#" rel="noopener noreferrer" title="BNB Smart Contract" style={{color:"#fff"}}>BNB Smart Contract</a>
                    </div>
                </div>
              </div>
            </div>
        </div>
    
    // <div className='log_main'>
    //   <div className="log">
    //     <div className="container log_con">
    //       <div className="row ">
    //         <div className="col-md-2"></div>
    //         <div className="col-md-4 hvr">
              
    //         </div>

    //         <div className="col-md-4 hvr">
    //           <div className="main_form2">
    //             <div className="for_emg">
    //               <img src="favicon.png" className='hh mb-3'></img>
    //             </div>
    //             <p className='peera'>Follow us on Telegram</p>
    //             <div className="icn_tele">
    //               <FaTelegram></FaTelegram>
    //             </div>
    //             <div className='query pb-3'>Any query you can get support:</div>

    //             {/* <img src="metamask.png" width="70px" alt="" />
    //                     <p className='peera2'>MetaMask is not connected..!..Wait...</p> */}

    //             <div className="batan2">
    //               <div className="btn toll">Support Toll-Free 1800-120-4099</div>
    //               {/* <div className="btn log_batan">Please enter ID or Metamask address</div> */}
    //               <Link to="/">   <div className="btn log_batan hom">Go To Home</div></Link>

    //               {/* <p className='peera2 pt-3'>Please Install MetaMask!</p>/ */}

    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  )
}

export default Login_main