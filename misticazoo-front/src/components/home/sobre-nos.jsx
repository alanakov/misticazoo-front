import React from 'react'
import Titulo from '../titulo'
import CardSobreNos from './card-sobre-nos'

export default function SobreNos() {
    return (
        <div className='bg-roxo p-10 pb-[100px]'>
            <img className='absolute opacity-25 right-0' src='img/dragao-sobre-nos.webp' alt='Dragão' />
            <Titulo className='my-24' t1={'Sobre'} t2={'nós'} color={'white'} />

            <CardSobreNos numero={'01.'} descricao={'Nossa loja é dedicada exclusivamente a animais místicos, oferecendo uma seleção única de criaturas lendárias que prometem encantar e inspirar. Cada ser mágico em nossa coleção é escolhido com carinho'} />
            <CardSobreNos numero={'02.'} descricao={'Acreditamos que cada criatura tem uma história para contar e um mundo de fantasia para explorar. Nossa missão é proporcionar uma experiência mágica, onde os amantes do fantástico podem encontrar o companheiro perfeito para suas aventuras. Cada animal místico não é apenas um produto; é um convite a um universo de imaginação, onde os sonhos ganham vida.'} />
            <CardSobreNos numero={'03.'} descricao={'Venha explorar nosso site e deixe-se levar pela magia! Aqui, você encontrará não apenas criaturas incríveis, mas também uma comunidade de sonhadores e amantes da fantasia. Junte-se a nós e crie sua própria história mágica!'} />
        </div>
    )
}
