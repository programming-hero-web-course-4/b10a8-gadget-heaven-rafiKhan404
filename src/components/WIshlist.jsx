import { useContext } from "react";
import { StoreContext } from "../App";
import { IoIosClose } from "react-icons/io";
import { productsList } from "./Home";

const WishList = () => {
  const data = useContext(StoreContext);
  const handleAddToCart = (id) => {
    const product = productsList.find((p) => p.id === Number(id));
    const checkIfAlreadyInCart = data.cart.find((e) => e?.id === product.id);
    if (checkIfAlreadyInCart) {
      window.alert("You already added this product in cart");
      return;
    }
    data.setCart([...data.cart, product]);
    console.log(data, "this is cart");
  };
  return (
    <div className="max-w-4xl mx-auto my-4">
      <h2 className="text-2xl font-bold mb-6">WishList</h2>

      <div className="space-y-4">
        {data.wishList?.map((item) => (
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
                  <p className="text-gray-600 mb-2">
                    Description: {item.description}
                  </p>
                  <p className="font-semibold mb-4">Price: $ {item.price}</p>
                  <button
                    onClick={() => handleAddToCart(item.id)}
                    className="px-6 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700"
                  >
                    Add to Card
                  </button>
                </div>
                <button className="p-2 hover:bg-gray-100 rounded-full">
                  <IoIosClose className="w-5 h-5 text-red-500" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WishList;
