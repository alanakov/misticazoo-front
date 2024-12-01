import React from 'react';
import { Card } from 'antd';
import { RiCopperCoinFill } from 'react-icons/ri';

const { Meta } = Card;

const CardAnimalCategoria = ({ nome, preco, imagemUrl, onClick }) => {
  return (
    <Card
      hoverable
      style={{ width: 340 }}
      cover={
        <img 
          alt={`Imagem do(a) ${nome}`} 
          src={imagemUrl} 
          style={{ height: 200, objectFit: 'cover' }} 
        />
      }
      onClick={onClick} // Handle click
    >
      <Meta
        title={<span style={{ fontFamily: 'Arial', fontWeight: 600, fontSize: 18 }}>{nome}</span>}
        description={
          <div>
            <span className='flex items-center'>
              <RiCopperCoinFill className='mt-1' /> 
              {preco}
            </span>
          </div>
        }
      />
    </Card>
  );
};

export default CardAnimalCategoria;
