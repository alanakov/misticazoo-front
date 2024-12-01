import React from 'react';
import { Modal, Input, InputNumber, Select, Button, notification } from 'antd';

const ModalEditarAnimal = ({ visible, onCancel, onSave, item, isEditing }) => {
  const handleFormSubmit = () => {
    onSave(item);
  };

  return (
    <Modal
      title={isEditing ? `Editar ${item.nome}` : 'Cadastrar Animal'}
      visible={visible}
      onCancel={onCancel}
      footer={null}
    >
      <form onSubmit={(e) => { e.preventDefault(); handleFormSubmit(); }}>
        <div style={{ marginBottom: '16px' }}>
          <Input
            value={item.nome}
            onChange={(e) => onSave({ ...item, nome: e.target.value })}
            placeholder="Nome do animal"
          />
        </div>
        <div style={{ marginBottom: '16px' }}>
          <Input
            value={item.imagemUrl}
            onChange={(e) => onSave({ ...item, imagemUrl: e.target.value })}
            placeholder="URL da imagem"
          />
        </div>
        <div style={{ marginBottom: '16px' }}>
          <Input.TextArea
            value={item.descricao}
            onChange={(e) => onSave({ ...item, descricao: e.target.value })}
            placeholder="Descrição"
          />
        </div>
        <div style={{ marginBottom: '16px' }}>
          <Input.TextArea
            value={item.caracteristicas}
            onChange={(e) => onSave({ ...item, caracteristicas: e.target.value })}
            placeholder="Características"
          />
        </div>
        <div style={{ marginBottom: '16px' }}>
          <Input.TextArea
            value={item.cuidados}
            onChange={(e) => onSave({ ...item, cuidados: e.target.value })}
            placeholder="Cuidados"
          />
        </div>
        <div style={{ marginBottom: '16px' }}>
          <Select
            value={item.raridade}
            onChange={(value) => onSave({ ...item, raridade: value })}
            style={{ width: '100%' }}
          >
            <Select.Option value="comum">Comum</Select.Option>
            <Select.Option value="raro">Raro</Select.Option>
            <Select.Option value="lendario">Lendário</Select.Option>
          </Select>
        </div>
        <div style={{ marginBottom: '16px' }}>
          <InputNumber
            value={item.preco}
            onChange={(value) => onSave({ ...item, preco: value })}
            min={0}
            style={{ width: '100%' }}
            placeholder="Preço"
          />
        </div>
        <div style={{ marginBottom: '16px' }}>
          <InputNumber
            value={item.estoque}
            onChange={(value) => onSave({ ...item, estoque: value })}
            min={0}
            style={{ width: '100%' }}
            placeholder="Estoque"
          />
        </div>
        <div style={{ marginTop: '16px' }}>
          <Button 
            type="primary" 
            htmlType="submit"
            block
          >
            {isEditing ? 'Salvar Alterações' : 'Cadastrar Animal'}
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default ModalEditarAnimal;
