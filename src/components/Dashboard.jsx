import { useContext } from "react";
import { StoreContext } from "../App";
import Cart from "./Cart";
import WishList from "./WIshlist";

const Dashboard = () => {
  const data = useContext(StoreContext);

  const handleRemoveFromCart = (id) => {
    const cartItems = data.cart;
    data.setCart([...cartItems.filter((p) => p.id !== id)]);
  };

  const handleRemoveFromWishlist = (id) => {
    data.setWishListItem((items) => items.filter((item) => item.id !== id));
  };

  const handleSort = () => {
    if (data.activeTab == "cart") {
      data.setCart([...data.cart.sort((a, b) => a.price - b.price)]);
    }
  };

  const handlePurchase = () => {
    alert("Purchase functionality to be implemented");
  };
  return (
    <div>
      <div className="bg-gradient-to-b from-purple-600 to-purple-500 py-12 px-4">
        <div className="max-w-2xl mx-auto text-center text-white">
          <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
          <p className="text-white/90">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
          <div className="my-5">
            <button
              onClick={() => data.setActiveTab("cart")}
              className="px-7 hover:bg-white duration-300 font-semibold border-white border-2 hover:text-purple-600 py-2 rounded-full text-white bg-none mr-3"
            >
              Cart
            </button>
            <button
              onClick={() => data.setActiveTab("wishlist")}
              className="px-7 hover:bg-white duration-300 font-semibold border-white border-2 hover:text-purple-600 py-2 rounded-full text-white bg-none mr-3"
            >
              Wishlist
            </button>
          </div>
        </div>
      </div>
      {data.activeTab === "cart" ? (
        <Cart
          handleRemoveFromCart={handleRemoveFromCart}
          handleSort={handleSort}
        />
      ) : (
        <WishList />
      )}
    </div>
  );
};

export default Dashboard;
