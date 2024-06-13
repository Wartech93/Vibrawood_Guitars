import CategoryMenu from "../components/CategoryMenu";
import Cart from "../components/Cart";
import Map from "../components/Map/map";

const Home = () => {
  return (
    <div className="bg-indigo-950 h-full">
      <CategoryMenu />
      <Map />  
      <Cart />
    </div>
  );
};

export default Home;
