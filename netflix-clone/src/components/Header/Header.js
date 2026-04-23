import React from 'react'
import "./Header.css"
import NetflixLogo from "../../assets/logo.png";
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SearchIcon from '@mui/icons-material/Search';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
function Header() {
  return (
    <div className='Header_outer_container'>
        <div className='Header_container'>
           <div className='header_left'>
             <ul>
                
                 <li><img src={NetflixLogo} alt="Logo" width="80px"        className='logo'/></li>
                    <li>Home</li>
                    <li>Movies</li>
                    <li>TV Shows</li>
                    <li>My List</li>
                    <li>Browse by Languages</li>
             </ul>
           </div>
            <div className='header_right'>
                <ul>
                  <li><SearchIcon /></li>
                  <li><AccountBoxIcon /></li>
                  <li><NotificationsNoneIcon /></li>
                  <li><ArrowDropDownIcon /></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Header
