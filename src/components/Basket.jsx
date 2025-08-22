import { useSelector, useDispatch } from "react-redux";
import { removeFromBasket, clearBasket } from "../redux/basketSlice";

function Basket() {
  const dispatch = useDispatch();
  const basket = useSelector((state) => state.basket.items);

  return (
    <div className="p-5">
      <h2 className="text-3xl font-robotoslabbold mb-4">Your Basket</h2>

      {basket.length === 0 ? (
        <p className="text-gray-500 font-robotoslab">Your basket is empty</p>
      ) : (
        <div className="space-y-4">
          {basket.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border-b pb-2"
            >
              <div className="flex items-center gap-3">
                <img
                  src={item.photo}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded-lg"
                />
                <div>
                  <h3 className="font-robotoslabsemibold">{item.name}</h3>
                  <p className="text-sm text-gray-600 font-robotoslab">{item.price}</p>
                </div>
              </div>

              <button
                onClick={() => dispatch(removeFromBasket(item.id))}
                className="text-red-500 hover:text-red-700 font-robotoslab cursor-pointer"
              >
                Remove
              </button>
            </div>
          ))}

          <button
            onClick={() => dispatch(clearBasket())}
            className="mt-4 bg-red-500 font-robotoslab text-white px-4 py-2 rounded-lg hover:bg-red-600"
          >
            Clear Basket
          </button>
        </div>
      )}
    </div>
  );
}

export default Basket;
