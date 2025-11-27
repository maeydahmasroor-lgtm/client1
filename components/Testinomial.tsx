"use client";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

interface Testimonial {
  id: number;
  name: string;
  designation: string;
  feedback: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Ali Khan",
    designation: "O Level A* Student",
    feedback: "SJ Academy helped me achieve top grades with expert guidance and personalized attention.",
  },
  {
    id: 2,
    name: "Sara Ahmed",
    designation: "A Level A* Student",
    feedback: "The teachers are amazing and the focused exam-oriented learning made all the difference.",
  },
  {
    id: 3,
    name: "Hassan Raza",
    designation: "O Level A* Student",
    feedback: "I improved my grades dramatically thanks to SJ Academy's small group sessions and structured lessons.",
  },
];

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1536 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 1536, min: 1024 },
    items: 2,
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1,
  },
};

const Testimonials = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Our Students Achieving A* Grades
          </h2>
          <p className="text-gray-600 text-lg">
            Hear from our top performers who excelled in O Level and A Level programs at SJ Academy.
          </p>
        </div>

        {/* Carousel */}
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          showDots={true}
          arrows={true}
          containerClass="carousel-container"
          itemClass="px-4"
        >
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white shadow-md rounded-lg p-8 flex flex-col items-center text-center"
            >
              <p className="text-gray-700 mb-4">{t.feedback}</p>
              <h3 className="text-xl font-bold">{t.name}</h3>
              <span className="text-gray-500">{t.designation}</span>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
