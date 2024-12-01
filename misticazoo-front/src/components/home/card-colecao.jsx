import React from 'react';
import { Link } from 'react-router-dom';

const CardColecao = ({ imagem, nomeColecao, idCategoria, className }) => {
  return (
    <Link to={`/categoria/${idCategoria}`}>
      <div className={`card ${className} transition-transform duration-300`}>
        <img src={imagem} alt={nomeColecao} />
        <h3 className='text-center text-2xl font-bold mt-2'>{nomeColecao}</h3>
      </div>
    </Link>
  );
};

export default CardColecao;
