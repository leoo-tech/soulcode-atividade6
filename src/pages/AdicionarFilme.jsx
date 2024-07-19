import { addFilme } from "../firebase/tarefas";
import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Navigate, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UsuarioContext } from "../contexts/UsuarioContext";


function AdicionarFilme() {
    const { register, handleSubmit, formState: {errors}} = useForm();
    const navigate = useNavigate();
    const usuario = useContext(UsuarioContext);

    function salvarFilme(data) {
        data.idUsuario = usuario.uid;
        addFilme(data)
        .then(() => {
        toast.success("Filme adicionado com sucesso!");
        navigate("/filmes");
        })
        .catch(() => {
            toast.error("Erro ao adicionar o filme!");
        });
    }

    if(usuario === null) {
        return <Navigate to="/login"/>
    }

    return (
        <main>
            <form className="form-section" onSubmit={handleSubmit(salvarFilme)}>
                <h1>Adicionar filme</h1>
                <hr />
                <div>
                    <label htmlFor="titulo">Título</label>
                    <input 
                    type="text" 
                    id="titulo" 
                    className="form-control" 
                    {...register("titulo", {required: true, maxLength: 200})}
                    />
                    {errors.titulo && <small className="invalid">O título é inválido!</small>}
                </div>
                <div>
                <label htmlFor="diretor">Diretor</label>
                    <input 
                    type="text" 
                    id="diretor" 
                    className="form-control" 
                    {...register("diretor", {required: true, maxLength: 200})}
                    />
                    {errors.titulo && <small className="invalid">O !</small>}
                </div>
                <div>
                    <label htmlFor="dataConclusao">Ano de lançamento</label>
                    <input 
                    type="date" 
                    id="dataLancamento" 
                    className="form-control"
                    {...register("dataLancamento")} 
                    />
                </div>
                <div className="form-check">
                    <input 
                    type="checkbox" 
                    id="assistido" 
                    className="form-check-input" 
                    {...register("assistido")}
                    />
                    <label htmlFor="assistido" className="form-check-label">
                        Assistido
                    </label>
                </div>
                <div>
                    <label htmlFor="categoria">Categoria</label>
                    <select 
                    id="categoria" 
                    className="form-select"
                    {...register("categoria")}
                    >
                        <option value="Ação">Ação"</option>
                        <option value="Aventura">Aventura</option>
                        <option value="Documentário">Documentário</option>
                        <option value="Drama">Drama</option>
                        <option value="Ficção Científica">Ficção Científica</option>
                        <option value="Romance">Romance</option>
                        <option value="Terror">Terror</option>
                    </select>
                </div>
                <Button variant="outline-primary" className="w-100 mt-1" type="submit">
                    Salvar Filme
                </Button>
            </form>
        </main>
    );
}

export default AdicionarFilme;
