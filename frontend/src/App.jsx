import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import "./styles/App.css"; // estilo global opcional
import MinhasTarefas from "./pages/MinhasTarefas";

function PrivateRoute({ children }) {
  const token = localStorage.getItem("token");
  return token ? children : <Login />;
}
export default function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <div className="app-content">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/tarefas" element={<PrivateRoute><MinhasTarefas /></PrivateRoute>} />
            <Route path="/" element={<Login />} /> {/* rota padrão */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}
