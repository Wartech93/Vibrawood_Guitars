import { useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { useLazyQuery } from '@apollo/client';
import { QUERY_CHECKOUT } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import CartItem from '../CartItem';
import Auth from '../../utils/auth';
import { useStoreContext } from '../../utils/GlobalState';
import { TOGGLE_CART, ADD_MULTIPLE_TO_CART } from '../../utils/actions';
import { Button } from 'flowbite-react';
import { FaShoppingCart } from 'react-icons/fa';

const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

const Cart = () => {
  const [state, dispatch] = useStoreContext();
  const [getCheckout, { data, loading, error }] = useLazyQuery(QUERY_CHECKOUT);

  useEffect(() => {
    if (data) {
      console.log('Checkout session data:', data);
      stripePromise.then((res) => {
        res.redirectToCheckout({ sessionId: data.checkout.session })
          .then((result) => {
            if (result.error) {
              console.error('Stripe redirect error:', result.error.message);
            }
          });
      });
    }
  }, [data]);

  useEffect(() => {
    async function getCart() {
      const cart = await idbPromise('cart', 'get');
      dispatch({ type: ADD_MULTIPLE_TO_CART, products: [...cart] });
    }

    if (!state.cart.length) {
      getCart();
    }
  }, [state.cart.length, dispatch]);

  function toggleCart() {
    dispatch({ type: TOGGLE_CART });
  }

  function calculateTotal() {
    let sum = 0;
    state.cart.forEach((item) => {
      sum += item.price * item.purchaseQuantity;
    });
    return sum.toFixed(2);
  }

  function submitCheckout() {
    getCheckout({
      variables: { 
        products: [...state.cart],
      },
    });
  }

  if (!state.cartOpen) {
    return (
      <div className="m-4 p-1 cursor-pointer z-10" onClick={toggleCart}>
        <span className="text-white transition-colors duration-300 hover:text-yellow-500">
          <FaShoppingCart size={30}/>
        </span>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 z-50 flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-3xl">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Shopping Cart</h2>
          <button 
            className="text-gray-500 hover:text-gray-700"
            onClick={toggleCart}
          >
            [close]
          </button>
        </div>
        
        {state.cart.length ? (
          <div>
            {state.cart.map((item) => (
              <CartItem key={item._id} item={item} />
            ))}

            <div className="flex justify-between items-center mt-6 pt-6 border-t">
              <strong className="text-lg">Total: ${calculateTotal()}</strong>

              {Auth.loggedIn() ? (
                <Button onClick={submitCheckout} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                  Checkout
                </Button>
              ) : (
                <span className="text-red-500">(log in to check out)</span>
              )}
            </div>
          </div>
        ) : (
          <h3 className="text-center mt-6">
            <span role="img" aria-label="shocked">
              😱
            </span>
            You haven't added anything to your cart yet!
          </h3>
        )}
      </div>
    </div>
  );
};

export default Cart;

