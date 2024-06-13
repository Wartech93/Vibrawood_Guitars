import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import React, { useState } from 'react';
import Login from '../Login_Modal/Modal'
import {Button} from "flowbite-react";

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

      <ul className="flex flex-row gap-4 mt-4">
        <li className="mx-1">
          <Link to="/signup">
          <Button className='w-14 text-white border-2 border-white-300'>
          Signup
          </Button>
          </Link>
        </li>
        <li>        
           <Login />
        </li>

      </ul>
    );
  }
}

export default ShowLogin;