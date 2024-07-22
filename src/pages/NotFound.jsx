import { Button } from 'react-bootstrap';
import logo from "../../public/images/logo-imagem.jpg";

function Notfound(){
    return(
        <main>
            <h1>Página não encontrada. 404.</h1>
            <Button  variant="secondary" NavLink href="/"> 
                Volta para Inicio
            </Button>
            <div className="imagem-notfound">
                <img src={logo} alt="Imagem do emoji triste"/>
            </div>
        </main>
        
    );
}

export default Notfound;