import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Colecao() {
  const [categorias, setCategorias] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Usar useEffect para carregar as categorias da API quando o componente é montado
  useEffect(() => {
    // Requisição para a API
    axios.get('http://localhost:8080/api/categorias')
      .then((response) => {
        // Supondo que o backend retorne um array de categorias
        setCategorias(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Erro ao carregar as categorias:', err);
        setError('Erro ao carregar as categorias');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Carregando categorias...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      {categorias.map((categoria) => (
        <div key={categoria.idCategoria}>
          <Link to={`/categoria/${categoria.idCategoria}`}>
            <div>{categoria.nome}</div>
          </Link>
        </div>
      ))}
    </div>
  );
}
