import { createContext, useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs, addDoc, deleteDoc, doc, getDoc } from "firebase/firestore";

export const ItemContext = createContext();

export function ItemProvider({ children }) {
  const [itens, setItens] = useState([]);

  async function listar() {
    const snapshot = await getDocs(collection(db, "itens"));
    const lista = [];
    snapshot.forEach(doc => lista.push({ id: doc.id, ...doc.data() }));
    setItens(lista);
  }

  async function adicionar(item) {
    await addDoc(collection(db, "itens"), item);
    listar();
  }

  async function remover(id) {
    await deleteDoc(doc(db, "itens", id));
    listar();
  }

  useEffect(() => {
    listar();
  }, []);

  return (
    <ItemContext.Provider value={{ itens, adicionar, remover }}>
      {children}
    </ItemContext.Provider>
  );
}