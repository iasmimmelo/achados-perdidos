import { useState } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import logo from "../assets/logo.png"; // logo do projeto

export default function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [modo, setModo] = useState("login");

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      let user;
      if (modo === "login") {
        user = await signInWithEmailAndPassword(auth, email, senha);
      } else {
        user = await createUserWithEmailAndPassword(auth, email, senha);
      }
      onLogin(user.user);
    } catch (err) {
      alert(err.message);
    }
  }

  return (
    <div className="login-form">
      <img src={logo} alt="Logo Achados+" className="logo" />

      <h2>{modo === "login" ? "Entrar" : "Cadastrar"}</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Ex: maria@email.com"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />

        <label htmlFor="senha">Senha</label>
        <input
          type="password"
          id="senha"
          placeholder="Ex: senha123"
          value={senha}
          onChange={e => setSenha(e.target.value)}
          required
        />

        <button type="submit">{modo === "login" ? "Entrar" : "Cadastrar"}</button>
      </form>

      <p
        onClick={() => setModo(modo === "login" ? "cadastro" : "login")}
        className="toggle"
      >
        {modo === "login" ? "Criar conta" : "Já tenho conta"}
      </p>
    </div>
  );
}