import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdicionarFilme from "./pages/AdicionarFilme";
import EditarFilme from "./pages/EditarFilme";
import Catalogo from "./pages/Catalogo";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
// import NotFound from "./pages/NotFound";
// import Menu from './components/Menu';
// import Footer from './components/Rodape';
import { Toaster } from 'react-hot-toast';

function App() {


  return (
    <>
      <BrowserRouter>
        {/* <Menu /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/filmes/adicionar" element={<AdicionarFilme />} />
          <Route path="/filmes/editar/:id" element={<EditarFilme />}/>
          <Route path="/filmes" element={<Catalogo />} />
          <Route path='/login' element={<Login />} />
          <Route path='/cadastro' element={<Cadastro />} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
      <Toaster position="bottom-rigth" />
    </>
  )
}

export default App