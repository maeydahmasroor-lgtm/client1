interface Instructor {
  id: number;
  name: string;
  subject: string;
  experience: string;
  qualification: string;
}

const instructors: Instructor[] = [
  {
    id: 1,
    name: "Sir Ahmed Khan",
    subject: "O Level Mathematics",
    experience: "12+ years",
    qualification: "MSc Mathematics (Karachi University)",
  },
  {
    id: 2,
    name: "Miss Sarah Malik",
    subject: "A Level Biology",
    experience: "8+ years",
    qualification: "BS Bio Sciences (IBA Karachi)",
  },
  {
    id: 3,
    name: "Sir Bilal Hussain",
    subject: "O/A Level Physics",
    experience: "10+ years",
    qualification: "BS Physics (NED University)",
  },
  {
    id: 4,
    name: "Miss Ayesha Rehman",
    subject: "O Level English",
    experience: "7+ years",
    qualification: "MA English (Karachi University)",
  },
];

export default function InstructorList() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">
          Our Expert Instructors
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {instructors.map((ins) => (
            <div
              key={ins.id}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition border border-gray-100"
            >
              {/* Name */}
              <h3 className="text-xl font-bold mb-1 text-gray-900">
                {ins.name}
              </h3>

              {/* Subject */}
              <p className="text-blue-600 font-semibold mb-2">
                {ins.subject}
              </p>

              {/* Qualification */}
              <p className="text-gray-700 text-sm mb-3">
                📘 <span className="font-medium">Qualification:</span>{" "}
                {ins.qualification}
              </p>

              {/* Experience */}
              <p className="text-gray-700 text-sm mb-4">
                ⭐ <span className="font-medium">Experience:</span> {ins.experience}
              </p>

              {/* CTA */}
              <button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700">
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
