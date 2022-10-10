import { PagePath, Table } from '../../Components'
import { useEffect, useState } from 'react'
import './Withdrawal.css'
import { API } from '../../Redux/actions/API'

const Withdrawal = () => {
  const [amount, setAmount] = useState('')
  const [NetUSD, setNetUSD] = useState('')
  const [value, setValue] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  let tokenbal = amount * 2108.2369

  const WidthDrawal_API = async () => {
    try {
      const user = localStorage?.getItem('user')
      let ress = JSON.parse(user)
      let uId = ress?.uid

      let res = await API.get(`/getDashboardData?uid=${uId}`)
      res = res.data.data[0]
      setNetUSD(res[0].NFT_NetBal)
      console.log('res', res[0])
    } catch (e) {
      console.log('Error While calling Referrer API', e)
    }




  }

  useEffect(() => {
    WidthDrawal_API()
  }, [])

  // const WidthDrawal_API1 = async () => {
  //   let tokenbal1 = amount * 2108.2369
  //   console.log('tokenbal1', tokenbal1)
  //   try {
  //     let res = await API.get(`/usdToWhe?usd=1`)
  //     res = res.data.data[0]
  //     setValue(res[0])
  //   } catch (e) {
  //     console.log('Error While calling Referrer API', e)
  //   }
  // }

  // useEffect(() => {
  //   WidthDrawal_API1()
  // }, [])

  const referral_API = async () => {
    setIsLoading(true)
    try {
      const user = localStorage?.getItem('user')
      let ress = JSON.parse(user)
      let uId = ress?.uid

      let responce = await API?.post('/nftWithdrawal', {
        uid: uId,
        address: '0xF639990F486AC43E14C8b0BB709208Dd217cad7B',
        txn: '',
        tokenvalue: 58.5,
        amount: 5,
      })
      responce = responce?.data?.data
      if (responce === 'Due to some Technical issue transaction can not Proceed!!') {
        alert('Due to some Technical issue transaction can not Proceed!!')
      }
      // setValue(responce)
      console.log('responce', responce)
      setIsLoading(false)
    } catch (e) {
      console.log('Error While calling Referrer API', e)
    }
  }

  // useEffect(() => {
  //   referral_API()
  // }, [])

  //   console.log("Value=>",value);
  // //   console.log('TokenValue=>', tokenValue)
  //   console.log('Amount=>', amount)

  return (
    <div className="row justify-content-center">
      <div className="col-md-11 py-3">
        {/* <PagePath data={{page_name:"Withdrawal",page_path:"History / Withdrawal"}} /> */}
        <div className="col-12 d-flex justify-content-center py-5">
          <div className="col-md-6 col-lg-7 col-xxl-4 col-10">
            <div className="d-flex flex-column align-items-center profile-border from-ip-1 profile-login  py-4 shadow-withdraw">
              <h4 className="h-color col-12 py-2 px-4 border_bottom pb-3">Main Wallet Withdrawal</h4>
              <p className="text-danger text-denger-1 col-11">wallet is not connected..!..Wait...</p>
              <div className="col-11 mt-3 row aligin-ip-1 align-items-center">
                <p className="col-5 m-0 p-0 text-white">Wallet Net USD Value</p>
                <input type="text" value={`${NetUSD}`} className="p-2 profile-border profile-ip-1 col-7" />
              </div>
              <div className="col-11 mt-3 row align-items-center">
                <p className="col-5 m-0 p-0 aligin-ip-1 text-white">Enter USD Amount</p>
                <input
                  type="text"
                  // placeholder={`${value.usd}`}
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="p-2 profile-border profile-ip-1 col-7"
                />
              </div>
              <div className="col-11 mt-3 row align-items-center">
                <p className="col-5 m-0 p-0 aligin-ip-1 text-white">Withdrawal Token</p>
                <input type="text" value={tokenbal} className="p-2 profile-border profile-ip-1 col-7" />
              </div>
              <div class="row mt-3">
                <div class="col-md-5"></div>
                <div class="col-md-3" >
                  <button class="btn btn-success withdraw_btn" onClick={referral_API}  id="btnother" disabled={isLoading}>
                  {isLoading && (
                        <div class="spinner-border text-warning"  role="status">
                          <span class="visually-hidden">Loading...</span>
                        </div>
                      )}{' '}
                    Withdrawal
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Withdrawal
