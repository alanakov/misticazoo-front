import React, { useState } from 'react';
import Titulo from '../titulo';

export default function Moedas() {
    const [valorReal, setValorReal] = useState(); // Estado para o valor em Reais (formatado)
    const [valorNexum, setValorNexum] = useState(); // Estado para o valor em Nexum

    // Formata o valor como moeda BRL
    const formatarMoeda = (valor) => {
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        }).format(valor);
    };

    const handleNexumChange = (e) => {
        const nexum = e.target.value;

        // Validação para não aceitar valores negativos ou campos vazios
        if (nexum < 0 || nexum === '') {
            setValorReal('0,00');
            setValorNexum('');
            return;
        }

        setValorNexum(nexum);
        const reais = nexum * 678;
        setValorReal(formatarMoeda(reais)); // Atualiza o valor formatado
    };

    return (
        <div className='flex justify-center my-28'>
            <div className='border-2 border-[#7c48ff] rounded-3xl py-12 px-48'>
                <Titulo className='my-12 pb-4' t1={'Conversor de'} t2={'moedas'} />
                <p className='text-center pb-2 text-gray-500'>Nós utilizamos a moeda Nexum. Faça a conversão abaixo:</p>
                <div className='flex flex-col'>
                    <input
                        type="text"
                        value={valorReal}
                        readOnly
                        placeholder='    1                                                                         Real Brasileiro'
                        className='bg-gray-300 p-4 rounded-3xl my-1 placeholder-[#58565B]'
                    />
                    <input
                        type="number"
                        value={valorNexum}
                        onChange={handleNexumChange}
                        placeholder='    678                                                                                Nexum'
                        className='bg-gray-300 p-4 rounded-3xl my-1 placeholder-[#58565B]'
                        min="0"
                    />
                </div>
            </div>
        </div>
    );
}
