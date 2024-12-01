import React, { useEffect, useState } from 'react';
import { Card, Row, Col, Modal } from 'antd';
import { RiCopperCoinFill } from 'react-icons/ri'; 
import axios from 'axios';

const { Meta } = Card;

const CardAnimal = () => {
  const [itens, setItens] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8080/api/itens')
      .then(response => {
        console.log(response.data);
        setItens(response.data); 
      })
      .catch(error => {
        console.error('Erro ao carregar os itens:', error);
      });
  }, []);

  const handleCardClick = (item) => {
    setSelectedItem(item);
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
    setSelectedItem(null);
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
              onClick={() => handleCardClick(item)} // Evento de clique no card
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
            </Card>
          </Col>
        ))}
      </Row>

      {/* Modal para exibir detalhes */}
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
            style={{ width: '100%', borderRadius: '8px', marginTop: 10, marginBottom: 10 }}
          />
          <p><strong>Descrição:</strong> {selectedItem.descricao}</p>
          <p><strong>Características:</strong> {selectedItem.caracteristicas}</p>
          <p><strong>Cuidados:</strong> {selectedItem.cuidados}</p>
          
        </Modal>
      )}
    </div>
  );
};

export default CardAnimal;
