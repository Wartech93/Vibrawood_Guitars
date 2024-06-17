import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import Login from '../Login_Modal/Modal';
import Signup from '../SignUpModal/Signup';
import { Button } from 'flowbite-react';
import { FaUser } from "react-icons/fa";

function ShowLogin() {


  if (Auth.loggedIn()) {

    return (

      <div className="flex justify-center items-start gap-5 ">

        <div className="mx-1 mt-4">
          <Button href="/" onClick={() => Auth.logout()} className='w-13 bg-amber-50 hover:bg-transparent border-2 border-white-500 text-yellow-500'>
            Logout
          </Button>
        </div>

        <div className="mx-1 mt-6 text-white">
          <Link to="/orderHistory">
            <FaUser size={24} />
          </Link>
        </div>


      </div>
    );

  } else {

    return (

      <ul className="flex flex-row gap-4 mt-4">
        <li className="mx-1">
          <Login />
        </li>
        <li>
          <Signup />
        </li>
      </ul>
    );
  }
}

export default ShowLogin;