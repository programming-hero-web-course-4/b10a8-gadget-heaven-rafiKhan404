import { useState } from "react";
import { Link } from "react-router-dom";
import Banner from "./Banner";

function Home() {
  const [selectedCategory, setSelectedCategory] = useState("All Product");

  const categories = [
    "All Product",
    ...new Set(productsList.map((product) => product.category)),
  ];

  const filteredProducts =
    selectedCategory === "All Product"
      ? productsList
      : productsList.filter((product) => product.category === selectedCategory);
  return (
    <div className="min-h-screen bg-white">
      {/* Purple Banner Section with Navigation and Hero */}
      <Banner />
      {/* VR Headset Section - Overlapping */}
      <div className="max-w-4xl mx-auto px-4 -mt-48 relative z-10">
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 shadow-2xl">
          <img
            src="/public/assets/banner.jpg"
            alt="VR Headset"
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* Product Grid Section */}
      <section className="px-4 py-16 mt-24">
        <h2 className="text-3xl font-bold text-center mb-12">
          Explore Cutting-Edge Gadgets
        </h2>

        <div className="flex flex-wrap gap-8 max-w-7xl mx-auto">
          {/* Sidebar */}
          <div className="w-full md:w-48">
            <div className="space-y-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`w-full text-left px-4 py-2 rounded-md ${
                    selectedCategory === category
                      ? "bg-purple-600 text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <div key={product.id} className="bg-gray-100 rounded-lg p-4">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <h3 className="font-semibold mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">
                    Price: ${product.price.toFixed(2)}
                  </p>
                  <Link
                    to={`product/${product.id}`}
                    className="w-full inline-block text-center hover:bg-purple-800 duration-300 px-4 py-2 border hover:text-white border-purple-600 text-purple-600 rounded-md "
                  >
                    View Details
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
const productsList = [
  {
    id: 1,
    name: "Dell XPS 13",
    category: "Laptops",
    price: 999.99,
    image: "https://www.dell.com/wp-uploads/2024/01/Diablo-Platinum-v2.jpg",
    description: "Ultra-thin and light laptop with InfinityEdge display",
    specs: {
      processor: "Intel Core i7",
      ram: "16GB",
      storage: "512GB SSD",
    },
  },
  {
    id: 2,
    name: "iPhone 13 Pro",
    category: "Phones",
    price: 999.0,
    image:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-family-hero?wid=940&hei=1112&fmt=png-alpha&.v=1631220221000",
    description: "Pro camera system with new 12MP Telephoto",
    specs: {
      screen: "6.1-inch",
      storage: "256GB",
      chip: "A15 Bionic",
    },
  },
  {
    id: 3,
    name: "Sony WH-1000XM4",
    category: "Accessories",
    price: 349.99,
    image:
      "https://www.sony-asia.com/image/aecb44d1ed9d12d83c2736daa1786b75?fmt=pjpeg&wid=1014&hei=396&bgcolor=F1F5F9&bgc=F1F5F9",
    description: "Industry-leading noise canceling wireless headphones",
    specs: {
      batteryLife: "30 hours",
      noiseCancellation: "Active",
      connectivity: "Bluetooth 5.0",
    },
  },
  {
    id: 4,
    name: "Apple Watch Series 7",
    category: "Smart Watches",
    price: 399.0,
    image:
      "https://mobilexchangebd.com/storage/general/apple-watch-series-7-starlight.jpg",
    description: "Always-On Retina display with crack-resistant front crystal",
    specs: {
      display: "Always-On Retina",
      size: "45mm",
      waterResistance: "50 meters",
    },
  },
  {
    id: 5,
    name: "MacBook Pro 14",
    category: "MacBook",
    price: 1999.0,
    image:
      "https://atlas-content-cdn.pixelsquid.com/assets_v2/306/3065444152482207141/jpeg-600/G03.jpg?modifiedAt=1",
    description:
      "Apple M1 Pro chip for a massive leap in CPU, GPU, and machine learning performance",
    specs: {
      chip: "M1 Pro",
      ram: "16GB",
      storage: "512GB SSD",
    },
  },
  {
    id: 6,
    name: "Samsung Galaxy S21",
    category: "Phones",
    price: 799.99,
    image:
      "https://w7.pngwing.com/pngs/108/8/png-transparent-samsung-galaxy-s21-ultra-electronics-android-phones-thumbnail.png",
    description: "5G smartphone with pro-grade camera and intelligent battery",
    specs: {
      screen: "6.2-inch",
      camera: "64MP",
      battery: "4000mAh",
    },
  },
  {
    id: 7,
    name: "iPad Air",
    category: "Accessories",
    price: 599.0,
    image:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-air-select-wifi-blue-202009?wid=940&hei=1112&fmt=png-alpha&.v=1598650644000",
    description:
      "Powerful A14 Bionic chip with impressive all-day battery life",
    specs: {
      chip: "A14 Bionic",
      display: "10.9-inch",
      storage: "64GB",
    },
  },
  {
    id: 8,
    name: "Fitbit Versa 3",
    category: "Smart Watches",
    price: 229.95,
    image: "https://m.media-amazon.com/images/I/51rqOA7uVvS.jpg",
    description:
      "Advanced fitness watch with GPS, heart rate monitoring, and voice assistant",
    specs: {
      gps: "Built-in",
      batteryLife: "6+ days",
      waterResistance: "50 meters",
    },
  },
  {
    id: 9,
    name: "Lenovo ThinkPad X1 Carbon",
    category: "Laptops",
    price: 1399.99,
    image:
      "https://p1-ofp.static.pub/medias/bWFzdGVyfHJvb3R8ODQ4NDd8aW1hZ2UvcG5nfGgyMi9oOGYvMTA2NzQ1ODc3Mjk5NTAucG5nfDQzODYxOTc5ODA0MWJhZTQyYThjOTAzZjE0NDI2NWVjYjY5MjE3MGFiMWEzODhlN2UyMGUwNGZhMWRmOTJmNzg/lenovo-laptop-thinkpad-x1-carbon-gen8-subseries-hero.png",
    description: "Ultra-light business laptop with long battery life",
    specs: {
      processor: "Intel Core i7",
      ram: "16GB",
      storage: "1TB SSD",
    },
  },
  {
    id: 10,
    name: "AirPods Pro",
    category: "Accessories",
    price: 249.0,
    image:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MWP22?wid=2000&hei=2000&fmt=jpeg&qlt=95&.v=1591634795000",
    description: "Active noise cancellation for immersive sound",
    specs: {
      noiseCancellation: "Active",
      sweatResistant: true,
      chargingCase: "Wireless",
    },
  },
  {
    id: 11,
    name: "MacBook Air",
    category: "MacBook",
    price: 999.0,
    image:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-space-gray-select-201810?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1633027804000",
    description: "Thin and light laptop powered by the Apple M1 chip",
    specs: {
      chip: "M1",
      ram: "8GB",
      storage: "256GB SSD",
    },
  },
  {
    id: 12,
    name: "Google Pixel 6",
    category: "Phones",
    price: 599.0,
    image:
      "https://lh3.googleusercontent.com/Svg8BhbHhVuz8080jHIb2tFgVmGKwp58O_noZJe38bGPy8gLyuJPtJZTTKxnpXVZCX0NvBE3Vc7BZ6OiRPDTbCInwqq-Dkk=rw-e365-w1440",
    description:
      "The smartest and fastest Pixel yet with the Google Tensor chip",
    specs: {
      chip: "Google Tensor",
      camera: "50MP wide + 12MP ultrawide",
      screen: "6.4-inch OLED",
    },
  },
];
