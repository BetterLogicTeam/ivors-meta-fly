
import moment from "moment";
import { useEffect, useState } from "react";
import {PagePath,Table, Table_Buttons} from "../../Components";
import { API } from "../../Redux/actions/API";

const Minting_History = () => {
    
    const [referralApi, setreferralApi] = useState([])
    const [currentPage, setcurrentPage] = useState(1)
    const [listPerpage, setlistPerpage] = useState(10)

    const referral_API = async () => {
        try {

            const user = localStorage?.getItem("user");
            console.log("Uswerr",user);
            // let ress = JSON.parse(user);
            // let uId = ress?.uid;
          
            let responce = await API?.get(`buynfttoken_history?id=${user}`)
            responce = responce.data.data;
           console.log("responce",responce);

            let arr = []
            responce?.forEach((item, index) => {

                arr?.push({
                    sr: index + 1,
                    uid: item?.uid,
                    income: item?.income,
                    date:  moment(item?.edate).format("DD/MM/YYYY h:m:s A")
                });



            }
            )
            console.log("responce", arr);


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



    


    







    var [reward_income,set_reward_income]= new useState({
        cols:[
                {Header:'S.No',accessor:'sr'},
                {Header:'Package Amount',accessor:'Package_Amount'},
                {Header:'Remark',accessor:'Remark'},
                {Header:'Txn',accessor:'Txn'},
                // {Header:'Income($)',accessor:'income'},
                {Header:'Date & Time',accessor:'date'}],
        rows:[
                {sr:'1',business:'12345',Package_Amount:'12345 USD',date:'20/07/2022',Remark:"Activate",Txn:"View txn"},
                {sr:'2',business:'12345',Package_Amount:'12345 USD',date:'20/07/2022',Remark:"Activate",Txn:"View txn"},
                {sr:'3',business:'12345',Package_Amount:'12345 USD',date:'20/07/2022',Remark:"Activate",Txn:"View txn"},
        ]});
    return ( 
        <div className="row justify-content-center" style={{height:'70vh'}}>
            <div className="col-md-11 py-3">
                <PagePath data={{page_name:"Mint History",page_path:"Mint NFT/ Mint History"}} />
                <Table
                    data={reward_income.rows}
                    columns={reward_income.cols}
                />
                {/* <Table_Buttons indexOfFirstPage={indexOfFirstPage} indexOfLastPost={indexOfLastPost}  setcurrentPage={setcurrentPage} currentPage={currentPage} totalData={referralApi.length} listPerpage={listPerpage} /> */}

            </div>
            
        </div>
     );
}
 
export default Minting_History;