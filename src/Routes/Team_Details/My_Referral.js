import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getMyReferralReport } from "../../Redux/actions/dailyYield";
import { PagePath, Table, Table_Buttons } from "../../Components";
import { API } from '../../Redux/actions/API'
import moment from "moment";
import './Style_for_all.css'
import './Style.css'
import { Filter } from "@material-ui/icons";

const My_Referral = () => {


    const [referralApi, setreferralApi] = useState([])
    const [referralApileft, setreferralApileft] = useState([])

    const [currentPage, setcurrentPage] = useState(1)
    const [listPerpage, setlistPerpage] = useState(10)
    const [currentPage2, setcurrentPage2] = useState(1)
    const [listPerpage2, setlistPerpage2] = useState(10)
    const [filterValue, setFilterValue] = useState("");
    const [FilterRight, setFilterRight] = useState(2)
    const [getuseriddata, setgetuseriddata] = useState("")
    let arr = []
    let leftArray = []

    const changecontrol = async (item, index) => {
        arr.push({
            sr: index + 1,
            user_id: `${item?.user_id} `,
            package: `${item?.packageamount} USD  `,
            date: item?.ee,
            position: item?.pos,
            remark: (<>{item.top_up == 1 ? (<>Active</>) : (<>InActive</>)}</>),
            activation_date: item.dd,
            total_active_team: moment(item?.dd).format("M/D/YYYY h:m:s A"),
            // date:moment(item?.ee).format("M/D/YYYY h:m:s A")
            total_Business: item?.packageamount
        })
        setreferralApi([...arr])

    }


    const change_Right = (item, index) => {
        leftArray?.push({
            sr: index + 1,
            user_id: `${item?.user_id} `,
            package: `${item?.packageamount} USD  `,
            date: item?.ee,
            position: item?.pos,
            remark: (<>{item.top_up == 1 ? (<>Active</>) : (<>InActive</>)}</>),
            activation_date: item.dd,
            total_active_team: moment(item?.dd).format("M/D/YYYY h:m:s A"),
            // date:moment(item?.ee).format("M/D/YYYY h:m:s A")
            total_Business: item?.packageamount
        })
        setreferralApileft([...leftArray])

    }



    const referral_API = async () => {
        try {


            const user = localStorage?.getItem("user");
            let ress = JSON?.parse(user);
            let uId = ress?.uid;
            let status = ress?.status

            // console.log("status", user);



            let responce = await API?.post('/Direct', {
                "uid": user,
                "position": 1,
                "status": FilterRight
            })
            responce = responce?.data?.data?.recordset;
            console.log("responce", responce);


            let responceRight = await API?.post('/Direct', {
                "uid": user,
                "position": 2,
                "status": FilterRight
            })
            responceRight = responceRight?.data?.data?.recordset;

            console.log("responceRight", responceRight);

            responce?.forEach((item, index) => {



                if (getuseriddata.length == 0) {
                    setTimeout(() => {
                        // console.log("UserId", getuseriddata);
                        changecontrol(item, index)
                    }, 2000);

                } else if (getuseriddata == item?.user_id) {
                    arr?.push({
                        sr: index + 1,
                        user_id: `${item?.user_id} `,
                        package: `${item?.packageamount} USD  `,
                        date: item?.ee,
                        position: item?.pos,
                        remark: (<>{item.top_up == 1 ? (<>Active</>) : (<>InActive</>)}</>),
                        activation_date: item.dd,
                        total_active_team: moment(item?.dd).format("M/D/YYYY h:m:s A"),
                        // date:moment(item?.ee).format("M/D/YYYY h:m:s A")
                        total_Business: item?.packageamount
                    })
                }



                setreferralApi([...arr])

            }
            )

            responceRight?.forEach((item, index) => {


                if (getuseriddata.length == 0) {
                    // console.log("UserId", getuseriddata);

                    setTimeout(() => {
                        // console.log("UserId", getuseriddata);
                        change_Right(item, index)
                    }, 2000);

                    // leftArray?.push({
                    //     sr: index + 1,
                    //     user_id: `${item?.user_id} `,
                    //     package: `${item?.packageamount} USD  `,
                    //     date: item?.ee,
                    //     remark: (<>{item.top_up == 1 ? (<>Active</>) : (<>InActive</>)}</>),
                    //     activation_date: item.dd,
                    //     total_active_team: moment(item?.dd).format("M/D/YYYY h:m:s A"),
                    //     // date:moment(item?.ee).format("M/D/YYYY h:m:s A")
                    //     // date: item?.dd 
                    // })

                } else if (getuseriddata == item?.user_id) {

                    leftArray?.push({
                        sr: index + 1,
                        user_id: `${item?.user_id} `,
                        package: `${item?.packageamount} USD  `,
                        date: item?.ee,
                        position: item?.pos,
                        remark: (<>{item.top_up == 1 ? (<>Active</>) : (<>InActive</>)}</>),
                        activation_date: item.dd,
                        total_active_team: moment(item?.dd).format("M/D/YYYY h:m:s A"),
                        // date:moment(item?.ee).format("M/D/YYYY h:m:s A")
                        total_Business: item?.packageamount
                    })
                }




                setreferralApileft([...leftArray])



            }
            )


        } catch (e) {
            console.log("Error While calling Referrer API", e);
        }
    }


    useEffect(() => {
        referral_API()
    }, [getuseriddata, FilterRight, filterValue])


    const indexOfLastPost = currentPage * listPerpage;
    const indexOfFirstPage = indexOfLastPost - listPerpage;

    const indexOfLastPost2 = currentPage2 * listPerpage2;
    const indexOfFirstPage2 = indexOfLastPost2 - listPerpage2;
    const currentPost = referralApileft.slice(indexOfFirstPage, indexOfLastPost)
    const currentPostleft = referralApi.slice(indexOfFirstPage2, indexOfLastPost2)



    var [my_referral, set_my_referral] = new useState({
        cols: [
            { Header: 'S.No', accessor: 'sr' },
            { Header: 'User ID', accessor: 'user_id' },
            { Header: 'Package', accessor: 'package' },
            { Header: 'Date & Time', accessor: 'date' },
            { Header: 'Status', accessor: 'remark' },
            { Header: 'Position', accessor: 'position' },
            { Header: 'Activation Date Time', accessor: 'activation_date' },
            { Header: 'Total Active Team', accessor: 'activation_team' },
            { Header: 'Total Business', accessor: 'total_Business' },
        ],
        rows: [
            { sr: '1', user_id: '625029', package: '7', date: '100 USD', remark: 'Active', activation_date: '12/11/2021 1:40:08 PM', total_active_team: '0' },
            { sr: '2', user_id: '625029', package: '7', date: '100 USD', remark: 'Active', activation_date: '12/11/2021 1:40:08 PM', total_active_team: '0' },
            { sr: '3', user_id: '625029', package: '7', date: '100 USD', remark: 'Active', activation_date: '12/11/2021 1:40:08 PM', total_active_team: '0' },
            { sr: '4', user_id: '625029', package: '7', date: '100 USD', remark: 'Active', activation_date: '12/11/2021 1:40:08 PM', total_active_team: '0' },
            { sr: '5', user_id: '625029', package: '7', date: '100 USD', remark: 'Active', activation_date: '12/11/2021 1:40:08 PM', total_active_team: '0' },
            { sr: '6', user_id: '625029', package: '7', date: '100 USD', remark: 'Active', activation_date: '12/11/2021 1:40:08 PM', total_active_team: '0' },
            { sr: '7', user_id: '625029', package: '7', date: '100 USD', remark: 'Active', activation_date: '12/11/2021 1:40:08 PM', total_active_team: '0' },
            { sr: '8', user_id: '625029', package: '7', date: '100 USD', remark: 'Active', activation_date: '12/11/2021 1:40:08 PM', total_active_team: '0' },
            { sr: '9', user_id: '625029', package: '7', date: '100 USD', remark: 'Active', activation_date: '12/11/2021 1:40:08 PM', total_active_team: '0' },
        ]
    });
    return (
        <div className=" row justify-content-center">
            <div className=" col-lg-11 " style={{ height: '70vh' }}>
                <PagePath data={{ page_name: "My Referral", page_path: "Team Detail / My Referral" }} />

                {/* <div class="row mt-3" >
                <div class="col-md-3">
                    <label style={{ color: 'rgb(0 0 0 / 85%)' }}>Choose Status</label>
                    <select className=" input form-control ps-4"
                        defaultValue={FilterRight}
                        value={FilterRight}
                        onChange={(e) => setFilterRight(e.target.value)}
                    >
                        
                        <option value="2" style={{ color: 'rgb(0 0 0 / 85%)' }}>All</option>
                        <option value="1" style={{ color: 'rgb(0 0 0 / 85%)' }}>Active</option>
                        <option value="0" style={{ color: 'rgb(0 0 0 / 85%)' }}>In-Active</option>

                    </select>

                </div>
                <div class="col-md-3">
                    <label style={{ color: 'rgb(0 0 0 / 85%)' }}>Search User ID </label>
                    <input type="text" className="input form-control input_widthgr " onChange={(e) => setgetuseriddata(e.target.value)} />

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


                <div className="col-md-12 py-3 mt-2">


                    {/* <h1 className="mb-0 fs-3 pe-4 border_right p-color" style={{ color: 'rgb(0 0 0 / 85%)' }}>Left</h1> */}


                    <Table
                        data={[...currentPostleft]}
                        columns={my_referral.cols}
                    />

                    <Table_Buttons indexOfFirstPage={indexOfFirstPage2} indexOfLastPost={indexOfLastPost2} setcurrentPage={setcurrentPage2} currentPage={currentPage2} totalData={referralApileft.length} listPerpage={listPerpage2} />

                </div>
                {/* <div className="col-md-6 py-3 mt-2">
                <h1 className="mb-0 fs-3 pe-4 border_right p-color" style={{ color: 'rgb(0 0 0 / 85%)' }}>Right</h1>



                <Table
                    data={[...currentPost]}
                    columns={my_referral.cols}
                />
                <Table_Buttons indexOfFirstPage={indexOfFirstPage} indexOfLastPost={indexOfLastPost} setcurrentPage={setcurrentPage} currentPage={currentPage} totalData={referralApi.length} listPerpage={listPerpage} />


            </div> */}
            </div>
        </div>
    );
}

export default My_Referral;