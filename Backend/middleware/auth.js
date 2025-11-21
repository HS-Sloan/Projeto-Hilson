// backend/src/middleware/auth.js
import jwt from "jsonwebtoken";

export function auth(req, res, next) {
  const header = req.headers.authorization || "";
  const token = header.replace("Bearer ", "");
  if (!token) return res.status(401).json({ erro: "Token ausente" });

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.user = payload; // guarda dados do usuário
    next();
  } catch {
    return res.status(401).json({ erro: "Token inválido" });
  }
}
