import Image from 'next/image';

const About = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <Image
              src="/file.jpg"
              alt="About SJ Academy"
              width={500}
              height={300}
              className="rounded-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4">About SJ Academy</h2>
            <p className="text-gray-600 mb-4">
              SJ Academy is a leading educational institution dedicated to providing high-quality learning experiences. Our mission is to empower students with the knowledge and skills they need to succeed in their careers.
            </p>
            <p className="text-gray-600">
              We offer a wide range of courses taught by industry experts, ensuring that our students receive the most up-to-date and relevant education.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
