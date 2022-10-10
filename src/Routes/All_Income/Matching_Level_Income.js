import moment from "moment";
import { useEffect, useState } from "react";
import { PagePath, Table, Table_Buttons } from "../../Components";
import { API } from '../../Redux/actions/API'
import '../Team_Details/Lavel.css';
import Spinner  from '../../Components/Spinner/Spinner';

const Matching_Level_Income = () => {
    const [referralApi, setreferralApi] = useState([])
    const [currentPage, setcurrentPage] = useState(1)
    const [listPerpage, setlistPerpage] = useState(10)
    const [fromDate, setFromDate] = useState("")
    const [toDate, setToDate] = useState("")
    const [loader,setloader] = useState(false)

    const referral_API = async () => {
        setloader(true)
        try {

            const user = localStorage?.getItem("user");
            let ress = JSON?.parse(user);
            let uid = ress?.uid;

            let responce = await API?.get(`/nftRosLevelIncome?uid=${uid}&fdate=${fromDate}&tdate=${toDate}`)
            responce = responce?.data?.data[0];

            console.log("Res", responce);
            setreferralApi(responce)
            setloader(false)
        } catch (e) {
            console.log("Error While calling Referrer API", e);
        }
    }


    useEffect(() => {
        referral_API()
    }, [])

    const indexOfLastPost = currentPage * listPerpage;
    const indexOfFirstPage = indexOfLastPost - listPerpage;
    const currentPost = referralApi.slice(indexOfFirstPage, indexOfLastPost)

    var [matching_level_income, set_matching_level_income] = new useState({
        cols: [
            { Header: 'S.No', accessor: 'row' },
            { Header: 'User ID', accessor: 'sid' },
            { Header: 'From ID', accessor: 'uid' },
            { Header: 'Level', accessor: 'Leveltype' },
            { Header: 'Income', accessor: 'Level_income' },
            { Header: 'Date & Time', accessor: 'dd' },

        ]
    });
    return (
        <div className="row justify-content-center" style={{ height: '70vh' }}>
            {loader == true ? <Spinner /> : <></>}
            <div className="col-md-11 py-3">
                <PagePath data={{ page_name: "NFT ROS Level Income", page_path: "All Income / NFT ROS Level Income" }} />

                <div class="row mt-3" style={{ marginLeft: "10px" }}>
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
                    <div class="col-md-3 ref-ip">
                        <label>Enter From Date</label>
                        <input type="date" name="from_date" id="from_date" placeholder="dd/mm/yyyy" class="select-system" onChange={(e) => setFromDate(e.target.value)} />
                    </div><br /><br />
                    <div class="col-md-3 ref-ip">
                        <label>Enter To Date</label>
                        <input type="date" name="to_date" id="to_date" placeholder="dd/mm/yyyy" class="select-system" onChange={(e) => setToDate(e.target.value)} />
                    </div><br /><br />
                    <div class="col-md-3 mt-4">
                        <input type="button" value="Search" class="btn btn-submit-1 ref-ip1 btn-primary mt_5" onClick={referral_API} />
                    </div>
                </div>
                <Table
                    data={[...currentPost]}
                    columns={matching_level_income.cols}
                />
                <Table_Buttons indexOfFirstPage={indexOfFirstPage} indexOfLastPost={indexOfLastPost} setcurrentPage={setcurrentPage} currentPage={currentPage} totalData={referralApi.length} listPerpage={listPerpage} />

            </div>
        </div>
    );
}

export default Matching_Level_Income;