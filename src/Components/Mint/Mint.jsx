import React, { useEffect, useState } from 'react'
import './Mint_Style.css'
import { API } from '../../Redux/actions/API';
import moment from 'moment';
import Page_Path from '../PagePath/PagePath';
import logo from '../../assets/horse.jpeg'
import logo1 from '../../assets/horse1.jpeg'
import logo2 from '../../assets/horse2.jpeg'
import logo3 from '../../assets/horse3.jpeg'
import logo4 from '../../assets/horse4.jpg'
import logo5 from '../../assets/horseboth3.jpg'
import logo6 from '../../assets/horseboth2.jpg'
import logo7 from '../../assets/horseboth1.jpg'
import logo8 from '../../assets/horseboth.jpg'
import logo9 from '../../assets/horseboth4.jpg'
import horse from '../../assets/horse.jpeg'
import horseboth1 from '../../assets/horseboth1.jpg'
import horseboth2 from '../../assets/horseboth2.jpg'
import horseboth3 from '../../assets/horseboth3.jpg'
import { toast } from 'react-toastify'
import axios from 'axios'
import { GLABA_NFT, GLABA_NFT_1000, GLABA_NFT_2500, GLABA_NFT_500, GLABA_NFT_5000, GLABA_NFT_ABI, GLABA_NFT_ABI_1000, GLABA_NFT_ABI_20_5000, GLABA_NFT_ABI_2500, GLABA_NFT_ABI_500, GLABA_NFT_ABI_5000, LaRace_Governance_Token, LaRace_Governance_Token_ABI, WIRE_Token, WIRE_Token_ABI } from '../../utilies/constant'
import { loadWeb3 } from '../../apis/api'
import Web3 from 'web3'
import video from '../../assets/video.mp4'
import Secondvideo from '../../assets/second_video.mp4'
// import { API } from '../../Redux/actions/API'
import { useNavigate } from 'react-router-dom'
import horse3 from '../../assets/horse3.jpeg'


