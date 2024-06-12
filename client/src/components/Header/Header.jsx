import Nav from "./Nav";
import ShowLogin from "./ShowLogin";


function Header() {

  return (
    
    <header className="h-1/2 bg-slate-600 flex">

        <Nav/>

{/* backgroud image div */}
        <div className="w-4/5 bg-pink-900">
            <div className="flex flex-col">
                
                <div>
                    <ShowLogin/>
                </div>

                <div>
                    <h1 className="text-4xl">Vibrawood Guitars</h1>
                </div>

            </div>
        </div>
  
    </header>
  );
}

export default Header;