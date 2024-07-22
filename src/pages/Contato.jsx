// pagina de contato. duvidas e sugestões para o site. nome, email, e uma caixa de texto para a mensagem. botão de enviar. bootstrap como estilização principal.

import { Container, Form, Button, Alert } from "react-bootstrap";
import { useState } from "react";
import { db } from "../firebase/config";
import { collection, addDoc } from "firebase/firestore";
import { Link } from "react-router-dom";

export default function Contato() {

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [erro, setErro] = useState('');
  const [sucesso, setSucesso] = useState('');

  async function enviarMensagem(e) {
    e.preventDefault();

    if (!nome.trim() || !email.trim() || !mensagem.trim()) {
      setErro('Preencha todos os campos');
      return;
    }

    try {
      const docRef = await addDoc(collection(db, "mensagens"), {
        nome: nome,
        email: email,
        mensagem: mensagem
      });
      setSucesso('Mensagem enviada com sucesso!');
      setNome('');
      setEmail('');
      setMensagem('');
    } catch (error) {
      setErro('Erro ao enviar mensagem');
    }
  }

  return (
    <main className="mt-4">
      <Container>
        <h1>Contato</h1>
        <hr />
        <Form onSubmit={enviarMensagem}>
          <Form.Group className="mb-3" controlId="formBasicNome">
            <Form.Label>Nome</Form.Label>
            <Form.Control type="text" placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicMensagem">
            <Form.Label>Mensagem</Form.Label>
            <Form.Control as="textarea" rows={3} value={mensagem} onChange={(e) => setMensagem(e.target.value)} />
          </Form.Group>
          <Button variant="outline-primary" type="submit">
            Enviar
          </Button>
          {erro && <Alert variant="danger" className="mt-3">{erro}</Alert>}
          {sucesso && <Alert variant="success" className="mt-3">{sucesso}</Alert>}
        </Form>
        <hr />
        <section className="botoes ms-auto">
          <Button className="mt-1 me-1" variant="outline-light" as={Link} to='/' >Inicio</Button>
          <Button className="mt-1 me-1" variant="outline-light" as={Link} to='/ajuda' >Ajuda</Button>
        </section>
      </Container>
    </main>
  );
}
