import { Button } from 'react-bootstrap';

function Notfound(){
    return(
        <main>
            <h1>Página não encontrada. 404.</h1>
            <Button  variant="secondary" NavLink href="/"> 
                Volta para Inicio
            </Button>
        </main>
        
    );
}

export default Notfound;