import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdicionarFilme from "./pages/AdicionarFilme";
import EditarFilme from "./pages/EditarFilme";
import Catalogo from "./pages/Catalogo";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import NotFound from "./pages/NotFound";
import Menu from './components/Menu';
import Ajuda from './pages/Ajuda';
import Privacidade from './pages/Privacidade';
import Contato from './pages/Contato';
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
    <div className='App d-flex flex-column min-vh-100'>
      <UsuarioContext.Provider value={usuarioLogado}>
        <BrowserRouter>

          <Routes>
            <Route path="/" element={<Layout> <Home /></Layout>} />
            <Route path="/filmes/adicionar" element={<Layout> <AdicionarFilme /></Layout>} />
            <Route path="/filmes/editar/:id" element={<Layout> <EditarFilme /></Layout>} />
            <Route path="/filmes" element={<Layout><Catalogo /></Layout>} />
            <Route path='/login' element={<Layout><Login /></Layout>} />
            <Route path='/cadastro' element={<Layout><Cadastro /></Layout>} />
            <Route path='/ajuda' element={<Layout><Ajuda /></Layout>} />
            <Route path='/privacidade' element={<Layout><Privacidade /></Layout>} />
            <Route path='/contato' element={<Layout><Contato /></Layout>} />
            <Route path="*" element={<Layout><NotFound /></Layout>} />
          </Routes>

        </BrowserRouter>
        <Toaster position="bottom-rigth" />
      </UsuarioContext.Provider >
    </div>
  );

}


function Layout({ children }) {
  return (
    <div className="d-flex flex-column flex-grow-1">
      <Menu />
      <main className="flex-grow-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default App
