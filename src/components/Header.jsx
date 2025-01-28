import { FaShoppingCart, FaUser } from "react-icons/fa";

const Header = () => {
  return (
    <div className="bg-gradient-to-b from-purple-600 to-purple-500 sticky top-0">
      {/* Navigation */}
      <nav className="flex items-center justify-between p-4">
        <div className="text-white text-xl font-semibold">Gadget Heaven</div>
        <div className="flex space-x-6">
          <a href="#" className="text-white">
            Home
          </a>
          <a href="#" className="text-white">
            Statistics
          </a>
          <a href="#" className="text-white">
            Dashboard
          </a>
        </div>
        <div className="flex space-x-4">
          <button className="text-white p-2 hover:bg-white/10 rounded-full">
            <FaShoppingCart className="h-5 w-5" />
          </button>
          <button className="text-white p-2 hover:bg-white/10 rounded-full">
            <FaUser className="h-5 w-5" />
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Header;
