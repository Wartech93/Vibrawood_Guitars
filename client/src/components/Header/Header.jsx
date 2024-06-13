import Nav from "./Nav";
import ShowLogin from "./ShowLogin";
import bgImg from "../../../src/assets/guitar-play.jpg";


function Header() {

  return (
    
    <header className="h-1/2 bg-zinc-400 flex">

        <Nav/>

{/* backgroud image div */}
        <div className="w-4/5 bg-zinc-500">
            <div className="h-full flex flex-col justify-start">
                
                <div className="flex h-1/3 justify-end mr-20">
                    <ShowLogin/>
                </div>

                <div className="flex h-1/2 justify-end mr-40">
                    <div className="flex flex-col">

                        <h1 className="text-6xl mb-2">Vibrawood</h1>
                        <p className="mb-5">One of a kind guitairs</p>
                        <button className="bg-white h-1/5 rounded">SHOP</button>

                    </div>
                </div>

            </div>
        </div>
  
    </header>
  );
}

export default Header;