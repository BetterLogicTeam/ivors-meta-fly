import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Staking_style.css'
import btnimage from '../../assets/112.png'
import { toast } from 'react-toastify'
import axios from 'axios'
import { loadWeb3 } from '../../apis/api'
import { GLABA_NFT, GLABA_NFT_ABI, staking_contract, staking_contract_Abi } from '../../utilies/constant'

export default function NFT_Staking() {
    const [isLoadingTrans, setLoadingTrans] = useState(false);
    const [tokenid, setTokenId] = useState("");
    const [isLoading, setisLoading] = useState(false)
    const [connected, setconnected] = useState(false)
    const [countapi, setcountapi] = useState(100)

    const address_connect = async () => {
        let acc = await loadWeb3()
        if (acc == "No Wallet") {
            toast.error("No Wallet Connected")
        }
        else if (acc == "Wrong Network") {
            toast.error("Wrong Newtwork please connect to Binance smart chain network")
        } else {
            setconnected(true)
        }
    }



    const ULE_Stake = async () => {
        const acc = await loadWeb3()
        const user = localStorage.getItem("user");
        let ress = JSON.parse(user);
        let uId_user = ress?.user_id;

        try {
            setisLoading(true);
            //   if (userInfo.EthAddress.toLowerCase() == acc.toLowerCase()) {
            if (tokenid == "") {
                alert("Please Enter Token Id")
                setisLoading(false);
            } else {
                const web3 = await window.web3;
                let Ule_100_ContractOf = new web3.eth.Contract(GLABA_NFT_ABI, GLABA_NFT);
                let ULE_Staking_ContractOf = new web3.eth.Contract(staking_contract_Abi, staking_contract);
                // let check_Nft_Balance = await Ule_100_ContractOf.methods.ownerOf(tokenid).call();

                // let Api_Conditon = await axios.post("https://ulenftapis.ulenft.site/stakeNftCondition", {
                //     "uid": uId_user,
                //     "amount": "100"
                // })

                // Api_Conditon = Api_Conditon.data.data


                // if (check_Nft_Balance == acc) {
                // if (Api_Conditon == "Success") {
                await Ule_100_ContractOf.methods.setApprovalForAll(staking_contract, true).send({
                    from: acc
                })

                toast.success("Successfully Approved")

                let hash = await ULE_Staking_ContractOf.methods.Stake([tokenid], GLABA_NFT).send({
                    from: acc,


                })


                hash = hash.transactionHash
                // let  hash ="0x209e2e01b6ea808bbf772b6d6232b86e6060e9b229209a014344f65b194ef0be"


                if (countapi == 100) {
                    let postapi = await axios.post('https://nftworld-api.herokuapp.com/nftStaking100', {

                        "uid": uId_user,
                        "address": acc,
                        "txn": hash,
                        "tokenid": tokenid
                    })
                    console.log("postapi", postapi);
                } else if (countapi == 500) {
                    let postapi = await axios.post('https://nftworld-api.herokuapp.com/nftStaking500', {
                        "uid": uId_user,
                        "address": acc,
                        "txn": hash,
                        "tokenid": tokenid,
                        "unit": 5

                    })
                } else if (countapi == 1000) {
                    let postapi = await axios.post('https://nftworld-api.herokuapp.com/nftStaking500', {
                        "uid": uId_user,
                        "address": acc,
                        "txn": hash,
                        "tokenid": tokenid,
                        "unit": 10
                    })
                }
                else if (countapi == 2500) {
                    let postapi = await axios.post('https://nftworld-api.herokuapp.com/nftStaking500', {
                        "uid": uId_user,
                        "address": acc,
                        "txn": hash,
                        "tokenid": tokenid,
                        "unit": 25
                    })
                }



                toast.success("Transaction Confirmed")
                setisLoading(false);


                // window.location.reload()


                // } else {
                //     toast.error(Api_Conditon)
                //     setisLoading(false);

                // }


                // } else {
                //     alert("You are not owner of this ID. ")
                //     setisLoading(false);

                // }


            }

            //   } else {

            //     toast.error("Account Mismatch")
            //     setLoadingTrans(false);


            //   }


        } catch (error) {
            console.log("Erroe While Call Staking Fuction", error);
            toast.error("Transaction Failed")
            setisLoading(false);



        }
    }

    useEffect(() => {
        address_connect()
    }, [])

    return (
        <div>
            <div className="row justify-content-center">
                <div className="col-md-11 py-3">
                    {/* <PagePath data={{page_name:"Withdrawal",page_path:"History / Withdrawal"}} /> */}
                    <div className="col-11 d-flex justify-content-center py-5 stack-ip-2">
                        <div className="col-md-7 col-lg-7 col-xxl-6 col-10">
                            <div className="d-flex flex-column align-items-center profile-border from-ip-1 profile-login  py-4 shadow-withdraw ">
                                {
                                    countapi == 100 ?
                                        <h4 className="h-color col-12 py-2 px-4 border_bottom pb-3">NFT Staking With 100</h4>
                                        :
                                        countapi == 500 ?
                                            <h4 className="h-color col-12 py-2 px-4 border_bottom pb-3">NFT Staking With 500</h4>
                                            :
                                            countapi == 1000 ?
                                                <h4 className="h-color col-12 py-2 px-4 border_bottom pb-3">NFT Staking With 1000</h4>
                                                :
                                                countapi == 2500 ?
                                                    <h4 className="h-color col-12 py-2 px-4 border_bottom pb-3">NFT Staking With 2500</h4>
                                                    :
                                                    <></>


                                }
                                {
                                    connected ?
                                        <p className=" text-success text-denger-1 col-11">wallet is  connected..!</p>
                                        :
                                        <p className="text-danger text-denger-1 col-11">wallet is not connected..!..Wait...</p>

                                }
                                <div className="col-11 col-lg-12 mt-3 row aligin-ip-1 align-items-center ">
                                    <div class="dropdown ms-2 mt-2 mb-4 dropstaking">
                                        <button
                                            class="btn btn-secondary dropdown-toggle select_main stack-ip-1 btn_dropdownhere"
                                            type="button"
                                            id="dropdownMenuButton1"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            Staking
                                        </button>
                                        <ul
                                            class="dropdown-menu btn_dropdownhere text-center  h-auto fs-3"
                                            aria-labelledby="dropdownMenuButton1"
                                        >

                                            <li onClick={() => setcountapi(100)}>
                                                <a class="dropdown-item text-white"  >

                                                    {/* <Link to="/nft-staking" className="text-d"> */}


                                                    Staking With 100 USD
                                                    {/* </Link> */}
                                                </a>
                                            </li>
                                            <li onClick={() => setcountapi(500)}>
                                                <a class="dropdown-item text-white">

                                                    {/* <Link to="Stacking_With_200" className="text-d"> */}


                                                    Staking With 500 USD
                                                    {/* </Link> */}
                                                </a>
                                            </li>
                                            <li onClick={() => setcountapi(1000)}>
                                                <a class="dropdown-item text-white">

                                                    {/* <Link to="Stacking_With_300" className="text-d"> */}


                                                    Staking With 1000 USD
                                                    {/* </Link> */}
                                                </a>
                                            </li>
                                            <li onClick={() => setcountapi(2500)}>
                                                <a class="dropdown-item text-white">

                                                    {/* <Link to="Stacking_With_400" className="text-d"> */}


                                                    Staking With 2500 USD
                                                    {/* </Link> */}
                                                </a>
                                            </li>


                                        </ul>
                                    </div>

                                </div>
                                <div className="col-11 mt-3 col-lg-12 row align-items-center dropstaking">
                                    {/* <p className="col-5 m-0 p-0 aligin-ip-1 text-white">Enter USD Amount</p> */}
                                    <input
                                        type="text"
                                        placeholder="Enter Token ID"

                                        className=" profile-border stack-iip-1 profile-ip-1 col-7 ms-4 " onChange={(e) => setTokenId(e.target.value)}
                                    />
                                </div>

                                <div class="row mt-3">
                                    <div class="col-md-2   "></div>
                                    <div class="col-md-4" >
                                        <button className="btn btn-stak text-white" type="button" onClick={() => ULE_Stake()}>
                                            {isLoading ?
                                                <div class="spinner-border text-warning" role="status">
                                                    <span class="visually-hidden">Loading...</span>
                                                </div> :
                                                <>
                                                    <img className="stack-sr" src={btnimage} />
                                                    <span className='stack-sr-1'>Staking</span>
                                                </>
                                            }

                                        </button>
                                        {/* <button class="btn btn-success withdraw_btn" id="btnother" >
                                            {isLoading && (
                        <div class="spinner-border text-warning"  role="status">
                          <span class="visually-hidden">Loading...</span>
                        </div>
                      )}{' '}
                                            Withdrawal
                                        </button> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}
