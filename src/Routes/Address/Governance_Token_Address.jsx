import React from 'react'
import { PagePath } from '../../Components'
import './Address.css';

export default function Governance_Token_Address() {
  return (
    <div>
        <div className="row justify-content-center border_right" style={{height:"90vh"}} >
            <div className="col-md-11 py-3">
                <PagePath data={{page_name:"Governance Token Address",page_path:"Address / Governance Token Address"}} />   
                <h5 className=" mt-5 border_right right-ip-1">Governance Token Address : { (<a href={`https://bscscan.com/address/0x84E12535015F78060360CC25034d7b6AD9895f8c#code`} className=" border_right" target="_blank">{"0x84E12535015F78060360CC25034d7b6AD9895f8c" || "Connect Wallet" }</a>)}  </h5>

            </div>
        </div>
    </div>
  )
}
