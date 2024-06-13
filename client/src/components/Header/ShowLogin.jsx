import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

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
        
        <ul className="flex py-3">

          <li className="mx-1">
            <Link to="/signup">Signup</Link>
          </li>

          <li className="mx-1">
            <Link to="/login">Login</Link>
          </li>

        </ul>
      );
    }
  }

  export default ShowLogin