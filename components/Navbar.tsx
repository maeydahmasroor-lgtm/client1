import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-gray-800">
              SJ Academy
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-600 hover:text-gray-800">Home</Link>
            <Link href="/about" className="text-gray-600 hover:text-gray-800">About Us</Link>
            <Link href="/courses" className="text-gray-600 hover:text-gray-800">Courses</Link>
            <Link href="/contact" className="text-gray-600 hover:text-gray-800">Contact</Link>
          </div>
          <div>
            <Link href="/admissions" className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600">
              Admission
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;