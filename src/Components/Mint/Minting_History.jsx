
import moment from "moment";
import { useEffect, useState } from "react";
import { PagePath, Table, Table_Buttons } from "../../Components";
import { API } from "../../Redux/actions/API";
import Spinner  from '../Spinner/Spinner';
const Minting_History = () => {
    const [loader, setloader] = useState(false)
    const [referralApi, setreferralApi] = useState([])
    const [currentPage, setcurrentPage] = useState(1)
    const [listPerpage, setlistPerpage] = useState(10)

    const referral_API = async () => {
        setloader(true)
        try {

            const user = localStorage?.getItem("user");
            console.log("Uswerr", user);
            let ress = JSON.parse(user);
            let uId = ress?.uid;

            let responce = await API?.get(`nftHistory?uid=${uId}&fdate=&tdate=`)
            responce = responce.data.data[0];
            console.log("responce", responce);

            let arr = [];
            responce?.forEach((item, index) => {
                arr.push({
                    row: item.row,
                    uid: item.uid,
                    tokenid: item.tokenid,
                    usdvalue: item.usdvalue,
                    txn: <a href={`https://bscscan.com/tx/${item.txn}`} target={"_blank"}>View Txn</a>,
                    dd: item.dd
                })
            });

            setreferralApi(arr)
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

    var [reward_income, set_reward_income] = new useState({
        cols: [
            { Header: 'S.No', accessor: 'row' },
            { Header: 'User Id', accessor: 'uid' },
            { Header: 'Token Id', accessor: 'tokenid' },
            { Header: 'Usd', accessor: 'usdvalue' },
            // { Header: 'Remark', accessor: 'status' },
            { Header: 'Txn', accessor: 'txn' },
            // {Header:'Income($)',accessor:'income'},
            { Header: 'Date & Time', accessor: 'dd' }]
    });
    return (
        <div className="row justify-content-center" style={{ height: '70vh' }}>
            <div className="col-md-11 py-3">
            {loader == true ? <Spinner /> : <></>}
                <PagePath data={{ page_name: "Mint History", page_path: "Mint NFT/ Mint History" }} />
                <Table
                    data={currentPost}
                    columns={reward_income.cols}
                />
                {/* <Table_Buttons indexOfFirstPage={indexOfFirstPage} indexOfLastPost={indexOfLastPost}  setcurrentPage={setcurrentPage} currentPage={currentPage} totalData={referralApi.length} listPerpage={listPerpage} /> */}

            </div>

        </div>
    );
}

export default Minting_History;