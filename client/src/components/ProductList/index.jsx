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
  console.log(currentCategory)

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

    if(currentCategory === 'View All'){
      return state.products;
    }

    return state.products.filter(
      (product) => product.cat === currentCategory
    );
  }
  

  return (
    <div className="w-screen mx-auto px-24 pb-10 bg-yellow-950">
      {state.products.length ? (
        <div className="h-full grid sm:grid-cols-2 lg:grid-cols-4 gap-y-4 gap-x-4 lg:gap-x-6">
          {filterProducts().map((product) => (
            <a href={`/products/${product._id}`} key={product._id} className="w-full">
              <div
                _id={product._id}
                className="flex flex-col justify-between w-full h-full max-w-md bg-amber-50 rounded-lg shadow dark:border-gray-700">
                <img
                  className="p-4 w-full h-70 object-cover rounded-t-lg"
                  src={`/images/${product.image}`}
                  alt={product.name}
                />
                <div className="px-5 pb-5 flex-grow text-center flex flex-col justify-between">
                  <h5 className="text-xl font-semibold tracking-tight text-indigo-950 mt-2.5">
                    {product.name}
                  </h5>
                  <div className="flex items-center justify-center mt-2.5 mb-2.5">
                    <span className="text-3xl font-bold text-indigo-950">${product.price}</span>
                  </div>
                </div>
              </div>
            </a>
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
