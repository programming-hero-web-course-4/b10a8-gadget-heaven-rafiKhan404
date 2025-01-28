import { useContext } from "react";
import { CiHeart } from "react-icons/ci";
import {} from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
import { StoreContext } from "../App";

const Header = () => {
  const data = useContext(StoreContext);
  return (
    <div className="bg-gradient-to-b from-purple-600 to-purple-500 sticky top-0 z-30">
      {/* Navigation */}
      <nav className="flex items-center justify-between p-4">
        <div className="text-white text-xl font-semibold">Gadget Heaven</div>
        <div className="flex space-x-6">
          <Link to="/" className="text-white">
            Home
          </Link>
          <Link to="/statistics" className="text-white">
            Statistics
          </Link>
          <Link to="/dashboard" className="text-white">
            Dashboard
          </Link>
        </div>
        <div className="flex space-x-4">
          <Link
            to="dashboard"
            className="relative p-2 hover:bg-white/10 bg-white text-black rounded-full"
          >
            <MdOutlineShoppingCart className="h-5 w-5" />
            {data.cart.length > 0 && (
              <p className="absolute -top-1 -right-1 bg-white text-black  text-xs font-bold px-2 py-1 rounded-full animate-bounce">
                {data.cart.length}
              </p>
            )}
          </Link>
          <Link
            to="dashboard"
            className="relative p-2 hover:bg-white/10 bg-white text-black rounded-full"
          >
            <CiHeart className="h-5 w-5" />
            {data.wishList.length > 0 && (
              <p className="absolute -top-1 -right-1 bg-white text-black  text-xs font-bold px-2 py-1 rounded-full animate-bounce">
                {data.wishList.length}
              </p>
            )}
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
