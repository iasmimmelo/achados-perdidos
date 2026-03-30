import { useContext } from "react";
import { ItemContext } from "../context/ItemContext";

export default function Item({ item, user }) {
  const { remover } = useContext(ItemContext);

  const numero = item.contato.replace(/\D/g, "");
  const mensagem = encodeURIComponent("Olá! Vi seu item no Achados+");

  return (
    <div className="card">
      {item.imagem && <img src={item.imagem} alt="" />}

      <h3>{item.titulo}</h3>
      <p>📍 {item.local}</p>
      <p>🔖 {item.tipo}</p>

      <p><strong>{item.nome}</strong></p>

      <a href={`https://wa.me/55${numero}?text=${mensagem}`} target="_blank">
        <button className="btn-whatsapp">WhatsApp</button>
      </a>

      <p>{item.comentario}</p>

      {user?.uid === item.uid && (
        <button className="btn-delete" onClick={() => remover(item.id)}>
          Excluir
        </button>
      )}
    </div>
  );
}