import React, { useState, useEffect } from 'react'; 
import { useParams } from 'react-router-dom'; 
import { Row, Col, Modal, notification } from 'antd';
import axios from 'axios';
import Titulo from './titulo';
import CardAnimalCategoria from './card-animal-categoria';
import ModalEditarAnimal from './modal-editar-animal';

export default function Categoria() {
  const { idCategoria } = useParams(); 
  const [itens, setItens] = useState([]);
  const [categoria, setCategoria] = useState(null);
  const [error, setError] = useState(null);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isEditing, setIsEditing] = useState(false); 

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

  const handleCardClick = (item) => {
    setSelectedItem(item);
    setIsModalVisible(true);
    setIsEditing(false); 
  };

  const handleEditClick = (item) => {
    setSelectedItem(item);
    setIsModalVisible(true);
    setIsEditing(true); 
  };

  const handleDeleteClick = (itemId) => {
    axios.delete(`http://localhost:8080/api/itens/${itemId}`)
      .then(response => {
        setItens(itens.filter(item => item.idItem !== itemId)); 
        notification.success({
          message: 'Sucesso',
          description: 'Animal excluído com sucesso!',
        });
      })
      .catch(error => {
        console.error('Erro ao excluir o item:', error);
        notification.error({
          message: 'Erro',
          description: 'Não foi possível excluir o animal!',
        });
      });
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
    setSelectedItem(null);
    setIsEditing(false);
  };

  const handleSaveChanges = (updatedItem) => {
    const request = isEditing 
      ? axios.put(`http://localhost:8080/api/itens/${selectedItem.idItem}`, updatedItem)
      : axios.post('http://localhost:8080/api/itens', updatedItem);

    request.then(response => {
      setItens(prevItens => isEditing 
        ? prevItens.map(item => (item.idItem === selectedItem.idItem ? response.data : item))
        : [...prevItens, response.data]);

      notification.success({
        message: 'Sucesso',
        description: isEditing ? 'Animal editado com sucesso!' : 'Animal cadastrado com sucesso!',
      });
      handleCloseModal();
    })
    .catch(error => {
      console.error('Erro ao cadastrar ou editar o animal:', error);
      notification.error({
        message: 'Erro',
        description: `Não foi possível ${isEditing ? 'editar' : 'cadastrar'} o animal.`,
      });
    });
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
              onClick={() => handleCardClick(item)} 
              onEdit={() => handleEditClick(item)}
              onDelete={() => handleDeleteClick(item.idItem)} 
            />
          </Col>
        ))}
      </Row>

      {selectedItem && (
        <ModalEditarAnimal
          visible={isModalVisible} 
          onCancel={handleCloseModal} 
          onSave={handleSaveChanges} 
          item={selectedItem} 
          isEditing={isEditing}
        />
      )}
    </div>
  );
}
