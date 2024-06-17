import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import Cart from '../components/Cart';
import { useStoreContext } from '../utils/GlobalState';
import {
  REMOVE_FROM_CART,
  UPDATE_CART_QUANTITY,
  ADD_TO_CART,
  UPDATE_PRODUCTS,
} from '../utils/actions';
import { QUERY_PRODUCTS } from '../utils/queries';
import { idbPromise } from '../utils/helpers';
import spinner from '../assets/spinner.gif';

function Detail() {
  const [state, dispatch] = useStoreContext();
  const { id } = useParams();

  const [currentProduct, setCurrentProduct] = useState({});

  const { loading, data } = useQuery(QUERY_PRODUCTS);

  const { products, cart } = state;

  useEffect(() => {
    // already in global store
    if (products.length) {
      const product = products.find((product) => product._id === id);

      const item = {
        image: product.image,
        name: product.name,
        description: product.description,
        _id: product._id,
        price: product.price,
        quantity: product.quantity,
      };

      setCurrentProduct(item);
    }
    // retrieved from server
    else if (data) {
      dispatch({
        type: UPDATE_PRODUCTS,
        products: data.products,
      });

      data.products.forEach((product) => {
        idbPromise('products', 'put', product);
      });
    }
    // get cache from idb
    else if (!loading) {
      idbPromise('products', 'get').then((indexedProducts) => {
        dispatch({
          type: UPDATE_PRODUCTS,
          products: indexedProducts,
        });
      });
    }
  }, [products, data, loading, dispatch, id]);

  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === id);
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
      idbPromise('cart', 'put', {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        product: { ...currentProduct, purchaseQuantity: 1 },
      });
      idbPromise('cart', 'put', { ...currentProduct, purchaseQuantity: 1 });
    }
  };

  const removeFromCart = () => {
    dispatch({
      type: REMOVE_FROM_CART,
      _id: currentProduct._id,
    });

    idbPromise('cart', 'delete', { ...currentProduct });
  };

  return (
    <>
      {currentProduct && cart ? (
        <div className="container secondaryFontlite mx-auto p-4">
          <Link to="/shop" className="block mb-4 text-blue-500 hover:underline">← Back to Products</Link>

          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:gid-cols-2 gap-6">
            <div className="left-container bg-white shadow-lg rounded-lg p-6">
              <img
                src={`/images/${currentProduct.image}`}
                alt={currentProduct.name}
                className="w-full rounded-lg"
              />
            </div>

            <div className="right-container bg-white shadow-lg rounded-lg p-6">
              <h2 className="text-3xl font-semibold mb-4">{currentProduct.name}</h2>
              <p className="text-2xl font-medium text-gray-700 mb-4">${currentProduct.price}</p>
              <button 
                onClick={addToCart}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition mb-4"
              >
                Add to Cart
              </button>
              <p className="text-gray-600">{currentProduct.description}</p>
            </div>
          </div>
        </div>
      ) : null}
      {loading ? <img src={spinner} alt="loading" className="mx-auto mt-4" /> : null}
    </>
  );
}

export default Detail;
