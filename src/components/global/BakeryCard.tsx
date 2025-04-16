'use client';

import { Star, User } from 'lucide-react';
import React from 'react';

export default function BakeryCard() {
  const categories = [
    'PLAIN CAKE',
    'CROISSANT',
    'LOAF BREAD',
    'COOKIES',
    'BRETZEL',
    'APPLE PIE'
  ];

  return (
    <div className="w-full mx-auto my-8">
      <div className="bg-[#A4D4D4] rounded-3xl p-8 flex flex-col md:flex-row shadow-lg relative overflow-hidden">
        <div className="flex-1 z-10 pr-4 md:pr-8">
          <div className="relative mb-6">
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-[#F9FF8F] rounded-full opacity-70"></div>

            <h1 className="text-[#0B3F47] text-3xl sm:text-4xl font-extrabold leading-tight relative z-10 uppercase tracking-tight">
              WITH ENOUGH<br />
              BUTTER, ANYTHING<br />
              IS GOOD!
            </h1>
          </div>

          <div className="flex items-center mt-10 gap-3">
            <div className="w-12 h-12 rounded-full overflow-hidden bg-[#F9FF8F] flex items-center justify-center">
              <User />
            </div>
            <div className="ml-3">
              <p className="text-[#0B3F47] text-lg font-sans font-bold">Our master plan to freshen<br />up a 200-year-old</p>
            </div>
            <div className="">
            <div className=" border-b border-[#0B3F47]">
              <p className="text-[#0B3F47] text-lg font-bold leading-tight pb-1">
                What we<br />are dishing out?
              </p>
            </div>
          </div>
          </div>


          
        </div>

        <div className="hidden md:block w-px bg-gray-500/20 mx-2 self-stretch"></div>

        <div className="md:w-2/5 mt-8 md:mt-2 z-10 md:pl-6">
          <div className="flex gap-6 mb-1">
            <h2 className="text-[#0B3F47] text-5xl font-bold">3.73</h2>
            <div className="flex space-x-1 flex-col">
              <div className='flex'>
              {[1, 2, 3, 4, 5].map((star) => (
                <svg
                  key={star}
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <Star className='' />
                </svg>
              ))}
              </div>
              <p className="text-sm flex ml-auto text-[#0B3F47] mb-12">Based on 4,350 reviews.</p>
            </div>
          </div>


          {/* Category buttons */}
          <div className="grid grid-cols-2 gap-3">
            {categories.map((category, index) => (
              <button
                key={index}
                className="bg-transparent border border-[#0B3F47] rounded-full py-2 text-[#0B3F47] font-medium text-xs hover:bg-[#0B3F47] hover:text-white transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 