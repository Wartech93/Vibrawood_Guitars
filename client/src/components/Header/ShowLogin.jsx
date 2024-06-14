import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import Login from '../Login_Modal/Modal';
import Signup from '../SignUpModal/Signup';
import { Button } from 'flowbite-react';
function ShowLogin() {


  if (Auth.loggedIn()) {

    return (

      <ul className="flex-row gap-4 mt-4">

        <li className="mx-1">
          
          <Link to="/orderHistory">
          <Button className='w-14 text-white border-2 border-white-300'>Order History</Button></Link>
        </li>

        <li className="mx-1 mt-4">
          <Button className='w-14 text-white border-2 border-white-300'>
          <a href="/" onClick={() => Auth.logout()}>Logout</a>
          </Button>
        </li>
      </ul>
    );
  
  } else {

    return (

      <ul className="flex flex-row gap-4 mt-4">
        <li className="mx-1">
          <Signup />          
        </li>
        <li>        
           <Login />
        </li>
      </ul>
    );
  }
}

export default ShowLogin;