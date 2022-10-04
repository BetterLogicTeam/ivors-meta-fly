import moment from "moment";
import { useEffect, useState } from "react";
import {PagePath,Table, Table_Buttons} from "../../Components";
import { API } from "../../Redux/actions/API";

const Reward_Income = () => {
    
    const [referralApi, setreferralApi] = useState([])
    const [currentPage, setcurrentPage] = useState(1)
    const [listPerpage, setlistPerpage] = useState(10)

    const referral_API = async () => {
        try {

            const user = localStorage?.getItem("user");
            console.log("Uswerr",user);
            // let ress = JSON.parse(user);
            // let uId = ress?.uid;

            let responce = await API?.get(`WithdrawlIncome?id=${user}`)
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
                {Header:'User ID',accessor:'uid'},
                {Header:'Token ID',accessor:'Reward'},
                {Header:'Date & Time',accessor:'date'},
                {Header:'USD',accessor:'income'},
                // {Header:'USD',accessor:'Reward'},
                { Header: 'Txn', accessor: 'Sports_Bonus' },
                { Header: 'Action', accessor: 'Income' },
            ],
        rows:[
                {sr:'1',business:'12345',income:'$ 12345 ',date:'20/07/2022'},
                {sr:'2',business:'12345',income:'$ 12345 ',date:'20/07/2022'},
                {sr:'3',business:'12345',income:'$ 12345 ',date:'20/07/2022'},
        ]});
    return ( 
        <div className="row justify-content-center" style={{height:'70vh'}}>
            <div className="col-md-11 py-3">
                <PagePath data={{page_name:"Total NFT Unit",page_path:"All Income / Total NFT Unit"}} />
                <h4 style={{color:'white'}}>Note: If user has unstake his NFT, it cannot be staked again</h4>
                    <p>Total USD : 100</p>
                <div class="row mt-3" style={{ marginLeft: "10px" }}>
                        <div class="col-md-3">
                            <label>Enter From Date</label>
                            <input type="date" name="from_date" id="from_date" class="select-system " placeholder="Enter From Date" />
                        </div><br /><br />
                        <div class="col-md-3">
                            <label>Enter To Date</label>
                            <input type="date" name="to_date" id="to_date" class="select-system " />
                        </div><br /><br />
                        <div class="col-md-3 mt-4">
                            <input type="submit" name="to_date" value="Search" class="btn btn-submit-1 btn-primary mt_5" />
                        </div>
                    </div>
                    <br />
                <Table
                    data={reward_income.rows}
                    columns={reward_income.cols}
                />
                <Table_Buttons indexOfFirstPage={indexOfFirstPage} indexOfLastPost={indexOfLastPost}  setcurrentPage={setcurrentPage} currentPage={currentPage} totalData={referralApi.length} listPerpage={listPerpage} />

            </div>
            
        </div>
     );
}
 
export default Reward_Income;