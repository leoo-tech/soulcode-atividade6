import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdicionarFilme from "./pages/AdicionarFilme";
import EditarFilme from "./pages/EditarFilme";
import Catalogo from "./pages/Catalogo";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import NotFound from "./pages/NotFound";
import Menu from './components/Menu';
import Footer from './components/Rodape';
import { Toaster } from 'react-hot-toast';
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/config";
import { UsuarioContext } from "./contexts/UsuarioContext"
import { Badge } from 'react-bootstrap';


function App() {

  const [usuarioLogado, setUsuarioLogado] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Monitora/detecta o usuário conectado/desconectado
    onAuthStateChanged(auth, (user) => {
      // user é nulo -> usuário deslogou
      // se tem objeto -> usuário logou
      setUsuarioLogado(user);
      setLoading(false);
    });
  }, []);

  if (loading) {
    // Este elemento será exibido enquanto a aplicação
    // estiver sendo carregada
    // se for null, não será exibido nada
    return <Badge variant="info">Carregando...</Badge>;
  }
  // Usuario.Provider é o elemento que irá compartilhar um valor/dado
  // para os componentes filhos da aplicação

  return (
    <>
      <UsuarioContext.Provider value={usuarioLogado}>
        <BrowserRouter>
          <Menu />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/filmes/adicionar" element={<AdicionarFilme />} />
            <Route path="/filmes/editar/:id" element={<EditarFilme />} />
            <Route path="/filmes" element={<Catalogo />} />
            <Route path='/login' element={<Login />} />
            <Route path='/cadastro' element={<Cadastro />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </BrowserRouter>
        <Toaster position="bottom-rigth" />
      </UsuarioContext.Provider >
    </>
  );
}

export default App
