import { BiHomeCircle } from "react-icons/bi";
import './PagePath.css';
import {FaAngleRight} from "react-icons/fa";
const Page_Path = (props) => {
    return ( 
        <div className="Page_Path h-color d-none d-md-flex flex-row align-items-center " style={{color:'white'}}>
            <h4 className="mb-0 border_right p-colo " style={{color:'white',borderRight:"2px solid white"}}>{props.data.page_name}</h4>&nbsp;
           <BiHomeCircle className="fs-w " />
            <FaAngleRight className="fs-w "/>
            <h6 className="mb-0 fs-w ps-1" style={{color:'white'}}>{props.data.page_path}</h6>
        </div>
     );
}
 
export default Page_Path;