import { Badge, Button, Card, Container } from "react-bootstrap";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { deleteFilme, getFilmesUsuario } from "../firebase/tarefas";
import { UsuarioContext } from "../contexts/UsuarioContext";
import { useState, useEffect, useContext } from "react";
import Loader from "../components/Loader";
import toast from "react-hot-toast";


function Catalogo() {
    const [filmes, setFilmes] = useState(null);
    const navigate = useNavigate();
    const usuario = useContext(UsuarioContext);
    
    function carregarFilmes() {
        if(usuario) {
            getFilmesUsuario(usuario.uid).then((resultados) => {
                console.log(resultados);
                setFilmes(resultados);
            })
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
            <Container className="mt-2">
                <h1 className="m-5">Seu catálogo de filmes</h1>
                <Link className="btn btn-outline-primary ms-5" to="/filmes/adicionar">Adicionar filme</Link>
                {filmes ? <section className="mt-3">
                    {filmes.map((filme) => {
                        return <Card key={filme.id} className="m-5">
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
                            <Button variant="outline-primary" onClick={() => {
                            navigate(`/filmes/editar/${filme.id}`);
                            }}>Editar</Button>
                            <Button variant="outline-secondary" onClick={() => deletarFilme(filme.id)}>Excluir</Button>
                        </Card>
                    })}
                </section> : <Loader />}
            </Container>
        </main>
    );
}


export default Catalogo;