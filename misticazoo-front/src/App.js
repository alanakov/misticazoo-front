import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/home';
import Categoria from './components/categoria';
import Animais from './pages/animais';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categoria/:idCategoria" element={<Categoria />} />
        <Route path="/animais" element={<Animais />} />
      </Routes>
    </Router>
  );
};

export default App;
