import React, { useEffect, useState } from 'react'
import './Mint_Style.css'
import { API } from '../../Redux/actions/API';
import moment from 'moment';
import logo from '../../assets/1.png'
import logo1 from '../../assets/3.png'
import logo2 from '../../assets/4.png'
import logo3 from '../../assets/5.png'
import Page_Path from '../PagePath/PagePath';

export default function Collection() {
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
                <Page_Path data={{page_name:"Collection",page_path:" Collection   "}} />

                <div class="page-wrapper">
            <div class="page-content">
                 
                <div class="row display-ip">
                     <div class="col-md-3 d-flex justify-content-center align-items-center mt-5 " id='width-ip-1'>
                         <div class="nft-thumb">
                            <img src={logo} alt="Metamax NFT" width="100%" class="img_nft" /></div>
                    </div>
                    <div class="col-md-3 d-flex justify-content-center align-items-center mt-5 " id='width-ip-1'>
                   <div class="nft-thumb">
                            <img src={logo1} class="img_nft"alt="Metamax NFT" width="100%" /></div>
                    </div>
                    <div class="col-md-3 d-flex justify-content-center align-items-center mt-5 " id='width-ip-1'>
                    <div class="nft-thumb">
                            <img src={logo2} class="img_nft" alt="Metamax NFT" width="100%" /></div>
                    </div>
                    <div class="col-md-3 d-flex justify-content-center align-items-center mt-5 " id='width-ip-1'>
                    <div class="nft-thumb">
                            <img src={logo3} class="img_nft"alt="Metamax NFT" width="100%" /></div>
                    </div>
                   
            </div>
        </div>


        {/* <div class="overlay toggle-icon"></div>
        <a href="javaScript:;" class="back-to-top"><i class='bx bxs-up-arrow-alt'></i></a>
        <footer class="page-footer footer">
            <p class="mb-0">Copyright © IVORSEMETAFLY 2022. All right reserved.</p>
        </footer> */}
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
