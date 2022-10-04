import React, { useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { AiOutlineCopy } from 'react-icons/ai'

export default function Affiliate(props) {
    const [copyTest, setcopyTest] = useState(false)
    return (
        <>
            <div className="pe-lg-3  bg-color overflow-hidden p-0 mt-3 br-1" >
                <div className=" p-3 row" >
                    <p className="p-color">{props.data.text}</p>

                    <div className='main_div_Affiliate'>

                        <input class=" text-white bg-color inputAffiliate wdg-input-box" type="text" value={props.data.earned_usd} />

                        <CopyToClipboard text={props.data.earned_usd}
                            onCopy={() => setcopyTest(true)}  >
                            <div className='main_class_copy'>
                                <AiOutlineCopy className='iconcopy'></AiOutlineCopy>
                                {/* <button className='default-btn mt-3' style={{ width: '7rem' }}>Copy</button> */}
                                {copyTest ? <span style={{ color: 'red' }}>Copied.</span> : null}
                            </div>
                        </CopyToClipboard>
                    </div>
                    

                </div>
                <div className="progress_bar" style={{width:'100%'}}></div>
            </div>
        </>

    )
}
