import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { Button, Form, Container } from 'react-bootstrap';
import { entrarGoogle, loginUsuario } from '../firebase/auth';

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  function entrar(data) {
    loginUsuario(data.email, data.senha)
      .then(() => {
        toast.success(`Bem-vindo(a)! ${data.nome}`);
        navigate('/filmes');
      })
      .catch(() => {
        toast.error('Email e/ou senha incorreta!');
      });
  }

  function handleEntrarGoogle() {
    entrarGoogle().then(() => {
      toast.success('Bem-vindo(a)!');
      navigate('/filmes');
    });
  }

  return (
    <Container className="d-flex flex-column align-items-center">
      <Form className="form-section w-50" onSubmit={handleSubmit(entrar)}>
        <h1>Login</h1>
        <hr />
        <Form.Group>
          <Form.Label htmlFor="email">Email</Form.Label>
          <Form.Control
            type="email"
            id="email"
            {...register('email', { required: 'O email é obrigatório' })}
          />
          {errors.email && (
            <Form.Text className="text-danger">{errors.email.message}</Form.Text>
          )}
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="senha">Senha</Form.Label>
          <Form.Control
            type="password"
            id="senha"
            {...register('senha', {
              required: 'A senha é obrigatória',
              minLength: { value: 6, message: 'Mínimo de 6 caracteres.' },
            })}
          />
          {errors.senha && (
            <Form.Text className="text-danger">{errors.senha.message}</Form.Text>
          )}
        </Form.Group>
        <div className="buttons">
          <Button variant="outline-light" className="mt-3 w-100" type="submit">
            Entrar
          </Button>
          <Button
            onClick={handleEntrarGoogle}
            variant="outline-danger"
            className="mt-3 w-100"
            type="button"
          >
            Entrar com o Google
          </Button>
          <Button
            onClick={() => navigate('/cadastro')}
            variant="outline-light"
            className="mt-3 w-100"
            type="button"
          >
            Cadastrar
          </Button>
        </div>
      </Form>
    </Container>
  );
}

export default Login;
