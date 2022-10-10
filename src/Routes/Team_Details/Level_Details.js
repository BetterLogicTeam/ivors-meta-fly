import { useEffect, useState } from "react";
import { PagePath, Table, Table_Buttons } from "../../Components";
import { API } from '../../Redux/actions/API'
import './Lavel.css';
import Spinner from '../../Components/Spinner/Spinner';
import './Style.css';

const Level_Details = () => {
    const [loader, setloader] = useState(false)
    const [referralApi, setreferralApi] = useState([])
    const [currentPage, setcurrentPage] = useState(1)
    const [listPerpage, setlistPerpage] = useState(10)
    const [levelValue, setlevelValue] = useState(0)
    const [statusValue, setstatusValue] = useState(2)

    const referral_API = async () => {
        setloader(true)
        try {
            const user = localStorage?.getItem("user");
            let ress = JSON?.parse(user);
            let uId = ress?.uid;


            let responce = await API?.post(`/levelDetails`, {
                "uid": uId,
                "level": `${levelValue}`,
                "status": `${statusValue}`
            });
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


    var [level_details, set_level_details] = new useState({
        cols: [
            { Header: 'S.No', accessor: 'row' },
            { Header: 'User ID', accessor: 'uid' },
            { Header: 'Wallet', accessor: 'f_name' },
            { Header: 'Package Amount', accessor: 'mintingamount' },
            { Header: 'Level', accessor: 'Leveltype' },
            { Header: 'Reg Date & Time', accessor: 'date1' }
        ]
    });
    return (
        <div className="row justify-content-center" style={{ height: '70vh' }}>
            <div className="col-md-11 py-3">
                <PagePath data={{ page_name: "Level Details", page_path: "Team Details / Level Details" }} />

                <div class="row mt-4 disp-levl-1">
                    {loader == true ? <Spinner /> : <></>}
                    <div class="col-md-3 ref-ip">
                        <label>Select Level</label>
                        <select class="select-system" id="level" onChange={(e) => setlevelValue(e.target.value)}>
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
                            <option value="9">Level 9</option>
                            <option value="10">Level 10</option>
                            <option value="11">Level 11</option>
                            <option value="12">Level 12</option>
                            <option value="13">Level 13</option>
                            <option value="14">Level 14</option>
                            <option value="15">Level 15</option>
                            <option value="16">Level 16</option>
                            <option value="17">Level 17</option>
                            <option value="18">Level 18</option>
                            <option value="19">Level 19</option>
                            <option value="20">Level 20</option>
                        </select>
                    </div>
                    <div class="col-md-3 ref-ip">
                        <label>Choose Status</label>
                        <select class="select-system" id="status" onChange={(e) => setstatusValue(e.target.value)}>
                            <option value="">Select Status</option>
                            <option value="2">All</option>
                            <option value="1">Active</option>
                            <option value="0">In-Active</option>
                        </select>
                    </div>
                    <div class="col-md-3 mt-4">
                        <input type="button" value="Search" class="btn btn-submit-1 ref-ip1 btn-primary mt_5" onClick={referral_API} />
                    </div>
                </div>
                <Table
                    data={currentPost}
                    columns={level_details.cols}
                />

                <Table_Buttons indexOfFirstPage={indexOfFirstPage} indexOfLastPost={indexOfLastPost} setcurrentPage={setcurrentPage} currentPage={currentPage} totalData={referralApi.length} listPerpage={listPerpage} />
            </div>
        </div>
    );
}

export default Level_Details;