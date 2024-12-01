import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // Para pegar o idCategoria da URL
import axios from 'axios';

export default function Categoria() {
  const { idCategoria } = useParams(); 
  const [itens, setItens] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!idCategoria) {
      setError('Erro: idCategoria ausente');
      setLoading(false);
      return;
    }

    axios.get(`http://localhost:8080/api/categorias/${idCategoria}/itens`)
      .then(response => {
        setItens(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Erro ao carregar os itens:', error);
        setError('Erro ao carregar os itens da categoria');
        setLoading(false);
      });
  }, [idCategoria]);

  if (loading) {
    return <div>Carregando itens...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h2>Itens da Categoria {idCategoria}</h2>
      <ul>
        {itens.map(item => (
          <li key={item.idItem}>
            <img src={item.imagemUrl} alt={item.nome} style={{ width: '100px', height: '100px' }} />
            <h3>{item.nome}</h3>
            <p>{item.descricao}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
