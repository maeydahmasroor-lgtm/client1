const Features = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What We Offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-bold mb-4">Online Classes</h3>
            <p className="text-gray-600">
              Live interactive classes with our expert instructors.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-bold mb-4">Recorded Lectures</h3>
            <p className="text-gray-600">
              Access to recorded lectures anytime, anywhere.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-bold mb-4">Expert Tutors</h3>
            <p className="text-gray-600">
              Learn from the best and most experienced tutors.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
