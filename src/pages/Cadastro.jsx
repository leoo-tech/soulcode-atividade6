import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { Button, Form, Container } from 'react-bootstrap';
import { cadastrarUsuario, entrarGoogle } from '../firebase/auth';

function Cadastro() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  function cadastrar(data) {
    cadastrarUsuario(data.nome, data.email, data.senha)
      .then(() => {
        toast.success(`Bem-vindo(a)! ${data.nome}`);
        navigate("/filmes");
      })
      .catch((error) => {
        toast.error("Um erro aconteceu: " + error.code);
      });
  }

  function handleEntrarGoogle() {
    entrarGoogle().then(() => {
      toast.success("Bem-vindo(a)!");
      navigate("/filmes");
    });
  }

  return (
    <Container className="d-flex flex-column align-items-center ">
      <Form className="form-section w-50" onSubmit={handleSubmit(cadastrar)}>
        <h1>Cadastro</h1>
        <hr />
        <Form.Group>
          <Form.Label htmlFor="nome">Nome</Form.Label>
          <Form.Control
            type="text"
            id="nome"
            {...register("nome", { required: true, maxLength: 150 })}
          />
          {errors.nome && <Form.Text className="text-danger">O nome é inválido!</Form.Text>}
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="email">Email</Form.Label>
          <Form.Control
            type="email"
            id="email"
            {...register("email", { required: true })}
          />
          {errors.email && <Form.Text className="text-danger">O email é inválido!</Form.Text>}
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="senha">Senha</Form.Label>
          <Form.Control
            type="password"
            id="senha"
            {...register("senha", { required: true, minLength: 6 })}
          />
          {errors.senha && <Form.Text className="text-danger">A senha é inválida!</Form.Text>}
        </Form.Group>
        <div className="buttons">
          <Button variant="outline-light" className="mt-1 w-100" type="submit">
            Cadastrar
          </Button>
          <Button
            onClick={handleEntrarGoogle}
            variant="outline-danger"
            className="mt-1 w-100"
            type="button"
          >
            Entrar com o Google
          </Button>
          {/* ja tem uma conta? faça o login! */}
          <Button
            onClick={() => navigate('/login')}
            variant="outline-light"
            className="mt-1 w-100"
            type="button"
          >
            Já tem uma conta? Faça o login!
          </Button>
        </div>
      </Form>
    </Container>
  );
}

export default Cadastro;
