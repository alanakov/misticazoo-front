import React, { useEffect, useState } from 'react';
import { Modal, Form, Input, Button, Select, InputNumber, notification, Row, Col } from 'antd';
import axios from 'axios';

const ModalCriarAnimal = ({ isModalVisible, handleCloseModal }) => {
  const [categorias, setCategorias] = useState([]);  

  useEffect(() => {
    axios.get('http://localhost:8080/api/categorias')
      .then(response => {
        setCategorias(response.data);  // Preenche o estado com as categorias recebidas
      })
      .catch(error => {
        console.error('Erro ao buscar categorias:', error);
        notification.error({
          message: 'Erro',
          description: 'Não foi possível carregar as categorias!',
        });
      });
  }, []);

  const handleFormSubmit = (values) => {
    console.log('Dados enviados para a API:', values);
    axios.post('http://localhost:8080/api/itens', values)
      .then(response => {
        notification.success({
          message: 'Sucesso',
          description: 'Animal cadastrado com sucesso!',
        });
        handleCloseModal(); // Fecha o modal após o envio
      })
      .catch(error => {
        console.error('Erro ao cadastrar o animal:', error.response); 
        notification.error({
          message: 'Erro',
          description: `Não foi possível cadastrar o animal: ${error.response ? error.response.data : 'Erro desconhecido'}`,
        });
      });
  };

  return (
    <Modal
      title="Cadastrar Animal"
      open={isModalVisible} 
      onCancel={handleCloseModal}
      footer={null}
    >
      <Form
        layout="vertical"
        onFinish={handleFormSubmit}
      >
        <Form.Item
          label="Nome do Animal"
          name="nome"
          rules={[{ required: true, message: 'Por favor, insira o nome do animal!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Categoria"
          name="idCategoria"
          rules={[{ required: true, message: 'Por favor, selecione a categoria do animal!' }]}
        >
          <Select
            placeholder="Selecione a categoria"
          >
            {categorias.map(categoria => (
              <Select.Option key={categoria.idCategoria} value={categoria.idCategoria}>
                {categoria.nome}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
          label="Imagem URL"
          name="imagemUrl"
          rules={[{ required: true, message: 'Por favor, insira a URL da imagem!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Descrição"
          name="descricao"
          rules={[{ required: true, message: 'Por favor, insira a descrição do animal!' }]}
        >
          <Input.TextArea />
        </Form.Item>

        <Form.Item
          label="Características"
          name="caracteristicas"
          rules={[{ required: true, message: 'Por favor, insira as características do animal!' }]}
        >
          <Input.TextArea />
        </Form.Item>

        <Form.Item
          label="Cuidados"
          name="cuidados"
          rules={[{ required: true, message: 'Por favor, insira os cuidados do animal!' }]}
        >
          <Input.TextArea />
        </Form.Item>

        <Form.Item
          label="Raridade"
          name="raridade"
          rules={[{ required: true, message: 'Por favor, insira a raridade do animal!' }]}
        >
          <Select
            placeholder="Selecione a raridade"
          >
            <Select.Option value="comum">Comum</Select.Option>
            <Select.Option value="raro">Raro</Select.Option>
            <Select.Option value="lendario">Lendário</Select.Option>
          </Select>
        </Form.Item>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label="Preço"
              name="preco"
              rules={[{ required: true, message: 'Por favor, insira o preço do animal!' }]}
            >
              <InputNumber min={0} style={{ width: '100%' }} />
            </Form.Item>
          </Col>
          
          <Col span={12}>
            <Form.Item
              label="Estoque"
              name="estoque"
              rules={[{ required: true, message: 'Por favor, insira a quantidade em estoque!' }]}
            >
              <InputNumber min={0} style={{ width: '100%' }} />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Cadastrar Animal
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default ModalCriarAnimal;
