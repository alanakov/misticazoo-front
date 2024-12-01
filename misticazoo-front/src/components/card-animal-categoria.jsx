import React from 'react';
import { Card, Button } from 'antd';
import { RiCopperCoinFill } from 'react-icons/ri';
import { MdDelete, MdEdit } from 'react-icons/md';

const { Meta } = Card;

const CardAnimalCategoria = ({ nome, preco, imagemUrl, onClick, onEdit, onDelete }) => {
  const handleEditClick = (e) => {
    e.stopPropagation(); // Impede que o click se propague para o onClick do Card
    onEdit(); // Chama a função onEdit
  };

  const handleDeleteClick = (e) => {
    e.stopPropagation(); // Impede que o click se propague para o onClick do Card
    onDelete(); // Chama a função onDelete
  };

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
      onClick={onClick}
    >
      <Meta
        title={<span style={{ fontFamily: 'Arial', fontWeight: 600, fontSize: 18 }}>{nome}</span>}
        description={
          <div>
            <span className='flex items-center'>
              <RiCopperCoinFill className='mt-1' /> 
              {preco}
            </span>
            <div style={{ marginTop: 10, display: 'flex', justifyContent: 'flex-end' }}>
              <Button 
                type="primary" 
                onClick={handleEditClick} 
                style={{ marginRight: 10 }}
              >
                <MdEdit />
              </Button>
              <Button 
                type="danger" 
                onClick={handleDeleteClick} 
              >
                <MdDelete />
              </Button>
            </div>
          </div>
        }
      />
    </Card>
  );
};

export default CardAnimalCategoria;
