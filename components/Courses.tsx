"use client";
import { useState } from "react";

interface Course {
  id: number;
  title: string;
  type: "O Level" | "A Level" | "Diploma";
  timing: string;
}

const courses: Course[] = [
  { id: 1, title: "Web Development", type: "O Level", timing: "Mon-Fri, 6 PM - 8 PM" },
  { id: 2, title: "Digital Marketing", type: "A Level", timing: "Tue-Sat, 5 PM - 7 PM" },
  { id: 3, title: "Graphic Design", type: "Diploma", timing: "Mon-Thu, 4 PM - 6 PM" },
  { id: 4, title: "Python Programming", type: "O Level", timing: "Mon-Fri, 7 PM - 9 PM" },
  { id: 5, title: "Data Science", type: "A Level", timing: "Tue-Fri, 6 PM - 8 PM" },
];

const Courses = () => {
  const [filter, setFilter] = useState<"All" | "O Level" | "A Level" | "Diploma">("All");

  const filteredCourses = filter === "All" ? courses : courses.filter(course => course.type === filter);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Heading & Subheading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Our Courses</h2>
          <p className="text-gray-600 text-lg">
            Explore our courses and join free demo classes today!
          </p>
        </div>

        {/* Filters */}
        <div className="flex justify-center gap-4 mb-8 flex-wrap">
          {["All", "O Level", "A Level", "Diploma"].map((type) => (
            <button
              key={type}
              className={`px-4 py-2 rounded ${
                filter === type ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"
              } hover:bg-blue-500 hover:text-white transition`}
              onClick={() => setFilter(type as typeof filter)}
            >
              {type}
            </button>
          ))}
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <div key={course.id} className="bg-white rounded-lg shadow-md p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold mb-2">{course.title}</h3>
                <p className="text-gray-600 mb-2">Timing: {course.timing}</p>
                <p className="text-gray-500 mb-4">Course Type: {course.type}</p>
                <a
                  href="#"
                  className="text-blue-500 font-semibold hover:underline mb-4 block"
                >
                  See Schedule
                </a>
              </div>
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition mt-4">
                Join Free Demo Classes
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
