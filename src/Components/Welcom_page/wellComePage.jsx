import React, { useEffect, useState } from 'react'
import './Welcom_style.css'
import { API } from '../../Redux/actions/API'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
let again = true;
export default function WellComePage() {
    let history = useNavigate();
    const name = localStorage.getItem("Name");
    //   console.log("name",name);

    let { email } = useParams()
    console.log("Email", email);
    const [getEmail, setgetEmail] = useState()
    const [getAllData, setgetAllData] = useState({
        uid: "User Id", email
            : "Email Address", password: "Password", f_name: "Name"
    })
    const [btndisable, setbtndisable] = useState(true)

    const LoninApi = async () => {
        let reg_uid = localStorage?.getItem("reg_uid");

        try {
            let res = await axios.post(`https://taraus-nft-api.herokuapp.com/getuserlogindata`,
                {
                    "uid": reg_uid

                })
            console.log("res", res);
            res = res.data.data[0][0]

            // history(`/wellComePage/${email}`)
            if (res != undefined) {
                setgetAllData(res)
            } else {
                LoninApi()
            }
            console.log('Dta...', getAllData)
            localStorage.setItem("user", JSON.stringify(res));
            if (res == undefined) {
            } else {
                setbtndisable(false)
            }
        } catch (e) {
            console.log("WelcomPage Api", e);
        }
    }
    useEffect(() => {
        if (again != false) {
            LoninApi()
        }
    }, [])


    return (
        <div>
            <form id="form1">
                <div class="wrapper_main  main_div_her_login_red">
                    <div class="wrapper" style={{ paddingTop: '4rem' }}>

                        <div class="main1">
                            <div class="main welcom_main" >
                                <SkeletonTheme baseColor="#202020" highlightColor="#444">
                                <h1 className='text-white'>Hi {getAllData.f_name || <Skeleton  />}, Welcome to Nftxpress.club</h1>
                                <p>Its nice to meet you and we thank you for creating an account with us. Nftxpress.club, now a
                                    global community, is an amazing platform to high profits.</p>

                                <h2>
                                    Your User Id is <strong>

                                        {getAllData.uid || <Skeleton />}
                                    </strong><br />
                                    Your email Id is <strong>{getAllData.email || <Skeleton />}</strong>
                                    <br />
                                    Your Password is <strong>{getAllData.password || <Skeleton />}</strong>

                                </h2>
                                </SkeletonTheme>
                               


                                <p style={{ color: "#d8ff00" }}>Your User Id and Password has been sent to your registered email.</p>

                                <p>Please do not delete this email as you may want to refer it later.</p>

                                <p>You can talk to us anytime on <a style={{ color: "#d8ff00" }}
                                    href="mailto:info@wireswap.io">info@wireswap.io</a> for any queries whats oever.</p>

                                <br />
                                <p>
                                    Any time, you would like to write to us, do not hesitate to send an email to
                                    <br />
                                    <a style={{ textDecoration: "none", color: "#d8ff00" }} href="/index"> info@wireswap.io </a>
                                </p>
                                <p style={{ width: "100%", float: "left", textAlign: "center" }}>
                                    <button type="button" className='WelcomBTN' disabled={btndisable} onClick={() => history('/Login_main')}  >Go To LogIn</button>
                                </p>
                            </div>

                        </div>


                    </div>
                </div>
            </form>


        </div>
    )
}
