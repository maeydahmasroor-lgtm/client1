"use client";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full bg-gray-50 py-16 mt-25">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* LEFT MAIN DIV */}
        <div className="lg:col-span-6 flex flex-col gap-6">
          {/* Subheading */}
          <h3 className="text-red-600 font-semibold text-lg">Welcome to Our Academy</h3>
          
          {/* Heading */}
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Learn from the Best and Achieve Your Goals
          </h1>
          
          {/* Paragraph */}
          <p className="text-gray-600 text-lg">
            Join thousands of students who are excelling in their fields with our expert guidance. Our courses are tailored to ensure your success.
          </p>
          
          {/* Buttons */}
          <div className="flex gap-4 flex-wrap">
            <button className="text-black px-6 py-3 rounded hover:bg-blue-700 transition" style={{backgroundColor:"#fdfcfb"}}>
              Get Started
            </button>
            <button className="text-white px-6 py-3 rounded hover:bg-gray-300 transition" style={{backgroundColor:"#15141b"}}>
              Learn More
            </button>
          </div>
          
          {/* Horizontal Info List */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
            {/* Card 1 */}
            <div className="flex items-center gap-3 bg-white shadow-md p-4 rounded">
              <span className="text-2xl">🎓</span>
              <div>
                <p className="font-bold">3500+</p>
                <p className="text-gray-500 text-sm">Students Taught</p>
              </div>
            </div>
            {/* Card 2 */}
            <div className="flex items-center gap-3 bg-white shadow-md p-4 rounded">
              <span className="text-2xl">📊</span>
              <div>
                <p className="font-bold">950+</p>
                <p className="text-gray-500 text-sm">A+ Scores</p>
              </div>
            </div>
            {/* Card 3 */}
            <div className="flex items-center gap-3 bg-white shadow-md p-4 rounded">
              <span className="text-2xl">⭐</span>
              <div>
                <p className="font-bold">193</p>
                <p className="text-gray-500 text-sm">Reviews</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT MAIN DIV (Images) */}
        {/*<div className="lg:col-span-6 hidden lg:grid grid-cols-2 gap-4">
          <div className="w-full h-48 relative">
            <Image src="/file.jpg" alt="Image 1" fill className="object-cover rounded" />
          </div>
          <div className="w-full h-48 relative">
            <Image src="/file.jpg" alt="Image 2" fill className="object-cover rounded" />
          </div>
          <div className="w-full h-48 relative">
            <Image src="/file.jpg" alt="Image 3" fill className="object-cover rounded" />
          </div>
          <div className="w-full h-48 relative">
            <Image src="/file.jpg" alt="Image 4" fill className="object-cover rounded" />
          </div>
        </div>
        */}
        <div className="lg:col-span-6 hidden lg:flex flex-col gap-4">

  {/* --- Top Two Rectangle Photos (new) --- */}
  {/* --- Bottom Four Photos (your existing ones, modified) --- */}
  {/*<div className="grid grid-cols-2 gap-4">
    <div className="w-full h-48 relative overflow-hidden -ml-6 rounded">
      <Image src="/file.jpg" alt="Image 1" fill className="object-cover" />
    </div>

    <div className="w-full h-48 relative">
      <Image src="/file.jpg" alt="Image 2" fill className="object-cover rounded" />
    </div>

    <div className="w-full h-48 relative">
      <Image src="/file.jpg" alt="Image 3" fill className="object-cover rounded" />
    </div>

    <div className="w-full h-48 relative overflow-hidden -mr-6 rounded">
      <Image src="/file.jpg" alt="Image 4" fill className="object-cover" />
    </div>
  </div>*/}
 
    {/*<div className="relative lg:col-span-6 hidden lg:block">

  <div className="absolute top-0 left-0 right-0 flex justify-between px-4 -mt-6 z-20">
    <div className="h-20 w-[100px] relative overflow-hidden -ml-4 rounded shadow-lg">
      <Image src="/file.jpg" alt="Extra 1" fill className="object-cover" />
    </div>

    <div className="h-20 w-[100px] relative overflow-hidden -mb-4 -mr-4 rounded shadow-lg">
      <Image src="/file.jpg" alt="Extra 2" fill className="object-cover" />
    </div>
  </div>

  <div className="grid grid-cols-2 gap-4 mt-10">

    <div className="w-full h-48 relative overflow-hidden -ml-6 rounded">
      <Image src="/file.jpg" alt="Image 1" fill className="object-cover" />
    </div>

    <div className="w-full h-48 relative">
      <Image src="/file.jpg" alt="Image 2" fill className="object-cover rounded" />
    </div>

    <div className="w-full h-48 relative">
      <Image src="/file.jpg" alt="Image 3" fill className="object-cover rounded" />
    </div>

    <div className="w-full h-48 relative overflow-hidden -mr-6 rounded">
      <Image src="/file.jpg" alt="Image 4" fill className="object-cover" />
    </div>

  </div>
</div>
</div>
</div>*/}
<div className="lg:col-span-6 hidden lg:block relative">

  {/* --- External Left + Right Cutting Divs (h-10, w-50px) --- */}
  <div className="absolute top-6 left-0 -ml-4 z-30 h-20 w-[200px] overflow-hidden rounded shadow-lg">
    <Image src="/file.jpg" alt="Cut Left" fill className="object-cover" />
  </div>

  <div className="absolute bottom-6 right-0 -mr-4 z-30 h-20 w-[200px] overflow-hidden rounded shadow-lg">
    <Image src="/file.jpg" alt="Cut Right" fill className="object-cover" />
  </div>

  {/* --- Main 4-image Grid --- */}
  <div className="grid grid-cols-2 gap-4 mt-10">

    {/* First image (cut slightly on left) */}
    <div className="w-full h-48 relative overflow-hidden -ml-6 rounded">
      <Image src="/file.jpg" alt="Image 1" fill className="object-cover" />
    </div>

    {/* Normal */}
    <div className="w-full h-48 relative">
      <Image src="/file.jpg" alt="Image 2" fill className="object-cover rounded" />
    </div>

    {/* Normal */}
    <div className="w-full h-48 relative">
      <Image src="/file.jpg" alt="Image 3" fill className="object-cover rounded" />
    </div>

    {/* Last image (cut slightly on right) */}
    <div className="w-full h-48 relative overflow-hidden -mr-6 rounded">
      <Image src="/file.jpg" alt="Image 4" fill className="object-cover" />
    </div>

  </div>
</div>
</div>
</div>
</section>
  );
}
