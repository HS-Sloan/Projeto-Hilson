import { useState } from "react";
import api from "../api";
import "../styles/Register.css";

export default function Register() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  async function handleRegister(e) {
    e.preventDefault();
    try {
      const { data } = await api.post("/usuarios/registrar", { nome, email, senha });
      alert("Usuário registrado: " + data.nome);
    } catch (err) {
      alert("Erro ao registrar: " + (err.response?.data?.erro || err.message));
    }
  }

  return (
    <form className="register-form" onSubmit={handleRegister}>
      <h2>Cadastro</h2>
      <input className="register-input" value={nome} onChange={e => setNome(e.target.value)} placeholder="Nome" />
      <input className="register-input" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
      <input className="register-input" type="password" value={senha} onChange={e => setSenha(e.target.value)} placeholder="Senha" />
      <button className="register-button" type="submit">Registrar</button>
    </form>
  );
}
