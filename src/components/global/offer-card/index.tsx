import { BadgePercent, Mail } from 'lucide-react'
import React from 'react'

const OfferCard = () => {
    return (
        <div className='w-full h-8 hidden md:grid bg-violet-500 text-white grid-cols-3 px-4'>
            <div className='justify-self-start flex items-center gap-1'>
                <span><BadgePercent className='text-yellow-500' /> </span>
                <span className='font-semibold'> 15% off </span>on
                <span className='font-semibold'>$100+ </span>purchase
            </div>
            <div className='justify-self-center flex items-center gap-1'>
                <span><Mail className='text-orange-300' /> </span>
                <span className='font-semibold'>Subscribe & Save 15% </span>
            </div>
            <div className='justify-self-end flex items-center gap-1'>
                <span><BadgePercent className='text-yellow-500' /> </span>
                <span className='font-semibold'> 15% off </span>on
                <span className='font-semibold'>$100+ </span>purchase
            </div>
        </div>
    )
}

export default OfferCard
