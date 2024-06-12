import { Link } from 'react-router-dom'
import ShowLogin from "./ShowLogin";


function Header() {

  return (
    
    <header className="h-1/2 bg-slate-600 flex">

<div className="flex flex-col justify-evenly h-full w-1/5">

<div className="h-1/3 flex justify-around items-center">
    {/* <div className="bg-white h-4/5 w-1/2 border rounded-full"></div> */}
    <img className="h-full" src="/images/logo.png"></img>
</div>


<ul className="flex flex-col items-center">
   
    <li className="mb-5"><Link to="/">HOME</Link></li>

    <li className="mb-5"><Link to="/shop">SHOP</Link></li>

    <li className="mb-5"><Link to="/about">ABOUT</Link></li>

    <li className="mb-5"><Link to="/media">MEDIA</Link></li>

</ul>

</div>

        <div className="flex flex-col">
            <ShowLogin/>
            <h1 className="text-4xl">Vibrawood Guitars</h1>
        </div>
  
    </header>
  );
}

export default Header;