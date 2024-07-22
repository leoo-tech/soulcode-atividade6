import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, query, updateDoc, where } from "firebase/firestore";
import { db } from "./config";

export const filmesCol = collection(db,"filmes");

export async function addFilme(data) {
    await addDoc(filmesCol, data);
}

export async function getFilmes() {
    const snapshot = await getDocs(filmesCol);
    const filmes = [];
    snapshot.forEach(doc => {
        filmes.push({...doc.data(), id: doc.id })
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
        filmes.push({...doc.data(), id: doc.id});
    });

    return filmes;
}

export async function getFilmesPorCategoriaUsuario(idUsuario, categoria) {
    const filtro = query(filmesCol, where("idUsuario", "==", idUsuario), where("categoria", "==", categoria));
    const snapshot = await getDocs(filtro);
    const filmes = [];

    snapshot.forEach(doc => {
        filmes.push({ ...doc.data(), id: doc.id });
    });

    return filmes;
}