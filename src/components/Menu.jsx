import { Link, useNavigate } from "react-router-dom";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import { logout } from "../firebase/auth";
import { useContext } from "react";
import { UsuarioContext } from "../contexts/UsuarioContext";

function Menu() {
    const usuario = useContext(UsuarioContext);
    const navigate = useNavigate();

    function handleLogout() {
        logout().then(() => {
            navigate("/login");
        });
    }

    return (
        <header>
            <Navbar className="inicio" expand="md">
                <Container fluid>
                    <Navbar.Toggle />
                    <Navbar.Brand>
                        <h1 className="text-white titulo">Já vi!</h1>
                    </Navbar.Brand>

                    <Navbar.Collapse>
                        <Nav className="ms-auto">
                            <Link to="/">
                                <span className="material-symbols-outlined icone-home">
                                    home
                                </span>
                            </Link>
                            <Link to="/ajuda">
                                <span className="material-symbols-outlined icone-ajuda">
                                    help
                                </span>
                            </Link>
                            <Link to="/contato">
                                <span className="material-symbols-outlined icone-contato">
                                    email
                                </span>
                            </Link>

                            {usuario && <span className="text-light nav-link">{usuario.displayName}</span>}
                            {!usuario &&
                                <Link
                                    className="nav-link text-light"
                                    to="/login">
                                    Login
                                </Link>}
                            {!usuario &&
                                <Link
                                    className="nav-link text-light"
                                    to="/cadastro">
                                    Cadastro
                                </Link>}
                            {usuario &&
                                <Link
                                    className="nav-link text-light"
                                    to="/filmes"
                                >
                                    Catalogo
                                </Link>}
                            {usuario &&
                                <Button variant="outline-light" onClick={handleLogout}>
                                    Sair
                                </Button>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );

}

export default Menu;
