import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import ShowLogin from "./ShowLogin";


function Header() {
    const linkClass = ({ isActive }) => isActive ? 'mb-5 text-indigo-950 pl-4 border-l-4 border-yellow-500' : 'mb-5 text-indigo-950 pl-4 hover:border-l-4 border-yellow-500'

    return (

        <header className="h-1/2 bg-amber-50 flex lg:flex-row md:flex-col md:flex-wrap">

            <div className="flex lg:flex-col md:flex-row sm:flex-row lg:justify-evenly md:justify-between content-center items-center lg:h-full md:h-1/4 w-1/5">

                <div className="lg:h-1/3 flex justify-around items-center">
                    <img className="h-full" src="/images/logo.png"></img>
                </div>


                <ul className="flex lg:flex-col items-start secondaryFont w-24 gap-5 md:flex-row">

                    <li><NavLink to="/" className={linkClass}>HOME</NavLink></li>

                    <li><NavLink to="/shop" className={linkClass}>SHOP</NavLink></li>

                    <li><NavLink to="/about" className={linkClass}>ABOUT</NavLink></li>

                    <li><NavLink to="/media" className={linkClass}>MEDIA</NavLink></li>

                </ul>

            </div>

            {/* backgroud image div */}
            <div
                className="lg:w-4/5 lg:h-full md:h-3/4 md:w-full"
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

                    <div className="flex h-1/2 lg:justify-end lg:mr-40 md:justify-center">
                        <div className="flex flex-col">

                            <h1 className="lg:text-6xl md:text-4xl mb-2 text-amber-50 mainFont">Vibrawood</h1>
                            <p className="mb-5 text-amber-50 md:secondaryFontCustom md:text-lg pl-8 lg:secondaryFont">ONE OF A KIND GUITARS</p>
                            <Link to="/shop" className="text-center bg-amber-50 secondaryFont h-1/5 rounded hover:bg-transparent border-2 border-white-500 text-yellow-500">
                                    SHOP
                            </Link>

                        </div>
                    </div>

                </div>
            </div>

        </header>
    );
}

export default Header;