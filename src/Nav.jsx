import React from "react";
import logo from './images/# content logo dark (1).png';

const Nav = (props) => {
    return(
        <div className='nav'>
            <div className="navContent contentMargin">
           <div className='logo'><img src={logo} alt='kabukab-logo'/></div>
           <ul>
               <li><a>{props.linkHome}</a></li>
               <li><a className="active">{props.linkAbout}</a></li>
               <li><a>{props.linkPartner}</a></li>
               <li><a>{props.linkToken}</a></li>
           </ul>
           </div>
        </div>
    );
}
export default Nav;