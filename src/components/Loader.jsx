import { Container, Spinner } from "react-bootstrap";

function Loader() {
    return (
        <Container>
            <Spinner animation="border" variant="primary" />
            <span className="ms-1">Carregando...</span>
        </Container>
    );
}

export default Loader;