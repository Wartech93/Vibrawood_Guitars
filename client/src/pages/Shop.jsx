import ProductList from "../components/ProductList";
import Cart from "../components/Cart";

const Home = () => {
  return (
    <div className="container w-screen">
      <Cart />
      <ProductList />
    </div>
  );
};

export default Home;
