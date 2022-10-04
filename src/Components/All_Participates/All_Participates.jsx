import React from "react";
import './All_Participates.css'
const All_Participates = (props) => {
    return (


        <div class="card radius-10 overflow-hidden br-1 ">
            <div class="card-body ">
                <div className=" p-3 row">
                    <p className="p-color">All Participates</p>
                    <h1 className="h3 h-color">{props.data.participates_count}</h1>
                    <div className="d-flex flex-row justify-content-between">
                        <p className="p-color">Join Last 24 Hours </p>
                        <p className="p-color">{props.data.active_participates_count}</p>
                    </div>
                </div>
            </div>
            <div className="progress_bar" style={{width:'100%'}}></div>
        </div>
    );
}

export default All_Participates;