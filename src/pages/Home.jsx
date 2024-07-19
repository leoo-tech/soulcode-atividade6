import imagem from "../../public/images/imagem.jpg";

function Home(){
    
    return(
        <main className="home">
            <div>
                <img  className="imagem-home" src={imagem} alt="Imagem das Telas dos filmes" />
            </div>
        </main>
        
    );
}

export default Home;