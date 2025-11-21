import { Link } from "react-router-dom";
import "../styles/Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2>Portal Alunos</h2>
      <div className="navbar-links">
        <Link to="/login">Login</Link>
        <Link to="/register">Cadastro</Link>
        <Link to="/dashboard">Dashboard</Link>
      </div>
    </nav>
  );
}
