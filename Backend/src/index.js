import express from "express";
import cors from "cors";
import usuarios from "./routes/usuarios.js";
import tarefas from "./routes/tarefas.js";
import vagas from "./routes/vagas.js";
import dotenv from "dotenv";
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/usuarios", usuarios);
app.use("/api/tarefas", tarefas);
app.use("/api/vagas", vagas);

app.listen(3001, () => console.log("API rodando na porta 3001 🚀"));
