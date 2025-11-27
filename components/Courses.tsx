const Courses = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Popular Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Course Card 1 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-48 bg-gray-200"></div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Web Development</h3>
              <p className="text-gray-600 mb-4">
                Learn to build modern websites and web applications.
              </p>
              <button className="text-blue-500 font-bold hover:underline">Learn More</button>
            </div>
          </div>
          {/* Course Card 2 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-48 bg-gray-200"></div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Digital Marketing</h3>
              <p className="text-gray-600 mb-4">
                Master the art of online marketing and social media.
              </p>
              <button className="text-blue-500 font-bold hover:underline">Learn More</button>
            </div>
          </div>
          {/* Course Card 3 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-48 bg-gray-200"></div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Graphic Design</h3>
              <p className="text-gray-600 mb-4">
                Create stunning visuals and graphics for various media.
              </p>
              <button className="text-blue-500 font-bold hover:underline">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
