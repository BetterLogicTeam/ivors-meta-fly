

import axios from "axios";
import { useEffect, useState } from "react";
import {PagePath,Table, Table_Buttons} from "../../Components";
import { API } from "../../Redux/actions/API";

const Airdrop_Token_History = () => {
    
    const [referralApi, setreferralApi] = useState([])
    const [currentPage, setcurrentPage] = useState(1)
    const [listPerpage, setlistPerpage] = useState(10)


    


    const referral_API = async () => {
        try {






            const user = localStorage?.getItem("user");
            // let ress = JSON?.parse(user);
            // let uId = ress?.uid;

            let responce = await API?.get(`/ExchangeHistory?id=${user}`)
            responce = responce?.data?.data;

            console.log("Res", responce);
            let arr = []
            responce?.forEach((item, index) => {

                arr?.push({
                    sr: index + 1,
                    user_id:item.uid,
                    withdrawal_token: `${item?.tokenvalue } `,
                    txn: `${item?.txn}  `,
                    paid_date: `${item?.date} `,
                    

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


    var [withdrawal_history,set_withdrawal_history]= new useState({
        cols:[
                {Header:'S.No',accessor:'sr'},
                // {Header:'User_id',accessor:'user_id'},
                {Header:'Date & Time',accessor:'Date_Time'},
                // {Header:'Withdrawal Amount',accessor:'Withdrawal_Amount'},
                // {Header:'Withdrawal Share Pool',accessor:'Withdrawal_Share_Pool'},
                // {Header:'Withdrawal Fees',accessor:'Withdrawal_Fees'},
                // {Header:'Net Amount',accessor:'Net_Amount'},
                {Header:'Withdrawal Token',accessor:'withdrawal_token'},
                {Header:'TXN',accessor:'txn'},
            ],
        rows:[
                {sr:'1',withdrawal_token:'500',txn:'View Txn',Date_Time:'18/06/2022',Withdrawal_Amount:"500",Withdrawal_Share_Pool:"200",Withdrawal_Fees:"100",Net_Amount:"50"},
                {sr:'1',withdrawal_token:'500',txn:'View Txn',Date_Time:'18/06/2022',Withdrawal_Amount:"500",Withdrawal_Share_Pool:"200",Withdrawal_Fees:"100",Net_Amount:"50"},
                {sr:'1',withdrawal_token:'500',txn:'View Txn',Date_Time:'18/06/2022',Withdrawal_Amount:"500",Withdrawal_Share_Pool:"200",Withdrawal_Fees:"100",Net_Amount:"50"},
        ]});
    return ( 
        <div className="row justify-content-center" style={{height:'70vh'}}>
            <div className="col-md-11 py-3">
                <PagePath data={{page_name:"Airdrop Token Withdrawal History",page_path:" Withdrawal / Airdrop Token Withdrawal History"}} />
                <Table
                    data={withdrawal_history.rows}
                    columns={withdrawal_history.cols}
                />
                               <Table_Buttons indexOfFirstPage={indexOfFirstPage} indexOfLastPost={indexOfLastPost} setcurrentPage={setcurrentPage} currentPage={currentPage} totalData={referralApi.length} listPerpage={listPerpage} />

            </div>
        </div>
     );
}
 
export default Airdrop_Token_History;