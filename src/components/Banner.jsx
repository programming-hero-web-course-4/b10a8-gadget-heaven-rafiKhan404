const Banner = () => {
  return (
    <div className="bg-gradient-to-b from-purple-600 to-purple-500 pb-32">
      {/* Hero Section */}
      <section className="text-center px-4 pt-16 pb-32">
        <h1 className="text-white text-4xl md:text-5xl font-bold max-w-3xl mx-auto mb-4">
          Upgrade Your Tech Accessorize with Gadget Heaven Accessories
        </h1>
        <p className="text-white/90 max-w-2xl mx-auto mb-8">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
        <button className="bg-white text-purple-600 hover:bg-white/90 px-6 py-2 rounded-md font-medium">
          Shop Now
        </button>
      </section>
    </div>
  );
};

export default Banner;
