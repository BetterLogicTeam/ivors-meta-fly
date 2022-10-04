import { useEffect, useState } from "react";
import { PagePath, Table, Table_Buttons } from "../../Components";
import { API } from '../../Redux/actions/API'


const Referral_Income = () => {

    const [referralApi, setreferralApi] = useState([])
    const [currentPage, setcurrentPage] = useState(1)
    const [listPerpage, setlistPerpage] = useState(10)

    const referral_API = async () => {
        try {

            const user = localStorage?.getItem("user");
            // let ress = JSON.parse(user);
            // let uId = ress?.uid;

            let responce = await API?.post("/DirectIncome", {
                "uid": user
            })
            responce = responce?.data?.data?.recordset;
           console.log("responce",responce);

            let arr = []
            responce?.forEach((item, index) => {

                arr?.push({
                    sr: index + 1,
                    from_id: item?.from_id,
                    package: `$ ${item?.amount}`,
                    Income: `$ ${item?.income}`,

                    token: item?.amounttoken,
                    amount: `$ ${item?.income}`,
                    date: item?.dd 
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




    var [referral_income, set_referral_income] = new useState({
        cols: [
            { Header: 'S.No', accessor: 'sr' },
            { Header: 'User ID', accessor: 'from_id' },
            { Header: 'Token ID', accessor: 'date' },
            // { Header: 'Package', accessor: 'package' },
            { Header: 'Income', accessor: 'Income' },
            { Header: 'Date & Time', accessor: 'Sports_Bonus' },


            // { Header: 'Token', accessor: 'token' },
            // { Header: 'Net Income', accessor: 'amount' },
        ],
        rows: [

            { sr: '1', from_id: '667179', package: '300 USD', token: '7578.49198027245', amount: '30', date: '18/06/2022' },

        ]

    });
    return (
        <div className="row justify-content-center" style={{height:'70vh'}}>
            
            <div className="col-md-11 py-3">
            <PagePath data={{ page_name: "Today NFT", page_path: "All Income / Today NFT" }} />
            <div class="row mt-3" style={{marginLeft: "10px"}}>
                    <div class="col-md-3">
                        <label>Enter From Date</label>
                        <input type="date" name="from_date" id="from_date" class="select-system" placeholder="Enter From Date" />
                    </div><br /><br />
                    <div class="col-md-3">
                        <label>Enter To Date</label>
                        <input type="date" name="to_date" id="to_date" class="select-system" />
                    </div><br /><br />
                    {/* <div class="col-md-3">
                        <label>Choose Status</label>
                        <select class="select-system" id="status" onchange="getvalue_status()">
                            <option value="">Select Status</option>
                            <option value="2">All</option>
                            <option value="1">Active</option>
                            <option value="0">In-Active</option>
                        </select>
                    </div>
                    <div class="col-md-3">
                        <label>Position</label>
                        <select class="select-system" id="status" onchange="getvalue_status()">
                            <option value="">Select Position</option>
                            <option value="2">Left</option>
                            <option value="1">Right</option>

                        </select>
                    </div> */}
                    <div class="col-md-3 mt-3">
                        <input type="submit" name="to_date" value="Search" class="btn btn-submit-1 btn-primary mt_5" />
                    </div>
                </div>
            <br />
               
                <Table
                    data={[...currentPost]}
                    columns={referral_income.cols}
                    toolbar={false}


                />
              <Table_Buttons indexOfFirstPage={indexOfFirstPage} indexOfLastPost={indexOfLastPost}  setcurrentPage={setcurrentPage} currentPage={currentPage} totalData={referralApi.length} listPerpage={listPerpage} />

            </div>
        </div>
    );
}

export default Referral_Income;