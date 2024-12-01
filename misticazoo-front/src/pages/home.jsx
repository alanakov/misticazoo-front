import React from 'react'
import Banner from '../components/home/banner';
import Colecao from '../components/home/colecao';
import SobreNos from '../components/home/sobre-nos';
import Moedas from '../components/home/moedas';

export default function Home() {
    return (
        <>
            <Banner />
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


