import React from 'react'
import { NavLink } from "react-router-dom";
export default function Header(props) {
    //console.log(props);
    let tpl='';
    if(props.auth)
        {
            
             tpl = (  <ul className="navbar-nav ml-auto"><li className="nav-item">
               
            <NavLink
                to="logout"
                exact
                activeClassName="active" className="nav-link">Logout</NavLink>


            </li></ul>);
        }else{   
                tpl = ( <ul className="navbar-nav ml-auto"> 
              
                 <li className="nav-item">
                
                 <NavLink
                     to="login"
                     exact
                     activeClassName="active" className="nav-link">Login</NavLink>
 
 
                 </li>
                 <li className="nav-item">
                     <NavLink
                         to="register"
                         exact
                         activeClassName="active" className="nav-link">Register</NavLink>
                 </li> </ul>);
        }


    

  return (
    <nav className="navbar navbar-expand-md navbar-light navbar-laravel">
    <div className="container">
        <a className="navbar-brand" href="/">
            Laravel Chat App
        </a>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            
            {tpl}
             
        </div>
    </div>
</nav>
  )
}
