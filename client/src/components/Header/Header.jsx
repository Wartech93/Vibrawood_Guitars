import Nav from "./Nav";
import ShowLogin from "./ShowLogin";


function Header() {

  return (
    
    <header className="h-1/2 bg-slate-600 flex">

        <Nav/>

        <div className="flex flex-col">
            <ShowLogin/>
            <h1 className="text-4xl">Vibrawood Guitars</h1>
        </div>
  
    </header>
  );
}

export default Header;