export default function Mint() {
    let navigate = useNavigate()

    let [value, setValue] = useState(1)
    let [btnOne, setButtonOne] = useState("Mint With Dual");
    let [btnTwo, setButtonTwo] = useState("Mint With LAR");
    const [inputdatahere, setinputdatahere] = useState("100")
    const [Token_Value_1, setToken_Value_1] = useState(0)
    const [Token_Value_2, setToken_Value_2] = useState(0)
    const [Token_Value_3, setToken_Value_3] = useState(0)
    const [image, setimage] = useState(horse3)
    const [minting_counter, setminting_counter] = useState(1)
    const [selected, setselected] = useState(false)
    const [contract_select, setcontract_select] = useState(100)


    const user = localStorage.getItem("user");




    const increaseValue = () => {
        if (value < 5) {
            setValue(++value)
            console.log("setValue", value)
        }

    }

    const decreaseValue = () => {
        if (value > 1) {
            setValue(--value)
            console.log("setValue", value)
        }

    }

    const MintwithDual = async () => {

        let acc = await loadWeb3();

        if (acc == "No Wallet") {
            toast.error("No Wallet Connected")
        }
        else if (acc == "Wrong Network") {
            toast.error("Wrong Newtwork please connect to Binance smart chain network")

        } else {
            // try {

            //     let res = await API.get(`/getDashboardValues?id=${user}`)
            //     res = res.data.data[0]
            //     let own_Address = res.address
            //     console.log("res_Mint", own_Address == acc);
            //     // res = res.data.data;
            //     if (own_Address == "") {
            //         toast.error("Please Update Your Profile")
            //         navigate('/dashboard/Profile')

            //     } else if (own_Address == acc) {
                    try {

                        setButtonOne("Please Wait While Processing")
                        const web3 = window.web3;
                        let nftTokenOf_La_Race = new web3.eth.Contract(LaRace_Governance_Token_ABI, LaRace_Governance_Token);
                        let nftTokenOf_Wire = new web3.eth.Contract(WIRE_Token_ABI, WIRE_Token);
                        let nftContractOf
                        if (contract_select == 100) {
                            nftContractOf = new web3.eth.Contract(GLABA_NFT_ABI, GLABA_NFT);

                        } else if (contract_select == 500) {
                            nftContractOf = new web3.eth.Contract(GLABA_NFT_ABI_500, GLABA_NFT_500);


                        } else if (contract_select == 1000) {
                            nftContractOf = new web3.eth.Contract(GLABA_NFT_ABI_1000, GLABA_NFT_1000);

                        } else if (contract_select == 2500) {
                            nftContractOf = new web3.eth.Contract(GLABA_NFT_ABI_2500, GLABA_NFT_2500);

                        } else if (contract_select == 5000) {
                            nftContractOf = new web3.eth.Contract(GLABA_NFT_ABI_5000, GLABA_NFT_5000);

                        }

                        let totalnft = await nftContractOf.methods.MaxLimitPerTransaction().call();
                        if (value > totalnft) {
                            toast.error(`Maximum Limit is ${totalnft} `)
                        } else {
                            let maxSupply = await nftContractOf.methods.maxsupply().call();
                            let ttlSupply = await nftContractOf.methods.totalSupply().call();
                            let paused = await nftContractOf.methods.paused().call();
                            let maxLimitprTransaction = await nftContractOf.methods.MaxLimitPerTransaction().call();
                            let mintingbnbPrice_Toke_1 = await nftContractOf.methods.ValueinToken().call()
                            mintingbnbPrice_Toke_1 = web3.utils.fromWei(mintingbnbPrice_Toke_1);
                            mintingbnbPrice_Toke_1 = parseFloat(mintingbnbPrice_Toke_1)
                            let totalMintingPriceToken_1 = Number(value * mintingbnbPrice_Toke_1) + 0.0001
                            console.log("totalMintingPriceToken_2", totalMintingPriceToken_1);


                            totalMintingPriceToken_1 = web3.utils.toWei(totalMintingPriceToken_1.toString())



                            let mintingbnbPrice_Toke_2 = await nftContractOf.methods.ValueinToken1().call()
                            mintingbnbPrice_Toke_2 = web3.utils.fromWei(mintingbnbPrice_Toke_2);
                            mintingbnbPrice_Toke_2 = parseFloat(mintingbnbPrice_Toke_2)
                            let totalMintingPriceToken_2 = Number(value * mintingbnbPrice_Toke_2) + 0.0001
                            // if (minting_counter == 1) {

                            //     totalMintingPriceToken_2 = value * mintingbnbPrice_Toke_2
                            //     console.log("totalMintingPriceToken_2", totalMintingPriceToken_2);
                            // } else if (minting_counter == 2) {
                            //     totalMintingPriceToken_2 = value * mintingbnbPrice_Toke_2 * 2
                            //     console.log("totalMintingPriceToken_2", totalMintingPriceToken_2);


                            // }
                            totalMintingPriceToken_2 = web3.utils.toWei(totalMintingPriceToken_2.toString())


                            if (parseInt(ttlSupply) < parseInt(maxSupply)) {
                                if (paused == false) {
                                    if (value < parseInt(maxLimitprTransaction)) {

                                        // console.log("totalMintingPriceToken_2", totalMintingPriceToken_2);
                                        console.log("Parameter", value, totalMintingPriceToken_1, totalMintingPriceToken_2);

                                        if (contract_select == 100) {
                                            await nftTokenOf_La_Race.methods.approve(GLABA_NFT, totalMintingPriceToken_1).send({
                                                from: acc
                                            })
                                            toast.success("Approve Confirmed LaRace Governance Token")
                                            await nftTokenOf_Wire.methods.approve(GLABA_NFT, totalMintingPriceToken_2).send({
                                                from: acc
                                            })
                                            toast.success("Approve Confirmed Wire Token")



                                        } else if (contract_select == 500) {

                                            await nftTokenOf_La_Race.methods.approve(GLABA_NFT_500, totalMintingPriceToken_1).send({
                                                from: acc
                                            })
                                            toast.success("Approve Confirmed LaRace Governance Token")
                                            await nftTokenOf_Wire.methods.approve(GLABA_NFT_500, totalMintingPriceToken_2).send({
                                                from: acc
                                            })
                                            toast.success("Approve Confirmed Wire Token")

                                        }
                                        else if (contract_select == 1000) {

                                            await nftTokenOf_La_Race.methods.approve(GLABA_NFT_1000, totalMintingPriceToken_1).send({
                                                from: acc
                                            })
                                            toast.success("Approve Confirmed LaRace Governance Token")
                                            await nftTokenOf_Wire.methods.approve(GLABA_NFT_1000, totalMintingPriceToken_2).send({
                                                from: acc
                                            })
                                            toast.success("Approve Confirmed Wire Token")

                                        } else if (contract_select == 2500) {

                                            await nftTokenOf_La_Race.methods.approve(GLABA_NFT_2500, totalMintingPriceToken_1).send({
                                                from: acc
                                            })
                                            toast.success("Approve Confirmed LaRace Governance Token")
                                            await nftTokenOf_Wire.methods.approve(GLABA_NFT_2500, totalMintingPriceToken_2).send({
                                                from: acc
                                            })
                                            toast.success("Approve Confirmed Wire Token")

                                        } else if (contract_select == 5000) {

                                            await nftTokenOf_La_Race.methods.approve(GLABA_NFT_5000, totalMintingPriceToken_1).send({
                                                from: acc
                                            })
                                            toast.success("Approve Confirmed LaRace Governance Token")
                                            await nftTokenOf_Wire.methods.approve(GLABA_NFT_5000, totalMintingPriceToken_2).send({
                                                from: acc
                                            })
                                            toast.success("Approve Confirmed Wire Token")

                                        }


                                        let hash = await nftContractOf.methods.mint_with_token(value, totalMintingPriceToken_1, totalMintingPriceToken_2).send({
                                            from: acc,


                                        })

                                        setButtonOne("Mint With Dual")
                                        console.log("hash", hash.transactionHash);
                                        hash = hash.transactionHash
                                        totalMintingPriceToken_1 = web3.utils.fromWei((totalMintingPriceToken_1).toString())
                                        console.log("Ammount", acc);
                                        let postapi = await axios.post('https://taraus-nft-api.herokuapp.com/activation', {
                                            "uid": user,
                                            "sid": "0",
                                            "transaction": hash,
                                            "amount": contract_select,
                                            "useraddress": acc,
                                            "tokenamount":  "0",
                                            "quantity":value,
                                            "type": "Without Referral ID"
                                        })
                                        toast.success("Transaction Confirmed")
                                        console.log("postapi", postapi);
                                        // toast.success(postapi.data.data)
                                        setinputdatahere(" ")

                                    } else {
                                        toast.error("No of Minting is Greater than maximum limit Per Transaction")
                                        setButtonOne("Mint With Dual")

                                    }
                                } else {
                                    toast.error("Paused is True")
                                    setButtonOne("Mint With Dual")

                                }

                            } else {
                                toast.error("Max Supply is Greater than total Supply")
                                setButtonOne("Mint With Dual")

                            }

                        }

                    } catch (e) {
                        console.log("Error while minting ", e)
                        toast.error("Transaction failed")
                        setButtonOne("Mint With Dual")

                    }
            //     } else {
            //         toast.error("Wrong Metamask Address")
            //         setinputdatahere(" ")


            //     }


            // } catch (e) {
            //     setinputdatahere(" ")


            // }

        }
    }




    const MintwithLaRace = async () => {
        // console.log("res",inputValue)
        // setShowModal(false)
        let acc = await loadWeb3();
        // console.log("ACC=",acc)
        if (acc == "No Wallet") {
            toast.error("No Wallet Connected")
        }
        else if (acc == "Wrong Network") {
            toast.error("Wrong Newtwork please connect to Binance smart chain network")
        } else {
            // try {

            //     let res = await API.get(`/getDashboardValues?id=${user}`)
            //     res = res.data.data[0]
            //     let own_Address = res.address
            //     console.log("res_Mint", own_Address == acc);
            //     // res = res.data.data;
            //     if (own_Address == "") {
            //         toast.error("Please Update Your Profile")
            //         navigate('/dashboard/Profile')

            //     } else if (own_Address == acc) {
                    try {

                        setButtonTwo("Please Wait While Processing")
                        const web3 = window.web3;



                        let nftTokenOf_La_Race = new web3.eth.Contract(LaRace_Governance_Token_ABI, LaRace_Governance_Token);
                        let nftTokenOf_Wire = new web3.eth.Contract(WIRE_Token_ABI, WIRE_Token);
                        let nftContractOf
                        if (contract_select == 100) {
                            nftContractOf = new web3.eth.Contract(GLABA_NFT_ABI, GLABA_NFT);

                        } else if (contract_select == 500) {
                            nftContractOf = new web3.eth.Contract(GLABA_NFT_ABI_500, GLABA_NFT_500);

                        } else if (contract_select == 1000) {
                            nftContractOf = new web3.eth.Contract(GLABA_NFT_ABI_1000, GLABA_NFT_1000);

                        } else if (contract_select == 2500) {
                            nftContractOf = new web3.eth.Contract(GLABA_NFT_ABI_2500, GLABA_NFT_2500);

                        } else if (contract_select == 5000) {
                            nftContractOf = new web3.eth.Contract(GLABA_NFT_ABI_5000, GLABA_NFT_5000);

                        }

                        let totalnft = await nftContractOf.methods.MaxLimitPerTransaction().call();
                        if (value > totalnft) {
                            toast.error(`Maximum Limit is ${totalnft} `)
                        } else {
                            let maxSupply = await nftContractOf.methods.maxsupply().call();
                            let ttlSupply = await nftContractOf.methods.totalSupply().call();
                            let paused = await nftContractOf.methods.paused().call();
                            let maxLimitprTransaction = await nftContractOf.methods.MaxLimitPerTransaction().call();
                            let mintingbnbPrice_Toke_1 = await nftContractOf.methods.ValueinToken_single().call()
                            mintingbnbPrice_Toke_1 = web3.utils.fromWei(mintingbnbPrice_Toke_1);
                            mintingbnbPrice_Toke_1 = parseFloat(mintingbnbPrice_Toke_1)
                            let totalMintingPriceToken_1 = Number(value * mintingbnbPrice_Toke_1) + 0.0001
                            console.log("Change_price", totalMintingPriceToken_1);


                            // if (minting_counter == 1) {

                            //     totalMintingPriceToken_1 = value * mintingbnbPrice_Toke_1
                            // } else if (minting_counter == 2) {
                            //     totalMintingPriceToken_1 = value * mintingbnbPrice_Toke_1 * 2

                            // }
                            totalMintingPriceToken_1 = web3.utils.toWei(totalMintingPriceToken_1.toString())




                            if (parseInt(ttlSupply) < parseInt(maxSupply)) {
                                if (paused == false) {
                                    if (value < parseInt(maxLimitprTransaction)) {

                                        if (contract_select == 100) {
                                            await nftTokenOf_La_Race.methods.approve(GLABA_NFT, totalMintingPriceToken_1).send({
                                                from: acc
                                            })

                                        } else if (contract_select == 500) {

                                            await nftTokenOf_La_Race.methods.approve(GLABA_NFT_500, totalMintingPriceToken_1).send({
                                                from: acc
                                            })

                                        } else if (contract_select == 1000) {

                                            await nftTokenOf_La_Race.methods.approve(GLABA_NFT_1000, totalMintingPriceToken_1).send({
                                                from: acc
                                            })

                                        }
                                        else if (contract_select == 2500) {

                                            await nftTokenOf_La_Race.methods.approve(GLABA_NFT_2500, totalMintingPriceToken_1).send({
                                                from: acc
                                            })

                                        } else if (contract_select == 5000) {

                                            await nftTokenOf_La_Race.methods.approve(GLABA_NFT_5000, totalMintingPriceToken_1).send({
                                                from: acc
                                            })

                                        }


                                        toast.success("Approve Confirmed LaRace Governance Token")


                                        let hash = await nftContractOf.methods.mint_with_single(value, totalMintingPriceToken_1).send({
                                            from: acc,
                                        })
                                        setButtonTwo("Mint With LAR")
                                        hash = hash.transactionHash
                                        // console.log("hash", hash);
                                        // console.log("APIDATA", user,contract_select,acc,totalMintingPriceToken_1,value);

                                        // mintingbnbPrice=web3.utils.fromWei((mintingbnbPrice).toString())
                                        let postapi = await axios.post('https://taraus-nft-api.herokuapp.com/activation', {

                                            "uid": user,
                                            "sid": "0",
                                            "transaction": hash,
                                            "amount": contract_select,
                                            "useraddress": acc,
                                            "tokenamount":  "0",
                                            "quantity":value,
                                            "type": "Without Referral ID"
                                           
                                        })
                                        toast.success("Transaction Confirmed")

                                        console.log("postapi", postapi);
                                        // toast.success(postapi.data.data)
                                        setinputdatahere(" ")

                                    } else {
                                        toast.error("No of Minting is Greater than maximum limit Per Transaction")
                                        setButtonTwo("Mint With LAR")

                                    }
                                } else {
                                    toast.error("Paused is True")
                                    setButtonTwo("Mint With LAR")

                                }

                            } else {
                                toast.error("Max Supply is Greater than total Supply")
                                setButtonTwo("Mint With LAR")

                            }

                        }

                    } catch (e) {
                        console.log("Error while minting ", e)
                        toast.error("Transaction failed")
                        setButtonTwo("Mint With LAR")

                    }
                // } else {
                //     toast.error("Wrong Metamask Address")
                //     setinputdatahere(" ")


                // }


            // } catch (e) {
            //     setinputdatahere(" ")


            // }

        }
    }


    const getVAlues = async () => {
        // console.log("res",inputValue)
        // setShowModal(false)
        let acc = await loadWeb3();
        // console.log("ACC=",acc)
        if (acc == "No Wallet") {
            toast.error("No Wallet Connected")
        }
        else if (acc == "Wrong Network") {
            toast.error("Wrong Newtwork please connect to Binance smart chain network")
        } else {



            try {


                const web3 = window.web3;
                let nftContractOf
                if (contract_select == 100) {
                    nftContractOf = new web3.eth.Contract(GLABA_NFT_ABI, GLABA_NFT);

                } else if (contract_select == 500) {
                    nftContractOf = new web3.eth.Contract(GLABA_NFT_ABI_500, GLABA_NFT_500);

                } else if (contract_select == 1000) {
                    nftContractOf = new web3.eth.Contract(GLABA_NFT_ABI_1000, GLABA_NFT_1000);

                } else if (contract_select == 2500) {
                    nftContractOf = new web3.eth.Contract(GLABA_NFT_ABI_2500, GLABA_NFT_2500);
                } else if (contract_select == 5000) {
                    nftContractOf = new web3.eth.Contract(GLABA_NFT_ABI_5000, GLABA_NFT_5000);
                }

                let mintingbnbPrice_Toke_1 = await nftContractOf.methods.ValueinToken().call()
                mintingbnbPrice_Toke_1 = web3.utils.fromWei(mintingbnbPrice_Toke_1);
                // mintingbnbPrice_Toke_1=mintingbnbPrice_Toke_1.Fixed(3)
                mintingbnbPrice_Toke_1 = parseFloat(mintingbnbPrice_Toke_1).toFixed(4)

                if (minting_counter == 1) {

                    setToken_Value_1(mintingbnbPrice_Toke_1)
                } else if (minting_counter == 2) {
                    setToken_Value_1(mintingbnbPrice_Toke_1 * 2)

                }

                let mintingbnbPrice_Toke_2 = await nftContractOf.methods.ValueinToken1().call()
                mintingbnbPrice_Toke_2 = web3.utils.fromWei(mintingbnbPrice_Toke_2);

                mintingbnbPrice_Toke_2 = parseFloat(mintingbnbPrice_Toke_2).toFixed(4)
                if (minting_counter == 1) {

                    setToken_Value_2(mintingbnbPrice_Toke_2)
                } else if (minting_counter == 2) {
                    setToken_Value_2(mintingbnbPrice_Toke_2 * 2)

                }

                let nftContractOf2
                if (contract_select == 100) {
                    nftContractOf2 = new web3.eth.Contract(GLABA_NFT_ABI, GLABA_NFT);

                } else if (contract_select == 500) {
                    nftContractOf2 = new web3.eth.Contract(GLABA_NFT_ABI_500, GLABA_NFT_500);
                } else if (contract_select == 1000) {
                    nftContractOf2 = new web3.eth.Contract(GLABA_NFT_ABI_1000, GLABA_NFT_1000);

                } else if (contract_select == 2500) {
                    nftContractOf2 = new web3.eth.Contract(GLABA_NFT_ABI_2500, GLABA_NFT_2500);

                } else if (contract_select == 5000) {
                    nftContractOf2 = new web3.eth.Contract(GLABA_NFT_ABI_5000, GLABA_NFT_5000);

                }


                let mintingbnbPrice_Toke_3 = await nftContractOf2.methods.ValueinToken_single().call()
                mintingbnbPrice_Toke_3 = web3.utils.fromWei(mintingbnbPrice_Toke_3);
                console.log("value1", mintingbnbPrice_Toke_3);
                mintingbnbPrice_Toke_3 = parseFloat(mintingbnbPrice_Toke_3).toFixed(4)
                if (minting_counter == 1) {
                    setToken_Value_3(mintingbnbPrice_Toke_3)
                } else if (minting_counter == 2) {
                    setToken_Value_3(mintingbnbPrice_Toke_3 * 2)

                }

            } catch (e) {
                console.log("Error while Get Vale ", e)



            }





        }
    }


    useEffect(() => {
        getVAlues()
    }, [minting_counter, contract_select, value])
   
    return (
        <>
        <div className="row justify-content-center" style={{height:'70vh'}}>
            <div className="col-md-11 py-3">
                <Page_Path data={{page_name:"Mint NFT",page_path:"Mint NFT / Mint   "}} />

                <div class="page-wrapper">
            <div class="page-content">
                 
                 <div class="row diplay-ip">
                    <div class="col-md-1"></div>
                     <div class="col-md-2 justify-content-center align-items-center mt-5 " id='width-ip-1'>
                         <div class="nft-thumb">
                            <img src={logo} alt="Metamax NFT" width="100%" class="img_nft " /></div><br />
                            <h6 className='mint-head-6' onClick={() => (setValue(1), setcontract_select(100), setselected(true), setimage(logo), setminting_counter(1))} id="number1"style={{width: "100%" , margin: "0px"}}> $ 100 GLEBA</h6>
                    </div>
                    <div class="col-md-2  justify-content-center align-items-center mt-5 " id='width-ip-1'>
                   <div class="nft-thumb">
                            <img src={logo1} class="img_nft"alt="Metamax NFT" width="100%" /></div><br />

                            <h6 className='mint-head-6' onClick={() => (setValue(1), setcontract_select(100), setselected(true), setimage(logo1), setminting_counter(1))} id="number1"style={{width: "100%" , margin: "0px"}}> $ 500 WASSER</h6>
                    </div>
                    <div class="col-md-2 justify-content-center align-items-center mt-5 " id='width-ip-1'>
                    <div class="nft-thumb">
                            <img src={logo2} class="img_nft" alt="Metamax NFT" width="100%" /></div><br />
                            <h6 className='mint-head-6' id="number1"style={{width: "100%" , margin: "0px"}}> $ 1000 ZRAK</h6>

                    </div>
                    <div class="col-md-2 justify-content-center align-items-center mt-5 " id='width-ip-1'>
                    <div class="nft-thumb">
                            <img src={logo3} class="img_nft"alt="Metamax NFT" width="100%" /></div><br />
                             <h6 className='mint-head-6' id="number1"style={{width: "100%" , margin: "0px"}} > $ 2500 BRANNBIL</h6>
                    </div>
                    <div class="col-md-2 justify-content-center align-items-center mt-5 " id='width-ip-1'>
                    <div class="nft-thumb">
                            <img src={logo4} class="img_nft"alt="Metamax NFT" width="100%" /></div><br />
                             <h6 className='mint-head-6' id="number1"style={{width: "100%" , margin: "0px"}}> $ 5000 FOUDRE</h6>
                    </div>

                   
            </div>

            <div class="row diplay-ip">
                   <div class="col-md-1"></div>
                     <div class="col-md-2 justify-content-center align-items-center mt-5 " id='width-ip-1'>
                         <div class="nft-thumb">
                            <img src={logo5} alt="Metamax NFT" width="100%" class="img_nft" /></div><br />
                            <h6 className='mint-head-6' id="number1"style={{width: "100%" , margin: "0px"}}> $ 100 GLEBA</h6>
                    </div>
                    <div class="col-md-2  justify-content-center align-items-center mt-5 " id='width-ip-1'>
                   <div class="nft-thumb">
                            <img src={logo6} class="img_nft"alt="Metamax NFT" width="100%" /></div><br />

                            <h6 className='mint-head-6' id="number1"style={{width: "100%" , margin: "0px"}}> $ 500 WASSER</h6>
                    </div>
                    <div class="col-md-2 justify-content-center align-items-center mt-5 " id='width-ip-1'>
                    <div class="nft-thumb">
                            <img src={logo7} class="img_nft" alt="Metamax NFT" width="100%" /></div><br />
                            <h6 className='mint-head-6' id="number1"style={{width: "100%" , margin: "0px"}}> $ 1000 ZRAK</h6>

                    </div>
                    <div class="col-md-2 justify-content-center align-items-center mt-5 " id='width-ip-1'>
                    <div class="nft-thumb">
                            <img src={logo8} class="img_nft"alt="Metamax NFT" width="100%" /></div><br />
                             <h6 className='mint-head-6' id="number1"style={{width: "100%" , margin: "0px"}}> $ 2500 BRANNBIL</h6>
                    </div>
                    <div class="col-md-2 justify-content-center align-items-center mt-5 " id='width-ip-1'>
                    <div class="nft-thumb">
                            <img src={logo9} class="img_nft"alt="Metamax NFT" width="100%" /></div><br />
                             <h6 className='mint-head-6' id="number1"style={{width: "100%" , margin: "0px"}}> $ 5000 FOUDRE</h6>
                    </div>

                   
            </div>
                <div class="row diplay-ip">
                     <div class="col-md-6 d-flex justify-content-center align-items-center " id='width-ip-1'>
                        <img src={logo3} class="img_nft mt-lg-5"alt="Metamax NFT" width="100%" />
                         {/* <!-- <div class="item2 bg-112"><img src="assets/2.png" alt="Metamax NFT" width="100%"></div> --> */}
                    </div>
                    <div class=" col-lg-6 col-md-6 d-flex flex-column  align-items-left">

                            <div class="d-flex flex-row pt-lg-5 pt-3">
                                <button id="decrease" onClick={() => decreaseValue()} className='mint-head-6 mint-6' style={{color:'white'}} value="Decrease Value">-</button>
                                <input type="text " className='mint-head-6 mint-6' readonly="" value={value} style={{color:'white'}} id="number" />
                                <button id="increase" onClick={() => increaseValue()} className='mint-head-6 mint-6' style={{color:'white'}} value="Increase Value">+</button>
                            </div>
                            <div class="btnallhere">
                               
                                <div class="d-flex mt-lg-5 mt-3 me-3">
                                    <button onClick={() => MintwithDual()} class="btn mintbtn1 btn-ip-1"><span class="cstbtn" className='mint-head-6 mint-6' id="cstbtn" style={{color:'white'}}>Mint With
                                            Dual</span></button>
                                    <p class="stakepageP text-white price-ip ">(LAR : {Token_Value_1} ) (<span>WIRE :</span>    <span>{Token_Value_2}</span> ) </p>

                                </div>
                                 <div class="d-flex  mt-lg-5 mt-3 ">
                                    <button onClick={() => MintwithLaRace()} class="btn mintbtn   "><span id="bnbbtnhere"class="cstbtn" className='mint-head-6 mint-6' style={{color:'white'}} >Mint With Meta Fly</span></button>
                                     <p class="stakepageP text-white ">(<span classNameName='stakepageP'>LAR :</span> <span id="Metamaxmint" classNameName='stakepageP'>{Token_Value_3}</span>)</p>
                                   
                                </div>
                                 
                                {/* <!-- <div class="d-flex justify-content-center align-items-center mt-lg-5 mt-3 me-3">
                                    <button onclick="myMintBUSD()" class="btn mintbtn ms-4"> <span id="busdbtn">Mint
                                            With Busd </span></button>
                                    <p class="stakepageP text-white ms-4 mt-2 fs-5 fw-3">Price : <span id="BUSDmint">1</span> BUSD</p>

                                </div> --> */}

                            </div>



                        </div>
                </div>
            </div>
        </div>
                {/* <div className="row my-4 align-items-end justify-content-center gy-4">
                    <div className="col-md-3 col-lg-2 col-8">
                        <p className="p-color p-0 m-0">Select Date</p>
                        <input type="number" prototype="Select Level" className="input bg-color ps-4" />
                    </div>
                    <div className="col-md-3 col-lg-2 col-8">
                        <p className="p-color p-0 m-0">Select Date</p>
                        <input type="date" prototype="Select Level" className="input bg-color ps-4" />
                    </div>
                    <div className="col-md-3 col-lg-2 col-8">
                        <p className="p-color p-0 m-0">Select Date</p>
                        <input type="date" prototype="Select Level" className="input bg-color ps-4" />
                    </div>
                    <button className="bg-primary col-md-2 col-6 col-lg-1 btn text-white">Search</button>
                </div> */}
                {/* <Table
                    data={matching_level_income.rows}
                    columns={matching_level_income.cols}
                /> */}
                {/* <Table_Buttons indexOfFirstPage={indexOfFirstPage} indexOfLastPost={indexOfLastPost}  setcurrentPage={setcurrentPage} currentPage={currentPage} totalData={referralApi.length} listPerpage={listPerpage} /> */}

            </div>
        </div>
        
        </>
        
    )
}
