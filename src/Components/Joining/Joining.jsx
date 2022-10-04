import React from "react";
import './Joining.css';
import Chart from 'react-apexcharts'
const Joining = (props) => {
    return (


        <div class="card radius-10 overflow-hidden br-1 ">
            <div class="card-body ">
                <div className="p-3">
                    <p className="p-color">My Investment</p>
                    <h1 className="h3 h-color">{props.data.joined}</h1>
                </div>
            </div>
            <div className="progress_bar" style={{width:'100%'}}></div>
            
        </div>
    );
}

export default Joining;