'use client'

import { Minus, Quote } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const BakeryShowcase = () => {
    return (
        <div className='w-full flex flex-col gap-6 lg:flex-row justify-evenly items-center mx-auto mt-8'>
            <div className=' flex justify-evenly gap-4 items-center'>
                <div className='max-h-56 h-full max-w-56 w-full rounded-4xl bg-[#f7d8ad] overflow-hidden'>
                    <Image src={'/cookie1.png'} alt='cookie-1' width={224} height={224} className='' />
                </div>

                <div className='flex flex-col justify-between relative gap-4'>
                    <div className='bg-[#559a6b] h-28  -left-4 relative w-28  rounded-4xl ml-auto flex'>
                        <Image src={'/breadInBasket.png'} alt='cookie-1' width={112} height={112} className='absolute -top-5 -left-2' />
                        <Image src={'/breadInBasket.png'} alt='cookie-1' width={112} height={112} className='z-40' />
                    </div>
                    <div className='bg-[#83481d] justify-between rounded-4xl px-4 py-4 flex w-72 flex-col h-56 '>
                        <h2 className='text-3xl font-mono font-bold uppercase text-[#f4eae8]'>Taste the real wheat baked items</h2>

                        <div className='flex justify-between items-center'>
                            <span className='text-3xl uppercase font-bold font-mono text-orange-400'>$16</span>
                            <Image src={'/bread.png'} alt='bread' width={112} height={112} className='z-40' />
                        </div>

                    </div>
                </div>
            </div>

            <div className='flex flex-col lg:ml-auto'>
                <div className="relative w-64 h-56 rounded-3xl bg-yellow-400 overflow-hidden">
                    <Image
                        src="/chef.png"
                        alt="chef"
                        width={224}
                        height={300}
                        className="absolute inset-0 object-cover"
                    />
                </div>

                <div className=' w-full'>
                    <Quote className='text-[#83481d] ' />
                   <p className='font-2xl font-bold font-sans max-w-72'> Baking is a craft in itself, and we bake these delecious  and cumbly flavours bakery items.
                   <span className='flex mt-4 items-center text-lg justify-end' >
                    <Minus className='text-bold'/>
                   Ashton Cooper
                   </span>
                   </p>

                </div>
            </div>
        </div>
    )
}

export default BakeryShowcase
