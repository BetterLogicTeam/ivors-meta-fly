import React from "react";
import './Total_Earning.css'
import Chart from 'react-apexcharts'
const Total_Earning = (props) => {
    console.log("props.opt.options",props.opt.options);
    console.log("props.opt.series",props.opt.series);
    return (

      
                  <div class="card radius-10 income-he">
                    <div class="card-body card1 text-center px-0 pb-5">
                      <p>Total NFT Income</p>
                      <div class="chart-container-10 d-flex align-items-center justify-content-center">
                        <div id="">
                        <Chart
                options={props.opt.options}
                series={props.opt.series}
                type="radialBar"
                height={'300'}
            />
                        </div>
                      </div>
                    </div>
                    <div class="card-footer border-0 bg-transparent">
                      <div class="row align-items-center text-center">
                        <div class="col">
                        <h5 class="mb-0 dash-h3">$ {props.data.netbalance}</h5>
                        <small class="extra-small-font">Net Balance</small>
                        </div>
                        <div class="col border-end">
                          <h5 class="mb-0 dash-h3">$ {props.data.withdrawal}</h5>
                          <small class="extra-small-font">NFT Withdrawal</small>
                        </div>
                      </div>
                    </div>

                    <div class="progress-wrapper">
                      <div class="progress" style={{ height: '7px' }}>
                        <div class="progress-bar" role="progressbar" style={{ width: '100' }}></div>
                      </div>
                    </div>
                  </div>
                  
                // </div>
        // <div className="bg-color br-1 col-lg-3 text-white px-0 py-0 overflow-hidden">
        //     <p className="p-color text-center">Total Earning</p>
        //     <Chart
        //         options={props.opt.options}
        //         series={props.opt.series}
        //         type="radialBar"
        //         height={'300'}
        //     />
        //     <div className="row px-2 m-0">
        //         <div className=" col-6 d-flex flex-column text-center">
        //             <h2 className="h3 h-color">{props.data.netbalance}</h2>
        //             <p className="p-color">Net Balance</p>
        //         </div>
        //         <div className=" col-6 d-flex flex-column text-center">
        //             <h2 className="h3 h-color">{props.data.withdrawal}</h2>
        //             <p className="p-color">Total Withdrawal</p>
        //         </div>
        //     </div>
        //     <div className="progress_bar br-1" style={{width:'100%',}}></div>
        // </div>
     );
}
 
export default Total_Earning;