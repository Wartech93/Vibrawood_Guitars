import CategoryMenu from "../components/CategoryMenu";
import Cart from "../components/Cart";
import Map from "../components/Map/map";

const Home = () => {
  return (
    <div className="container">
      <CategoryMenu />
      <div className="map w-screen">
        <Map />
      </div>
      <Cart />
    </div>
  );
};

export default Home;
