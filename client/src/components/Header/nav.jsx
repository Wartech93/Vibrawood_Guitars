
function Nav () {

    return (

        <div className="flex flex-col justify-evenly h-full w-1/5">

            <div className="h-1/3 flex justify-around items-center">
                {/* <div className="bg-white h-4/5 w-1/2 border rounded-full"></div> */}
                <img className="h-full" src="/images/logo.png"></img>
            </div>
    
        
            <ul className="flex flex-col items-center">
                
                <li className="mb-5">HOME</li>

                <li className="mb-5">SHOP</li>

                <li className="mb-5">ABOUT</li>

                <li className="mb-5">MEDIA</li>

            </ul>

        </div>
    )
}

export default Nav;