import { useState } from "react";
import "../styles/MinhasTarefas.css";

export default function MinhasTarefas() {
  const [tasks, setTasks] = useState([
    { id: 1, titulo: "Atualizar currículo", concluida: false },
    { id: 2, titulo: "Enviar candidatura", concluida: true },
  ]);
  const [newTask, setNewTask] = useState("");
  const [editId, setEditId] = useState(null);
  const [editTitle, setEditTitle] = useState("");

  // Adicionar tarefa
  function addTask(e) {
    e.preventDefault();
    if (!newTask.trim()) return;
    setTasks([...tasks, { id: Date.now(), titulo: newTask, concluida: false }]);
    setNewTask("");
  }

  // Alternar concluída
  function toggleTask(id) {
    setTasks(tasks.map(t => 
      t.id === id ? { ...t, concluida: !t.concluida } : t
    ));
  }

  // Editar título
  function startEdit(task) {
    setEditId(task.id);
    setEditTitle(task.titulo);
  }

  function saveEdit(id) {
    setTasks(tasks.map(t => 
      t.id === id ? { ...t, titulo: editTitle } : t
    ));
    setEditId(null);
    setEditTitle("");
  }

  return (
    <div className="tarefas-container">
      <h2>Minhas Tarefas</h2>

      <form onSubmit={addTask} className="tarefas-form">
        <input
          value={newTask}
          onChange={e => setNewTask(e.target.value)}
          placeholder="Nova tarefa"
        />
        <button type="submit">Adicionar</button>
      </form>

      <ul className="tarefas-list">
        {tasks.map(task => (
          <li key={task.id} className={task.concluida ? "concluida" : ""}>
            {editId === task.id ? (
              <>
                <input
                  value={editTitle}
                  onChange={e => setEditTitle(e.target.value)}
                />
                <button onClick={() => saveEdit(task.id)}>Salvar</button>
              </>
            ) : (
              <>
                <span onClick={() => toggleTask(task.id)}>
                  {task.titulo}
                </span>
                <button onClick={() => startEdit(task)}>Editar</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
