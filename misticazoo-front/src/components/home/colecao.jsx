import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardColecao from './card-colecao';
import Titulo from '../titulo';
import { GoArrowUpRight } from 'react-icons/go';
import { useNavigate } from 'react-router-dom';

export default function Colecao() {
  const [categorias, setCategorias] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:8080/api/categorias')
      .then((response) => {
        setCategorias(response.data);
      })
      .catch((err) => {
        console.error('Erro ao carregar as categorias:', err);
        setError('Erro ao carregar as categorias');
      });
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <Titulo t1={"Conheça nossa"} t2={"coleção"} className='my-32' />
    <div className="flex justify-center space-x-14 my-24">

      {categorias.map((categoria) => (
        <CardColecao className='hover:scale-110'
          key={categoria.idCategoria}
          idCategoria={categoria.idCategoria}
          nomeColecao={categoria.nome}
          imagem={categoria.imagemUrl}
        />
      ))}
    </div>
    <div className='flex justify-center mb-24'>
                <button className='bg-gradient-to-l from-[#2600FC] to-[#FF00EA] text-white px-6 py-4 flex rounded-3xl font-medium' onClick={() => navigate('/animais')}>Explorar toda coleção <GoArrowUpRight /></button>
            </div>
    </div>
  );
}
