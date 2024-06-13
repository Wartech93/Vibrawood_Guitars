import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import React, { useState } from 'react';
import Login from '../Login_Modal/Modal'

function ShowLogin() {


  if (Auth.loggedIn()) {

    return (

      <ul className="flex-row">

        <li className="mx-1">
          <Link to="/orderHistory">Order History</Link>
        </li>

        <li className="mx-1">
          <a href="/" onClick={() => Auth.logout()}>Logout</a>
        </li>
      </ul>
    );
  
  } else {

    return (

      <ul className="">
        <li className="mx-1">
          <Link to="/signup">Signup</Link>
        </li>
        <li>        
           <Login />
        </li>

      </ul>
    );
  }
}

export default ShowLogin;