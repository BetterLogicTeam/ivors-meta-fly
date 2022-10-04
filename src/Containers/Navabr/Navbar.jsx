import React, { useState } from 'react';
import './Navbar.css'
import { BsArrowRightShort } from 'react-icons/bs';
import { BiHomeCircle, BiLineChart, BiBook, BiMessageSquareEdit } from 'react-icons/bi';
import { TbAtom } from 'react-icons/tb';
import { MdOutlineGroup } from 'react-icons/md';
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import Logo from '../../assets/logo.png'
import profile from '../../assets/profile.png'
import { FaLock } from 'react-icons/fa'
import id_red from '../../assets/id_red.png'
import { Activate_History, Buy_NFT, Coin_Address, Direct_Leg_Business, Home, Level_Details, Matching_Income, Matching_Level_Income, Matching_Tree, My_Referral, My_Team, NFT_Address, Profile, Referral_Income, Reward_Income, Roi_Income, Self_Address, Staking_Details, Withdrawal, Withdrawal_History } from '../../Routes';
import Change_Password from '../../Components/Change_password/Change_Password';
import Mint from '../../Components/Mint/Mint';
import Forgat_Password from '../../Components/Forgat_Password/Forgat_Password';
import ChangePasswor_eamil from '../../Components/Change_password/ChangePasswor_eamil';
import Varify_email_change_password from '../../Components/Change_password/Varify_email_change_password';
import Update_profile_email from '../../Routes/Activation/Update_profile_email';
import { API } from '../../Redux/actions/API';
import id_green from '../../assets/id_green.png'
import Minting_History from '../../Components/Mint/Minting_History';
import Quick_Starter_Bonus from '../../Routes/All_Income/Quick_Starter_Bonus';
import Team_Bonus from '../../Routes/All_Income/Team_Bonus';
import Sports_Bonus from '../../Routes/All_Income/Sports_Bonus';
import Withdrawal_Share_Bonus from '../../Routes/All_Income/Withdrawal_Share_Bonus';
import Airdrop_Token from '../../Routes/History/Airdrop_Token';
import Airdrop_Token_History from '../../Routes/History/Airdrop_Token_History';
import Governance_Token_Address from '../../Routes/Address/Governance_Token_Address';
import Collection from '../../Components/Mint/Collection';
import NFTHistory from '../../Components/Mint/NFT History';

