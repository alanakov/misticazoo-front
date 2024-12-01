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
          </Card>
        </Col>
      ))}
    </Row>
    </div>
  );
};

export default ItemCards;
