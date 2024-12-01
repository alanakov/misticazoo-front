import React from 'react'
import { GoArrowUpRight } from 'react-icons/go'

export default function Banner() {
    return (
        <div className='relative'>
            <img src='/img/banner.png' alt='Banner MisticaZoo' />
            <div className='absolute bottom-20 left-[310px] '>
                <button className='bg-gradient-to-l from-[#2600FC] to-[#FF00EA] text-white px-6 py-4 flex rounded-3xl font-medium'>Explorar animais <GoArrowUpRight /></button>
            </div>
        </div>
    )
}
