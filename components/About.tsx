"use client";
import Image from "next/image";

const WhyAcademy = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Div - Image */}
        <div className="w-full h-64 lg:h-96 relative">
          <Image
            src="/file.jpg" // replace with your image path
            alt="SJ Academy"
            fill
            className="object-cover rounded-lg shadow-md"
          />
        </div>
        
        {/* Right Div - Text */}
        <div className="flex flex-col gap-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Why SJ Academy is the Top O Level & A Level Academy in Karachi
          </h2>
          <p className="text-gray-600 text-lg">
            SJ Academy has been shaping young minds for years, providing expert guidance, experienced faculty, and a proven track record of excellence in both O Level and A Level programs. Our students consistently achieve top grades and gain admission to prestigious universities.
          </p>
          <p className="text-gray-600 text-lg">
            With a focus on individual attention, modern teaching methods, and a supportive learning environment, SJ Academy stands out as the premier choice for students aiming for academic excellence in Karachi.
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition w-max">
            Join Free Demo Classes
          </button>
        </div>
        
      </div>
    </section>
  );
};

export default WhyAcademy;

