import { Badge, Button, Card, Container, Dropdown } from "react-bootstrap";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { getFilmesUsuario, deleteFilme, getFilmesPorCategoriaUsuario } from "../firebase/tarefas";
import { UsuarioContext } from "../contexts/UsuarioContext";
import { useState, useEffect, useContext } from "react";
import Loader from "../components/Loader";
import toast from "react-hot-toast";

function Catalogo() {
    const [filmes, setFilmes] = useState(null);
    const [categoriaSelecionada, setCategoriaSelecionada] = useState(null);
    const navigate = useNavigate();
    const usuario = useContext(UsuarioContext);

    async function carregarFilmes(categoria = null) {
        if (usuario) {
            try {
                let filmesCarregados = [];

                if (categoria) { 
                    filmesCarregados = await getFilmesPorCategoriaUsuario(usuario.uid, categoria); // se o usuário escolher para filtrar exibe só a categoria escolhida
                } else {
                    filmesCarregados = await getFilmesUsuario(usuario.uid);
                }

                setFilmes(filmesCarregados);
            } catch (error) {
                console.error("Erro ao carregar filmes:", error);
            }
        }
    }

    function deletarFilme(id) {
        const deletar = confirm("Deseja realmente deletar este filme?");
        if(deletar) {
            deleteFilme(id).then(() => {
                toast.success("Filme removido!");
                carregarFilmes();
            })
        }
    }

    useEffect(() => {
        carregarFilmes();
    }, []);

    if(usuario === null) {
        return<Navigate to="/login"/>
    }

    return (
        <main>
            <Container>
                <h1 className="m-5">Seu catálogo de filmes</h1>
                <Link className="btn btn-outline-primary ms-5" to="/filmes/adicionar">Adicionar filme</Link>

                {/* Filtro para selecionar os filmes por categoria */}
                <Dropdown className="ms-5 mt-3">
                    <Dropdown.Toggle variant="outline-primary" id="dropdown-basic">
                        Filtrar por Categoria
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item onClick={() => {
                            setCategoriaSelecionada(null);
                            carregarFilmes();
                        }}>Todos</Dropdown.Item>
                        <Dropdown.Item onClick={() => {
                            setCategoriaSelecionada("Ação");
                            carregarFilmes("Ação");
                        }}>Ação</Dropdown.Item>
                        <Dropdown.Item onClick={() => {
                            setCategoriaSelecionada("Aventura");
                            carregarFilmes("Aventura");
                        }}>Aventura</Dropdown.Item>
                        <Dropdown.Item onClick={() => {
                            setCategoriaSelecionada("Comédia");
                            carregarFilmes("Comédia");
                        }}>Comédia</Dropdown.Item>                        
                        <Dropdown.Item onClick={() => {
                            setCategoriaSelecionada("Documentário");
                            carregarFilmes("Documentário");
                        }}>Documentário</Dropdown.Item>
                        <Dropdown.Item onClick={() => {
                            setCategoriaSelecionada("Drama");
                            carregarFilmes("Drama");
                        }}>Drama</Dropdown.Item>
                        <Dropdown.Item onClick={() => {
                            setCategoriaSelecionada("Ficção Científica");
                            carregarFilmes("Ficção Científica");
                        }}>Ficção</Dropdown.Item>
                        <Dropdown.Item onClick={() => {
                            setCategoriaSelecionada("Infantil/Desenho");
                            carregarFilmes("Infantil/Desenho");
                        }}>Infantil/Desenho</Dropdown.Item>
                        <Dropdown.Item onClick={() => {
                            setCategoriaSelecionada("Musical");
                            carregarFilmes("Musical");
                        }}>Musical</Dropdown.Item>
                        <Dropdown.Item onClick={() => {
                            setCategoriaSelecionada("Romance");
                            carregarFilmes("Romance");
                        }}>Romance</Dropdown.Item>
                        <Dropdown.Item onClick={() => {
                            setCategoriaSelecionada("Suspense");
                            carregarFilmes("Suspense");
                        }}>Suspense</Dropdown.Item>
                        <Dropdown.Item onClick={() => {
                            setCategoriaSelecionada("Terror");
                            carregarFilmes("Terror");
                        }}>Terror</Dropdown.Item>       
                    </Dropdown.Menu>
                </Dropdown>

                {filmes ? <section className="mt-3">
                    {filmes.map((filme) => {
                        return <Card key={filme.id} className="m-5 p-3">
                            <Card.Body>
                                <Card.Title>{filme.titulo}</Card.Title>
                                <Card.Text>{filme.diretor}</Card.Text>
                                <Badge bg="dark">{new Date(filme.dataLancamento).toLocaleDateString()}</Badge>
                                <Card.Text>{filme.categoria}</Card.Text>
                                <div className="mb-2">
                                    {filme.assistido ? 
                                    <Badge pill bg="success">Assistido</Badge>
                                    : <Badge pill bg="danger">Quero assistir</Badge>}
                                </div>
                            </Card.Body>
                            <div className="d-flex flex-wrap grid gap-3">
                                <Button variant="outline-primary" 
                                    onClick={() =>
                                    navigate(`/filmes/editar/${filme.id}`)}
                                    >Editar
                                </Button>
                                <Button variant="outline-secondary" 
                                    onClick={() => 
                                    deletarFilme(filme.id)}
                                    >Excluir
                                </Button>
                            </div>
                        </Card>
                    })}
                </section> : <Loader />}
            </Container>
        </main>
    );
}


export default Catalogo;