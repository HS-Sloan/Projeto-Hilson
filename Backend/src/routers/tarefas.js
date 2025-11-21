import { Router } from "express";
import { pool } from "../db.js";
import jwt from "jsonwebtoken";

const router = Router();

// Middleware para verificar token
function auth(req, res, next) {
  const header = req.headers.authorization || "";
  const token = header.replace("Bearer ", "");
  if (!token) return res.status(401).json({ erro: "Token ausente" });

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.user = payload;
    next();
  } catch {
    return res.status(401).json({ erro: "Token inválido" });
  }
}

// Listar tarefas do usuário logado
router.get("/", auth, async (req, res) => {
  const [rows] = await pool.query("SELECT * FROM tarefas WHERE usuario_id=?", [req.user.id]);
  res.json(rows);
});

// Criar tarefa
router.post("/", auth, async (req, res) => {
  const { titulo, descricao } = req.body;
  const [result] = await pool.query(
    "INSERT INTO tarefas (titulo, descricao, usuario_id) VALUES (?,?,?)",
    [titulo, descricao, req.user.id]
  );
  res.json({ id: result.insertId, titulo, descricao, status: "pendente" });
});

export default router;
