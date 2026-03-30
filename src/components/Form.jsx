import { useState, useContext } from "react";
import { ItemContext } from "../context/ItemContext";

export default function Form({ user, logo }) {
  const { adicionar } = useContext(ItemContext);

  const [form, setForm] = useState({
    titulo: "",
    local: "",
    tipo: "perdido",
    nome: "",
    contato: "",
    comentario: "",
    imagem: ""
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.id]: e.target.value });
  }

  function handleFile(e) {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => setForm({ ...form, imagem: reader.result });
    if (file) reader.readAsDataURL(file);
  }

  async function handleSubmit() {
    if (!form.titulo || !form.local || !form.nome || !form.contato) {
      alert("Preencha tudo!");
      return;
    }
    await adicionar({ ...form, uid: user.uid });
    setForm({
      titulo: "",
      local: "",
      tipo: "perdido",
      nome: "",
      contato: "",
      comentario: "",
      imagem: ""
    });
  }

  return (
    <div className="form">
      {logo && <img src={logo} alt="Logo" className="logo-form" />}

      <label htmlFor="titulo">Objeto</label>
      <input id="titulo" placeholder="Ex: Carteira" value={form.titulo} onChange={handleChange} />

      <label htmlFor="local">Local</label>
      <input id="local" placeholder="Ex: Sala" value={form.local} onChange={handleChange} />

      <label htmlFor="tipo">Tipo</label>
      <select id="tipo" value={form.tipo} onChange={handleChange}>
        <option value="perdido">Perdido</option>
        <option value="achado">Achado</option>
      </select>

      <label htmlFor="nome">Seu nome</label>
      <input id="nome" placeholder="Ex: Maria da Silva" value={form.nome} onChange={handleChange} />

      <label htmlFor="contato">WhatsApp</label>
      <input id="contato" placeholder="Ex: 11999999999" value={form.contato} onChange={handleChange} />

      <label htmlFor="comentario">Comentário</label>
      <textarea id="comentario" placeholder="Ex: Na cadeira" value={form.comentario} onChange={handleChange}></textarea>

      <label htmlFor="imagem">Imagem (opcional)</label>
      <input type="file" onChange={handleFile} />

      <button onClick={handleSubmit}>Salvar</button>
    </div>
  );
}