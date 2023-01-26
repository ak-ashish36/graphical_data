import React from 'react'

function Navbar() {
    return (
        <div class="header">
            <div class="header-menu">
                <div class="title">Ashish<span>Gupta</span></div>
                {/* <div class="sidebar-btn">
                    <i class="fas fa-bars"></i>
                </div> */}

                <ul>
                    <li><a href="#"><i class="fas fa-info-circle"></i></a></li>
                    {/* <li><a href="#"><i class="fas fa-search"></i></a></li>
                    <li><a href="#"><i class="fas fa-bell"></i></a></li> */}
                </ul>
            </div>
        </div>
    )
}

export default Navbar