import Menu from './components/Menu';
import Home from './pages/Home';
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import EditarFilme from "./pages/EditarFilme";
import Catalogo from "./pages/Catalogo";
import Notfound from "./pages/NotFound";
import { useState } from 'react';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import Rodape from './components/Rodape';

function App() {


  return (
    <>
        <BrowserRouter>
          <Menu/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element= {<Login />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/editarfilme" element= {<EditarFilme />} />
            <Route path="/catalogo" element= {<Catalogo />} />
            <Route path="*" element = {<Notfound />} />
          </Routes>
          <Rodape />
        </BrowserRouter>
    </>
  )
}

export default App;