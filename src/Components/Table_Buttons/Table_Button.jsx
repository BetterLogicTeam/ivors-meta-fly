import { useState } from 'react';
import './Table_Button.css'
const Table_Buttons = ({setcurrentPage,currentPage,indexOfFirstPage,indexOfLastPost,totalData,listPerpage}) => {
    // let last_value = Number(props.data.last_value);
    // let first_value = Number(props.data.first_value);
    // let [value,setvalue] = new useState(Number(props.data.current_value));
  
  
   
    return ( 
        <>
        
        <div class="pagination-box">
                    <ul className='next-page-btn-1'>
                        <li class="page-start page-pp "><a className='click-btn-1' onClick={()=>{
                setcurrentPage(1)
            }}>First</a></li>
                        <li class="page-last page-pp "><a className='click-btn-1'  onClick={()=>{
                setcurrentPage(()=>{
                    if(currentPage-1 > 1)
                    {
                        currentPage = currentPage - 1;
                        return currentPage;
                    }
                    return 1;
                });
            }}>Prev</a></li>
                        <li class="page-number on page-pp " data-page="1"><a className='click-btn-1' >{currentPage}</a></li>
                        {/* <li class="page-number " data-page="1"><a >2</a></li> */}
                        <li class="page-next page-pp "><a className='click-btn-1'  onClick={()=>{
                setcurrentPage(()=>{
                    if(currentPage+1 < Math.ceil(totalData/listPerpage))
                    {
                        currentPage = currentPage +1;
                        return currentPage;
                    }
                    return Math.ceil(totalData/listPerpage);
                });
            }}>Next</a></li>
                        <li class="page-end page-pp "><a className='click-btn-1' onClick={()=>{
                setcurrentPage(Math.ceil(totalData/listPerpage));
            }} >Last</a></li>
                    </ul>
                </div>
        {/* <div className="Table_Buttons d-flex flex-row align-items-center">
            <button className="tablebtn bg-white px-5 py-2" 
            onClick={()=>{
                setcurrentPage(1)
            }}
            >First</button>
            <button className="tablebtn bg-white px-5 py-2"
          
            onClick={()=>{
                setcurrentPage(()=>{
                    if(currentPage-1 > 1)
                    {
                        currentPage = currentPage - 1;
                        return currentPage;
                    }
                    return 1;
                });
            }}
            >Prev</button>
            <p className='px-4 py-2 h-color m-0 fs-5 bg-pp'>{currentPage}</p>
            <button className="tablebtn bg-white px-5 py-2"
            
            onClick={()=>{
                setcurrentPage(()=>{
                    if(currentPage+1 < Math.ceil(totalData/listPerpage))
                    {
                        currentPage = currentPage +1;
                        return currentPage;
                    }
                    return Math.ceil(totalData/listPerpage);
                });
            }}
            >Next</button>
            <button className="tablebtn bg-white px-5 py-2"
            onClick={()=>{
                setcurrentPage(Math.ceil(totalData/listPerpage));
            }}
            >Last</button>
        </div> */}
        </>
     );
}
 
export default Table_Buttons;