import React, { useEffect, useState } from 'react';
import { Card, Row, Col } from 'antd';
import { RiCopperCoinFill } from 'react-icons/ri'; 
import axios from 'axios';

const { Meta } = Card;

const ItemCards = () => {
  const [itens, setItens] = useState([]);

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
  

  return (
    <Row gutter={[16, 16]} justify="center mt-8">
      {itens.map((item) => (
        <Col xs={24} sm={12} md={8} lg={6} key={item.idItem}>
          <Card
            hoverable
            style={{ width: 340 }}
            cover={<img alt={item.nome} src={item.imagemUrl} style={{ height: 200, objectFit: 'cover' }} />}
          >
            <Meta
              title={<span style={{ fontFamily: 'Arial', fontWeight: 600, fontSize: 18 }}>{item.nome}</span>}
              description={
                <span className='flex items-center'>
                  <RiCopperCoinFill className='mt-1' /> 
                  R$ {item.preco}
                </span>
              }
            />
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default ItemCards;
