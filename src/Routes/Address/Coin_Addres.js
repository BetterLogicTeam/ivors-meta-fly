import {PagePath} from "../../Components";
import './Address.css';

const Coin_Address = () => {
    return ( 
        <div className="row justify-content-center border_right" style={{height:"90vh"}} >
            <div className="col-md-11 py-3">
                <PagePath data={{page_name:"In Game Reward Token Address",page_path:"Address / In Game Reward Token Address"}} />   
                <h5 className=" mt-5 border_right right-ip-1">In Game Reward Token Address : { (<a href={`https://bscscan.com/address/0x3a49e91e69e18d886f33155c4de23dd3819626e9`} className=" border_right" target="_blank">{"0x3a49e91e69e18d886f33155c4de23dd3819626e9" || "Connect Wallet" }</a>)}  </h5>

            </div>
        </div>
     );
}
 
export default Coin_Address;