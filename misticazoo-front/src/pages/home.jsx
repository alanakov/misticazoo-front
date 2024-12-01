import React from 'react'
import Banner from '../components/home/banner';
import Colecao from '../components/home/colecao';
import SobreNos from '../components/home/sobre-nos';
import Moedas from '../components/home/moedas';
import CardAnimal from '../components/card-animal';

export default function Home() {
    return (
        <>
            <Banner />
            <CardAnimal/>
            <section id='colecao'>
                <Colecao />
            </section>
            <section id='sobre-nos'>
                <SobreNos />
            </section>
            <section id='moedas'>
                <Moedas />
            </section>
        </>
    )
}


