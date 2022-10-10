import React, { useEffect } from 'react'
import { useState } from 'react'
import {
  All_Participates,
  Joining,
  Total_Earning,
  All_Income,
  Earned_Wire,
  Earned_USD,
  Id_Number,
  Profit,
} from '../../Components'
import './Dashboard.css'
import { API } from '../../Redux/actions/API'
import { getWalletAddress, getAllParticipants } from '../../Redux/actions/dashboard'
import Chart from 'react-apexcharts'

import { useDispatch, useSelector } from 'react-redux'
import Affiliate from '../../Components/Affiliate_Link/Affiliate'
import axios from 'axios'
import Withdraw_bouns from '../../Components/Varify-OTP/Withdraw_Bouns/Withdraw_bouns'
import { CopyToClipboard } from 'react-copy-to-clipboard'

let valueran = 0
const Dashboard = () => {  
  // const dashboard = useSelector((state) => state?.dashboard)
  const user = localStorage.getItem('user')  
  let ress = JSON?.parse(user)
  let Uid = ress?.uid
  console.log('user', user)
  const dispatch = useDispatch()
  const getAllData = () => {
    if (user) {
      // let ress = JSON.parse(user);
      // let uId = ress?.uid;

      dispatch(getAllParticipants(user))
    }
  }
  useEffect(() => {
    getAllData()
  }, [])
  let [earn, setearn] = useState()
  const [netBalance, setnetBalance] = useState(0)
  const [withdrawal, setwithdrawal] = useState(0)
  const [uID, setuID] = useState()
  const [referral, setReferral] = useState(0)
  const [matchingicome, setmatchingicome] = useState(0)
  const [roiIncome, setroiIncome] = useState(0)
  const [earnAmount, setearnAmount] = useState(0)
  const [TotalAmount, setTotalAmount] = useState(0)
  const [MaxIncome, setMaxIncome] = useState(0)
  const [allParticipants, setallParticipants] = useState(0)
  const [joined_last_24_hour, setjoined_last_24_hour] = useState()
  let [participantEarned, setparticipantEarned] = useState(0)
  const [earendUSD, setearendUSD] = useState(0)
  const [particioatEarnd, setparticioatEarnd] = useState(0)
  const [EarnAmount, setEarnAmount] = useState(0)
  const [machingLevel, setmachingLevel] = useState(0)
  const [joinhere, setjoinhere] = useState(0)
  const [packegeid, setpackegeid] = useState(0)
  const [gamedata, setgamedata] = useState(0)
  const [copyTest, setcopyTest] = useState(false)
  const [totalNftRosIncome, settotalNftRosIncome] = useState(0)

  const [ctoincom, setctoincom] = useState(0)

  const [totalactivationamount, settotalactivationamount] = useState(0)
  const [LeftActiveDirect, setLeftActiveDirect] = useState(0)
  const [RightActiveDirect, setRightActiveDirect] = useState(0)
  const [LeftActiveDownline, setLeftActiveDownline] = useState(0)
  const [RightActiveDownline, setRightActiveDownline] = useState(0)
  const [TeamBonus, setTeamBonus] = useState(0)
  const [Bonus7DayTimer, setBonus7DayTimer] = useState(0)
  const [Bonus30DayTimer, setBonus30DayTimer] = useState(0)
  const [LeftDirect, setLeftDirect] = useState(0)
  const [leftbusiness, setleftbusiness] = useState(0)
  const [rightbusiness, setrightbusiness] = useState(0)
  const [TotalAirdropToken, setTotalAirdropToken] = useState(0)
  const [ReceivedAirdropToken, setReceivedAirdropToken] = useState(0)
  const [tt, settt] = useState(0);

  const [Days_here, setDays_here] = useState(0)
  const [Hours_here, setHours_here] = useState(0)
  const [Munits_here, setMunits_here] = useState(0)
  const [Seconds, setSeconds] = useState(0)
  const [ctoIncomeOne, setctoIncomeOne] = useState(0)
  const [ctoIncomeTwo, setctoIncomeTwo] = useState(0)

  // let earn=50
  const DashboardAPI = async () => {
    try {
      let res = await API.get(`/getDashboardData?uid=${Uid}`)
      res = res.data.data[0]
      console.log('res', res)
      setctoIncomeOne(res[0].NFT_Pool1)
      setctoIncomeTwo(res[0].NFT_Pool2)
      setTotalAirdropToken(res.TotalAirdropToken)
      setReceivedAirdropToken(res.ReceivedAirdropToken)
      setrightbusiness(res[0].Total_NFT_Team_Business)
      setleftbusiness(res[0].Total_NFT_Unit)
      setLeftDirect(res.LeftDirect)
      setBonus30DayTimer(res.Bonus30DayTimer)
      setBonus7DayTimer(res.Bonus7DayTimer)
      setTeamBonus(res[0].Total_NFT_Income)
      setRightActiveDownline(res[0].Total_NFT_OPen_Level)
      setLeftActiveDownline(res[0].Total_NFT_Team_Count)
      setRightActiveDirect(res.RightDirect)
      setLeftActiveDirect(res.LeftDirect)
      settotalactivationamount(res.totalactivationamount)
      setctoincom(res.cto_income)
      setparticipantEarned(res[0].earnAmount)
      settotalNftRosIncome(res[0].NFT_ROI_Income)
      settt(res[0].tt)
      // console.log("Data", valueran);
      valueran = res.totalincome
      localStorage.setItem('ID', res[0].Total_NFT_Income)
      setpackegeid(res[0].My_Team)
      setearn(res?.totalincome)
      //  Net Balance-----------
      setnetBalance(res[0].NFT_NetBal)
      //  Total Withdrawal-----------
      setwithdrawal(res[0].NFT_Withdrawal)
      //  UID-----------
      setuID(res.uid)
      //  Referral Income-----------------------
      setReferral(res[0].Today_NFT_ROS)
      // Matching Income------------------------
      setmatchingicome(res[0].Today_NFT_Level)
      // ROI Income---------------------
      setroiIncome(res[0].Total_NFT_Reward_Income)
      // Your total earning----------------------
      setearnAmount(res[0].EarnAmount)
      // out of ---------------------------------
      setTotalAmount(res[0].Today_NFT_Team_Business)
      setjoinhere(res[0].Total_NFT_Level_income)
      setEarnAmount(res[0].Total_NFT_Income)


      setMaxIncome(res[0].MaxIncome)
      setmachingLevel(res.levelincome)
      let earned_wire = res.ParticipantEarnedWire
      setparticioatEarnd(earned_wire)
      setearendUSD(res?.ParticipantEarnedUSD)

      // console.log("ParticipantEarnedWire",earned_wire);

      setallParticipants(res[0].NFT_Rank)
      setjoined_last_24_hour(res[0].My_Referral)
      // {dashboard?.allParticipants?.all_participants
      //   ? dashboard?.allParticipants?.all_participants
      //   : 0}

      // let response = await API.get(`GameWalletData?id=${user}`)
      // setgamedata(response.data.data[0].total)
    } catch (e) {
      console.log('Error While Fatch Dashboard API', e)
    }
  }

  const timer = async () => {
    try {
      var currentDateTime = new Date()
      let resultInSeconds = currentDateTime.getTime() / 1000
      let Time_here = 1663880172 - resultInSeconds
      let TimeFinal = parseInt(Time_here)

      if (TimeFinal <= 0) {
        setDays_here(0)
        setHours_here(0)
        setMunits_here(0)
        setSeconds(0)
      } else {
        let days = parseInt(TimeFinal / 86400)

        setDays_here(days)
        TimeFinal = TimeFinal % 86400
        let hours = parseInt(TimeFinal / 3600)
        setHours_here(hours)
        TimeFinal %= 3600
        let munites = parseInt(TimeFinal / 60)
        setMunits_here(munites)
        TimeFinal %= 60
        let second_here = parseInt(TimeFinal)
        setSeconds(second_here)
      }
    } catch (e) {
      console.log('Error While Timer', e)
    }
  }

  useEffect(() => {
    DashboardAPI()

    setInterval(() => {
      timer()
    }, 1000)
  }, [])

  let [joining, setjoining] = new useState({
    series: [
      {
        name: 'STOCK ABC',
        data: [
          [1, 34],
          [3, 54],
          [5, 23],
          [15, 43],
        ],
      },
    ],
    options: {
      chart: {
        toolbar: {
          show: false,
        },
        offsetX: 0,
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'straight',
        colors: ['#FFFFFF'],
      },
      fill: {
        colors: ['#ffffff'],
        opacity: 1,
        type: 'gradient',
        gradient: {
          shadeIntensity: 0.5,
          opacityFrom: 0.8,
          opacityTo: 0,
        },
      },
      grid: {
        show: false,
        borderColor: '#90A4AE',
        strokeDashArray: 0,
        position: 'back',
        xaxis: {
          lines: {
            show: false,
          },
        },
        padding: {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
        },
      },
      xaxis: {
        type: 'category',
        categories: [],
        labels: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      yaxis: {
        type: 'category',
        categories: [],
        labels: {
          show: false,
        },
      },
    },
  })

  const IDHERE = localStorage.getItem('ID')
  // console.log("totalEarning", valueran);

  let [earning, setearning] = new useState({
    series: [IDHERE],
    options: {
      plotOptions: {
        radialBar: {
          startAngle: -135,
          endAngle: 225,
          hollow: {
            margin: 0,
            size: '60%',
            colors: '#293450',
          },
          track: {
            show: true,
            startAngle: undefined,
            endAngle: undefined,
            background: '#000',
            strokeWidth: '90%',
            opacity: 0.1,
            margin: 5,
          },
          dataLabels: {
            name: {
              offsetY: 0,
              color: '#fff',
              fontSize: '1.5rem',
            },
            value: {
              show: false,
            },
          },
        },
      },
      fill: {
        type: 'solid',
      },
      colors: ['#ffffff'],
      stroke: {
        dashArray: 4,
      },
      labels: [IDHERE],
    },
  })


  let [earned_wire, setearned_wire] = new useState({
    series: [
      {
        name: 'STOCK ABC',
        data: [
          [1, 34],
          [3, 54],
          [5, 23],
          [15, 43],
        ],
      },
    ],
    options: {
      chart: {
        toolbar: {
          show: false,
        },
        offsetX: 0,
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'straight',
        colors: ['#FFFFFF'],
      },
      fill: {
        colors: ['#ffffff'],
        opacity: 1,
        type: 'gradient',
        gradient: {
          shadeIntensity: 0.5,
          opacityFrom: 0,
          opacityTo: 0,
        },
      },
      grid: {
        show: false,
        borderColor: '#90A4AE',
        strokeDashArray: 0,
        position: 'back',
        xaxis: {
          lines: {
            show: false,
          },
        },
        padding: {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
        },
      },
      xaxis: {
        type: 'category',
        categories: [],
        labels: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      yaxis: {
        type: 'category',
        categories: [],
        labels: {
          show: false,
        },
      },
    },
  })
  let [id_number, setid_number] = new useState({
    series: [
      {
        data: [
          {
            x: 'category A',
            y: 10,
          },
          {
            x: 'category B',
            y: 18,
          },
          {
            x: 'category C',
            y: 13,
          },
          {
            x: 'category D',
            y: 10,
          },
          {
            x: 'category E',
            y: 18,
          },
          {
            x: 'category F',
            y: 13,
          },
          {
            x: 'category G',
            y: 10,
          },
          {
            x: 'category H',
            y: 18,
          },
          {
            x: 'category I',
            y: 13,
          },
        ],
      },
    ],
    options: {
      chart: {
        toolbar: {
          show: false,
        },
        offsetX: 0,
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'straight',
        colors: ['#FFFFFF'],
      },
      fill: {
        colors: ['#ffffff'],
        opacity: 1,
        type: 'solid',
        gradient: {
          shadeIntensity: 0.5,
          opacityFrom: 0,
          opacityTo: 0,
        },
      },
      grid: {
        show: false,
        borderColor: '#90A4AE',
        strokeDashArray: 0,
        position: 'back',
        xaxis: {
          lines: {
            show: false,
          },
        },
        padding: {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
        },
      },
      xaxis: {
        type: 'category',
        categories: [],
        labels: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      yaxis: {
        type: 'category',
        categories: [],
        labels: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          horizontal: false,
          s̶t̶a̶r̶t̶i̶n̶g̶S̶h̶a̶p̶e̶: 'flat',
          e̶n̶d̶i̶n̶g̶S̶h̶a̶p̶e̶: 'flat',
          borderRadius: 0,
          columnWidth: 7,
          barHeight: '70%',
        },
      },
    },
  })
  let [profit, setprofit] = new useState({
    options: {
      plotOptions: {
        radialBar: {
          hollow: {
            margin: 0,
            size: '70%',
            colors: '#293450',
          },
          track: {
            show: true,
            startAngle: undefined,
            endAngle: undefined,
            background: '#000',
            strokeWidth: '97%',
            opacity: 0.1,
            margin: 5,
          },
          dataLabels: {
            name: {
              show: false,
            },
            value: {
              offsetY: 10,
              color: '#fff',
              fontSize: '2.5rem',
            },
          },
        },
      },
      fill: {
        type: 'solid',
      },
      colors: ['#2cd719'],
      stroke: {
        curve: 'smooth',
        lineCap: 'round',
      },
      labels: ['300%'],
    },
  })

  console.log("Earning Total=>", earning)



  return (
    <>
      <div class="page-wrapper ">
        <div class="page-content ">
          <div class="row mt-3 dash-ip">
            <div class="col-12 col-lg-6 col-xl-6">
              <div class="row">
                <div class="col-12 col-lg-6 col-xl-6">
                  <div class="card radius-10 height_manage ">
                    <div class="card-body card1 ">
                      <div class="d-flex align-items-center mt-3" style={{ justifyContent: 'center' }}>
                        <div class="income_set" style={{ textAlign: 'center !important ' }}>
                          <p class="mb-0 text-center">All Income</p>
                        </div>
                      </div>
                      <div class="mt-1 mb_1">
                        <div class="income_name">
                          <h4 id="income-h4">Today NFT ROS</h4>
                          <h4 id="income-h4">{`$ ${referral}`}</h4>
                        </div>
                        <div class="progress" style={{ height: '10px' }}>
                          <div class="progress-bar bg-white" style={{ width: '44%' }}></div>
                        </div>
                      </div>
                      <div class="mt-1 mb_1">
                        <div class="income_name">
                          <h4 id="income-h4">Today NFT Level</h4>
                          <h4 id="income-h4">{`$ ${matchingicome}`}</h4>
                        </div>
                        <div class="progress" style={{ height: '10px' }}>
                          <div class="progress-bar bg-white" style={{ width: '60%' }}></div>
                        </div>
                      </div>
                      <div class="mt-1 mb_1">
                        <div class="income_name">
                          <h4 id="income-h4">Total NFT ROS Income</h4>
                          <h4 id="income-h4">{`$ ${totalNftRosIncome}`}</h4>
                        </div>
                        <div class="progress" style={{ height: '10px' }}>
                          <div class="progress-bar bg-white" style={{ width: '80%' }}></div>
                        </div>
                      </div>
                      <div class="mt-1 mb_1">
                        <div class="income_name">
                          <h4 id="income-h4">Total NFT Level Income</h4>
                          <h4 id="income-h4">{`$ ${joinhere}`}</h4>
                        </div>
                        <div class="progress" style={{ height: '10px' }}>
                          <div class="progress-bar bg-white" style={{ width: '60%' }}></div>
                        </div>
                      </div>

                      <div class="mt-1 mb_1">
                        <div class="income_name">
                          {/* ROI Income */}
                          <h4 id="income-h4">Total NFT Reward Income</h4>
                          <h4 id="income-h4">{`$ ${roiIncome}`}</h4>
                        </div>
                        <div class="progress" style={{ height: '10px' }}>
                          <div class="progress-bar bg-white" style={{ width: '60%' }}></div>
                        </div>
                      </div>

                      <div class="mt-1 mb_1">
                        <div class="income_name">
                          {/* ROI Income */}
                          <h4 id="income-h4">Total CTO Income 1</h4>
                          <h4 id="income-h4">{`$ ${ctoIncomeOne}`}</h4>
                        </div>
                        <div class="progress" style={{ height: '10px' }}>
                          <div class="progress-bar bg-white" style={{ width: '60%' }}></div>
                        </div>
                      </div>

                      <div class="mt-1 mb_1">
                        <div class="income_name">
                          {/* ROI Income */}
                          <h4 id="income-h4">Total CTO Income 2</h4>
                          <h4 id="income-h4">{`$ ${ctoIncomeTwo}`}</h4>
                        </div>
                        <div class="progress" style={{ height: '10px' }}>
                          <div class="progress-bar bg-white" style={{ width: '60%' }}></div>
                        </div>
                      </div>

                      {/* <div class="mt-1 mb_1">
                    <div class="income_name">
                      Withdrawal Income
                      <h4 id='income-h4'>Total NFT Unit</h4>

                      <h4 id='income-h4'>{`$ ${ctoincom}`}</h4>
                    </div>
                    <div class="progress" style={{ height: '10px' }}>
                      <div class="progress-bar bg-white" style={{ width: "60%" }}></div>
                    </div>
                  </div> */}
                      {/* <div class="mt-1 mb_1">
                    <div class="income_name">
                      <h4>Sports Bonus</h4>
                      <h4>$125</h4>
                    </div>
                    <div class="progress" style={{ height: '10px' }}>
                      <div class="progress-bar bg-white" style={{ width: "70%" }}></div>
                    </div>
                  </div> */}
                      {/* <div class="mt-1 mb_1">
                    <div class="income_name">
                      <h4>Reward Income</h4>
                      <h4>$123</h4>
                    </div>
                    <div class="progress" style={{ height: '10px' }}>
                      <div class="progress-bar bg-white" style={{ width: "80%" }}></div>
                    </div>
                  </div> */}
                    </div>
                    <div class="progress-wrapper">
                      <div class="progress" style={{ height: '7px' }}>
                        <div class="progress-bar" role="progressbar" style={{ width: '100' }}></div>
                      </div>
                    </div>
                  </div>
                  {/* <div class="col-12 col-lg-6 col-xl-6"> */}
                  {/* <div class="card radius-10 height_styke_team">
                    <div class="card-body card1">
                      <p>Total NFT Unit</p>
                      <div class="Left_Right">
                        <h3 className="dash-h3">
                        
                        </h3>
                      </div>
                    </div>
                    <div class="progress-wrapper">
                      <div class="progress" style={{ height: '7px' }}>
                        <div class="progress-bar" role="progressbar" style={{ width: '100' }}></div>
                      </div>
                    </div>
                  </div> */}

                  {/* </div> */}
                </div>
                <div class="col-12 col-lg-6 col-xl-6">
                  <Total_Earning data={{ netbalance: `${netBalance}`, withdrawal: `${withdrawal}` }} opt={earning} />
                  <div class="card radius-10 height_styke_team">
                    <div class="card-body card1">
                      <p>Today NFT Team Business</p>
                      <div class="Left_Right">
                        <h3 className="dash-h3">
                          {TotalAmount}
                          {/* {props.data.TotalAmount} */}

                        </h3>
                      </div>
                    </div>
                    <div class="progress-wrapper">
                      <div class="progress" style={{ height: '7px' }}>
                        <div class="progress-bar" role="progressbar" style={{ width: '100' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-12 col-lg-6 col-xl-6">
              <div class="row">
                <div class="col-12 col-lg-6 col-xl-6">
                  <div class="card radius-10 height_styke_team">
                    <div class="card-body card1">
                      <p>My Team</p>
                      <div class="Left_Right">
                        <h3 className="dash-h3">
                          {packegeid}
                          {/* <br />
                          Left */}
                        </h3>
                        {/* <h6 className='dash-h3'>
                          {RightActiveDownline}<br />
                          Right
                        </h6> */}
                      </div>
                    </div>
                    <div class="progress-wrapper">
                      <div class="progress" style={{ height: '7px' }}>
                        <div class="progress-bar" role="progressbar" style={{ width: '100' }}></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-12 col-lg-6 col-xl-6">
                  <div class="card radius-10  height_styke_team">
                    <div class="card-body card1">
                      <p>My Referral</p>
                      <div class="Left_Right">
                        <h3 className="dash-h3">
                          {joined_last_24_hour}
                          {/* <br />
                          Left Business */}
                        </h3>
                        {/* <h6 className='dash-h3'>
                          {rightbusiness}<br />
                          Right Business
                        </h6> */}
                      </div>
                      {/* <!-- <div id="bounce-rate"></div> --> */}
                    </div>
                    <div class="progress-wrapper">
                      <div class="progress" style={{ height: '7px' }}>
                        <div class="progress-bar" role="progressbar" style={{ width: '100' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-lg-6 col-xl-6">
                  <div class="card radius-10 height_styke_team">
                    <div class="card-body card1">
                      <p>Total NFT Team Count</p>
                      <div class="Left_Right">
                        <h3 className="dash-h3">
                          {LeftActiveDownline}
                          {/* <br />
                          Left */}
                        </h3>
                        {/* <h6 className='dash-h3'>
                          {RightActiveDownline}<br />
                          Right
                        </h6> */}
                      </div>
                    </div>
                    <div class="progress-wrapper">
                      <div class="progress" style={{ height: '7px' }}>
                        <div class="progress-bar" role="progressbar" style={{ width: '100' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-lg-6 col-xl-6">
                  <div class="card radius-10  height_styke_team">
                    <div class="card-body card1">
                      <p>Total NFT Unit</p>
                      <div class="Left_Right">
                        <h3 className="dash-h3">
                          {leftbusiness}
                          {/* <br />
                          Left Business */}
                        </h3>
                        {/* <h6 className='dash-h3'>
                          {rightbusiness}<br />
                          Right Business
                        </h6> */}
                      </div>
                      {/* <!-- <div id="bounce-rate"></div> --> */}
                    </div>
                    <div class="progress-wrapper">
                      <div class="progress" style={{ height: '7px' }}>
                        <div class="progress-bar" role="progressbar" style={{ width: '100' }}></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-12 col-lg-6 col-xl-6">
                  <div class="card radius-10 height_styke_team">
                    <div class="card-body card1">
                      <p>NFT Rank</p>
                      <div class="Left_Right">
                        <h3 className="dash-h3">
                          {allParticipants}
                          {/* <br />
                          Left */}
                        </h3>
                        {/* <h6 className='dash-h3'>
                          {RightActiveDownline}<br />
                          Right
                        </h6> */}
                      </div>
                    </div>
                    <div class="progress-wrapper">
                      <div class="progress" style={{ height: '7px' }}>
                        <div class="progress-bar" role="progressbar" style={{ width: '100' }}></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-12 col-lg-6 col-xl-6">
                  <div class="card radius-10 radius-pp">
                    <div class="card-body card1">
                      <p className="link-aff">Affiliate Link</p>
                      <div class="copy_btn_set">
                        <div class="wdg-box bxset primary">
                          <input
                            type="text"
                            class="wdg-input-box"
                            id="myInput"
                            readonly=""
                            value={`https://www.nftworldexposure.io/Register_main?referrallink=${Uid}`}
                          />
                          <div class="fast-msg-box"></div>
                        </div>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <div class="wdg-actions copy_btn_set2">
                          <CopyToClipboard
                            text={`https://www.nftworldexposure.io/Register_main?referrallink=${Uid}`}
                            onCopy={() => setcopyTest(true)}
                          >
                            {/* <div class="wdg-actions copy_btn_set2"> */}
                            <button type="button" class="copy_btn_set3">
                              <span className="copy-ip">Copy</span>
                            </button>
                            {/* <div className='main_class_copy'>


                              </div>
                            </div> */}
                          </CopyToClipboard>
                        </div>
                      </div>
                    </div>
                    <div class="progress-wrapper">
                      <div class="progress" style={{ height: '7px' }}>
                        <div class="progress-bar" role="progressbar" style={{ width: '100' }}></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-12 col-lg-6 col-xl-6">
                  <div class="card radius-10 height_styke_team">
                    <div class="card-body card1">
                      <p>Total NFT Open Level</p>
                      <div class="Left_Right">
                        <h3 className="dash-h3">
                          {RightActiveDownline}
                          {/* <br />
                          Left */}
                        </h3>
                        {/* <h6 className='dash-h3'>
                          {RightActiveDownline}<br />
                          Right
                        </h6> */}
                      </div>
                    </div>
                    <div class="progress-wrapper">
                      <div class="progress" style={{ height: '7px' }}>
                        <div class="progress-bar" role="progressbar" style={{ width: '100' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-lg-6 col-xl-6">
                  <div class="card radius-10  height_styke_team">
                    <div class="card-body card1">
                      <p>Total NFT Team Business</p>
                      <div class="Left_Right">
                        <h3 className="dash-h3">
                          {rightbusiness}
                          {/* <br />
                          Left Business */}
                        </h3>
                        {/* <h6 className='dash-h3'>
                          {rightbusiness}<br />
                          Right Business
                        </h6> */}
                      </div>
                      {/* <!-- <div id="bounce-rate"></div> --> */}
                    </div>
                    <div class="progress-wrapper">
                      <div class="progress" style={{ height: '7px' }}>
                        <div class="progress-bar" role="progressbar" style={{ width: '100' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12">
              <div class="col-md-12">
                <div class="prgs">
                  <img
                    src="assets3/images/horse_green.png"
                    id="dynamicwidth"
                    style={{ marginLeft: (MaxIncome).toFixed(0) + '%' }}
                  />

                  <div id="myProgress">
                    <div
                      className="dash-h3"
                      id="myBar"
                      style={{ width: (MaxIncome).toFixed(0) + '%', backgroundColor: 'green' }}
                    ></div>
                  </div>
                </div>
                <div class="text_color dash-h3" style={{ fontSize: 'medium', color: 'white' }}>

                  You have earned a total $ {EarnAmount}  out of $ {tt}  (Your earned {MaxIncome}% out of 300% of your investment)
                </div>

                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard
