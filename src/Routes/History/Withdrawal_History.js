import { useEffect, useState } from "react";
import { PagePath, Table, Table_Buttons } from "../../Components";
import { API } from "../../Redux/actions/API";

const Withdrawal_History = () => {
    const [referralApi, setreferralApi] = useState([])
    const [currentPage, setcurrentPage] = useState(1)
    const [listPerpage, setlistPerpage] = useState(10)

    const referral_API = async () => {
        try {

            const user = localStorage?.getItem("user");
            let ress = JSON?.parse(user);
            let uId = ress?.uid;

            let responce = await API?.get(`/nftWithdrawalHistory?uid=${uId}&fdate=&tdate=`)
            responce = responce?.data?.data[0];
            console.log("Res", responce);

            let arr = [];
            responce?.forEach((item, index) => {
                arr.push({
                    row: item.row,
                    amountusd: item.amountusd,
                    withdrawl: item.withdrawl,
                    tdate: item.tdate,
                    txn: <a href={`https://bscscan.com/tx/${item.txn}`} target={"_blank"}>View Txn</a>
                })
            });

            setreferralApi(arr)

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


    var [withdrawal_history, set_withdrawal_history] = new useState({
        cols: [
            { Header: 'S.No', accessor: 'row' },
            { Header: 'Amount(Usd)', accessor: 'amountusd' },
            { Header: 'Withdrawal Coin', accessor: 'withdrawl' },
            { Header: 'Paid Date & Time', accessor: 'tdate' },
            { Header: 'TXN', accessor: 'txn' },

        ]
    });
    return (
        <div className="row justify-content-center" style={{ height: '70vh' }}>
            <div className="col-md-11 py-3">
                <PagePath data={{ page_name: "NFT Withdrawal History", page_path: "Withdrawal / NFT Withdrawal History" }} />
                <Table
                    data={currentPost}
                    columns={withdrawal_history.cols}
                />
                <Table_Buttons indexOfFirstPage={indexOfFirstPage} indexOfLastPost={indexOfLastPost} setcurrentPage={setcurrentPage} currentPage={currentPage} totalData={referralApi.length} listPerpage={listPerpage} />

            </div>
        </div>
    );
}

export default Withdrawal_History;