import { useContext } from "react";
import { ItemContext } from "../context/ItemContext";
import Item from "./Item";

export default function Lista({ user }) {
  const { itens } = useContext(ItemContext);

  return (
    <div className="lista">
      {itens.map(item => (
        <Item key={item.id} item={item} user={user} />
      ))}
    </div>
  );
}