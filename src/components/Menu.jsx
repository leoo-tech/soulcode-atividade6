import { Link, useNavigate } from "react-router-dom";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import { logout } from "../firebase/auth";



function Menu() {

    const navigate = useNavigate();

    function handleLogout(){
        logout().then(()=>{
            navigate("/login");
        });
    }

    return(
        <header>
              <Navbar className="inicio" expand="md">
                    <Container fluid> 
                        <Navbar.Toggle/>
                        <Navbar.Collapse>
                            <Nav className="ms-auto">
                               <Link to= "/">
                                    <span className="material-symbols-outlined icone-home">
                                       home
                                    </span>
                               </Link>
                                <Link
                                    className="nav-link inicio topo" 
                                    to="/login">
                                    Login
                                </Link>
                                    <Link 
                                    className="nav-link inicio topo" 
                                    to= "cadastro">
                                    Cadastro
                                </Link>
                                <Link  
                                    className="nav-link inicio topo" 
                                    to="/editarfilme">
                                    EditarFilme
                                </Link>
                                <Link  
                                    className="nav-link inicio topo" 
                                    to="/catalogo">
                                    Catalogo
                                </Link>
                                <Button variant="outline-light" onClick={handleLogout}>
                                Sair
                                </Button>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>  
        </header>
    );
  
}

export default Menu;
