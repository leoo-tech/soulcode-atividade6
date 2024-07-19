import { getFilme, updateFilme } from "../firebase/tarefas";
import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";



function EditarFilme() {
    const { register, handleSubmit, formState: {errors}, reset } = useForm();
    const navigate = useNavigate();
    const { id } = useParams();

    function carregarDado() {
        getFilme(id).then((filme) => {
            if(filme) {
                reset(filme);
            } else {
                navigate("filmes");
            }
        });
    }

    function atualizarFilme(data) {
        updateFilme(id, data).then(() => {
            toast.success("Filme atualizado com sucesso");
            navigate("/filmes");
        })
    }

    useEffect(()=> {
        carregarDado();
    }, []);


    return (
        <main>
            <form className="form-section" onSubmit={handleSubmit(atualizarFilme)}>
                <h1>Editar filme</h1>
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

export default EditarFilme;
