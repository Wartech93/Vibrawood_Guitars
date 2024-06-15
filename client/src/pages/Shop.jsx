import ProductList from "../components/ProductList";
import Cart from "../components/Cart";
import CategoryDropdown from "../components/CategoryDropdown";

const Home = () => {
  return (
    <div className="container w-screen">
      <Cart />
      <CategoryDropdown />
      <ProductList />
    </div>
  );
};

export default Home;
