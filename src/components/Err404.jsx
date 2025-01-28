import { FaArrowLeft, FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b">
        <div className="flex items-center justify-between p-4 max-w-7xl mx-auto">
          <div className="font-semibold text-xl">Gadget Heaven</div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Home
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Statistics
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Dashboard
            </a>
          </div>
        </div>
      </header>

      {/* Purple Banner */}
      <div className="bg-gradient-to-b from-purple-600 to-purple-500 py-12 px-4">
        <div className="max-w-2xl mx-auto text-center text-white">
          <h1 className="text-3xl font-bold mb-4">404 - Page Not Found</h1>
          <p className="text-white/90">
            Oops! Looks like you&lsquo;ve ventured into uncharted territory.
          </p>
        </div>
      </div>

      {/* 404 Content Card */}
      <div className="max-w-3xl mx-auto px-4 -mt-8">
        <div className="bg-white rounded-xl shadow-xl p-12 text-center">
          {/* 404 Illustration */}
          <div className="mb-8">
            <div className="relative w-64 h-64 mx-auto">
              <div className="absolute inset-0 bg-purple-100 rounded-full animate-pulse"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-8xl font-bold text-purple-600">404</span>
              </div>
            </div>
          </div>

          {/* Error Message */}
          <h2 className="text-2xl font-bold mb-4">We Lost This Page</h2>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            The page you are looking for doesn&apos;t exist or has been moved.
            We suggest you go back to home.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => window.history.back()}
              className="flex items-center justify-center gap-2 px-6 py-3 border border-purple-600 text-purple-600 rounded-md hover:bg-purple-50"
            >
              <FaArrowLeft className="w-5 h-5" />
              Go Back
            </button>
            <Link
              to="/"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700"
            >
              <FaHome className="w-5 h-5" />
              Back to Home
            </Link>
          </div>
        </div>
      </div>

      {/* Additional Help Section */}
      <div className="max-w-2xl mx-auto px-4 py-16 text-center">
        <h3 className="text-xl font-semibold mb-4">Need Help?</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="p-6 bg-gray-50 rounded-lg">
            <h4 className="font-semibold mb-2">Support Center</h4>
            <p className="text-gray-600 text-sm">
              Find answers in our help center
            </p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg">
            <h4 className="font-semibold mb-2">Live Chat</h4>
            <p className="text-gray-600 text-sm">Talk to our support team</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg">
            <h4 className="font-semibold mb-2">Email Us</h4>
            <p className="text-gray-600 text-sm">Get help via email</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t px-4 py-8 text-center text-gray-600">
        <p>© 2024 Gadget Heaven. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default NotFound;
