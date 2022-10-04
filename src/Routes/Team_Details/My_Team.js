import moment from "moment";
import { useEffect, useState } from "react";
import { PagePath, Table, Table_Buttons } from "../../Components";
import { API } from '../../Redux/actions/API'
import './MyTeam.css';

const My_Team = () => {


    const [referralApi, setreferralApi] = useState([])
    const [leftreferralApi, setleftreferralApi] = useState([])

    const [currentPage, setcurrentPage] = useState(1)
    const [listPerpage, setlistPerpage] = useState(10)
    const [currentPage2, setcurrentPage2] = useState(1)
    const [listPerpage2, setlistPerpage2] = useState(10)
    const [getuerid, setgetuerid] = useState("")
    const [filterValue, setFilterValue] = useState(2);
    const [getuseriddata, setgetuseriddata] = useState("")

    // const [FilterRight, setFilterRight] = useState("")
    let arr = []
    let arrayLeft = []
    const changecontrol = async (item, index) => {
        arr?.push({
            sr: index + 1,
            id: `${item?.uid} `,
            // Wallet: item?.user_id?.substring(0, 4) + "..." + item?.user_id?.substring(item?.user_id?.length - 4),
            Position: item?.pos,

            date_time: `${item?.edate} `,
            remark: (<>{item.top_update == null ? (<>InActive</>) : (<>Active</>)}</>),
            activation_date: moment(item?.top_update).format("M/D/YYYY h:m:s A"),
            staking: item.packageamount,
            country: "UK"
        });
        setreferralApi([...arr])

    }


    const change_Right = (item, index) => {
        arrayLeft?.push({
            sr: index + 1,
            id: `${item?.uid} `,
            // Position: item?.user_id?.substring(0, 4) + "..." + item?.user_id?.substring(item?.user_id?.length - 4),
            Position: item?.pos,
            date_time: `${item?.edate} `,
            remark: (<>{item.top_update == null ? (<>InActive</>) : (<>Active</>)}</>),
            activation_date: moment(item?.top_update).format("M/D/YYYY h:m:s A"),

            staking: item.packageamount,

            country: "UK"

        })
        setleftreferralApi([...arrayLeft])



    }

    const referral_API = async () => {
        try {

            const user = localStorage?.getItem("user");
            let ress = JSON?.parse(user);
            let uId = ress?.uid;
            let status = ress?.status

            let responceRight = await API?.post('/MyLeftDownline', {
                "uid": user,
                "status": filterValue
            })
            responceRight = responceRight?.data?.data?.recordset;
            console.log("responceRight", responceRight);


            let responce = await API?.post('/MyRightDownline', {
                "uid": user,
                "status": filterValue
            })
            responce = responce?.data?.data?.recordset;

            console.log("Res", responce);


            responce?.forEach((item, index) => {
                if (getuseriddata.length == 0) {
                    setTimeout(() => {
                        // console.log("UserId", getuseriddata);
                        changecontrol(item, index)
                    }, 2000);

                } else if (getuseriddata == item?.uid) {
                    arr?.push({
                        sr: index + 1,
                        id: `${item?.uid} `,
                        // Position: item?.user_id?.substring(0, 4) + "..." + item?.user_id?.substring(item?.user_id?.length - 4),
                        Position: item?.pos,
                        date_time: `${item?.edate} `,
                        remark: (<>{item.top_update == null ? (<>InActive</>) : (<>Active</>)}</>),
                        activation_date: moment(item?.top_update).format("M/D/YYYY h:m:s A"),
                        staking: item.packageamount,
                        // date: item?.dd
                    });
                }






                setreferralApi(arr)



            }
            )

            responceRight?.forEach((item, index) => {


                if (getuseriddata.length == 0) {
                    // console.log("UserId", getuseriddata);

                    setTimeout(() => {
                        // console.log("UserId", getuseriddata);
                        change_Right(item, index)
                    }, 2000);

                } else if (getuseriddata == item?.uid) {

                    arrayLeft?.push({
                        sr: index + 1,
                        id: `${item?.uid} `,
                        // Position: item?.user_id?.substring(0, 4) + "..." + item?.user_id?.substring(item?.user_id?.length - 4),
                        Position: item?.pos,
                        date_time: `${item?.edate} `,
                        remark: (<>{item.top_update == null ? (<>InActive</>) : (<>Active</>)}</>),
                        activation_date: moment(item?.top_update).format("M/D/YYYY h:m:s A"),

                        staking: item.packageamount,

                        // date: item?.dd

                    })
                }

                setleftreferralApi(arrayLeft)



            }
            )
            console.log("responce", arrayLeft);







        } catch (e) {
            console.log("Error While calling Myteam API", e);
        }
    }


    useEffect(() => {
        referral_API()
    }, [filterValue, getuseriddata])


    const indexOfLastPost = currentPage * listPerpage;
    const indexOfFirstPage = indexOfLastPost - listPerpage;
    const indexOfLastPost2 = currentPage2 * listPerpage2;
    const indexOfFirstPage2 = indexOfLastPost2 - listPerpage2;
    const currentPost = referralApi.slice(indexOfFirstPage, indexOfLastPost)
    const currentPostleft = leftreferralApi.slice(indexOfFirstPage2, indexOfLastPost2)





    var [my_team, set_my_team] = new useState({
        cols: [
            { Header: 'S.No', accessor: 'sr' },
            { Header: 'ID', accessor: 'id' },
            { Header: 'Country', accessor: 'country' },
            { Header: 'Wallet', accessor: 'Position' },
            { Header: 'Date and Time', accessor: 'date_time' },
            { Header: 'Remark', accessor: 'remark' },
            { Header: 'Activation Date Time ', accessor: 'activation_date' },
            { Header: 'Staking', accessor: 'staking' },
        ],
        rows: [
            { sr: '1', id: '625029', Wallet: 'TNS5EsYNsnnnDQsGGkzaFmZWHfGtseLYTJzaFmZWHfGt', date_time: '6/20/2022 9:36:01 AM', remark: 'Active', activation_date: '12/11/2021 1:40:08 PM', staking: '200.00' },
            { sr: '2', id: '625029', Wallet: 'TNS5EsYNsnnnDQsGGkzaFmZWHfGtseLYTJzaFmZWHfGt', date_time: '6/20/2022 9:36:01 AM', remark: 'Active', activation_date: '12/11/2021 1:40:08 PM', staking: '200.00' },
            { sr: '3', id: '625029', Wallet: 'TNS5EsYNsnnnDQsGGkzaFmZWHfGtseLYTJzaFmZWHfGt', date_time: '6/20/2022 9:36:01 AM', remark: 'Active', activation_date: '12/11/2021 1:40:08 PM', staking: '200.00' },
            { sr: '4', id: '625029', Wallet: 'TNS5EsYNsnnnDQsGGkzaFmZWHfGtseLYTJzaFmZWHfGt', date_time: '6/20/2022 9:36:01 AM', remark: 'Active', activation_date: '12/11/2021 1:40:08 PM', staking: '200.00' },
        ]
    });
    return (
        <div className="row justify-content-center">
        <div className="col-lg-11" style={{ height: '70vh' }}>
            <PagePath data={{ page_name: "My Team", page_path: "Team Detail / My Team" }} />
            {/* <div class="row mt-3" >
                <div class="col-md-3">
                    <label>Choose Status</label>
                    <select className=" input form-control ps-4 select_bg"
                        defaultValue={filterValue}
                        value={filterValue}
                        onChange={(e) => setFilterValue(e.target.value)}
                    >
                        <option value="" style={{ color: 'rgb(0 0 0 / 85%)' }}>Select Status</option>

                        <option value="2">All</option>
                        <option value="1">Active</option>
                        <option value="0">In-Active</option>

                    </select>

                </div>
                <div class="col-md-3">
                    <label>Search User ID </label>
                    <input type="text" className="input  input_widthgr " onChange={(e) => setgetuseriddata(e.target.value)} />

                </div>

            </div> */}
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
                        <input type="submit" name="to_date" value="Search" class="btn btn-primary btn-submit-1 mt_5" />
                    </div>
                </div>
            <br />

            <div className="col-md-12 py-3 ">

                {/* <h1 className="mb-0 fs-3 pe-4 border_right p-color" style={{ color: 'rgb(0 0 0 / 85%)' }}>Left</h1> */}



                <Table
                    data={currentPostleft}
                    columns={my_team.cols}
                />

                <Table_Buttons indexOfFirstPage={indexOfFirstPage2} indexOfLastPost={indexOfLastPost2} setcurrentPage={setcurrentPage2} currentPage={currentPage2} totalData={leftreferralApi.length} listPerpage={listPerpage2} />

            </div>
            {/* <div className="col-md-6 py-3">

                <h1 className="mb-0 fs-3 pe-4 border_right p-color" style={{ color: 'rgb(0 0 0 / 85%)' }}>Right</h1>






                <Table
                    data={currentPost}
                    columns={my_team.cols}
                />

                <Table_Buttons indexOfFirstPage={indexOfFirstPage} indexOfLastPost={indexOfLastPost} setcurrentPage={setcurrentPage} currentPage={currentPage} totalData={referralApi.length} listPerpage={listPerpage} />

            </div> */}
        </div>

        </div>
    );
}

export default My_Team;