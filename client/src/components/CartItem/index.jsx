import { useStoreContext } from "../../utils/GlobalState";
import { REMOVE_FROM_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";
import { FaShoppingCart, FaTrash } from "react-icons/fa";

const CartItem = ({ item }) => {

  const [, dispatch] = useStoreContext();

  const removeFromCart = item => {
    dispatch({
      type: REMOVE_FROM_CART,
      _id: item._id
    });
    idbPromise('cart', 'delete', { ...item });

  };

  const onChange = (e) => {
    const value = e.target.value;
    if (value === '0') {
      dispatch({
        type: REMOVE_FROM_CART,
        _id: item._id
      });
      idbPromise('cart', 'delete', { ...item });

    } else {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: item._id,
        purchaseQuantity: parseInt(value)
      });
      idbPromise('cart', 'put', { ...item, purchaseQuantity: parseInt(value) });

    }
  }

  return (
    <div className="flex items-center justify-between p-4 bg-white border rounded-lg shadow-sm mb-4">
      <img
        src={`/images/${item.image}`}
        alt={item.name}
        className="w-20 h-20 object-contain rounded-lg"
      />
      <div className="flex-1 ml-4">
        <div className="text-lg font-semibold text-gray-900">{item.name}</div>
        <div className="text-lg font-bold text-gray-700">${item.price}</div>
        <div className="flex items-center mt-2">
          <span className="mr-2">Qty:</span>
          <input
            type="number"
            min="1"
            value={item.purchaseQuantity}
            onChange={onChange}
            className="w-16 h-10 text-center border rounded bg-white shadow-sm"
          />
          <span
            onClick={() => removeFromCart(item)}
            className="text-red-500 hover:text-red-700 cursor-pointer ml-4"
          >
            <FaTrash size={18} />
          </span>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
