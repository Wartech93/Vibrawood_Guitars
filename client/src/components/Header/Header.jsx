
import ShowLogin from "./ShowLogin";
import { Link } from "react-router-dom";

function Header() {

  return (
    
    <header className="">
        
      <h1><Link to="/">Vibrawood Guitars</Link></h1>

      <nav>
        <ShowLogin/>
      </nav>

    </header>
  );
}


export default Header;