import mysql from "mysql2/promise";

export const pool = mysql.createPool({
  host: "localhost",
  user: "appuser",        // novo usuário
  password: "senhaSegura",// mesma senha que você definiu
  database: "portal_alunos"
});
