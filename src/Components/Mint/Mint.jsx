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

export default function Mint() {
    const [referralApi, setreferralApi] = useState([])
    const [currentPage, setcurrentPage] = useState(1)
    const [listPerpage, setlistPerpage] = useState(10)

    const referral_API = async () => {
        try {

            const user = localStorage?.getItem("user");
            // let ress = JSON?.parse(user);
            // let user = ress?.uid;
            console.log("user",user);

            let responce = await API?.post("/MatchingLevel", {
                "uid": user,
                "level":"1"
            })
            responce = responce?.data?.data?.recordset;

            console.log("Res", responce);
            let arr = []
            responce?.forEach((item, index) => {

                arr?.push({
                    sr: index + 1,
                    from_id: item?.user_id,
                    level: `${item?.leveltype} USD`,
                    on_amount: `${item?.package} USD`,
                    income_usd:`${item?.level_income} USD`,
                    date:moment(item?.edate).format("DD/MM/YYYY h:m:s A")
                });



            }
            )
            // console.log("responce", arr);


            setreferralApi(arr)





        } catch (e) {
            console.log("Error While calling Referrer API", e);
        }
    }


    useEffect(() => {
        referral_API()
    }, [])

    const indexOfLastPost=currentPage*listPerpage;
    const indexOfFirstPage=indexOfLastPost-listPerpage;
    const currentPost=referralApi.slice(indexOfFirstPage,indexOfLastPost)

    var [matching_level_income,set_matching_level_income]= new useState({
        cols:[
                {Header:'S.No',accessor:'sr'},
                {Header:'User Id',accessor:'from_id'},
                {Header:'Package Amount',accessor:'level'},
                {Header:'Remark',accessor:'on_amount'}, 
                // {Header:'Income(Wire)',accessor:'income_wire'}, 
                {Header:'Txn',accessor:'income_usd'}, 
                {Header:'Activate Date',accessor:'date'}],
        rows:[
                {sr:'1',from_id:'419550',level:'7 USD',on_amount:'Active',income_usd:'View txn',date:'19/06/2022'},
                {sr:'2',from_id:'419550',level:'7 USD',on_amount:'Active',income_usd:'View txn',date:'19/06/2022'},
                {sr:'3',from_id:'419550',level:'7 USD',on_amount:'Active',income_usd:'View txn',date:'19/06/2022'},
                {sr:'4',from_id:'419550',level:'7 USD',on_amount:'Active',income_usd:'View txn',date:'19/06/2022'},
                {sr:'5',from_id:'419550',level:'7 USD',on_amount:'Active',income_usd:'View txn',date:'19/06/2022'},
        ]});
   
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
                            <h6 className='mint-head-6' id="number1"style={{width: "100%" , margin: "0px"}}> $ 100 GLEBA</h6>
                    </div>
                    <div class="col-md-2  justify-content-center align-items-center mt-5 " id='width-ip-1'>
                   <div class="nft-thumb">
                            <img src={logo1} class="img_nft"alt="Metamax NFT" width="100%" /></div><br />

                            <h6 className='mint-head-6' id="number1"style={{width: "100%" , margin: "0px"}}> $ 500 WASSER</h6>
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
                                <button id="decrease" onclick="decreaseValue()" className='mint-head-6 mint-6' style={{color:'white'}} value="Decrease Value">-</button>
                                <input type="text " className='mint-head-6 mint-6' readonly="" value="1" style={{color:'white'}} id="number" />
                                <button id="increase" onclick="increaseValue()" className='mint-head-6 mint-6' style={{color:'white'}} value="Increase Value">+</button>
                            </div>
                            <div class="btnallhere">
                               
                                <div class="d-flex mt-lg-5 mt-3 me-3">
                                    <button onclick="myMintMetamax()" class="btn mintbtn1 btn-ip-1"><span class="cstbtn" className='mint-head-6 mint-6' id="cstbtn" style={{color:'white'}}>Mint With
                                            Dual</span></button>
                                    <p class="stakepageP text-white price-ip ">Price : <span id="Metamaxmint">1</span> Dual</p>

                                </div>
                                 <div class="d-flex  mt-lg-5 mt-3 ">
                                    <button onclick="myMintBNB()" class="btn mintbtn   "><span id="bnbbtnhere"class="cstbtn" className='mint-head-6 mint-6' style={{color:'white'}} >Mint With Meta Fly</span></button>
                                     <p class="stakepageP text-white ">Price : <span id="Metamaxmint">1</span> Meta Fly</p>
                                   
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
