import React from 'react';

export default function Titulo({ t1, t2, color, className = '' }) {
    return (
        <div className={`flex justify-center my-32 ${className}`}>
            <h2 className={`text-5xl font-bold ${color === 'white' ? 'text-white' : 'text-black'}`}>
                {t1}
            </h2>
            <h2 className='text-5xl font-bold px-2 bg-gradient-to-l from-[#2600FC] to-[#FF00EA] bg-clip-text text-transparent'>
                {t2}
            </h2>
        </div>
    );
}
