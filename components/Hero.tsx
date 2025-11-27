const Hero = () => {
  return (
    <div
      className="bg-cover bg-center h-96 text-white"
      style={{ backgroundImage: "url('/file.jpg')" }}
    >
      <div className="container mx-auto h-full flex flex-col justify-center items-start px-4">
        <h1 className="text-4xl md:text-5xl font-bold">Welcome to SJ Academy</h1>
        <p className="mt-4 text-lg md:text-xl max-w-md">
          Your future starts here. Learn from the best to become the best.
        </p>
        <button className="mt-8 bg-blue-500 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-600">
          Our Courses
        </button>
      </div>
    </div>
  );
};

export default Hero;
