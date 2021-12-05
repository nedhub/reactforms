import React from 'react';
import './bottomnavbar.css';
import { FaRegUser } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaGitter } from "react-icons/fa";
import { FaRegSun} from "react-icons/fa";
import { FaRegStopCircle } from "react-icons/fa";
function BottomNavBar() {
    return (
        <div className="bottomnavbar">

            <div className="phonebottom">
            <FaPhoneAlt size={40}/>
            <div className="phonenumber"> 
            <h1 className="actual">12</h1>

            </div>
            </div>
            <div className="userbottom">
            <FaRegUser size={40}/>
            </div>
            
            <div className="gitbottom">
            <FaGitter size={40} color={"green"}/>
            </div>
            <div className ="setbottom">
            <FaRegSun size={40}/>
            </div>
            
            <div className="otherbottom">
            <FaRegStopCircle size={40} />
            </div>
            


            
            
        </div>
    )
}

export default BottomNavBar
