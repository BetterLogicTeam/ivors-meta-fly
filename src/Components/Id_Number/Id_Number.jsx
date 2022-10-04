import React from "react";
import './Id_Number.css';
import Chart from 'react-apexcharts'
const Id_Number = (props) => {
    return (
        <div className="pe-lg-3  col-lg-6 p-0">
            <div className=" bg-color br-1 overflow-hidden">
                <div className="px-3 pt-3">
                    <p className="p-color">Id Number</p>
                    <div className="d-flex flex-row align-items-center">
                        {
                            props.data.package > 0 ?
                                <>
                                    <img src="assets/images/id_green.png" />
                                </> :
                                <>
                                    <img src="assets/images/id_red.png" />

                                </>
                        }
                        <h1 className="h3 h-color p-0 ms-3 mb-0">{props.data.id}</h1>
                    </div>
                </div>
                <Chart
                    options={props.opt.options}
                    series={props.opt.series}
                    type='bar'
                    height='100'
                    width="100%"
                />
            <div className="progress_bar" style={{width:'100%'}}></div>
            </div>
        </div>
    );
}

export default Id_Number;