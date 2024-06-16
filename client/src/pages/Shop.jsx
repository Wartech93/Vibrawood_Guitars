import ProductList from "../components/ProductList";
import Cart from "../components/Cart";
import CategoryDropdown from "../components/CategoryDropdown";

const Home = () => {
  return (
    <div>
      <Cart />
      <CategoryDropdown />
      <ProductList />
    </div>
  );
};

export default Home;
