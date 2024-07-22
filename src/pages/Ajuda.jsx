import { Accordion, Alert, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Ajuda() {

    return (
        <main className="mt-4">
            <Container>
                <h1>Ajuda</h1>
                <hr />
                <Accordion alwaysOpen>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>o que é o Já vi?</Accordion.Header>
                        <Accordion.Body>
                            <p>
                                Este é uma biblioteca pessoal para catálogar os filmes que você já assistiu, ou deseja assistir. Você pode adicionar, editar e excluir. Além disso, você pode marcar os filmes como favoritos, filtrar por categoria e avaliar.
                            </p>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Como foi criado este site?</Accordion.Header>
                        <Accordion.Body>
                            <p>
                                Este site SPA é parte de um curso da Soulcode Academy, onde foi utilizado React, Bootstrap, Firebase e outras tecnologias. O site foi criado para fins educacionais e não possui fins lucrativos.
                            </p>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Terão mais funcionalidades no futuro?</Accordion.Header>
                        <Accordion.Body>
                            <p>
                                Sim, além de um sistema de avaliação, pretendemos adicionar um sistema de comentários, recomendações e um sistema de busca mais avançado.
                            </p>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                <hr />
                <Alert className="mt-5 me-1 pt-10 text-center" variant="warning">Em manutenção. Ficou com mais alguma dúvida? tem alguma sugestão? Entre em contato conosco abaixo</Alert>
                <section className="botoes ms-auto">
                    <Button className="mt-1 me-1" variant="outline-light" as={Link} to='/' >Inicio</Button>
                    <Button className="mt-1 me-1" variant="outline-light" as={Link} to='/contato' >Entre em contato</Button>
                </section>
            </Container>
        </main>
    );
}