import Link from 'next/link';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">SJ Academy</h3>
            <p className="text-gray-400">
              A premier institution for quality education and career development.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
              <li><Link href="/courses" className="text-gray-400 hover:text-white">Courses</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
              <li><Link href="/admissions" className="text-gray-400 hover:text-white">Admissions</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <p className="text-gray-400">123 Education Lane, Knowledge City</p>
            <p className="text-gray-400">Email: info@sjacademy.pk</p>
            <p className="text-gray-400">Phone: +92 123 4567890</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white"><FaFacebook size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-white"><FaTwitter size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-white"><FaLinkedin size={24} /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-6 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} SJ Academy. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
