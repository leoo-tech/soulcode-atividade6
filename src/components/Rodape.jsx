import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

function Rodape() {

    return (
        <footer className="rodape py-2 text-white">
            <Container fluid>
                <Row>
                    <Col md={12} className="text-center text-md-center">
                        <p> © 2024 Todos os direitos reservados. Miriam Akiko, Leonardo Costa e William Amós </p> <hr />
                        <Link to='/privacidade' style={{ textDecoration: 'none', color: 'whitesmoke' }}>Política de Privacidade</Link>
                    </Col>
                </Row>
            </Container>
        </footer>
    );

}


export default Rodape;


/* 
        <footer className="mt-5 py-1 bg-dark text-white">
            <Container fluid>
                <Row>
                    <Col md={12} className="text-center text-md-center">
                        <p>Desenvolvido por: Leonardo</p>
                        <p>&copy;React Bootstrap - 2024</p>
                        <Link to='/privacidade' style={{ textDecoration: 'none', color: 'whitesmoke' }}>
                            Política de Privacidade
                        </Link>
                    </Col>
                </Row>
            </Container>
        </footer> */