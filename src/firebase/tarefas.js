import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, query, updateDoc, where } from "firebase/firestore";
import { db } from "./config";

// coleção de mensagens da pagina contato. duvidas e sugestões para o site.
export const mensagensCol = collection(db, "mensagens");

export async function addMensagem(data) {
    await addDoc(mensagensCol, data);
}

export async function getMensagens() {
    const snapshot = await getDocs(mensagensCol);
    const mensagens = [];
    snapshot.forEach(doc => {
        mensagens.push({ ...doc.data(), id: doc.id });
    });

    return mensagens;
}

export async function getMensagem(id) {
    const mensagemDoc = doc(mensagensCol, id);
    const snapshot = await getDoc(mensagemDoc);

    return snapshot.data();
}

export async function getMensagensUsuario(idUsuario) {
    const filtro = query(mensagensCol, where("idUsuario", "==", idUsuario));
    const snapshot = await getDocs(filtro);
    const mensagens = [];

    snapshot.forEach((doc) => {
        mensagens.push({ ...doc.data(), id: doc.id });
    });

    return mensagens;
}


export const filmesCol = collection(db, "filmes");

export async function addFilme(data) {
    await addDoc(filmesCol, data);
}

export async function getFilmes() {
    const snapshot = await getDocs(filmesCol);
    const filmes = [];
    snapshot.forEach(doc => {
        filmes.push({ ...doc.data(), id: doc.id })
    });

    return filmes;
}

export async function deleteFilme(id) {
    const filmeDoc = doc(filmesCol, id);
    await deleteDoc(filmeDoc);
}

export async function getFilme(id) {
    const filmeDoc = doc(filmesCol, id);
    const snapshot = await getDoc(filmeDoc);

    return snapshot.data();
}

export async function updateFilme(id, data) {
    const filmeDoc = doc(filmesCol, id);
    await updateDoc(filmeDoc, data);
}

export async function getFilmesUsuario(idUsuario) {
    const filtro = query(filmesCol, where("idUsuario", "==", idUsuario));
    const snapshot = await getDocs(filtro);
    const filmes = [];

    snapshot.forEach((doc) => {
        filmes.push({ ...doc.data(), id: doc.id });
    });

    return filmes;
}
