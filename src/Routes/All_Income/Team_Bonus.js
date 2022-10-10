import { useEffect, useState } from "react";
import { PagePath, Table, Table_Buttons } from "../../Components";
import { API } from '../../Redux/actions/API'
import Spinner from '../../Components/Spinner/Spinner';

const Team_Bonus = () => {
    const [referralApi, setreferralApi] = useState([])
    const [currentPage, setcurrentPage] = useState(1)
    const [listPerpage, setlistPerpage] = useState(10)
    const [fromDate, setFromDate] = useState("")
    const [toDate, setToDate] = useState("")
    const [loader, setloader] = useState(false)

    const referral_API = async () => {
        setloader(true)
        try {
            const user = localStorage?.getItem("user");
            let res = JSON.parse(user);
            let uid = res?.uid;
            let responce = await API?.get(`/nftUnstakingHistory?uid=${uid}&fdate=${fromDate}&tdate=${toDate}`);
            responce = responce?.data?.data[0];
            console.log("responce", responce);
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


    var [referral_income, set_referral_income] = new useState({
        cols: [
            { Header: 'S.No', accessor: 'row' },
            { Header: 'User ID', accessor: 'uid' },
            { Header: 'Token ID', accessor: 'tokenid' },
            { Header: 'Unstaking Date & Time', accessor: 'dd' },
            { Header: 'Usd', accessor: 'usdvalue' },
            { Header: 'Paid Date & Time', accessor: 'ud' },
            { Header: 'Paid Txn', accessor: 'unstake_txn' }
        ]
    });
    return (
        <div className="row justify-content-center" style={{ height: '70vh' }}>
            {loader == true ? <Spinner /> : <></>}
            <div className="col-md-11 py-3">
                <PagePath data={{ page_name: "NFT Unstaking History", page_path: "All Income / NFT Unstaking History" }} />
                {/* <div class="row mt-3" style={{ marginLeft: "10px" }}>
                    <div class="col-md-3">
                        <label>Enter From Date</label>
                        <input type="date" name="from_date" id="from_date" class="select-system" onChange={(e) => setFromDate(e.target.value)} />
                    </div><br /><br />
                    <div class="col-md-3">
                        <label>Enter To Date</label>
                        <input type="date" name="to_date" id="to_date" class="select-system" onChange={(e) => setToDate(e.target.value)} />
                    </div><br /><br />
                    <div class="col-md-3 mt-4">
                        <input type="button" value="Search" class="btn btn-submit-1 btn-primary mt_5" onClick={referral_API} />
                    </div>
                </div> */}
                <br />

                <Table
                    data={[...currentPost]}
                    columns={referral_income.cols}
                    toolbar={false}


                />
                <Table_Buttons indexOfFirstPage={indexOfFirstPage} indexOfLastPost={indexOfLastPost} setcurrentPage={setcurrentPage} currentPage={currentPage} totalData={referralApi.length} listPerpage={listPerpage} />

            </div>
        </div>
    );
}

export default Team_Bonus;