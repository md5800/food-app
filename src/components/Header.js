import { useState, useContext } from "react";
import logo from "../img/logo.png";
import {Link} from "react-router-dom";
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header =() => {
    const internetStatus = useOnlineStatus();
    const [loginBtn, setLoginBtn] = useState("login")
    const data = useContext(UserContext);
    console.log(data);
    
    //subscribing to the store using a selector
    const cartItems = useSelector((store)=>store.cart.items);
    console.log(cartItems);
    return (
        <div className="headersec shadow-md">
            <div className="container">
                <div className="row justify-content-between align-items-center">
                    <div className="col-md-2">
                        <div className="logo">
                            <img src={logo} alt="logo" />
                        </div>
                    </div>
                    <div className="col-md-10">
                        <div className="navitem">
                            <ul>
                                <li><Link href="/">Home</Link></li>
                                <li><Link to="/about">About</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
                                <li><Link to="/instamart">Instamart</Link></li>
                                <li className="font-bold">{data.loggedInUser}</li>
                                <li>Internet:{ internetStatus ? "true" : "false"}</li>
                                <li><Link to="/Cart">Cart <sup className="font-bold text-xl bg-slate-600 px-2 py-1 text-center text-white rounded-md">{cartItems.length}</sup></Link></li>
                                <li>
                                    <button className="loginbtn" 
                                    onClick={()=>{
                                        loginBtn === "login" ? setLoginBtn("logout") : setLoginBtn("login");
                                     }}
                                    >{loginBtn}</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;