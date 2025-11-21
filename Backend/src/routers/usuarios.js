import { Router } from "express";
import { pool } from "../db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const router = Router();

// Registrar
router.post("/registrar", async (req, res) => {
  const { nome, email, senha } = req.body;
  if (!nome || !email || !senha) {
    return res.status(400).json({ erro: "Todos os campos são obrigatórios" });
  }

  const hash = await bcrypt.hash(senha, 10);

  try {
    const [result] = await pool.query(
      "INSERT INTO usuarios (nome,email,senha) VALUES (?,?,?)",
      [nome, email, hash]
    );
    res.status(201).json({ id: result.insertId, nome, email });
  } catch {
    res.status(400).json({ erro: "Email já cadastrado" });
  }
});

// Login
router.post("/login", async (req, res) => {
  const { email, senha } = req.body;
  const [rows] = await pool.query("SELECT * FROM usuarios WHERE email=?", [email]);
  const user = rows[0];
  if (!user) return res.status(401).json({ erro: "Usuário não encontrado" });

  const ok = await bcrypt.compare(senha, user.senha);
  if (!ok) return res.status(401).json({ erro: "Senha incorreta" });

  const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, { expiresIn: "7d" });
  res.json({ token, usuario: { id: user.id, nome: user.nome, email: user.email } });
});

export default router;
