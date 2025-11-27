"use client";
import { FaChalkboardTeacher, FaMedal, FaUsers } from "react-icons/fa";

const WhyChooseAcademy = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Why Parents & Students Choose SJ Academy
          </h2>
          <p className="text-gray-600 text-lg">
            Our academy is committed to providing top-notch education and a supportive learning environment.
          </p>
        </div>

        {/* Reason Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md">
            <FaChalkboardTeacher className="text-blue-600 text-5xl mb-4" />
            <h3 className="text-xl font-bold mb-2">Expert Faculty & Proven Results</h3>
            <p className="text-gray-600">
              Our experienced teachers ensure students achieve top grades consistently.
            </p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md">
            <FaUsers className="text-blue-600 text-5xl mb-4" />
            <h3 className="text-xl font-bold mb-2">Personalized Attention in Small Groups</h3>
            <p className="text-gray-600">
              We focus on individual learning needs with small class sizes for better understanding.
            </p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md">
            <FaMedal className="text-blue-600 text-5xl mb-4" />
            <h3 className="text-xl font-bold mb-2">Focused Exam-Oriented Learning</h3>
            <p className="text-gray-600">
              Our programs are designed to maximize performance in exams with structured guidance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseAcademy;
