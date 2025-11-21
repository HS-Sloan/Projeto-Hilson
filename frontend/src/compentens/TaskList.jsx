import { useState } from "react";
import "../styles/TaskList.css";

export default function TaskList() {
  const [tasks, setTasks] = useState([
    { id: 1, titulo: "Atualizar currículo", status: "pendente" },
    { id: 2, titulo: "Enviar candidatura", status: "em andamento" },
  ]);

  return (
    <div className="task-list">
      <h2>Minhas Tarefas</h2>
      <ul>
        {tasks.map(t => (
          <li key={t.id} className={`task-${t.status}`}>
            {t.titulo} - {t.status}
          </li>
        ))}
      </ul>
    </div>
  );
}
