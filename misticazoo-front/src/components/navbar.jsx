// src/components/Navbar.js
import React from 'react';
import { IoAddCircleSharp } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import ModalCriarAnimal from './modal-criar-animal';

const Navbar = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleOpenModal = () => {
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  return (
    <nav className="bg-roxo text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-black bg-gradient-to-l from-[#2600FC] to-[#FF00EA] bg-clip-text text-transparent">MisticaZoo</h1>
        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="hover:text-[#dbc4fb] font-medium">Home</Link>
          </li>
          <li>
            <Link to="/#sobre-nos" className="hover:text-[#dbc4fb] font-medium">Sobre</Link>
          </li>
          <li>
            <Link to="/#moedas" className="hover:text-[#dbc4fb] font-medium">Moedas</Link>
          </li>
        </ul>
        <div className="flex items-center">
          <span className="font-semibold bg-[#4c1a926b] rounded-lg py-2 px-4 opacity-90">ADM</span>
          <button className="ml-1" onClick={handleOpenModal}>
            <IoAddCircleSharp className="size-8" />
          </button>
        </div>
      </div>
      
      <ModalCriarAnimal 
        isModalVisible={isModalVisible}
        handleCloseModal={handleCloseModal}
      />
    </nav>
  );
};

export default Navbar;
