import React, { useEffect, useState } from 'react';
import { Card, Row, Col, Button, notification } from 'antd';
import { RiCopperCoinFill } from 'react-icons/ri'; 
import axios from 'axios';
import ModalEditarAnimal from './modal-editar-animal';
import { MdDelete, MdEdit } from 'react-icons/md';

const { Meta } = Card;

const CardAnimal = () => {
  const [itens, setItens] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isEditing, setIsEditing] = useState(false); 

  useEffect(() => {
    axios.get('http://localhost:8080/api/itens')
      .then(response => {
        setItens(response.data);
      })
      .catch(error => {
        console.error('Erro ao carregar os itens:', error);
      });
  }, []);

  const handleCardClick = (item) => {
    setSelectedItem(item);
    setIsModalVisible(true);
    setIsEditing(false); // 
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

  const handleCloseModal = () => {
    setIsModalVisible(false);
    setSelectedItem(null);
    setIsEditing(false);
  };

  return (
    <div className='flex justify-center mx-10'>
      <Row gutter={[16, 16]} style={{ maxWidth: '1200px'}}>
        {itens.map((item) => (
          <Col lg={8} key={item.idItem}>
            <Card
              hoverable
              style={{ width: 340 }}
              cover={
                <img 
                  alt={`Imagem do(a) ${item.nome}`} 
                  src={item.imagemUrl} 
                  style={{ height: 200, objectFit: 'cover' }} 
                />
              }
            >
              <Meta
                title={<span style={{ fontFamily: 'Arial', fontWeight: 600, fontSize: 18 }}>{item.nome}</span>}
                description={
                  <span className='flex items-center'>
                    <RiCopperCoinFill className='mt-1' /> 
                    {item.preco}
                  </span>
                }
              />
              <div style={{ marginTop: 10, display: 'flex', justifyContent: 'flex-end' }}>
  <Button 
    type="primary" 
    onClick={() => handleEditClick(item)} 
    style={{ marginRight: 10 }}
  >
    <MdEdit />
  </Button>
  <Button 
    type="danger" 
    onClick={() => handleDeleteClick(item.idItem)} 
  >
    <MdDelete />
  </Button>
</div>
            </Card>
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
};

export default CardAnimal;
