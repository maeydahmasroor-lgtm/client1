import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

const TopHeader = () => {
  return (
    <div className="bg-gray-800 text-white p-2">
      <div className="container mx-auto flex justify-between items-center">
        <p className="text-sm">Contact: info@sjacademy.pk</p>
        <div className="flex gap-4">
          <a href="#" className="text-white hover:text-gray-300"><FaFacebook /></a>
          <a href="#" className="text-white hover:text-gray-300"><FaTwitter /></a>
          <a href="#" className="text-white hover:text-gray-300"><FaLinkedin /></a>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;