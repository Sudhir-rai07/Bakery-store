"use client"

import { Cookie } from 'lucide-react'
import React from 'react'

const AboutUs = () => {
    return (
        <div className='w-full mx-auto flex-col mt-8 flex md:flex-row justify-between items-center'>
            <div className='flex items-center justify-center'>
                <h2 className='text-3xl md:text-5xl font-mono uppercase font-extrabold'>why bekery&apos;s <Cookie className='bg-orange-500 h-10 w-10 rounded-full px-2 py-2 inline text-white' /> <br /> items is so special to customer?</h2>
            </div>
            <div
                className='flex items-baseline  gap-6'>
                <hr className='border-none h-[2px] w-20 bg-black' />
                <button
                    className="bg-yellow-300 uppercase flex items-center font-extrabold text-[#3a2125] text-lg mt-3 border-2 border-black rounded-full px-3 py-2 w-fit">
                    <span className="h-2 w-2 block mr-2 bg-white rounded-full"> </span>Shop now</button>
            </div>
        </div>
    )
}

export default AboutUs
