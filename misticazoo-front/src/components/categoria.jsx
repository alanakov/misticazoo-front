import React, { useState, useEffect } from 'react'; 
import { useParams } from 'react-router-dom'; 
import { Row, Col, Modal } from 'antd';
import axios from 'axios';
import Titulo from './titulo';
import CardAnimalCategoria from './card-animal-categoria';

export default function Categoria() {
  const { idCategoria } = useParams(); 
  const [itens, setItens] = useState([]);
  const [categoria, setCategoria] = useState(null);
  const [error, setError] = useState(null);
  
  // Estado para Modal
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    if (!idCategoria) {
      setError('Erro: idCategoria ausente');
      return;
    }

    axios.get(`http://localhost:8080/api/categorias/${idCategoria}/itens`)
      .then(response => {
        setItens(response.data);
      })
      .catch(error => {
        console.error('Erro ao carregar os itens:', error);
        setError('Erro ao carregar os itens da categoria');
      });

    axios.get(`http://localhost:8080/api/categorias/${idCategoria}`)
      .then(response => {
        setCategoria(response.data.nome); 
      })
      .catch(error => {
        console.error('Erro ao carregar a categoria:', error);
        setError('Erro ao carregar a categoria');
      });
  }, [idCategoria]);

  if (error) {
    return <div>{error}</div>;
  }

  // Função para abrir o Modal
  const handleCardClick = (item) => {
    setSelectedItem(item);
    setIsModalVisible(true);
  };

  // Função para fechar o Modal
  const handleCloseModal = () => {
    setIsModalVisible(false);
    setSelectedItem(null);
  };

  return (
    <div className='flex flex-col items-center justify-center mx-auto px-10'>
      <Titulo t2={categoria || 'Categoria'} className='my-10' />
      <Row gutter={[16, 16]} style={{ maxWidth: '1200px' }}>
        {itens.map((item) => (
          <Col lg={8} key={item.idItem}>
            <CardAnimalCategoria 
              nome={item.nome} 
              preco={item.preco} 
              imagemUrl={item.imagemUrl} 
              onClick={() => handleCardClick(item)} // Pass item details on click
            />
          </Col>
        ))}
      </Row>

      {/* Modal */}
      {selectedItem && (
        <Modal
          title={selectedItem.nome}
          visible={isModalVisible}
          onCancel={handleCloseModal}
          footer={null}
        >
          <img 
            src={selectedItem.imagemUrl} 
            alt={selectedItem.nome} 
            style={{ width: '100%', borderRadius: '8px', marginBottom: 10 }}
          />
          <p><strong>Descrição:</strong> {selectedItem.descricao}</p>
          <p><strong>Características:</strong> {selectedItem.caracteristicas}</p>
          <p><strong>Cuidados:</strong> {selectedItem.cuidados}</p>
          
        </Modal>
      )}
    </div>
  );
}
