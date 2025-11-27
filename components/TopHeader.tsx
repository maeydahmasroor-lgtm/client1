// components/MarqueeComponent.tsx
"use client"
import React from 'react';
import Marquee from 'react-fast-marquee';

const MarqueeComponent: React.FC = () => {
  return (
    <Marquee speed={50} gradient={false} className="bg-gray-100 py-4 overflow-hidden h-10">
      <div className="flex space-x-12 whitespace-nowrap">
        <span className="text-xl font-semibold text-blue-600">Your Marquee Item 1</span>
        <span className="text-xl font-semibold text-green-600">Your Marquee Item 2</span>
        <span className="text-xl font-semibold text-red-600">Your Marquee Item 3</span>
        {/* Add more items here */}
      </div>
    </Marquee>
  );
};

export default MarqueeComponent;
