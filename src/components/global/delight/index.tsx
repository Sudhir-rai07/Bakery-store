"use client"

import Image from 'next/image'
import React from 'react'

const Delight = () => {
    return (
        <div className="w-full flex-wrap-reverse mx-auto flex items-center gap-6 py-6 mt-12 justify-evenly">
            <div className="max-w-[350px] w-full rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 relative">
                <div className="relative h-64 w-full mt-4">
                    <Image
                        src="/bread2.png"
                        width={350}
                        height={100}
                        alt="Freshly baked artisan bread on a wooden board"
                        className="w-full h-full object-cover z-10"
                        loading="lazy"
                    />

                    <div className="absolute z-50 w-24 h-24 -top-10 -left-10">
                        <svg viewBox="0 0 200 200" className="w-full h-full">
                            <defs>
                                <path
                                    id="circlePath"
                                    d="M100,100 m-75,0 a75,75 0 1,1 150,0 a75,75 0 1,1 -150,0"
                                />
                            </defs>
                            <text fill="black" className='font-semibold' fontSize="22" fontFamily="sans-serif" textLength="470">
                                <textPath href="#circlePath" startOffset="0%">
                                    FUN FOR THE WHOLE FAMILY •
                                </textPath>
                            </text>
                        </svg>

                        <div
                            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-yellow-300 rounded-full w-12 h-12 flex items-center justify-center text-xl"
                        >
                            🍪
                        </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-red-50/50 to-transparent"></div>

                </div>
            </div>

            <div className='max-w-[350px] mt-3 flex flex-col'>
                <h2 className='uppercase text-4xl font-extrabold font-mono leading-tight'>Your only 🍪 dose of delight</h2>

                <span className='text-lg font-semibold'>Featured item - </span>
                <div className='flex gap-4 items-center'>
                    <Image src={"/featured-bread.png"} width={100} height={10} className='object-cover rounded-lg' alt="Featured Cookie" />

                    <div className='font-normal flex flex-col'>
                        <span className='font-semibold'>Bagel buns</span>
                        <span>Gluten free</span>
                    </div>
                    <hr className='w-0.5 h-8 border-none bg-black' />
                    <span className='font-bold text-amber-950 text-3xl'>$16</span>
                </div>

                <p className='mt-4 font-semibold'>  All cookies should have a show stopping German chocolate cake in their repertoire and this this is one of our favourites.</p>
            </div>
        </div>
    )
}

export default Delight

