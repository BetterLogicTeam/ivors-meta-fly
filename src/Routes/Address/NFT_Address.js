import {PagePath} from "../../Components";
import './Address.css';

const Coin_Address = () => {
    return ( 
        <div className="row justify-content-center border_right" style={{height:"90vh"}} >
            <div className="col-md-11 py-3">
                <PagePath data={{page_name:"NFT Address",page_path:"Address / NFT Address"}} />   
                <h5 className=" mt-5 border_right right-ip-1">NFT Address : { (<a href={`https://bscscan.com/address/0xa8B29c8dB66E7641213DDE45092c32E7D3f58c58`} className=" border_right" target="_blank">{"0xa8B29c8dB66E7641213DDE45092c32E7D3f58c58" || "Connect Wallet" }</a>)}  </h5>

            </div>
        </div>
     );
}
 
export default Coin_Address;