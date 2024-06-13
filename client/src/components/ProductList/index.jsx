import { useEffect } from 'react';
import ProductItem from '../ProductItem';
import { useStoreContext } from '../../utils/GlobalState';
import { UPDATE_PRODUCTS } from '../../utils/actions';
import { useQuery } from '@apollo/client';
import { QUERY_PRODUCTS } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import spinner from '../../assets/spinner.gif';

function ProductList() {
  const [state, dispatch] = useStoreContext();

  const { currentCategory } = state;

  const { loading, data } = useQuery(QUERY_PRODUCTS);

  useEffect(() => {
    if (data) {
      dispatch({
        type: UPDATE_PRODUCTS,
        products: data.products,
      });
      data.products.forEach((product) => {
        idbPromise('products', 'put', product);
      });
    } else if (!loading) {
      idbPromise('products', 'get').then((products) => {
        dispatch({
          type: UPDATE_PRODUCTS,
          products: products,
        });
      });
    }
  }, [data, loading, dispatch]);

  function filterProducts() {
    if (!currentCategory) {
      return state.products;
    }

    return state.products.filter(
      (product) => product.category._id === currentCategory
    );
  }

  return (
    <div className="my-5 w-screen mx-auto px-24">
      {state.products.length ? (
          <div className="place-items-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-4 gap-x-4 sm:gap-x-4 lg:gap-x-6">
            {filterProducts().map((product) => (
              <div 
                key={product._id}
                className="w-full max-w-md bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <img 
                    className="p-8 rounded-t-lg" 
                    src={`/images/${product.image}`}
                    alt={product.name} 
                  />
                </a>
                <div className="px-5 pb-5 text-center">
                  <a href="#">
                    <h5 
                      className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                      {product.name}
                    </h5>
                  </a>
                  <div className="flex items-center justify-between mt-2.5 mb-5">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">${product.price}</span>
                    <a 
                      href="#" 
                      className="text-white bg-indigo-950 hover:bg-white-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                      Add to cart
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
      ) : (
        <h3>You haven't added any products yet!</h3>
      )}
      {loading ? <img src={spinner} alt="loading" /> : null}
    </div>
  );
}

export default ProductList;
