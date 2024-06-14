import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import { NavLink } from 'react-router-dom'
import React, { useState } from 'react';
import Login from '../Login_Modal/Modal'
import { Button } from "flowbite-react";

function ShowLogin() {
  const linkClass =  'bg-indigo-950 text-white hover:bg-gray-900 hover:text-white px-3 py-2 text-white rounded-md'

  if (Auth.loggedIn()) {

    return (

      <ul className="flex flex-row gap-4 mt-4">

        <li className='mx-1'>
          <NavLink
            to="/orderHistory"
            className={linkClass}>
            Order History
          </NavLink>
        </li>

        <li className='mx-1'>
          <NavLink
            to='/'
            onClick={() => Auth.logout()}
            className={linkClass}>
            Logout
          </NavLink>
        </li>
      </ul>
    );

  } else {

    return (

      <ul className="flex flex-row gap-4 mt-4">
        <li className="mx-1">
          <Link to="/signup">
            <NavLink className={linkClass}>
              Signup
            </NavLink>
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