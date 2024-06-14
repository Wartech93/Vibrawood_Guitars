import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import ShowLogin from "./ShowLogin";


function Header() {
    const linkClass = ({ isActive }) => isActive ? 'mb-5 text-indigo-950 pl-4 border-l-4 border-yellow-500' : 'mb-5 text-indigo-950 pl-4 hover:border-l-4 border-yellow-500'

    return (

        <header className="h-1/2 bg-amber-50 flex">

            <div className="flex flex-col justify-evenly content-center items-center h-full w-1/5">

                <div className="h-1/3 flex justify-around items-center">
                    <img className="h-full" src="/images/logo.png"></img>
                </div>


                <ul className="flex flex-col items-start secondaryFont w-24 gap-5">

                    <li><NavLink to="/" className={linkClass}>HOME</NavLink></li>

                    <li><NavLink to="/shop" className={linkClass}>SHOP</NavLink></li>

                    <li><NavLink to="/about" className={linkClass}>ABOUT</NavLink></li>

                    <li><NavLink to="/media" className={linkClass}>MEDIA</NavLink></li>

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
                        <ShowLogin />
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