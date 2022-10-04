import moment from "moment";
import { useEffect, useState } from "react";
import {PagePath,Table, Table_Buttons} from "../../Components";
import { API } from '../../Redux/actions/API'
import '../Team_Details/Lavel.css';

const Matching_Level_Income = () => {
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
                    level: `${item?.leveltype}`,
                    on_amount: `${item?.package} `,
                    income_usd:`${item?.level_income} `,
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
                { Header: 'User ID', accessor: 'uid' },
                {Header:'From ID',accessor:'from_id'},
                {Header:'Level',accessor:'level'},
                {Header:'Income',accessor:'income_usd'}, 
                // {Header:'On Amount',accessor:'on_amount'}, 
                // {Header:'Income(Wire)',accessor:'income_wire'}, 
                {Header:'Date & Time',accessor:'date'},
                // { Header: 'Net Income', accessor: 'Net_Income' },
            
            ],
        rows:[
                {sr:'1',from_id:'419550',level:'7',on_amount:'100 USD',income_wire:'20.3545891835254',income_usd:'0.06',date:'19/06/2022'},
                {sr:'2',from_id:'419550',level:'7',on_amount:'100 USD',income_wire:'20.3545891835254',income_usd:'0.06',date:'19/06/2022'},
                {sr:'3',from_id:'419550',level:'7',on_amount:'100 USD',income_wire:'20.3545891835254',income_usd:'0.06',date:'19/06/2022'},
                {sr:'4',from_id:'419550',level:'7',on_amount:'100 USD',income_wire:'20.3545891835254',income_usd:'0.06',date:'19/06/2022'},
                {sr:'5',from_id:'419550',level:'7',on_amount:'100 USD',income_wire:'20.3545891835254',income_usd:'0.06',date:'19/06/2022'},
        ]});
    return ( 
        <div className="row justify-content-center" style={{height:'70vh'}}>
            <div className="col-md-11 py-3">
                <PagePath data={{page_name:"Total NFT Level Income",page_path:"All Income / Total NFT Level Income"}} />

                <div class="row mt-3" style={{marginLeft: "10px"}}>
                    {/* <div class="col-md-3">
                        <label>Select Date</label>
                        <select class="select-system" id="level" onchange="getvalue()">
                            <option value="">Select Level</option>
                            <option value="0">All Level</option>
                            <option value="1">Level 1</option>
                            <option value="2">Level 2</option>
                            <option value="3">Level 3</option>
                            <option value="4">Level 4</option>
                            <option value="5">Level 5</option>
                            <option value="6">Level 6</option>
                            <option value="7">Level 7</option>
                            <option value="8">Level 8</option>
                        </select>
                    </div> */}
                    <div class="col-md-3">
                        <label>Enter From Date</label>
                        <input type="date" name="from_date" id="from_date" class="select-system" placeholder="Enter From Date"/>
                        </div><br/><br/>
                    <div class="col-md-3">
                        <label>Enter To Date</label>
                        <input type="date" name="to_date" id="to_date" class="select-system"/>
                    </div><br/><br/>
                    <div class="col-md-3 mt-4">
                        <input type="submit" name="to_date" value="Search" class="btn btn-submit-1 btn-primary mt_5"/>
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
                <Table
                    data={[...currentPost]}
                    columns={matching_level_income.cols}
                />
                <Table_Buttons indexOfFirstPage={indexOfFirstPage} indexOfLastPost={indexOfLastPost}  setcurrentPage={setcurrentPage} currentPage={currentPage} totalData={referralApi.length} listPerpage={listPerpage} />

            </div>
        </div>
     );
}
 
export default Matching_Level_Income;