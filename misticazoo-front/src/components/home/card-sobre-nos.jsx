import React from 'react'
import Titulo from '../titulo'

export default function CardSobreNos({ numero, descricao }) {
    return (
        <div className='flex flex-col justify-center mx-[30%] my-10'>
            <div className='flex'>
                <div className='items-start mb-12'>
                    <Titulo className='my-12' t2={numero} />
                </div>
                <p className='text-start text-white'>{descricao}</p>
            </div>
        </div>
    )
}