const Navbar = () => {
    const user = localStorage?.getItem("user");
    let ress = JSON.parse(user);
    let uId = ress?.user_id;
    const [packegeid, setpackegeid] = useState(0)

    const history = useNavigate();
    const handleLogout = () => {
        localStorage.setItem("isAuthenticated", false);
        localStorage.setItem("user", null);
        history("/Login_main");
        window.location.reload();
    };

    const onClick_DNone = () => {
        let expand_list_MD = document.querySelectorAll('.expand-nav');
        for (let y = 0; y < 6; y++) {
            expand_list_MD[y].classList.forEach((class_item) => {
                if (class_item == 'd-flex') {
                    expand_list_MD[y].classList.remove('d-flex');
                    expand_list_MD[y].classList.add('d-none');
                }
            })
        }
    }

    const dashbord = async () => {
        let res = await API.get(`/getDashboardValues?id=${user}`)
        res = res.data.data[0]
        setpackegeid(res.package)

    }
    const sm_nav_dnone = () => {
        let nav_panel = document.querySelector('.nav-panel')
        if (nav_panel.classList.contains('d-none')) {
            nav_panel.classList.remove('d-none');
            nav_panel.classList.add('d-flex');
        }
        else {
            nav_panel.classList.remove('d-flex');
            nav_panel.classList.add('d-none');
        }
    }
    React.useEffect(() => {

        let nav_btn_expand = document.querySelectorAll('.nav-btn-expand');
        let nav_btn = document.querySelector('.nav-btn');
        let nav_panel = document.querySelector('.nav-panel')
        let expand_list = document.querySelectorAll('.expand-nav');
        let expand_list_sm = document.querySelectorAll('.expand-nav-sm');
        nav_btn.addEventListener('click', () => {
            console.log('NAv Clicked');
            if (nav_panel.classList.contains('d-none')) {
                nav_panel.classList.remove('d-none');
                nav_panel.classList.add('d-flex');
            }
            else {
                nav_panel.classList.remove('d-flex');
                nav_panel.classList.add('d-none');
            }
        })
        for (let x = 0; x < 6; x++) {
            nav_btn_expand[x].addEventListener('click', () => {
                console.log('clicked');
                for (let y = 0; y < 6; y++) {
                    if (x != y) {
                        expand_list[y].classList.forEach((class_item) => {
                            if (class_item == 'd-flex') {
                                expand_list[y].classList.remove('d-flex');
                                expand_list[y].classList.add('d-none');
                            }
                        })
                    }
                }
                let d_flex = false;
                expand_list[x].classList.forEach((class_item) => {
                    if (class_item == 'd-flex') {
                        d_flex = true;
                    }
                })
                if (d_flex == true) {
                    expand_list[x].classList.remove('d-flex');
                    expand_list[x].classList.add('d-none');
                }
                else {
                    expand_list[x].classList.remove('d-none');
                    expand_list[x].classList.add('d-flex');
                }
            })
        }
        for (let x = 6; x < 12; x++) {
            nav_btn_expand[x].addEventListener('click', () => {
                console.log('clicked');
                for (let y = 0; y < 6; y++) {
                    if ((x - 6) != y) {
                        expand_list_sm[y].classList.forEach((class_item) => {
                            if (class_item == 'd-flex') {
                                expand_list_sm[y].classList.remove('d-flex');
                                expand_list_sm[y].classList.add('d-none');
                            }
                        })
                    }
                }
                let d_flex = false;
                expand_list_sm[(x - 6)].classList.forEach((class_item) => {
                    if (class_item == 'd-flex') {
                        d_flex = true;
                    }
                })
                if (d_flex == true) {
                    expand_list_sm[(x - 6)].classList.remove('d-flex');
                    expand_list_sm[(x - 6)].classList.add('d-none');
                }
                else {
                    expand_list_sm[(x - 6)].classList.remove('d-none');
                    expand_list_sm[(x - 6)].classList.add('d-flex');
                }
            })
        }

        dashbord()
    }, [])
    return (
        <div className=''>
            <div className='col-13'>
                <nav class="navbar navbar-expand-lg navbar-light row d-flex flex-column">
                    <div className='row justify-content-between brand-bar m-0 p-0'>
                        <header class="d_none ">
                            <div class="topbar justify-content-center mb-2">
                                <nav class=" navtop">
                                    <div class="">
                                        <img className='dash-img-ip' src={Logo} width="25%" style={{ paddingBottom: "10px"}} alt="logo icon" />
                                    </div>

                                    <div class="probileseix">
                                        <h6 class="probileseix m-0 head-id">

                                            <span style={{ color: 'white' }} className="me-1"> ID:-</span>
                                            {/* <img src="assets3/images/id_green.png" class=""/> */}
                                            {
                                                packegeid > 0 ?
                                                    <>
                                                        <img src={id_green} width="13%" />
                                                    </> :
                                                    <>
                                                        <img src={id_red} width="13%" />

                                                    </>
                                            }
                                            &nbsp;
                                            <span style={{ color: 'white' }}>{uId}</span>
                                        </h6>
                                        {/* &nbsp;&nbsp;&nbsp;&nbsp;<a href="#"> */}
                                           
                                            {/* <li style={{listStyleType:"none;"}}> */}
                                    {/* <div>
                                        <button className='btn1  nav-btn-expand '> <img src={profile} width="40px" /></button>
                                        <div className='expand-nav  d-none flex-column' style={{ marginLeft: "-4%"}}>
                                            <Link onClick={onClick_DNone} to="/dashboard/Profile"><BsArrowRightShort /> Profile</Link>
                                            <Link onClick={onClick_DNone} to="/dashboard/Change_Password"><BsArrowRightShort /> Change Password </Link>
                                        </div>
                                    </div> */}
                                {/* </li> */}
                                        {/* </a> */}

                                    </div>


                                </nav>
                            </div>
                        </header>

                        <div class="row m-0 d-none d-lg-flex">
                            <ul class=" navbar-nav-lg py-2">
                                <li class="nav-item active ms-4">
                                    <Link to="/dashboard">
                                        <button className='btn1 '><BiHomeCircle className="me-1 mb-1 fs-6 fs-5" /> Dashboard</button>
                                    </Link>
                                </li>
                                <li>
                                    <div>
                                        <button className='btn1  nav-btn-expand '><BiBook className="me-1 mb-1 fs-6 fs-5 " /> Mint NFT</button>
                                        <div className='expand-nav  d-none flex-column'>
                                            {/* <a onClick={onClick_DNone} href='https://nft.wheswap.io/'><BsArrowRightShort /> Buy NFT</a> */}
                                            <Link onClick={onClick_DNone} to="/dashboard/Mint"><BsArrowRightShort /> Mint NFT</Link>
                                            <Link onClick={onClick_DNone} to="/dashboard/Collection"><BsArrowRightShort /> Collection</Link>
                                            <Link onClick={onClick_DNone} to="/dashboard/Minting_History"><BsArrowRightShort /> Minting History&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </Link>
                                            {/* <Link onClick={onClick_DNone} to="/dashboard/NFTStaking"><BsArrowRightShort /> NFT Staking</Link> */}
                                            <Link onClick={onClick_DNone} to="/dashboard/NFTHistory"><BsArrowRightShort /> NFT History </Link>
                                            {/* <Link onClick={onClick_DNone} to="/dashboard/Minting_History"><BsArrowRightShort /> NFT Withdrawal </Link> */}
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <button className='btn1  nav-btn-expand '><MdOutlineGroup className="me-1 mb-1 fs-6 fs-5" /> Team Details</button>
                                        <div className='expand-nav  d-none flex-column'>
                                            <Link onClick={onClick_DNone} to="/dashboard/My_Referral"><BsArrowRightShort /> My Referral &nbsp;&nbsp;&nbsp;&nbsp;</Link>
                                            <Link onClick={onClick_DNone} to="/dashboard/My_Team"><BsArrowRightShort /> My Team</Link>
                                            {/* <Link onClick={onClick_DNone} to="/dashboard/Matching_Tree"><BsArrowRightShort /> Matching Tree</Link> */}
                                            <Link onClick={onClick_DNone} to="/dashboard/Level_Details"><BsArrowRightShort /> Level Details &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Link>
                                            <Link onClick={onClick_DNone} to="/dashboard/Direct_Leg_Business"><BsArrowRightShort /> Direct Level Business</Link>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <button className='btn1  nav-btn-expand '> <BiLineChart className="me-1 mb-1 fs-6 fs-5" /> All Income</button>
                                        <div className='expand-nav  d-none flex-column'>
                                            <Link onClick={onClick_DNone} to="/dashboard/Referral_Income"><BsArrowRightShort /> Today NFT </Link>
                                            <Link onClick={onClick_DNone} to="/dashboard/Quick_Starter_Bonus"><BsArrowRightShort /> Today NFT Level </Link>
                                            <Link onClick={onClick_DNone} to="/dashboard/Team_Bonus"><BsArrowRightShort /> Total NFT Income</Link>
                                            <Link onClick={onClick_DNone} to="/dashboard/Matching_Level_Income"><BsArrowRightShort /> Total NFT Level Income</Link>
                                            {/* <Link onClick={onClick_DNone} to="/dashboard/Sports_Bonus"><BsArrowRightShort /> Sports Bonus </Link>/ */}
                                            <Link onClick={onClick_DNone} to="/dashboard/Withdrawal_Share_Bonus"><BsArrowRightShort /> Total NFT Reward Income </Link>




                                            {/* <Link onClick={onClick_DNone} to="/dashboard/Matching_Income"><BsArrowRightShort /> Matching Income</Link> */}
                                            {/* <Link onClick={onClick_DNone} to="/dashboard/Roi_Income"><BsArrowRightShort /> Roi Income</Link> */}
                                            <Link onClick={onClick_DNone} to="/dashboard/withdrawal_Income"><BsArrowRightShort /> Total NFT Unit</Link>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <button className='btn1  nav-btn-expand '><BiBook className="me-1 mb-1 fs-6 fs-5" /> Withdrawal</button>
                                        <div className='expand-nav  d-none flex-column'>
                                            {/* <Link  onClick={onClick_DNone} to="/dashboard/Buy_NFT"><BsArrowRightShort /> Buy NFT</Link>  */}
                                            <Link onClick={onClick_DNone} to="/dashboard/Withdrawal"><BsArrowRightShort /> NFT Withdrawal </Link>
                                            <Link onClick={onClick_DNone} to="/dashboard/Withdrawal_History"><BsArrowRightShort /> NFT Withdrawal History</Link>
                                            {/* <Link onClick={onClick_DNone} to="/dashboard/Airdrop_Token"><BsArrowRightShort />Airdrop Token</Link>
                                            <Link onClick={onClick_DNone} to="/dashboard/Airdrop_Token_History"><BsArrowRightShort />Airdrop Token History</Link> */}



                                        </div>
                                    </div>
                                </li>

                                <li>
                                    <div>
                                        <button className='btn1  nav-btn-expand '><BiMessageSquareEdit className="me-1 mb-1 fs-6 fs-5" /> Address</button>
                                        <div className='expand-nav  d-none flex-column'>
                                  
                                            <Link onClick={onClick_DNone} to="/dashboard/Self_Address"><BsArrowRightShort /> Self Wallet</Link>
                                        <Link onClick={onClick_DNone} to="/dashboard/Governance_Token_Address"><BsArrowRightShort /> Governance Token</Link>
                                        <Link onClick={onClick_DNone} to="/dashboard/Coin_Address"><BsArrowRightShort /> In Game Reward Token </Link>

                                        <Link onClick={onClick_DNone} to="/dashboard/NFT_Address"><BsArrowRightShort /> NFT</Link>
                                            {/* <Link  onClick={onClick_DNone} to="/dashboard/Mint"><BsArrowRightShort /> Mint</Link>  */}

                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <button className='btn1 fs-5 fs-6' onClick={() => handleLogout()}><FaLock className="me-1 mb-1 fs-6 fs-5" /> Logout</button>
                                </li>
                                <li>
                                {/* <TbAtom className="me-1 mb-1 fs-6 fs-4" /> Activation */}
                                    <div>
                                        <button className='btn1  nav-btn-expand '></button>
                                        <div className='expand-nav  d-none flex-column'>
                                            {/* <Link to="/dashboard/Activate_History" onClick={onClick_DNone}><a><BsArrowRightShort /> Activate History</a></Link>

                                            <Link to="/dashboard/Profile" onClick={onClick_DNone}><a><BsArrowRightShort /> Profile</a></Link>
                                            <Link to="/dashboard/Change_Password" onClick={onClick_DNone}><a><BsArrowRightShort /> Change Password</a></Link> */}

                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="d-flex w-100 mobile-view d-lg-none align-items-center bg_navtopSM justify-content-between">
                            {/* <img src={Logo} width="10%" alt="logo icon" style={{}} /> */}
                            <button class="navbar-toggler mobile-nav nav-btn col-md-1 col-2 me-3" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon" style={{ width: "100%"}}></span>
                            </button>
                        </div>
                    </div>
                    <div className='nav-panel d-none bg_sm col-10'>
                        <ul class="row p-0 justify-content-center list-unstyled">
                            <li class="col-xl-10 col-10 border_bottom">
                                <Link to="/dashboard" onClick={sm_nav_dnone}>
                                    <button className='btn1 col-12 text-start fs-5' id='font-ip-nv'>
                                        <BiHomeCircle className="me-1 mb-1" /> Dashboard</button>
                                </Link>
                            </li>
                            <li class="col-xl-10 col-10 border_bottom">
                                <div>
                                    <button className='btn1 nav-btn-expand col-12 text-start fs-5' id='font-ip-nv'><BiBook className="me-1 mb-1" /> Mint NFT</button>
                                    <div className='expand-nav-sm w-100 d-none flex-column'>
                                        {/* <a onClick={sm_nav_dnone} href='https://nft.wheswap.io/'><BsArrowRightShort /> Buy NFT</a> */}
                                        <Link onClick={sm_nav_dnone} to="/dashboard/Mint"><BsArrowRightShort /> Mint NFT</Link>
                                        <Link onClick={onClick_DNone} to="/dashboard/Collection"><BsArrowRightShort /> Collection</Link>
                                        <Link onClick={sm_nav_dnone} to="/dashboard/Minting_History"><BsArrowRightShort /> Minting History</Link>
                                        {/* <Link onClick={onClick_DNone} to="/dashboard/NFTStaking"><BsArrowRightShort /> NFT Staking</Link> */}
                                        <Link onClick={sm_nav_dnone} to="/dashboard/NFTHistory"><BsArrowRightShort /> NFT History</Link>
                                        {/* <Link onClick={sm_nav_dnone} to="/dashboard/Minting_History"><BsArrowRightShort /> NFT Withdrawal</Link> */}
                                    </div>
                                </div>
                            </li>

                            <li class="col-xl-10 col-10 border_bottom">
                                <div>
                                    <button className='btn1 nav-btn-expand col-12 text-start fs-5' id='font-ip-nv'><MdOutlineGroup className="me-1 mb-1" /> Team Details</button>
                                    <div className='expand-nav-sm w-100 d-none flex-column'>
                                    <Link onClick={sm_nav_dnone} to="/dashboard/My_Referral"><BsArrowRightShort /> My Referral</Link>
                                        <Link onClick={sm_nav_dnone} to="/dashboard/Matching_Income"><BsArrowRightShort /> My Team</Link>
                                        {/* <Link onClick={sm_nav_dnone} to="/dashboard/Matching_Tree"><BsArrowRightShort /> Matching Tree</Link> */}
                                        <Link onClick={sm_nav_dnone} to="/dashboard/Level_Details"><BsArrowRightShort /> Level Details</Link>
                                        <Link onClick={sm_nav_dnone} to="/dashboard/Direct_Leg_Business"><BsArrowRightShort /> Direct Level Business</Link>
                                    </div>
                                </div>
                            </li>
                            <li class="col-xl-10 col-10 border_bottom">
                                <div>
                                    <button className='btn1 nav-btn-expand col-12 text-start fs-5' id='font-ip-nv'> <BiLineChart className="me-1 mb-1" /> All Income</button>
                                    <div className='expand-nav-sm w-100 d-none flex-column'>
                                        <Link onClick={sm_nav_dnone} to="/dashboard/Referral_Income"><BsArrowRightShort /> Today NFT</Link>
                                            <Link onClick={sm_nav_dnone} to="/dashboard/Team_Bonus"><BsArrowRightShort /> Today NFT Level </Link>
                                        <Link onClick={sm_nav_dnone} to="/dashboard/Quick_Starter_Bonus"><BsArrowRightShort /> Total NFT Income </Link>
                                        <Link onClick={sm_nav_dnone} to="/dashboard/Matching_Level_Income"><BsArrowRightShort /> Total NFT Level Income</Link>
                                            {/* <Link onClick={sm_nav_dnone} to="/dashboard/Sports_Bonus"><BsArrowRightShort /> Sports Bonus </Link> */}
                                            <Link onClick={sm_nav_dnone} to="/dashboard/Withdrawal_Share_Bonus"><BsArrowRightShort /> Total NFT Reward Income </Link>



                                        {/* <Link onClick={sm_nav_dnone} to="/dashboard/Matching_Income"><BsArrowRightShort /> Matching Income</Link> */}
                                        {/* <Link onClick={sm_nav_dnone} to="/dashboard/Roi_Income"><BsArrowRightShort /> Roi Income</Link> */}
                                        <Link onClick={sm_nav_dnone} to="/dashboard/withdrawal_Income"><BsArrowRightShort /> Total NFT Unit</Link>
                                    </div>
                                </div>
                            </li>
                            <li class="col-xl-10 col-10 border_bottom">
                                <div>
                                    <button className='btn1 nav-btn-expand col-12 text-start fs-5' id='font-ip-nv'><BiBook className="me-1 mb-1" /> Withdrawal</button>
                                    <div className='expand-nav-sm w-100 d-none flex-column'>
                                        {/* <Link  onClick={sm_nav_dnone} to="/dashboard/Buy_NFT"><BsArrowRightShort /> Buy NFT</Link> */}
                                        

                                        <Link onClick={sm_nav_dnone} to="/dashboard/Withdrawal"><BsArrowRightShort /> NFT Withdrawal </Link>
                                            <Link onClick={sm_nav_dnone} to="/dashboard/Withdrawal_History"><BsArrowRightShort />  NFT Withdrawal History</Link>
                                            {/* <Link onClick={sm_nav_dnone} to="/dashboard/Airdrop_Token"><BsArrowRightShort />Airdrop Token</Link>
                                            <Link onClick={sm_nav_dnone} to="/dashboard/Airdrop_Token_History"><BsArrowRightShort />Airdrop Token History</Link> */}
                                    </div>
                                </div>
                            </li>

                            <li class="col-xl-10 col-10 border_bottom">
                                <div>
                                    <button className='btn1 nav-btn-expand col-12 text-start fs-5' id='font-ip-nv'><BiMessageSquareEdit className="me-1 mb-1" /> Address</button>
                                    <div className='expand-nav-sm w-100 d-none flex-column'>
                                        <Link onClick={sm_nav_dnone} to="/dashboard/Self_Address"><BsArrowRightShort /> Self</Link>
                                        <Link onClick={sm_nav_dnone} to="/dashboard/Governance_Token_Address"><BsArrowRightShort /> Governance Token</Link>
                                        <Link onClick={sm_nav_dnone} to="/dashboard/Coin_Address"><BsArrowRightShort /> In Game Reward Token </Link>

                                        <Link onClick={sm_nav_dnone} to="/dashboard/NFT_Address"><BsArrowRightShort /> NFT</Link>
                                        {/* <Link  onClick={sm_nav_dnone} to="/dashboard/Mint"><BsArrowRightShort /> Mint</Link> */}

                                    </div>
                                </div>
                            </li>
                            <li class="col-xl-10 col-10 border_bottom">
                                <button className='btn1 col-12 text-start fs-5 ' id='font-ip-nv' onClick={() => handleLogout()}><FaLock className="me-1 mb-1" /> Logout</button>
                            </li>
                            {/* <TbAtom className="me-1 mb-1" /> Activation */}
                            <li class="col-xl-10 col-10 border_bottom" style={{display:'none'}}>
                                <div>
                                    <button className='btn1 nav-btn-expand col-12 text-start fs-5'></button>
                                    <div className='expand-nav-sm w-100 d-none flex-column'>
                                        {/* <Link onClick={sm_nav_dnone} to="/dashboard/Activate_History"><BsArrowRightShort /> Activate History</Link>
                                        <Link onClick={sm_nav_dnone} to="/dashboard/Staking_Details"><BsArrowRightShort /> Staking Details</Link>
                                        <Link onClick={sm_nav_dnone} to="/dashboard/Profile"><BsArrowRightShort /> Profile</Link>
                                        <Link onClick={sm_nav_dnone} to="/dashboard/Change_Password"><BsArrowRightShort /> change Password</Link> */}

                                    </div>
                                </div>
                            </li>
                           
                            
                            
                            
                        </ul>
                    </div>
                </nav>
            </div>

            <Routes>

                <Route path='/' element={<Home />} />
                <Route path='/dashboard/Activate_History' element={<Activate_History />} />
                <Route path='/dashboard/Staking_Details' element={<Staking_Details />} />
                <Route path='/dashboard/Profile' element={<Profile />} />
                <Route path='/dashboard/Referral_Income' element={<Referral_Income />} />
                <Route path='/dashboard/Matching_Income' element={<Matching_Income />} />
                <Route path='/dashboard/withdrawal_Income' element={<Reward_Income />} />
                <Route path='/dashboard/Roi_Income' element={<Roi_Income />} />
                <Route path='/dashboard/Matching_Level_Income' element={<Matching_Level_Income />} />
                <Route path='/dashboard/Buy_NFT' element={<Buy_NFT />} />
                <Route path='/dashboard/Withdrawal_History' element={<Withdrawal_History />} />
                <Route path='/dashboard/Withdrawal' element={<Withdrawal />} />
                <Route path='/dashboard/Direct_Leg_Business' element={<Direct_Leg_Business />} />
                <Route path='/dashboard/Level_Details' element={<Level_Details />} />
                <Route path='/dashboard/Matching_Tree' element={<Matching_Tree />} />
                <Route path='/dashboard/My_Referral' element={<My_Referral />} />
                <Route path='/dashboard/My_Team' element={<My_Team />} />
                <Route path='/dashboard/Coin_Address' element={<Coin_Address />} />
                <Route path='/dashboard/NFT_Address' element={<NFT_Address />} />
                <Route path='/dashboard/Self_Address' element={<Self_Address />} />
                <Route path='/dashboard/Change_Password' element={<Change_Password />} />
                <Route path='/dashboard/Mint' element={<Mint />} />
                <Route path='/dashboard/NFTHistory' element={<NFTHistory />} />
              
                <Route path='/dashboard/Collection' element={<Collection />} />
                <Route path='/dashboard/Forgat_Password' element={<Forgat_Password />} />
                <Route path='/dashboard/ChangePasswor_eamil' element={<ChangePasswor_eamil />} />
                <Route path='/dashboard/Varify_email_change_password' element={<Varify_email_change_password />} />
                <Route path='/dashboard/Update_profile_email' element={<Update_profile_email />} />
                <Route path='/dashboard/Minting_History' element={<Minting_History />} />


                <Route path='/dashboard/Quick_Starter_Bonus' element={<Quick_Starter_Bonus />} />
                <Route path='/dashboard/Team_Bonus' element={<Team_Bonus />} />
                <Route path='/dashboard/Sports_Bonus' element={<Sports_Bonus />} />
                <Route path='/dashboard/Withdrawal_Share_Bonus' element={<Withdrawal_Share_Bonus />} />
                <Route path='/dashboard/Airdrop_Token' element={<Airdrop_Token />} />
                <Route path='/dashboard/Airdrop_Token_History' element={<Airdrop_Token_History />} />
                <Route path='/dashboard/Governance_Token_Address' element={<Governance_Token_Address />} />











            </Routes>
            <Outlet />
        </div>
    );
}

export default Navbar;