import { Link } from 'react-router-dom'
import ShowLogin from "./ShowLogin";


function Header() {

  return (
    
    <header className="h-1/2 bg-amber-50 flex">

<div className="flex flex-col justify-evenly h-full w-1/5">

<div className="h-1/3 flex justify-around items-center">
    <img className="h-full" src="/images/logo.png"></img>
</div>


<ul className="flex flex-col items-center pr-4 secondaryFont">
   
    <li className="mb-5 text-indigo-950 pl-4 hover:border-l-4 border-yellow-500 active:border-l-4 border-yellow-500"><Link to="/">HOME</Link></li>

    <li className="mb-5 text-indigo-950 pl-4 hover:border-l-4 border-yellow-500"><Link to="/shop">SHOP</Link></li>

    <li className="mb-5 text-indigo-950 pl-4 hover:border-l-4 border-yellow-500"><Link to="/about">ABOUT</Link></li>

    <li className="mb-5 text-indigo-950 pl-4 hover:border-l-4 border-yellow-500"><Link to="/media">MEDIA</Link></li>

</ul>

</div>

{/* backgroud image div */}
<div
  className="w-4/5"
  style={{
    backgroundImage: `url('/images/guitar-play.jpg')`,
    backgroundSize: 'cover', // Adjust the background image size
    backgroundPosition: 'center', // Center the background image
    backgroundRepeat: 'no-repeat'
  }}>

            <div className="h-full flex flex-col justify-start">
                
                <div className="flex h-1/3 justify-end mr-20">
                    <ShowLogin/>
                </div>

                  <div className="flex h-1/2 justify-end mr-40">
                      <div className="flex flex-col">

                          <h1 className="text-6xl mb-2 text-amber-50 mainFont">Vibrawood</h1>
                          <p className="mb-5 text-amber-50 pl-8 secondaryFont">ONE OF A KIND GUITARS</p>
                          <Link to="/shop" className="text-center pt-2 bg-amber-50 secondaryFont text-indigo-950 h-1/5 rounded hover:bg-transparent border-2 border-white-500 text-yellow-500">
                              <button >
                                  SHOP
                              </button>
                          </Link>

                    </div>
                </div>

            </div>
        </div>
  
    </header>
  );
}

export default Header;