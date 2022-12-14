import React from 'react'
import { FaTelegram } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'
import './BNB.css'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { tokenAddress, tokenAbi } from '../utilies/token'
import { contractAddress, contractAbi, contractAbiBNB, contractAddressbnb } from '../utilies/contract'
import Spinner from './Spinner/Spinner';
import './Login-main.css'
import { toast } from 'react-toastify'
import { loadWeb4 } from '../api2.js'

export default function Registration_with_BNB({ notify }) {
  const [loader, setloader] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()
  let [matic, setmatic] = useState("0")
  let [ule, setule] = useState("0")
  let [uid, setuid] = useState('')
  const [address, setaddress] = useState('')
  const [checkreffarl, setcheckreffarl] = useState(false)
  const [RefID, setRefID] = useState(null)
  const [connected, setconnected] = useState('MetaMask is not connected..!..Wait...')
  let ConnectedAddress="";
  const callapi = async (position, sellCall) => {
    setloader(true)


    let res = await axios.post('https://nftworld-api.herokuapp.com/registration', {
      sid: uid,
      walletAddress: address,
      sponserAddress: address,
      amount: 10,
      txn: ""
    })
    console.log('res', res)

    if (res.data.data == "Accountnumber already exists!!") {
      // toast.error('Account Already Resgistered')
      callLoginApi()
    } else if (res.data.data == "Successfull") {
      console.log(res.data)
      toast.success('Registered Successfully')
      setloader(true)

      setTimeout(() => {
        ConnectedAddress = address;
        callLoginApi()
      }, 5000)
    } else {
      toast.error(`${res.data.data}`)
      setloader(false)

    }

  }
  const callLoginApi = async () => {
    setloader(true)
    setIsLoading(true)
    console.log('Login ConnectedAddress', ConnectedAddress)

    let res = await axios.get(`https://nftworld-api.herokuapp.com/login?id='${ConnectedAddress}'`)
    console.log('login_data', res)
    if (res.data.data !== 0) {
      localStorage.setItem('isAuthenticated', true)
      localStorage.setItem('user', JSON.stringify(res.data.data))
      toast.success('Login Successfully')

      navigate('/dashboard')
    }
    //  else {
    //   toast.error('Something went wrong ! ')
    // }
    setloader(false)
    setIsLoading(false)
  }
  const ConnectToMetaMask = async () => {
    let acc = await loadWeb4()
    if (acc == 'No Wallet') {
      notify('No Wallet')
    } else if (acc == 'Wrong Network') {
      notify('Wrong Network')
    } else {
      setaddress(acc)
      ConnectedAddress= acc;
      // console.log("connectedAddress" ,acc);
      console.log("connectedAddress" , ConnectedAddress);
      setconnected('MetaMask is connected... Ready To Register')
      callLoginApi()
      console.log("Connected")
      // callapi();
    }
  }
  const cotractCall = async (position) => {
    setloader(true)
    setIsLoading(true)
    let acc = await loadWeb4()
    if (acc == 'No Wallet') {
      toast.error('No Wallet')
    } else if (acc == 'Wrong Network') {
      toast.error('Wrong Network')
    } else {
      setaddress(acc)
      setconnected('MetaMask is connected... Ready To Register')

      ule = ule.toString()
      ule = window.web3.utils.toWei(ule)
      matic = matic.toString()
      matic = window.web3.utils.toWei(matic)
      // console.log("ULE",ule);
      // console.log("matic",matic);
      try {
        let contract = await new window.web3.eth.Contract(contractAbiBNB, contractAddressbnb)
        let token = await new window.web3.eth.Contract(tokenAbi, tokenAddress)
        let approveCall = await token.methods.approve(contractAddressbnb, ule).send({ from: acc })
        toast.success('Approved')
        let sellCall = await contract.methods.sell(ule).send({ from: acc, value: matic })
        toast.success('Transection Succesfull')
        sellCall = sellCall.transactionHash
        callapi(position, sellCall)
      } catch (err) {
        console.log('error while calling fuction sell', err)
      }
    }
    setloader(false)
    setIsLoading(false)
  }
  const callMaticUrliApi = async () => {
    let res = await axios.get(`https://ulematic-api.herokuapp.com/live_rate_bnb`)
    setmatic(Number(res.data.data[0].usdperunit) * 0)
    // console.log('BNB', Number(res.data.data[0].usdperunit) * 10)
  }
  const callUleApi = async () => {
    let res = await axios.get(`https://ulematic-api.herokuapp.com/live_rate`)
    setule((1 / Number(res.data.data[0].usdperunit)) * 0)
    // console.log('ULE', Number(1 / res.data.data[0].usdperunit) * 10)
  }




  const RefLink = async () => {
    let URL = window.location.href;

    // console.log("LAST", URL);

    if (URL.includes("referrallink")) {
      setcheckreffarl(true)
      // let pathArray = URL.split('&');
      // let UserID = pathArray[pathArray.length - 2]
      let UserID = URL.split('=')
      UserID = UserID[UserID.length - 1]
      console.log("LAST",UserID);
      setRefID(UserID)
    

      // let urllast = pathArray[pathArray.length - 1]
      // let n = urllast.split('=')
   
    }


    }







    useEffect(() => {        
      RefLink()
      setloader(true)
      ConnectToMetaMask()
      // callUleApi()
      callMaticUrliApi()

      setloader(false)
      setIsLoading(false)
    }, [])
    return (
      <div>
        <div className="row m-0 justify-content-center align-items-center" style={{ height: '100vh' }}>
          {loader == true ? <Spinner /> : <></>}
          <div className=" col-md-6 col-lg-3 bg-white  mainForm">
            <div className="main_form ">
              <a class="main-logo" href="/"><img src="assets2/images/logo.png" alt="" /></a>
              {/* <h4 className="hh mb-3">Registration With BNB</h4> */}
              <p className="peera">Access your personal account</p>

              {/* <img src="bnblogo.png" width="150px" alt="" /> */}
              {connected == 'Wallet is not connected..!..Wait...' ? (
                <p className="peera2 pt-3" style={{ color: 'red' }}>
                  {connected}
                </p>
              ) : (
                <p className="peera2 pt-3" style={{ color: 'green' }}>
                  {connected}
                </p>
              )}

              <div className="batan">
                <button
                  className="btn log_batan"
                  onClick={() => {
                    let modelRegister = document.querySelector('.modelRegister')
                    modelRegister.classList.remove('d-none')
                    modelRegister.classList.add('d-flex')
                  }}
                >
                  Register
                </button>

                <div className=" w-100 h-100 d-none justify-content-center align-items-center  position-absolute  modelRegister">
                  <div className=" bg-white bord bord1 border-dark py-3 px-5 flex-column justify-content-center align-items-center d-flex" id='reg-col'>
                    <h4 className=" my-3 color" style={{ color: 'white' }}>Enter Upline ID</h4>
                    <input
                      type={'number'}
                      className="boxset"
                      defaultValue={RefID}
                      onChange={(e) => {
                        setuid(e.target.value)
                      }}
                    />
                    <div className=" mt-4">
                      <button
                        className="btn bt loginbtn px-3 mx-2"
                        // onClick={() => {
                        //   if (uid.length > 0) {
                        //     let modelRegister = document.querySelector('.bordd')
                        //     let modelRegisterR = document.querySelector('.bord')

                        //     modelRegister.classList.remove('d-none')
                        //     modelRegister.classList.add('d-flex')
                        //     modelRegisterR.classList.remove('d-flex')
                        //     modelRegisterR.classList.add('d-none')
                        //   }
                        // }}  

                        onClick={() => callapi()}

                      >
                        OK
                      </button>
                      <button
                        className="btn bt loginbtn px-3 mx-2 "
                        onClick={() => {
                          let modelRegister = document.querySelector('.modelRegister')
                          modelRegister.classList.remove('d-flex')
                          modelRegister.classList.add('d-none')
                        }}
                      >
                        Close
                      </button>
                    </div>
                  </div>
                  <div
                    className=" bg-white bordd bord1 border-dark py-3 px-5 flex-column justify-content-center align-items-center d-none" id='reg-col'
                    style={{ marginLeft: '-4%' }}
                  >
                    <h4 className="  my-3 color11 color" style={{ color: 'white' }}>Referral Confirmation</h4>
                    <p className="uid-ip">Your Current Referral ID is {uid}</p>
                    <div className=" d-flex flex-row align-items-center justify-content-center my-2">
                      <p className=" p-0  m-0">BNB</p>{' '}
                      <input className="input1 mx-2" defaultValue={matic} value={matic} disabled type={'number'} />
                      <p className=" p-0  m-0">ULE</p>{' '}
                      <input className="input1 mx-2" defaultValue={ule} value={ule} disabled type={'number'} />
                    </div>
                    <select className="boxset" name="position">
                      <option value={1}>Left</option>
                      <option value={2}>Right</option>
                    </select>
                    <div className=" mt-4">
                      <button
                        className="btn bt loginbtn px-1 mx-1 proc"
                        style={{ marginBottom: '10px' }}
                        onClick={async () => {
                          callapi()
                          let position = document.getElementsByName('position')[0].value
                          await cotractCall(position)

                          let modelRegister = document.querySelector('.modelRegister')
                          let modelRegisterR = document.querySelector('.bord')
                          modelRegisterR.classList.remove('d-none')
                          modelRegisterR.classList.add('d-flex')

                          let modelRegisterRR = document.querySelector('.bordd')
                          modelRegisterRR.classList.remove('d-flex')
                          modelRegisterRR.classList.add('d-none')

                          modelRegister.classList.remove('d-flex')
                          modelRegister.classList.add('d-none')
                        }}
                        disabled={isLoading}
                      >
                        {isLoading && (
                          <div class="spinner-border text-secondary" role="status">
                            <span class="visually-hidden">Loading...</span>
                          </div>
                        )}{' '}
                        Proceed
                      </button>
                      {/* <br /> */}
                      <button
                        className="btn bt loginbtn "
                        onClick={() => {
                          let modelRegister = document.querySelector('.bordd')
                          let modelRegisterR = document.querySelector('.bord')

                          modelRegister.classList.remove('d-flex')
                          modelRegister.classList.add('d-none')
                          modelRegisterR.classList.remove('d-none')
                          modelRegisterR.classList.add('d-flex')
                        }}
                      >
                        No I want to change ID
                      </button>
                    </div>
                  </div>
                </div>
                <p class="note">Remember to authorize with the correct Wallet address.</p>

                <div class="subtitle">View an Account</div>
                <input
                  className="btn inpt-ip "
                  placeholder="Please enter ID or Wallet address"
                  onChange={(e) => {
                    setuid(e.target.value)
                  }}
                />
                <p class="note">Enter the account id or Wallet address</p>
                <div
                  className="btn log_batan log-ip-btn"
                  onClick={() => {
                    callLoginApi()
                  }}
                >
                  Connect to Wallet
                </div>
                
                <button
                  className="btn log_batan log-ip-btn"
                  onClick={() => {
                    navigate('/')
                  }}
                >
                  Go To Home
                </button>
                {/* <p class="reg-footnote">
                  Already have account?
                </p>               
                <br /> */}
                <p class="loginagain">If you have already registered <a href="/Login_main" style={{ color: "white" }}>Login</a></p>
                <div class="footer-section2">
                  Copyright ?? 2022 ivorsemetafly.io  All Rights Reserved.&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp;&nbsp;<a href="#" rel="noopener noreferrer" title="BNB Smart Contract" style={{ color: "#fff;" }}>BNB Smart Contract</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
