import React from 'react'
import { Link } from "react-router-dom";

function Sidebar() {
    return (
        <div class="sidebar">
            <div class="sidebar-menu">
                <center class="profile">
                </center>
                <li class="item">
                    <Link to="/" class="menu-btn">
                        <i class="fas fa-desktop"></i><span>Dashboard</span>
                    </Link>
                </li>
                <li class="item" id="profile">
                    <a href="#profile" class="menu-btn">
                    <i class="fas fa-user-cog"></i><span>Build 1 <i class="fas fa-chevron-down drop-down"></i></span>
                    </a>
                    <div class="sub-menu">
                        <Link to="/plus01"><i class="fas fa-laptop"></i><span>Plus00</span></Link>
                        <Link to="#"><i class="fas fa-laptop"></i><span>Plus01</span></Link>
                        <Link to="#"><i class="fas fa-laptop"></i><span>Plus02</span></Link>
                        <Link to="#"><i class="fas fa-laptop"></i><span>Plus03</span></Link>
                        <Link to="#"><i class="fas fa-laptop"></i><span>Plus04</span></Link>
                        <Link to="#"><i class="fas fa-laptop"></i><span>Plus05</span></Link>
                    </div>
                </li>
                <li class="item" id="messages">
                    <Link to="#messages" class="menu-btn">
                    <i class="fas fa-user-cog"></i><span>Build 2 <i class="fas fa-chevron-down drop-down"></i></span>
                    </Link>
                    <div class="sub-menu">
                        <Link to="#"><i class="fas fa-envelope"></i><span>New</span></Link>
                        <Link to="#"><i class="fas fa-envelope-square"></i><span>Sent</span></Link>
                        <Link to="#"><i class="fas fa-exclamation-circle"></i><span>Spam</span></Link>
                    </div>
                </li>
                <li class="item" id="settings">
                    <Link to="#settings" class="menu-btn">
                    <i class="fas fa-user-cog"></i><span>Build 3 <i class="fas fa-chevron-down drop-down"></i></span>
                    </Link>
                    <div class="sub-menu">
                        <Link to="#"><i class="fas fa-lock"></i><span>Password</span></Link>
                        <Link to="#"><i class="fas fa-language"></i><span>Language</span></Link>
                    </div>
                </li>
                
            </div>
        </div>
    )
}

export default Sidebar