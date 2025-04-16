"use client"

import { ChevronRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const HeroSection = () => {
    return (
        <div className='bg-white w-full mt-8  mx-auto rounded-lg py-6'>
            <div className='flex flex-wrap gap-4 justify-center mt-8 text-7xl md:text-8xl text-center font-sans font-extrabold  '>
                <div className='relative w-fit'>
                    BAKE
                    <span className='absolute top-8 -right-5 -skew-3 text-sm bg-green-800 rounded-full px-4 py-1 text-white'> TASTY</span>
                </div>
                <div>
                    THE
                </div>
                <div className='relative w-fit'>
                    COOKIES
                    <span className='absolute top-8 right-18 text-sm bg-orange-500 rounded-full px-2 py-1 text-white'> CRUNCHY</span>
                </div>
            </div>


            <div className='w-full mt-4 flex flex-wrap-reverse gap-4 justify-evenly items-center'>
                <div className='max-w-[350px] py-8  font-extrabold  w-full '>
                    <div className='uppercase font-mono text-4xl relative leading-tight'>
                        Premium Bread and cookies made from scratch
                        <span className='text-sm ml-2 bottom-0 absolute skew-3 bg-blue-400 rounded-full px-4 py-1 text-white'>
                            <span className='sr-only h-4 w-4 bg-white rounded-full'></span> Fresh</span>
                    </div>

                    <p className="text-lg font-normal font-sans mt-6">We are more literally obsessed with more what you love.</p>

                    <div className='flex items-center mt-4 gap-4'>
                        <button className='bg-yellow-300 cursor-pointer border-black border-2  px-4 py-2 rounded-full text-[#351411]'>
                            Order now
                        </button>

                        <Link href={"/blog"} className='uppercase flex items-center hover:underline font-bold font-mono'>Cooking blog <ChevronRight /></Link>
                    </div>
                </div>

                <div className="max-w-[350px] w-full rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="relative h-64 w-full mt-4 bg-yellow-400">
                        <Image
                            src="/bread.png"
                            width={350}
                            height={450}
                            alt="Freshly baked artisan bread on a wooden board"
                            className="w-full h-full object-cover overflow-x-hidden"
                            loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-red-50/50 to-transparent"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection
