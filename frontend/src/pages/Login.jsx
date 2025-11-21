import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";
import "../styles/Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();
    try {
      const { data } = await api.post("/usuarios/login", { email, senha });
      localStorage.setItem("token", data.token);
      alert("Login realizado com sucesso!");
      navigate("/tarefas"); // redireciona para Minhas Tarefas
    } catch (err) {
      alert("Erro ao logar: " + (err.response?.data?.erro || err.message));
    }
  }

  return (
    <form className="login-form" onSubmit={handleLogin}>
      <h2>Login</h2>
      <input
        className="login-input"
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        className="login-input"
        type="password"
        value={senha}
        onChange={e => setSenha(e.target.value)}
        placeholder="Senha"
      />
      <button className="login-button" type="submit">Entrar</button>
    </form>
  );
}
