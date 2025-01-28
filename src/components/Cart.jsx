/* eslint-disable react/prop-types */
import { useContext } from "react";
import { StoreContext } from "../App";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { TbSortDescending2Filled } from "react-icons/tb";

const Cart = ({ handleRemoveFromCart }) => {
  const data = useContext(StoreContext);
  const totalCost = data.cart?.reduce((sum, item) => sum + item.price, 0);
  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Cart</h2>
        <div className="flex items-center gap-4 my-5">
          <p className="text-lg font-bold">
            Total cost: ${totalCost.toFixed(2)}
          </p>
          <button className="px-4 py-2 border border-purple-600 text-purple-600 rounded-full flex justify-center items-center hover:bg-purple-50">
            Sort by Price{" "}
            <span className="ml-2">
              <TbSortDescending2Filled />
            </span>
          </button>
          <button className="px-6 rounded-full py-2 bg-purple-600 text-white hover:bg-purple-700">
            Purchase
          </button>
        </div>
      </div>

      <div className="space-y-4">
        {data.cart.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg shadow p-4 flex gap-6"
          >
            <div className="w-48 h-32 bg-gray-100 rounded-lg">
              <img
                src={item.image}
                alt="item image"
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-lg mb-2">{item.name}</h3>
                  <p className="text-gray-600 mb-2">{item.description}</p>
                  <p className="font-semibold">Price: $ {item.price}</p>
                </div>
                <button
                  onClick={() => handleRemoveFromCart(item.id)}
                  className="p-2 hover:bg-gray-100 rounded-full"
                >
                  <IoIosCloseCircleOutline className="w-5 h-5 text-red-500" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
