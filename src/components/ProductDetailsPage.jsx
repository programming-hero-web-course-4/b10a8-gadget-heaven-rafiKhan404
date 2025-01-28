import { FaHeart, FaShoppingCart, FaStar, FaUser } from "react-icons/fa";

function ProductDetails() {
  return (
    <div className="min-h-screen bg-white">
      {/* Purple Banner */}
      <div className="bg-gradient-to-b from-purple-600 to-purple-500 py-12 px-4">
        <div className="max-w-2xl mx-auto text-center text-white">
          <h1 className="text-3xl font-bold mb-4">Product Details</h1>
          <p className="text-white/90">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
        </div>
      </div>

      {/* Product Details Card */}
      <div className="max-w-4xl mx-auto px-4 -mt-8">
        <div className="bg-white rounded-xl shadow-xl p-8 flex gap-8">
          {/* Product Image */}
          <div className="w-1/2">
            <div className="bg-gray-100 rounded-lg aspect-square"></div>
          </div>

          {/* Product Info */}
          <div className="w-1/2 space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-2">
                Samsung Galaxy S23 Ultra
              </h2>
              <p className="text-xl font-semibold mb-2">Price: $ 999.99</p>
              <span className="inline-block px-3 py-1 text-sm text-green-700 bg-green-100 rounded-full">
                In Stock
              </span>
            </div>

            <p className="text-gray-600">
              Ultra-slim, high-performance laptop with 13.4-inch Infinity Edge
              display.
            </p>

            <div>
              <h3 className="font-semibold mb-2">Specification</h3>
              <ul className="space-y-2 text-gray-600">
                <li>1. Intel i7 11th Gen</li>
                <li>2. 16GB RAM</li>
                <li>3. 512GB SSD</li>
                <li>4. Touchscreen</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Rating</h3>
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[1, 2, 3, 4].map((i) => (
                    <FaStar
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                  <FaStar
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    strokeWidth={0}
                    fill="url(#half)"
                  />
                </div>
                <span className="text-gray-600">4.5</span>
              </div>
            </div>

            <div className="flex gap-4">
              <button className="flex items-center justify-center gap-2 px-6 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700">
                <FaShoppingCart className="w-5 h-5" />
                Add To Card
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <FaHeart className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* SVG Definitions */}
      <svg className="hidden">
        <defs>
          <linearGradient id="half">
            <stop offset="50%" stopColor="currentColor" />
            <stop offset="50%" stopColor="rgb(229 231 235)" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

export default ProductDetails;
