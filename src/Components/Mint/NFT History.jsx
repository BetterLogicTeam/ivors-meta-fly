import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { getMyReferralReport } from '../../Redux/actions/dailyYield'
import { PagePath, Table, Table_Buttons } from '..'
import { API } from '../../Redux/actions/API'
import moment from 'moment'
import Spinner  from '../Spinner/Spinner';
// import './Style_for_all.css'
import '../../Routes/Team_Details/Style.css'
import { Filter } from '@material-ui/icons'

const NFTHistory = () => {
  const [referralApi, setreferralApi] = useState([])
  const [referralApileft, setreferralApileft] = useState([])
  const [loader,setloader] = useState(false)
  const [currentPage, setcurrentPage] = useState(1)
  const [listPerpage, setlistPerpage] = useState(10)
  const [currentPage2, setcurrentPage2] = useState(1)
  const [listPerpage2, setlistPerpage2] = useState(10)
  const [filterValue, setFilterValue] = useState('')
  const [FilterRight, setFilterRight] = useState(2)
  const [getuseriddata, setgetuseriddata] = useState('')
  let arr = []
  let leftArray = []

  const changecontrol = async (item, index) => {
    arr.push({
      sr: index + 1,
      user_id: `${item?.user_id} `,
      package: `${item?.packageamount} USD  `,
      date: item?.ee,
      position: item?.pos,
      remark: <>{item.top_up == 1 ? <>Active</> : <>InActive</>}</>,
      activation_date: item.dd,
      total_active_team: moment(item?.dd).format('M/D/YYYY h:m:s A'),
      // date:moment(item?.ee).format("M/D/YYYY h:m:s A")
      total_Business: item?.packageamount,
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
      remark: <>{item.top_up == 1 ? <>Active</> : <>InActive</>}</>,
      activation_date: item.dd,
      total_active_team: moment(item?.dd).format('M/D/YYYY h:m:s A'),
      // date:moment(item?.ee).format("M/D/YYYY h:m:s A")
      total_Business: item?.packageamount,
    })
    setreferralApileft([...leftArray])
  }

  const referral_API = async () => {
    try {
      const user = localStorage?.getItem('user')
      let ress = JSON?.parse(user)
      let uId = ress?.uid
      let status = ress?.status

      // console.log("status", user);

      let res = await API?.get(`nftHistory?id=${uId}`)
      res = res.data.data[0]
      console.log('res=>', res)

      // let responce = await API?.post('/nftHistory', {
      //     "uid": uId,
      //     "fdate": 1,
      //     "tdate": FilterRight
      // })
      // responce = responce?.data?.data?.recordset;
      // console.log("responce", responce);

      // let responceRight = await API?.post('/nftHistory', {
      //     "uid": uId,
      //     "fdate": 2,
      //     "tdate": FilterRight
      // })
      // responceRight = responceRight?.data?.data?.recordset;

      // console.log("responceRight", responceRight);

      res?.forEach((item, index) => {
        if (getuseriddata.length == 0) {
          setTimeout(() => {
            // console.log("UserId", getuseriddata);
            changecontrol(item, index)
          }, 2000)
        } else if (getuseriddata == item?.user_id) {
          arr?.push({
            sr: index + 1,
            user_id: `${item?.user_id} `,
            package: `${item?.packageamount} USD  `,
            date: item?.ee,
            position: item?.pos,
            remark: <>{item.top_up == 1 ? <>Active</> : <>InActive</>}</>,
            activation_date: item.dd,
            total_active_team: moment(item?.dd).format('M/D/YYYY h:m:s A'),
            // date:moment(item?.ee).format("M/D/YYYY h:m:s A")
            total_Business: item?.packageamount,
          })
        }

        setreferralApi([...arr])
      })

      res?.forEach((item, index) => {
        if (getuseriddata.length == 0) {
          // console.log("UserId", getuseriddata);

          setTimeout(() => {
            // console.log("UserId", getuseriddata);
            change_Right(item, index)
          }, 2000)

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
            remark: <>{item.top_up == 1 ? <>Active</> : <>InActive</>}</>,
            activation_date: item.dd,
            total_active_team: moment(item?.dd).format('M/D/YYYY h:m:s A'),
            // date:moment(item?.ee).format("M/D/YYYY h:m:s A")
            total_Business: item?.packageamount,
          })
        }

        setreferralApileft([...leftArray])
      })
    } catch (e) {
      console.log('Error While calling Referrer API', e)
    }
  }

  useEffect(() => {
    referral_API()
  }, [getuseriddata, FilterRight, filterValue])

  const [Tabl, setTbal] = useState('')
  const getTableData = async () => {
    setloader(true)
    try {
      const res = await fetch(`https://nftworld-api.herokuapp.com/nftHistory?uid=100&fdate=2022-07-22&tdate=2022-07-23`)
      const data1 = await res.json()

      let data2 = data1.data[0]
      setTbal(data2)
      setloader(false)
    } catch (e) {
      console.log('Error While calling Referrer API', e)
    }
  }

  useEffect(() => {
    getTableData()
  }, [])
  console.log('rate=>', Tabl)

  const indexOfLastPost = currentPage * listPerpage
  const indexOfFirstPage = indexOfLastPost - listPerpage

  const indexOfLastPost2 = currentPage2 * listPerpage2
  const indexOfFirstPage2 = indexOfLastPost2 - listPerpage2
  const currentPost = referralApileft.slice(indexOfFirstPage, indexOfLastPost)
  const currentPostleft = referralApi.slice(indexOfFirstPage2, indexOfLastPost2)

  
  return (
    <div className=" row justify-content-center">
      {loader == true ? <Spinner /> : <></>}
      <div className=" col-lg-11 " style={{ height: '70vh' }}>
        <PagePath data={{ page_name: 'NFT History', page_path: 'Mint / NFT History' }} />

       

        <div class="row mt-3" style={{ marginLeft: '10px' }}>
          <div class="col-md-3">
            <label>Enter From Date</label>
            <input type="date" name="from_date" id="from_date" class="select-system" placeholder="Enter From Date" />
          </div>
          <br />
          <br />
          <div class="col-md-3">
            <label>Enter To Date</label>
            <input type="date" name="to_date" id="to_date" class="select-system" />
          </div>
          <br />
          <br />
        
          <div class="col-md-3 mt-3">
            <input type="submit" name="to_date" value="Search" class="btn btn-primary btn-submit-1 mt_5" />
          </div>
        </div>
        <br />

        <div className="col-md-12 py-3 mt-2">
          {/* <h1 className="mb-0 fs-3 pe-4 border_right p-color" style={{ color: 'rgb(0 0 0 / 85%)' }}>Left</h1> */}

          <Table
            columns={[
              { Header: 'S.No', accessor: 'row' },
              { Header: 'User ID', accessor: 'uid' },
              { Header: 'Token ID', accessor: 'tokenid' },
              { Header: 'Date & Time', accessor: 'dd' },
              { Header: 'Usd', accessor: 'usdvalue' },
              { Header: 'Txn', accessor: 'txn' },
              { Header: 'Action', accessor: 'status' },
            ]}
            data={[...Tabl]}
            title=""
            toolbar={false}
        
          />

          <Table_Buttons
            indexOfFirstPage={indexOfFirstPage2}
            indexOfLastPost={indexOfLastPost2}
            setcurrentPage={setcurrentPage2}
            currentPage={currentPage2}
            totalData={referralApileft.length}
            listPerpage={listPerpage2}
          />
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
  )
}

export default NFTHistory
