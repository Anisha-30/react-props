import logo from "./assets/istock.jpg"
import './Body.css';
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "./utils/useOnlineStatus";

function Header(){
    const [btnName, setBtnName] = useState("Login")
    const onlineStatus = ()=> useOnlineStatus();
    return(
        <div className="grid grid-flow-col">
            <div className="logo">
                <img  style={{height:"100px" , width:"100px"}}
                src={logo} alt="logo" />
            </div>
             <div className="">
                <ul className="grid grid-cols-7 place-items-center mt-6 ">
                    <li>Online Status {onlineStatus? "✅" : "🔴"}</li>
                    <li> <Link to="/">Home</Link></li>
                    <li><Link to="/about">About us</Link></li>
                    <li>Contact us</li>
                    <li>Blogs</li>
                    <li>Cart</li>
                    <li>
                        <button onClick={()=> {
                            btnName == "Login"
                            ?setBtnName("Log-out") : setBtnName("Login")}}>{btnName}</button>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default Header;