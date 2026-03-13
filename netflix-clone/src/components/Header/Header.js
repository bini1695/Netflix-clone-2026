import React from 'react'
import "./Header.css"
function Header() {
  return (
    <div className='Header_outer_container'>
        <div className='Header_container'>
           <div className='header_left'>
             <ul>
               {/* <li><img src="path/to/logo.png" alt="Logo" /></li> */}
                <li>Netflix</li>
                <li>Home</li>
                <li>Movies</li>
                <li>TV Shows</li>
                <li>My List</li>
                <li>Browse by Languages</li>
             </ul>
           </div>
            <div className='header_right'>
                <ul>
                  <li>Search</li>
                  <li>Account</li>
                  <li>Notifications</li>
                  <li>ArrowDropDownIcon</li>
                </ul> 
            </div>
        </div>
    </div>
  )
}

export default Header
