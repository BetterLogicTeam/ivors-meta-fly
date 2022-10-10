import moment from "moment";
import { useEffect, useState } from "react";
import { PagePath, Table, Table_Buttons } from "../../Components";
import { API } from "../../Redux/actions/API";

const Direct_Leg_Business = () => {

    const [referralApi, setreferralApi] = useState([])
    const [currentPage, setcurrentPage] = useState(1)
    const [listPerpage, setlistPerpage] = useState(10)

    const referral_API = async () => {
        try {

            const user = localStorage?.getItem("user");
            let ress = JSON?.parse(user);
            let uId = ress?.uid;

            let responce = await API?.get(`/nftLegBusiness?uid=${user}`)
            responce = responce?.data?.data[0];

            console.log("Res", responce);
            let arr = []
            responce?.forEach((item, index) => {
                arr?.push({
                    sr: item.row,
                    user_id: `${item?.uid} `,
                    investment: `${item?.SelfBusiness} `,
                    team_business: `${item?.roi_businessdirect} `,
                });
            })
            // console.log("responce", arr);

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


    var [direct_leg_business, set_direct_leg_business] = new useState({
        cols: [
            { Header: 'S.No', accessor: 'sr' },
            { Header: 'User ID', accessor: 'user_id' },
            { Header: 'Investment', accessor: 'investment' },
            { Header: 'Team Business', accessor: 'team_business' },
        ]
    });
    return (
        <div className="row justify-content-center" style={{ height: '70vh' }}>
            <div className="col-md-11 py-3">
                <PagePath data={{ page_name: "NFT Leg Business", page_path: "Team Details / NFT Leg Business" }} />
                <Table
                    data={currentPost}
                    columns={direct_leg_business.cols}
                />
                <Table_Buttons indexOfFirstPage={indexOfFirstPage} indexOfLastPost={indexOfLastPost} setcurrentPage={setcurrentPage} currentPage={currentPage} totalData={referralApi.length} listPerpage={listPerpage} />

            </div>
        </div>
    );
}

export default Direct_Leg_Business;