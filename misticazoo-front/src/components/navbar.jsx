import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
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
                        <Link to="/moedas" className="hover:text-[#dbc4fb] font-medium">Moedas</Link>
                    </li>
                </ul>
                <h2 className='font-semibold bg-[#4c1a926b] rounded-lg py-2 px-4 opacity-90'>ADMINISTRADOR</h2>
            </div>
        </nav>
    );
};

export default Navbar;
