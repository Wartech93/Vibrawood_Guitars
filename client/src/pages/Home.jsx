import CategoryMenu from "../components/CategoryMenu";
import Cart from "../components/Cart";
import Map from "../components/Map/map";

const Home = () => {
  return (
    <div className="bg-indigo-950 h-full">
      <CategoryMenu />
      <div className="map w-screen">
        <Map />
      </div>
      <Cart />
    </div>
  );
};

export default Home;
