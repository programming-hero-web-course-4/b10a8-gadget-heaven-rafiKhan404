import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./route";
import { createContext, useState } from "react";
export const StoreContext = createContext(null);
function App() {
  const [cart, setCart] = useState([]);

  const [activeTab, setActiveTab] = useState("cart");
  const [wishList, setWishListItem] = useState([]);
  return (
    <StoreContext.Provider
      value={{
        cart,
        setCart,
        wishList,
        setWishListItem,
        activeTab,
        setActiveTab,
      }}
    >
      <div className="App max-w-[1400px] mx-auto font-poppins text-gray-600">
        {/* <Header /> */}
        <RouterProvider router={router}></RouterProvider>
      </div>
    </StoreContext.Provider>
  );
}

export default App;
