/* pagina sobre politicas de privacidade. usando react bootstrap */
import { Accordion, Container } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Privacidade() {

    return (
        <main>
            <Container>
                <h1>Política de Privacidade</h1>
                <Accordion alwaysOpen>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>1. Coleta de dados</Accordion.Header>
                        <Accordion.Body>
                            <p>
                                A coleta de dados é feita através de formulários de cadastro e
                                cookies. Os dados são armazenados de forma segura e não são
                                compartilhados com terceiros.
                            </p>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>2. Uso de dados</Accordion.Header>
                        <Accordion.Body>
                            <p>
                                Os dados coletados são utilizados para fins de análise de
                                desempenho e melhoria do sistema. O usuário pode solicitar a
                                exclusão dos dados a qualquer momento.
                            </p>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>3. Cookies</Accordion.Header>
                        <Accordion.Body>
                            <p>
                                Cookies são arquivos de texto que armazenam informações sobre o
                                navegar. Eles são utilizados para melhorar a experiência do
                                usuário e não contêm informações pessoais.
                            </p>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                <Button className="mt-1 me-1" variant="outline-light" as={Link} to='/'>Início</Button>
            </Container>
        </main>
    );
}

// Compare this snippet from src/pages/Privacidade.jsx