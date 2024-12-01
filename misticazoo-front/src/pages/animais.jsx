import React from 'react'
import CardAnimal from '../components/card-animal'
import Titulo from '../components/titulo'

export default function Animais() {
  return (
    <div className='mb-24'>
        <Titulo t1={"Explore todos os nossos"} t2={"animais"} className='my-20'/>
        <CardAnimal />
    </div>
  )
}
