const Footer = () => {
  return (
    <footer className="bg-white px-4 py-12 text-center">
      <h2 className="text-2xl font-bold mb-2">Gadget Heaven</h2>
      <p className="text-gray-600 mb-8">
        Leading the way in cutting-edge technology and innovation.
      </p>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-semibold mb-4">Services</h3>
          <div className="space-y-2">
            <p>Product Support</p>
            <p>Order Tracking</p>
            <p>Shipping & Delivery</p>
            <p>Returns</p>
          </div>
        </div>
        <div>
          <h3 className="font-semibold mb-4">Company</h3>
          <div className="space-y-2">
            <p>About Us</p>
            <p>Careers</p>
            <p>Contact</p>
          </div>
        </div>
        <div>
          <h3 className="font-semibold mb-4">Legal</h3>
          <div className="space-y-2">
            <p>Terms of Service</p>
            <p>Privacy Policy</p>
            <p>Cookie Policy</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
